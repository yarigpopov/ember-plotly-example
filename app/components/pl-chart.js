import Component from '@glimmer/component';
import { action } from "@ember/object";
import Plotly from 'plotly.js'

export default class PlChartComponent extends Component {
    @action
    drawChart(element) {
        let _data = this.args.data;

        const externalData = [{
                value: this.args.dataValue,
                deltaReference: 200,
                titleText: "Revenue",
                gaugeRange: [null, 300],
                guageThreshold: 170,
                guageSteps: {
                    zero: 0,
                    one: 150,
                    two: 250
                },
                domainY: [0.08, 0.25]
            },
            {
                value: 35,
                deltaReference: 200,
                titleText: "Profit",
                gaugeRange: [null, 100],
                guageThreshold: 170,
                guageSteps: {
                    zero: 0,
                    one: 25,
                    two: 75
                },
                domainY: [0.4, 0.6]
            },
            {
                value: 220,
                deltaReference: 200,
                titleText: "Satisfaction",
                gaugeRange: [null, 300],
                guageThreshold: 210,
                guageSteps: {
                    zero: 0,
                    one: 150,
                    two: 250
                },
                domainY: [0.7, 0.9]
            }

        ]

        let data = externalData.map(i => ({
            type: "indicator",
            mode: "number+gauge+delta",
            value: i.value,
            delta: { reference: i.deltaReference },
            domain: { x: [0.25, 1], y: i.domainY },
            title: { text: i.titleText },
            gauge: {
                shape: "bullet",
                axis: { range: i.gaugeRange },
                threshold: {
                    line: { color: "1B1534", width: 5 },
                    thickness: 0.75,
                    value: i.guageThreshold
                },
                steps: [
                    { range: [i.guageSteps.zero, i.guageSteps.one], color: "#8A00E5" },
                    { range: [i.guageSteps.one, i.guageSteps.two], color: "#CF98FF" }
                ],
                bar: { color: "#1B1534" }
            }
        }))

        var layout = {
            width: 600,
            height: 250,
            margin: { t: 10, r: 25, l: 25, b: 10 }
        };
        Plotly.react(element, data, layout);
    }

}
