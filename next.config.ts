import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/search2",
      destination: "/search?q=äöå€",
      permanent: false,
    },
  ],
};

export default nextConfig;

/* next start

http://localhost:3000/foo?bar=value%201&bar=value2%20something%20else&baz=value3 
HTTP/1.1 307 Temporary Redirect
location: /foo?bar=value 1&bar=value2 something else&baz=value3
Date: Tue, 20 May 2025 09:35:03 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

*/

