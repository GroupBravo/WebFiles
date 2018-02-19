from django.shortcuts import render, get_object_or_404
from django.urls import reverse
# Create your views here.
from django.http import HttpResponse, Http404, HttpResponseRedirect
from .models import Question, Choice
from django.template import loader
from django.views import generic


class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'



def vote(request,question_id):
    question=get_object_or_404(Question,pk=question_id)

    return HttpResponseRedirect(reverse('polls:results', args=1))





def results(request, question_id):
    question=get_object_or_404(Question,pk=question_id)
    return render(request,'polls/results.html',{'question':question})

def GoTo(request):
    if request.method=="POST":
        Num= (request.POST['num1'])
        return render(request,'polls/index.html',{'Num1':Num})

    else:
         return render(request,'polls/index.html')

def Test(request):
    return HttpResponse([1,1,1])

