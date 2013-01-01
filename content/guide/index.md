---
layout: 'guide'
title: 'Overview'
---

### Overview

Anchor.js is a modern platform for building client-side JavaScript applications.
Designed for browser-based environments, Anchor.js provides a set of core
modules and consistent APIs for [DOM](https://developer.mozilla.org/en-US/docs/DOM)
traversal, [Ajax](https://developer.mozilla.org/en-US/docs/Ajax) requests,
powerful [HTML5](http://www.html5rocks.com/) features, and more.

JavaScript's position as the predominant language for scripting web pages means
that nearly any developer will have at least a passing familiarity with the
language, for better or worse.  Recently, a renaissance has been underway.  [Node.js](http://nodejs.org/)
has made JavaScript a premier server-side development platform.  [Google](https://www.google.com/)'s
[V8](https://developers.google.com/v8/) sparked a battle for ever-increasing
performance from JavaScript interpreters.  Pioneering developers have charted
new techniques for architecting complex applications.

Anchor's goal is to take advantage of these advances and best practices, and
bring them back to where it all began: the web browser.

Anchor's architecture is completely modular, and every module is [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)-compliant.
An effective module system allows developers to create reusable components and
assemble them into applications that are maintainable and testable.  AMD is a
module format designed to meet the requirements of web applications, where
modules are loaded asynchronously over the network.

Anchor presents a consistent API throughout the core modules.  The idioms found
in the API are (not coincidentally) the same idioms popularized by Node.js and
widely adopted by the community.  Events are emitted to delegate processing to
higher layers.  Error objects are passed as the first argument to asyncronous
callbacks.  Adopting these conventions encourages the use of a single, unified
programming style for both client-side and server-side development.

Via [JSMT](https://github.com/jaredhanson/jsmt), Anchor also supports module
translation from [CommonJS](http://www.commonjs.org/) to AMD, with Anchor's
core modules conforming to the interfaces exported by Node's core modules.  This
provides near-seamless source code level compatibility for using modules in both
client-side and server-side environments.  Adopting a single language across the
stack increases productivity and reduces development time.

These techniques combine to make Anchor a solid foundation on which to
effectively and quickly build web applications.