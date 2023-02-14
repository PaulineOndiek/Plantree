const express=require("express");
const mongoose=require("mongoose");
const {addTree,getTree,getOne,editTree,deleteTree}=require ("../controllers/treeControllers")
const router=express.Router();
                            
router.post("/new", addTree)
router.get("/", getTree)
router.get("/:id", getOne)
router.patch("/:id", editTree)
router.delete("/:id", deleteTree)


module.exports=router;