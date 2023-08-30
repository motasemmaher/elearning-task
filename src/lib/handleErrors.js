const handleError = (err) => {
    const message = {};
    if (err.details) {
        if (err.details.length <= 1) {
            message.message = err.details[0].message;
        } else if (err.details.length > 1) {
            const details = err.details.map((detail, index) => `${index + 1}- ${detail.message}.`).join(', ');
            message.message = `We found a couples of issues with request: ${details}`
        }
    } else {
        message.message = err.message || err.errorMessage;
    }
    
    return message;
};

module.exports = handleError;