import React, { useState } from 'react';
import { Layout, Typography, Dropdown, Menu, Space } from 'antd';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;
const { Title } = Typography;

const DashboardHeader = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('Português (BR)');

  const handleMenuClick = (e) => {
    const selectedLanguage = e.key;

    switch (selectedLanguage) {
      case 'pt-br':
        setLanguage('Português (BR)');
        break;
      case 'en':
        setLanguage('English');
        break;
      case 'es':
        setLanguage('Español');
        break;
      default:
        setLanguage('Português (BR)');
    }

    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(selectedLanguage);
    } else {
      console.error("changeLanguage function is not available on i18n.");
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="pt-br">Português (BR)</Menu.Item>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="es">Español</Menu.Item>
    </Menu>
  );

  return (
    <Header
      className="site-layout-background bg-card"
      style={{
        padding: '0 16px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Title level={3} style={{ color: 'white', margin: '16px 0' }}>{t('Dashboard')}</Title>
      <Dropdown overlay={menu} trigger={['click']}>
        <Space style={{ cursor: 'pointer', color: 'white' }}>
          <GlobalOutlined />
          {language}
          <DownOutlined />
        </Space>
      </Dropdown>
    </Header>
  );
};

export default DashboardHeader;
