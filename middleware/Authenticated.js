import jwt from 'jsonwebtoken';
export default function Authenticated(icomponent) {
    return (req, res) => {
        const { authorization } = req.headers
        console.log(authorization)
        if (!authorization) {
            return res.status(401).json({
                error: "First You must Logged In"
            })
        }

        const data = jwt.verify(authorization, process.env.JWT_SECRET)
        req.userId = data.userId
        console.log(req.userId, data)

        return icomponent(req, res)
    }
}