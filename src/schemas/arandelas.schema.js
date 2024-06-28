import { z } from "zod";

export const createSchemaArandelas =z.object({

    ID: z.number({
        required_error: "El ID es requerido"
    }),
    Description: z.string({
        required_error: "La descripción es requerida"
    }),
    Compuesto: z.string({
        required_error: "El compuesto es requerido"
    }),
    W: z.number({
        required_error: "El W es requerido"
    }),
    Dexterno: z.number({
        required_error: "El I/D es requerido"
    }),
    Dinterno: z.number({
        required_error: "El E/D es requerido"
    }),
    PDF: z.string({
        required_error: "El nombre del PDF es requerido"
    })

});