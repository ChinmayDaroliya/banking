import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://0fd2b0fcd8da54b1826cbaa357b91aa4@o4509175368712192.ingest.us.sentry.io/4509175370874880",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});