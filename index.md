---
layout: home
permalink: /
---

{%
    include paralax.rhtml
    img = '/images/iot-background.gif'
    img_css = 'filter: blur(1px);'
%}

<section class="row background-light" markdown="1">

### Soluções para o seu Negócio ###
<hr/>
<div class="col s12 m10 l12 xl10 offset-m1 offset-xl1">
    {% include soluctions.rhtml %}
</div>
</section>

<section class="row background-dark" markdown="1">

### Entre em contato ###
<hr/>

<div class="form-container">
    {% include form.rhtml %}
</div>

</section>

<section class="background-light" markdown="1">

### Parceiros ###
<hr/>
<div class="container">
    {% include partners.rhtml %}
</div>
</section>