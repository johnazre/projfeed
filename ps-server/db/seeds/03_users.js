
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "role_id": 3,
          "school_id": 2,
          "username": "barrettguerrero",
          "email": "creynolds@sulfax.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 4,
          "username": "cleoware",
          "email": "ssimmons@geekmosis.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 5,
          "username": "chasityfaulkner",
          "email": "hengland@orbin.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 13,
          "username": "dillonlamb",
          "email": "mhenry@suretech.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 7,
          "username": "wilkinsherrera",
          "email": "bgiles@inventure.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 14,
          "username": "tannergibson",
          "email": "mmoreno@tropolis.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 15,
          "username": "perrybranch",
          "email": "mgutierrez@snacktion.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 6,
          "username": "aileenpotts",
          "email": "jjackson@callflex.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 18,
          "username": "rosamann",
          "email": "wwynn@kineticut.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 11,
          "username": "nevaosborn",
          "email": "lgreene@anixang.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 2,
          "username": "holcombneal",
          "email": "mcollier@keengen.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 8,
          "username": "luisabray",
          "email": "ffigueroa@syntac.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 17,
          "username": "maggiefleming",
          "email": "gjoyner@paragonia.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 6,
          "username": "raybest",
          "email": "bbarber@extrawear.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 12,
          "username": "raewilliams",
          "email": "jholman@ginkle.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 15,
          "username": "dinanguyen",
          "email": "vroberson@injoy.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 13,
          "username": "olaburns",
          "email": "pdunn@tersanki.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 13,
          "username": "pricenewman",
          "email": "therring@peticular.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 13,
          "username": "samanthafowler",
          "email": "mhuffman@hinway.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 3,
          "username": "deannvelez",
          "email": "arose@snorus.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 13,
          "username": "alishaharrison",
          "email": "moconnor@scentric.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 10,
          "username": "pateparks",
          "email": "nchase@xixan.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 12,
          "username": "schroederbutler",
          "email": "alane@tripsch.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 13,
          "username": "leewyatt",
          "email": "gsnider@matrixity.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 12,
          "username": "georginasheppard",
          "email": "bbritt@macronaut.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 17,
          "username": "perkinswilkinson",
          "email": "ralford@velity.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 10,
          "username": "moorehall",
          "email": "lratliff@multron.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 10,
          "username": "danielholt",
          "email": "jbarrera@senmao.com",
          "password": "hello"
        },
        {
          "role_id": 1,
          "school_id": 12,
          "username": "gilesbailey",
          "email": "ocarey@cablam.com",
          "password": "hello"
        },
        {
          "role_id": 2,
          "school_id": 20,
          "username": "melendezmckee",
          "email": "lphillips@pearlesex.com",
          "password": "hello"
        }
      ]);
    });
};
