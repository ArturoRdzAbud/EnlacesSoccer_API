const passport = require('passport');
const jwt = require('jsonwebtoken');

const firma = '123ABC@@#';

exports.post = async (req, res, next) => {
    passport.authenticate(
        'login',
        async (error, user, info) => {
            try {
                if (error || !user) return next(new Error(error));
                req.login(
                    user,
                    {session: false},
                    async (error) => {
                        if (error) return next(error);
                        const body = {
                            email: user.email,
                            password: user.password
                        };
                        const token = jwt.sign({ user: body }, firma);
                        return res.json({token});
                    }
                );
            } catch (error) {
                return next(error);
            }
        }
    )(req, res, next);
}