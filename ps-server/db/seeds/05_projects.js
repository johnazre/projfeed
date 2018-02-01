
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
        }
      ])
    })
}
