function calculateBMI(heightFeet, heightInches, weightPounds) {
    if (typeof heightFeet !== 'number' || typeof heightInches !== 'number' || typeof weightPounds !== 'number' ||
        heightFeet === 0 || heightInches === 0 || weightPounds === 0) {
        throw new TypeError('Height and weight must be non-zero numeric values');
    }

    // Convert height to inches
    var heightInchesTotal = heightFeet * 12 + heightInches;

    // Convert height to meters
    var heightMeters = heightInchesTotal * 0.025;

    // Convert weight to kilograms
    var weightKg = weightPounds * 0.45;

    // Calculate BMI
    var bmi = weightKg / (heightMeters * heightMeters);

    // Determine BMI category
    var bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi < 25) {
        bmiCategory = "Normal weight";
    } else if (bmi < 30) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }

    return { bmiValue: parseFloat(bmi.toFixed(2)), bmiCategory: bmiCategory };
}

function bmiCategory(bmiValue) {
    if (bmiValue < 18.5) {
        return "Underweight";
    } else if (bmiValue < 25) {
        return "Normal weight";
    } else if (bmiValue < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

module.exports = { calculateBMI, bmiCategory };
