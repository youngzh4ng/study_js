require.config({
    baseUrl: "js",
    paths: {
        'jquery': 'lib/jquery',
        'lodash': 'lib/lodash',
    }
});
require(['jquery', 'lodash', 'jV'], ($, _, jV) => {
    console.log($.prototype.jquery);
    console.log(jV);
    console.log(_.VERSION);
});

console.log('async');

require(['requireMath'], (math) => {
    alert(math.display(2, 3));
});
alert('loaded.');