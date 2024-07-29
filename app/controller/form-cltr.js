const Formtask = require('../model/form-model')

const formCltr = {}

formCltr.list = async(req,res) => {
    try {
        const data = await Formtask.find()
        res.json(data)
    } catch (e) {
        res.status(500).json(e.message)
    }
}
formCltr.add = async function(req,res){
    const {body} = req
    console.log('body',body)
    const { title, fields} = req.body

    const textFields = [];
    const numberFields = [];
    const emailFields = [];
    const passwordFields = [];
    const dateFields = []

    fields.forEach(field => {
        const { type, label, value, placeholder } = field;
        const inputField = { label, inputType: type, value, placeholder };

        switch(type) {
            case 'text':
                textFields.push(inputField);
                break;
            case 'number':
                numberFields.push(inputField);
                break;
            case 'email':
                emailFields.push(inputField);
                break;
            case 'password':
                passwordFields.push(inputField);
                break;
            case 'date':
                dateFields.push(inputField);
                break;
            default:
                break;
        }
    });
    
    const formTask = new Formtask({
        title,
        textFields,
        numberFields,
        emailFields,
        passwordFields,
        dateFields
    })
    try {
        const data = await formTask.save();
        res.json(data);
    } catch (e) {
        res.status(500).json(e.message);
    }

    // const formTask = new Formtask(body)
    // try{
    //     const data = await formTask.save()
    //     res.json(data)
    // }
    // catch(e){
    //     res.status(400).json(e.message)
    // }
}

formCltr.addInput = async function(req,res){
    const {body} = req
    console.log(body)
    try {
        const result = await Formtask.findByIdAndUpdate(body._id,body,{new : true})
    } catch (e) {
        res.status(500).json(e.message)   
    }
}

formCltr.destroy = async function(req,res){
    const id = req.params.id
    try {
        const data = await Formtask.findOneAndDelete({_id : id})
        res.json(data)
    } catch (e) {
        res.status(500).json(e.message)
    }
}

module.exports = formCltr