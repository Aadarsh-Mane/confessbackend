import jwt  from "jsonwebtoken";
export const checkToken=(req,res,next)=>{
  let token=req.headers['authorization'];
  console.log(token);
  next()
}