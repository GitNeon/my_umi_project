import { Menu } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import { IconApps, IconBug, IconBulb } from '@arco-design/web-react/icon';
import styled from '@emotion/styled';
import { positionValues, Scrollbars } from 'react-custom-scrollbars';
import apple from '../assets/apple.svg';
import './base.css';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export const Container = styled.div({
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
  console.log(process.env.UMI_ENV);
  return (
    <Container>
      <NavigationBar>
        <Scrollbars autoHide autoHideTimeout={1000} onScrollFrame={onScrollFrame}>
          <HeaderLogo>
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

          <Menu>
            <SubMenu
              key="0"
              title={
                <>
                  <IconApps /> Navigation 1
                </>
              }
            >
              <MenuItem key="0_0">Menu 1</MenuItem>
              <MenuItem key="0_1">Menu 2</MenuItem>
              <MenuItem key="0_2" disabled>
                Menu 3
              </MenuItem>
            </SubMenu>
            <SubMenu
              key="1"
              title={
                <>
                  <IconBug /> Navigation 2
                </>
              }
            >
              <MenuItem key="1_0">Menu 1</MenuItem>
              <MenuItem key="1_1">Menu 2</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
              <MenuItem key="1_2">Menu 3</MenuItem>
            </SubMenu>
            <SubMenu
              key="2"
              title={
                <>
                  <IconBulb /> Navigation 3
                </>
              }
            >
              <MenuItem key="2_0">Menu 1</MenuItem>
              <MenuItem key="2_1">Menu 2</MenuItem>
              <MenuItem key="2_2">Menu 3</MenuItem>
            </SubMenu>
          </Menu>
        </Scrollbars>
      </NavigationBar>
    </Container>
  );
}
