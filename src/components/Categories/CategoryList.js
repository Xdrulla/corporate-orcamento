import React from 'react';
import { List, Button } from 'antd';

const CategoryList = ({ categories, onAddCategory }) => (
  <div>
    <List
      header={<div>Categorias</div>}
      dataSource={categories}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Button type="primary" onClick={onAddCategory} style={{ marginTop: '16px' }}>
      Adicionar Nova Categoria
    </Button>
  </div>
);

export default CategoryList;
