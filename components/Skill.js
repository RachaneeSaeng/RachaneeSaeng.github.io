import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactHighcharts from 'react-highcharts';

const styles = {
  root: {
    backgroundColor: '#fefefe'
  }
};

class Skill extends React.Component {
  constructor(props) {
    super(props);

    this.getSize = this.getSize.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.genDataToPlot = this.genDataToPlot.bind(this);
    this.createChartConfig = this.createChartConfig.bind(this);
    this.setupChart = this.setupChart.bind(this);

    this.chartData = undefined;

    this.state = {
      currentSize: this.getSize(),
      chartConfig: undefined
    };

    this.xAxisLabels = {
      0: ' ',
      12.5: 'Front-End',
      37.5: 'Back-End',
      62.5: 'Methodology',
      87.5: 'Tools'
    };

    this.yAxisLabels = {
      0: ' ',
      20: 'Beginner',
      40: 'Familiar',
      60: 'Proficient',
      80: 'Expert',
      100: 'Master'
    };
  }

  componentDidMount() {
    this.setupChart();
    window.addEventListener('resize', this.updateSize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize() {
    var size = this.getSize();
    if (this.state.currentSize !== size && this.chartData) {
      this.setState({ currentSize: size });
      var dataToPlot = this.genDataToPlot(this.chartData, size);
      // update chart data
      var chart = this.refs.chart.getChart();
      chart.series[0].setData(dataToPlot, true);
      // consider to show/hide yAxis label
      if (size === 'S') chart.yAxis[0].update({ labels: { enabled: false } });
      else chart.yAxis[0].update({ labels: { enabled: true } });
    }
  }

  getSize() {
    var pageSize = window.innerWidth;
    if (pageSize < 600) return 'S';
    if (pageSize < 1000) return 'M';
    return 'L';
  }

  genDataToPlot(data, size) {
    var multiplyer = 1;
    if (size === 'S') multiplyer = 0.5;
    else if (size === 'M') multiplyer = 0.7;

    return data.filter(d => d.isShow).map(function(d) {
      return {
        name: d.name,
        x: d.x,
        y: d.y,
        marker: {
          symbol: d.marker.symbol,
          width: d.marker.width * multiplyer,
          height: d.marker.height * multiplyer
        }
      };
    });
  }

  createChartConfig(data, xLabels, yLabels) {
    return {
      chart: {
        type: 'scatter',
        width: null,
        height: null,
        animation: {
          duration: 100
        }
      },
      title: null,
      credits: {
        enabled: false
      },
      xAxis: {
        title: null,
        min: 0,
        max: 100,
        tickInterval: 12.5,
        labels: {
          formatter: function() {
            var value = xLabels[this.value];
            return value ? value : ' ';
          }
        },
        plotBands: [
          {
            color: '#FAFAFA',
            from: 0,
            to: 25
          },
          {
            color: '#F6F6F6',
            from: 25,
            to: 50
          },
          {
            color: '#FAFAFA',
            from: 50,
            to: 75
          },
          {
            color: '#F6F6F6',
            from: 75,
            to: 100
          }
        ]
      },
      yAxis: {
        title: null,
        min: 0,
        tickInterval: 20,
        labels: {
          enabled: this.state.currentSize === 'S' ? false : true,
          formatter: function() {
            var value = yLabels[this.value];
            return value ? value : ' ';
          }
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 1,
            states: {
              hover: {
                enabled: true
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b>'
          }
        }
      },
      series: [
        {
          name: 'Skill',
          color: 'rgba(96, 128, 153, .5)',
          data: data
        }
      ]
    };
  }

  setupChart() {
    fetch('data/skills_v3.json')
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            if (!this.chartData) {
              this.chartData = json.data;
              var dataToPlot = this.genDataToPlot(
                this.chartData,
                this.state.currentSize
              );
              var config = this.createChartConfig(
                dataToPlot,
                this.xAxisLabels,
                this.yAxisLabels
              );
              this.setState({ chartConfig: config });
            }
          });
        } else {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(
          'There has been a problem with your fetch operation: ' + error.message
        );
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classNames('content', classes.root)}>
        <Typography className="headerLine">Skills</Typography>
        <Grid item xs={12} md={8} className="contentLine">
          {this.state.chartConfig ? (
            <ReactHighcharts config={this.state.chartConfig} ref="chart" />
          ) : (
            <img src="images/preloader.gif" />
          )}
        </Grid>
      </div>
    );
  }
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skill);
