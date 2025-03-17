const posts = require("../data/postsData");
const postsData = require("../data/postsData");
const { post } = require("../routers/posts");

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
    const newId = postsData[postsData.length - 1].id + 1;

    const newPost = {
        id: 6,
        title: "Torta paesana",
        slug: "torta-paesana",
        content: `La torta paesana è un dolce di origine lombarda e precisamente della Brianza, la zona compresa tra la provincia a nord di Milano e il lago di Lecco-Como. E' un dolce di origine contadina, dalle infinite varianti, ma realizzata principalmente con pane raffermo bagnato nel latte. E' infatti conosciuta anche come torta di pane o, in dialetto locale, “michelacc” ovvero mica e lac (pane e latte). A seconda dei gusti e delle disponibilità del momento, al pane ammollato ogni famiglia univa ingredienti diversi, chi l'uvetta o chi i pinoli ad esempio. Noi vi presentiamo la nostra versione con l'aggiunta di cacao e amaretti: perfetta da gustare per una merenda dal sapore rustico, la torta paesana è un perfetto dolce di recupero quando si ha del pane avanzato… ed è ancora più buona il giorno dopo!`,
        image: "torta_paesana.jpeg",
        tags: ["Dolci", "Dolci al cioccolato", "Torte", "Ricette vegetariane", "Ricette al forno"],
    }

    postsData.push(newPost);
    console.log(postsData);

    //status corretto
    res.sendStatus(201);
    res.json(newPost);
}

//update
function update(req, res){
    //recupero l'id del post da modificare
    const id = Number(req.params.id);
    //cerco il post tramite id
    const post = postsData.find(post => post.id === id);
    //controllo se esiste il post
    if(!post){
        res.status(404);
        return res.json({
            error: "404 not found",
            message: "Post not found"
        })
    }
    //aggiorno il post
    post.title = req.params.title;
    post.slug = req.params.slug;
    post.content = req.params.content;
    post.image = req.params.image;
    post.tags = req.params.tags;

    //controllo se il post è stato aggiornato
    console.log(postsData);
    //restituisco il post aggiornato in formato json
    res.json(post);
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
        res.sendStatus(404);
    }
    //rimuovo il post dall'array
    postsData.splice(postsData.indexOf(post), 1);
    res.status(204)
    console.log(post)
}

module.exports = { index, show, store, update, modify, destroy };