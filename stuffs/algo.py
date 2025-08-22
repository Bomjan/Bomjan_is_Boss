def to_b(num):
    if num == 0:
        return "0"
    elif num < 0:
        return "Not now bro!"
    else:

        backnum = 0
        if type(num) == type(0.0):
            num, backnum = str(num).split(".")
        
        num = int(num)
        length = len(backnum)
        backnum = int(backnum) / (10 ** length)

        print(backnum)

        binary = []
        backbinary = []
        
        while num>0:
            binary.append(str(num%2))
            num //= 2
        
        binary.reverse()
        counter = 10
        while counter > 0 and backnum != 0:
            backnum *= 2
            if backnum >= 1:
                backbinary.append("1")
                backnum -= 1
            else:
                backbinary.append("0")
            counter -= 1
            
        backbinary.reverse()

        front = "".join(binary)
        back = "".join(backbinary)
        return front + "." + back 
number = input("Enter Number: ")
number = float(number)
print(to_b(number))

b = 10001011100100110
if b == int(to_b(number)[:-1]):
    print("Yes!!")