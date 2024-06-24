  export const validateSchema = (schema) => (req, res, next) => {
    try {
      schema.parse(req.body);
        next();
    } catch (error) {
        let errorMessage;
        if (error.errors) {
            errorMessage = error.errors.map((error) => error.message);
        } else {
            errorMessage = error.message;
        }
        return res
            .status(400)
            .json({ message: errorMessage });
    }
}; 
