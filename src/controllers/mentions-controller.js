const mongoose = require('mongoose');


//import my model
const Mentions = mongoose.model('Mentions');


// list
exports.listMentions = async (req, res) => {
  try {
    const data = await Mentions.find();
    res.status(200).send(data);
  }
  catch (e) {
    //AQUI RETORNAVA UM ERRO 500, TOTALMENTE GENÉRICO, ENTÃO USEI O METODO toString() PARA QUE O CATCH ME RETORNASSE MAIS DETALHES SOBRE O ERRO
    res.status(500).send({message:e.toString()});
  }
};

// create
exports.createMentions = async (req, res) => {
    try {
      const mention = new Mentions({
        "friend": req.body.friend,
        "mention": req.body.mention
      });
  
      console.log(mention)
  
      await mention.save();
  
      res.status(201).send({message: 'Menção cadastrada com sucesso!'});
    } 
    catch (e) {
      res.status(500).send({message: e.toString()});
    
  }
}

//update
exports.updateFunction = async (id, data) => {
  await Mentions.findByIdAndUpdate(id, {
    $set: data
  });
};

exports.updateMention = async (req, res) => {
  try {
    await this.updateFunction(req.params.id, req.body);
    res.status(200).send({
      message: 'Menção atualizada com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message:e.toString()});
};
}

// delete
exports.deleteFunction = async id => {
  await Mentions.findOneAndRemove(id);
};

exports.deleteMentions = async (req, res) => {
  try {
    await this.deleteFunction(req.body.id);
    res.status(200).send({
      message: 'Menção removida com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: e.toString()});
  }
} 