#get data
#this is the main function that run the main loop 
def load_data(start,end):

    deguging=False




    tables_to_load=[]
    if deguging==True:
        print("")
        print("start",start)
        print("end",end)
        print("")
    #table to load

    table1=start.split("-")
    table1=table1[0]


    table2=end.split("-")
    table2=table2[0]
    if deguging==True:
        print("")
        print("tables to load")

    if table1==table2:
        if deguging==True:
            print("laoding",table1)
            print("start and end are in the same building")

        tables_to_load.append(table1)
        if table1!="Outside":
            tables_to_load.append("Outside")
    else:
        tables_to_load.append(table1)

        tables_to_load.append(table2)
        if deguging==True:
            print("loading",table1)
            print("loading ",table2)

        if (table1 !="Outside")  and (table2!="Outside"):
            tables_to_load.append("Outside")
            if deguging==True:
                print("loading out_side table")
        if deguging==True:
            print("start and end are NOT in the same building")
    if deguging==True:
        print("")



    from polls import database_table_read
    from polls import path_planing
    if deguging==True:
        print("tables to laod",tables_to_load)
    data_base_data=[]
    for q in tables_to_load:
        main=database_table_read.load_data()
        if deguging==True:
            print("laoding to vaibe table",q)
            print("anythibng")

        #VAUEL_PTO_GET="Outside"
        data_base_data.extend(main.get_data(q))



    t=path_planing.a_star(start,end,data_base_data,tables_to_load)


    maps=[]
    drawing_points=[[]]
    final_path=(t.main())
    if deguging==True:
        print("t",final_path)
    if final_path=="cant make a path ":
        return("cant make a path" )

    finalRoutes=[]
    maps_used=[]
    main=database_table_read.load_data()
    off_set=main.get_data("building_positions")
    off_set_vaule=[]
    marker=-1

    for y in final_path[0]:
        print(y)
    for q in final_path[0]:
        marker=marker+1
        table,floor,coord=q.split("-")


        for w in off_set:
            if table==w[0]:
                off_set_vaule=w[1].split(",")
                off_set_vaule=float(off_set_vaule[0]),float(off_set_vaule[1])

                break
        table+="_"+floor
        if not table in  maps_used:
            maps_used.append(table)
            finalRoutes.append([])


        if deguging==True:
            print("off_set",off_set_vaule)
            print("max vauel",len(final_path[1]))
        coord=final_path[1][marker].split(",")

        coord= int(coord[0]),int(coord[1])
        finalRoutes[len(maps_used)-1].append(coord)
    #print(maps_used)
    finalRoutes.insert(0,maps_used)

    geve_to_perople=[finalRoutes[0]]
    for q in finalRoutes[1:]:
        if deguging==True:
            print("normal")
            print(q)
            print("fliped")
        temp=list(reversed(q))
        if deguging==True:
            print(temp)
        geve_to_perople.append(temp)




    for q in geve_to_perople:
        print(q)
    return geve_to_perople

    print("path planing ")



    print("DONE")
