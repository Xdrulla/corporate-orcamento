import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';

const AddCategory = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Adicionar Nova Categoria"
      okText="Criar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="add_category_form">
        <Form.Item
          name="name"
          label="Nome da Categoria"
          rules={[{ required: true, message: 'Por favor, insira o nome da categoria!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCategory;
