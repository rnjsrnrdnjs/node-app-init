const express=require('express');
const dotenv=require('dotenv');

dotenv.config();

async function startServer() {
const app=express();
app.set('port',process.env.PORT || 3000);
	
  await require('./loaders')(app);

  app.listen(app.get('port'), () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${app.get('port')} 🛡️
      ################################################
    `);
  }).on('error', err => {
    Logger.error(err);
    process.exit(1);
  });

}

startServer();

