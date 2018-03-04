
var mainCacheName = 'RachaneeProfile_AppShell_v1';
var mainFiles = [  
  "/",     
  "/index.html",   
  "/images/favicon.png", 
  "/images/Profile2.png",
  "/images/backend/aws.png",
  "/images/backend/node.png",
  "/images/backend/python.png", 
  "/images/backend/cSharp.png", 
  "/images/backend/golang.png", 
  "/images/backend/oracleDatabase.jpg", 
  "/images/backend/redis.png", 
  "/images/backend/ruby.png", 
  "/images/backend/salesForce.png", 
  "/images/backend/specflow.png", 
  "/images/backend/sqlServer.jpg", 
  "/images/frontend/angular.png", 
  "/images/frontend/babel.png", 
  "/images/frontend/css3.png", 
  "/images/frontend/es6.png", 
  "/images/frontend/html5.png", 
  "/images/frontend/jQuery.png", 
  "/images/frontend/js.jpg", 
  "/images/frontend/jsx.png", 
  "/images/frontend/less.jpg", 
  "/images/frontend/npm.png", 
  "/images/frontend/react.png", 
  "/images/frontend/typeScript.png", 
  "/images/frontend/webpack.png", 
  "/images/portfolio/a1.jpg", 
  "/images/portfolio/a10.jpg", 
  "/images/portfolio/a10s.jpg", 
  "/images/portfolio/a11.jpg", 
  "/images/portfolio/a11s.jpg", 
  "/images/portfolio/a12.jpg", 
  "/images/portfolio/a12s.jpg", 
  "/images/portfolio/a13.jpg", 
  "/images/portfolio/a13s.jpg", 
  "/images/portfolio/a14.jpg", 
  "/images/portfolio/a14s.jpg", 
  "/images/portfolio/a15.jpg", 
  "/images/portfolio/a15s.jpg", 
  "/images/portfolio/a16.jpg", 
  "/images/portfolio/a16s.jpg", 
  "/images/portfolio/a1s.jpg", 
  "/images/portfolio/a2.jpg", 
  "/images/portfolio/a2s.jpg", 
  "/images/portfolio/a3.jpg", 
  "/images/portfolio/a3s.jpg", 
  "/images/portfolio/a4.jpg", 
  "/images/portfolio/a4s.jpg", 
  "/images/portfolio/a5.jpg", 
  "/images/portfolio/a5s.jpg", 
  "/images/portfolio/a6.jpg", 
  "/images/portfolio/a6s.jpg", 
  "/images/portfolio/a7.jpg", 
  "/images/portfolio/a7s.jpg", 
  "/images/portfolio/a8.jpg", 
  "/images/portfolio/a8s.jpg", 
  "/images/portfolio/a9.jpg", 
  "/images/portfolio/a9s.jpg", 
  "/images/portfolio/Certificate_1.jpg", 
  "/images/portfolio/Certificate_1s.jpg", 
  "/images/portfolio/Certificate_2.jpg", 
  "/images/portfolio/Certificate_2s.jpg", 
  "/images/portfolio/Certificate_3.jpg", 
  "/images/portfolio/Certificate_3s.jpg", 
  "/images/portfolio/Go_s.jpg", 
  "/images/portfolio/Go.jpg", 
  "/images/portfolio/AWS_s.jpg", 
  "/images/portfolio/AWS.jpg",
  "/images/portfolio/Python_s.jpg", 
  "/images/portfolio/Python.jpg",
  "/images/practice/agile.png", 
  "/images/practice/bdd.png", 
  "/images/practice/designPattern.jpg", 
  "/images/practice/funcPro.png", 
  "/images/practice/mvc.png", 
  "/images/practice/oop.jpg", 
  "/images/practice/progressive.png", 
  "/images/practice/scrum.png", 
  "/images/practice/spa.png", 
  "/images/practice/tdd.png", 
  "/images/tools/atom.png", 
  "/images/tools/dotPeek.jpg", 
  "/images/tools/gitHub.png", 
  "/images/tools/gitKraken.png", 
  "/images/tools/jira.png", 
  "/images/tools/plsqlDeveloper.png", 
  "/images/tools/postman.png", 
  "/images/tools/puppet.png", 
  "/images/tools/sqlDeveloper.png", 
  "/images/tools/sqlMgmt.jpg", 
  "/images/tools/teamCity.png", 
  "/images/tools/vs.png", 
  "/images/tools/winScp.png", 
  "/images/tools/firebase.png", 
  "/images/tools/tableau.png", 
  "/images/tools/cSpider.png",
  "/images/icons/icon-128x128.png", 
  "/images/icons/icon-144x144.png", 
  "/images/icons/icon-152x152.png", 
  "/images/icons/icon-192x192.png", 
  "/images/icons/icon-256x256.png", 
  "/images/icons/icon-32x32.png",
  "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css",
  "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0",
  "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/photoswipe.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/default-skin/default-skin.min.css",
  // "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/default-skin/default-skin.png"
];

var dataCacheName = 'RachaneeProfile_Data';
var dataFiles = [  
  "/data/ports.json", 
  "/data/skills.json",
  "/dist/bundle.js"
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(dataCacheName).then(cache => {
      return cache.addAll(dataFiles);
    }),
    caches.open(mainCacheName).then(cache => {      
      return cache.addAll(mainFiles);
    })    
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== mainCacheName && key !== dataCacheName) {          
          return caches.delete(key);
        }
      }));
    })
  ); 
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  var relativeUrl = e.request.url.replace(/^(?:\/\/|[^\/]+)*/, "");
  
  if (dataFiles.indexOf(relativeUrl) > -1 && navigator.onLine) {  
    e.respondWith(
      caches.open(dataCacheName).then(cache => {
        return fetch(e.request).then(response => {
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );  
  } 
  else {    
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  }
});
