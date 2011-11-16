<script src="/textshare/media/js/ace.js" type="text/javascript" charset="utf-8"></script>
<script src="/textshare/media/js/socket.io.js"></script>
<script src="/textshare/media/js/share/share.js"></script>
<script src="/textshare/media/js/share/ace.js"></script>
<script>
var editor = ace.edit("editor");

sharejs.open('textshare:{{ note.key }}', 'text', 'http://' + window.location.hostname + ':7121/sjs', function(error, doc) {
	doc.attach_ace(editor);
	editor.getSession().setValue('{{ note.text|escapejs }}');
});

function form_onsubmit(){
	document.getElementById("note_text").value = editor.getSession().getValue();
	return true;
}
</script>