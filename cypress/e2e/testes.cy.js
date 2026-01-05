describe('Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-puce.vercel.app');
  });

  it('Deve incluir um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('Maria Silva');
    cy.get('input[placeholder="E-mail"]').type('maria@email.com');
    cy.get('input[placeholder="Telefone"]').type('11999999999');

    cy.contains('Adicionar').click();

    cy.contains('Maria Silva').should('be.visible');
    cy.contains('11999999999').should('be.visible');
    cy.contains('maria@email.com').should('be.visible');
  });

  it('Deve editar um contato', () => {
    cy.get('input[placeholder="Nome"]').type('João Teste');
    cy.get('input[placeholder="E-mail"]').type('joao@email.com');
    cy.get('input[placeholder="Telefone"]').type('11888888888');
    cy.contains('Adicionar').click();

    cy.contains('Editar').last().click();

    cy.get('input[placeholder="Nome"]').clear().type('João Editado');
    cy.contains('Salvar').click();

    cy.contains('João Editado').should('be.visible');
  });

  it('Deve remover um contato', () => {
    cy.get('input[placeholder="Nome"]').type('Contato Remover');
    cy.get('input[placeholder="E-mail"]').type('remove@email.com');
    cy.get('input[placeholder="Telefone"]').type('11777777777');
    cy.contains('Adicionar').click();

    cy.contains('Contato Remover')
      .closest('.contato')
      .find('button.delete')
      .click();

    cy.contains('Contato Remover').should('not.exist');
  });
});
