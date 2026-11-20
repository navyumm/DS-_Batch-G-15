import asyncHandler from "../utils/asyncHandler";


const registerUser = asyncHandler( async (req, res)=>{
    res.status(200).json({
        message: "our controller is working!!!"
    })
})

export {
    registerUser
}