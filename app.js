alert('hi');


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
