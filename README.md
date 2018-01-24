# gulp-awspublish-redirects

A plugin for defining redirects for [gulp-awspublish](https://github.com/pgherveou/gulp-awspublish).

## Usage

```js
const awsredirects = require('gulp-awspublish-redirects');

gulp.task('publish', function() {
	const publisher = awspublish.create(/*...*/);

	return gulp.src('./public/**/*')
		.pipe(awsredirects({
			'path/to/source.ext': 'path/to/target.ext',
		}))
		.pipe(publisher.publish());
});
```

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install gulp-awspublish-redirects --save
```

## Dependencies

- [from2](https://ghub.io/from2): Convenience wrapper for ReadableStream, with an API lifted from &quot;from&quot; and &quot;through2&quot;
- [to-through](https://ghub.io/to-through): Wrap a ReadableStream in a TransformStream.
- [vinyl](https://ghub.io/vinyl): Virtual file format.

## License

BSD-3-Clause
