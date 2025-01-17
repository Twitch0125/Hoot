# Hoot

Hoot is a software front-end for lotide that provides a clean, modern, and user-friendly interface. Hoot provides a [Nuxt.js](https://nuxtjs.org/) app, that can be built to use either Server Side Rendering(SSR) or for static file hosting 

# Prerequisites

1. A working [lotide](https://git.sr.ht/~vpzom/lotide) server.
2. Node/NPM

# Building

## SSR Build
install dependencies:
```
npm ci
```
Set your Environment Variables in a .env file or your hosting provider's environment settings
```.env
LOTIDE=https://your-lotide-instance.app/api
STATIC=false
# if you're using SSR, proxy should probably be set to `true`
PROXY=true
```

Build the app

```
npm run build
```

Start the app

```
npm run start
```

## Static Build

install dependencies:
```
npm ci
```
Set your Environment Variables in a .env file or your hosting provider's environment settings
```.env
LOTIDE=https://your-lotide-instance.app/api
STATIC=true
# if you're using the Static Build, proxy won't be applied anyway so just set it to false or true it won't matter
PROXY=false
```

Build the app

```
npm run build
npm run generate
```
After the build is completed, the results are output to the dist/ directory. Copy those files to your web root and Hoot should now be accessible.

 or you can serve the app with a simple node server with

```
npm run start
```
For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

# Development

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
