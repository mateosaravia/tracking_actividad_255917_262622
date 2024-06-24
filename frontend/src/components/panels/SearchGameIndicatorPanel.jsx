import { Table, Input, Alert } from 'antd';
import React, { useState, useEffect } from 'react';
import { getGameByName, getGameIndicators } from '../../services/games/game-service';

const gameIndicatorColumns = [
    {
        title: 'Game ID',
        dataIndex: 'game_id',
        key: 'game_id',
    },
    {
        title: 'Indicator Name',
        dataIndex: 'indicator_name',
        key: 'indicator_name',
    },
    {
        title: 'Indicator Value',
        dataIndex: 'indicator_value',
        key: 'indicator_value',
    },
];

const SearchGameIndicator = () => {
    const [searchValue, setSearchValue] = useState('');
    const [gameId, setGameId] = useState({});
    const [gameIndicators, setGameIndicators] = useState([]);
    const [existsGame, setExistsGame] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const clearMessage = () => {
        setErrorMessage('');
        setError(false);
    };

    const fetchGameIndicators = async () => {
        const response = await getGameIndicators(gameId);
        if (response instanceof Error) {
            let message = response.response.data.result;
            setErrorMessage(message);
            setError(true);
        }
        else {
            setError(false);
            setGameIndicators(response);
        }
    };
    
    const handleSearch = async () => {
        const response = await getGameByName(searchValue);
        if (response instanceof Error) {
            let message = response.response.data.result;
            setErrorMessage(message);
            setError(true);
            setExistsGame(false);
          }
          else {
            setError(false);
            setGameId(response.game_id.toString());
            setExistsGame(true);
          }
    };

    useEffect(() => {
        if (existsGame) {
            fetchGameIndicators();
        }
    }
    , [existsGame]);
    
    return (
        <div>
            <Input.Search
                placeholder="Search for a game"
                enterButton="Search"
                size="large"
                onSearch={handleSearch}
                onChange={(e) => setSearchValue(e.target.value)}
                onBlur={clearMessage}
            />
            {existsGame && (
                <div>
                    <div>
                        <h1 className="text-l my-5">Game Indicators</h1>
                        <Table columns={gameIndicatorColumns} dataSource={gameIndicators} />
                    </div>
                </div>
            )}
            <div>
                {error && <Alert message={errorMessage} type="error" style={{ padding: '10px', marginBottom: '10px' }} />}
            </div>
        </div>
    );
};

export default SearchGameIndicator;
