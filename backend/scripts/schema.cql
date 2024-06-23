CREATE KEYSPACE user_activity WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'};

USE user_activity;

CREATE TABLE users (
    user_id UUID PRIMARY KEY,
    user_name TEXT,
    user_email TEXT,
    user_registration_date TEXT,
);

CREATE TABLE games (
    game_id UUID PRIMARY KEY,
    game_name TEXT,
    game_description TEXT,
    game_category TEXT,
    game_release_date TIMESTAMP,
    game_version TEXT,
    game_price DOUBLE
);

CREATE TABLE game_sessions (
    session_id UUID,
    user_id UUID,
    game_id UUID,
    session_start TIMESTAMP,
    session_end TIMESTAMP,
    PRIMARY KEY ((user_id, game_id), session_start)
);

CREATE TABLE achievements (
    achievement_id UUID,
    user_id UUID,
    game_id UUID,
    achievement_name TEXT,
    achievement_date TIMESTAMP,
    PRIMARY KEY ((user_id, game_id), achievement_date)
);

CREATE TABLE levels (
    user_id UUID,
    game_id UUID,
    level_id UUID,
    level_name TEXT,
    PRIMARY KEY ((user_id, game_id), level_id)
);

CREATE TABLE unlocked_levels (
    level_id UUID,
    user_id UUID,
    game_id UUID,
    PRIMARY KEY ((user_id, game_id), level_id)
);

CREATE TABLE indicators (
    indicator_id UUID,
    game_id UUID,
    indicator_name TEXT,
    indicator_value TEXT,
    recorded_at TIMESTAMP,
    PRIMARY KEY ((game_id), indicator_name, recorded_at)
);
