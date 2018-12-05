var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
        <form className={'contactForm'}>
          <label for={'name'}>Imię: </label>
          <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName}>
          <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}>
          <input type={'email'} placeholder={'email'} value={this.props.contact.email}>
          <button type={submit}>Dodaj kontakt</button>
        </form>



      /* React.createElement('form', {className: 'contactForm'},
        React.createElement('label', {for: 'name'}, "Imię: "),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
        }),
        React.createElement('label', {for: 'nazwisko'}, "Nazwisko: "),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
        }),
        React.createElement('label', {for: 'email'}, "Email: "),
        React.createElement('input', {
          type: 'email',
          placeholder: 'email',
          value: this.props.contact.email,
        }),
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt"),

      ) */
    )
  },
})
