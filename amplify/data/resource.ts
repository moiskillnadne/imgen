import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { GenerationsSchema } from "./schema/Generations";

const schema = a.combine([GenerationsSchema])

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});