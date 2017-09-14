function makeMcq() {
  // Creates the format for the 61 MCQ previous exam
  var form = FormApp.create('Compsci 335 Semester 2 2016');
  form.setIsQuiz(true);
  for (var i = 1; i <= 61; i++) {
    form.addMultipleChoiceItem()
    .setTitle(i.toString())
    .setChoiceValues(['A','B','C','D'])
    .showOtherOption(true);
  }
}
