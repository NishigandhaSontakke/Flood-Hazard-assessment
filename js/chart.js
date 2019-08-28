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
            },
            pointStart: 0
        }
    },

    series: [{
        data: [
            { x: 2, y: 1,z:0},
            { x: 4, y: 0.1, z: 8634422.02, name: '1/10yr', country: '1 in 10 year event' },
            { x: 6, y: 0.02, z: 1958800.409, name: '1/50yr', country: '1 in 50 year event' },
            { x: 7, y: 0.01, z: 995278.9484, name: '1/100yr', country: '1 in 100 year event' }
         
        ]
    }]

});
$('.toggle').click(function() {
    $('.graph').toggle('slow');
});


dragElement(document.getElementById("graph"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



Highcharts.chart('containerGraph', {

    title: {
        text: 'POINT PRECIPITATION FREQUENCY'
    },


    yAxis: {
        title: {
            text: 'Precipitation in Inch'
        }
    },
    legend:  { title: {
        text: 'Average recurrence interval',
        style: {
            fontStyle: 'bold'
        }
    },
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 0
        }
    },

    xAxis: {
        categories: ['5-mins', '10-mins', '15-mins', '30-mins', '60-mins', '2-hr', '3-hr', '6-hr', '12-hr', '24-hr', '2-days', '3-days','4-days','7-days','10-days','20-days','30-days','45-days','60-days'],
        title: {
            text: 'Duration'
        },
        labels: {
            style: {
                color: 'black'
            }
        }
    },

    series: [{
        name: '1000 year',
        data: [1.22, 1.79, 2.19, 3, 4, 5.01, 5.88, 7.73,9.98,12.2,13.9,14.5,14.8,15.3,15.6,16.4,17.5,19.7,22.1]
    },{
        name: '500 year',
        data: [1.11, 1.63, 1.99, 2.72, 3.62, 4.51, 5.27, 6.83,8.72,10.6,12,12.5,12.7,13.2,13.6,14.9,16.4,18.8,21.2]
    },{
        name: '200 year',
        data: [0.969, 1.42, 1.73, 2.37, 3.13, 3.89, 4.5, 5.73,7.19,8.65,9.79,10.2,10.4,10.8,11.2,13,14.8,17.5,19.9]
    },{
        name: '100 year',
        data: [0.865, 1.27, 1.54, 2.12,2.78, 3.44, 3.95, 4.96, 6.15,7.34,8.29,8.61,8.78,9.17,9.67,11.7,13.7,16.4,18.8]
    },{
        name: '50 year',
        data: [0.766, 1.12, 1.37, 1.87, 2.44, 3.01, 3.44, 4.26, 5.21,6.17,6.97,7.25,7.4,7.8,8.34,10.5,12.6,15.3,17.6]
    }, {
        name: '25 year',
        data: [0.67, 0.981, 1.2, 1.64, 2.12, 2.61, 2.95,3.62,4.37,5.14,5.8,6.06,6.22,6.63,7.2,9.44,11.5,14.2,16.4]
    }, {
        name: '10 year',
        data: [0.551, 0.806, 0.983, 1.34, 1.73, 2.11, 2.37, 2.87,3.42,4,4.53,4.78,4.95,5.42,6,8.17,10.1,12.6,14.6]
    }, {
        name: '5 year',
        
        data: [0.468,0.685,0.835,1.14, 1.45,1.77, 1.98,2.38,2.83, 3.31,3.78,4.03,4.23,4.76,5.34,7.35,9.12,11.4,13.3]
    }, {
        name: '2 year',
        data: [0.371, 0.544, 0.663, 0.9, 1.14, 1.38, 1.54, 1.85,2.22,2.63,3.06,3.34,3.58,4.2,4.77,6.46,7.94,9.87,11.6]
    },{
        name: '1 year',
        data: [0.315, 0.461, 0.562, 0.76, 0.958, 1.16, 1.29, 1.56,1.91,2.3,2.72,3.02,3.29,3.99,4.54,5.98,7.22,8.92,10.5]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: { title: {
                    text: 'Average recurrence interval',
                    style: {
                        fontStyle: 'bold'
                    }
                },
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
