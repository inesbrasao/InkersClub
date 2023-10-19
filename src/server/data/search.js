
async function getResults(params) {
    const collection = await GetCollection("photos")
    const result = await collection.find(params)
    return result
  }    //  Validar que param existe.


async function getRandomResults() {
  // const collection = await GetCollection("photos")
  // const result = await collection.find(params)
  // return result
}    //  Validar que param existe.




const obj = {
  artists: [
  {
      
      "name": "Ana Carolina" ,
      "email": "anacarolina@gmail.com",
      "instagram":"@ana_carolina",
      "city": "Braga",
      "shop": "The Waveless Beach",
      "phone": "+351967454687", 
      "password": "Mor@ngito19",
      "category":["glitch", "tinta branca", "minimalista"]
      
  },
  {
      "name": "João Silva",
      "email": "joao.silva@gmail.com",
      "instagram": "@joaosilva",
      "city": "Lisboa",
      "shop": "ArtStudio Lisboa",
      "phone": "+351912345678",
      "password": "SenhaSegura123",
      "category": ["neo tradicional", "aquarela"]
  },
  {
      "name": "Maria Cabral",
      "email": "maria.cabral@gmail.com",
      "instagram": "@mariacabral",
      "city": "Porto",
      "shop": "ColorSplash Studios",
      "phone": "+351987654321",
      "password": "Senha1234",
      "category": ["floral", "tinta branca", "tinta vermelha"]
  },
  {
      "name": "Carlos Pereira",
      "email": "carlos.pereira@gmail.com",
      "instagram": "@carlospereira",
      "city": "Faro",
      "shop": "Agulha Dourada",
      "phone": "+351933333333",
      "password": "SenhaCarlos",
      "category": ["single line", "preto e branco","sem contorno"]
  },
  {
      "name": "Sofia Ribeiro",
      "email": "sofia.ribeiro@gmail.com",
      "instagram": "@sofiaribeiro",
      "city": "Coimbra",
      "shop": "ArtInk Coimbra",
      "phone": "+351966666666",
      "password": "Arte1234",
      "category": ["single line", "lettering", "pontilhismo"]
  },
  {
      "name": "Pedro Ferreira",
      "email": "pedro.ferreira@gmail.com",
      "instagram": "@pedroferreira",
      "city": "Bragança",
      "shop": "NeedlePoke Art",
      "phone": "+351955555555",
      "password": "Pintor45",
      "category": ["oriental", "neo tradicional","tribal"]
  },
  {
      "name": "Marta Lopes",
      "email": "marta.lopes@gmail.com",
      "instagram": "@martalopes",
      "city": "Aveiro",
      "shop": "Canvas Creations",
      "phone": "+351944444444",
      "password": "MartaArt123",
      "category": ["floral", "tribal"]
  },
  {
      "name": "Rui Costa",
      "email": "rui.costa@gmail.com",
      "instagram": "@ruicosta",
      "city": "Vila Real",
      "shop": "Artistic Visions",
      "phone": "+351977777777",
      "password": "Artista456",
      "category": ["lettering", "preto e branco"]
  },
  {
      "name": "Catarina Almeida",
      "email": "catarina.almeida@gmail.com",
      "instagram": "@catarinaalmeida",
      "city": "Viseu",
      "shop": "ColorBliss Creations",
      "phone": "+351988888888",
      "password": "CatArt123",
      "category": ["retratos", "oriental"]
  },
  {
      "name": "Jorge Borges",
      "email": "jorge.borges@gmail.com",
      "instagram": "@jorgeborges",
      "city": "Évora",
      "shop": "ArtGallery Évora",
      "phone": "+351966666666",
      "password": "Artista123",
      "category": ["preto e branco", "glitch","geométrico"]
  },
  {
      "name": "Carolina Bastos",
      "email": "carolina.bastos@gmail.com",
      "instagram": "@carolinabastos",
      "city": "Guarda",
      "shop": "Canvas Creations",
      "phone": "+351922222222",
      "password": "CarolArt456",
      "category": ["floral", "lettering","single line"]
  },
  {
      "name": "António Pereira",
      "email": "antonio.pereira@gmail.com",
      "instagram": "@antoniopereira",
      "city": "Leiria",
      "shop": "Artistic Creations Leiria",
      "phone": "+351977777777",
      "password": "Art1234",
      "category": ["oriental", "tinta vermelha","floral"]
  },
  {
      "name": "Lúcia Marques",
      "email": "lucia.marques@gmail.com",
      "instagram": "@luciamarques",
      "city": "Braga",
      "shop": "Luminous Art Studio",
      "phone": "+351955555555",
      "password": "ArtistaLucia",
      "category": ["aquarela", "minimalista","pontilhismo"]
  },
  {
      "name": "Hugo Semedo",
      "email": "hugo.semedo@gmail.com",
      "instagram": "@inker4life",
      "city": "Setúbal",
      "shop": "InkArt Setúbal",
      "phone": "+351988888888",
      "password": "Ink1234",
      "category": ["single line", "tribal"]
  },
  {
      "name": "Sara Fernandes",
      "email": "sara.fernandes@gmail.com",
      "instagram": "@sarafernandes",
      "city": "Portimão",
      "shop": "SurrealArt Portimão",
      "phone": "+351933333333",
      "password": "SaraArt45",
      "category": ["floral", "neo tradicional"]
  },
  {
      "name": "Ricardo Alves",
      "email": "ricardo.alves@gmail.com",
      "instagram": "@ricardoalves",
      "city": "Santarém",
      "shop": "BrushMagic Santarém",
      "phone": "+351944444444",
      "password": "ArtMagic123",
      "category": ["oriental", "aquarela","tinta branca"]
  },
  {
      "name": "Ana Gonçalves",
      "email": "ana.goncalves@gmsem contrail.com",
      "instagram": "@anagoncalves",
      "city": "Covilhã",
      "shop": "Canvas Creations",
      "phone": "+351966666666",
      "password": "AnaArt123",
      "category": ["floral", "preto e branco"]
  },
  {
      "name": "Luís Rodrigues",
      "email": "luis.rodrigues@gmail.com",
      "instagram": "@luisrodrigues",
      "city": "Açores",
      "shop": "ArtVision Açores",
      "phone": "+351955555555",
      "password": "ArtistaLuís",
      "category": ["new school", "minimalista"]
  },
  {
      "name": "Mariana Sousa",
      "email": "mariana.sousa@gmail.com",
      "instagram": "@marianasousa",
      "city": "Funchal",
      "shop": "ColorSplash Studios",
      "phone": "+351988888888",
      "password": "MarianaArt123",
      "category": ["aquarela", "tribal"]
  },
  {
      "name": "Gonçalo Oliveira",
      "email": "goncalo.oliveira@gmail.com",
      "instagram": "@goncalooliveira",
      "city": "Évora",
      "shop": "Artistic Creations Évora",
      "phone": "+351977777777",
      "password": "ArtGonçalo123",
      "category": ["black work", "neo tradicional"]
  },
  {
      "name": "Beatriz Moura",
      "email": "beatriz.moura@gmail.com",
      "instagram": "@beatrizmoura",
      "city": "Guarda",
      "shop": "Canvas Creations",
      "phone": "+351922222222",
      "password": "BeatrizArt456",
      "category": ["floral", "lettering"]
  }
  ]
  }