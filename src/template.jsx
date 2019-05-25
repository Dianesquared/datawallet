import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    myClass: {
        padding: 20,
        fontsize: 24,
        fontweight: 'bold'
    }
}

class Template extends Component {
    render() {
        return (
            <div>
                <div classname={this.props.classes.myClass}></div>
            </div>
        )
    }
}

Template.props = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Template);