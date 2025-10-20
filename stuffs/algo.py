def to_b(num):
    if num == 0:
        return "0"
    elif num < 0:
        return "Not now bro!"
    else:

        back_num = 0
        if type(num) == type(0.0):
            num, back_num = str(num).split(".")
        
        num = int(num)
        length = len(back_num)
        back_num = int(back_num) / (10 ** length)

        print(back_num)

        binary = []
        back_binary = []
        
        while num>0:
            binary.append(str(num%2))
            num //= 2
        
        binary.reverse()
        counter = 10
        while counter > 0 and back_num != 0:
            back_num *= 2
            if back_num >= 1:
                back_binary.append("1")
                back_num -= 1
            else:
                back_binary.append("0")
            counter -= 1
            
        back_binary.reverse()

        front = "".join(binary)
        back = "".join(back_binary)
        return front + "." + back 
number = input("Enter Number: ")
number = float(number)
print(to_b(number))

b = 10001011100100110
if b == int(to_b(number)[:-1]):
    print("Yes!!")