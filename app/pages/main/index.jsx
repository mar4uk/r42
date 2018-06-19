const React = require('react');
const {connect} = require('react-redux');
const openSocket = require('socket.io-client');
const Chart = require('app/components/chart');
const Button = require('app/components/button');

const socket = openSocket('http://localhost:3000');

const {
    loadSelections
} = require('app/actions/selections');

class MainPage extends React.Component {
    componentDidMount() {
        socket.on('selection_added', ({selection}) => {
            this.props.dispatch(loadSelections(selection));
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this._onStartClick}>
                    Старт
                </Button>
                <Button onClick={this._onStopClick}>
                    Стоп
                </Button>
                <Chart selections={this.props.selections} />
            </div>
        );
    }

    _onStartClick() {
        socket.open();
    }

    _onStopClick() {
        socket.close();
    }
}

module.exports = connect((state) => {
    return {
        selections: state.selections
    }
})(MainPage);
