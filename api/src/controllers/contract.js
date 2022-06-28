const { createContract, deleteContract, getContractById, getContracts, updateContract } = require('../services/contract.js');
const { BAD_REQUEST, CREATED, OK } = require('../routes/helpers/status.js');

exports.getContracts = async (req, res, next) => {
  try {
    const r = await getContracts();
    res.status(OK).json(r);
  } catch (error) {
    next(error);
  }
};

exports.getContractById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const r = await getContractById(id);
    if (r.err_message) {
      res.status(BAD_REQUEST).send(r.err_message);
    } else {
      res.status(OK).json(r);
    }
  } catch (error) {
    next(error);
  }
};

exports.postContract = async (req, res, next) => {
  try {
    const { user, publication, country, postal_code, state, city, address, service_date } = { ...req.body };
    const r = await createContract(user, publication, country, postal_code, state, city, address, service_date);
    if (r.err_message) {
      res.status(BAD_REQUEST).send(r.err_message);
    } else {
      res.status(CREATED).json(r);
    }
  } catch (error) {
    next(error);
  }
};

exports.updateContract = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const r = await updateContract(id, changes);
    if (r.err_message) {
      res.status(BAD_REQUEST).send(r.err_message);
    } else {
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteContract = async (req, res, next) => {
  try {
    const { id } = req.params;
    const r = await deleteContract(id);
    if (r.err_message) {
      res.status(BAD_REQUEST).send(r.err_message);
    } else {
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
};
