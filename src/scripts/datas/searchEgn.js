import { updateSelect } from "./utils.js";


export function handleMakeChange() {
  const carMake = document.querySelector('#car-make');
  const carModel = document.querySelector('#car-model');
  const carYear = document.querySelector('#car-year');
  const carPrice = document.querySelector('#car-price');


  const make = carMake.value;

  if (make === 'Tesla') {
    updateSelect(carModel, ['model-x', 'Roadster'])
    updateSelect(carYear, [])
    updateSelect(carPrice, [])
      ;
    
        
  } else if (make === 'Acura') {
    updateSelect(carModel, ['ZDX A-Spec', 'NSX']);
    updateSelect(carYear, []);
    updateSelect(carPrice, []);
    
      
  } else if (make === 'Honda') {
    updateSelect(carModel, ['Pilot EX-L', 'Pilot TrailSport']);
    updateSelect(carYear, []);
    updateSelect(carPrice, []);

  } else if (make === 'Toyota') {
      updateSelect(carModel, ['GR Corolla', 'GR Supra']);
      updateSelect(carYear, []);
      updateSelect(carPrice, []);
        
  } else if (make === 'Volkswagen') {
    updateSelect(carModel, ['ID. Buzz', 'ID. Buzz Pro S']);
    updateSelect(carYear, []);
    updateSelect(carPrice, []);
      
  } else if (make === 'BMW') {
    updateSelect(carModel, ['430 i xDrive', '430 i']);
    updateSelect(carYear, []);
    updateSelect(carPrice, []);

      
  } else if (make === 'Ford') {
    updateSelect(carModel, ['Bronco', 'Bronco Raptor']);
    updateSelect(carYear, []);
    updateSelect(carPrice, []);
      
  };
  
  
}

export function handleModelChange() {
  const carMake = document.querySelector('#car-make');
  const carModel = document.querySelector('#car-model');
  const carYear = document.querySelector('#car-year');
  const carPrice = document.querySelector('#car-price');

  const make = carMake.value;
  const model = carModel.value;

  if (make === 'Tesla') {
    if (model === 'model-x') {
      updateSelect(carYear, [2020, 2022]);
      updateSelect(carPrice, ['$40,675', '$61,595']);
    } else if (model === 'Roadster') {
      updateSelect(carYear, [2008, 2011]);
      updateSelect(carPrice, ['$249,999', '$100,000']);
    }

  } else if (make === 'Acura') {
    if (model === "ZDX A-Spec") {
      updateSelect(carYear, [2024]);
      updateSelect(carPrice, ['$46,998']);
    } else if (model === 'NSX') {
      updateSelect(carYear, [2017]);
      updateSelect(carPrice, ['$119,990']);
    }

  } else if (make === 'Honda') {
    if (model === 'Pilot EX-L') {
      updateSelect(carYear, [2022, 2025]);
      updateSelect(carPrice, ['$20,990', '$44,500']);
    } else if (model === 'Pilot TrailSport') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$48,999']);
    }

  } else if (make === 'Toyota') {
    if (model === 'GR Corolla') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$45,606', '$47,599']);
    } else if (model === 'GR Supra') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$61,243', '$63,243']);
    }

  } else if (make === 'Volkswagen') {
    if (model === 'ID. Buzz') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$67,763']);
    } else if (model === 'ID. Buzz Pro S') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$62,195']);
    }

  } else if (make === 'BMW') {
    if (model === '430 i xDrive') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$58,500']);
      console.log(year)
    } else if (model === '430 i') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$59,890']);
    }
    
  } else if (make === 'Ford') {
    if (model === 'Bronco') {
      updateSelect(carYear, [2024, 2025]);
      updateSelect(carPrice, ['$65,085', '$98,690']);
    } else if (model === 'Bronco Raptor') {
      updateSelect(carYear, [2024]);
      updateSelect(carPrice, ['$99,715']);
    }
  }

  return model;
}
