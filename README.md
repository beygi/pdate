pDate
=====
[![Build Status](https://travis-ci.org/beygi/pdate.svg?branch=master)](https://travis-ci.org/beygi/pdate)

Installation
-----
using bower :
~~~bash
bower install --save
~~~

Usage
-----
**add main js file to page**
~~~html
<script src="pdate.min.js"></script>
~~~
**change browers default date to persian date :**
~~~js
window.Date = pDate;
~~~

**or use as a seperate date class**
~~~js
j = new pDate();
j.toLocaleString();
~~~
