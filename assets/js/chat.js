export const handleMessageNotifi = data => {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
};
