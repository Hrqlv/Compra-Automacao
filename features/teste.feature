Feature: TollsQA

    Scenario: Efetuar uma compra

        Given que eu esteja na pagina
        Given que eu escolhar um produto
        When eu clico em Add to cart o produto
        When a compra é adicionada exibindo a mensagem "Product successfully added to your shopping cart"
        Then continuo o processo da compra
        Then que eu esteja no RESUMO DO CARRINHO DE COMPRAS e apertar para continuar o processo de compra
        Then que eu esteja na pagina de endereços e apertar para continuar o processo de compra
        Then que eu esteja na pagina de envio da compra e aceite o termos de serviço e logo em sequida apertar para continuar
        Then que eu escolha a forma de pagamento
        Then que eu esteja no resumo do pedido
        Then que eu esteja na pagina de confirmar o pedido
