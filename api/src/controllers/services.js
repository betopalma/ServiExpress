const {getServices, getServiceById, postService ,deleteService, updateService} = require('../services/services.js');
const {BAD_REQUEST, CREATED, OK} = require('../routes/helpers/status.js')

exports.getServices = async (req, res, next) => {
  try {
    const r = await getServices();
    res.status(OK).json(r);
  } catch (error) {
    next(error);
  }
};

exports.getServiceById =async (req, res, next) => {
  try {
    const r = await getServiceById(req.params.id);
    res.status(OK).json(r);
  } catch (error) {
    next(error);
  }
};

exports.postService=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de categories
    const r = await postService(req.body.name,req.body.categories);
    res.status(CREATED).send(r.message);
  } catch (error) {
    next(error);
  }
}

exports.updateService=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de categories
    const r = await updateService(req.query.id,req.body.name);
    if(r.err_message){
      res.status(BAD_REQUEST).send(r.err_message)
    }
    res.status(OK).send(r.message);
  } catch (error) {
    next(error);
  }
}

exports.deleteService=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de categories
    const r = await deleteService(req.query.id);
    if(r.err_message){
      res.status(BAD_REQUEST).send(r.err_message)
    }
    res.status(OK).send(r.message);
  } catch (error) {
    next(error);
  }
}