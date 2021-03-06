This project is a walk through of the Animated Image Gallery chapter of [Udemy's Projects in HTML5](https://www.udemy.com/projects-in-html5/learn/#/)

Instead of just using good ole HTML5 Boilerplate, I used the [H5bp generator](https://github.com/h5bp/generator-h5bp#readme) [Yeoman](http://yeoman.io/) generator. Unfortunately, this generator does NOT include Sass, a task runner like grunt or gulp OR browsersync.

This gave me a great opportunity to dig into gulp a bit so I could get these HTML5 projects going quickly in the future with the tools that are needed for the job. I implemented [libsass](https://www.npmjs.com/package/gulp-sass), [browsersync](http://www.browsersync.io/docs/gulp/), and [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages) loosely based on the good guide to starting with gulp by [Andy Carter](http://andy-carter.com/blog/a-beginners-guide-to-the-task-runner-gulp).

And so you know, I'm not that hot on jQuery or jQuery plugins. "Not hot" as in interested in implementing either. But this project features BOTH! There is a nifty little lightbox plugin called [fancybox](http://fancyapps.com/fancybox/) which is incompatible with the other image filtering plugin called [Quicksand](http://razorjack.net/quicksand/) that was supposed to go in this project. Lovely. Still feels like I am hackin' something awful every time I implement any thing with jQuery. I can't get over it. That is probably good.

This is part of my [portfolio](http://ric.mclaughlin.today/prj_html5_gallery).