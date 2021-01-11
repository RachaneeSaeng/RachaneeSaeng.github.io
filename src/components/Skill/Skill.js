import preLoading from '../../images/preloader.gif';
import './Skill.scss';

import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactHighcharts from 'react-highcharts';

let skillData = [];
let currentSize = '';

function Skill() {
  const [chartConfig, setChartConfig] = useState();

  const xAxisLabels = {
    0: ' ',
    12.5: 'Front-End',
    37.5: 'Back-End',
    62.5: 'Infratstructure',
    87.5: 'Tools',
  };

  const yAxisLabels = {
    0: ' ',
    20: 'Beginner',
    40: 'Familiar',
    60: 'Proficient',
    80: 'Expert',
    100: 'Master',
  };

  useEffect(() => {
    currentSize = getSize();
    setupChart();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener('resize', updateSize);

    return function cleanup() {
      window.removeEventListener('resize', updateSize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function getSize() {
    var pageSize = window.innerWidth;
    if (pageSize < 640) return 'S';
    if (pageSize < 1280) return 'M';
    return 'L';
  }

  function updateSize() {
    var size = getSize();
    if (currentSize !== size && skillData.length > 0) {
      currentSize = size;
      plotChart(skillData, size);
    }
  }

  function genDataToPlot(data, size) {
    var multiplyer = 1;
    if (size === 'S') multiplyer = 0.5;
    else if (size === 'M') multiplyer = 0.7;

    return data
      .filter((d) => d.isShow)
      .map(function (d) {
        return {
          name: d.name,
          x: d.x,
          y: d.y,
          marker: {
            symbol: d.marker.symbol,
            width: d.marker.width * multiplyer,
            height: d.marker.height * multiplyer,
          },
        };
      });
  }

  function createChartConfig(data, xLabels, yLabels) {
    return {
      chart: {
        type: 'scatter',
        width: null,
        height: null,
        animation: {
          duration: 100,
        },
      },
      title: null,
      credits: {
        enabled: false,
      },
      xAxis: {
        title: null,
        min: 0,
        max: 100,
        tickInterval: 12.5,
        labels: {
          formatter: function () {
            var value = xLabels[this.value];
            return value ? value : ' ';
          },
        },
        plotBands: [
          {
            color: '#FAFAFA',
            from: 0,
            to: 25,
          },
          {
            color: '#F6F6F6',
            from: 25,
            to: 50,
          },
          {
            color: '#FAFAFA',
            from: 50,
            to: 75,
          },
          {
            color: '#F6F6F6',
            from: 75,
            to: 100,
          },
        ],
      },
      yAxis: {
        title: null,
        min: 0,
        tickInterval: 20,
        labels: {
          enabled: currentSize === 'S' ? false : true,
          formatter: function () {
            var value = yLabels[this.value];
            return value ? value : ' ';
          },
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 1,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
          states: {
            hover: {
              marker: {
                enabled: false,
              },
            },
          },
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b>',
          },
        },
      },
      series: [
        {
          name: 'Skill',
          color: 'rgba(96, 128, 153, .5)',
          data: data,
        },
      ],
    };
  }

  async function setupChart() {
    var response = await fetch('data/skills_v4.json');
    if (response && response.ok) {
      var json = await response.json();
      skillData = json.data;
      plotChart(skillData, currentSize);
    } else {
      console.log(response);
    }
  }

  function plotChart(data, size) {
    var dataToPlot = genDataToPlot(data, size);
    var config = createChartConfig(dataToPlot, xAxisLabels, yAxisLabels);
    setChartConfig(config);
  }

  return (
    <div className="skill content">
      <Typography className="headerLine">Skills</Typography>
      <Grid item xs={12} md={8} className="contentLine">
        {chartConfig !== undefined ? (
          <ReactHighcharts config={chartConfig} />
        ) : (
          <img src={preLoading} alt="loaging..." />
        )}
      </Grid>
    </div>
  );
}

export default Skill;
