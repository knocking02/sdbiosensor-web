option = {
   xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
   },
   yAxis: {},
   series: [
      {
         z: -1,
         data: [25, 14, 23, 35, 10, 36, 30],
         type: 'line',
         smooth: true,
         lineStyle: {
            width: 0,
         },
         showSymbol: false,
         areaStyle: {
            color: '#bfccdc',
         },
      },
      {
         z: -1,
         data: [20, 12, 20, 30, 8, 30, 27],
         type: 'line',
         smooth: true,
         lineStyle: {
            width: 0,
         },
         showSymbol: false,
         areaStyle: {
            color: '#698fbb',
         },
      },

      {
         data: [15, 10, 18, 25, 7, 27, 24],
         type: 'line',
         smooth: true,
         lineStyle: {
            width: 2,
            color: '#000',
         },
         showSymbol: false,
      },

      {
         z: -1,
         data: [13, 8, 15, 20, 6, 23, 20],
         type: 'line',
         smooth: true,
         lineStyle: {
            width: 0,
         },
         showSymbol: false,
         areaStyle: {
            opacity: 1,
            color: '#698fbb',
         },
      },

      {
         z: -1,
         data: [10, 7, 13, 17, 5, 18, 15],
         type: 'line',
         smooth: true,
         lineStyle: {
            width: 0,
         },
         showSymbol: false,
         areaStyle: {
            opacity: 1,
            color: '#fff',
         },
      },
   ],
}

let max2 = [15, 27, 32, 25, 28]
let min2 = [3, 10, 18, 13, 14]
let dif2 = max2.map((v, i) => min2[i] - v)

let max = [10, 22, 28, 20, 23]
let min = [8, 15, 23, 18, 19]
let dif = max.map((v, i) => min[i] - v) // [-2, -7, -5, -2, -4]

option = {
   xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['A', 'B', 'C', 'D', 'E'],
   },
   yAxis: {},
   tooltip: {
      trigger: 'axis',
   },
   series: [
      {
         data: max2,
         type: 'line',
         stack: 'xx', // stack name
         smooth: true,
         lineStyle: {
            width: 0,
         },
         symbol: 'none', // hide symbol
      },

      {
         data: dif2,
         type: 'line',
         stack: 'xx', // stack name
         stackStrategy: 'positive', // strategy
         smooth: true,
         lineStyle: {
            opacity: 0, // hide line
         },
         symbol: 'none', // hide symbol
         areaStyle: {
            color: '#dfe3ed',
         },
         tooltip: {
            show: false, // hide value on tooltip
         },
      },
      {
         data: min2,
         type: 'line',
         smooth: true,
         lineStyle: {
            width: 0,
         },
         symbol: 'none', // hide symbol
      },
      {
         data: max,
         type: 'line',
         stack: 'x', // stack name
         smooth: true,
         lineStyle: {
            width: 0,
         },
         symbol: 'none', // hide symbol
      },

      {
         data: dif,
         type: 'line',
         stack: 'x', // stack name
         stackStrategy: 'positive', // strategy
         smooth: true,
         lineStyle: {
            opacity: 0, // hide line
         },
         symbol: 'none', // hide symbol
         areaStyle: {
            color: '#a2b5d4',
         },
         tooltip: {
            show: false, // hide value on tooltip
         },
      },
      {
         data: min,
         type: 'line',
         smooth: true,
         lineStyle: {
            width: 0,
         },
         symbol: 'none', // hide symbol
      },
      {
         data: [9, 18, 26, 19, 21],
         type: 'line',

         smooth: true,
         lineStyle: {
            width: 2,
            color: '#000',
         },
         symbol: 'none', // hide symbol
         markArea: {
            itemStyle: {
               color: 'rgba(255, 173, 177, 0.4)',
            },
            data: [
               [
                  {
                     name: 'Morning Peak',
                     yAxis: '7',
                  },
                  {
                     yAxis: '13',
                  },
               ],
            ],
         },
      },
   ],
}
