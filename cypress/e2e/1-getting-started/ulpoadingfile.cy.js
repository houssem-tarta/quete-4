
describe('uploading file test',()=>{
    it('upload image',()=>{
        cy.visit('https://filebin.net/');
        cy.get('#fileField').attachFile('qeuet4.jpeg');
        cy.get('#fileField').click()
        cy.get('tbody > tr > :nth-child(1)').contains('qeuet4.jpeg')


        


    })
})