const friendsList = [
	{
		name: 'Derek',
		photo: '',
		scores: [3,3,3,3,3,3,3,3,3,3]
	},
	{
		name: 'Ryan',
		photo: '',
		scores: [5,5,5,5,5,5,5,5,5,5]
	},
	{
		name: 'Arnav',
		photo: '',
		scores: [1,1,1,1,1,1,1,1,1,1]
	}
]

const compatibility = (arr1, arr2) => {
  return arr1.map((e,i) => Math.abs(e - arr2[i]))
  .reduce((sum, val) => sum += val)
}

const findMatch = newSet => {
	const comps = friendsList.map(e => compatibility(newSet, e.scores))
	return friendsList[comps.indexOf(Math.min(...comps))]
}

const addToList = newFriend => friendsList.push(newFriend);

module.exports = {
	list: friendsList,
	findMatch,
	addToList
}