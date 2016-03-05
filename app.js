

var default_text ="// This is just a sample script. Paste your real code (javascript or HTML) here.\n\nif ('this_is'==/an_example/){of_beautifier();}else{var a=b?(c%d):e[f];}";
var textArea = $('#source')[0];
var editor = null;

 if (CodeMirror !== 'undefined') {
   editor = CodeMirror.fromTextArea(textArea, {
     theme: 'default',
     lineNumbers: true
   });
   editor.focus();
   editor.setValue(default_text);
   $('.CodeMirror').click(function () {
     if (editor.getValue() == default_text) {
       editor.setValue('');
     }
   });
 } 
