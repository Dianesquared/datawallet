import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '../home';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    button: {
        margin: '${theme.spacing.unit * 2}px',
    },
    input: {
        display: 'none',
    },
    paper: {
        padding: '${theme.spacing.unit * 3}px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    alignLeft:{
        marginLeft: '10px',
        textAlign:'left'
    }
})

class ViewPersonal extends Component {

    render() {

        return (
            <div >
                <Home />
                            <Typography variant="h6" className={this.props.classes.alignLeft} gutterBottom>
                                View Personal
                                </Typography>
                          <Button variant="contained" className={this.props.classes.button} >Add</Button>
                    
       

            </div>

        )
    }
}

ViewPersonal.props = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ViewPersonal);