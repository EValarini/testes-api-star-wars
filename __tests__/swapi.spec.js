const request = require('supertest')

it('Deve visualizar informações de cadastro, quando buscar uma pessoa existente', async () => {
   // https://swapi.dev/api/
    // /people/1

    const resposta = await request('https://swapi.dev/api/').get('/people/1')

    // console.log(resposta.status)
    // console.log(resposta.body)

    expect(resposta.status).toBe(200)
    expect(resposta.body.films).toBeDefined()
    expect(resposta.body.vehicles.length).toBeGreaterThan(0)
    expect(resposta.body.name).toBe('Luke Skywalker')

    //Assincronismo + Promessas
    //Async + Promisses
}) 

it ('Deve receber uma mensagem de erro quando buscar por uma pessoa inexistente', async () => {
    const resposta = await request('https://swapi.dev/api/').get('/people/9999')
    
    //console.log(resposta.status)
    //console.log(resposta.body)

expect(resposta.status).toBe(404)
expect(resposta.body.detail).toBe('Not found')
    expect(resposta.body).toMatchObject({
    'detail': 'Not found'
})

})
// Criar novos testes para o caminho "People". 

it('Deve visualizar informações dos filmes criados', async () => {
    // https://swapi.dev/api/
     // /films/1
 
     const resposta = await request('https://swapi.dev/api/').get('/films/1')
 
     // console.log(resposta.status)
     // console.log(resposta.body)
 
     expect(resposta.status).toBe(200)
     expect(resposta.body.characters).toBeDefined()
     expect(resposta.body.species.length).toBeGreaterThan(0)
     expect(resposta.body.title).toBe('A New Hope')
 
     //Assincronismo + Promessas
     //Async + Promisses
 }) 
 
 it ('Deve receber uma mensagem de erro quando buscar por um filme inexistente', async () => {
     const resposta = await request('https://swapi.dev/api/').get('/films/44')
     
     //console.log(resposta.status)
     //console.log(resposta.body)
 
 expect(resposta.status).toBe(404)
 expect(resposta.body.detail).toBe('Not found')
     expect(resposta.body).toMatchObject({
     'detail': 'Not found'
 })
 
 })
