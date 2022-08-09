import { getMenuList } from '@/layouts/sever';
import { Menu, Message } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import styled from '@emotion/styled';
import { useRequest } from 'ahooks';
import { positionValues, Scrollbars } from 'react-custom-scrollbars';
import { Outlet, useNavigate } from 'umi';
import apple from '../assets/apple.svg';
import './base.css';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export const Container = styled.div({
  display: 'flex',
  flexWrap: 'nowrap',
  height: '100%',
  backgroundColor: '#FFFFFF',
});

const NavigationBar = styled.div({
  width: 300,
  height: '100%',
  padding: '20px 0',
  borderRight: '2px solid #F6F6F6',
  boxSizing: 'border-box',
  overflow: 'auto',
});

const HeaderLogo = styled.div({
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  marginBottom: 10,
});

const logo_text_style = {
  fontWeight: 'bolder',
  color: '#F5414A',
  fontSize: 25,
  verticalAlign: '12px',
  letterSpacing: '5px',
};

export const onScrollFrame = (values: positionValues) => {
  console.log(values);
};

export default function Layout() {
  const { data, loading } = useRequest(getMenuList);

  let navigate = useNavigate();

  const searchRoutePath = (key: string, pathArray: any[]): string => {
    for (let i = 0; i < pathArray.length; i++) {
      let item = pathArray[i];
      if (item.menuId === key) {
        return item.routePath;
      }
      if (item.children) {
        let path = searchRoutePath(key, item.children);
        if (path !== '') return path;
      }
    }

    return '';
  };

  const onClickMenuItem = (key: string, event: any, keyPath: string[]) => {
    // 这里仍然可以优化，比如只遍历一次保存对应关系即可
    const routePath = searchRoutePath(key, data.data);
    if (routePath === undefined || routePath === '') {
      return Message.error('未找到功能模块的路由路径');
    }
    navigate(routePath, { replace: true });
  };

  const getTreeMenu = (menuData: any) => {
    if (menuData.length > 0) {
      return menuData.map((item: any) => {
        if (item?.children?.length > 0) {
          return (
            <SubMenu key={item.menuId} title={item.menuName}>
              {getTreeMenu(item.children)}
            </SubMenu>
          );
        }
        return <MenuItem key={item.menuId}>{item.menuName}</MenuItem>;
      });
    }
  };

  return (
    <Container>
      <NavigationBar>
        <Scrollbars autoHide autoHideTimeout={1000} onScrollFrame={onScrollFrame}>
          <HeaderLogo style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            <div
              style={{
                display: 'inline-block',
                fontSize: 0,
              }}
            >
              <img src={apple} alt="lemon-logo" width={50} height={50} />
              <div style={{ width: 10, display: 'inline-block', fontSize: 0 }} />
              <span style={logo_text_style}>AMAZING</span>
            </div>
          </HeaderLogo>
          <Menu onClickMenuItem={onClickMenuItem}>{data && getTreeMenu(data.data)}</Menu>
        </Scrollbars>
      </NavigationBar>
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </Container>
  );
}
