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


const styles = theme => ({
    button: {
        margin: '${theme.spacing.unit * 2}px',
    },
    input: {
        display: 'none',
    },
})

class Bank extends Component {
    state = {
        action: 1,
        bank: [
            { id: 1, name: 'BDO', type: 'Savings', accountNumber: '09876543' },
            { id: 2, name: 'BPI', type: 'Current', accountNumber: '12345678' },
        ]
    }
    performClickAdd(list, type){
        this.bank.push(list,type);
    }

    render() {
        
        return (
            <div >
                <Home />
                Banks
                <List className={this.props.classes.root}>
                    {this.state.bank.map(item => (
                        <ListItem key={item} dense button>
                            <ListItemIcon>
                                <input type='radio' name='banks' value={item.id} />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />


                        </ListItem>
                    ))}
                        <Button variant="contained" className={this.props.classes.button}>
                            Add
                          </Button>
                </List>
            </div>

        )
    }
}

Bank.props = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Bank);