import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user";
import config from "../../config/index";


const { JWT_SECRET } = config;
const router = express.Router();

//@routes Get api/user
//@desc Get all user
//@access public
router.get('/', async(req,res) => {
    try {
        const users = await User.find();
        if(!users) throw Error("유저가 없습니다.");
        res.status(200).json(users);
    } catch(e) {
        console.log(e);
        res.status(400).json({ msg:e.message })
    }
});

//@routes Post api/user
//@desc Register user
//@access public
router.post('/',(req,res) => {
    const { name, email, password } = req.body;

    //간단 인증
    if(!name || !email || !password) {
        return res.status(400).json({msg:"모든 필드를 채워주세요."})
    }

    //만약 기존에 가입된 유저일경우
    User.findOne({email}).then((user => {
        if(user) return res.status(400).json({msg:"이미 가입된 유저가 존재합니다."});
        //존재하지 않을경우
        const newUser = new User({
            name, email, password
        })
        
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(newUser.password, salt, (err,hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save().then((user) => {
                    jwt.sign(
                        {id: user.id},
                        JWT_SECRET,
                        {expiresIn: 3600}, //만기일
                        (err,token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id:user.id,
                                    name:user.name,
                                    email:user.email
                                }
                            })
                        }
                    )
                })
            })
        })
    }))
    
})

export default router;
