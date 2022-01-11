module.exports = {
  plugins: [
    // ['@snowpack/plugin-sass' ],
  ],
<<<<<<< HEAD
  'mount': {
         
    'src': '/'
   },
   'buildOptions': {
     'out': 'build',
      'baseUrl': '/sleepoutside/build/',
      'clean': true
   },
  
    'optimize': {
      // 'bundle': true,
      'minify': true,
      'target': 'es2015'
    }
  

}
=======
  mount: {
    src: '/',
  },
  buildOptions: {
    out: 'build',
    baseUrl: '/sleepoutside/build/',
    clean: true,
  },
  experiments: {
    optimize: {
      // 'bundle': true,
      minify: true,
      target: 'es2015',
    },
  },
};
>>>>>>> 35315b8541b5599627d089a215ed94766b6733e0
