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
    id: Math.random(),
    firstName: name,
    lastName: surname,
    email: mail
  };
  const data = [...this.state.contacts, contact];
  console.log('data', data);
  return  this.setState({contacts: data});
},
  render: function() {
    return (
        <div className={'app'}>
          <ContactForm onContactAdd={this.onContactAdd} contacts={this.state.contacts}/>
            <Contacts items={this.state.contacts} />
        </div>
    );
  }
});
