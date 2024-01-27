const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');

const firma = '123ABC@@#';

passport.use(
    'login',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          //if (!user) return done(null, false, { message: 'User not found' });
          //if (!validate) return done(null, false, { message: 'Wrong Password' });
          const user = {
            email,
            password
          };
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

passport.use(
  new JWTstrategy(
    {
      secretOrKey: firma,
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);