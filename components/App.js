var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

App = React.createClass({
  getInitialState: function() {
    return {
      contacts: [
      {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
      },
      {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
      },
      {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com',
      }
    ]
  };
  this.onContactAdd = this.onContactAdd.bind(this);
},
onContactAdd: function(name, surname, mail) {
  var contact = {
    firstName: name,
    lastName: surname,
    email: mail
  };
  const data = [...this.state.contacts, contact];
  this.setState({data});
},
  render: function() {
    return (
        <div className={'app'}>
          <ContactForm contact={this.onContactAdd} />
            <Contacts items={this.state.contacts} />
        </div>
/*
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      ) */
    );
  }
});
