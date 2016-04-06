var db = require("../db");

/*
 * GET home page.
 */

exports.index = function(req, res){
	var val;
	//db.getDbCollectionAndDoc()
	//.then(() => db.queryCollection())
	// .then((result) => {
		// val = result; // Save the result of queryCollection
		// db.cleanup(); 
	// })
	//.then(() => { res.send('Completed successfully:'+val); })
	
	db.queryCollection()
		.then((value) => { 
			console.log('Value: '+value);
			res.render('index', { title: 'My Test App', msg: 'State:'+value });
		})
		.catch((error) =>  { 
			if(typeof error == 'object') {
				console.log('Error: '+JSON.stringify(error));
				res.render('index', { title: 'My Test App', msg: 'Completed with error '+JSON.stringify(error) });
			} else {
				console.log('Error: '+error);
				res.render('index', { title: 'My Test App', msg: 'Completed with error '+error });
			}
		});
};