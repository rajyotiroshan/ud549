//a suit
describe('Address Book', function() {
	let addressBook, 
		contact;
	//before each function
	beforeEach(function() {
		addressBook = new AddressBook();
		contact = new Contact();
	});
	//spec 1 validating adding new contact.
	it('should be able to add a contact' , function() {
		addressBook.addContact(contact);
		expect(addressBook.getContact(0)).toBe(contact);  
	});

	//spec 2 validating deleting a contact.
	it('should be able to delete an existing contact from addressBook', function (){
		addressBook.addContact(contact);
		addressBook.deleteContact(0);
		expect(addressBook.contacts[0]).not.toBeDefined();

	});
});

//validate async request.
describe("Async address book", function(){
	let addressBook = new AddressBook();
	beforeEach(function(done){
		addressBook.getInitialContacts(function(){
			done();
		});
	});

	it('should grab initial contacts' , function(done) {
		expect(addressBook.initialComplete).toBe(true);
		done();
	});

});
