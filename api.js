function loaddata() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((apidata) => displayData(apidata));
  }
  
  function displayData(apidata) {
    const display = document.getElementById("display");
    apidata.forEach((data) => {
      const div = document.createElement("div");
      const modalId = `modal_${data.cca3}`; // Unique modal ID based on the country code
  
      div.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl shadow-blue-200 w-full h-full md:h-96 mb-5 lg:mb-0">
          <figure class="border-b-2 border-slate-500 rounded-md mb-1">
            <img src="${data.flags.png}" class="w-full" alt="Flag" />
          </figure>
          <div class="card-body">
            <h2 class="text-center text-lg md:text-2xl font-bold uppercase text-blue-700">${data.name.common}</h2>
            <p class="text-center font-medium px-5">If you want to know more details about this country then click on the button below</p>

            <div class="card-actions justify-center">
              <!-- Open the modal using the unique modal ID -->
              <button class="btn w-full shadow-sm shadow-black duration-500 border-none bg-blue-400 hover:bg-blue-500 font-bold" onclick="document.getElementById('${modalId}').showModal()">Open modal</button>
            <dialog id="${modalId}" class="modal">
                <div class="modal-box w-11/12 max-w-5xl card lg:card-side bg-base-100 p-5">
                <form method="dialog" class="flex justify-end">
                    <!-- Close the modal -->
                    <button class="btn btn-circle btn-ghost absolute right-2 top-2 text-2xl"  onclick="document.getElementById('${modalId}').close()">✕</button>
                </form>
            
                <figure class="lg:w-[600px] md:w-auto w-full"><img class="h-full w-full rounded-xl" src="${data.flags.png}" alt="Album"/></figure>
            <div class="card-body">
                <h2 class="text-2xl md:text-5xl text-blue-500 text-center font-semibold capitalize md:py-5">${data.name.common}</h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">official name:-<span class="text-red-500">${data.name.official}</span> </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">continents:-<span class="text-red-500">${data.continents}</span> </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">region:-<span class="text-red-500">${data.region}</span> </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">independent Status:-<span class="text-red-500">${data.independent}</span> </h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">common name:- <span class="text-red-500">${data.name.common}</span></h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">capital City:- <span class="text-red-500">${data.capital[0]}</span></h2>
                <h2 class="text-sm lg:text-xl font-semibold capitalize">population:-<span class="text-red-500"> ${data.population}</span></h2>

                <div class="card-actions justify-end">
                <a target="_blank" class="w-full" href="${data.maps.googleMaps}"><button class="btn-active w-full py-2 rounded-lg text-xl font-semibold capitalize shadow-sm shadow-black duration-500 bg-blue-400 hover:bg-blue-500">view location</button></a>
                </div>
            </div>
            

                  <div class="modal-action">
                    
                  </div>
                </div>
              </dialog>
            </div>


          </div>
        </div>
      `;
  
      display.appendChild(div);
    });
  }
  
  loaddata();
  