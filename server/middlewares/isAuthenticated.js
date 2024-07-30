import jwt from 'jsonwebtoken';

// Middleware to check if the user is authenticated
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token; // Use req.cookies.token to get the token from cookies
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false
      });
    }

    req.id = decoded.userId;

    next(); 
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

export default isAuthenticated;
