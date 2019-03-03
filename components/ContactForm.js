ContactForm = React.createClass({
  getInitialState: function(){
    return {
      contactForm: {
        firstName: '',
        lastName: '',
        email: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  },

  propTypes: {
    onContactAdd: React.PropTypes.any.isRequired,
    contacts: React.PropTypes.any.isRequired,
  },

  handleChange: function(e) {
    this.setState({
      contactForm: e.target.value
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(e);
    this.props.onContactAdd;
  },
  render: function() {
    return (
        <form className={'contactForm'} onSubmit={this.handleSubmit}>
          <label>Imię: </label>
          <input type={'text'} placeholder={'Imię'} value={this.props.contacts.firstName} onChange={this.handleChange} />
          <label>Nazwisko: </label>
          <input type={'text'} placeholder={'Nazwisko'} value={this.props.contacts.lastName} onChange={this.handleChange}/>
          <label>Email: </label>
          <input type={'email'} placeholder={'email'} value={this.props.contacts.email} onChange={this.handleChange}/>
          <button type={'submit'}>Dodaj kontakt</button>
        </form>
      );
  }
});
