import React from 'react';
import { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';

import { createIndicator } from '../../services/indicators/indicator-service';
import { getGameByName } from '../../services/games/game-service';

const IndicatorForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [indicatorForm] = Form.useForm();

  const resetSuceess = () => {
    setSuccess(false);
  };

  const fetchGame = async (game_name) => {
    const response = await getGameByName(game_name);
    if (response instanceof Error) {
        let message = response.response.data.result;
        setErrorMessage(message);
        setError(true);
    }
    else {
        setError(false);
        return response;
    }
  };

  const onFinish = async (values) => {
    const game = await fetchGame(values.game_name);
    if (game) {
        const result = await createIndicator({
            game_id: game.game_id,
            indicator_name: values.indicator_name,
            indicator_value: values.indicator_value
        });

        if (result instanceof Error) {
            let message = result.response.data.error;
            setErrorMessage(message);
            setError(true);
        }
        else {
            setError(false);
            indicatorForm.resetFields();
            setSuccess(true);
        }
    }
  };

  return (
    <Form
      form={indicatorForm}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      onBlur={resetSuceess}
    >
      <Form.Item
        label="Game Name"
        name="game_name"
        rules={[{ required: true, message: 'Please input the game name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Name"
        name="indicator_name"
        rules={[{ required: true, message: 'Please input the indicator name!' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Value"
        name="indicator_value"
        rules={[{ required: true, message: 'Please input the indicator value!' }]}
      >
        <Input />
      </Form.Item>

      {error && <Alert message={errorMessage} type="error" style={{ padding: '10px', marginBottom: '10px' }} />}
      {success && <Alert message="Indicator created successfully!" type="success" style={{ padding: '10px', marginBottom: '10px' }} />}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

    </Form>
  );
};

export default IndicatorForm;
