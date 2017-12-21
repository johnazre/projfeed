
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          "name": "Strozen",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/strozen",
          "hosted_url": "https://somebody.github.com/strozen",
          "author_id": 1,
          "collection_id": 2
        },
        {
          "name": "Quilm",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/quilm",
          "hosted_url": "https://somebody.github.com/quilm",
          "author_id": 20,
          "collection_id": 3
        },
        {
          "name": "Apex",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/apex",
          "hosted_url": "https://somebody.github.com/apex",
          "author_id": 24,
          "collection_id": 3
        },
        {
          "name": "Gaptec",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/gaptec",
          "hosted_url": "https://somebody.github.com/gaptec",
          "author_id": 6,
          "collection_id": 2
        },
        {
          "name": "Steeltab",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/steeltab",
          "hosted_url": "https://somebody.github.com/steeltab",
          "author_id": 26,
          "collection_id": 2
        },
        {
          "name": "Geekola",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/geekola",
          "hosted_url": "https://somebody.github.com/geekola",
          "author_id": 23,
          "collection_id": 2
        },
        {
          "name": "Zilodyne",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/zilodyne",
          "hosted_url": "https://somebody.github.com/zilodyne",
          "author_id": 1,
          "collection_id": 2
        },
        {
          "name": "Prismatic",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/prismatic",
          "hosted_url": "https://somebody.github.com/prismatic",
          "author_id": 4,
          "collection_id": 2
        },
        {
          "name": "Oulu",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/oulu",
          "hosted_url": "https://somebody.github.com/oulu",
          "author_id": 6,
          "collection_id": 5
        },
        {
          "name": "Netplode",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/netplode",
          "hosted_url": "https://somebody.github.com/netplode",
          "author_id": 14,
          "collection_id": 2
        },
        {
          "name": "Zilla",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/zilla",
          "hosted_url": "https://somebody.github.com/zilla",
          "author_id": 10,
          "collection_id": 3
        },
        {
          "name": "Farmage",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/farmage",
          "hosted_url": "https://somebody.github.com/farmage",
          "author_id": 8,
          "collection_id": 6
        },
        {
          "name": "Daido",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/daido",
          "hosted_url": "https://somebody.github.com/daido",
          "author_id": 6,
          "collection_id": 1
        },
        {
          "name": "Techmania",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/techmania",
          "hosted_url": "https://somebody.github.com/techmania",
          "author_id": 3,
          "collection_id": 1
        },
        {
          "name": "Quintity",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/quintity",
          "hosted_url": "https://somebody.github.com/quintity",
          "author_id": 29,
          "collection_id": 3
        },
        {
          "name": "Jimbies",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/jimbies",
          "hosted_url": "https://somebody.github.com/jimbies",
          "author_id": 10,
          "collection_id": 3
        },
        {
          "name": "Ronbert",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/ronbert",
          "hosted_url": "https://somebody.github.com/ronbert",
          "author_id": 6,
          "collection_id": 4
        },
        {
          "name": "Endipin",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/endipin",
          "hosted_url": "https://somebody.github.com/endipin",
          "author_id": 3,
          "collection_id": 4
        },
        {
          "name": "Slofast",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/slofast",
          "hosted_url": "https://somebody.github.com/slofast",
          "author_id": 27,
          "collection_id": 4
        },
        {
          "name": "Skinserve",
          "img_url": "http://via.placeholder.com/350x150",
          "description": "Sit in voluptate labore nisi elit ut. Aliqua duis minim irure elit ex eu dolor esse.",
          "github_url": "https://www.github.com/somebody/skinserve",
          "hosted_url": "https://somebody.github.com/skinserve",
          "author_id": 7,
          "collection_id": 5
        }
      ])
    })
}
