ContactForm = React.createClass({
  constructor(props){
    super(props);
    this.state = {
      contactForm: {
        firstName: '',
        lastName: '',
        email: ''
      }
    };
  },

  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
        <form className={'contactForm'} target={'_top'}>
          <label>Imię: </label>
          <input type={'text'} placeholder={'Imię'} />
          <label>Nazwisko: </label>
          <input type={'text'} placeholder={'Nazwisko'} />
          <label>Email: </label>
          <input type={'email'} placeholder={'email'} />
          <button type={'submit'}>Dodaj kontakt</button>
        </form>
      );
  }
});
