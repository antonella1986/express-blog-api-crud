const posts = require("../data/postsData");
const postsData = require("../data/postsData");

//index
function index(req, res){
    res.json(postsData);
}

//show
function show(req, res){
    const postId = Number(req.params.id);
    //cerco il l'id che mi interessa dentro postData (l'array di oggetti)
    //(post rappresenta ogni elemento dell'array postsData
    //se il post.slug è uguale all'id che mi interessa, allora viene restituito
    const post = postsData.find(post => post.id === postId);
    res.json(post);
}

//store
function store (req, res){
    res.send("Creazione nuovo post");
}

//update
function update(req, res){
    res.send(`Modifica totale del post con id: ${req.params.id}`);
}

//modify
function modify(req, res){
    res.send(`Modifica parziale del post con id: ${req.params.id}`);
}

//destroy
function destroy(req, res){
    const postId = Number(req.params.id);
    // cerco il post con l'id passato
    const post = postsData.find(post => post.id === postId);
    // imposto il 404 se il post cercato non esiste
    if (!post) {
        return res.status(204).json({
            error: 'Post non trovato',
            message: `Post con id ${req.params.id} non trovato`
        });
    }
    res.send(`Eliminazione del post con id: ${req.params.id}`);
    console.log(postsData)
}

module.exports = { index, show, store, update, modify, destroy };