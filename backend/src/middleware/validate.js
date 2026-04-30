import { validationResult } from 'express-validator'

export const validate = (validators) => {
  return async (req, res, next) => {
    for (const validator of validators) {
      await validator.run(req)
    }
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const formattedErrors = errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
      return res.status(400).json({ errors: formattedErrors })
    }
    next()
  }
}