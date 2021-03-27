$(document).on("click", "#produto", () => {
  $("#main-home").empty();

  $("#main-home").append(`
     <div class="title-section">
      <h1>Produtos</h1>
      <p>Escolha a sua plataforma e de start!</p>
    </div>

    <section class="cards">
      <div class="card" style="width: 18rem;">
        <img src="./assets/img/ps5_console.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">PS5</h5>
          <p class="card-text">
            Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console
            PlayStation pode fazer.
          </p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <img src="./assets/img/xbox_x.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Xbox X</h5>
          <p class="card-text">
            Console Xbox mais rápido e poderoso de todos os tempos.
          </p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <img src="./assets/img/switch.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Nintendo Switch</h5>
          <p class="card-text">
            O Nintendo switch foi desenvolvido para fazer parte da sua vida, transformando-se de um console doméstico em um console
            portátil num piscar de olhos.
          </p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </section>
  `);
});

$(document).on("click", "#contato", () => {
  $("#main-home").empty();

  $("#main-home").append(`
    <div style="margin: 0 auto; height: 600px; width: 500px;">
      <div class="title-section">
        <h1>Contato</h1>
        <p>Alguma dúvida? Envie nos um e-mail ;)</p>
      </div>
      <section class="contato">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="input-group">
            <span class="input-group-text">Mensagem:</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
          
        </form>
      </section>
    </div>
  `);
});

$(document).on("click", "#sobre", () => {
  $("#main-home").empty();

  $("#main-home").append(`
    <section style="margin: 0 auto; height: 600px; width: 500px;">
      <div class="title-section">
        <h1>Sobre</h1>
        <p>Conheça um pouco sobre nós</p>
      </div>
      <section class="sobre">
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est mollitia vero reiciendis magnam dicta tenetur dignissimos tempora asperiores id nemo, aliquid autem rem saepe, itaque excepturi reprehenderit quidem dolores nisi?.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est mollitia vero reiciendis magnam dicta tenetur
            dignissimos tempora asperiores id nemo, aliquid autem rem saepe, itaque excepturi reprehenderit quidem dolores nisi?.
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est mollitia vero reiciendis magnam dicta tenetur
            dignissimos tempora asperiores id nemo, aliquid autem rem saepe, itaque excepturi reprehenderit quidem dolores nisi?.
          </p>
        </div>
    </section>
  `);
});
