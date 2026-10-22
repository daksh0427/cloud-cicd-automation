document.getElementById('health-btn').addEventListener('click', async () => {
  const resultDiv = document.getElementById('health-result');
  resultDiv.textContent = 'Checking...';
  
  try {
    const response = await fetch('/health');
    const data = await response.json();
    resultDiv.textContent = JSON.stringify(data);
  } catch (error) {
    resultDiv.textContent = 'Error checking health';
  }
});
