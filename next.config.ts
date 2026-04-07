import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/request.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default withNextIntl(nextConfig);
