exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        {
          "name": "Namebox Academy"
        },
        {
          "name": "Cipromox School"
        },
        {
          "name": "Plutorque School"
        },
        {
          "name": "Roughies Academy"
        },
        {
          "name": "Magnafone Academy"
        },
        {
          "name": "Isologica Academy"
        },
        {
          "name": "Beadzza Academy"
        },
        {
          "name": "Centregy School"
        },
        {
          "name": "Bolax Academy"
        },
        {
          "name": "Neptide School"
        },
        {
          "name": "Kongle Prep"
        },
        {
          "name": "Spacewax School"
        },
        {
          "name": "Zilla Academy"
        },
        {
          "name": "Slax Prep"
        },
        {
          "name": "Pholio Prep"
        },
        {
          "name": "Accusage School"
        },
        {
          "name": "Gallaxia Prep"
        },
        {
          "name": "Stelaecor Prep"
        },
        {
          "name": "Digigen School"
        },
        {
          "name": "Genekom School"
        }
      ]);
    });
};
