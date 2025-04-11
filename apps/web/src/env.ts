import { keys as email } from '@repo/email/keys';

import { createEnv } from '@t3-oss/env-core';

export const env = createEnv({
  extends: [email()],
  server: {},
  runtimeEnv: process.env,
});
