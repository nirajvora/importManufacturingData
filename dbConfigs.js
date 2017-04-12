module.exports = function(mongoose) {
    var Device = new mongoose.Schema({
        header              :    String,
        ignore              :    Boolean,
        dbName              :    String,
        criteria            :    String,
        colors              :    String
    });

    var models = {
      Device : mongoose.model('Device', Device)
    };
    return models;
}