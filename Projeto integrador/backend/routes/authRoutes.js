const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", (req, res) => {

    const token = jwt.sign(

        {
            usuario: "admin"
        },

        process.env.JWT_SECRET,

        {
            expiresIn: "1h"
        }

    );

    res.json({ token });

});

module.exports = router;