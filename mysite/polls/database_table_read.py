# urls guid

#http://www.pythoncentral.io/introduction-to-sqlite-in-python/


# This module is used for accessing the database.
#It will take the name of a given table that exists in the database and return all the data that is in that table

class load_data():
    #Upon initialisation it will create a connection to the database
    def __init__(self):
        import sqlite3
        self.db=sqlite3.connect("back_end_data")
        self.cursor=self.db.cursor()
    # This function will collect data from the database because the database connection and return the data 
    def get_data(self,table):
        data_to_run="SELECT * FROM "+table
        self.cursor.execute(data_to_run)
        user1 = self.cursor.fetchall()
        self.db.close()
        return(user1)
