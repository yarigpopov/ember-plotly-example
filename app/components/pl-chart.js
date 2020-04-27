import Component from '@glimmer/component';
import { action } from "@ember/object";
import Plotly from 'plotly.js'

export default class PlChartComponent extends Component {
    @action
    drawChart(element) {
        Plotly.newPlot(element, [{
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16]
        }], {
            margin: { t: 0 }
        });
    }

}
