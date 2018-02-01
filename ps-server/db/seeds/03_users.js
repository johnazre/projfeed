
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "name": "John Armbruster",
          "role_id": 3,
          "school_id": 1,
          "email": "john.armbruster@galvanize.com",
          "password": "$2a$10$esfVL7MphRpegmpJ2.nNCODDnLE4qfnwUYVDc0npHbvpuMyPjnU3u"
        },
        {
          "name": "Jeff Klier",
          "role_id": 3,
          "school_id": 1,
          "email": "jeff.klier@galvanize.com",
          "password": "$2a$10$esfVL7MphRpegmpJ2.nNCODDnLE4qfnwUYVDc0npHbvpuMyPjnU3u"
        },
        {
          "name": "Nmuta Jones",
          "role_id": 3,
          "school_id": 1,
          "email": "nmuta.jones@galvanize.com",
          "password": "$2a$10$esfVL7MphRpegmpJ2.nNCODDnLE4qfnwUYVDc0npHbvpuMyPjnU3u"
        },
        {
          "name": "Troy Amelotte",
          "role_id": 3,
          "school_id": 1,
          "email": "troy.amelotte@galvanize.com",
          "password": "$2a$10$esfVL7MphRpegmpJ2.nNCODDnLE4qfnwUYVDc0npHbvpuMyPjnU3u"
        },
        {
          "name": "Meryl Krich",
          "role_id": 3,
          "school_id": 1,
          "email": "meryl.krich@galvanize.com",
          "password": "$2a$10$esfVL7MphRpegmpJ2.nNCODDnLE4qfnwUYVDc0npHbvpuMyPjnU3u"
        },
        
      ]);
    });
};
