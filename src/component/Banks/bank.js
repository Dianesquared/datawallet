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
    paper: {
        padding: '${theme.spacing.unit * 3}px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    alignLeft: {
        marginLeft: "10px",
        marginBottom: "10px"
    }
})

class Bank extends Component {
    state = {
        banksDB: []
    }
    
    componentDidMount() {
        let db = indexedDB.open("MyData");
        db.onsuccess = (event) => {
            let tx = event.target.result.transaction(['banks'], "readonly");
            let store = tx.objectStore('banks');
            let selectadd = store.getAll();
            selectadd.onsuccess = (event) => {
                this.setState({
                    banksDB: event.target.result
                })
            }
        }
    }

    render() {

        return (
            <div >
                <Home />
                <div className={this.props.classes.alignLeft} color="inherit">
                    {this.state.banksDB.map(item => (
                        <ListItem key={item.bankId} dense button>
                            <ListItemIcon>
                                <input type='radio' name='banks' value={item.bankId} />
                            </ListItemIcon>
                            <Link to={'/editbank/' + item.bankId}>
                                    {item.name}
                                </Link>
                        </ListItem>
                    ))}
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