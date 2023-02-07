"use strict";

// const Handlebars = require("handlebars");

let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: [
    'something',
    'something else',
    'another tag',
  ]
};

let posts = [post];

posts.push({
  title: 'Second Post',
  published: 'April 2, 2015',
  body: 'Content for the second post.',
});

$(function() {
  let template = Handlebars.compile($('#posts').html());

  Handlebars.registerPartial('tag', $('#tag').html());

  // post.body = '<p>' + post.body +'</p>';

  $(document.body).html(template({ posts: posts }));
});

console.log('This script is working');
