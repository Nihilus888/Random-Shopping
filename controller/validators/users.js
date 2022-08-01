const Joi = require('joi')
const { joiPasswordExtendCore } = require('joi-password');
const JoiPassword = Joi.extend(joiPasswordExtendCore);

const userValidators = {
    createUser: Joi.object({
        username: Joi.string().min(5).required(),
        password: JoiPassword.string()
        .min(5)
        .noWhiteSpaces()
        .required(),
        confirmPassword: Joi.string().required().valid(Joi.ref('password')),

        if(err) {
            console.log(err)
        }
    })
}

module.exports = userValidators