var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	Name : String ,
	Roll : Number
});

mongoose.model('Post' , PostSchema);
