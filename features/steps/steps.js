const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("que eu esteja na pagina", async function () {
  await page.goto("http://automationpractice.com/");
});

Given("que eu escolhar um produto", async function () {
  await page.click('img[class="replace-2x img-responsive"]');
});

When(" eu clico em Add to cart o produto", async function () {
  await page.click(
    'button[class="button ajax_add_to_cart_button btn btn-default"] span > a'
  );
});

When("a compra é adicionada exibindo a mensagem {string}", async function () {
  console.log("Product successfully added to your shopping cart");
});

Then("continuo o processo da compra", async function () {
  await page.click(
    'button[class="btn btn-default button button-medium"] a > "Proceed to checkout"'
  );
});

Then(
  "que eu esteja no RESUMO DO CARRINHO DE COMPRAS e apertar para continuar o processo de compra",
  async function () {
    await page.click(
      'button[class="btn btn-default button button-medium"] a > "Proceed to checkout"'
    );
  }
);

Then(
  "que eu esteja na pagina de endereços e apertar para continuar o processo de compra",
  async function () {
    await page.click(
      'button[class="btn btn-default button button-medium"] a > "Proceed to checkout"'
    );
  }
);

Then(
  "que eu esteja na pagina de envio da compra e aceite o termos de serviço e logo em sequida apertar para continuar",
  async function () {
    await page.click('input[type="checkbox"]');
    await page.click(
      'button[class="btn btn-default button button-medium"] a > "Proceed to checkout"'
    );
  }
);

Then("que eu escolha a forma de pagamento", async function () {
  await page.click('a[class="cheque"] title > "Pay by check"');
});

Then("que eu esteja no resumo do pedido", async function () {
  await page.click('button[type="submit"]span > "I confirm my order"');
});

Then("que eu esteja na pagina de confirmar o pedido", async function () {
  console.log("Your order on My Store is complete");
});
