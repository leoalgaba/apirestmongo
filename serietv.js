var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var serietv = new Schema({
	titulo: String,
	temporadas: Number,
	pais: String,
	genero: {
		type: String,
		enum: ['comedia','fantasia','drama',"terror","sci-fi"]
	}
});
module.exports = mongoose.model("SerieTV", serietv);