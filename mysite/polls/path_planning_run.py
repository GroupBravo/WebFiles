#get data


def load_data(start,end):




    tables_to_load=[]
    print("")
    print("start",start)
    print("end",end)
    print("")
    #table to load

    table1=start.split("-")
    table1=table1[0]


    table2=end.split("-")
    table2=table2[0]
    print("")
    print("tables to load")

    if table1==table2:

        print("laoding",table1)
        print("start and end are in the same building")
        tables_to_load.append(table1)
        tables_to_load.append("Outside")
    else:
        tables_to_load.append(table1)

        tables_to_load.append(table2)
        print("loading",table1)
        print("loading ",table2)

        if (table1 or table2)!="Outside":
            tables_to_load.append("Outside")
            print("loading out_side table")

        print("start and end are NOT in the same building")
    print("")



    from polls import database_table_read
    from polls import path_planing

    print("tables to laod",tables_to_load)
    data_base_data=[]
    for q in tables_to_load:
        main=database_table_read.load_data()
        print("laoding to vaibe table",q)
        print("anythibng")

        #VAUEL_PTO_GET="Outside"
        data_base_data.extend(main.get_data(q))



    t=path_planing.a_star(start,end,data_base_data,tables_to_load)
    print("data in to plath planing")
    for q in data_base_data:
        print(q)

    maps=[]
    drawing_points=[[]]
    final_path=(t.main())


    finalRoutes=[]
    maps_used=[]
    main=database_table_read.load_data()
    off_set=main.get_data("building_positions")
    off_set_vaule=[]
    for q in final_path:
        table,floor,coord=q.split("-")


        for w in off_set:
            if table==w[0]:
                off_set_vaule=w[1].split(",")
                off_set_vaule=int(off_set_vaule[0]),int(off_set_vaule[1])

                break
        table+="_"+floor
        if not table in  maps_used:
            maps_used.append(table)
            finalRoutes.append([])

        coord=coord.split(",")
        print("off_set",off_set_vaule)
        coord=int(coord[0])-off_set_vaule[0],int(coord[1])-off_set_vaule[1]
        finalRoutes[len(maps_used)-1].append(coord)
    #print(maps_used)
    finalRoutes.insert(0,maps_used)

    geve_to_perople=[finalRoutes[0]]
    for q in finalRoutes[1:]:
        print("normal")
        print(q)
        print("fliped")
        temp=list(reversed(q))
        print(temp)
        geve_to_perople.append(temp)





    return geve_to_perople

    print("path planing ")



    print("DONE")
