import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, FileTextOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = ({ collapsed, onCollapse }) => (
  <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="bg-card">
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<DashboardOutlined />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<AppstoreOutlined />}>
        <Link to="/categories">Categorias</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<FileTextOutlined />}>
        <Link to="/transactions">Transações</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<SettingOutlined />}>
        <Link to="/settings">Configurações</Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
