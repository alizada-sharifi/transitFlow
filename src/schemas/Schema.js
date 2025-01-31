import { z } from "zod";
const schema = z.object({
  email: z.string().nonempty("Email is required").email("Email is not valid"),
  name: z
    .string()
    .nonempty("Name is required")
    .min("Name must be more than 3 characters"),
  phone: z.string().nonempty("Phone Number is required"),
  city: z.string().nonempty("City name is required"),
});
export default schema;
