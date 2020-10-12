# Amiibo Time

Amiibo Time is a responsive web app that displays amiibo from the [Amiibo API](https://www.amiiboapi.com/). It uses React JS as the framework and several 3rd party libraries.

## [Live (https://amiibo-time.web.app/)](https://amiibo-time.web.app/) 
[<img src="/src/assets/img/preview.gif">](https://amiibo-time.web.app/)

## Third-Party Libraries

- react-router-dom
- axios
- react-bootstrap, bootstrap
  - Jquery, popperjs/core (bootstrap dependencies)
- fontawesome-free
  - svg-core, free-brands, free-regular, free-solid
- react-lazyload
- react-router-dom
- react-scroll-up
- react-spinners

## API Source and React Hooks

The data is from the [Amiibo API](https://www.amiiboapi.com/)

I am using React hooks, useState and useEffect to retrieve and handle the data. Every time user changes the series, useEffect will call on the API to load the series. Same thing for searching for a character.

## Features

### Caching
I am using React's service worker to cache files, so if the user reloads a page they already loaded, it won't have to pull the data from the API again.

### Lazy Loading

I am using [react-lazyload](https://github.com/twobin/react-lazyload) to lazy load the images as the user scrolls. This way, images that are not in the viewport will not be loaded, which reduces server load.

### Scroll to Top

I am using [react-scroll-up](https://github.com/milosjanda/react-scroll-up) button so that when the user scrolls down enough, there will be a button they can press to go to the top. Very important for long pages like the Home page! The icon is from Font Awesome.

### Responsiveness

I am using [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) and Twitter's Bootstrap to style the site so that it's responsive and pretty.

### Hosting

This app is hosted on Firebase.