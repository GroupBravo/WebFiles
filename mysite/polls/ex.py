




import path_palning_run
import database_table_read
table=""
temp=database_table_read.load_data()
data=temp.get_data("existance")

import random
stop=random.randint(0,len(data)-1)
stop2=random.randint(0,len(data)-1)


print("data",data)
a=data[stop][1]
b=data[stop2][1]

#a="Outside-0-100,82"
#b="Parrot_Shop-0-1088,1095"
t=(path_palning_run.laod_data.main(a,b))
#still in reves
print("#############################################")
print("here is you output Alasdair")
for q in t:
    print(q)
print("#####################################")
