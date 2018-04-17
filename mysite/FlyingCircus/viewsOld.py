from django.shortcuts import render, get_object_or_404
from django.urls import reverse
# Create your views here.
from django.http import HttpResponse, Http404, HttpResponseRedirect
from .models import Question
from django.template import loader

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
    try:
        selected_choice=question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        return render(request,'FlyingCircus/detail.html',{'question':question, 'error_message':"You Didnt select a choice",})
    else:
        selected_choice.votes+=1
        selected_choice.save()

        return HttpResponseRedirect(reverse('FlyingCircus:results', args=(question.id,)))





def results(request, question_id):
    question=get_object_or_404(Question,pk=question_id)
    return render(request,'FlyingCircus/results.html',{'question':question})