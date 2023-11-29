const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwtKey = process.env.JWT_SECRET

const protect = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt
    if (token) {
        try {
            const decoded = jwt.verify(token, jwtKey)
            req.user = await User.findById(decoded.userId).select('-password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error('Not Authorized, Invalid Token')
        }
    } else {
        res.status(401)
        throw new Error('Not Authorized, no token')
    }

})

module.exports = { protect }