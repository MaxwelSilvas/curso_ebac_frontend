describe('Agenda de Contatos - Inclusão', () => {
  it('Deve adicionar um novo contato', () => {
    cy.visit('/');
    
    cy.get('input[placeholder="Nome"]').type('Teste');
    cy.get('input[placeholder="Telefone"]').type('101010101010');
    cy.get('input[placeholder="E-mail"]').type('teste@example.com');
    
    cy.contains('button', 'Adicionar').click();
    
    cy.contains('Teste').should('exist');
    cy.contains('101010101010').should('exist');
    cy.contains('teste@example.com').should('exist');
  });
});
describe('Agenda de Contatos - Inclusão', () => {
  it('Deve adicionar um novo contato', () => {
    cy.visit('/');
    
    cy.get('input[placeholder="Nome"]').type('Teste0');
    cy.get('input[placeholder="Telefone"]').type('101010101010');
    cy.get('input[placeholder="E-mail"]').type('teste@example.com');
    
    cy.contains('button', 'Adicionar').click();
    
    cy.contains('Teste').should('exist');
    cy.contains('101010101010').should('exist');
    cy.contains('teste@example.com').should('exist');
  });
  describe('Agenda de Contatos - Inclusão', () => {
      it('Deve adicionar um novo contato', () => {
        cy.visit('/');
        
        cy.get('input[placeholder="Nome"]').type('Teste1');
        cy.get('input[placeholder="Telefone"]').type('101010101010');
        cy.get('input[placeholder="E-mail"]').type('teste@example.com');
        
        cy.contains('button', 'Adicionar').click();
        
        cy.contains('Teste').should('exist');
        cy.contains('101010101010').should('exist');
        cy.contains('teste@example.com').should('exist');
      });
    });
});
describe('Agenda de Contatos - Inclusão', () => {
  it('Deve adicionar um novo contato', () => {
    cy.visit('/');
    
    cy.get('input[placeholder="Nome"]').type('Teste2');
    cy.get('input[placeholder="Telefone"]').type('101010101010');
    cy.get('input[placeholder="E-mail"]').type('teste@example.com');
    
    cy.contains('button', 'Adicionar').click();
    
    cy.contains('Teste').should('exist');
    cy.contains('101010101010').should('exist');
    cy.contains('teste@example.com').should('exist');
  });
});
describe('Agenda de Contatos - Alteração', () => {
  it('Deve editar o terceiro contato na lista', () => {
      cy.visit('/');
      cy.wait(1000);

      cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
      cy.get('input[placeholder="Nome"]').clear().type('Teste4');
      cy.get('input[placeholder="E-mail"]').clear().type('teste@example.com');
      cy.get('input[placeholder="Telefone"]').clear().type('1010101010100');
      
      cy.contains('button', 'Salvar').click();
      
      cy.contains('Teste4').should('exist');
      cy.contains('teste@example.com').should('exist');
      cy.contains('1010101010100').should('exist');
  });
});



describe('Agenda de Contatos - Remoção', () => {
  it('Deve remover o quinto contato na lista', () => {
      cy.visit('/');
      cy.wait(1000);


      cy.on('window:confirm', () => true);

   
      cy.get(':nth-child(5) > .sc-gueYoa > .delete').click();


      cy.wait(1000);
      cy.contains('Nome do Contato').should('not.exist');
  });
});