import React, { Component } from "react";
import { connect } from "react-redux";
// import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import { Grid } from "@material-ui/core";
import {Restore, Lock, TrendingUp, ViewList} from '@material-ui/icons';


const styles = {
  
};

class StatsPage extends Component {

    render() {
        return (
            <div>
                <h1>Statistics</h1>
                <h2>awesome stats here... ;)</h2>

                <section className="dashboard">
                    <Lock className="icon"/>
                    <br/>
                    <span className="dashboard-p">Create New Habit</span>
                </section>

            </div>
        )
    }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(withStyles(styles)(StatsPage));
