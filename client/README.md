## Client

Any directory named client is not loaded on the server. Similar to wrapping your code in `if (Meteor.isClient) { ... }`. All files loaded on the client are automatically concatenated and minified when in production mode. In development mode, JavaScript and CSS files are not minified, to make debugging easier. (CSS files are still combined into a single file for consistency between production and development, because changing the CSS file's URL affects how URLs in it are processed.)

HTML files in a Meteor application are treated quite a bit differently from a server-side framework. Meteor scans all the HTML files in your directory for three top-level elements: `<head>`, `<body>`, and `<template>`. The head and body sections are separately concatenated into a single head and body, which are transmitted to the client on initial page load.
