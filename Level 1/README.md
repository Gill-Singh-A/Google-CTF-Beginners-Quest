# Solution
Website = https://cctv-web.2021.ctfcompetition.com/ <br />
On Inspecting the Website, we found the algorithm for checking the password that is written in javascript <br/><br/>

```javascript
const checkPassword = () => {
  const v = document.getElementById("password").value;
  const p = Array.from(v).map(a => 0xCafe + a.charCodeAt(0));

  if(p[0] === 52037 &&
     p[6] === 52081 &&
     p[5] === 52063 &&
     p[1] === 52077 &&
     p[9] === 52077 &&
     p[10] === 52080 &&
     p[4] === 52046 &&
     p[3] === 52066 &&
     p[8] === 52085 &&
     p[7] === 52081 &&
     p[2] === 52077 &&
     p[11] === 52066) {
    window.location.replace(v + ".html");
  } else {
    alert("Wrong password!");
  }
}
```

This takes input from the form in v and creates an array p in which the ascii value of each letter gets added by hex number 0xcafe which is 51966 in decimal and then compares individual items of the array with some values<br /><br />

So let's make a program in python that stores those values in a list, then subtracts them with 51966, make a list of characters with those values and finally join the list to get the password.
Here is the python program that does the work:

```python
inc = 0xcafe
lst = [52037, 52077, 52077, 52066, 52046, 52063, 52081, 52081, 52085, 52077, 52080, 52066]
lst = [i-inc for i in lst]
chrs = [chr(i) for i in lst]
print(''.join(chrs))
```

Therefore we get the password = GoodPassword<br />
On login on the site, We get the Flag = CTF{IJustHopeThisIsNotOnShodan}
