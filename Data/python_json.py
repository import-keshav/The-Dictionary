import json

file = json.loads(open('A_data.json').read())

data = file['DATA_A']
counter = 0

dictionary = ''

for word in data:
	if(counter > 20):
		new_word = word.split(" ")
		name = new_word[0]
		grammar = new_word[1]
		meaning = "".join(new_word[2:])
		dictionary = dictionary + '{' + name + ":" + meaning + '},'
	counter +=1 
	dictionary 
























# new_data = {}

# new_data['A'] = []

# for word in data:
# 	if(counter > 20):
# 		new_word = word.split(" ")
# 		name = new_word[0]
# 		grammar = new_word[1]
# 		meaning = "".join(new_word[2:])
# 		new_data['A'].append({name: meaning})
# 	counter +=1 

# with open('js_dict_file.json', 'a') as f:
# 	json.dump(new_data, f)

# # file = json.loads(open('js_dict_file.json').read())

# # data = file['A']

# # for row in data:
# # 	print(