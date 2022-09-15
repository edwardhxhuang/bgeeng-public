var donut_data = [{
  values: [36.3, 27.4, 14.5, 9.2, 6.9, 5.7],
  labels: ['Less than 12 months', 'Between 1 and 3 years', 'Between 3 and 5 years', 'Between 5 and 10 years', 'Between 10 and 15 years', 'Greater than 15 years', 'Rest of World' ],
  marker: {
    colors: ['rgb(23, 0, 45)', 'rgb(255, 85, 0)', 'rgb(236, 0, 140)', 'rgb(74, 33, 95)', 'rgb(174, 200, 211)', 'rgb(82, 85, 90)']
  },
  hoverinfo: 'percent+label',
  textinfo: 'none',
  hole: .6,
  type: 'pie',
  rotation: 0
}];

var donut_layout = {
  title: 'Turnover by tenure',
  font: {
        family: 'Inter',
        color: 'white'
  },
  plot_bgcolor:"#261C34",
  paper_bgcolor:"#261C34",
  annotations: [
    {
      font: {
        size: 20,
      },
      showarrow: false,
      text: '',
      x: 0.5,
      y: 0.5
    }
  ],
  showlegend: true
};

var trace1 = {
  x: [10.5, 13.5, 24],
  y: ['Board, ELT and Geographic, Discipline and CSG leads', 'Shareholders','Employees'],
  name: 'Male',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: 'rgb(255, 110, 18)',
    width: 1
  }
};

var trace2 = {
  x: [89.5, 86.5, 76],
  y: ['Board, ELT and Geographic, Discipline and CSG leads', 'Shareholders','Employees'],
  name: 'Female',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: 'rgb(63, 122, 150)',
    width: 1
  }
};

var trace3 = {
  x: [15, 18, 26],
  y: ['Board, ELT and Geographic, Discipline and CSG leads', 'Shareholders', 'Employees'],
  name: "Industry Average",
  mode: 'markers',
  type: 'scatter',
  hoverlabel: {
    font: {
      family: 'Inter',
      color: 'black'
    }
  },
  hovertemplate: 'Industry average: %{x:,}%<extra></extra>',
  marker: {
    color: "rgb(210, 223, 228)",
    size: 8
  }
}

var data = [trace1, trace2, trace3];

var bar_layout = {
  title: 'Gender Breakdown',
  barmode: 'stack',
  bargap: 32,
  font: {
        family: 'Inter',
    color: "white"
  },
  plot_bgcolor:"#261C34",
  paper_bgcolor:"#261C34",
  margin: {
    l: 320,
    pad: 8
  }
  // },
  // annotations: [
  //   {
  //     x: 26,
  //     y: 'Employees',
  //     xref: 'x',
  //     yref: 'y',
  //     text: 'Industry Average',
  //     ax: 16,
  //     ay: 0,
  //     arrowhead: 6,
  //     xanchor: 'left',
  //     arrowcolor: "rgb(142, 112, 200)",
  //     arrowwidth: 2,
  //     font: {
  //         color: "white"
  //     }
  //   }
  // ]
};

Plotly.newPlot('donut', donut_data, donut_layout, );
Plotly.newPlot('bar', data, bar_layout);
