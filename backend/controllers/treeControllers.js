const mongoose = require("mongoose")
// const { findByIdAndUpdate } = require("../models/recipe")
const Trees = require("../models/trees")
const addTree = async (req, res) => {
    try {
        const newTree = new Trees({
            name: req.body.name,
            authority: req.body.authority,
            ownership: req.body.ownership,
            image: req.body.image,
            location: req.body.location,
            topography: req.body.topography,
            soil: req.body.soil
        })
        await newTree.save()
        return res.status(201).json(newTree)
    }

    catch (error) {
        res.json(error)
        console.log(error)
    }
}

const getTree = async (req, res) => {
    try {
        const getTrees = await Trees.find()
        res.status(200).json(getTrees)

    }
    catch (error) {
        res.json(error)
    }

}
const getOne = async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.json({ error: "Invalid  Id" })
        }
        const getTree = await Trees.findOne({ _id: id })
        if (!getTree) {
            return res.json({ error: "This is not a valid id" })
        }
        res.status(200).json(getTree)


    }
    catch (error) {
        res.json(error)

    }

}
const editTree = async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.json({ error: "Invalid id" })
        }
        const updateTree = await Trees.findOneAndUpdate({ _id: id })
        if (!updateTree) {
            res.json({ error: "This post id is not available" })
        }
        return res.status(200).json(updateTree)

    }
    catch (error) {
        res.json(error)

    }

}

const deleteTree = async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.json({ error: "This is an invalid id" })
        }

        const removeTree = await Trees.findOneAndDelete("_id:id")
        if (!removeTree) {
            res.json({ error: "This tree's information is not available" })
        }
        return res.status(200).json(removeTree)

    }
    catch (error) {
        res.json(error)

    }
}


module.exports = { addTree, getTree, getOne, editTree, deleteTree }