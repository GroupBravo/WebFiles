# urls guid
#find all vaule in the existance TABLE THAT Connections a give vaule 


import sqlite3

class main():
    def __init__(self):
        self.db=sqlite3.connect("back_end_data")
        self.cursor=self.db.cursor()

    def get_room(self,data):


        temp="SELECT Input FROM existance WHERE Input LIKE"
        temp=temp+" '%"+str(data)+"%' "
        temp=temp+"ORDER BY Input"


        #cursor addvance when get data
        self.cursor.execute(temp)

        data_out = self.cursor.fetchall()
        #self.db.close()
        return(data_out)
