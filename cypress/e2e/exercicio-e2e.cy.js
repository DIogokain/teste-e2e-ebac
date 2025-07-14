//// <reference types="cypress" />
import ProdutoPage from '../support/page_objects/nome-funcionliada.page.js';

let dadosLogin;
let usuario = 'aluno_ebac@teste.com';
let senha = 'teste@teste.com';
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkoutnp
      E validando minha compra ao final */

  beforeEach(() => {
    ProdutoPage.visitarUrl();
  

  });

       it('Deve buscar Produtos com sucesso', () => {
       
         ProdutoPage.buscarProduto('Erica Evercool Sports Bra');
           cy .get('.product_title').should('contain', 'Erica Evercool Sports Bra');
 
             ProdutoPage.buscarProduto('Autumn Pullie');
              cy .get('.product_title').should('contain', 'Autumn Pullie');

             ProdutoPage.buscarProduto('Bruno Compete Hoodie');
              cy .get('.product_title').should('contain', 'Bruno Compete Hoodie');

               ProdutoPage.buscarProduto('Eos V-Neck Hoodie');
                cy .get('.product_title').should('contain', 'Eos V-Neck Hoodie');
    });
      it('Deve adicionar produtos ao carrinho', () => {
        ProdutoPage.buscarProduto('Erica Evercool Sports Bra');
          ProdutoPage.addicionarProdutoCarrinho('M', 'Blue', 1);
            cy.get('.woocommerce-message').should('contain', 'Erica Evercool Sports Bra” foi adicionado no seu carrinho.');
            
              ProdutoPage.buscarProduto('Autumn Pullie');
                ProdutoPage.addicionarProdutoCarrinho('M', 'Red', 1);
                 cy.get('.woocommerce-message').should('contain', 'Autumn Pullie” foi adicionado no seu carrinho.');

                   ProdutoPage.buscarProduto('Bruno Compete Hoodie');
                    ProdutoPage.addicionarProdutoCarrinho('M', 'Black', 1);
                     cy.get('.woocommerce-message').should('contain', '“Bruno Compete Hoodie” foi adicionado no seu carrinho.');

                       ProdutoPage.buscarProduto('Eos V-Neck Hoodie');
                        ProdutoPage.addicionarProdutoCarrinho('M', 'Blue', 1);
                         cy.get('.woocommerce-message').should('contain', 'Eos V-Neck Hoodie” foi adicionado no seu carrinho.');
          
        cy.get('.woocommerce-message > .button').click();
          cy.get('.checkout-button').click();
           cy.get('.showlogin').click();
            cy.get('#username').type(usuario); 
             cy.get('#password').type(senha)
              cy.get('.woocommerce-button').click();
               cy.get('#terms').click();
                cy.get('#place_order').click();
                 cy.get('.woocommerce-notice',{timeout:8000}).should('contain', 'Obrigado. Seu pedido foi recebido.');
                  
               
      })

           




});

