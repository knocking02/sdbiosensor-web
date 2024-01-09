export const constant = {
   SITE_NAME: '에스디바이오 센서 ~~~~',
   BOARD: {
      PAGE_SIZE: 10,
   },
   CHART_COLOR: [
      '#0A84FF',
      '#FFD426',
      '#9400D3',
      '#ed7d31',
      '#FF4A6B',
      '#906D3B',
      '#C35F5F',
      '#1FE62C',
      '#00c853',
      '#e76049',
      '#29c5ff',
      '#ffea00',
      '#a5a5a5',
      '#ff3d00',
      '#ffc000',
      '#ff6600',
      '#2979ff',
      '#d500f9',
      '#5d9cec',
      '#888',
      '#575757',
      '#0064FF',
      '#2E8B57',
      '#D7567F',
      '#FF7F50',
      '#B90000',
      '#9400D3',
      '#00C3FF',
      '#329632',
      '#D24C75',
      '#ff6600',
      '#2979ff',
      '#d500f9',
      '#B34747',
      '#443333',
      '#1FE62C',
      '#D2D21E',
      '#DC7DB3',
      '#631FEB',
      '#2AE143',
      '#A9C618',
      '#E61F1F',
      '#18661D',
      '#87275D',
      '#7F719B',
      '#616118',
      '#2A86E1',
      '#085112',
      '#415142',
   ],
}

export default {
   constant,
   install: (app) => {
      app.config.globalProperties.$const = constant
   },
}
