//Para utilizar express
const  express = require("express");
const router = express.Router();

//Para utilizar controllers
const indexHandler = require("../controllers/index.controller.js");
const cascosHandler = require("../controllers/cascos.controller.js");
const enviarPedidoHandler = require("../controllers/enviar-pedido.controller.js");
const litofaniaHandler = require("../controllers/litofania.controller.js");
const modeladoHandler = require("../controllers/modelado.controller.js");
const pedidoHandler = require("../controllers/pedido.controller.js");

//get
router.get("/", pedidoHandler.pedidoData);
router.get("/cascos", cascosHandler.getCascos);
router.get("/enviar-pedido", enviarPedidoHandler.getEnviarPedido);
router.get("/litofania", litofaniaHandler.getLitofania);
router.get("/modelado", modeladoHandler.getModelado); 
router.get("/pedido", pedidoHandler.getPedido); 

//post 
router.post("/pedido", pedidoHandler.postPedido);

module.exports = router;