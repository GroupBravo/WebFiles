



#This module provides an interface layer between  the pathfinding algorithm and user interface.
#It handles
#the loading of map data from the database
#the running of the pathfinding algorithm
#returning the data into an appropriate format the usable interface layer.


#The relevant modules that need to be imported into this module using the form specified by the  Django framework

#This module will be given a tablename and will return all the data in that table
from polls import database_table_read

#This module will perform a pathfinding algorithm between two points using the data given to it
from polls import path_planing



#The input of start and end it should be in the following format
# "Outside-0-100,82"
# "Parrot_Shop-0-1088,1095"

def load_data(start,end):

    #This variable is used to control multiple print statements throughout the code that is useful for debugging potential issues

    deguging=False




    #A set of print statements use for debugging
    #Some of the prints statements may seem unneeded in fact they are  used to provide an easier readable terminal interface
    if deguging==True:
        print("")
        print("start",start)
        print("end",end)
        print("")

    #An array to hold the names of the tables that the programme only toload into memory
    tables_to_load=[]

    #The start and end point given will contain information about what map their in the following code extracts this information from the start and in point variables.
    #eg # "Outside-0-100,82" go to Outside
    table1=start.split("-")
    table1=table1[0]

    table2=end.split("-")
    table2=table2[0]

    #A set of print statements use for debugging
    if deguging==True:
        print("")
        print("Tables to load")


    #It compares the building at the start and end point are in and decides if they are in the same building
    #If this is the case the tables name that both points and is added to the array tables_to_load as well as the outside table unless the table that both points in is the outside table
    if table1==table2:

        #A set of print statements use for debugging
        if deguging==True:
            print("Loading Table ",table1)
            print("The start and end point are in the same building")


        tables_to_load.append(table1)
        if table1!="Outside":
            tables_to_load.append("Outside")
    #If both points are not in the same table the two table names are added to the array tables_to_load as well as the outside table unless one of the points is in the outside table
    else:

        tables_to_load.append(table1)
        tables_to_load.append(table2)

        #A set of print statements use for debugging
        if deguging==True:
            print("loading",table1)
            print("loading ",table2)

        if (table1 !="Outside")  and (table2!="Outside"):

            tables_to_load.append("Outside")

            #A set of print statements use for debugging
            if deguging==True:
                print("loading out_side table")

        #A set of print statements use for debugging
        if deguging==True:
            print("start and end are NOT in the same building")

    #A set of print statements use for debugging
    if deguging==True:
        print("")



    #A set of print statements use for debugging
    if deguging==True:
        print("tables to laod",tables_to_load)

    #The data from the tables that the previous court has decided is needed is then retrieved from the database and put into an array
    data_base_data=[]

    for q in tables_to_load:

        main=database_table_read.load_data()

        #A set of print statements use for debugging
        if deguging==True:
            print("laoding to vaibe table",q)



        data_base_data.extend(main.get_data(q))


    #An instance of the path planning algorithm is then created with the relevant data being passed to it
    t=path_planing.a_star(start,end,data_base_data,tables_to_load)




    #The instance of the pathfinding algorithm is then run
    final_path=(t.main())

    #A set of print statements use for debugging
    if deguging==True:
        print("t",final_path)

    #The output of the pathfinding algorithm is then checked to make sure that it was possible for the pathfinding algorithm to find a path between the two points

    if final_path=="cant make a path ":
        #If it was not possible for the parsing algorithm to join up two points are specialised input is returned to the user interface layer to inform it of this
        return("cant make a path" )

    #The following two arrays are used to all data that would pass to the user interface layer
    finalRoutes=[]
    maps_used=[]



    #A set of print statements use for debugging
    if deguging==True:
        for y in final_path[0]:
            print("Path given by path planning part")
            print(y)

    #The data given from the path planning algorithm is then processed by the following code to make it into a format that is compatible with the interface layer
    marker=-1

    for q in final_path[0]:

        marker=marker+1
        table,floor,coord=q.split("-")

        table+="_"+floor
        if not table in  maps_used:
            maps_used.append(table)
            finalRoutes.append([])



        coord=final_path[1][marker].split(",")

        coord= int(coord[0]),int(coord[1])
        finalRoutes[len(maps_used)-1].append(coord)

    finalRoutes.insert(0,maps_used)

    geve_to_perople=[finalRoutes[0]]

    for q in finalRoutes[1:]:
        #A set of print statements use for debugging
        if deguging==True:
            print("Data to be passed on")
            print("normal")
            print(q)


        temp=list(reversed(q))

        #A set of print statements use for debugging
        if deguging==True:
            print("fliped")
            print(temp)
        geve_to_perople.append(temp)



    #A set of print statements use for debugging
    if deguging==True:
        for q in geve_to_perople:
            print(q)

    return geve_to_perople
