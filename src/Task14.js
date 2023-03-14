import React, { Component } from 'react';

class Task14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hrefs: [
        { href: '1.html', text: 'посилання 1' },
        { href: '2.html', text: 'посилання 2' },
        { href: '3.html', text: 'посилання 3' }
      ],
      newHref: '',
      newText: ''
    };
  }

  handleNewHrefChange = event => {
    this.setState({ newHref: event.target.value });
  }

  handleNewTextChange = event => {
    this.setState({ newText: event.target.value });
  }

  handleAddLink = () => {
    const newLink = {
      href: this.state.newHref,
      text: this.state.newText
    };
    this.setState({
      hrefs: [...this.state.hrefs, newLink],
      newHref: '',
      newText: ''
    });
  }

  render() {
    const hrefsList = this.state.hrefs.map((link, index) => (
      <li key={index}>
        <a href={link.href}>{link.text}</a>
      </li>
    ));

    return (
      <div>
        <ul>{hrefsList}</ul>
        <div>
          <input
            type="text"
            placeholder="Enter href"
            value={this.state.newHref}
            onChange={this.handleNewHrefChange}
          />
          <input
            type="text"
            placeholder="Enter link text"
            value={this.state.newText}
            onChange={this.handleNewTextChange}
          />
          <button onClick={this.handleAddLink}>Add Link</button>
        </div>
      </div>
    );
  }
}

export default Task14;
