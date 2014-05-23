jquery-cleanEventAttachment
===========================

jQuery plug-in to disattach and attach event handlers in one shortcut function


Helper functions to:
* $.unbind('event.namespace').bind('event.namespace', function () { /*callback*/ })
* $.off('event.namespace').on('event.namespace', '.selector', function () { /*callback*/ })

Simply call:
```
jQuery('.selector')
  .cleanBind('click.test', function () {
    alert('test');
  });
```
or
```
$('.selector')
  .cleanOn('click.test', '.otherSelector', function () {
    alert('test');
  });
```


*Internally uses $.on(), thus requiring >= jQuery 1.7*
