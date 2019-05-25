import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '../home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
//import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


const styles = theme => ({
    textField: {
        marginLeft: '${theme.spacing.unit * 1}px',
        marginRight: '${theme.spacing.unit * 1}px',
        width: 200,
    },
    button: {
        margin: '${theme.spacing.unit * 2}px',
    },
    input: {
        display: 'none',
    },
    
  group: {
    margin: '${theme.spacing.unit * 1}px',
  },
})

class AddBank extends Component {
    state = {
        _name: "",
        _type: "0",
        _accountNumber: ""
    }
    handleClickAdd(e){
        this.props.performClickAdd(this.state, "banks");
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
                Add Banks
                <div>
                <TextField
                    id="standard-name"
                    label="Bank Name"
                    className={this.props.classes.textField}
                    margin="normal"
                    onChange={this.handleChangeText.bind(this, "_name")}
                />
                <br></br>
                <br></br>
                <div>
                <FormLabel component="legend">Account Type</FormLabel>
                <RadioGroup
          aria-label="Account Type"
          name="type"
          className={this.props.classes.group}
                    onChange={this.handleChangeText.bind(this, "_type")}
        >
          <FormControlLabel value="0" control={<Radio />} label="Savings" />
          <FormControlLabel value="1" control={<Radio />} label="Current" />
        </RadioGroup>
                </div>
                <TextField
                    id="standard-name"
                    label="Account Number"
                    className={this.props.classes.textField}
                    margin="normal"
                    onChange={this.handleChangeText.bind(this, "_accountNumber")}
                />
                </div>
                <div>
                    <Button variant="contained" className={this.props.classes.button} onClick={this.handleClickAdd.bind(this)}>
                        Add
                          </Button></div>
            </div>

        )
    }
}

AddBank.props = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AddBank);