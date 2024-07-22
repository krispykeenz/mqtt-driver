const mqtt = require('mqtt');

const brokerUrl = 'mqtt://155.93.192.206:1883';

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  const topic = 'test/topic';
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Subscribed to ${topic}`);

      const message = 'Hi my name is Keenan';
      client.publish(topic, message, (err) => {
        if (!err) {
          console.log(`Published message: ${message}`);
        }
      });
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`Received message on ${topic}: ${message.toString()}`);
});

client.on('error', (err) => {
  console.error('MQTT error:', err);
});
