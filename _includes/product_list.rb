{% for product in site.pages | sort: "title" %}
{% if include.filter %}
{% if product.categories contains include.filter %}
{% include product_item.rb product = product %}
{% endif %}
{% else %}
{% include product_item.rb product = product %}
{% endif %} 
{% endfor %}