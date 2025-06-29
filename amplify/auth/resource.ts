import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  multifactor: {
    mode: 'OFF'
  },
  userAttributes: {
    email: {
      required: true,
      mutable: true
    }
  },
  senders: {
    email: {
      fromEmail: 'victor.ryabkov.advertisment@gmail.com',
    },
  }
});
