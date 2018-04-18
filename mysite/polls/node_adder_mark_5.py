import pygame
import sqlite3



class node_add():


    def __init__(self,maps_names):
        self.BLACK = (0, 0, 0)
        self.WHITE = (255, 255, 255)
        self.GREEN = (0, 255, 0)
        self.RED = (255, 0, 0)


        #tape
        self.floor=0
        self.mouse_is_down=False
        self.mouse_is_up=True

        self.mosue_relse=True
        self.nodes=[]

        self.mode="nodes"
        self.lines=[]
        self.start=(0,0)
        self.scaling_factor=0.5


        pygame.init()
        size=900,900
        self.screen=pygame.display.set_mode(size)

        pygame.display.set_caption("My Game")

        self.done_main_loop=False

        self.clock=pygame.time.Clock()



        self.list_of_maps=maps_names
        print("number of map given",len(maps_names[0]))
        if len(maps_names[0])>1:
            print("more than one map")
            first_map=maps_names[0]
        else:
            first_map=maps_names
            print("only one map")


        self.current_map=first_map
        self.add_in_nodes_from_db(first_map)
        self.background_image = pygame.image.load(first_map).convert()

        #self.rest(first_map)

    def rest(self,first_map):

        self.data_prosses()
        self.point_to_point_stuff()
        self.mouse_is_down=False
        self.mouse_is_up=True

        self.mosue_relse=True
        self.nodes=[]

        self.mode="nodes"
        self.lines=[]
        self.start=(0,0)
        self.current_map=first_map
        self.add_in_nodes_from_db(first_map)





    def add_in_nodes_from_db(self,map_name):

        temp=map_name.split(".")
        VAUEL_TO_GET=temp[0]

        import database_table_read
        main=database_table_read.load_data()
        data_base_data=main.get_data(VAUEL_TO_GET)

        main=database_table_read.load_data()
        off_set_data=main.get_data("building_positions")
        if  len(data_base_data)>0:
            markewww=data_base_data[0][0]
            markewww=markewww.split("-")
            for aaa in off_set_data:
                #print("qqqq",markewww)

                #print("aaa",aaa[0],markewww[0])
                if aaa[0]==markewww[0]:
                    temp2=aaa
            temp=temp2[1]
            #print(temp)
            temp=temp.split(",")

            off_set=int(temp[0]),int(temp[1])

            #tape
            if self.floor==1:
                new_data=[]
                for q in data_base_data:
                    if q[2]=="1":
                        new_data.append(q)
                #print("tape 2")
                data_base_data=new_data
            for q in data_base_data:
                #print("data in",q)
                temp=q[1]
                #print("temp",temp)
                temp2=temp.split(",")
                #print("temp",temp2)
                y1,x1=int(temp2[0]),int(temp2[1])
                self.nodes.append((y1,x1))
                temp=q[4].split(";")



                for w in temp:
                    temp2=w.split("-")
                    #print("tmpes",temp2)
                    temp3=temp2[2]

                    temp3=temp3.split(",")
                    y,x=float(temp3[0]),float(temp3[1])
                    #tape
                    #print("preper  y and x",y,x)

                    #print("scaling factor",self.scaling_factor)
                    #print("pre y and x",y,x)
                    #print("off set",off_set)
                    y=y-off_set[0]
                    x=x-off_set[1]
                    y=y/self.scaling_factor
                    x=x/self.scaling_factor
                    #print ("line start",y1,x1)
                    #print("line end ",y,x)
                    #print (" ")
                    #y,x=0,0
                    self.lines.append(((y1,x1),(y,x)))




    def add_teaxt(self,teaxt,postion):


        y,x=int(postion[0]),int(postion[1])
        myFont = pygame.font.SysFont("Times New Roman", 18)
        diceDisplay = myFont.render(str(teaxt), 1, self.BLACK)
        self.screen.blit(diceDisplay, (y,x))



    def maths(self,a,b,z):
        print("mathin",a,b,z)

        x1=int(a[0])
        y1=int(a[1])

        x2=int(b[0])
        y2=int(b[1])

        a=x1-x2
        b=y1-y2

        c=a**2+b**2
        c=c**0.5
        c=round(c,2)

        z=int(z)
        c2=c**2+(z)**2
        c2=c2**0.5
        return(c2)


    def main_loop(self):
        while True:


            #if trun switch modes
            switch=False

            for event in pygame.event.get():

                if event.type==pygame.QUIT:
                    self.done_main_loop=True

                if event.type==5:
                    self.mouse_is_down=True
                    self.mouse_is_up=False

                if event.type==6:
                    #print"mosue up "
                    self.mouse_is_down=False
                    self.mouse_is_up=True

                if event.type==2:
                    switch=True


            if self.done_main_loop==True:
                break


            if switch ==True:
                if self.mode=="nodes":
                    self.mode="lines"
                elif self.mode=="lines":
                    self.mode="nodes"




            if (self.mouse_is_down==True and self.mouse_is_up==False) and  self.mosue_relse ==True:
                self.mosue_relse=False
                if self.mode=="nodes":
                    point=pygame.mouse.get_pos()
                    self.nodes.append((point))

                if self.mode=="lines":
                    self.start=pygame.mouse.get_pos()



            if  (self.mouse_is_down==False and self.mouse_is_up==True) and self.mosue_relse==False:
                end=pygame.mouse.get_pos()

                if self.mode=="lines":

                    self.lines.append((self.start,end))

                    self.start=(0,0)
                self.mosue_relse=True




            self.screen.fill(self.WHITE)
            x,y=pygame.mouse.get_pos()


            self.screen.blit(self.background_image, [0, 0])
            self.add_teaxt((x,y),(10,10))
            temp=50
            for q in self.list_of_maps:
                if x>800:
                    if y>temp:
                        if y<temp+50:
                            toload=q
                            #tape

                            #tape
                            if toload=="Camelot-1.png":
                                toload="Camelot.png"
                                self.rest(toload)
                                self.floor=1
                            else:
                                self.rest(toload)
                                self.floor=0
                            self.background_image=pygame.image.load(toload).convert()
                            if toload=="Parrot_Shop.png":
                                self.scaling_factor=0.5
                            if toload=="Outside.png":
                                self.scaling_factor=1
                            if toload=="Camelot.png":
                                self.scaling_factor=0.5
                            if toload=="Ministry_of_Silly_Walks.bmp":
                                self.scaling_factor=0.5
                            if toload=="Camelot-1.png":
                                self.scaling_factor=0.5
                            print("sacaling factoer is ",self.scaling_factor)
                self.add_teaxt(q,(800,temp))
                temp=temp+100




            if self.mode=="nodes":
                pygame.draw.rect(self.screen, self.RED, [x, y, 20, 20],2)


            if self.start !=(0,0) and self.mode=="lines":
                pygame.draw.line(self.screen, self.RED, self.start,[x,y], 5)


            for q in self.nodes:
                pygame.draw.rect(self.screen, self.RED, [q[0], q[1], 20, 20],2)

                self.add_teaxt(q,(q[0]+8,q[1]+8))


            for q in self.lines:
                pygame.draw.line(self.screen, self.GREEN, q[0],q[1], 5)




            pygame.display.flip()

            # --- Limit to 60 frames per second
            self.clock.tick(60)


    def data_prosses(self):
        self.pair_sore=[]
        lines_id=-1
        for one in self.lines:
            lines_id=lines_id+1
            for two in one:
                for node_points in self.nodes:
                    if two[0] >node_points[0] and two[1]>node_points[1] and two[0] <node_points[0]+20 and two[1]<node_points[1]+20:
                        #print(lines_id,"is in ",node_points)
                        self.pair_sore.append((lines_id,node_points))

    def point_to_point_stuff(self):
        temp=self.current_map
        temp=temp.split(".")
        cureent_map=temp[0]

        VAUEL_TO_GET="building_positions"
        import database_table_read
        main=database_table_read.load_data()
        data_base_data=main.get_data(VAUEL_TO_GET)

        temp=data_base_data
        #print(temp)

        for q in temp:
            if q[0]==cureent_map:
                temp2=q
        temp=temp2[1]
        #print(temp)
        temp=temp.split(",")
        off_set=int(temp[0]),int(temp[1])

        db=sqlite3.connect("back_end_data")
        cursor=db.cursor()
        save_to_data={}

        for q in self.pair_sore:
            for w in self.pair_sore:
                if q[0]==w[0] and q[1]!=w[1]:
                    if q[1] in save_to_data:
                        save_to_data[q[1]].append(w[1])
                    else:
                        save_to_data[q[1]]=[w[1]]

#456,112
#39,602
#618,718


        for q in save_to_data:

            temp=""
            temp2=""

            for w in save_to_data[q]:
                temp2=temp2+str(self.maths(q,w,self.floor)*self.scaling_factor)+"-"
                temp=temp+str(w)+"-"

            Distances=temp2

            Coordinate=""
            coordintsIn=""
            run_one=True
            temp_mark=-1
            for qwe in q:
                temp_mark=temp_mark+1
                #print("qwe",qwe)

                qwe2=((qwe*self.scaling_factor)+off_set[temp_mark])
                coordintsIn=coordintsIn+str(qwe)
                Coordinate=Coordinate+str(qwe2)
                if run_one ==True:
                    coordintsIn=coordintsIn+","
                    Coordinate=Coordinate+","
                    run_one=False
            adding_floor=str(self.floor)
            ID=(cureent_map+"-"+adding_floor+"-"+Coordinate)



            Connections=""
            run_one=True

            temp_mark=-1
            for qwe in save_to_data[q]:
                run_one2=True


                temp4=""
                for rt in qwe:
                    temp_mark=temp_mark+1
                    if temp_mark>1:
                        temp_mark=0
                    rt=off_set[temp_mark]+(rt*self.scaling_factor)

                    temp4=temp4+str(rt)
                    if run_one2==True:
                        run_one2=False
                        temp4=temp4+","



                Connections=Connections+(cureent_map+"-"+adding_floor+"-"+temp4)


                Connections=Connections+";"

            Connections=Connections[0:-1]
            Distances=Distances[0:-1]



            self.floor=str(self.floor)
            Label="0"



            print("data in")
            print("id",ID)
            print("local_Coordinate=0,0",coordintsIn)
            print("floor",self.floor)
            print("Label",Label)
            print("connect",Connections)
            print("Distances",Distances)

            print("")
            VAUEL_TO_GET=cureent_map
            import database_table_read
            main=database_table_read.load_data()
            data_base_data=main.get_data(VAUEL_TO_GET)
            write_data=True
            for loops in data_base_data:
                if ID==loops[0]:
                    write_data=False
                    break



            print("current_map",cureent_map)
            if write_data==True:
                cursor.execute('''INSERT INTO '''+cureent_map+'''(ID,CoordinatesIn,Floor,Label,Connections,Distance)
                              VALUES(?,?,?,?,?,?)''',(ID,coordintsIn,self.floor,Label,Connections,Distances))
        db.commit()




        db.close()




















pygame.display.quit()



wer=node_add(("Parrot_Shop.png","Outside.png","Camelot.png","Ministry_of_Silly_Walks.bmp","Camelot-1.png"))

wer.main_loop()
