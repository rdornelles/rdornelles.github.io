---
title: Catalago
layout: default
menu: true
---


<div class="row">
    <div class="col s12">
        <ul class="tabs">
            <li class="tab col s2"><a class="active" href="#todos">Todos</a></li>
            <li class="tab col s2-5"><a href="#produtos">Produtos</a></li>
            <li class="tab col s2-5"><a href="#sistemas">Sistemas</a></li>
            <li class="tab col s2-5"><a href="#software">Software</a></li>
            <li class="tab col s2-5"><a href="#formatacao">Formatação</a></li>
        </ul>
    </div>
    <div id="todos" class="col s12">{% include product_list.rb %}</div>
    <div id="produtos" class="col s12">{% include product_list.rb filter = "produtos" %}</div>
    <div id="sistemas" class="col s12">{% include product_list.rb filter = "sistemas" %}</div>
    <div id="software" class="col s12">{% include product_list.rb filter = "software" %}</div>
    <div id="formatacao" class="col s12">{% include product_list.rb filter = "formatacao" %}</div>
</div>


