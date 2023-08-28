import Router from "express";
import User, { findOne } from "../models/User";
import { hash } from "bcriptjs";
import { check, validationResult } from "express-validator";
const router = new Router();

router.post('/registration', async (req,res) => {
    [
        check('emails', "Uncorrect email").isEmail(),
        check('password', "password must be more than 3 and less than 12").isLength({min:3,max:12})
    ]
    try{

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message: "Uncorrect request", errors})
        }

        const{email, password} = req.body
        const candidate = findOne({email})

        if(candidate){
            return res.status(400).json({message:`User with email ${email} is already exist`})
        }
        const hashPassword = await hash(password, 15)
        const user = new User({email, password: hashPassword})
        await user.save()
        return res.json({message:"User was created"})
    }catch(e){
        console.log(e);
        res.send("server doesnt work")
    }
})

module.exports = router;