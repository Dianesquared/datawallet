import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '../home';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


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
    alignLeft: {
        marginLeft: '10px',
        textAlign: 'left'
    }
})

class ViewGovernment extends Component {
    state={
        _tin:"",
        _sss:"",
        _phnum:""
    }

    handleChangeText(property, e){
        this.setState({
            [property]: e.target.value
        })
    }

    render() {
        return (
            <div >
                <Home />

<div className={this.props.classes.alignLeft}>
                <Typography variant="h6"  gutterBottom>
                            View Government
                          
                            </Typography>  
                <TextField
                    id="standard-name"
                    label="TIN"
                    className={this.props.classes.textField}
                    margin="normal"
                    onChange={this.handleChangeText.bind(this, "_tin")}
                />
                <TextField
                    id="standard-name"
                    label="SSS No."
                    className={this.props.classes.textField}
                    margin="normal"
                    onChange={this.handleChangeText.bind(this, "_sss")}
                />
                <TextField
                    id="standard-name"
                    label="Philhealth No."
                    className={this.props.classes.textField}
                    margin="normal"
                    onChange={this.handleChangeText.bind(this, "_phnum")}
                />
                    
                        <Button variant="contained" className={this.props.classes.button} >Add</Button>
                      
                        </div>
            </div>

        )
    }
}

ViewGovernment.props = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ViewGovernment);