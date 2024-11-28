import jwt from 'jsonwebtoken'

export const Generate_Token = (user) => {
    
    return jwt.sign(
        { id: user.id, email: user.email, type: user.type },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    
};