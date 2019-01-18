module.exports = {
  // 左上角标题
  title: 'C.AI 的文档库',
  dest: './dist',    // 设置输出目录
  // 描述
  description: '前端工程师 C.AI 的文档库',
  // 头部部署，右上角小图标
  head: [
      // ico 配置
      ['link', {
          rel: 'icon',
          href: '/img/logo.ico'
      }]
  ],
  // 主题部署
  themeConfig: {
      /** 
       * 右侧导航条
       * text - 显示字段
       * link - 链接：注意前后带 / 符号
       */
      nav: [
          {
              text: '主页',
              link: '/'
          },
          {
            text: '关于',
            link: '/about/'
          },
          /**
           * 多级菜单
           * 开头 text 为一级标题
           * 数组内 text 为二级标题
           * link 为链接，注意带 /
           */
          {
              text: '文档',
              items: [
                  {
                      text: 'JS',
                      link: '/JS/'
                  },
                  {
                      text: 'VUE',
                      link: '/VUE/'
                  }
              ]
          },
          // 链接到网站
          {
              text: 'Github',
              link: 'https://github.com/Fishcyz'
          },
      ],
      /**
       * 侧边栏配置：侧边栏组
       */
      sidebar: {
        // 侧边栏在 /index/ 目录上
        '/JS/': [
            ['', 'JS']
        ],
        // 侧边栏在 /about/ 目录上
        '/VUE/': [
            ['', 'VUE']
        ]
      }
  }
}
