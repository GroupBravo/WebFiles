from django.shortcuts import render, get_object_or_404
from django.urls import reverse
# Create your views here.
from django.http import HttpResponse, Http404, HttpResponseRedirect
from .models import Question, Choice
from django.template import loader
from django.views import generic
from django.http import JsonResponse
import sqlite3
class IndexView(generic.ListView):
    template_name = 'FlyingCircus/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'FlyingCircus/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'FlyingCircus/results.html'



def vote(request,question_id):
    question=get_object_or_404(Question,pk=question_id)

    return HttpResponseRedirect(reverse('FlyingCircus:results', args=1))





def results(request, question_id):
    question=get_object_or_404(Question,pk=question_id)
    return render(request,'FlyingCircus/results.html',{'question':question})


def ConvertCoord(Label):
    db=sqlite3.connect("back_end_data")
    cursor=db.cursor()
    table,floor,coord=Label.split("-")
    temp="SELECT CoordinatesIn FROM %s WHERE ID= '%s'" % (table,Label)

    cursor.execute(temp)
    data= cursor.fetchall()
    db.close()
    return data[0][0]


def GoTo(request):
    Room=str(request.GET['Room'])
    Label=GetLabel(Room)
    table,floor,coord=Label.split("-")
    table+="_"+floor
    coord=ConvertCoord(Label)
    coord=coord.split(",")
    return JsonResponse([table,coord],safe=False)


def Test(request):

    return JsonResponse([100, 500], safe=False)


def DisplayTest(request):

    Start=str(request.GET['Start'])
    End=str(request.GET['End'])
    StartLabel=GetLabel(Start)
    EndLabel=GetLabel(End)

    ToSend=getPath(StartLabel,EndLabel)
    return JsonResponse(ToSend,safe=False)
    #return JsonResponse([["Institute of Medical Science","Suttie Centre"], [[0,0],[0,100],[100,500]],[[100,200],[300,400]]], safe=False)

def GetLabel(RoomName):
    db=sqlite3.connect("back_end_data")
    cursor=db.cursor()

        #cursor addvance when get data


    cursor.execute("SELECT Point_Id FROM existance WHERE Point_name=?",(RoomName,))

    data_out = cursor.fetchall()
    db.close()
    print (data_out)
    return data_out[0][0]



def getPath(request):

    startEnglish=str(request.GET['Start'])
    endEnglish=str(request.GET['End'])
    from FlyingCircus import path_planning_run
    startLabel=GetLabel(startEnglish)
    endLabel=GetLabel(endEnglish)
    print (startLabel,endLabel)
    results=path_planning_run.load_data(startLabel,endLabel)

    #print(results)

    return JsonResponse(results,safe=False)


def getRoomNames(request):
    map= str(request.GET['Map'])
    building=map[:len(map)-2]
    floor=map[len(map)-1:]
    label=building+"-"+floor



    db=sqlite3.connect("back_end_data")
    cursor=db.cursor()

    query="SELECT * FROM existance WHERE Point_Id LIKE '"
    query+=str(label)+"%' "


    #cursor addvance when get data
    cursor.execute(query)

    data_out = cursor.fetchall()
    output=[]
    for each in data_out:
        coord=ConvertCoord(each[1])
        coord=coord.split(",")
        output.append([each[0],coord])



    return JsonResponse(output, safe=False)

def validRooms(request):
    db=sqlite3.connect("back_end_data")
    cursor=db.cursor()

    query="SELECT Point_name FROM existance"
    cursor.execute(query)
    data_out=cursor.fetchall()
    output=[]
    for each in data_out:
        output.append(each[0])

    return JsonResponse(output,safe=False)