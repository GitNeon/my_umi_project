import { defineConfig } from 'umi';

/**
 * @Author: fanx
 * @Date: 2022年08月06日 11:41
 * @Description: prod环境配置文件
 */
export default defineConfig({
  npmClient: 'pnpm',
  // 页面标题
  title: 'Prod生产环境',
  // 路由路径，当前端项目没有部署在nginx的根目录时，必须修改这个路径
  base: '/',
  // 检测未使用的文件和导出，仅在 build 阶段开启。
  deadCode: {},
  // 配置额外的css，作为style标签插入index.html中
  styles: [`html,body { height: 100%; margin: 0; }`, `#root { height: 100%; }`],
  dva: {},
  plugins: ['@umijs/plugins/dist/dva'],
  define: {
    'process.env': {
      NODE_ENV: 'prod',
      UMI_ENV: 'prod',
      ip: '100.25.25.25',
      date: '2022-08-31',
    },
  },
});
