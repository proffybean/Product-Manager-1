REM echo off

mkdir config
type NUL > config/mongoose.config.js
mkdir controllers
type NUL > controllers/movie.controller.js
mkdir models
type NUL > models/movie.model.js
mkdir routes
type NUL > routes/movie.routes.js

type NUL > server.js