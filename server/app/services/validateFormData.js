const Joi = require("joi");

const formDataSchema = Joi.object({
  firstname: Joi.string.max(120).required(),
  lastname: Joi.string.max(120).required(),
  email: Joi.string
    .max(120)
    .regex(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
    .required(),
  password: Joi.string
    .max(64)
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){16,64}$/)
    .required(),
});

const validateFormData = (req, res, next) => {
  const { error } = formDataSchema.validate(req.body, { abortEarly: false });

  if (error == null) next();
  else res.sendStatus(400).json({ validationErrors: error.details });
};

module.exports = validateFormData;
