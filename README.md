<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Deep Set

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Set a nested property value.



<section class="usage">

## Usage

```javascript
import deepSet from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-deep-set@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-deep-set@deno/mod.js';
```

#### deepSet( obj, path, value\[, options] )

Sets a nested property value.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, 'a.b.c', 'beep' );
// returns true

console.log( obj );
// => { 'a': { 'b': { 'c': 'beep' } } }
```

If the function is able to deep set a nested property, the function returns `true`; otherwise, the function returns `false`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, 'a.b.c', 'woot' );
// returns true

bool = deepSet( obj, 'a.beep.c', 'boop' );
// returns false

bool = deepSet( null, 'a.beep.c', 'boop' );
// returns false

bool = deepSet( 'bap', 'a.beep.c', 'boop' );
// returns false
```

For `paths` including `arrays`, specify the numeric index.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    { 'a': [ { 'x': 5 } ] },
    { 'a': [ { 'x': 10 } ] }
];

var bool = deepSet( arr, '1.a.0.x', 25 );
// returns true

console.log( arr );
/* =>
    [
        { 'a': [ { 'x': 5 } ] },
        { 'a': [ { 'x': 25 } ] }
    ]
*/
```

The key `path` may be specified as either a delimited `string` or a key `array`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, [ 'a', 'b', 'c' ], 'beep' ); // obj => { 'a': { 'b': { 'c': 'beep' } } }
// returns true
```

If `value` is a `function`, the argument is treated as a `callback` and should return a value to set.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
function set( val ) {
    var ch = val;
    var i;
    for ( i = 0; i < 4; i++ ) {
        val += ch;
    }
    return val;
}
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, 'a.b.c', set ); // obj => { 'a': { 'b': { 'c': 'ddddd' } } }
// returns true
```

The function accepts the following `options`:

-   **sep**: key path separator. Default: `'.'`.
-   **create**: `boolean` indicating whether to create a path if the key path does not already exist. Default: `false`.

By default, the function assumes `dot` separated key values. To specify an alternative separator, set the `sep` option.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, 'a/b/c', 'beep', {
    'sep': '/'
});
// returns true

console.log( obj );
// => { 'a': { 'b': { 'c': 'beep' } } }
```

To create a key path which does not already exist, set the `create` option to `true`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepSet( obj, 'a.e.c', 'boop', {
    'create': true
});
// returns true

console.log( obj );
/* =>
    {
        'a': {
            'b': {
                'c': 'beep'
            },
            'e': {
                'c': 'boop'
            }
        }
    }
*/
```

#### deepSet.factory( path\[, options] )

Creates a reusable deep set function. The factory method ensures a `deepSet` function is configured identically by using the same set of provided `options`.

```javascript
var dset = deepSet.factory( 'a/b/c', {
    'create': true,
    'sep': '/'
});
```

#### dset( obj, value )

Sets a nested property value.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var dset = deepSet.factory( 'a.b.c' );

var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = dset( obj, 'beep' );
// returns true

console.log( obj );
// => { 'a': { 'b': { 'c': 'beep' } } }
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import deepSet from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-deep-set@deno/mod.js';

var data;
var bool;
var keys;
var i;

function set( val ) {
    return val * 10.0;
}

data = new Array( 100 );
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = {
        'x': Date.now(),
        'y': [ randu(), randu(), i ]
    };
}

keys = [ 0, 'y', 2 ];
for ( i = 0; i < data.length; i++ ) {
    keys[ 0 ] = i;
    bool = deepSet( data, keys, set );
    if ( !bool ) {
        console.error( 'Unable to deep set value.' );
    }
}
console.log( data );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/deep-get`][@stdlib/utils/deep-get]</span><span class="delimiter">: </span><span class="description">get a nested property value.</span>
-   <span class="package-name">[`@stdlib/utils/deep-pluck`][@stdlib/utils/deep-pluck]</span><span class="delimiter">: </span><span class="description">extract a nested property value from each element of an object array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-deep-set.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-deep-set

[test-image]: https://github.com/stdlib-js/utils-deep-set/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-deep-set/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-deep-set/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-deep-set?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-deep-set.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-deep-set/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-deep-set/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-deep-set/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-deep-set/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-deep-set/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-deep-set/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/deep-get]: https://github.com/stdlib-js/utils-deep-get/tree/deno

[@stdlib/utils/deep-pluck]: https://github.com/stdlib-js/utils-deep-pluck/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
