// arrays containing portions of our Disney itinerary
const disneyItinerary = {
	_attraction: ["Big Thunder Mountain Railroad", "Buzz Lightyear's Space Ranger Spin", "Haunted Mansion", "it's a small world", "Jungle Cruise", "Peter Pan's Flight", "Pirates of the Caribbean", "Seven Dwarfs Mine Train", "Space Mountain", "Splash Mountain", "Carousel of Progress", "Enchanted Tiki Room"],
	_dining: ["Be Our Guest Restaurant", "Casey's Corner", "Cinderella's Royal Table", "The Crystal Palace", "Liberty Tree Tavern", "Pecos Bill Tall Tale Inn and Cafe", "Tony's Town Square Restaurant"],
	_entertainment: ["The Dapper Dans", "Happily Ever After", "The Main Street Electrical Parade", "Main Street Philharmonic", "Mickey & Friends Cavalcade", "A Royal Princess Processional"],
	get attraction() {
		let rand = this._attraction[Math.floor(Math.random() * this._attraction.length)];
		return rand;
	},
	get dining() {
		let rand = this._dining[Math.floor(Math.random() * this._dining.length)];
		return rand;
	},
	get entertainment() {
		let rand = this._entertainment[Math.floor(Math.random() * this._entertainment.length)];
		return rand;
	},
	printItinerary() {
		console.log(`I hope you're ready for a magical day! 
Here is your itinerary for your afternoon at Disney's Magic Kingdom: 
		
- Fast pass 3:30pm ${this.attraction}
- Dinner 5:00pm ${this.dining}
- Recommended show for the day is ${this.entertainment}`);
	}
} 

disneyItinerary.printItinerary();
