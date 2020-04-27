import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PlChartComponent extends Component {
    @service plotly;

    @action
    drawChart(element) {
        this.plotly._plotly.then(function (Plotly) {
                Plotly.newPlot(element, [{
                    x: [1, 2, 3, 4, 5],
                    y: [1, 2, 4, 8, 16]
                }], {
                    margin: { t: 0 }
                });
            })
        }


    }
