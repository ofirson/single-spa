import { registerApplication, start } from "single-spa";

const myList = [
    'apple', 'orange', 'banana', 'watermelon'
];

const conf = [
        {
            id: 'grid',
            url: 'http://localhost:8500/ofir-grid.js'
        },
        {
            id: 'text',
            url: 'http://localhost:8501/ofir-text.js'
        },
        {
            id: 'image',
            url: 'http://localhost:8502/ofir-image.js'
        },
        {
            id: 'list',
            url: 'http://localhost:8503/ofir-list.js'
        }
    ];

conf.forEach( app =>
    registerApplication({
      name: "@ofir/" + app.id,
      app: () =>
          System.import(
              app.url
          ),
      activeWhen: ["/"],
      customProps: app.id === 'list' ? { list: myList } : undefined
    })
);

start({
  urlRerouteOnly: true,
});
