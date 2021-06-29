const express = require('express');
const app = express();
const PORT = 5000;

const recipes = [
    {
        "id": "8",
        "createdAt": "2040-05-27T18:51:39.861Z",
        "name": "Dayana_Gibson",
        "avatar": "https://cdn.fakercloud.com/avatars/dgclegg_128.jpg",
        "userId": 0
    },
    {
        "id": "9",
        "createdAt": "2085-11-03T23:15:29.994Z",
        "name": "Jonathan73",
        "avatar": "https://cdn.fakercloud.com/avatars/teeragit_128.jpg",
        "userId": 49
    },
    {
        "id": "10",
        "createdAt": "2053-02-01T23:36:08.718Z",
        "name": "Garfield26",
        "avatar": "https://cdn.fakercloud.com/avatars/juaumlol_128.jpg",
        "userId": 76
    },
    {
        "id": "11",
        "createdAt": "2073-01-21T16:59:18.119Z",
        "name": "Zachariah_Cronin47",
        "avatar": "https://cdn.fakercloud.com/avatars/y2graphic_128.jpg",
        "userId": 55
    },
    {
        "id": "12",
        "createdAt": "2097-05-29T23:19:33.331Z",
        "name": "Mabel83",
        "avatar": "https://cdn.fakercloud.com/avatars/mahmoudmetwally_128.jpg",
        "userId": 17
    },
    {
        "id": "13",
        "createdAt": "2022-07-01T22:41:51.764Z",
        "name": "Ted.Sauer",
        "avatar": "https://cdn.fakercloud.com/avatars/craigelimeliah_128.jpg",
        "userId": 45
    },
    {
        "id": "14",
        "createdAt": "2018-09-18T00:32:47.731Z",
        "name": "Clarissa_Hudson1",
        "avatar": "https://cdn.fakercloud.com/avatars/alsobrooks_128.jpg",
        "userId": 5
    },
    {
        "id": "15",
        "createdAt": "2035-07-07T19:52:19.836Z",
        "name": "Liana11",
        "avatar": "https://cdn.fakercloud.com/avatars/n_tassone_128.jpg",
        "userId": 26
    },
    {
        "id": "16",
        "createdAt": "2071-03-08T18:01:01.569Z",
        "name": "Evangeline.Hahn59",
        "avatar": "https://cdn.fakercloud.com/avatars/tweetubhai_128.jpg",
        "userId": 69
    },
    {
        "id": "16",
        "createdAt": "2069-09-20T01:58:26.205Z",
        "name": "Ariel.McKenzie",
        "avatar": "https://cdn.fakercloud.com/avatars/deeenright_128.jpg",
        "userId": 35
    },
    {
        "id": "17",
        "createdAt": "2096-02-02T10:33:52.955Z",
        "name": "Pierce.Trantow23",
        "avatar": "https://cdn.fakercloud.com/avatars/danpliego_128.jpg",
        "userId": 71
    },
    {
        "id": "18",
        "createdAt": "2039-08-07T06:26:30.225Z",
        "name": "Theo_Glover86",
        "avatar": "https://cdn.fakercloud.com/avatars/guillemboti_128.jpg",
        "userId": 2
    },
    {
        "id": "19",
        "createdAt": "2019-08-08T05:26:30.292Z",
        "name": "Kaylee_Balistreri",
        "avatar": "https://cdn.fakercloud.com/avatars/Silveredge9_128.jpg",
        "userId": 26
    },
    {
        "id": "20",
        "createdAt": "2026-11-08T20:03:36.408Z",
        "name": "Kamryn_Schowalter43",
        "avatar": "https://cdn.fakercloud.com/avatars/akmalfikri_128.jpg",
        "userId": 86
    },
    {
        "id": "21",
        "createdAt": "2039-03-05T20:48:24.759Z",
        "name": "Price95",
        "avatar": "https://cdn.fakercloud.com/avatars/abotap_128.jpg",
        "userId": 36
    }
]

app.get('/', (request, response) => {
    response.send("Welcome All")
})


app.get('/users', (request, response) => {
    response.send(recipes)
})

app.get('/users/:id', (request, response) => {
    const { id } = request.params;
    const user = recipes.find((user) => user.id === id)
    response.send(user);
})

app.post('/users', (request, response) => {
    response.send(recipes)
})

app.listen(PORT, () => console.log("Server was started"));