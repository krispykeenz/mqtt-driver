const mqtt = require('mqtt');

// MQTT broker URL
const brokerUrl = 'mqtt://155.93.192.206:18083';

// Create an MQTT client
const client = mqtt.connect(brokerUrl);

// Handle connection event
client.on('connect', () => {
  console.log('Connected to MQTT broker');

  // Subscribe to a topic
  const topic = 'test/topic';
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Subscribed to ${topic}`);

      // Publish a message to the topic
      const message = 'Hello, MQTT!';
      client.publish(topic, message, (err) => {
        if (!err) {
          console.log(`Published message: ${message}`);
        }
      });
    }
  });
});

// Handle incoming messages
client.on('message', (topic, message) => {
  console.log(`Received message on ${topic}: ${message.toString()}`);
});

// Handle errors
client.on('error', (err) => {
  console.error('MQTT error:', err);
});
