
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
          "username": "barrettguerrero",
          "email": "creynolds@sulfax.com",
          "password": "hello"
        },
        {
          "name": "Cleo Ware",
          "role_id": 1,
          "school_id": 4,
          "username": "cleoware",
          "email": "ssimmons@geekmosis.com",
          "password": "hello"
        },
        {
          "name": "Chasity Faulkner",
          "role_id": 2,
          "school_id": 5,
          "username": "chasityfaulkner",
          "email": "hengland@orbin.com",
          "password": "hello"
        },
        {
          "name": "Dillon Lamb",
          "role_id": 1,
          "school_id": 13,
          "username": "dillonlamb",
          "email": "mhenry@suretech.com",
          "password": "hello"
        },
        {
          "name": "Wilkins Herrera",
          "role_id": 1,
          "school_id": 7,
          "username": "wilkinsherrera",
          "email": "bgiles@inventure.com",
          "password": "hello"
        },
        {
          "name": "Tanner Gibson",
          "role_id": 2,
          "school_id": 14,
          "username": "tannergibson",
          "email": "mmoreno@tropolis.com",
          "password": "hello"
        },
        {
          "name": "Perry Branch",
          "role_id": 1,
          "school_id": 15,
          "username": "perrybranch",
          "email": "mgutierrez@snacktion.com",
          "password": "hello"
        },
        {
          "name": "Aileen Potts",
          "role_id": 2,
          "school_id": 6,
          "username": "aileenpotts",
          "email": "jjackson@callflex.com",
          "password": "hello"
        },
        {
          "name": "Rosa Mann",
          "role_id": 1,
          "school_id": 18,
          "username": "rosamann",
          "email": "wwynn@kineticut.com",
          "password": "hello"
        },
        {
          "name": "Neva Osborn",
          "role_id": 1,
          "school_id": 11,
          "username": "nevaosborn",
          "email": "lgreene@anixang.com",
          "password": "hello"
        },
        {
          "name": "Holcomb Neal",
          "role_id": 2,
          "school_id": 2,
          "username": "holcombneal",
          "email": "mcollier@keengen.com",
          "password": "hello"
        },
        {
          "name": "Luis Abray",
          "role_id": 2,
          "school_id": 8,
          "username": "luisabray",
          "email": "ffigueroa@syntac.com",
          "password": "hello"
        },
        {
          "name": "Maggie Fleming",
          "role_id": 2,
          "school_id": 17,
          "username": "maggiefleming",
          "email": "gjoyner@paragonia.com",
          "password": "hello"
        },
        {
          "name": "Ray Best",
          "role_id": 2,
          "school_id": 6,
          "username": "raybest",
          "email": "bbarber@extrawear.com",
          "password": "hello"
        },
        {
          "name": "Rae Williams",
          "role_id": 1,
          "school_id": 12,
          "username": "raewilliams",
          "email": "jholman@ginkle.com",
          "password": "hello"
        },
        {
          "name": "Dina Nguyen",
          "role_id": 2,
          "school_id": 15,
          "username": "dinanguyen",
          "email": "vroberson@injoy.com",
          "password": "hello"
        },
        {
          "name": "Ola Burns",
          "role_id": 1,
          "school_id": 13,
          "username": "olaburns",
          "email": "pdunn@tersanki.com",
          "password": "hello"
        },
        {
          "name": "Price Newman",
          "role_id": 2,
          "school_id": 13,
          "username": "pricenewman",
          "email": "therring@peticular.com",
          "password": "hello"
        },
        {
          "name": "Samantha Fowler",
          "role_id": 1,
          "school_id": 13,
          "username": "samanthafowler",
          "email": "mhuffman@hinway.com",
          "password": "hello"
        },
        {
          "name": "Deann Velez",
          "role_id": 1,
          "school_id": 3,
          "username": "deannvelez",
          "email": "arose@snorus.com",
          "password": "hello"
        },
        {
          "name": "Alisha Harrison",
          "role_id": 2,
          "school_id": 13,
          "username": "alishaharrison",
          "email": "moconnor@scentric.com",
          "password": "hello"
        },
        {
          "name": "Pate Parks",
          "role_id": 2,
          "school_id": 10,
          "username": "pateparks",
          "email": "nchase@xixan.com",
          "password": "hello"
        },
        {
          "name": "Schroder Butler",
          "role_id": 2,
          "school_id": 12,
          "username": "schroederbutler",
          "email": "alane@tripsch.com",
          "password": "hello"
        },
        {
          "name": "Lee Wyatt",
          "role_id": 1,
          "school_id": 13,
          "username": "leewyatt",
          "email": "gsnider@matrixity.com",
          "password": "hello"
        },
        {
          "name": "Georgina Sheppard",
          "role_id": 2,
          "school_id": 12,
          "username": "georginasheppard",
          "email": "bbritt@macronaut.com",
          "password": "hello"
        },
        {
          "name": "Perkins Wilkinson",
          "role_id": 1,
          "school_id": 17,
          "username": "perkinswilkinson",
          "email": "ralford@velity.com",
          "password": "hello"
        },
        {
          "name": "Moore Hall",
          "role_id": 1,
          "school_id": 10,
          "username": "moorehall",
          "email": "lratliff@multron.com",
          "password": "hello"
        },
        {
          "name": "Daniel Holt",
          "role_id": 2,
          "school_id": 10,
          "username": "danielholt",
          "email": "jbarrera@senmao.com",
          "password": "hello"
        },
        {
          "name": "Giles Bailey",
          "role_id": 1,
          "school_id": 12,
          "username": "gilesbailey",
          "email": "ocarey@cablam.com",
          "password": "hello"
        },
        {
          "name": "Melendez McKee",
          "role_id": 2,
          "school_id": 20,
          "username": "melendezmckee",
          "email": "lphillips@pearlesex.com",
          "password": "hello"
        }
      ]);
    });
};
