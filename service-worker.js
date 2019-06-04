/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/1.2.18/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/1.2.18/workbox-v3.6.3"});

importScripts(
  "/1.2.18/precache-manifest.8cb52e5f8b2876953cfebf9f915af232.js"
);

workbox.core.setCacheNameDetails({prefix: "smartFund"});

workbox.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
