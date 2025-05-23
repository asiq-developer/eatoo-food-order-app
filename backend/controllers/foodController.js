import foodModel from "../models/foodmodel.js";
import fs from 'fs';

// const addFood = async (req,res) => {

//     let image_filename = `${req.file.filename}`;

//     const food = new foodModel({
//         name:req.body.name,
//         description:req.body.description,
//         price:req.body.price,
//         category:req.body.category,
//         image:image_filename

//     })
//     try{
//         await food.save();
//         res.json({success:true,message:"Food Added"})
//     }catch(error){
//         console.log(error)
//         res.json({success:false,message:"Error "})
//         console.log('error')


//     }


// }


const addFood = async (req, res) => {
  try {
    console.log("📥 req.body:", req.body);
    console.log("📷 req.file:", req.file);

    if (!req.file) {
      console.log("⚠️ No file uploaded");
      return res.status(400).json({ success: false, message: "Image not uploaded" });
    }

    // Basic validation
    if (!req.body.name || !req.body.price || !req.body.category) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description || "",
      price: parseFloat(req.body.price),
      category: req.body.category,
      image: req.file.filename,
    });

    const saved = await food.save();
    console.log("✅ Saved:", saved);

    res.status(200).json({ success: true, message: "Food added" });
  } catch (error) {
    console.error("🔥 Backend Crash:", error.message);
    console.error(error.stack); // Full stack trace
    res.status(500).json({ success: false, message: error.message });
  }
};

const listFood = async (req,res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})

    }catch{
        console.log(error);
        res.json({success:false,message:"error"})
    }

    
}

const removeFood = async (req,res) =>{
    try{
        const food = await foodModel.findById(req.body.id);  //find food model
        fs.unlink(`uploads/${food.image}`,()=>{ })   //delete the item

            await foodModel.findByIdAndDelete(req.body.id);
            res.json({success:true,message:"Food Removed"})

        }

    
    catch (error){
        console.log(error);
        res.json({success:false,message:"Error"})

    }
}



export {addFood,listFood,removeFood}