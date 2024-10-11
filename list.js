            function updateMinValue() {
                const minInput = document.getElementById('min-price-slider');
                const maxInput = document.getElementById('max-price-slider');
                const minNumberInput = document.getElementById('min-price');
        
                if (parseInt(minInput.value) > parseInt(maxInput.value)) {
                    minInput.value = maxInput.value; // Ensure min is not greater than max
                }
        
                // Update the number input value
                minNumberInput.value = minInput.value;
            }
        
            function updateMaxValue() {
                const minInput = document.getElementById('min-price-slider');
                const maxInput = document.getElementById('max-price-slider');
                const maxNumberInput = document.getElementById('max-price');
        
                if (parseInt(maxInput.value) < parseInt(minInput.value)) {
                    maxInput.value = minInput.value; // Ensure max is not less than min
                }
        
                // Update the number input value
                maxNumberInput.value = maxInput.value;
            }
        
            function updateSliderFromInput(type) {
                const minInput = document.getElementById('min-price-slider');
                const maxInput = document.getElementById('max-price-slider');
                const minNumberInput = document.getElementById('min-price');
                const maxNumberInput = document.getElementById('max-price');
        
                if (type === 'min') {
                    minInput.value = minNumberInput.value;
                    updateMinValue();
                } else if (type === 'max') {
                    maxInput.value = maxNumberInput.value;
                    updateMaxValue();
                }
            }
