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