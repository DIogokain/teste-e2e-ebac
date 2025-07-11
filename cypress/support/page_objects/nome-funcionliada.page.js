class ProdutoPage {

   visitarUrl() {
    cy.visit('produtos');
    }
     buscarProduto() {

}
    buscarProdutolista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()

    }   
    visitarProduto() {
        
    }
    addicionarProdutoCarrinho() {

    }
}
export default new ProdutoPage()