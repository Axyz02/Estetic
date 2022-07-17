const e = require('express');
const { Router } = require('express')
const { uid } = require('uid');
const dbConnection = require('../database.js');
const router = Router();



//! RUTAS DE PROMO
router.get('/client', (req,res) => {
   dbConnection.query('SELECT * FROM cliente', (err, rows, fields) => {
       if(!err) {
           res.json(rows);
       } else {
           console.log(err);
       }
   })
})

router.get('/client/:DNI', (req,res) => {
    const { DNI } = req.params;
    dbConnection.query(`SELECT * FROM cliente WHERE DNI = ?`, [DNI], (err, rows, fields) =>{
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})


router.post('/client', (req,res) =>{
    const { name,lname,DNI,cumpleanios } = req.body;
    dbConnection.query("INSERT INTO cliente(`name`,`lname`,`DNI`,`cumpleanios`) VALUES ('"+name+"','"+lname+"','"+DNI+"','"+cumpleanios+"')", (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        } else console.log(err);
    });
})

router.put('/client/:DNI', (req,res) => {
    const { DNI } = req.params;
    const { name,lname,cumpleanios } = req.body;
    dbConnection.query(`UPDATE promo SET name = ${name}, lname = ${lname}, cumpleanios = ${cumpleanios} WHERE DNI = ?`, [DNI], (err, rows, fields) =>{
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})

router.delete('/client/:DNI', (req,res) => {
    const { DNI } = req.params;
    dbConnection.query(`DELETE FROM cliente WHERE DNI = ?`, [DNI], (err,rows,fields) =>{
        if (!err){ res.json(rows); }
            else console.log(err);
        })
    });

module.exports = router;