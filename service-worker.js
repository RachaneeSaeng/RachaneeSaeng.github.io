var mainCacheName = 'RachaneeProfile_AppShell_v4';
var mainFiles = [
  '/',
  '/dist/b257fa9c5ac8c515ac4d77a667ce2943.svg',
  '/dist/e34aafbb485a96eaf2a789b2bf3af6fe.gif',
  '/dist/e3f799c6dec9af194c86decdf7392405.png',
  '/dist/main-1860012c8901feccad57.css',
  '/dist/main-1860012c8901feccad57.js',
  '/dist/main.js',
  '/dist/main.js.map',
  '/data/ports.json',
  '/data/skills_v4.json',
  '/images/banner_bg.jpeg',
  '/images/exp_bg.jpeg',
  '/images/favicon.png',
  '/images/favicon2.png',
  '/images/favicon3.png',
  '/images/preloader.gif',
  '/images/Profile2.png',
  '/images/backend/aws.png',
  '/images/backend/cSharp.png',
  '/images/backend/golang.png',
  '/images/backend/node.png',
  '/images/backend/oracleDatabase.jpg',
  '/images/backend/postgreSql.png',
  '/images/backend/puppet.png',
  '/images/backend/python.png',
  '/images/backend/redis.png',
  '/images/backend/ruby.png',
  '/images/backend/salesForce.png',
  '/images/backend/specflow.png',
  '/images/backend/sqlServer.jpg',
  '/images/frontend/angular.png',
  '/images/frontend/babel.png',
  '/images/frontend/css3.png',
  '/images/frontend/es6.png',
  '/images/frontend/html5.png',
  '/images/frontend/jQuery.png',
  '/images/frontend/js.jpg',
  '/images/frontend/jsx.png',
  '/images/frontend/less.jpg',
  '/images/frontend/npm.png',
  '/images/frontend/react.png',
  '/images/frontend/typeScript.png',
  '/images/frontend/webpack.png',
  '/images/portfolio/a10.jpg',
  '/images/portfolio/a10s.jpg',
  '/images/portfolio/a11.jpg',
  '/images/portfolio/a11s.jpg',
  '/images/portfolio/a13.jpg',
  '/images/portfolio/a13s.jpg',
  '/images/portfolio/a14.jpg',
  '/images/portfolio/a14s.jpg',
  '/images/portfolio/a16.jpg',
  '/images/portfolio/a16s.jpg',
  '/images/portfolio/assertive.jpg',
  '/images/portfolio/assertive_s.jpg',
  '/images/portfolio/AWS.jpg',
  '/images/portfolio/AWS_s.jpg',
  '/images/portfolio/Certificate_1.jpg',
  '/images/portfolio/Certificate_1s.jpg',
  '/images/portfolio/Certificate_2.jpg',
  '/images/portfolio/Certificate_2s.jpg',
  '/images/portfolio/Certificate_3.jpg',
  '/images/portfolio/Certificate_3s.jpg',
  '/images/portfolio/chairman.jpg',
  '/images/portfolio/chairman_s.jpg',
  '/images/portfolio/creativity.jpg',
  '/images/portfolio/creativity_s.jpg',
  '/images/portfolio/force.jpg',
  '/images/portfolio/force_s.jpg',
  '/images/portfolio/Go.jpg',
  '/images/portfolio/Go_s.jpg',
  '/images/portfolio/html5.jpg',
  '/images/portfolio/html5_s.jpg',
  '/images/portfolio/jicf.jpg',
  '/images/portfolio/jicf_s.jpg',
  '/images/portfolio/mobile.jpg',
  '/images/portfolio/mobile_s.jpg',
  '/images/portfolio/pm.jpg',
  '/images/portfolio/pm_s.jpg',
  '/images/portfolio/prodev.jpg',
  '/images/portfolio/prodev_s.jpg',
  '/images/portfolio/Python.jpg',
  '/images/portfolio/Python_s.jpg',
  '/images/portfolio/sigsixma.jpg',
  '/images/portfolio/sigsixma_s.jpg',
  '/images/portfolio/vs.jpg',
  '/images/portfolio/vs_s.jpg',
  '/images/methodology/agile.png',
  '/images/methodology/bdd.png',
  '/images/methodology/blockchain.png',
  '/images/methodology/designPattern.jpg',
  '/images/methodology/funcPro.png',
  '/images/methodology/graphql.png',
  '/images/methodology/machinelearning.png',
  '/images/methodology/mvc.png',
  '/images/methodology/oop.jpg',
  '/images/methodology/progressive.png',
  '/images/methodology/scrum.png',
  '/images/methodology/spa.png',
  '/images/methodology/tdd.png',
  '/images/tools/atom.png',
  '/images/tools/cSpider.png',
  '/images/tools/docker.png',
  '/images/tools/dotPeek.jpg',
  '/images/tools/firebase.png',
  '/images/tools/gitHub.png',
  '/images/tools/gitKraken.png',
  '/images/tools/jira.png',
  '/images/tools/plsqlDeveloper.png',
  '/images/tools/postman.png',
  '/images/tools/sqlDeveloper.png',
  '/images/tools/sqlMgmt.jpg',
  '/images/tools/tableau.png',
  '/images/tools/teamCity.png',
  '/images/tools/vs.png',
  '/images/tools/winScp.png',
  '/images/icons/icon-128x128.png',
  '/images/icons/icon-144x144.png',
  '/images/icons/icon-152x152.png',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-256x256.png',
  '/images/icons/icon-32x32.png',
  '/images/icons/icon-64x64.png',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://use.fontawesome.com/releases/v5.0.8/css/fontawesome.css',
  'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/photoswipe.min.css',
  'https://use.fontawesome.com/releases/v5.0.8/css/brands.css'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(mainCacheName).then(cache => {
      Promise.all(
        mainFiles.map(url => {
          cache.add(url);
        })
      ).catch(error => console.log(error));
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches
      .keys()
      .then(keyList => {
        return Promise.all(
          keyList.map(key => {
            if (key !== mainCacheName) {
              return caches.delete(key);
            }
          })
        );
      })
      .catch(error => console.log(error))
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches
      .match(e.request)
      .then(cacheResponse => {
        return (
          cacheResponse ||
          fetch(e.request)
            .then(response => {
              return response;
            })
            .catch(error => console.log(error))
        );
      })
      .catch(error => {
        console.log(
          'load from normal fetch, having problem to load from cache'
        );
        return fetch(e.request)
          .then(response => {
            return response;
          })
          .catch(error => console.log(error));
      })
  );
});
