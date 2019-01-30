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
			if(counter === new_words.length - 1){
				current.endofWord[new_words[counter]] = true;
				return
			}
			current.endofWord[new_words[counter]] = false;
			current = current.members[new_words[counter]];
			counter += 1
		}
	}
};


function giveSuggestion(result, current){
	
	if(typeof current != "undefined"){
		var keys_of_members = Object.keys(current.members);
		
		for(var i=0; i<keys_of_members.length; i++){
			if(current.endofWord[keys_of_members[i]] === true){
				result += keys_of_members[i];
				console.log(result)
				giveSuggestion(result, current.members[keys_of_members[i]]);
				result = result.slice(0, -1);
				continue
			}
			result += keys_of_members[i];
			giveSuggestion(result, current.members[keys_of_members[i]]);
		};
	}
};


function traverse(word, current){
	var new_word = word.split("")
	let counter = 0;
	while(counter < new_word.length){
		if(new_word[counter] in current.members){
			current = current.members[new_word[counter]];
			counter += 1;
		}
	}
	giveSuggestion(word, current);
};


for(let i=0; i<words.length; i++){
	insertNode(words[i])
};

traverse('abc', head);