import { defineConfig } from 'umi';

/**
 * @Author: fanx
 * @Date: 2022年08月06日 11:41
 * @Description: uat环境配置文件
 */
export default defineConfig({
  define: {
    'process.env.UMI_ENV': 'uat',
  },
});
