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
    console.log(e);
    this.setState({
          firstName: e.target.value,
          lastName: e.target.value,
          email: e.target.value
    });
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
          <input type={'text'} placeholder={'Imię'} name={this.state.firstName} onChange={this.handleChange} />
          <label>Nazwisko: </label>
          <input type={'text'} placeholder={'Nazwisko'} name={this.state.lastName} onChange={this.handleChange}/>
          <label>Email: </label>
          <input type={'email'} placeholder={'email'} name={this.state.email} onChange={this.handleChange}/>
          <button type={'submit'}>Dodaj kontakt</button>
        </form>
      );
  }
});
