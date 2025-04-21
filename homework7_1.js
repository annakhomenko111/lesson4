var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн"
  };
  
  function price(obj) {
    return Object.values(obj).reduce((sum, val) => sum + parseFloat(val), 0) + " грн";
  }
  
  function minPrice(obj) {
    return Math.min(...Object.values(obj).map(val => parseFloat(val))) + " грн";
  }
  
  function maxPrice(obj) {
    return Math.max(...Object.values(obj).map(val => parseFloat(val))) + " грн";
  }

  
  console.log("Загальна вартість: ", price(services));
  console.log("Мінімальна ціна: ", minPrice(services));
  console.log("Максимальна ціна: ", maxPrice(services));