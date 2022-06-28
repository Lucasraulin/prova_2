import { Router } from "express";
import { FolhaPagamentoController } from "../controllers/PaymentController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "API de Cadastro de Folhas de Pagamento" });
});

const controller = new FolhaPagamentoController();

//Folha de Pagamento - Cadastrar - Calcular
routes.post("/folha/cadastrar", (request, response) => controller.cadastrar(request, response));
routes.get("/folha/calcular", (request, response) => controller.calcular(request, response));

export { routes };
