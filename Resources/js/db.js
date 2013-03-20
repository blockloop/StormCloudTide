var Database = function (filepath) {
  var self = this;

  self.run = function () {
    window.DB = Ti.Database.openFile(Ti.Filesystem.getFile(Ti.Filesystem.getApplicationDataDirectory(), 'application.db'));

    //Create a table and insert values into it
    window.DB.execute("CREATE TABLE IF NOT EXISTS Users(id INTEGER, firstName TEXT)");
    window.DB.execute("INSERT INTO Users VALUES(1,'Joe Bloggs')");
    console.log(self.executeGetRows("SELECT * FROM Users", Person));

    //Select from Table
  };

  self.executeGetRows = function (sql, expectedReturnType) {
    var rows = window.DB.execute(sql);
    var result = [];

    while(rows.isValidRow()) {
      eval(String.format("var item = new {0}();", expectedReturnType));
      var i = 0;

      while (true) {
        try {
          var val = rows.field(i);
          var key = rows.fieldName(i);
          var fmtStr = (typeof val == 'string' || val instanceof String) ? "item.{0} = '{1}'" : "item.{0} = {1}"
          var setter = String.format(fmtStr, key, val);
          console.log('Running ' + setter);
          eval(setter);
          i++;
        } catch (e) { break; }

      };

      result.push(item); 
      rows.next();

    };
    return result; 
  };
};

var Person = function () {
  var self = this;
  self.firstName = "";
  self.id = 0;
};