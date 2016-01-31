var todoInput = document.getElementById("input");
var todoTask_1 = document.getElementsByTagName("button") || []; //|| document.createElement("BUTTON");
var todoTask_2 = document.getElementsByTagName("input") || []; //|| document.createElement("TYPE");

todoInput.addEventListener("keypress", function(el){
	if(el.keyCode===13 && todoInput.value!=""){
		var enter = todoInput.value;
		todoInput.value="";
		//creating Checkbox
		var chB = document.createElement("INPUT");
		chB.className="check";
		chB.setAttribute("type","checkbox");
		
		
		//creating Label
		var tsk = document.createElement("LABEL");
		var t1 = document.createTextNode(enter);
		tsk.appendChild(t1);
		
		//creating Button
		var but = document.createElement("BUTTON");
		but.className="erase";
		var t2 = document.createTextNode("X");
		but.appendChild(t2);
		
		
		//Creating List
		var lst = document.createElement("LI");
		lst.className="";
		lst.appendChild(chB);
		lst.appendChild(tsk);
		lst.appendChild(but);
		
		//Adding list to ul
		var ulst = document.getElementById("todo-list");
		ulst.appendChild(lst);
	}
});


for(var i=0;i<todoTask_1.length;i++){

	todoTask_1[i].addEventListener("click",eraseNode(i));
}
function eraseNode(m){
		var task=todoTask_1[m].parentNode;
		task.parentNode.removeChild(task);	
}

for(var j=0;j<todoTask_2.length;j++){
	if(todoTask_2[j].type=="checkbox"){
		todoTask_2[j].addEventListener("change",changeStyle(j) );
	}
}

function changeStyle(n){
		if(todoTask_2[n].checked==true){
				todoTask_2[n].parentNode.className="done";
			}
		else if(todoTask_2[n].checked==false){
				todoTask_2[n].parentNode.className="";
			
			}
}