const shortid = require('shortid');

let db = require('../db.connect');



module.exports.getUsers = (req,res)=>{
    const users = db.get('users').value();
    res.render('users',{users:users, title:'Danh sách nhân viên'}); // viết tắt của  {users:users}
};
module.exports.createUser = (req,res)=>{
    res.render('create.users.pug',{title:'Tạo thông tin nhân viên mới'});
};
module.exports.postCreateUser = (req,res)=>{
    console.log(req.body);
    let errors = []; 
    let flag = false;
    if(req.body.fullname === ''){
        errors.push('Fullname cannot empty!');
        flag = true;
    }
    if(!req.body.phone){
        errors.push('Phone cannot empty!');
        flag = true;
    }
    req.body.avatar = req.file.path.split('\\').slice(1).join('/');
    
    if(!flag){
        req.body.id = shortid.generate();
        db.get('users').push(req.body).write();
        res.redirect('/users');
    }else{
        const values = {};
        values.fullname = req.body.fullname;
        values.phone = req.body.phone;
        res.render('create.users.pug',{errors:errors,values:values});
    }
};