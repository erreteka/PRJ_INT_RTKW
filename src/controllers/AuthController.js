const fs = require("fs");
const path = require("path");

const authController = {
  
  register: (req, res) => {
    return res.render("register", {
      title: "Cadastro",
      user: req.cookies.user,
      admin: req.cookies.admin,
    });
  },
  
  create: (req, res) => {
    const usersJson = fs.readFileSync(
      
      path.join(__dirname, "..", "data", "users.json"),
      
      "utf-8"
    );
    const users = JSON.parse(usersJson);

    const { nome, sobrenome, apelido, email, senha, confirmar_senha } =
      req.body;
    
    if (
      !nome ||
      !sobrenome ||
      !apelido ||
      !email ||
      !senha ||
      !confirmar_senha
    ) {
      return res.render("register", {
        title: "Cadastro",
        error: {
          message: "Preencha todos os campos",
        },
      });
    }
    if (senha !== confirmar_senha) {
      return res.render("register", {
        title: "Cadastro",
        error: {
          message: "Senhas não coincidem",
        },
      });
    }
    const newId = users[users.length - 1].id + 1;
    
    const newUser = {
      id: newId,
      nome,
      sobrenome,
      apelido,
      senha,
      email,
      admin: false,
      criadoEm: new Date(),
      modificadoEm: new Date(),
    };

    users.push(newUser);
    fs.writeFileSync(
      
      path.join(__dirname, "..", "data", "users.json"),
      
      JSON.stringify(users)
    );
    res.redirect("/");
  },
  
  login: (req, res) => {
    return res.render("login", {
      title: "Login",
      user: req.cookies.user,
      admin: req.cookies.admin,
    });
  },
  
  auth: (req, res) => {
    res.clearCookie("user");
    res.clearCookie("admin");

    const usersJson = fs.readFileSync(
      path.join(__dirname, "..", "data", "users.json"),
      "utf-8"
    );

    const users = JSON.parse(usersJson);

    const { email, senha } = req.body;
    const userAuth = users.find((user) => {
      if (user.email === email) {
        if (user.senha === senha) {
          return true;
        }
      }
    });

    if (!userAuth) {
      return res.render("login", {
        title: "Login",
        error: {
          message: "Email ou senha inválido",
        },
      });
    }
    
    const user = JSON.parse(
      JSON.stringify(userAuth, ["id", "nome", "sobrenome", "apelido", "admin"])
    );
    req.session.email = userAuth.email;
    res.cookie("user", user);
    res.cookie("admin", user.admin);

    res.redirect("/");
  },
  
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("user");
    res.clearCookie("admin");
    res.redirect("/");
  },
};

module.exports = authController;