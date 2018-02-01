exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedbacks').del()
    .then(function() {
      // Inserts seed entries
      return knex('feedbacks').insert([]);
    });
};
