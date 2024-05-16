import { objectUtil, z } from "zod";

export const createProductsSchema = z.object({

    ID: z.string({
        required_error: " ID es requerido "
    }),
    description: z.string({
        required_error: " La descripción es requerida "
    }), 
    codigoCompuesto: z.string({
        required_error: " El compuesto es requerido "
    }),
    Espesor: z.number({
        required_error: " El espesor del producto es requerid "
    }),
    Dexterno: z.number({
        required_error: " El diametro externo es requerido "
    }),
    Dinterno: z.number({
        required_error: " El diametro interno es requerido "
    }),
    IdPlano:z.string({
        required_error: " El identificador del plano es requerido "
    }), 
    Idmolde: z.string({
        required_error: " El identificador del molde es requerido "
    }), 

});

