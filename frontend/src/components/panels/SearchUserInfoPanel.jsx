import { Table, Input, Alert } from 'antd';
import React, { useState, useEffect } from 'react';
import { getUnlockedLevels, getUserAchievements, getUserByName, getUserGameSessions } from '../../services/users/user-service';

const gameSessionsColumns = [
    {
        title: 'Session ID',
        dataIndex: 'session_id',
        key: 'session_id',
    },
    {
        title: 'User ID',
        dataIndex: 'user_id',
        key: 'user_id',
    },
    {
        title: 'Game ID',
        dataIndex: 'game_id',
        key: 'game_id',
    },
    {
        title: 'Session Start',
        dataIndex: 'session_start',
        key: 'session_start',
    },
    {
        title: 'Session End',
        dataIndex: 'session_end',
        key: 'session_end',
    },
];

const achievementsColumns = [
    {
        title: 'Achievement ID',
        dataIndex: 'achievement_id',
        key: 'achievement_id',
    },
    {
        title: 'User ID',
        dataIndex: 'user_id',
        key: 'user_id',
    },
    {
        title: 'Game ID',
        dataIndex: 'game_id',
        key: 'game_id',
    },
    {
        title: 'Achievement Name',
        dataIndex: 'achievement_name',
        key: 'achievement_name',
    },
    {
        title: 'Achievement Date',
        dataIndex: 'achievement_date',
        key: 'achievement_date',
    },
];

const unlockedLevelsColumns = [
    {
        title: 'Level ID',
        dataIndex: 'level_id',
        key: 'level_id',
    },
    {
        title: 'Game ID',
        dataIndex: 'game_id',
        key: 'game_id',
    },
    {
        title: 'User ID',
        dataIndex: 'user_id',
        key: 'user_id',
    },
];

const SearchUserInfoPanel = () => {
    const [searchValue, setSearchValue] = useState('');
    const [userId, setUserId] = useState({});
    const [gameSessions, setGameSessions] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [unlockedLevels, setUnlockedLevels] = useState([]);
    const [existsUser, setExistsUser] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const clearMessage = () => {
        setErrorMessage('');
        setError(false);
    };

    const fetchGameSessions = async () => {
        const response = await getUserGameSessions(userId);
        if (response instanceof Error) {
            let message = response.response.data.result;
            setErrorMessage(message);
            setError(true);
        }
        else {
            setError(false);
            console.log(response);
            setGameSessions(response);
        }
    };

    const fetchAchievements = async () => {
        const response = await getUserAchievements(userId);
        if (response instanceof Error) {
            let message = response.response.data.result;
            setErrorMessage(message);
            setError(true);
        }
        else {
            setError(false);
            setAchievements(response);
        }
    };

    const fetchUnlockedLevels = async () => {
        const response = await getUnlockedLevels(userId);
        if (response instanceof Error) {
            let message = response.response.data.result;
            setErrorMessage(message);
            setError(true);
        }
        else {
            setError(false);
            setUnlockedLevels(response);
        }
    };
    
    const handleSearch = async () => {
        const response = await getUserByName(searchValue);
        if (response instanceof Error) {
            let message = response.response.data.result;
            setErrorMessage(message);
            setError(true);
            setExistsUser(false);
          }
          else {
            setError(false);
            setUserId(response.user_id.toString());
            setExistsUser(true);
          }
    };

    useEffect(() => {
        if (existsUser) {
            fetchGameSessions();
            fetchAchievements();
            fetchUnlockedLevels();
        }
    }
    , [existsUser]);
    
    return (
        <div>
            <Input.Search
                placeholder="Search for a user"
                enterButton="Search"
                size="large"
                onSearch={handleSearch}
                onChange={(e) => setSearchValue(e.target.value)}
                onBlur={clearMessage}
            />
            {existsUser && (
                <div>
                    <div>
                        <h1 className="text-l my-5">Game Sessions</h1>
                        <Table columns={gameSessionsColumns} dataSource={gameSessions} />
                    </div>
                    <div>
                        <h1 className="text-l my-5">Achievements</h1>
                        <Table columns={achievementsColumns} dataSource={achievements} />
                    </div>
                    <div>
                        <h1 className="text-l my-5">Unlocked Levels</h1>
                        <Table columns={unlockedLevelsColumns} dataSource={unlockedLevels} />
                    </div>
                </div>
            )}
            <div>
                {error && <Alert message={errorMessage} type="error" style={{ padding: '10px', marginBottom: '10px' }} />}
            </div>
        </div>
    );
};

export default SearchUserInfoPanel;
