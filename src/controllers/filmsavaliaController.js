//const filmsavalia = [
  //  {
  //    id: 1,
  //    nome: "Nope",
  //    descricao: "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
  //    ratings: 3.9,
  //    categoria: "Terror",
  //  },
  //  {
  //    id: 2,
  //    nome: "Prey",
  //    descricao: "On the Great Plains in 1719, Naru, a fierce and highly skilled Comanche warrior, sets out to protect her people when an unknown danger threatens them. But the prey she’s stalking turns out to be a highly evolved alien predator with a technically advanced arsenal.",
  //    ratings: 3.7,
  //    categoria: "Drama",
  //  },
  //  {
  //    id: 3,
  //    nome: "Thirteen Lives",
  //    descricao: "Twelve boys and the coach of a Thai soccer team explore the Tham Luang cave when an unexpected rainstorm traps them in a chamber inside the mountain. Entombed behind a maze of flooded cave tunnels, they face impossible odds. A team of world-class divers navigate through miles of dangerous cave networks to discover that finding the boys is only the beginning.",
  //    ratings: 3.7,
  //    categoria: "Drama",
  //  },
  //  {
  //    id: 4,
  //    nome: "Emily the Criminal",
  //    descricao: "Blusa trevEmily, who is saddled with student debt and locked out of the job market due to a minor criminal record, gets involved in a credit card scam that pulls her into the criminal underworld of Los Angeles, ultimately leading to deadly consequences.osa",
  //    ratings: 3.5,
  //    categoria: "Comédia",
  //  },
  //  {
  //    id: 5,
  //    nome: "Funny Pages",
  //    descricao: "A teenage cartoonist rejects the comforts of his suburban life in a misguided quest for soul.",
  //    ratings: 3.5,
   //   categoria: "Comédia",
   // },
   // {
   //   id: 6,
   //   nome: "Girl Picture",
   //   descricao: "Best friends Mimmi and Rönkkö support each other unconditionally. They want to live adventurous lives, loaded with experiences and passion. Emma on the contrary has given her whole life to figure skating. Nothing gets between her and success. But when the girls meet, life opens whole new paths, and they all rocket in new directions. While Mimmi and Emma experience the earth moving effects of first love, Rönkkö is on a quest to find pleasure. Three Fridays is all it takes to turn their worlds upside down",
   //   ratings: 3.7,
   //   categoria: "Drama",
  //  },
  //];
  const filmsavaliaController = {
    
    index2: (req, res) => {
      return res.render("filmsavalia", {
        title: "Lista filmes",
        listfilms2: filmsavalia,
      });
    },
  
     
  };
  module.exports = filmsavaliaController;