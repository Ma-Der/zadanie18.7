ContactForm = React.createClass({
  getInitialState: function(){
    return {
      contactForm: [
        {
          firstName: '',
          lastName: '',
          email: ''
        }
      ]
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
      contactForm: [
        {
          firstName: e.target.value,
          lastName: e.target.value,
          email: e.target.value
        }
      ]
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(e);
    this.props.onContactAdd(this.state.contactForm.firstName, this.state.contactForm.lastName, this.state.contactForm.email);
  },
  render: function() {
    return (
        <form className={'contactForm'} onSubmit={this.handleSubmit}>
          <label>Imię: </label>
          <input type={'text'} placeholder={'Imię'} value={this.state.contactForm.firstName} onChange={this.handleChange} />
          <label>Nazwisko: </label>
          <input type={'text'} placeholder={'Nazwisko'} value={this.state.contactForm.lastName} onChange={this.handleChange}/>
          <label>Email: </label>
          <input type={'email'} placeholder={'email'} value={this.state.contactForm.email} onChange={this.handleChange}/>
          <button type={'submit'}>Dodaj kontakt</button>
        </form>
      );
  }
});
