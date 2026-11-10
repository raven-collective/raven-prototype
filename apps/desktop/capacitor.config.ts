import type { CapacitorConfig } from "@capacitor/cli";

// The Android app. Its web code and Android project are in mobile/; the CLI runs here,
// beside package.json.
export default {
  appId: "org.raven.mobile",
  appName: "Raven",
  webDir: "mobile/dist",
  android: { path: "mobile/android" },
  // The page is https://capacitor.localhost, as desktop's is https://tauri.localhost: the
  // server allows it by name (RAVEN_CORS_ALLOWED_ORIGINS).
  server: { hostname: "capacitor.localhost" },
} satisfies CapacitorConfig;
