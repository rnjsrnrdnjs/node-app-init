const express=require('express');
const router=express.Router();

module.exports=(app)=>{
	app.use('/',router);
	router.use((req,res,next)=>{
	/* res.locals 값추가 가능*/
		next();
	});

	
	router.get('/',(req,res,next)=>{
		res.render('index');
	});
}

