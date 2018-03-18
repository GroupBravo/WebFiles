# urls guid

#http://www.pythoncentral.io/introduction-to-sqlite-in-python/

#database_table_read
class load_data():
    def __init__(self):
        import sqlite3
        self.db=sqlite3.connect("back_end_data")
        self.cursor=self.db.cursor()
    def get_data(self,table):
        data_to_run="SELECT * FROM "+table
        self.cursor.execute(data_to_run)
        user1 = self.cursor.fetchall()
        self.db.close()
        return(user1)
