// 工具导航配置列表
// 新增工具时，直接在数组里加一条对象即可，无需改index.html
const TOOLS_CONFIG = [
  {
    name: "批量链接生成工具", // 工具名称
    url: "./pages/link-generator.html", // 工具页面路径
    desc: "批量拼接/替换 URL 参数，支持空行过滤、自动复制、复杂链接兼容", // 工具描述
  },
  {
    name: "HTML+SVG 转图片工具",
    url: "./pages/html-svg-to-img.html",
    desc: "支持内联SVG、Tailwind CSS的HTML片段转换为PNG/JPG图片",
  },
  {
    name: "其他功能2（示例）",
    url: "./pages/other-feature2.html",
    desc: "功能2的简要说明：比如JSON格式化、二维码生成等",
  },
  // 新增工具：直接复制上面的对象，修改name/url/desc即可
];
