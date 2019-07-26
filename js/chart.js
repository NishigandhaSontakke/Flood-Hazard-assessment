/*Highcharts.chart('container1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Total Loss due to Flood'
    },
    xAxis: {
        categories: ['Loss in thousands'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Value (Thousand)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' thousand'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: -5,
        y: 50,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Residential',
        data: [56177237.653]
    }, {
        name: 'Commercial',
        data: [61051500.795]
    }]
});
*/
Highcharts.chart('container1', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Rainfall Event: Probability and Risk'
    },

    subtitle: {
        text: 'City of Ashland, WI'
    },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Rainfall'
        },
        labels: {
            format: '{value} in'
        },
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 2.63,
            label: {
                rotation: 0,
                
                style: {
                    fontStyle: 'italic'
                },
                text: 'Strom sewage capacity 2.63 inch/day'
            },
            zIndex: 3
        }]
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Probability'
        },
        labels: {
            format: '{value}'
        },
        maxPadding: 0.2
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><p>{point.country}</p></th></tr>' +
            '<tr><th>Rainfall:</th><td>{point.x}inch</td></tr>' +
            '<tr><th>Probability:</th><td>{point.y}</td></tr>' +
            '<tr><th>Cost Risk:</th><td>${point.z}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: [
            { x: 2, y: 0},
            { x: 4, y: 0.1, z: 8634422.02, name: '1/10yr', country: '1 in 10 year event' },
            { x: 6, y: 0.02, z: 1958800.409, name: '1/50yr', country: '1 in 50 year event' },
            { x: 7, y: 0.01, z: 995278.9484, name: '1/100yr', country: '1 in 100 year event' },
            { x: 8, y: 0}
        ]
    }]

});
$('.toggle').click(function() {
    $('.graph').toggle('slow');
});
