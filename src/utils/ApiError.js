class ApiError extends Error {
    constructor(
        statuscode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statuscode = statuscode
        this.data = null;
        this.message = message;
        this.success = null;
        this.errors = errors

        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
    }

}

export { ApiError }

// designed to help you handle errors in a structured and consistent way in APIs.