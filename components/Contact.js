var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        <div className={'contactItem'}>
          <img className={'contactImage'} src={'https://via.placeholder.com/150'} />
          <p className={'contactLabel'}>Imię: {this.props.item.firstName}</p>
          <p className={'contactLabel'}>Nazwisko: {this.props.item.lastName}></p>
          <a className={'contactEmail'} href={'mailto: ' + this.props.item.email}>{this.props.item.email}</a>


      /* React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'https://via.placeholder.com/150'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto: ' + this.props.item.email}, this.props.item.email)
      )  */
    )
  },
});
