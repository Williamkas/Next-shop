module.exports = {
  reactStrictMode: true,
  env: {
    //variables de entorno
    customKey: 'customValue',
  },
  basePath: '/dist', //acá se encuentra nuestro proyecto
  compress: true, //prepara nuestro proyecto
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://gndx.dev', //cuando el usuario nos redirecciona a /hola lo enviaremos a https://gndx.dev
        permanent: true,
      },
    ];
  },
};
