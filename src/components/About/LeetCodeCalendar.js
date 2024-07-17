import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './App.css';
// D:\Portfolio\src\App.css
import { Row } from "react-bootstrap";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const LeetCodeCalendar = ({ username, blockSize, blockMargin, color, fontSize }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
        console.log('API response:', response); // Log the entire response

        if (response.data && response.data.status === "success") {
          // For demonstration purposes, generate mock daily submission data
          const mockData = generateMockData(response.data.totalSolved);
          setData(mockData);
        } else {
          setError('No data found');
        }
      } catch (error) {
        console.error("Error fetching LeetCode data", error);
        setError('Error fetching data');
      }
    };

    fetchLeetCodeData();
  }, [username]);

  const generateMockData = (totalSolved) => {
    const data = [];
    const currentDate = new Date();
    for (let i = 0; i < 365; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      data.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 5) // Random submissions count for demo
      });
    }
    return data;
  };

  const renderCalendar = () => {
    if (error) {
      return <div>{error}</div>;
    }
    if (!data.length) {
      return <div>Loading...</div>;
    }

    return (
      <CalendarHeatmap
        startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
        endDate={new Date()}
        values={data}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${Math.min(4, Math.ceil(value.count / 5))}`;
        }}
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${value.date} has count: ${value.count}`
          };
        }}
      />
    );
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {renderCalendar()}
      </div>
    </Row>
  );
};

export default LeetCodeCalendar;
