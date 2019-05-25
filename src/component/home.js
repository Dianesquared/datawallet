import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Assignment_Ind from '@material-ui/icons/AssignmentInd';
import CreditCard from '@material-ui/icons/CreditCard';
import CardTravel from '@material-ui/icons/CardTravel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: '${theme.spacing.unit * 3}px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
})

class Home extends Component {
    handleClick(page){
        this.props.history.push("/"+page);
    }
    render() {
        return (
            <div className={this.props.classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Paper className={this.props.classes.paper}>
                            <BottomNavigation showLabels
                                className={this.props.classes.root}>
                                <BottomNavigationAction label="Personal" icon={<Assignment_Ind />} />
                                <BottomNavigationAction label="Banks" icon={<CreditCard />} onClick={this.handleClick.bind(this, "bank")} />
                                <BottomNavigationAction label="Government" icon={<CardTravel />} />
                            </BottomNavigation>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

Home.props = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);