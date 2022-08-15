
/**
 * Performs validation operation on specified Mangoose schema and objects
 *
 * @method Validate
 * @param {Joi Schema Object} schema the Joi schema against which validation should be performed
 * @param {string} route used for specific route validation, null for all other routes.
 *
 * @return {} It returns a next() object for further execution
 */
exports.validate = (schema) => (req, res, next) => {


    const object = { ...req['query'], ...req['params'], ...req['body'] };

    // validate and return to main route
    const result = schema.validate(object);
    const { error, value } = result;
    const valid = error == null;
    if (valid) {
        return next();
    }
    const { details } = error;
    const message = details.map(i => i.message).join(',');
    const validationError = `Validation Error: ${req.originalUrl} - Reason: ${message}`;
    return res.status(422).json({
        status: 'error',
        message: validationError
    });
};
