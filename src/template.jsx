import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '../home';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const styles = theme => ({
    button: {
        margin: '${theme.spacing.unit * 2}px',
    },
    input: {
        display: 'none',
    },
    alignLeft: {
        marginLeft: "10px",
        marginBottom: "10px"
    }
})

class Bank extends Component {
    state = {
    }
    render() {

        return (
            <div >
                <Home />
                <div className={this.props.classes.alignLeft} color="inherit">
                    
                    <Button variant="outlined" component={Link} to="/addbank" className={this.props.classes.button}>
                    Add Item
                </Button>
                </div>
            </div>

        )
    }
}

Bank.props = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Bank);