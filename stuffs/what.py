import numpy as np
def b_to_val(binary):
    binary = list(binary)
    binary.reverse()
    binary = [int(x) for x in binary]

    matrix = [2**x for x in range(0, len(binary))]

    val = np.dot(np.array(binary), np.array(matrix).T)
    return val

bi = input("Enter Binary: ")

def b_to_oct(binary):
    
    if len(binary) % 3:
        # add 0 in the front
        binary = "0" + binary
    
    binary = list(binary)
    binary.reverse()
    
    binary = np.array([int(x) for x in binary])

    matrix = np.array([2**x for x in range(0, 3)])
    binary.resize(int(len(binary)/3), 3)
    matrix.resize(int(len(matrix)/3), 3)
    result = np.dot(binary, matrix.T)
    octal = [sum(x) for x in result]
    octal.reverse()
    
    return "".join([str(x) for x in octal])

print(b_to_oct(bi))
print(f"real value is {b_to_val(bi)}")
n = 71462
b = 10001011100100110