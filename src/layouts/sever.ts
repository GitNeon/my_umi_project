/**
 * @Author: fanx
 * @Date: 2022年08月08日 15:06
 * @Description: file content
 */

export const getMenuList = async (): Promise<any> => {
  // return get('http://test/xxx', { key1: 'test' });
  return new Promise((resolve) => {
    const data = [
      {
        menuId: '1',
        menuName: 'React',
        icon: 'icon-react',
        children: [
          {
            menuId: '1-1',
            menuName: 'React UI组件库',
            routePath: '../reactui',
          },
        ],
      },
      {
        menuId: '2',
        menuName: 'CSS',
        icon: 'icon-css',
        children: [
          {
            menuId: '2-1',
            menuName: 'CSS技巧',
            routePath: '../csstech',
          },
          {
            menuId: '2-2',
            menuName: 'CSS探索',
            routePath: '../cssexplore',
          },
        ],
      },
      {
        menuId: '3',
        menuName: 'UMI4',
        icon: 'icon-umi',
        children: [
          {
            menuId: '3-1',
            menuName: 'UMI基本用法',
          },
        ],
      },
    ];

    setTimeout(() => {
      resolve({
        code: 200,
        msg: '请求成功',
        data: data,
      });
    }, 2000);
  });
};
