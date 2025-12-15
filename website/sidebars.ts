import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * 多级教程侧边栏配置（TS版本）
 * sidebarId 必须和 docusaurus.config.ts 中的 sidebarId 一致
 */
const sidebars: SidebarsConfig = {
  // 首页
  intro: [
    { type: 'doc', id: 'intro' }
  ],

  // Java基础教程（一级目录）
  javaSidebar: [
    {
      type: 'category',
      label: 'Java基础（二级目录）',
      items: ['java/basic/variable', 'java/basic/flow-control'], // 教程文件路径
    },
    {
      type: 'category',
      label: 'Java面向对象（二级目录）',
      items: ['java/oop/class', 'java/oop/inheritance'],
    },
  ],

  // 常用中间件教程（一级目录）
  midlewareSidebar: [
    {
      type: 'category',
      label: 'MySQL（二级目录）',
      items: ['midleware/mysql/grammer'], // 教程文件路径
    },
    {
      type: 'category',
      label: 'RabbitMQ（二级目录）',
      items: ['midleware/rabbitmq/install'],
    },
  ],

  // Spring Boot教程（一级目录）
  springbootSidebar: [
    {
      type: 'category',
      label: 'Spring Boot入门（二级目录）',
      items: ['springboot/entry/setup', 'springboot/entry/first-api'],
    },
    {
      type: 'category',
      label: 'Spring Boot进阶（二级目录）',
      items: ['springboot/advanced/autoconfig'],
    },
  ],

  // Linux教程（一级目录）
  linuxSidebar: [
    {
      type: 'category',
      label: 'Linux基础命令（二级目录）',
      items: ['linux/command/basic', 'linux/command/permission'],
    },
  ],

  // 企业级项目实战（一级目录）
  projectSidebar: [
    {
      type: 'category',
      label: '电商项目实战（二级目录）',
      items: ['project/e-commerce/requirement', 'project/e-commerce/design'],
    },
  ],

  // 面试专题（一级目录）
  interviewSidebar: [
    {
      type: 'category',
      label: 'Java面试题（二级目录）',
      items: ['interview/java/basic', 'interview/java/jvm'],
    },
  ],
};

export default sidebars;
