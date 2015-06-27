// Dependencies.
var fs = require('fs');
var gulp = require('gulp');
var s3 = require('gulp-awspublish');

var bucket = 'webix-static';

// Publish S3
var publish = function(){
	var client = s3.create({
		params: {
			Bucket: bucket
		},
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		region: 'us-east-1',
		sslEnabled: true
	});
	return gulp.src([
			'./**/*',
		])
		.pipe(client.publish())
		.pipe(client.sync())
		.pipe(s3.reporter());
}

gulp.task('publish-only', publish);
