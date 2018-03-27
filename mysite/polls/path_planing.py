

class a_star():
    def __init__(self,start_point,end_point,map_data,tables_to_load):
        self.map_data=map_data
        self.table_in_use=tables_to_load
        self.debug=False



        self.current_postion=start_point
        self.start_point=start_point
        self.end_point=end_point


        self.openlist=[]
        self.closedlsit=[]
        self.node_data={}



        constions=self.find_data(start_point)

        #print(self.find_data(start_point),"teast")
        total_cost=self.distace_to_go_cost(start_point)

        #tottal_cost,travel_Cost,parent,conetions
        self.node_data[start_point]=total_cost,0,"parent",constions

        self.openlist.append(start_point)


        #print(self.node_data)

    def find_data(self,data):
        if self.debug==True:
            print("")
            print("looking for data functions")
        contions=""
        for q in self.map_data:

            if q[0]==data:
                if self.debug==True:
                    print(data," data in ")

                contions=q[4]
                weights=q[5]
                break
        if len(contions)==0:
            if self.debug==True:
                print("data not found",data)
                print("code will now crash")
                print("")
            #will crash code
        point_to_explore=[]
        contions=contions.split(";")
        weights=weights.split("-")

        count=-1
        for q in contions :
            count=count+1
            point_to_explore.append((contions[count],float(weights[count])))
        if self.debug==True:
            print("data entery out")
            for q in point_to_explore:
                print(q)

            print("")
        return(point_to_explore)



    def distace_to_go_cost(self,p1):
        if self.debug==True:
            print("")
        p1=p1.split("-")

        temp=p1[2].split(",")
        z1,x1,y1=float(p1[1]),float(temp[0]),float(temp[1])

        p2=self.end_point.split("-")
        temp=p2[2].split(",")
        z2,x2,y2=float(p2[1]),float(temp[0]),float(temp[1])


        c=(x1-x2)**2+(y1-y2)**2
        c=c**0.5

        if z1==z2:
            if self.debug==True:
                print("same floor simple math ")


            return(c)
        else:
            c2=c**2+(z1-z2)**2
            c2=c2**0.5
            if self.debug==True:
                print("not on same floor hard math")
            return(c2)
            #nput("input used to stop and mack you look")



    def add_to_open_lsit(self,new_vaule):
        index=-1
        new_node_cost=self.node_data[new_vaule][0]

        self.openlist.append(new_vaule)

        for open_list_vaules in self.openlist:
            index+=1
            old_node_cost=self.node_data[open_list_vaules][0]
            if new_node_cost<old_node_cost:
                self.openlist.remove(new_vaule)
                self.openlist.insert(index,new_vaule)
                break


    def make_path(self,end_node):
        current_node=end_node
        path=[]
        loacle_coudents=[]
        path.append(self.end_point)
        for q in self.map_data:
            if q[0]==self.end_point:
                loacle_coudents.append(q[1])
                break
        while current_node!=self.start_point:
            #tape
            for q in self.map_data:
                if q[0]==current_node:
                    loacle_coudents.append(q[1])
                    break
            path.append(current_node)
            current_node=self.node_data[current_node][2]
        for q in self.map_data:
            if q[0]==self.start_point:
                loacle_coudents.append(q[1])
                break
        path.append(self.start_point)
        if self.debug==True:
            print("")

            print("the path is ")
            for q in path:
                print(q)
            print("")

        return((path,loacle_coudents))



    def parent_cheek(self,current_node_data):
        if self.debug==True:
            print("")
            print("current node in parent_cheek")
            print(current_node_data)
            print("")
        current_node=current_node_data[0]

        travel_cost=current_node_data[1]+self.node_data[self.current_postion][1]

        if travel_cost<self.node_data[current_node][1]:
            #print"cheeper path found"
            if self.debug==True:
                print ("adding new vaule",current_node,self.current_postion)

            hold1=self.node_data[current_node][0]
            hold2=self.node_data[current_node][1]
            hold3=self.node_data[current_node][2]
            hold4=self.node_data[current_node][3]

            del self.node_data[current_node]



            cost_to_goal=self.distace_to_go_cost(current_node)
            total_G=cost_to_goal+travel_cost
        #tottal_cost,travel_Cost,parent,conetions
            self.node_data[current_node]=total_G,travel_cost,self.current_postion,hold4
            self.openlist.remove(current_node)
            self.add_to_open_lsit(current_node)



    def main(self):
        done=False
        while done ==False:
            if self.debug==True:
                print("points to explore")
                print (self.node_data[self.current_postion][3])
            for point_to_look_at_plus_cost in self.node_data[self.current_postion][3]:

                if point_to_look_at_plus_cost[0] in self.closedlsit:
                    if self.debug==True:
                        print("in clsoed li")
                    continue

                if point_to_look_at_plus_cost[0] in self.openlist:
                    self.parent_cheek(point_to_look_at_plus_cost)
                    continue

                #tape need better fix
                temp=point_to_look_at_plus_cost[0]
                temp=temp.split("-")

                if not temp[0] in self.table_in_use:
                    from polls import database_table_read
                    laods=database_table_read.load_data()
                    temp2=laods.get_data(temp[0])
                    self.map_data.extend(temp2)
                    if self.debug==True:
                        print("need to load new maps ",temp[0])
                if self.debug==True:
                    print("")
                    print("looking at ")
                    print(point_to_look_at_plus_cost[0])
                    print("")

                if point_to_look_at_plus_cost[0]==self.end_point:
                    done=True
                    if self.debug==True:
                        print("")
                        print("point found")
                        print("")
                    return(self.make_path(self.current_postion))

                travel_Cost=point_to_look_at_plus_cost[1]+self.node_data[self.current_postion][1]

                node_name=point_to_look_at_plus_cost[0]

                distace_to_go_cost=self.distace_to_go_cost(node_name)

                total_cost=distace_to_go_cost+travel_Cost

                constions=self.find_data(node_name)
                #tottal_cost,travel_Cost,parent,conetions
                self.node_data[node_name]=total_cost,travel_Cost,self.current_postion,constions
                if self.debug==True:
                    print("")
                    print("adding to openlist")
                    print(node_name)

                self.add_to_open_lsit(node_name)


            self.openlist.remove(self.current_postion)
            self.closedlsit.append(self.current_postion)
            if self.debug==True:
                print("")
                print("openlist")
                for q in self.openlist:
                    print("id")
                    print(q)
                    print("vaule")
                    print(self.node_data[q][0])
                    print("")
                print("")

                print("")
                print("cloed list")
                for q in self.closedlsit:
                    print("id")
                    print(q)
                    print("vaule")
                    print(self.node_data[q][0])
                    print("")
                print("")
            if len(self.openlist)==0:
                return("cant make a path ")
            self.current_postion=self.openlist[0]
