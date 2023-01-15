class Phonebook {
    constructor(contactName, phoneNumber)
    {
        this.contactName = contactName;
        this.phoneNumber = phoneNumber;
    }
}

const contactsSection = document.createElement('section')
contactsSection.className = 'contacts';
const contactHeader = document.createElement('h1');
const hr = document.createElement('hr');
contactHeader.innerText = 'Contacts';
contactHeader.append(hr);
contactsSection.appendChild(contactHeader);
const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

contacts.forEach((contact) => {
    const person = `
    <div>
    <p>Name: <br> ${contact.contactName}</p>
    <p>Phone Number: <br> ${contact.phoneNumber}</p>
    <button>Remove</button>
    </div>
    <hr>
    `;
    contactsSection.innerHTML += person;
    
});

document.body.insertBefore(contactsSection, document.body.children[1]);
const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', addContact);

function addContact() {
    const contactName = document.querySelector('#contactName');
  
    const phoneNumber = document.querySelector('#phoneNumber');
    contacts.push({ contactName: contactName.value, phoneNumber: phoneNumber.value });
  
      localStorage.setItem('contacts', JSON.stringify(contacts));
      contactName.value = '';
      phoneNumber.value = '';

  }

  