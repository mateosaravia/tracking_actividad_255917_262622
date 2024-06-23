import React from 'react';
import { Form, Input, Button } from 'antd';

const GameSessionForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input the username!' }]}
      >
        <Input />
      </Form.Item>

      // combobox for game selection
      <Form.Item
        label="Game"
        name="game"
        rules={[{ required: true, message: 'Please select the game!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Session start"
        name="session_start"
        rules={[{ required: true, message: 'Please input the start of the session!' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Session end"
        name="session_end"
        rules={[{ required: true, message: 'Please input the end of the session!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

    </Form>
  );
};

export default GameSessionForm;
