







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
