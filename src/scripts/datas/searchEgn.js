import { updateSelect } from "./utils.js";

export function handleMakeChange() {
  const carMake = document.querySelector('#car-make');
  const carModel = document.querySelector('#car-model');
  const carYear = document.querySelector('#car-year');
  const carPrice = document.querySelector('#car-price');

  const make = carMake.value.toLowerCase();

  if (make === 'tesla') {
    updateSelect(carModel, ['model-x', 'roadster']);
  } else if (make === 'acura') {
    updateSelect(carModel, ['ZDX A-Spec', 'NSX']);
  } else if (make === 'honda') {
    updateSelect(carModel, ['Pilot EX-L', 'Pilot TrailSport']);
  } else if (make === 'toyota') {
    updateSelect(carModel, ['GR Corolla', 'GR Supra']);
  } else if (make === 'volkswagen') {
    updateSelect(carModel, ['ID. Buzz', 'ID. Buzz Pro S']);
  } else if (make === 'bmw') {
    updateSelect(carModel, ['430 i xDrive', '430 i']);
  } else if (make === 'ford') {
    updateSelect(carModel, ['Bronco', 'Bronco Raptor']);
  } else {
    updateSelect(carModel, []);
  }

  updateSelect(carYear, []);
  updateSelect(carPrice, []);
}

export function handleModelChange() {
  const carMake = document.querySelector('#car-make');
  const carModel = document.querySelector('#car-model');
  const carYear = document.querySelector('#car-year');
  const carPrice = document.querySelector('#car-price');

  const make = carMake.value.toLowerCase();
  const model = carModel.value.toLowerCase();

  if (make === 'tesla') {
    if (model === 'model-x') {
      updateSelect(carYear, [2020, 2022]);
      updateSelect(carPrice, ["$40,675", "$61,595"]);
    } else if (model === 'roadster') {
      updateSelect(carYear, [2008, 2011]);
      updateSelect(carPrice, ['$249,999', '$100,000']);
    }
  } else if (make === 'acura') {
    if (model === "zdx a-spec") {
      updateSelect(carYear, [2024]);
      updateSelect(carPrice, ['$46,998']);
    } else if (model === 'nsx') {
      updateSelect(carYear, [2017]);
      updateSelect(carPrice, ['$119,990']);
    }
  } else if (make === 'honda') {
    if (model === 'pilot ex-l') {
      updateSelect(carYear, [2022, 2025]);
      updateSelect(carPrice, ['$20,990', '$44,500']);
    } else if (model === 'pilot trailsport') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$48,999']);
    }
  } else if (make === 'toyota') {
    if (model === 'gr corolla') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$45,606', '$47,599']);
    } else if (model === 'gr supra') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$61,243', '$63,243']);
    }
  } else if (make === 'volkswagen') {
    if (model === 'id. buzz') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$67,763']);
    } else if (model === 'id. buzz pro s') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$62,195']);
    }
  } else if (make === 'bmw') {
    if (model === '430 i xdrive') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$58,500']);
    } else if (model === '430 i') {
      updateSelect(carYear, [2025]);
      updateSelect(carPrice, ['$59,890']);
    }
  } else if (make === 'ford') {
    if (model === 'bronco') {
      updateSelect(carYear, [2024, 2025]);
      updateSelect(carPrice, ['$65,085', '$98,690']);
    } else if (model === 'bronco raptor') {
      updateSelect(carYear, [2024]);
      updateSelect(carPrice, ['$99,715']);
    }
  } else {
    updateSelect(carYear, []);
    updateSelect(carPrice, []);
  }

  return model;
}
