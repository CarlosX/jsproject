alert('hi');

var default_text ="// This is just a sample script. Paste your real code (javascript or HTML) here.\n\nif ('this_is'==/an_example/){of_beautifier();}else{var a=b?(c%d):e[f];}";
var textArea = $('#source')[0];

 if (CodeMirror !== 'undefined') {
   the.editor = CodeMirror.fromTextArea(textArea, {
     theme: 'default',
     lineNumbers: true
   });
   the.editor.focus();
   the.editor.setValue(default_text);
   $('.CodeMirror').click(function () {
     if (the.editor.getValue() == default_text) {
       the.editor.setValue('');
     }
   });
 } 
