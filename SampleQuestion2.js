// “I am working on a two-player card game. Players can log in and create a game or join an existing game. Every game has a host (the player who created the game) and a guest (the player who joined the game). I was planning to create a games table with a host_player_name, guest_player_name, and score column.“

// “Another mentor told me to pull out some of the columns from the games table into a users table, because right now the data is ‘not normalized’? What does this mean?”

//users TABLE
//pk user_id  serial
//first_name varchar(256)
//last_name   varchar(256)

//user_games
//pk id
// fk game_id
//fk user_id
// is_host bool

//games TABLE
//pk game_id
//host_name
//guest_name
//date_created
// winner


//score TABLE
//pk score_id
//fk game_id
//host_score
//guest_score