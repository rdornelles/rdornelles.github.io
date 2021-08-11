---
title: Catalago
layout: default
menu: true
---
{% include product_tabs.rhtml %}

{% assign pages_order = site.pages | sort:"order" %}
{% for catalago in pages_order %} 
{% if catalago.filter %}
## {{ catalago.title }} ##
{% include product_list.rhtml filter=catalago.filter %}
{% endif %}
{% endfor %}