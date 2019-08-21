'use strict';

const express = require('express');

const Collection = require('../models/Collection.js');
const User = require("../models/User.js");

const router = express.Router();

router.get('/', async (req, res, next) => {
  const user = req.session.currentUser;
  console.log(user);
  try {
    const listOfCollections = await Collection.find();
    res.status(200).json({ listOfCollections });
  } catch (error) {
    next(error);
  }
}
);

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneCollection = await Collection.findById(id);
    res.status(200).json(oneCollection);
  } catch (error) {
    next(error);
  }
}
);


router.post('/new', async (req, res, next) => {

  try {
    // const newCollection = req.body;
    const title = req.body.title
    console.log(req.body)
    // const {_id} = req.session.currentUser
    const id = req.session.currentUser._id
    console.log(req.session.currentUser, id)
    // const createdCollection = await Collection.create(newCollection);
    const createdCollection = await Collection.create({title: title});
    console.log(createdCollection)
    const updateUser = await User.findByIdAndUpdate(id, {$push:{collections: createdCollection._id}}, {new: true}).populate('collections');
   
    res.status(200).json({createdCollection});
  } catch (error) {
    next(error);
  }
});

router.put('/:id/update', async (req, res, next) => {
  const { id } = req.params;
  const collectionUpdated = req.body;
  try {
    const updated = await Collection.findByIdAndUpdate(id, collectionUpdated, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
});

router.put('/:id/add_formula', async (req, res, next) => {
  const { id } = req.params;
  const { formulaName } = req.body;

  try {
    const updated = await Collection.findByIdAndUpdate(id, { $push: { formulas: formulaName }}, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Collection.findByIdAndDelete(id);
    res.status(200).json({ message: 'collection deleted' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;