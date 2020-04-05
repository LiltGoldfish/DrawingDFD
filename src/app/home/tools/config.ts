
export const Tools = [
  {
    group: '数据流图',
    children: [
      {
        name: '源点',
        icon: 'icon-rectangle',
        data: {
          text: '源点',
          rect: {
            width: 210,
            height: 50
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 0.1,
          name: 'rectangle'
        }
      },
      {
        name: '终点',
        icon: 'icon-rectangle',
        data: {
          text: '终点',
          rect: {
            width: 200,
            height: 50
          },
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 0.1,
          name: 'rectangle'
        }
      },
      {
        name: '输入',
        icon: 'icon-circle',
        data: {
          text: '输入',
          rect: {
            width: 99,
            height: 100
          },
          name: 'circle',
          textMaxLine: 2
        }
      },
      {
        name: '处理',
        icon: 'icon-circle',
        data: {
          text: '处理',
          rect: {
            width: 100,
            height: 100
          },
          name: 'circle',
          textMaxLine: 2
        }
      },
      {
        name: '输出',
        icon: 'icon-circle',
        data: {
          text: '输出',
          rect: {
            width: 101,
            height: 100
          },
          name: 'circle',
          textMaxLine: 2
        }
      },
      {
        name: '数据的存储',
        icon: 'icon-flow-parallel',
        data: {
          text: '数据的存储',
          rect: {
            width: 120,
            height: 50
          },
          name: 'flowParallel'
        }
      },
    ]
  },
];
