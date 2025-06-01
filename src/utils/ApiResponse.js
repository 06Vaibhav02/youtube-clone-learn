class ApiResponse {
    constructor(statuscode, data, message = "Success") {
        this.statuscode = statuscode;
        this.data = data;
        this.message = message;
        this.success = statuscode < 400
        //if statuscode less than 400 
    }
}

export { ApiResponse }

// designed to help you handle resoonses in a structured and consistent way in APIs.