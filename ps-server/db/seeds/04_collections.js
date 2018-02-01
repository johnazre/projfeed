exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections').del()
    .then(function() {
      // Inserts seed entries
      return knex('collections').insert([
        {
          "school_id": 1,
          "name": "g73 Q2 Projects"
        },
        {
          "school_id": 1,
          "name": "g76 Q1 Projects"
        }
      ]);
    });
};
