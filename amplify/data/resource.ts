import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { UserSchema } from "./schema/UserSchema";

const schema = a.combine([UserSchema])

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