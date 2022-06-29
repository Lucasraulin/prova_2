"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const PaymentController_1 = require("../controllers/PaymentController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get("/", (request, response) => {
    response.json({ message: "Cadastro de Folhas de Pagamento" });
});
const controller = new PaymentController_1.FolhaPagamentoController();
routes.post("/folha/cadastrar", (request, response) => controller.cadastrar(request, response));
routes.get("/folha/calcular", (request, response) => controller.calcular(request, response));
routes.get("/folha/media", (request, response) => controller.calcular(request, response));
