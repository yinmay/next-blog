// describe('baidu', () => {
//   it('能搜索饥人谷', () => {
//     cy.visit('https://wwww.baidu.com');
//     cy.get('input#kw').type('饥人谷');
//     cy.contains('百度一下').click();
//     cy.contains('饥人谷官网').should('exist');
//     cy.contains('jirengu.com').should('exist');
//   });
// });

describe('baidu', () => {
  it('能', () => {
    cy.visit('http://localhost:3000/posts');
    cy.contains('Hello').should('exist').click();
    cy.contains('地方').should('exist');
  });
});
