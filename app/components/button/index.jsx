const React = require('react');
const PropTypes = require('prop-types');

class Button extends React.Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    render() {
        const {
            onClick
        } = this.props;

        return (
            <button
                onClick={this._onClick}
            >
                {this.props.children}
            </button>
        );
    }

    _onClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
}

Button.propTypes = {
    onClick: PropTypes.func
}

module.exports = Button;
