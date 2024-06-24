USE user_activity;

INSERT INTO games (game_id, game_name, game_description, game_category, game_release_date, game_version, game_price)
VALUES (uuid(), 'The Witcher 3: Wild Hunt', 'Action role-playing game', 'Action RPG', '2015-05-19', '1.0', 59.99);
INSERT INTO games (game_id, game_name, game_description, game_category, game_release_date, game_version, game_price)
VALUES (uuid(), 'Assassin''s Creed Odyssey', 'Action-adventure game', 'Action RPG', '2018-10-05', '1.0', 59.99);
INSERT INTO games (game_id, game_name, game_description, game_category, game_release_date, game_version, game_price)
VALUES (uuid(), 'Cyberpunk 2077', 'Open-world RPG', 'Action RPG', '2020-12-10', '1.0', 49.99);
INSERT INTO games (game_id, game_name, game_description, game_category, game_release_date, game_version, game_price)
VALUES (uuid(), 'Red Dead Redemption 2', 'Action-adventure game', 'Action RPG', '2018-10-26', '1.0', 59.99);
INSERT INTO games (game_id, game_name, game_description, game_category, game_release_date, game_version, game_price)
VALUES (uuid(), 'The Elder Scrolls V: Skyrim', 'Open-world RPG', 'Action RPG', '2011-11-11', '1.0', 39.99);
INSERT INTO games (game_id, game_name, game_description, game_category, game_release_date, game_version, game_price)
VALUES (uuid(), 'Grand Theft Auto V', 'Action-adventure game', 'Action RPG', '2013-09-17', '1.0', 29.99);
INSERT INTO games (game_id, game_name, game_description, game_category, game_release_date, game_version, game_price)
VALUES (uuid(), 'Horizon Zero Dawn', 'Action-adventure game', 'Action RPG', '2020-08-07', '1.0', 49.99);
INSERT INTO games (game_id, game_name, game_description, game_category, game_release_date, game_version, game_price)
VALUES (uuid(), 'Dark Souls III', 'Action RPG', 'Action RPG', '2016-04-12', '1.0', 39.99);
INSERT INTO games (game_id, game_name, game_description, game_category, game_release_date, game_version, game_price)
VALUES (uuid(), 'God of War', 'Action-adventure game', 'Action RPG', '2018-04-20', '1.0', 49.99);
INSERT INTO games (game_id, game_name, game_description, game_category, game_release_date, game_version, game_price)
VALUES (uuid(), 'Minecraft', 'Sandbox game', 'Adventure', '2011-11-18', '1.0', 19.99);

UPDATE users SET played_games = played_games + {768e49fa-3f95-4f03-a0d1-c6d718e5e4fa} WHERE user_id = 6f7ed0b6-0f41-4ea2-ad71-8b782358c5b5