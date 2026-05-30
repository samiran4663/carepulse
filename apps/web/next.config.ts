import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  transpilePackages: ["@carepulse/ai-chat-widget"],
  serverExternalPackages: ["@napi-rs/canvas"],
};
export default nextConfig;