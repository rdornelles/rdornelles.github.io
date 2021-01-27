<div class="parallax-container center valign-wrapper">
    {% if include.title or include.description %}
    <div class="container">
        <div class="row">
            <div class="col s12 white-text">
            {% if include.title %}
            <h3 class="lighten-2 {{ include.title_class }}" style="{{ include.title_css }}">
                {{ include.title }}
            </h3>
            {% endif %}
            {% if include.description %}
            <p style="text-align:center {{ include.description_css }}" class="{{ include.description_class }}">
                {{ include.description }}
            </p>
            {% endif %}
            </div>
        </div>
    </div>
    {% endif %}
    <div class="parallax">
        <img src="{{ include.img }}" style="{{ include.img_css }}" class="{{ include.img_class }}">
    </div>
</div>