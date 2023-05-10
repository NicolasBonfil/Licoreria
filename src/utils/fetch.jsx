let productos1 = [
    {id:"1", name: 'Andes Origen Rubia Golden lata 473ml', price: 300, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_758130-MLA44839765132_022021-F.webp', categoria: "cervezas", stock: 1},
    {id:"2", name: 'Quilmes Stout lata 473mL', price: 320, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_768107-MLA44839759876_022021-F.webp', categoria: "cervezas", stock: 14},
    {id:"3", name: 'Brahma Chopp American Adjunct Lager lata 473ml', price: 332, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_899242-MLA44839754774_022021-F.webp', categoria: "cervezas", stock: 3},
    {id:"4", name: 'Patagonia Amber Lager Lata 410ml X6', price: 2340, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_736236-MLA53355731486_012023-F.webp', categoria: "cervezas", stock: 9},
    {id:"5", name: 'Hielera Frapera Stella Artois Cerveza', price: 3627, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_855046-MLA54712370807_032023-F.webp', categoria: "cervezas", stock: 0},
    {id:"6", name: 'Budweiser American Adjunct Lager 710ml', price: 397, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_979443-MLA44839748931_022021-F.webp', categoria: "cervezas", stock: 6},
    {id:"7", name: 'Stella Artois Noire 473ml Negra Pack X6', price: 2100, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_729196-MLA53712908945_022023-F.webp', categoria: "cervezas", stock: 2},

    {id:"8", name: 'Tinto Trumpeter Malbec 750ml Botella Rutini Wines', price: 2160, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_808289-MLA50019891358_052022-F.webp', categoria: "vinos", stock: 7},
    {id:"9", name: 'Tinto La Linda Malbec Bodega Luigi Bosca 750ml', price: 1625, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_616582-MLA49421585610_032022-F.webp', categoria: "vinos", stock: 13},
    {id:"10", name: 'Champagne Mumm Cuvee Reserve Brut Nature 750ml Espumante', price: 1444, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_915197-MLA51042891552_082022-F.webp', categoria: "vinos", stock: 10},
    {id:"11", name: 'Decantador Para 1,5l De Cristal Con Estuche', price: 13229, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_604031-MLA52836122205_122022-F.webp', categoria: "vinos", stock: 8},
    {id:"12", name: 'Rutini Chardonnay Blanco 750ml Botella Mendoza Roble', price: 4140, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_826975-MLA52267607533_112022-F.webp', categoria: "vinos", stock: 5},
    {id:"13", name: 'Terrazas Reserva Malbec De Los Andes 750ml Tinto Botella', price: 2610, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_864864-MLA29329015403_022019-F.webp', categoria: "vinos", stock: 11},
    {id:"14", name: 'Dv Catena Cabernet Malbec 750ml', price: 5946, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_923502-MLA31183106493_062019-F.webp', categoria: "vinos", stock: 12},
    {id:"15", name: 'Cuchara Para Cocteleria De Acero Inoxidable', price: 1250, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_669345-MLA52838182362_122022-F.webp', categoria: "vinos", stock: 4},

    {id: "16", name: 'Johnnie Walker Double Black Blended Escocés 750ml', price: 13500, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_755824-MLA48384453394_112021-F.webp', categoria: "whisky", stock: 1},
    {id: "17", name: "The Glenlivet Founder's Reserve escocés 750ml", price: 14400, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_789859-MLA44850220471_022021-F.webp', categoria: "whisky", stock: 8},
    {id: "18", name: 'Johnny Walker Jw Gold Label Reserve Johnnie 750ml', price: 22275, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_659031-MLA51506410473_092022-F.webp', categoria: "whisky", stock: 15},
    {id: "19", name: "Ballantine's 7 Años Escocés Botella 700ml + Estuche", price: 6894, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_883763-MLA50529760753_062022-F.webp', categoria: "whisky", stock: 7},
    {id: "20", name: 'Highland Park 12 Años Single Malt 700ml Escoces', price: 58644, foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_873229-MLA45614099108_042021-F.webp', categoria: "whisky", stock: 13}
]


const mFetch = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            !id? res(productos1) : res(productos1.find(producto => producto.id === id))
        }, 1000);
    })
}

export default mFetch