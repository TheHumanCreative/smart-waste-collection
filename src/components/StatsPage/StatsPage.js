import React, { Component } from "react";
import { connect } from "react-redux";
// import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// import { Grid } from "@material-ui/core";
import {Favorite, Sync, LocalFlorist, Delete, MonetizationOn, TrendingUp} from "@material-ui/icons";
// import {Chart} from "chart.js";
import {CountUp} from "countup.js";
import { Doughnut } from 'react-chartjs-2';

const styles = {
  
};

class StatsPage extends Component {

    render() {

        let demo = new CountUp('myTargetElement', 5817);
        if (!demo.error) {
          demo.start();
        } else {
          console.error(demo.error);
        }

        // let ctx = document.getElementById('donutChart').getContext('2d');;

        // let donutChart = new Chart(ctx, {
        //     type: 'doughnut',
        //     data: {
        //         labels: ['Recycling', 'Compost', 'Trash'],
        //         datasets: [{
        //             label: 'Items Sorted',
        //             data: [12, 19, 3],
        //             backgroundColor: [
        //                 '#008183',
        //                 '#549F93',
        //                 '#9FAF90'
        //             ],
        //         }]
        //     }
        // });

        return (
            <div>
                <h1>Statistics</h1>
                <h2>awesome stats here... ;)</h2>

                <section className="dashboard">
                    <Favorite className="icon"/>
                    <br/>
                    <span className="dashboard-p">Total Items Sorted: 34,689</span>
                </section>

                <section className="dashboard">
                    <Sync className="icon"/>
                    <br/>
                    <span className="dashboard-p">Recycled: 34,689</span>
                </section>

                <section className="dashboard">
                    <LocalFlorist className="icon"/>
                    <br/>
                    <span className="dashboard-p">Compost: 34,689</span>
                </section>

                <section className="dashboard">
                    <Delete className="icon"/>
                    <br/>
                    <span className="dashboard-p">Trash: 34,689</span>
                </section>

                <br></br>

                <div>
                    <Doughnut
                        width={400}
                        height={400}
                        options={{ maintainAspectRatio: false }}
                        data={{
                            labels: ['Recycling', 'Compost', 'Trash'],
                            datasets: [{
                                label: 'Items Sorted',
                                data: [12, 19, 3],
                                backgroundColor: [
                                    '#008183',
                                    '#549F93',
                                    '#9FAF90'
                                ],
                        }]
                    }} />

                </div>
                
                <br></br>

                <section className="dashboard">
                    <MonetizationOn className="icon"/>
                    <br/>
                    <span className="dashboard-p">Savings To-Date: $9,294</span>
                </section>

                <section className="dashboard">
                    <TrendingUp className="icon"/>
                    <br/>
                    <span className="dashboard-p">Projected Savings (next 12 months): $26,335</span>
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
