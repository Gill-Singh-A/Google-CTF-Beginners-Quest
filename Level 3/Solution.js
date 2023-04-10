function controlCar(scanArray){
  new_array = [];
  for(var i = 1; i < scanArray.length-1; i++){
    new_array[i-1] = (scanArray[i-1]+scanArray[i]+scanArray[i+1])/3;  // calculating the average distance of 3 neighbouring items to get a single maximum value
  }
  scanArray = new_array;                                              // initializing scanArray as new_array;
  for(var i = 0 ; i < scanArray.lenght; i++){
    if( scanArray[i] > 30 ){
      scanArray[i] = 0;                                               // Performing a check for lane dividers
    }
  }
  const max = Math.max.apply(Math, scanArray);                        // calculating maximum value in the array for directing
  const index =  scanArray.indexOf(max);
  if ( index < 7 ){
    return -1;                                                        // if maximum distance is at left return -1 (move left)
  }else if ( index > 7 ){
    return 1;                                                         // if maximum distance is at right return 1 (move right)
  }else{
    return 0;                                                         // if maximum distance is at the center return 0 (no turn)
  }
}
