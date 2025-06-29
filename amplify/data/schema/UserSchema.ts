import { a } from "@aws-amplify/backend";

export const UserSchema = a.schema({
  User: a.model({
    firstName: a.string(),
    lastName: a.string(),
    email: a.string().required(),
  })
}).authorization((allow) => [allow.authenticated('identityPool')])