ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
        <form className={'contactForm'}>
          <label>Imię: </label>
          <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}/>
          <label>Nazwisko: </label>
          <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}/>
          <label>Email: </label>
          <input type={'email'} placeholder={'email'} value={this.props.contact.email}/>
          <button type={'submit'}>Dodaj kontakt</button>
        </form>
      );
  },
});
