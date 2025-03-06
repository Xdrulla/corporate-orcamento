// src/pages/CategoriesPage.js
import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import CategoryList from '../components/Categories/CategoryList';
import AddCategory from '../components/Categories/AddCategory';
import CategoryChart from '../components/Categories/CategoryChart';

const initialCategories = ['Moradia', 'Transporte', 'Alimentação', 'Saúde'];

const CategoriesPage = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddCategory = () => {
    setIsModalVisible(true);
  };

  const handleCreateCategory = (values) => {
    setCategories([...categories, values.name]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const chartData = categories.map((category, index) => ({
    category,
    value: Math.floor(Math.random() * 1000), // Valores simulados
  }));

  return (
    <Row gutter={[16, 16]} style={{ padding: '24px' }}>
      <Col span={8}>
        <Card title="Categorias">
          <CategoryList categories={categories} onAddCategory={handleAddCategory} />
        </Card>
        <AddCategory
          visible={isModalVisible}
          onCreate={handleCreateCategory}
          onCancel={handleCancel}
        />
      </Col>
      <Col span={16}>
        <Card title="Gastos por Categoria">
          <CategoryChart data={chartData} />
        </Card>
      </Col>
    </Row>
  );
};

export default CategoriesPage;
