const validate = (validatorSchema, body, alterKey) => {
    if (alterKey) {
        return validatorSchema.tailor(alterKey).validateAsync(body);
    }

    return validatorSchema.validateAsync(body);
}

module.exports = validate;