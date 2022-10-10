// const films = [
//   {
//     id: 1,
//     nome: "Nope",
//     descricao: "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
//     ratings: 3.9,
//     categoria: "Terror",
//   },
//   {
//     id: 2,
//     nome: "Prey",
//     descricao: "On the Great Plains in 1719, Naru, a fierce and highly skilled Comanche warrior, sets out to protect her people when an unknown danger threatens them. But the prey she’s stalking turns out to be a highly evolved alien predator with a technically advanced arsenal.",
//     ratings: 3.7,
//     categoria: "Drama",
//   },
//   {
//     id: 3,
//     nome: "Thirteen Lives",
//     descricao: "Twelve boys and the coach of a Thai soccer team explore the Tham Luang cave when an unexpected rainstorm traps them in a chamber inside the mountain. Entombed behind a maze of flooded cave tunnels, they face impossible odds. A team of world-class divers navigate through miles of dangerous cave networks to discover that finding the boys is only the beginning.",
//     ratings: 3.7,
//     categoria: "Drama",
//   },
//   {
//    id: 4,
//     nome: "Emily the Criminal",
//     descricao: "Blusa trevEmily, who is saddled with student debt and locked out of the job market due to a minor criminal record, gets involved in a credit card scam that pulls her into the criminal underworld of Los Angeles, ultimately leading to deadly consequences.osa",
//     ratings: 3.5,
//     categoria: "Comédia",
//   },
//   {
//     id: 5,
//     nome: "Funny Pages",
//     descricao: "A teenage cartoonist rejects the comforts of his suburban life in a misguided quest for soul.",
//     ratings: 3.5,
//     categoria: "Comédia",
//   },
//   {
//     id: 6,
//     nome: "Girl Picture",
//     descricao: "Best friends Mimmi and Rönkkö support each other unconditionally. They want to live adventurous lives, loaded with experiences and passion. Emma on the contrary has given her whole life to figure skating. Nothing gets between her and success. But when the girls meet, life opens whole new paths, and they all rocket in new directions. While Mimmi and Emma experience the earth moving effects of first love, Rönkkö is on a quest to find pleasure. Three Fridays is all it takes to turn their worlds upside down",
//     ratings: 3.7,
//     categoria: "Drama",
//   },
// ];


const db = require("../config/sequelize");
const films = require("../models/Film");

const { Op } = require("sequelize");
const Film = require("../models/Film");

const filmController = {
 
  index: async(req, res)=>{
    let films = await Film.findAll()

    return res.render('films', {films})

  },
 

   

   
  // index: (req, res) => {
  //   return res.render("films", {
  //     title: "Lista filmes",
  //     listfilms: films,
  //   });
  // },
  
  // index1: (req, res) => {
  //   return res.render("filmslist", {
  //     title: "Lista filmes",
  //     listfilms1: filmslist,
  //   });
  // },
  
  //index: async (req, res) => {
  //  const { search } = req.query;
  //  try {
  //    const films = await Film.findAll();
  //    console.log(films);
  //    res .status(200)
  //        .json({ data: films, message: "Busca realizada com sucesso" });
  //  } catch (error) {
  //    console.log(error);
  //    res.status(400).json({ message: "Erro na busca"});
  //  }
  //},
  

  
//   show: async (req, res) => {
//     const { id } = req.params;
//     try {

    
//     const filmResult = films.find(
//       (film) => film.id === parseInt(id)
//     );
    
//     if (!filmResult) {
//       return res.render("error", {
//         title: "Erro",
//         message: "Erro ao encontrar filme",
//       });
//     }
//     return res.render("film", {
//       title: "Visualizar filme",
//       film: filmResult,
//     });

//     const film = await film.findByPk(id);
//       console.log(film);
//       if (!film) {
//         throw Error("NOT_FOUND");
//       }
      
//       res.status(200).json({ data: film });


//     } catch (error) {
//       console.log(error);
//       if (error.message === "FILM_NOT_FOUND") {
//         res.status(400).json({ message: "Filme não encontrado" });
//       } else {
//         res.status(400).json({ message: "Erro ao encontrar filme" });
//       }
//     }
  
//   },
  
  create:(req, res)=>{
    return res.render('film-create')
  },
  store: async (req, res)=>{
    const { nome, descricao, genero, classificacao, produtora, ano, diretor} = req.body

    const resultado = await Film.create({
      nome,
      descricao,
      genero,
      classificacao,
      produtora,
      ano,
      diretor
    })
    return res.redirect('/film')
  },
  // findById: async (req, res)=>{
  //   let {id} = req.params

  //   let film = await Film.findOne([
  //     // where:{ 
  //     //   id_film:id
  //     // }
  //   ])
  //   return res.render('viewFilm', {film})
  // },
  // create: async (req, res) => {
    
  //   return res.render("film-create", { title: "Adicionar filme" });
  // },
  
  // store: async (req, res) => {
  //   const { nome, descricao, genero, produtora, ano, diretor } = req.body;

  //   if (!nome || !descricao || !genero || !produtora || !ano || !diretor) {
  //     return res.render("film-create", {
  //       title: "Criar filme",
  //       error: {
  //         message: "Preencha todos os campos!",
  //       },
  //     });
  //   }
  //   const newfilm = {
  //     id: films.length + 1,
  //     nome,
  //     descricao,
  //     genero,
  //     produtora,
  //     ano,
  //     diretor,
  //   };
  //   films.push(newfilm);

  //   return res.render("film-create", {
  //     title: "Adicionar Filme",
  //     success: {
  //       message: "Filme adicionado com sucesso!",
  //     },
  //   });
  //   try {
  //     const films = await Film.create({
  //       nome,
  //       descricao,
  //       genero,
  //       produtora,
  //       ano,
  //       diretor
  //     });
  //     console.log(films);
  //     res.status(201).json({ message: "Filme cadastrado com sucesso!" });
  //     } catch (error) {
  //       console.log(error);
  //       res.status(400).json({ message: "Erro ao cadastrar filme" });
  //     }
  
  // },
  
//   edit: (req, res) => {
    
//     const { id } = req.params;
//     const filmResult = films.find(
//       (film) =>
        
//         film.id === parseInt(id)
//     );
//     if (!filmResult) {
//       return res.render("error", {
//         title: "Error",
//         message: "Filme não encontrado",
//       });
//     }
//     return res.render("film-edit", {
//       title: "Editar filme",
//       film: filmResult,
//     });
//   },
  
//   update: async (req, res) => {
//     const { id } = req.params;
//     const { nome, descricao, genero, produtora, ano, diretor } = req.body;
    
//     const filmResult = films.find(
//       (film) => film.id === parseInt(id)
//     );
//     if (!filmResult) {
//       return res.render("error", {
//         title: "Erro",
//         message: "Erro ao encontrar filme",
//       });
//     }
//     if (nome) filmResult.nome = nome;
//     if (descricao) filmResult.descricao = descricao;
//     if (ratings) filmResult.ratings = ratings;
//     if (categoria) filmResult.categoria = categoria;

//     return res.render("success", {
//       title: "Filme atualizado",
//       message: "Filme atualizado com sucesso!",
//     });
//     try {
//       const films = await Film.update(
//         {
//           nome,
//           descricao,
//           genero,
//           produtora,
//           ano,
//           diretor
//         },
//         {
//           where: { id },
//         }
//       );
//       console.log(films);
//       res.status(200).json({ message: "Filme atualizado com sucesso" });
//     } catch (error) {
//       console.log(error);
//       res.status(400).json({ message: "Erro ao atualizar filme" });
//     }
    
//   },
  edit: async (req, res)=>{
    const {id} = req.params

    const film = await Film.findByPk(id)
    return res.render('film-edit', {film})
  },

  update: async (req, res)=>{
    const {id} = req.params;
    const {nome, descricao, genero, classificacao, produtora, ano, diretor} = req.body;

    const resultado = await Film.update({
      nome,
      descricao,
      genero,
      classificacao,
      produtora,
      ano, 
      diretor
    },
    {
      where:{
        id
      }
    })

    console.log(resultado)

    return res.redirect('/film')


  },


  delete: async (req, res)=>{
    const {id} = req.params

    const film = await Film.findByPk(id)
    return res.render('film-delete', {film})
  },

  destroy: async(req, res)=>{    
    const {id} = req.params;
       
    const resultado = await Film.destroy(
      {      
        where:{
          id
        }
      })

    console.log(resultado)

    res.redirect('/film')
  },


  // findByPk: async (req, res)=>{
  //   let {id} = req.params;

  //   let film = await Film.findOne({
  //     where:{
  //       id_film:id
  //     }
  //   })
    // return res.render('viewFilm', {film})


  
  
  
//   delete: (req, res) => {
//     const { id } = req.params;
//     const filmResult = films.find(
//       (film) => film.id === parseInt(id)
//     );
    
//     if (!filmResult) {
//       return res.render("error", {
//         title: "Erro",
//         message: "Erro ao encontrar filme",
//       });
//     } 
//     return res.render("film-delete", {
//       title: "Deletar filme",
//       film: filmResult,
//     });
//   },
  
//   destroy: async (req, res) => {
//     const { id } = req.params;
    
//     const result = films.findIndex((film) => film.id === parseInt(id));

//     if (result === -1) {
//       return res.render("error", {
//         title: "Erro",
//         message: "Erro ao encontrar filme",
//       });
//     }
    
//    films.splice(result, 1);
//     return res.render("success", {
//       title: "Filme deletado",
//       message: "Filme deletado com sucesso",
      
//     });
    
//     try {
//       const users = await db.query("DELETE FROM users WHERE id = :id", {
//         replacements: { id },
//         type: Sequelize.QueryTypes.DELETE,
//       });
//       console.log(films);
//       res.status(200).json({ message: "Filme deletado com sucesso!" });
//     } catch (error) {
//       console.log(error);
//       res.status(400).json({ message: "Erro ao deletar filme" });
//     }
//   }

findAll: async(req, res)=>{
  const {id} = req.params

    const film = await Film.findByPk(id)
    return res.render('film', {film})
},

 };

module.exports = filmController;