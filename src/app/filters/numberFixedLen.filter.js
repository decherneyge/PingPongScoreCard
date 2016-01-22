// 1e32 is enogh for working with 32-bit
// 1e8 for 8-bit (100000000)
// 1e4 (aka 10000) should do it
angular.module('pingpongscorecard')
    .filter('numberFixedLen', function () {
        return function (n, len) {
            var num = parseInt(n, 10);
            len = parseInt(len, 10);
            if (isNaN(num) || isNaN(len)) {
                return n;
            }
            num = ''+num;
            while (num.length < len) {
                num = '0'+num;
            }
            return num;
        };
});