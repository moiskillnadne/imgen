import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

const { cfnResources } = backend.auth.resources;
const { cfnUserPool, cfnUserPoolClient } = cfnResources;

cfnUserPool.addPropertyOverride(
  'Policies.SignInPolicy.AllowedFirstAuthFactors',
  ['PASSWORD', 'EMAIL_OTP']
);

cfnUserPoolClient.explicitAuthFlows = [
  'ALLOW_REFRESH_TOKEN_AUTH',
  'ALLOW_USER_AUTH'
];
