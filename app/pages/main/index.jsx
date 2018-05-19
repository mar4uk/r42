const React = require('react');
const {connect} = require('react-redux');
const Chart = require('app/components/chart');

const {
    loadSelections
} = require('app/actions/selections');

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this._receiveSelections = this._receiveSelections.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            this._receiveSelections();
        }, 1000);
    }

    render() {
        return (
            <div>
                <Chart selections={this.props.selections} />
            </div>
        );
    }

    _receiveSelections() {
        this.props.dispatch(loadSelections());
    }
}

module.exports = connect((state) => {
    return {
        selections: state.selections
    }
})(MainPage);

