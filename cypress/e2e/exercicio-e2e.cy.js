//// <reference types="cypress" />
import ProdutoPage from '../support/page_objects/nome-funcionliada.page.js';

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

    it('Deve buscar Produtos lista com sucesso', () => {
        ProdutoPage.buscarProdutolista('Abominable Hoodie' );
           cy.get('.product_title').should('contain', 'Abominable Hoodie');
    });

        it('Deve buscar Produtos lista com sucesso', () => {
              ProdutoPage.buscarProdutolista('Apollo Running Short');
                 cy.get('.product_title').should('contain', 'Apollo Running Short');
        });
          it('Deve buscar Produtos lista com sucesso', () => {
                ProdutoPage.buscarProdutolista('Aero Daily Fitness Tee');
                     cy.get('.product_title').should('contain', 'Aero Daily Fitness Tee');
          })
            it('Deve buscar Produtos lista com sucesso', () => {
                    ProdutoPage.buscarProdutolista('Ariel Roll Sleeve Sweatshirt');
                         cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt');
            });
                 it('Deve buscar Produtos lista com sucesso', () => {
                    ProdutoPage.buscarProdutolista('Ariel Roll Sleeve Sweatshirt');
                         cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt');
            });
  
  
  it('Deve adicionar produtos ao carrinho', () => {


  })
    it('Deve preencher todas as opções no checkout', () => {

})
    it('Deve validar a compra ao final', () => {
    
    })
    })
