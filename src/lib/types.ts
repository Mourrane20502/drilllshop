import { z } from "zod";

export const FormSchema = z.object({
    fullName: z.string().nonempty(),
    email: z.string().email(),
    phone: z.string().nonempty(),
    message: z.string().nonempty(),
})

export type FormSchemaType = z.infer<typeof FormSchema>;