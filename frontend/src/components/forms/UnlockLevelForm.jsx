import React from 'react';
import { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Alert } from 'antd';

import { getUserGames, getUserByName } from '../../services/users/user-service';
import { createAchievement, getGameLevels, unlockLevel } from '../../services/games/game-service';

const { Option } = Select;

const UnlockLevelForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [unlockLevelForm] = Form.useForm();
  const [userId, setUserId] = useState('');
  const [games, setGames] = useState([]);
  const [levels, setLevels] = useState([]);
  const [username, setUsername] = useState('');

  const fetchGames = async () => {
    const response = await getUserGames(userId);
    if (response instanceof Error) {
      let message = response.message;
      setErrorMessage(message);
      setError(true);
    }
    else {
      setError(false);
      setGames(response);
    }
  };

  const fetchUser = async () => {
    const response = await getUserByName(username);
    if (response instanceof Error) {
      let message = response.response.data.result;
      setErrorMessage(message);
      setError(true);
    }
    else {
      setError(false);
      setUserId(response.user_id);
      setGames([]);
    }
  };

  const fetchLevels = async (game_id) => {
    const response = await getGameLevels(game_id);
    if (response instanceof Error) {
      let message = response.message;
      setErrorMessage(message);
      setError(true);
    }
    else {
      setError(false);
      setLevels(response);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUser();
    }
  }, [username]);

  useEffect(() => {
    if (userId) {
      fetchGames();
    }
  }, [userId]);

  const handleUsernameBlur = (e) => {
    setUsername(e.target.value);
  };

  const resetSuceess = () => {
    setSuccess(false);
  };

  const onFinish = async (values) => {
    const result = await unlockLevel({
      user_id: userId,
      game_id: values.game,
      level_id: values.level,
    });

    if (result instanceof Error) {
      let message = result.response.data.error;
      setErrorMessage(message);
      setError(true);
    }
    else {
      setError(false);
      unlockLevelForm.resetFields();
      setSuccess(true);
    }
  };

  return (
    <Form
      form={unlockLevelForm}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      onBlur={resetSuceess}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input the username!' }]}
      >
        <Input onBlur={handleUsernameBlur} />
      </Form.Item>

      <Form.Item
        label="Game"
        name="game"
        rules={[{ required: true, message: 'Please select the game!' }]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
          disabled={!games.length}
          onChange={(value) => {
            const game = games.find((game) => game.game_id === value);
            fetchLevels(game.game_id);
          }}
        >
          {games.map((game) => (
            <Option key={game.game_id} value={game.game_id}>{game.game_name}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Level"
        name="level"
        rules={[{ required: true, message: 'Please select the level!' }]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
          disabled={!levels.length}
        >
          {levels.map((level) => (
            <Option key={level.level_id} value={level.level_id}>{level.level_name}</Option>
          ))}
        </Select>
      </Form.Item>

      {error && <Alert message={errorMessage} type="error" style={{ padding: '10px', marginBottom: '10px' }} />}
      {success && <Alert message="Level unlocked successfully!" type="success" style={{ padding: '10px', marginBottom: '10px' }} />}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

    </Form>
  );
};

export default UnlockLevelForm;
