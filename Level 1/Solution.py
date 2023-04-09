#!/usr/bin/env python3

inc = 0xcafe                                                                                    # initializing the increment value to a variable in hex
lst = [52037, 52077, 52077, 52066, 52046, 52063, 52081, 52081, 52085, 52077, 52080, 52066]      # initializing a list with the values given in the JavaScript Program
lst = [i-inc for i in lst]                                                                      # subtracting the increment value from the values in the list
chrs = [chr(i) for i in lst]                                                                    # making a list of ascii character from the values in the list 
print(''.join(chrs))                                                                            # printing the list of character as a string on the screen
