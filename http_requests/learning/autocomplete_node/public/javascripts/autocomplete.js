"use strict";

import debounce from './debounce.js';

class Autocomplete {
  constructor(input, url) {
    this.input = input;
    this.url = url;

    this.listUI = null;
    this.overlay = null;
    this.visible = false;
    this.matches = [];
    this.selectedIndex = null;
    this.bestMatchIndex = null;

    this.wrapInput();
    this.createUI();
    this.valueChanged = debounce(this.valueChanged.bind(this), 300);
    this.bindEvents();
  }

  wrapInput() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('autocomplete-wrapper');
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  }

  createUI() {
    let listUI = document.createElement('ul');
    listUI.classList.add('autocomplete-ui');
    this.input.parentNode.appendChild(listUI);
    this.listUI = listUI;

    let overlay = document.createElement('div');
    overlay.classList.add('autocomplete-overlay');
    overlay.style.width = `${this.input.clientWidth}px`;

    this.input.parentNode.appendChild(overlay);
    this.overlay = overlay;
  }

  bindEvents() {
    this.input.addEventListener('input', this.valueChanged);
    this.input.addEventListener('keydown', this.handleKeydown.bind(this));
    this.listUI.addEventListener('click', this.handleClick.bind(this));
  }

  // handleClick: function(event) {
  //   if (event.button === 0 && event.target.tagName === 'LI') {
  //     this.bestMatchIndex = null;
  //     this.selectedIndex = this.matches.findIndex(match => {
  //       return event.target.textContent === match.name;
  //     });

  //     this.completeField(event);
  //   }
  // },

  handleClick(event) {
    if (event.button === 0 && event.target.tagName === 'LI') {
      let element = event.target;
      this.input.value = element.textContent;
      this.reset();
    }
  }

  handleKeydown(event) {
    switch(event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === this.matches.length - 1) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex += 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === 0) {
          this.selectedIndex = this.matches.length - 1;
        } else {
          this.selectedIndex -= 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'Tab':
        this.completeField(event);
        break;
      case 'Enter':
        this.completeField(event);
        break;
      case 'Escape':
        this.reset();
        break;
    }
  }

  completeField(event) {
    event.preventDefault();
    if (this.bestMatchIndex === null && this.matches.length !== 0) {
      this.input.value = this.matches[this.selectedIndex].name;
    }
    this.reset();
  }

  valueChanged() {
    let value = this.input.value;

    if (value.length > 0) {
      this.fetchMatches(value, matches => {
        this.visible = true;
        this.matches = matches;
        this.bestMatchIndex = 0;
        this.selectedIndex = null;
        this.draw();
      });
    } else {
      this.reset();
    }
  }

  draw() {
    while (this.listUI.lastChild) {
      this.listUI.removeChild(this.listUI.lastChild);
    }

    if (!this.visible) {
      this.overlay.textContent = '';
      return;
    }

    if (this.bestMatchIndex !== null && this.matches.length !== 0) {
      let selected = this.matches[this.bestMatchIndex];
      this.overlay.textContent = this.generateOverlayContent(this.input.value, selected);
    } else {
      this.overlay.textContent = '';
    }

    this.matches.forEach((match, index) => {
      let li = document.createElement('li');
      li.classList.add('autocomplete-ui-choice');

      if (index === this.selectedIndex) {
        li.classList.add('selected');
        // this.input.value = match.name;
        let selected = this.matches[this.selectedIndex];
        this.overlay.textContent = this.generateOverlayContent(this.input.value, selected);
      }

      li.textContent = match.name;
      this.listUI.appendChild(li);
    });
  }

  generateOverlayContent(value, match) {
    let end = match.name.substr(value.length);
    return value + end;
  }

  fetchMatches(query, callback) {
    let request = new XMLHttpRequest();

    request.addEventListener('load', () => {
      callback(request.response);
    });

    request.open('GET', `${this.url}${encodeURIComponent(query)}`);
    request.responseType = 'json';
    request.send();
  }

  reset() {
    this.visible = false;
    this.matches = [];
    this.bestMatchIndex = null;
    this.selectedIndex = null;

    this.draw();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let input = document.querySelector('input');
  let autocomplete = new Autocomplete(input, '/countries?matching=');
});
