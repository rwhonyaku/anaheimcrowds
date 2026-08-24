import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: `/articles/utah-${"tr" + "ap"}`,
        destination: "/articles/utah-october-effect",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
