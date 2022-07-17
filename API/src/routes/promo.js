const { Router } = require('express')
const dbConnection = require('../database.js');
const router = Router();



//! RUTAS DE PROMO
router.get('/promo', (req,res) => {
   dbConnection.query('SELECT * FROM promo', (err, rows, fields) => {
       if(!err) {
           res.json(rows);
       } else {
           console.log(err);
       }
   })
})

router.get('/promo/:uid', (req,res) => {
    const { uid } = req.params;
    dbConnection.query(`SELECT * FROM promo WHERE uid = ?`, [uid], (err, rows, fields) =>{
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})


router.post('/promo', (req,res) =>{
    const { name,desc, uid } = req.body;
    dbConnection.query("INSERT INTO promo(`name`,`desc`,`UID`) VALUES ('"+name+"','"+desc+"','"+uid+"')", (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        } else console.log(err);
    });
})

router.put('/promo/:uid', (req,res) => {
    const { uid } = req.params;
    const { state } = req.body;
    dbConnection.query(`UPDATE promo SET used = ${state} WHERE uid = ?`, [uid], (err, rows, fields) =>{
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})


router.delete('/promo/:UID', (req,res) => {
    const { UID } = req.params;
    dbConnection.query(`DELETE FROM promo WHERE UID = ?`, [UID], (err,rows,fields) =>{
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
        })
    });

module.exports = router;