/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
  async rewrites() {
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying
      {
        source: '/__/:path*',
        destination: 'http://localhost:4000/__/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'https://santehnika-online.ru/ajax/react/:path*',
      },
    ];
  },
};
