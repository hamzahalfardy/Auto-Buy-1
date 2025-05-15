export function updateSelect(selectElement, options) {
  // Clear previous options
  selectElement.innerHTML = '<option value="">Select</option>';

  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option; // Keep value as-is for accurate matching
    optionElement.textContent = formatLabel(option); // Nice label for user
    selectElement.appendChild(optionElement);
  });
}

function formatLabel(text) {
  if (typeof text === 'number') return text; // Don't format numbers (like years)
  
  // Capitalize each word, including hyphenated ones
  return text
    .split(' ')
    .map(part =>
      part
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    )
    .join(' ');
}
