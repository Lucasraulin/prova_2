import { Router } from "express";
import { FolhaPagamentoController } from "../controllers/PaymentController";

const routes = Router();

routes.get("/", (request, response) => {
  response.json({ message: "Cadastro de Folhas de Pagamento" });
});

const controller = new FolhaPagamentoController();

routes.post("/folha/cadastrar", (request, response) =>
  controller.cadastrar(request, response)
);
routes.get("/folha/calcular", (request, response) =>
  controller.calcular(request, response)
);
routes.get("/folha/media", (request, response) =>
  controller.calcular(request, response)
);

export { routes };
