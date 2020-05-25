
module.exports.validateInfor = (req,res)=>{
    let errors = [];
    if(req.body.fullname){
        errors.push('Fullname cannot empty!');
    }
    if(req.body.phone){
        errors.push('Phone cannot empty!');
    }
    if(req.body.avatar){
        req.body.avatar = 'https://picsum.photos/80/80';
    }
};