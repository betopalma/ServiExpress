const { categories } = require('../database/data.js');
const {Category, Service}=require('../database/postgres.js')

exports.getServices=async()=>{
    const services=await Service.findAll({
    attributes: [
      ['id', 'ser_id'],
      ['name', 'ser_name']
    ],
    include:{
      model:Category,
      attributes:[['id','cat_id'],['name','cat_name']]}
    })

    return services;
}

exports.getServiceById=async(id)=>{
    const service=await Service.findOne({
        where:{id:id},
        attributes: [
          ['id', 'ser_id'],
          ['name', 'ser_name']
        ],
        include:{
          model:Category,
          attributes:[['id','cat_id'],['name','cat_name']]}
    })
    
    return service;
};

exports.postService=async(name,categories=[])=>{
    const service=await Service.create({name:name});
    service.setCategories(categories)

    return {message:'Service updated successfully'}
}

exports.updateService=async(id,name)=>{
  const service=await Service.findById(id);

  if(!service){
    return {err_message:'Service not found'}
  }
  service.update({name});
  return {message:'Service updated successfully'}
}

exports.deleteService=async(id)=>{
  const service= await Service.findById(id);
  if(!service){
    return {err_message:'Service not found'}
  }
  await Service.destroy({where:{id:id}});
  return {message:'Service deleted successfully'}
}