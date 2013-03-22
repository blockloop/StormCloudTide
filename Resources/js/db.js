var Database = function (filepath) {
  var self = this;
  self.dbFile = Ti.Filesystem.getFile(Ti.Filesystem.getApplicationDataDirectory(), 'stormcloudtide.db');
  console.log('Using database ' + self.dbFile.toString());
  self.db = Ti.Database.openFile(self.dbFile);

  self.executeSql = function (sql) {
    console.log(String.format("executeSql: {0}", sql));
    var rows = self.db.execute(sql);
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
      }

      result.push(item); 
      rows.next();

    }
    rows.close();
    return result; 
  };

  self.executeGetScalar = function (sql) {
    var row = self.db.execute(sql);
    var result = null;
    if (row.isValidRow()) {
      result = row.field(0);
    }
    row.close();
    return result;
  };

  self.setup = function () {
    if (self.dbFile.exists()) { console.log(self.dbFile); }
    var resourcesDir = Ti.Filesystem.getResourcesDirectory();
    var dir = Ti.Filesystem.getFile(resourcesDir, 'init_sql');
    var files = dir.getDirectoryListing();
    files = _.sortBy(files, function (name) { return name; });
    console.log(String.format("Seeding {0} files in init_sql", files.length));

    for (var i = 0; i <= files.length - 1; i++) {
      var file = Ti.Filesystem.getFile(files[i]);
      var contents = file.open().read().toString().trim();
      self.executeSql(contents);
    };
  };

};
