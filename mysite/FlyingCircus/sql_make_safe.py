






#This function is used to secure the SQL database it works by taking a string and comparing the ASCII value of each letter in the string against preset values returns true if the ASCII value falls within the predefined ranges and false otherwise.

# Values that are currently allowed in are:
# a-z
# A-Z
# 1-9
# -
def input_string(data):

    for q in data:
        safe=False


        if ord(q) ==32:
            safe=True

        if ord(q) >47 and ord(q)<58:
            safe=True

        if ord(q) >64 and ord(q)<91:
            safe=True


        if ord(q) >96 and ord(q)<123:
            safe=True
        if ord(q)==95:
            safe=True
        if safe==False:
            return(False)
    return(True)
