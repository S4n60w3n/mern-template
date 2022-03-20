const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

const COLLECTION = 'cards'
const BASE = '/cards'


recordRoutes.route(BASE).get((req, res) => {
  const db_connect = dbo.getDb();

  if (!db_connect) {
    res.status(500).send('Unexpected error')
    return 
  }

      db_connect
        .collection(COLLECTION)
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.json(result);
        });
});

recordRoutes.route(BASE).post((req, res) => {
  const db_connect = dbo.getDb();

  if (!db_connect) {
    res.status(500).send('Unexpected error')
    return 
  }

  const myobj = {
    title: req.body.title,
  };
  db_connect.collection(COLLECTION).insertOne(myobj, function (err, result) {
    if (err) throw err;
    console.log("1 document added");
    res.json(result);
  });
});

recordRoutes.route(`${BASE}/:id`).get(function (req, res) {
  const db_connect = dbo.getDb();

  if (!db_connect) {
    res.status(500).send('Unexpected error')
    return 
  }
  const myquery = { _id: ObjectId( req.params.id )};

      db_connect
        .collection(COLLECTION)
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
});

recordRoutes.route(`${BASE}/:id`).put(function (req, res) {
  const db_connect = dbo.getDb();

  if (!db_connect) {
    res.status(500).send('Unexpected error')
    return 
  }
  const myquery = { _id: ObjectId( req.params.id )};

      const newvalues = {
        $set: {
          title: req.body.title
        },
      };
      db_connect
        .collection(COLLECTION)
        .updateOne(myquery, newvalues, function (err, result) {
          if (err) throw err;
          console.log("1 document updated");
          res.json(result);
        });
});

recordRoutes.route(`${BASE}/:id`).delete(function (req, res) {
  const db_connect = dbo.getDb();

  if (!db_connect) {
    res.status(500).send('Unexpected error')
    return 
  }
  const myquery = { _id: ObjectId( req.params.id )};

      db_connect.collection(COLLECTION).deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        res.json(obj);
      });
});
 
module.exports = recordRoutes;