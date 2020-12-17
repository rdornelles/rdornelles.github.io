---
title: Projetos
layout: default
menu: true
menu_mobile: true
---
### Projetos ###
{% assign projetos_order = site.pages | sort: "name" | reverse %}
{% for projeto in projetos_order %} 
{% if projeto.categories contains "projeto" %}
{% include product_item.rb product = projeto %}
{% endif %}
{% endfor %}