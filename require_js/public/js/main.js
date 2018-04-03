require.config({
    baseUrl: ".",
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'lodash': 'bower_components/lodash/dist/lodash.min',
        'text': 'bower_components/requirejs-plugins/lib/text',
        'requireMath': 'js/requireMath'
    }
});
require(['jquery', 'lodash', 'text!../text/test.txt'], ($, _, test) => {
    console.log($.prototype.jquery);
    console.log(_.VERSION);
    console.log(test);
});

console.log('async');

require(['requireMath'], (math) => {
    alert(math.display(2, 3));
});
alert('loaded.');