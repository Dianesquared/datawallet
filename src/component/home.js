import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBox from '@material-ui/icons/AccountBox';
import AccountBalance from '@material-ui/icons/AccountBalance';
import CreditCard from '@material-ui/icons/CreditCard';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing.unit * 2,
    },
    title: {
        flexGrow: 1,
        textDecoration:"none"
    },
    alignLeft:{
        marginLeft:"10px",
        marginBottom:"10px"
    }
});

class Home extends Component {
    state={
        menu:false
    }

    handleMenu(e){
        let menuValue = this.state.menu;
        this.setState({
            menu: !menuValue
        })
    }
    render() {


        return (
            <div className={this.props.classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={this.handleMenu.bind(this)} edge="start" className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={this.props.classes.title} component={Link} to="/">
                            Data Wallet
                            </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer 
                    open={this.state.menu}
                    onClose={this.handleMenu.bind(this)}
                    onOpen={this.handleMenu.bind(this)}
                >
                    <List >  
                        <div className={this.props.classes.alignLeft} color="inherit">Directory</div>
                        <Divider></Divider>
                    <ListItem button key="Personal" component={Link} to="/personal" >
                                <ListItemIcon><AccountBox /></ListItemIcon>
                                <ListItemText primary="Personal" />
                            </ListItem>
                    <ListItem button key="Banks" component={Link} to="/bank" >
                                <ListItemIcon><CreditCard /></ListItemIcon>
                                <ListItemText primary="Banks" />
                            </ListItem>
                    <ListItem button key="Government" component={Link} to="/government" >
                                <ListItemIcon><AccountBalance /></ListItemIcon>
                                <ListItemText primary="Government" />
                            </ListItem>
                    </List>
                </SwipeableDrawer>
                        <div className={this.props.classes.alignLeft} color="inherit"></div>
            </div>

        )
    }
}

Home.props = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);