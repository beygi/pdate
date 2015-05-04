pDate
=====
[![Build Status](https://travis-ci.org/beygi/pdate.svg?branch=master)](https://travis-ci.org/beygi/pdate)

**pDate** is a persian (jalali,shamsi,hijri) date class that trying to be fully compatible with original `Date` class for using in browser or in the server with nodejs

Installation
-----
**regular :**

just download pdate.min.js

**using bower :**
~~~bash
bower install --save pdate
~~~

Usage in client
-----
**add main js file to the page**
~~~html
<script src="pdate.min.js"></script>
~~~
**change browers default date to persian date :**
~~~js
window.Date = pDate;
p = new Date("1394/02/20 13:15:06");
console.log(p.toLocaleString());
//1394/02/20 13:15:06

p = new Date();
console.log(p.toLocaleString());
//would be your current date and time in persian calendar
~~~
with this type of usage you change the default built in date to persian date , many of built in functions will be available and works in persian dates too

**or use as a seperate date object using `pDate` global object**
~~~js
p = new pDate();
p.toLocaleString();
~~~
