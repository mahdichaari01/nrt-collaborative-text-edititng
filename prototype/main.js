import { AMQPClient } from "@cloudamqp/amqp-client";

async function run() {
  try {
    const amqp = new AMQPClient("amqp://guest:guest@localhost");
    const conn = await amqp.connect();
    const ch = await conn.channel();
    await ch.exchangeDeclare("test3", "fanout", { durable: true });
    const q = await ch.queue("test3");
    await ch.queueBind(q.name, "test3", "");
    const consumer = await q.subscribe({ noAck: true }, (msg) => {
      console.log("Message", msg.bodyToString());
    });

    //add listner to queue
    //await q.publish("Hello Worldhhhh", { deliveryMode: 2 });
    await consumer.wait(); // will block until consumer is canceled or throw an error if server closed channel/connection
    conn.close();
  } catch (e) {
    console.error("ERROR", e);
    e.connection.close();
    setTimeout(run, 1000); // will try to reconnect in 1s
  }
}

run();
