import { body, param, buildCheckFunction, validationResult } from 'express-validator';

const checkBodyAndQuery = buildCheckFunction(['body', 'params', 'query']);

export const validateFormData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const userFormConstraints = [
  body('name')
    .exists()
    .withMessage('the name field is required')
    .isLength({ min: 1 })
    .withMessage('the name field is required')
    .isString()
    .withMessage('the name must be a string')
    .trim()
];

export const validParamId = [
  param('user_id')
    .isInt()
    .withMessage('wrong id format, must be an integer'),
];
