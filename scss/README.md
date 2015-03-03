## SCSS

This is where all the `sass` / `scss` files live. These are the stylesheet components that are compiled down in to a single CSS file.

### Syntax

We will employ the use of BEM syntax, which stands for *block*, *element*, and *modifier*. It is a smart way of naming your CSS classes to give them more transparency and meaning to other developers. They are far more strict and informative, which makes the BEM naming convention ideal for teams of developers on larger projects that might last a while.

An example of this would be:

````
.block {}
.block__element {}
.block--modifier {}

````

- `.block` represents the higher level of an abstraction or component.
- `.block__element` represents a descendent of `.block` that helps form `.block` as a whole.
- `.block--modifier` represents a different state or version of `.block`.

Another example would be

````
.site-search {}
.site-search__field {}
.site-search--full {}

````

And the HTML markup may look something like this:

````
<form class="site-search  site-search--full">
    <input type="text" class="site-search__field">
    <input type="Submit" value ="Search" class="site-search__button">
</form>
````

### Commenting

Add comments where it seems necessary. It is hard to over comment. The syntax that is to be used is:

At the top of files and as the header of major sections (Which should really be their own file)

````
/**
 * Form styles
 */
````

Above minor sections within a file

````
// Input Styles
````
