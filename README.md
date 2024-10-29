# BMI-Calculator
 This project is a simple BMI (Body Mass Index) calculator built with HTML, CSS, and JavaScript. Users can input their height and weight to calculate their BMI and see their weight category (Underweight, Normal, Overweight).
# Features
 BMI Calculation: Takes height (in cm) and weight (in kg) inputs to calculate BMI with a simple formula.
* Validation: Checks for valid numeric inputs to prevent incorrect calculations and provides helpful error messages for invalid entries.
* BMI Categories: Displays BMI results and categorizes the user as Underweight, Normal, or Overweight based on the calculated BMI.
# Code Overview
* Form Handling: Listens for form submissions and prevents the default submission behavior.
* BMI Calculation: Utilizes the formula BMI = weight / (height * height / 10000), then rounds to two decimal places.
* Result Display: Updates the DOM to show BMI and category based on the result.
