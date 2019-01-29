var words = ['abc', 'abgl', 'cdf', 'abcd', 'lmn']


function Node(){
	this.members = {};
	this.endofWord = {};
}


var head = new Node()


function insertNode(word){
	var new_words = word.split("");
	var counter = 0;
	var current = head;
	while(counter < new_words.length){
		if(new_words[counter] in current.members){
			current = current.members[new_words[counter]];
			counter += 1;
		}
		else{
			current.members[new_words[counter]] = new Node();
			current = current.members[new_words[counter]];
			current.endofWord[new_words[counter]] = false;
			counter += 1;
		}
	}
	current.endofWord[new_words[counter-1]] = true;
};

function giveSuggestion(result, current){
	console.log(typeof current)
	if(typeof current != "undefined"){
		var keys_of_members = Object.keys(current.members);
		
		for(var i=0; i<keys_of_members.length; i++){
			if(current.endofWord[keys_of_members[i]] == true){
				result += keys_of_members[i];
				console.log(result);
				current = current.members[keys_of_members[i]];
				giveSuggestion(result, current);
			}
			else{
				result += keys_of_members[i];
				current = current.members[keys_of_members[i]];
				giveSuggestion(result, current);
			}
		}
	}
	else{
		return
	}
}



function traverse(word, current){
	while(word in current.members){
		current = current.members[word];
	}
	giveSuggestion(word, current);
};


for(let i=0; i<words.length; i++){
	insertNode(words[i])
};


traverse('a', head);