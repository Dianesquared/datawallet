import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '../home';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { saveToDb } from '../../database.js';
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

class AddBank extends Component {
    state = {
        _name: "",
        _type: "0",
        _accountNo: ""
        }

    handleChangeText(property, e){
        this.setState({
            [property]: e.target.value
        })
    }
    save(){
        var toBeInserted = {
                    name : this.state._name,
                    accountNo: this.state._accountNo,
                    type: this.state._type
                };
        var result = saveToDb('banks', toBeInserted, 
        (event) => {             
            this.props.history.push("/bank");
        });
    }
    render() {

        return (
            <div >
                <Home />
                <div className={this.props.classes.alignLeft} color="inherit">
                     <TextField
                    id="standard-name"
                    label="Bank Name"
                    className={this.props.classes.textField}
                    margin="normal"
                    onChange={this.handleChangeText.bind(this, "_name")}
                />
                <TextField
                           id="standard-name"
                           label="Account Number"
                           className={this.props.classes.textField}
                           margin="normal"
                           onChange={this.handleChangeText.bind(this, "_accountNo")}
                       />
                       <br></br>
                       <br></br>
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
                
                <Button variant="outlined"  onClick={this.save.bind(this)} component={Link} to="/addbank" className={this.props.classes.button}>
                    Save
                </Button>
            </div>

        )
    }
}

AddBank.props = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AddBank);