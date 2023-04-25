import { AMQPClient } from "@cloudamqp/amqp-client";

async function run() {
  try {
    const amqp = new AMQPClient("amqp://guest:guest@localhost");
    const conn = await amqp.connect();
    const ch = await conn.channel();
    await ch.exchangeDeclare("test3", "fanout", { durable: true });
    await ch.basicPublish("test3", "", "Hello World");
    await ch.close();
    await conn.close();
    //add listner to queue
    //await q.publish("Hello Worldhhhh", { deliveryMode: 2 });
  } catch (e) {
    console.error("ERROR", e);
    e.connection.close();
    setTimeout(run, 1000); // will try to reconnect in 1s
  }
}

run();
