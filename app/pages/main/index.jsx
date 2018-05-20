const React = require('react');
const {connect} = require('react-redux');
const Chart = require('app/components/chart');

const {
    loadSelections
} = require('app/actions/selections');

class MainPage extends React.Component {
    componentDidMount() {
        const socket = io();

        socket.on('selection_added', ({selection}) => {
            this.props.dispatch(loadSelections(selection));
        });
    }

    render() {
        return (
            <div>
                <Chart selections={this.props.selections} />
            </div>
        );
    }
}

module.exports = connect((state) => {
    return {
        selections: state.selections
    }
})(MainPage);
