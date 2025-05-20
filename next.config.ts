import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/search2",
      destination: "//search?q=äöå€",
      permanent: false,
    },
  ],
};

export default nextConfig;

/* 

`next start`:

❯ curl -i http://localhost:3000/search2
HTTP/1.1 500 Internal Server Error
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate
X-Powered-By: Next.js
ETag: "od4ckrmjdw1kq"
Content-Type: text/html; charset=utf-8
Content-Length: 2042
Vary: Accept-Encoding
Date: Tue, 20 May 2025 09:51:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5

OpenNext with local config:

❯ curl -i http://localhost:3000/search2
HTTP/1.1 500 Internal Server Error
X-Powered-By: Express
Content-Security-Policy: default-src 'none'
X-Content-Type-Options: nosniff
Content-Type: text/html; charset=utf-8
Content-Length: 148
Date: Tue, 20 May 2025 09:54:52 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Vercel:

❯ curl -i https://hiddenurl.vercel.app/search2
HTTP/2 307 
cache-control: public, max-age=0, must-revalidate
content-type: text/plain
date: Tue, 20 May 2025 09:50:18 GMT
location: /search?q=%C3%A4%C3%B6%C3%A5%E2%82%AC
server: Vercel
strict-transport-security: max-age=63072000; includeSubDomains; preload
x-vercel-id: arn1::5dc4m-1747734618753-a30ef27a69b1

OpenNext deployed to AWS:

❯ curl -i https://d35p5qsnd9ucby.cloudfront.net/search2
HTTP/2 307 
content-type: application/json
content-length: 0
location: https://d35p5qsnd9ucby.cloudfront.net/search?q=äöå?
date: Tue, 20 May 2025 10:03:27 GMT
x-amzn-trace-id: Root=1-682c536f-5e3db8230d621998628c9674;Parent=19214387b780ce49;Sampled=0;Lineage=1:5610e541:0
x-amzn-requestid: 7411a9c6-a839-4e16-8301-a18aa52be47d
x-cache: Miss from cloudfront
via: 1.1 a2c3c8b833b34851dca4f7753ecaae58.cloudfront.net (CloudFront)
x-amz-cf-pop: OSL50-P1
x-amz-cf-id: DfzkdqvhFu245d_AZRFMjnRVOA5Q2qd_2bSgat3-b4stA36ylgJ28w==


*/