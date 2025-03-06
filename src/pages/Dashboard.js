import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Row, Col, Card, Progress } from 'antd';
import Sidebar from '../components/Dashboard/Sidebar';
import DashboardHeader from '../components/Dashboard/Header';
import { Pie, Line } from '@ant-design/plots';
import { pieConfig, lineConfig, balance, goal, currentSavings, monthlyBudgetData } from '../helper/chartConfigs';

const { Content } = Layout;

const Dashboard = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const summaryData = [
    { type: 'Receitas', value: 3000 },
    { type: 'Despesas', value: 2000 },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} />
      <Layout className="site-layout">
        <DashboardHeader />
        <Content style={{ margin: '0 16px' }}>
          <Row>
            <Col span={24}>
              <Card title={t('common_welcome')} className="bg-card smooth-card">
                <p style={{ color: '#fff' }}>{t('common_review')}</p>
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ padding: '24px 0' }}>
            <Col span={12}>
              <Card title={t('common_month_resume')} className="bg-card smooth-card">
                <Pie {...pieConfig(summaryData)} />
              </Card>
            </Col>
            <Col span={12}>
              <Card title={t('common_average')} className="bg-card smooth-card">
                <Line {...lineConfig(monthlyBudgetData)} />
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ paddingBottom: '24px', display: 'flex', alignItems: 'stretch' }}>
            <Col span={6} style={{ display: 'flex' }}>
              <Card title={t('common_current_balance')} className="bg-card smooth-card" style={{ textAlign: 'center', flex: 1 }}>
                <h2 style={{ color: balance >= 0 ? 'green' : 'red' }}>R$ {balance.toFixed(2)}</h2>
              </Card>
            </Col>
            <Col span={6} style={{ display: 'flex' }}>
              <Card title={t('common_economic_goals')} className="bg-card smooth-card" style={{ flex: 1 }}>
                <Progress percent={(currentSavings / goal) * 100} status="active" />
                <p style={{ color: '#fff' }}>R$ {currentSavings.toFixed(2)} / R$ {goal.toFixed(2)}</p>
              </Card>
            </Col>
            <Col span={6} style={{ display: 'flex' }}>
              <Card title={t('common_latest_releases')} className="bg-card smooth-card" style={{ flex: 1 }}>
                <p style={{ color: '#fff' }}>Nenhum lançamento recente.</p>
              </Card>
            </Col>
            <Col span={6} style={{ display: 'flex' }}>
              <Card title={t('common_category')} className="bg-card smooth-card" style={{ flex: 1 }}>
                <p style={{ color: '#fff' }}>Nenhuma categoria cadastrada.</p>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
