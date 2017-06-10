var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  console.log(req.method);
  
  if (req.method === 'GET') {
    fs.readFile(archive.paths.siteAssets + 'index.html', 'utf8', function(err, data) {
      if (err) {
        throw err;
      } else {
        res.end(data);
      }
    });
  } else if (req.method === 'POST') {
    // CHECK LATER AND SEE IF BETTER URL RETREIVAL IS AVAIL.
    var url;
    req.on('data', function (data) {
      url = data.toString().slice(4);
    });
    
    fs.readFile(archive.paths.list, function(error, data) {
      if (error) {
        throw error;
      }
      var URLs = archive.readListOfUrls(data);
      // archive.isUrlInList(url, )
    });
    
    
    

  }
  
  // res.end(archive.paths.siteAssets);
};
