---
title: Catalago
layout: default
menu: true
---
### Catalago ###
{% assign pages_order = site.pages | sort:"order" %}
{% for catalago in pages_order %} 
{% if catalago.filter %}
#### {{ catalago.title }} ####
{% include product_list.rb filter=catalago.filter %}
{% endif %}
{% endfor %}