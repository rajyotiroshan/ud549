/*constructor function*/

function AddressBook() {
	this.contacts = [];
	this.initialComplete = false;
}

//checking async from jasmin.
AddressBook.prototype.getInitialContacts = function(cb) {
	let self = this;

	setTimeout(function(){
		self.initialComplete = true;
		if(cb) {
			return cb();
		}
	},3);

};
//prototypal method of AddressBook c.f

//add new contact.
AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
};
//get contact at given index.
AddressBook.prototype.getContact = function(index) {
	return this.contacts[index];
};
//delete a contact at given index.
AddressBook.prototype.deleteContact = function(index) {
	this.contacts[index] = undefined;
	return this.contacts.splice(index,1); 
};

