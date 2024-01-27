exports.post = async (req, res) => {
    res.json({
        message: 'Signup successful',
        user: req.user
    });
};