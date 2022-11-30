const reportModel = require('../models/models')

const getReports = async (request, response) => {

     const reports = await reportModel.find();
      response.send(reports);
   
 };


 const getReport = async (request, response) => {

    const id = request.params.id
    const report = await reportModel.findOne({"id":id})
    if(!report)
    {
        return response.send({
            error: "No report found"
        })   
    }
     response.send({"Report": report})
};

const deleteReport =  async (request, response) => {
    let id = request.params.id

    let removedReport = await reportModel.findOneAndDelete({_id:id})
    if(!removedReport)
    {
        return response.send({
            error: "Report Not Deleted"
        })   
    }
     response.send({"Report": removedReport})
}

const postReport = async(request, response) => {
// const {id,address,date,exterior, interior} = request.body;
 const id  = request.body.id
 const address  = request.body.address
 const date  = request.body.date
 const exterior  = request.body.exterior
 const interior  = request.body.interior
try {
    const report =  await reportModel.create({id,address, date, exterior, interior})
    response.send({report})
} catch (error) {
    response.send(error.message)
}

 };

 const updateReport = async(request, response) => {
    const {id,address,date,exterior, interior} = request.body;
    //  const id  = request.body.id
    //  const address  = request.body.address
    //  const date  = request.body.date
    //  const exterior  = request.body.exterior
    //  const interior  = request.body.interior

    const report = await reportModel.findOne({"id":id})
    report = {
        id: id,
        address: address,
        date: date,
        exterior: exterior,
        interior: interior
    }
    try {
        await reportModel.findByIdAndRemove(id)
        const report =  await reportModel.replaceOne({"id": id},report)
        
        response.send({report})
    } catch (error) {
        response.send(error.message)
    }

 }

 
 const update = async(request, response) => {
     const {id,address,date,exterior, interior} = request.body;
    //  const id  = request.body.id
    //  const address  = request.body.address
    //  const date  = request.body.date
    //  const exterior  = request.body.exterior
    //  const interior  = request.body.interior

    const report = await reportModel.findOne({"id":id})
    report = {
        id: id,
        address: address,
        date: date,
        exterior: exterior,
        interior: interior
    }
    try {
        const report =  await reportModel.findByIdAndUpdate(report._id,report)
        response.send({report})
    } catch (error) {
        response.send(error.message)
    }
    
     };



 module.exports = {
    postReport,
 getReports,
 getReport,
  deleteReport,
  updateReport,
  update
 }
