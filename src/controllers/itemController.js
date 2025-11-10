const Item = require('../models/itemModel');

exports.getAllItems = async (req, res) => {
  try {
    const query = req.query;
    //   console.log('query ', query);
    const items = await Item.find(query || null);

    res.status(200).json({
      status: 'success',
      results: items.length,
      data: {
        items,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getItem = async (req, res) => {
  //   const item = req.params.item * 1;
  try {
    const item = await Item.findById(req.params.itemID);

    res.status(200).json({
      status: 'success',
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createNewItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        item: newItem,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.itemID,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: 'success',
      data: {
        updatedItem,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.itemID);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
