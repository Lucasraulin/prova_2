import express from "express";
import { routes } from "./config/routes";
import { Connection, Channel, connect } from "amqplib";
import { RabbitmqServer } from "./rabbitmq-server";

const app = express();

app.use(express.json());
app.use(routes);

async function start(){
    const conn: Connection = await connect("amqp://guest:guest@rabbitmq:5673"); 
    const channel: Channel = await conn.createChannel();
    const server = RabbitmqServer.getInstance(conn, channel);
    server.createQueue("teste");
}

start();

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333...");
});
