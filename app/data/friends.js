const friendsList = [
	{
		name: 'Derek',
		photo: 'http://www.philterdesign.com/wp-content/uploads/2012/01/computer-nerd-+-Limpet-21.jpg',
		scores: [3,3,3,3,3,3,3,3,3,3]
	},
	{
		name: 'Ryan',
		photo: 'https://c1.staticflickr.com/9/8123/8982740008_d851f5a78e_b.jpg',
		scores: [5,5,5,5,5,5,5,5,5,5]
	},
	{
		name: 'Arnav',
		photo: 'http://www.crossfitmanassas.com/crossfithistoric/wp-content/uploads/2013/12/programming-nerd-01.jpg',
		scores: [1,1,1,1,1,1,1,1,1,1]
	},
	{
		name: 'Jeff',
		photo: 'http://forkintheroadblog.com/wp-content/uploads/2012/04/nerd-460x354.jpg',
		scores: [5,4,3,2,1,5,4,3,2,1]
	},
	{
		name: 'Chris',
		photo: 'http://arttechz.com/newsandtips/wp-content/uploads/2014/07/moron-nerd-hacker-300x2181.jpg',
		scores: [1,2,3,4,5,1,2,3,4,5]
	},
	{
		name: 'Joey',
		photo: 'http://68.media.tumblr.com/cfe8c75da5b2708994bd95b668065382/tumblr_nciq53aLn11rap11ro1_500.jpg',
		scores: [1,3,5,2,4,4,2,4,3,1]
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