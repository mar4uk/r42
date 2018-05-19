const React = require('react');
const PropTypes = require('prop-types');
const moment = require('moment');

const chartjs = require('react-chartjs-2');
const {Bar} = chartjs;

const options = {
    animation: false,
    scales: {
        xAxes: [{
            type: 'time',
            stacked: true,
            time: {
                displayFormats: {
                    'millisecond': 'MMM DD',
                    'second': 'MMM DD',
                    'minute': 'MMM DD',
                    'hour': 'MMM DD',
                    'day': 'MMM DD',
                    'week': 'MMM DD',
                    'month': 'MMM DD',
                    'quarter': 'MMM DD',
                    'year': 'MMM DD',
                }
            }
        }]
    }
};

function getSelectionsData(selections) {
    return {
        labels: selections.map(({key}) => moment(key.timestamp)),
        datasets: [
            {
                label: 'segmentSize',
                type:'line',
                data: selections.map(({segmentSize}) => segmentSize),
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#EC932F',
            },
            {
                label: 'Added',
                type:'bar',
                data: selections.map(({totalCallsAdded}) => totalCallsAdded),
                fill: false,
                borderColor: '#8A2BE2',
                backgroundColor: '#8A2BE2',
            },
            {
                label: 'Removed',
                type:'bar',
                data: selections.map(({totalCallsRemoved}) => totalCallsRemoved),
                fill: false,
                borderColor: '#93AFAD',
                backgroundColor: '#93AFAD',
            }
        ]
    }
}

class Chart extends React.Component {
    render() {
        const {selections} = this.props;
        const data = getSelectionsData(selections);

        return (
            <div
                style={{
                    position: 'relative',
                    width: '800px'
                }}
            >
                <Bar
                    width={800}
                    height={500}
                    data={data}
                    options={options}
                />
            </div>
        );
    }
}

Chart.propTypes = {
    selections: PropTypes.array
}

module.exports = Chart;
