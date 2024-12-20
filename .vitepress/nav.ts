const nav = [
  { text: '首页', link: '/' },
  { text: '导航', link: '/nav' },
  {
    text: '进击的前端',
    items: [
      {
        items: [
          { text: '前端工程化基础', link: '...' },
          { text: '开发技巧总结', link: '...' },
        ],
      },
      {
        text: '前端物语',
        items: [
          { text: 'Web 基础与 HTML', link: '/front-end/html/' },
          { text: 'CSS 重点与常用技巧', link: '/front-end/css/' },
          { text: 'JavaScript (ES6+)', link: '...' },
        ],
      },
    ],
  },
  {
    text: '折戟的后端',
    items: [
      { text: 'Java', link: '/back-end/java/' },
      { text: '框架与中间件', link: '/about/' },
      { text: '数据库与存储', link: '/about/' },
      { text: '架构与设计', link: '...' },
    ],
  },
  { text: '工具链与格物篇', link: '/toolchain/index.md' },
  { text: '日常', link: '/daily/index.md' },
  {
    text: '关于',
    items: [
      { text: '关于我', link: '/about/' },
      { text: '简历', link: '/resume.md' },
      { text: '闲言', link: '/daily-words.md' },
      { text: '友情链接', link: '/friends.md' },
    ],
  },
]

export default nav
