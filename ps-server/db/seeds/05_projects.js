
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          "name": "Strozen",
          "github_url": "https://www.github.com/somebody/strozen",
          "hosted_url": "https://somebody.github.com/strozen",
          "author_id": 1
        },
        {
          "name": "Quilm",
          "github_url": "https://www.github.com/somebody/quilm",
          "hosted_url": "https://somebody.github.com/quilm",
          "author_id": 20
        },
        {
          "name": "Apex",
          "github_url": "https://www.github.com/somebody/apex",
          "hosted_url": "https://somebody.github.com/apex",
          "author_id": 24
        },
        {
          "name": "Gaptec",
          "github_url": "https://www.github.com/somebody/gaptec",
          "hosted_url": "https://somebody.github.com/gaptec",
          "author_id": 6
        },
        {
          "name": "Steeltab",
          "github_url": "https://www.github.com/somebody/steeltab",
          "hosted_url": "https://somebody.github.com/steeltab",
          "author_id": 26
        },
        {
          "name": "Geekola",
          "github_url": "https://www.github.com/somebody/geekola",
          "hosted_url": "https://somebody.github.com/geekola",
          "author_id": 23
        },
        {
          "name": "Zilodyne",
          "github_url": "https://www.github.com/somebody/zilodyne",
          "hosted_url": "https://somebody.github.com/zilodyne",
          "author_id": 1
        },
        {
          "name": "Prismatic",
          "github_url": "https://www.github.com/somebody/prismatic",
          "hosted_url": "https://somebody.github.com/prismatic",
          "author_id": 4
        },
        {
          "name": "Oulu",
          "github_url": "https://www.github.com/somebody/oulu",
          "hosted_url": "https://somebody.github.com/oulu",
          "author_id": 6
        },
        {
          "name": "Netplode",
          "github_url": "https://www.github.com/somebody/netplode",
          "hosted_url": "https://somebody.github.com/netplode",
          "author_id": 14
        },
        {
          "name": "Zilla",
          "github_url": "https://www.github.com/somebody/zilla",
          "hosted_url": "https://somebody.github.com/zilla",
          "author_id": 10
        },
        {
          "name": "Farmage",
          "github_url": "https://www.github.com/somebody/farmage",
          "hosted_url": "https://somebody.github.com/farmage",
          "author_id": 8
        },
        {
          "name": "Daido",
          "github_url": "https://www.github.com/somebody/daido",
          "hosted_url": "https://somebody.github.com/daido",
          "author_id": 6
        },
        {
          "name": "Techmania",
          "github_url": "https://www.github.com/somebody/techmania",
          "hosted_url": "https://somebody.github.com/techmania",
          "author_id": 3
        },
        {
          "name": "Quintity",
          "github_url": "https://www.github.com/somebody/quintity",
          "hosted_url": "https://somebody.github.com/quintity",
          "author_id": 29
        },
        {
          "name": "Jimbies",
          "github_url": "https://www.github.com/somebody/jimbies",
          "hosted_url": "https://somebody.github.com/jimbies",
          "author_id": 10
        },
        {
          "name": "Ronbert",
          "github_url": "https://www.github.com/somebody/ronbert",
          "hosted_url": "https://somebody.github.com/ronbert",
          "author_id": 6
        },
        {
          "name": "Endipin",
          "github_url": "https://www.github.com/somebody/endipin",
          "hosted_url": "https://somebody.github.com/endipin",
          "author_id": 3
        },
        {
          "name": "Slofast",
          "github_url": "https://www.github.com/somebody/slofast",
          "hosted_url": "https://somebody.github.com/slofast",
          "author_id": 27
        },
        {
          "name": "Skinserve",
          "github_url": "https://www.github.com/somebody/skinserve",
          "hosted_url": "https://somebody.github.com/skinserve",
          "author_id": 7
        }
      ]);
    });
};
