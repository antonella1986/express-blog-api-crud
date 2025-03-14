const postController = require("../controllers/postController");

//index
function index(req, res){
    res.json(postController);
}

//show
function show(req, res){
    res.send(`Mostra questo post: ${req.params.id}`)
}

//store
function store (req, res){
    res.send("Crea un nuovo post")
}

//update
function update(req, res){
    res.send(`Modifica il post con id: ${req.params.id}`)
}

//modify
function modify(req, res){
    res.send(`Modifica parziale a questo post: ${req.params.id}`)
}

//destroy
function destroy(req, res){
    res.send(`Elimina questo post: ${req.params.id}`)
}

module.exports = { index, show, store, update, modify, destroy };