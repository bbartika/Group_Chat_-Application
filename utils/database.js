const Sequelize=require('sequelize').Sequelize
require('dotenv').config();


const sequelize=new Sequelize('chatapp','root','uitIT$1822',{
    dialect:'mysql',
    host:'localhost',
    
});

module.exports=sequelize
