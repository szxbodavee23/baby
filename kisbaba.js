const main = () => {
    // 
    let weight = prompt("Weight: ");
    let lessWeight = weight / 6;
    let etkNum = prompt("Etkezesek szama: ");
    let amountOfFoodNeedsToBeEaten = lessWeight / etkNum;
    let amountOfFood = prompt("Amount of food: ");
    
    if (amountOfFood > amountOfFoodNeedsToBeEaten) {
        alert("Tul sokat evett");
    }
    else {
        alert(`${amountOfFoodNeedsToBeEaten - amountOfFood} maradt ${etkNum-1} etkezesere, vagyis ${(amountOfFoodNeedsToBeEaten - amountOfFood) / (etkNum - 1)}-t kell ennie etkezesenkent`);
    }
}

main();