import React, { Component } from "react";
import { connect } from "react-redux";
// import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import { Grid } from "@material-ui/core";

const styles = {
 
};


class SuggestedPage extends Component {
  render() {
    return (
      <div>
        <h1>Suggested Receptacle</h1>
        <h2>An Image of the suggested Receptacle</h2>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(withStyles(styles)(SuggestedPage));
