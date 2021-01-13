<div class="row">
{% for parceiro in site.pages %} 
{% if parceiro.dir contains "parceiro" %}
<a class="col s3 tooltipped" href="{{ parceiro.url }}" style="display:block" data-position="top" data-tooltip="{{ parceiro.title }}">
    <img src="{{ parceiro.image }}" alt="{{ parceiro.title }}" style="width:100%"/>
</a>
{% endif %}
{% endfor %}
</div>