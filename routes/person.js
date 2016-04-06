var db = require("../db");

/*
 * GET people listing.
 */

exports.list = function(req, res){
  	var val;
	//db.getDbCollectionAndDoc()
	//.then(() => db.queryCollection())
	// .then((result) => {
		// val = result; // Save the result of queryCollection
		// db.cleanup(); 
	// })
	//.then(() => { res.send('Completed successfully:'+val); })
	
	db.queryCollection()
		.then((values) => { 
			res.render('index', { title: 'My Test App', values: values });
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

exports.get = function(req, res){
  	var val;
	//db.getDbCollectionAndDoc()
	//.then(() => db.queryCollection())
	// .then((result) => {
		// val = result; // Save the result of queryCollection
		// db.cleanup(); 
	// })
	//.then(() => { res.send('Completed successfully:'+val); })
	
	db.queryCollectionById(req.params.id)
		.then((value) => { 
			res.render('person', { title: 'My Test App', person: value });
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