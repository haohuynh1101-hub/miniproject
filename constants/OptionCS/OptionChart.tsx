export const OptionChartBusiness = () => {
  const options: Highcharts.Options = {
    title: {
      text: " ",
    },

    subtitle: {
      text: "",
    },

    yAxis: {
      title: {
        text: "Number of Sale",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 1 to 4",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 1,
        pointRange: 1,
      },
    },

    series: [
      {
        type: "line",
        name: "Sale",
        data: [2005, 1045, 3569, 4000],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  return options;
};
export const OptionChartCS = () => {
  const options: Highcharts.Options = {
    title: {
      text: " ",
    },

    subtitle: {
      text: "",
    },

    yAxis: {
      title: {
        text: "Number of Sale",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 1 to 4",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 1,
        pointRange: 1,
      },
    },

    series: [
      {
        type: "line",
        name: "Sale",
        data: [1235, 2045, 3469, 5000],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  return options;
};
