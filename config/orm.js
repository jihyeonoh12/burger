var connection = require("./connection.js");


var orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);

        });
    },
    insertOne: function (table, colName, colName, valOfCol, valOfCol, table ) {
        var queryString = "INSERT INTO ?? (??, ??) VALUE (?,?)";
        queryString = "SELECT * FROM ??";
        console.log(queryString);
        connection.query(queryString, [table, colName, colName, valOfCol, valOfCol, table ], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (table, colName, valOfCol, idCol, idVal) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, colName, valOfCol, idCol, idVal], function (err, result) {
            if (err) throw err;
            console.log(result);

        });
    }
};

    module.exports = orm;
