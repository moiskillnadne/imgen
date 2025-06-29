import { a } from "@aws-amplify/backend";

export const GenerationsSchema = a.schema({
  File: a.customType({
    bucketName: a.string(),
    key: a.string(),
    mimeType: a.string(),
    size: a.integer(),
  }),
  
  Generations: a.model({
    email: a.string().required(),
    type: a.string().required(),
    status: a.string().required(),
    originalFile: a.ref("File"),
    generatedFile: a.ref("File"),
  })
}).authorization((allow) => [allow.authenticated('identityPool')])