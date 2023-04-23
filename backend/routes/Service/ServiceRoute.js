const express = require("express");
const Service = require("../../models/Service/Service");

const router = express.Router();

//Save Service
router.post("/service/save", (req, res) => {
    let newPost = new Service(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }

        return res.status(200).json({
            success: "Services Added Successfully",
        });
    });
});

//Get Service
router.get("/service", (req, res) => {
    Service.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts,
        });
    });
});

//get a specific Service provider
router.get("/service/:id", (req, res) => {
    let postId = req.params.id;

    Service.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            post,
        });
    });
});

//Update Services
router.put("/service/update/:id", (req, res) => {
    Service.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated Successfully",
            });
        }
    );
});

//Delete Services
router.delete("/service/delete/:id", (req, res) => {
    Service.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
        if (err)
            return res.status(400).json({
                message: "Delete Unsuccessful",
                err,
            });
        return res.json({
            message: "Delete Successful",
            deletedpost,
        });
    });
});

module.exports = router;
