
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "name": "Barrett Guerrero",
          "role_id": 3,
          "school_id": 2,
          "email": "creynolds@sulfax.com",
          "password": "hello"
        },
        {
          "name": "Cleo Ware",
          "role_id": 1,
          "school_id": 4,
          "email": "ssimmons@geekmosis.com",
          "password": "hello"
        },
        {
          "name": "Chasity Faulkner",
          "role_id": 2,
          "school_id": 5,
          "email": "hengland@orbin.com",
          "password": "hello"
        },
        {
          "name": "Dillon Lamb",
          "role_id": 1,
          "school_id": 13,
          "email": "mhenry@suretech.com",
          "password": "hello"
        },
        {
          "name": "Wilkins Herrera",
          "role_id": 1,
          "school_id": 7,
          "email": "bgiles@inventure.com",
          "password": "hello"
        },
        {
          "name": "Tanner Gibson",
          "role_id": 2,
          "school_id": 14,
          "email": "mmoreno@tropolis.com",
          "password": "hello"
        },
        {
          "name": "Perry Branch",
          "role_id": 1,
          "school_id": 15,
          "email": "mgutierrez@snacktion.com",
          "password": "hello"
        },
        {
          "name": "Aileen Potts",
          "role_id": 2,
          "school_id": 6,
          "email": "jjackson@callflex.com",
          "password": "hello"
        },
        {
          "name": "Rosa Mann",
          "role_id": 1,
          "school_id": 18,
          "email": "wwynn@kineticut.com",
          "password": "hello"
        },
        {
          "name": "Neva Osborn",
          "role_id": 1,
          "school_id": 11,
          "email": "lgreene@anixang.com",
          "password": "hello"
        },
        {
          "name": "Holcomb Neal",
          "role_id": 2,
          "school_id": 2,
          "email": "mcollier@keengen.com",
          "password": "hello"
        },
        {
          "name": "Luis Abray",
          "role_id": 2,
          "school_id": 8,
          "email": "ffigueroa@syntac.com",
          "password": "hello"
        },
        {
          "name": "Maggie Fleming",
          "role_id": 2,
          "school_id": 17,
          "email": "gjoyner@paragonia.com",
          "password": "hello"
        },
        {
          "name": "Ray Best",
          "role_id": 2,
          "school_id": 6,
          "email": "bbarber@extrawear.com",
          "password": "hello"
        },
        {
          "name": "Rae Williams",
          "role_id": 1,
          "school_id": 12,
          "email": "jholman@ginkle.com",
          "password": "hello"
        },
        {
          "name": "Dina Nguyen",
          "role_id": 2,
          "school_id": 15,
          "email": "vroberson@injoy.com",
          "password": "hello"
        },
        {
          "name": "Ola Burns",
          "role_id": 1,
          "school_id": 13,
          "email": "pdunn@tersanki.com",
          "password": "hello"
        },
        {
          "name": "Price Newman",
          "role_id": 2,
          "school_id": 13,
          "email": "therring@peticular.com",
          "password": "hello"
        },
        {
          "name": "Samantha Fowler",
          "role_id": 1,
          "school_id": 13,
          "email": "mhuffman@hinway.com",
          "password": "hello"
        },
        {
          "name": "Deann Velez",
          "role_id": 1,
          "school_id": 3,
          "email": "arose@snorus.com",
          "password": "hello"
        },
        {
          "name": "Alisha Harrison",
          "role_id": 2,
          "school_id": 13,
          "email": "moconnor@scentric.com",
          "password": "hello"
        },
        {
          "name": "Pate Parks",
          "role_id": 2,
          "school_id": 10,
          "email": "nchase@xixan.com",
          "password": "hello"
        },
        {
          "name": "Schroder Butler",
          "role_id": 2,
          "school_id": 12,
          "email": "alane@tripsch.com",
          "password": "hello"
        },
        {
          "name": "Lee Wyatt",
          "role_id": 1,
          "school_id": 13,
          "email": "gsnider@matrixity.com",
          "password": "hello"
        },
        {
          "name": "Georgina Sheppard",
          "role_id": 2,
          "school_id": 12,
          "email": "bbritt@macronaut.com",
          "password": "hello"
        },
        {
          "name": "Perkins Wilkinson",
          "role_id": 1,
          "school_id": 17,
          "email": "ralford@velity.com",
          "password": "hello"
        },
        {
          "name": "Moore Hall",
          "role_id": 1,
          "school_id": 10,
          "email": "lratliff@multron.com",
          "password": "hello"
        },
        {
          "name": "Daniel Holt",
          "role_id": 2,
          "school_id": 10,
          "email": "jbarrera@senmao.com",
          "password": "hello"
        },
        {
          "name": "Giles Bailey",
          "role_id": 1,
          "school_id": 12,
          "email": "ocarey@cablam.com",
          "password": "hello"
        },
        {
          "name": "Melendez McKee",
          "role_id": 2,
          "school_id": 20,
          "email": "lphillips@pearlesex.com",
          "password": "hello"
        }
      ]);
    });
};
