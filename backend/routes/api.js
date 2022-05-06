const express = require('express');
const router = express.Router();

const Dialog = require('../models/dialog');


//all dialogs
router.get('/dialogs', async (req, res) => {
  try{
    const dialogs = await Dialog.find();
    res.status(200).json(dialogs);
  } catch (err) {
    res.status(500).json({message: err.message});
  }


});

//get specific dialog
router.get('/dialogs/:id', getDialog, (req,res) => {
  res.json(res.dialog);
});

//post a dialog
router.post('/dialogs', async (req,res) => {
  console.log('body',req.body)
  const dialog = new Dialog({
    sectionName: req.body.sectionName,
    textName: req.body.textName,
    pl: req.body.pl,
    en: req.body.en,
    de: req.body.de
  });
try{
  const newDialog = await dialog.save();
  res.status(201).json(newDialog)
}catch(err){
  res.status(400).json({message:err.message});
}
/*
  if(req.body.sectionName.length < 1 ||
     req.body.textName.length < 1 ||
     req.body.pl.length < 1  ||
     req.body.en.length < 1 ||
     req.body.de.length < 1)
      {
      res.status(400).send('Bad request. The data are incorrect');
      return;
    }


    res.send(dialog);
    */
  });

//update dialog
router.patch( '/dialogs/:id', getDialog, async (req,res)=> {

if( req.body.sectionName!=null) res.dialog.sectionName = req.body.sectionName;
if( req.body.textName!=null) res.dialog.textName = req.body.textName;
if( req.body.pl!=null) res.dialog.pl = req.body.pl;
if( req.body.en!=null) res.dialog.en = req.body.en;
if( req.body.de!=null) res.dialog.de = req.body.de;
try {
  const updatedDialog = await res.dialog.save();
  res.status(201).json(updatedDialog);
}catch(err){
  res.status(400).json({message:err})
}
});

//delete dialog
router.delete('/dialogs/:id',getDialog, async (req,res)=>{
try{
  await res.dialog.remove();
  res.json({message:'Dialog deleted'})
}catch(err){
  res.status(500).json({message: err.message});
}
});
async function getDialog(req,res,next) {
  let dialog;
  try{
      dialog = await Dialog.findById(req.params.id)
      if (dialog == null) {
        return res.status(404).json({message: 'Cannot find the dialog'});

      }
  }catch(err){
     return res.status((500).json({message: err.message}))
  }
  res.dialog = dialog;
  next();
}


module.exports = router;
