/* Author: Brandon Presley
 * GitHub: https://github.com/brandonp2412
 * Date: 11/9/2017
 *
 * Description: Creates a multi choice quiz with 61 questions.
 * 				This maps to the associated past exam.
 */

function makeMcq() {
  var form = FormApp.create('Compsci 335 Semester 2 2016');
  form.setIsQuiz(true);
  for (var i = 1; i <= 61; i++) {
    form.addMultipleChoiceItem()
    .setTitle(i.toString())
    .setChoiceValues(['A','B','C','D'])
    .showOtherOption(true);
  }
}