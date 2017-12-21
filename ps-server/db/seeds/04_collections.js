exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections').del()
    .then(function() {
      // Inserts seed entries
      return knex('collections').insert([{
          "school_id": 10,
          "name": "cillum elit"
        },
        {
          "school_id": 15,
          "name": "amet eu"
        },
        {
          "school_id": 11,
          "name": "quis sit"
        },
        {
          "school_id": 16,
          "name": "velit duis"
        },
        {
          "school_id": 2,
          "name": "in anim"
        },
        {
          "school_id": 11,
          "name": "veniam qui"
        },
        {
          "school_id": 15,
          "name": "aute labore"
        },
        {
          "school_id": 8,
          "name": "cupidatat in"
        },
        {
          "school_id": 19,
          "name": "cupidatat sunt"
        },
        {
          "school_id": 9,
          "name": "do duis"
        },
        {
          "school_id": 11,
          "name": "mollit est"
        },
        {
          "school_id": 12,
          "name": "quis proident"
        },
        {
          "school_id": 14,
          "name": "elit nisi"
        },
        {
          "school_id": 8,
          "name": "amet eu"
        },
        {
          "school_id": 15,
          "name": "ut esse"
        },
        {
          "school_id": 17,
          "name": "velit ad"
        },
        {
          "school_id": 1,
          "name": "non minim"
        },
        {
          "school_id": 16,
          "name": "eiusmod non"
        },
        {
          "school_id": 10,
          "name": "laborum consequat"
        },
        {
          "school_id": 10,
          "name": "dolore magna"
        }
      ]);
    });
};
