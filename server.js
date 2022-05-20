'use strict';

const express = require("express");
const app = express();

app.use(express.urlencoded({
	extended: true
}));
app.use(express.static('public'));



app.get"/test_game", (req, res) => {
	res.send("Successful test!");
});