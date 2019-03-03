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
    this.props.onContactAdd(e.target.value);
  },
  render: function() {
    return (
        <form className={'contactForm'} onSubmit={this.handleSubmit}>
          <label>Imię: </label>
          <input type={'text'} placeholder={'Imię'} onChange={this.handleChange} />
          <label>Nazwisko: </label>
          <input type={'text'} placeholder={'Nazwisko'} onChange={this.handleChange}/>
          <label>Email: </label>
          <input type={'email'} placeholder={'email'} onChange={this.handleChange}/>
          <button type={'submit'}>Dodaj kontakt</button>
        </form>
      );
  }
});
