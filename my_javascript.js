//create days options dynamically 
function createDaysOptions(selectRef){
    
    for (let i = 1; i<= 30; i++) {
        
        let option = document.createElement('option');
        
        option.innerText = i;
        
        option.value = i;
        
        selectRef.innerHTML += option.outerHTML;

    }
      
}
//create months option dynamically 
function createMonthsOptions(selectRef){
     for (let i = 1; i<= 12; i++) {
        
        let option = document.createElement('option');
        
        option.innerText = i;
        
        option.value = i;
        
        selectRef.innerHTML += option.outerHTML;

    }
    
}
//create years option dynamically 
function createYearsOptions(selectRef){
     for (let i = 1940; i<= 2020; i++) {
        
        let option = document.createElement('option');
        
        option.innerText = i;
        
        option.value = i;
        
        selectRef.innerHTML += option.outerHTML;

    }
}

//create select references
var daysDropDownRef = document.getElementById('days-dropdown');
var monthsDropDownRef = document.getElementById('months-dropdown');
var yearsDropDownRef = document.getElementById('years-dropdown');

//call functions in order to append options in particular dropdown list
createDaysOptions(daysDropDownRef);
createMonthsOptions(monthsDropDownRef);
createYearsOptions(yearsDropDownRef);
