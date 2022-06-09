const { publications } = require('../database/data.js');

const { Publication, User } = require('../database/postgres.js');

exports.getPublications = async (offset, limit) => {
  // Retorna las limit publicaciones activas a partir de la nro offset

    console.log('en get pub')
    const activePub = await Publication.findAll({
      attributes: [
        'date'
      ]})
    return activePub;
};

exports.postPublication = async (detail, price, album, usr_id=1) => {
  try {
    const user= await User.findOne({where: {id:usr_id}})
    const publication= await Publication.create({date: Date.now(), state: 'Active', detail, price, album});
    publication.setUser(user)
    return publication;  
  }
  catch (error)
  {
    return { err_msg: 'Publication post error' }
  }
}
