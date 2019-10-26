import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import { Grid } from "@material-ui/core";

const styles = {};

class AdminPage extends Component {
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <h2>All options to check over the items scanned in will be able to be approved or denied to better the A.I. / Machine Learning.</h2>
        <div>
            <Button>Add</Button>
            <Button>Reject</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AdminPage));
