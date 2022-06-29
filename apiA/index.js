"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./config/routes");
const amqplib_1 = require("amqplib");
const rabbitmq_server_1 = require("./rabbitmq-server");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.routes);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, amqplib_1.connect)("amqp://guest:guest@rabbitmq:5673");
        const channel = yield conn.createChannel();
        const server = rabbitmq_server_1.RabbitmqServer.getInstance(conn, channel);
        server.createQueue("teste");
    });
}
start();
app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333...");
});
