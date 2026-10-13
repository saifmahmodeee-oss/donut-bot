const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'play.donut-smp.net',
  port: 19132,
  username: '.FlouryApe5686' + Math.floor(Math.random() * 10000),
  offline: true
});

client.on('join', () => {
  console.log('Successfully connected to DonutSMP server!');
  
  // Automatically execute sell command every 30 seconds
  setInterval(() => {
    client.queue('text', {
      type: 'chat',
      needs_translation: false,
      source_name: client.username,
      xuid: '',
      platform_chat_id: '',
      message: '/ah sell'
    });
    console.log('Auto-sell command sent!');
  }, 30000);
});

client.on('text', (packet) => {
  console.log(`[Chat] ${packet.source_name}: ${packet.message}`);
});

client.on('error', (err) => {
  console.log('An error occurred:', err);
});

client.on('close', () => {
  console.log('Connection lost, restarting...');
  process.exit(1);
});
