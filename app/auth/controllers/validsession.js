exports.get = async (req, res) => {
    const data = {email: req.user.email};
    res.json(data);
};

