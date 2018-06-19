const React = require('react');
const {connect} = require('react-redux');
const openSocket = require('socket.io-client');
const Chart = require('app/components/chart');
const Button = require('app/components/button');

const socket = openSocket('http://localhost:3000');

const {
    loadSelections,
    fetchSelections
} = require('app/actions/selections');

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this._onStartClick = this._onStartClick.bind(this);
        this._onStopClick = this._onStopClick.bind(this);
    }

    componentDidMount() {
        socket.on('selections_added', ({selections}) => {
            this.props.dispatch(loadSelections(selections));
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
        this.props.dispatch(fetchSelections());
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
