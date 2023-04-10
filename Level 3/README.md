# Solution
Website = https://high-speed-chase-web.2021.ctfcompetition.com/ <br /> <br />
On opening the Website we found that we have to write a JavaScript Function called controlCar that takes an array of 17 integer items as an arguments, which are just the distances measure by the car's lidar <br />
We have to return 1 of 3 values, that are, -1 (for going left), 0 (for remaining at the center) and 1 (for going right) after processing that in which direction the car has to move to avoid crashing. <br />
The JavaScript Funtion for the solution is:
```javascript
new_array = [];
for(var i = 1; i < scanArray.length-1; i++){
  new_array[i-1] = (scanArray[i-1]+scanArray[i]+scanArray[i+1])/3;
}
scanArray = new_array;
for(var i = 0 ; i < scanArray.lenght; i++){
  if( scanArray[i] > 30 ){
    scanArray[i] = 0;
  }
}
const max = Math.max.apply(Math, scanArray);
const index =  scanArray.indexOf(max);
if ( index < 7 ){
  return -1;
}else if ( index > 7 ){
  return 1;
}else{
  return 0;
}
```
The logic is simple. <br />
We have made a new array to caculate the average values of 3 neighbour distances, which gives us a single maximum value for operating. <br />
And also we have made a check function to set the distance value of lane dividers to zero, because there is no obstacle there and can disturb the above logic. <br /><br />

By running the above program, we get Flag = CTF{cbe138a2cd7bd97ab726ebd67e3b7126707f3e7f}

