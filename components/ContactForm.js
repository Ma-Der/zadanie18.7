ContactForm = React.createClass({
  getInitialState: function(){
    return {
          firstName: '',
          lastName: '',
          email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  },

  propTypes: {
    onContactAdd: React.PropTypes.any.isRequired,
    contacts: React.PropTypes.any.isRequired,
  },

  handleChange: function(e) {
    console.log('cos', e.target);
    console.log('nazwy', e.target.name);
    if(e.target.name === 'firstName') {
      this.setState({
        firstName: e.target.value
      });
      console.log('first',this.state.firstName);
    }
    if(e.target.name === 'lastName') {
      this.setState({
        lastName: e.target.value
      });
      console.log('last',this.state.lastName);
    }
    if(e.target.name === 'email') {
        console.log('email value',e.target.value);
      this.setState({
        email: e.target.value
      });
      console.log('email',this.state.email);
    }
  /*  this.setState({
          firstName: e.target.name,
          lastName: e.target.name,
          email: e.target.name
    });*/
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onContactAdd(this.state.firstName, this.state.lastName, this.state.email);
    console.log(this.props.onContactAdd(this.state.firstName, this.state.lastName, this.state.email));
  },
  render: function() {
    return (
        <form className={'contactForm'} onSubmit={this.handleSubmit}>
          <label>Imię: </label>
          <input type={'text'} placeholder={'Imię'} name={'firstName'} onChange={this.handleChange} />
          <label>Nazwisko: </label>
          <input type={'text'} placeholder={'Nazwisko'} name={'lastName'} onChange={this.handleChange}/>
          <label>Email: </label>
          <input type={'email'} placeholder={'email'} name={'email'} onChange={this.handleChange}/>
          <button type={'submit'}>Dodaj kontakt</button>
        </form>
      );
  }
});
