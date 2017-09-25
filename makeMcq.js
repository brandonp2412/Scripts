/* Author: 	Brandon Presley
 * GitHub: 	https://github.com/brandonp2412
 * Date: 	25/9/2017
 * 
 * Description: Google apps script which draws answers from a
 *		predefined google doc, then creates an associated MCQ.
 */

function makeMcq() {
  var choices = ['A','B','C','D','E'];
  var docUrl = 'https://docs.google.com/document/d/17SnAUqjJQ9710939c3K-QpfxYy8L3sXk9VXUiJnBxxA/edit?usp=sharing';
  var answers = getAnswers(docUrl);
  var form = FormApp.create('Compsci 335 Semester 2 2016');
  form.setIsQuiz(true);
  form.setProgressBar(true);
  form.setPublishingSummary(true);
  for (var i = 1; i <= 61; i++) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(i.toString())
    var itemChoices = [];
    for (var j = 0; j < choices.length; j++) {
      itemChoices.push(
        item.createChoice(choices[j], answers[i-1] === choices[j] ? true : false) 
      );
      Logger.log("choices[j]: " + choices[j]);
      Logger.log("answers[i]: " + answers[i]);
    }
    item.setChoices(itemChoices);
    item.setPoints(2);
  }
}

function getAnswers(url) {
  var doc = DocumentApp.openByUrl(url);
  var text = doc.getBody().getText();
  var choices = ['A','B','C','D','E'];
  text = text.split('\n');
  var answers = [];
  var question = 1;
  for (var line = 0; line < text.length; line++) {
    if (text[line].indexOf(question + ')') !== -1) {
      var answer = text[line].substring(text[line].indexOf(')')+2, text[line].length);
      answers.push(answer);
      question++;
    }
  }
  Logger.log("Answers are: " + answers);
  return answers;
}