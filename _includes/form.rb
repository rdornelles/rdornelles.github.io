<form action="https://formsubmit.io/send/contato@rdsolucoes.tec.br" method="POST">
    <input name="_redirect" type="hidden" id="name" value="{{ page.url | absolute_url }}">
    <input name="honeypot" type="text" style="display:none">

    <div>
        <label for="name">Nome</label>
        <input name="name" type="text" id="name" class="validate" placeholder="Nome Completo" required="1">
        <span class="helper-text" data-error="Por favor se identifique."></span>
    </div>

    <div>
        <label for="email">Email</label>
        <input name="email" id="email" type="email" class="validate" placeholder="exemplo@email.com.br" required="1">
        <span class="helper-text" data-error="Utilize um email válido."></span>
    </div>

    <div>
        <label for="email">Comentário</label>
        <textarea name="comment" id="comment" class="materialize-textarea validate" placeholder="escreva sua menssagem..."></textarea>
    </div>

    <button class="btn waves-effect waves-light" type="submit" name="action">Enviar
        <i class="material-icons right">send</i>
    </button>
</form>