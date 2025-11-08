const SubCategory = require('../models/subCategoryModel');

exports.getAllSubCategories = async (req, res) => {
  try {
    const query = req.query;
    //   console.log('query ', query);
    const subCategories = await SubCategory.find(query || null);

    res.status(200).json({
      status: 'success',
      results: subCategories.length,
      data: {
        subCategories,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.subCategoryID);

    res.status(200).json({
      status: 'success',
      data: {
        subCategory,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createNewSubCategory = async (req, res) => {
  try {
    const newSubCategory = await SubCategory.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        subCategory: newSubCategory,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(
      req.params.subCategoryID,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: 'success',
      data: {
        updatedSubCategory,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteSubCategory = async (req, res) => {
  try {
    await SubCategory.findByIdAndDelete(req.params.subCategoryID);

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
