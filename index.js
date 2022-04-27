
import dotenv from "dotenv";
dotenv.config();
import express from "express"; //IMPORTANDO O EXPRESS
import path from "path";  //SERVE PARA DEFINIR CAMINHOS PADRÕES
const app = express(); // INSTANCIANDO O EXPRESS DENTRO DA CONST APP
const PORT = 3003 || process.env.PORT; //Criando uma porta para o servidor
let pokemons = [
    {
        id: 1,
        nome: "BULBASAUR",
        tipo: "Grama",
        imagem: "https://www.designerd.com.br/wp-content/uploads/2017/02/pokemons-realistas-de-joshua-dunlop-10.jpg",
        descricao: "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
        altura: "0.7m",
        peso: "6.9kg",
        categoria: "Semente",
        habilidade: "Folha Navalha"
    },
    {
        id: 2,
        nome: "IVYSAUR",
        tipo: "Grama",
        imagem: "https://cdnb.artstation.com/p/assets/images/images/029/612/351/medium/joshua-dunlop-ivysaur-watermarks.jpg?1598103733",
        descricao: "Quando o bulbo nas costas cresce, parece perder a capacidade de ficar em pé nas patas traseiras.",
        altura: "1.0m",
        peso: "13.0kg",
        categoria: "Semente",
        habilidade: "Chicote Tóxico"
    },
    {
        id: 3,
        nome: "VENUSAUR",
        tipo: "Grama",
        imagem: "https://cdna.artstation.com/p/assets/images/images/029/612/394/medium/joshua-dunlop-venusaur-watermarks.jpg?1598103909",
        descricao: "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.",
        altura: "2.0m",
        peso: "100.0kg",
        categoria: "Semente",
        habilidade: "Raio de Sol"
    },
    {
        id: 4,
        nome: "CHARMANDER",
        tipo: "Fogo",
        imagem: "https://www.designerd.com.br/wp-content/uploads/2017/02/pokemons-realistas-de-joshua-dunlop-9.jpg",
        descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
        altura: "0.6m",
        peso: "8.5kg",
        categoria: "Lagarto",
        habilidade: "Lança-Chamas"
    },
    {
        id: 5,
        nome: "CHARMELEON",
        tipo: "Fogo",
        imagem: "https://cdnb.artstation.com/p/assets/images/images/029/612/493/large/joshua-dunlop-charmeleon-watermarks.jpg?1598104312",
        descricao: "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda de fogo e corta com garras afiadas.",
        altura: "1.1m",
        peso: "19.0kg",
        categoria: "Lagarto",
        habilidade: "Golpe de Garra"
    },
    {
        id: 6,
        nome: "CHARIZARD",
        tipo: "Fogo",
        imagem: "https://cdna.artstation.com/p/assets/images/images/029/589/978/medium/joshua-dunlop-charizard-2-watermarked.jpg?1598029414",
        descricao: "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.",
        altura: "1.7m",
        peso: "90.5kg",
        categoria: "Voador",
        habilidade: "Incinerar"
    },
    {
        id: 7,
        nome: "SQUIRTLE",
        tipo: "Água",
        imagem: "https://cdnb.artstation.com/p/assets/images/images/028/324/535/medium/joshua-dunlop-squirtle-2-watermarked.jpg?1594142505",
        descricao: "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
        altura: "0.5m",
        peso: "9.0kg",
        categoria: "Tartaruga",
        habilidade: "Jato de Água"
    },
    {
        id: 8,
        nome: "WARTORTLE",
        tipo: "Água",
        imagem: "https://cdnb.artstation.com/p/assets/images/images/029/612/467/medium/joshua-dunlop-wartortle-watermarks.jpg?1598104249",
        descricao: "É reconhecido como um símbolo de longevidade. Se a concha tiver algas, esse Wartortle é muito antigo.",
        altura: "1.0m",
        peso: "22.5kg",
        categoria: "Lagarto",
        habilidade: "Investida"
    },
    {
        id: 9,
        nome: "BLASTOISE",
        tipo: "Água",
        imagem: "https://cdnb.artstation.com/p/assets/images/images/029/758/569/medium/joshua-dunlop-blastoise-watermarks.jpg?1598547948",
        descricao: "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.",
        altura: "1.7m",
        peso: "90.5kg",
        categoria: "Marisco",
        habilidade: "Bombardeio"
    },
    {
        id: 10,
        nome: "PIKACHU",
        tipo: "Elétrico",
        imagem: "https://cdna.artstation.com/p/assets/images/images/027/622/642/medium/joshua-dunlop-pikachu-watermarks.jpg?1592065979",
        descricao: "Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.",
        altura: "0.4m",
        peso: "0.6kg",
        categoria: "Roedor",
        habilidade: "Choque do Trovão"
    }
]
app.use(express.urlencoded({extended: true})); //  INFORMAÇÃO VAI PARA O BODY DA REQUISIÇÃO
app.use(express.json()); // CONVERTER AS INFORMAÇÕES ENVIADAS PARA JSON

app.listen(PORT, () => { //LISTEN É UMA FUNÇÃO EXPRESS PARA CRIAR UM SERVIDOR
    console.log(`Rodando servidor na porta http://localhost:${PORT}.`);
  });

app.get("/", function (req, res) { //GET É UM MÉTODO HTTP/HTTPS QUE SERVE PARA TRAZER UMA PÁGINA
    res.render('index.ejs', {
        pokemons
    })
},);

app.get("/detalhes/:id", function (req, res) {
    let pokemon
    req.params.id
    pokemons.filter((element) => {
        if (element.id == req.params.id) {
            pokemon = element
        }
        
    })
    res.render("detalhes.ejs", {
        pokemon
        
    });
});
app.get("/cadastro", (req, res) => {
    res.render('cadastro.ejs')
    ;
});

app.post('/cadastro', (req,res) => {
    let i = pokemons[pokemons.length-1].id + 1
    const {nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body
    pokemons.push({id: i, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade})
    res.redirect('/');
});

const __dirname = path.resolve(path.dirname("")); //DIRNAME SERVE PARA INFORMAR QUAL O CAMINHO PADRÃO PARA A MINHA PASTA

app.set("view engine", "ejs"); // FAZ COM QUE O EXPRESS RECONHEÇA O EJS COMO MOTOR DE VISUALIZAÇÃO
app.use(express.static(path.join(__dirname, "public")));

