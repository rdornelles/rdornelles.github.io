---
layout: beta
permalink: /
---

{% include paralax.rb img = "https://i.pinimg.com/736x/23/04/69/230469103008f95db652606ec3759d9c.jpg" %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
[Saiba Mais](#)

### Soluções para o seu Negócio ###
<section class="row catalago-row">
{% for catalago in site.pages %} 
{% if catalago.filter %}
<div class="col s6 l3 catalago-item">
<a href="{{ catalago.url }}" tile="Veja o catalago!">
    <i class="large material-icons">{{ catalago.icon }}</i>
    <h5>{{ catalago.title }}</h5>
    <p class="hide-on-small-only">{{ catalago.description }}</p>
</a>
</div>
{% endif %} 
{% endfor %}
</section>