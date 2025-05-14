export function updateSelect(selectedElement, optionArray) {
    // this adds option tag inside each domVariable added
  selectedElement.innerHTML = `<option value="">Select</option>`
  // this create this create option element for each array values
    optionArray.forEach(optionValue => {
      // creating element
      const option = document.createElement('option');
      // injecting value and text inside the created element
      option.value = optionValue;
      option.textContent = option.value;
      // injecting the options inside each element
      selectedElement.appendChild(option);

    })
  }

