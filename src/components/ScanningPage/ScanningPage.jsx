import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = {
  
};

class ScanningPage extends Component {

    render() {
    return (
        <div>
            <h1>Scan Your Item</h1>
        </div>
    )
    }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ScanningPage));
