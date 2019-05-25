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

class EditBank extends Component {
    state = {
        _name: "",
        _type: "0",
        _accountNo: ""
        }

        
    componentDidMount() {
        var id = Number(this.props.match.params.id);

        let db = indexedDB.open("MyData");
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction(['banks'], "readonly");
            let store = tx.objectStore('banks');
            let selectedItem = store.get(id);
            console.log(selectedItem);
            selectedItem.onsuccess = (event) => {
                this.setState({
                    _name : event.target.result.name,
                    _accountNo : event.target.result.accountNo,
                    _type : event.target.result.type
                })
            }
        }
        db.onerror = (event) => {
            console.log(event.target.value);
        }
    }

    handleChangeText(property, e){
        this.setState({
            [property]: e.target.value
        })
    }
    
    save() {
        var id = Number(this.props.match.params.id);
        let db = indexedDB.open("MyData");
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction(['banks'], "readwrite");
            let store = tx.objectStore('banks');

            store.put({
                bankId : id,
                name: this.state._name,
                accountNo: this.state._accountNo,
                type: this.state._type
            });

            tx.oncomplete = (event) => {
                this.props.history.push("/bank");
                //e.preventDefault(); // iwas reload
            }

            tx.onerror = (event) => {

            }
        }
        db.onerror = (event) => {
            console.log(event.target.value);
        }
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
                    value={this.state._name}
                    onChange={this.handleChangeText.bind(this, "_name")}
                />
                <TextField
                           id="standard-name"
                           label="Account Number"
                           className={this.props.classes.textField}
                           margin="normal"
                           value={this.state._accountNo}
                           onChange={this.handleChangeText.bind(this, "_accountNo")}
                       />
                       <br></br>
                       <br></br>
                <FormLabel component="legend">Account Type</FormLabel>
                <RadioGroup
          aria-label="Account Type"
          name="type"
          className={this.props.classes.group}          
          value={this.state._type}
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

EditBank.props = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditBank);