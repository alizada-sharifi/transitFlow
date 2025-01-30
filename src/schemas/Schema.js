import { z } from "zod";
const schema = z.object({
  email: z.string().nonempty("email is required").email("Email is not valid"),
});
export default schema;
