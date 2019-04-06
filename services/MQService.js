import amqp from 'amqplib/callback_api';
const CONN_URL = 'amqp://gsgmnvnl:NITe9ThLkXQvKVLl7L6gEtMllb6obQmw@dinosaur.rmq.cloudamqp.com/gsgmnvnl';

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, channel) {
        ch = channel;
    });
});

export const publishToQueue = async (queueName, data) => {
    ch.sendToQueue(queueName, new Buffer(data), {persistent: true});
}

process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
});