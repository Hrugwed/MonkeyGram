export const protect = async (req, res, next) => {
    try {
        const {userId} = await req.auth();
        console.log('Clerk userId in protect middleware:', userId);
        if(!userId){
            return res.json({success: false, message: "not authenticated"  })
        }
        next()
    } catch (error) {
        console.error('Error in protect middleware:', error);
        res.json({success: false, message: error.message  })
    }
}