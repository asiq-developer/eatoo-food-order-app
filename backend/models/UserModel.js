// import mongoose from 'mongoose'

// const userSchema = new mongoose.Schema({
//     name:{type:String , required:true},
//     email:{type:String, required:true},
//     password:{type:structuredClone,required:true},
//     cartData:{type:Object,default:{}}
// },{minimize:false})

// const userModel = mongoose.models.user || mongoose.Model("user",userSchema);

// export default userModel;

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
