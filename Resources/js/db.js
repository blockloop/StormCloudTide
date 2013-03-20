var Database = function (filepath) {
  var self = this;
  window.DB = Ti.Database.openFile(Ti.Filesystem.getFile(Ti.Filesystem.getApplicationDataDirectory(), 'application.db'));

  self.executeGetRows = function (sql) {
    var rows = window.DB.execute(sql);
    var result = [];

    while(rows.isValidRow()) {
      var item = {};
      var i = 0;

      while (true) {
        var key, val;

        try {
          val = rows.field(i);
          key = rows.fieldName(i);
        } catch (e) { break; }
        item[key] = val;
        i++;
      };

      result.push(item); 
      rows.next();

    };
    rows.close();
    return result; 
  };

  self.executeGetScalar = function (sql) {
    var row = window.DB.execute(sql);
    var result = null;
    if (row.isValidRow()) {
      result = row.field(0);
    };
    row.close();
    return result;
  };

};
