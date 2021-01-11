<h1 align="center">
    clijsters.de
</h1>

<p align="center">
<b>This is the GitHub Reposiory for <a href="https://clijsters.de">my personal homepage</a>. It is a single-page Vue.js app with nuxt</b>
</p>
<p align="center">
    <a href="https://ci.appveyor.com/project/Clijsters/homepage/branch/master">
        <img alt="Build status for master" src="https://ci.appveyor.com/api/projects/status/c6u0f4gk3ibxwa46/branch/master?svg=true&passingText=master%20-%20OK&pendingText=master%20-%20Pending&failingText=master%20-%20Failing">
    </a>
    <a href="https://ci.appveyor.com/project/Clijsters/homepage/branch/develop">
        <img alt="Build status for develop" src="https://ci.appveyor.com/api/projects/status/c6u0f4gk3ibxwa46/branch/develop?svg=true&passingText=develop%20-%20OK&pendingText=develop%20-%20Pending&failingText=develop%20-%20Failing">
    </a>
    <a href="https://codecov.io/gh/Clijsters/homepage">
        <img alt="codecov Code Coverage" src="https://codecov.io/gh/Clijsters/PSToggl/branch/develop/graph/badge.svg">
    </a>
</p>

____
## homepage

Special thanks to [Christian][2] for letting me use his homepage design!

I reworked most of its sources to being able to run smoothly without any JavaScript. This increases not only usability, but also decreases loading time and optimizes SEO. The first request is being served with a server-side-rendered html page.

If you want to see some of my projects and showcases, take a look at [xylo-it.de][3]

## Getting started
### build

Make sure you're in the src/ directory, then run

    npm install
    npm run build

### Start development server

    npm run serve

### Start production server

    npm run start

### Roll out to production

Just use the dockerfile in project root to deploy the homepage to a production system.

    docker build ./

## See it in action
<p align="center">
<a href="https://clijsters.de"><img style="max-width:500px" src=".res/presentation.gif" alt="website showcase gif"></a></p>


[1]: https://clijsters.de
[2]: https://github.com/cfischer
[3]: https://xylo-it.de
