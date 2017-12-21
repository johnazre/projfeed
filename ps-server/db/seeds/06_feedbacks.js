exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feedbacks').del()
    .then(function() {
      // Inserts seed entries
      return knex('feedbacks').insert([{
          "author_id": 12,
          "project_id": 10,
          "warm_fb": "Laboris exercitation ullamco amet ullamco enim. Officia et nulla dolore labore nostrud.",
          "cool_fb": "Laboris exercitation ullamco amet ullamco enim. Officia et nulla dolore labore nostrud."

        },
        {
          "author_id": 13,
          "project_id": 7,
          "warm_fb": "Proident adipisicing commodo proident esse qui officia anim ullamco nostrud cupidatat enim. Eu anim proident Lorem pariatur quis anim sunt occaecat.",
          "cool_fb": "Proident adipisicing commodo proident esse qui officia anim ullamco nostrud cupidatat enim. Eu anim proident Lorem pariatur quis anim sunt occaecat."

        },
        {
          "author_id": 3,
          "project_id": 1,
          "warm_fb": "Ex eiusmod anim ullamco ut ullamco fugiat duis ut anim sunt pariatur. Amet et ut duis proident enim.",
          "cool_fb": "Ex eiusmod anim ullamco ut ullamco fugiat duis ut anim sunt pariatur. Amet et ut duis proident enim."

        },
        {
          "author_id": 11,
          "project_id": 6,
          "warm_fb": "Ex do elit est duis ea cupidatat sit velit ea anim. Nulla qui aliquip exercitation do eu elit.",
          "cool_fb": "Ex do elit est duis ea cupidatat sit velit ea anim. Nulla qui aliquip exercitation do eu elit."

        },
        {
          "author_id": 1,
          "project_id": 8,
          "warm_fb": "Laborum aliquip veniam reprehenderit voluptate tempor ad pariatur ipsum incididunt esse minim. Labore consectetur laboris elit sunt consequat cupidatat veniam deserunt id nisi consectetur.",
          "cool_fb": "Laborum aliquip veniam reprehenderit voluptate tempor ad pariatur ipsum incididunt esse minim. Labore consectetur laboris elit sunt consequat cupidatat veniam deserunt id nisi consectetur."

        },
        {
          "author_id": 10,
          "project_id": 18,
          "warm_fb": "Aute dolor magna eu incididunt pariatur non adipisicing est. Cillum anim aute proident laboris minim.",
          "cool_fb": "Aute dolor magna eu incididunt pariatur non adipisicing est. Cillum anim aute proident laboris minim."

        },
        {
          "author_id": 7,
          "project_id": 2,
          "warm_fb": "Proident aliqua cillum ullamco dolor nisi exercitation ut nisi esse exercitation nulla. Consectetur officia laboris et excepteur nulla aliqua commodo esse ut veniam dolor sit in nulla.",
          "cool_fb": "Proident aliqua cillum ullamco dolor nisi exercitation ut nisi esse exercitation nulla. Consectetur officia laboris et excepteur nulla aliqua commodo esse ut veniam dolor sit in nulla."

        },
        {
          "author_id": 14,
          "project_id": 6,
          "warm_fb": "Consequat est elit nulla duis voluptate nulla mollit nostrud commodo sunt dolor eu eu. Eiusmod irure tempor sit ad laboris commodo consectetur nulla cillum.",
          "cool_fb": "Consequat est elit nulla duis voluptate nulla mollit nostrud commodo sunt dolor eu eu. Eiusmod irure tempor sit ad laboris commodo consectetur nulla cillum."

        },
        {
          "author_id": 14,
          "project_id": 3,
          "warm_fb": "Id ut Lorem ut non consectetur voluptate. Tempor magna non officia minim aliquip duis reprehenderit id ea esse aliquip.",
          "cool_fb": "Id ut Lorem ut non consectetur voluptate. Tempor magna non officia minim aliquip duis reprehenderit id ea esse aliquip."

        },
        {
          "author_id": 2,
          "project_id": 6,
          "warm_fb": "Aliqua Lorem aliqua tempor dolor ad nulla aliqua consectetur nisi commodo dolore. In laborum id proident sint elit exercitation.",
          "cool_fb": "Aliqua Lorem aliqua tempor dolor ad nulla aliqua consectetur nisi commodo dolore. In laborum id proident sint elit exercitation."

        },
        {
          "author_id": 5,
          "project_id": 14,
          "warm_fb": "Pariatur cillum exercitation voluptate laboris ad sit proident ut mollit duis ea enim sint ea. Et ea id consequat anim deserunt ad commodo in veniam enim ex enim commodo.",
          "cool_fb": "Pariatur cillum exercitation voluptate laboris ad sit proident ut mollit duis ea enim sint ea. Et ea id consequat anim deserunt ad commodo in veniam enim ex enim commodo."

        },
        {
          "author_id": 16,
          "project_id": 4,
          "warm_fb": "Id ullamco qui culpa exercitation aute irure fugiat. Lorem magna mollit do qui elit.",
          "cool_fb": "Id ullamco qui culpa exercitation aute irure fugiat. Lorem magna mollit do qui elit."

        },
        {
          "author_id": 15,
          "project_id": 15,
          "warm_fb": "Lorem fugiat sint irure duis quis in minim ex laboris qui. Do Lorem eu amet sint laborum ipsum sit laboris et aliqua labore.",
          "cool_fb": "Lorem fugiat sint irure duis quis in minim ex laboris qui. Do Lorem eu amet sint laborum ipsum sit laboris et aliqua labore."

        },
        {
          "author_id": 18,
          "project_id": 14,
          "warm_fb": "Non do commodo eiusmod in non deserunt culpa id mollit. Veniam ullamco occaecat Lorem Lorem laborum anim.",
          "cool_fb": "Non do commodo eiusmod in non deserunt culpa id mollit. Veniam ullamco occaecat Lorem Lorem laborum anim."

        },
        {
          "author_id": 12,
          "project_id": 13,
          "warm_fb": "Minim tempor nulla minim sit veniam anim cillum sit aliquip qui amet qui consequat irure. Dolor ad nostrud esse anim proident voluptate esse labore tempor sit incididunt.",
          "cool_fb": "Minim tempor nulla minim sit veniam anim cillum sit aliquip qui amet qui consequat irure. Dolor ad nostrud esse anim proident voluptate esse labore tempor sit incididunt."

        },
        {
          "author_id": 19,
          "project_id": 3,
          "warm_fb": "Aute reprehenderit dolor culpa nulla consectetur nulla. Ullamco excepteur enim duis duis aliquip excepteur exercitation et.",
          "cool_fb": "Aute reprehenderit dolor culpa nulla consectetur nulla. Ullamco excepteur enim duis duis aliquip excepteur exercitation et."

        },
        {
          "author_id": 18,
          "project_id": 7,
          "warm_fb": "Culpa elit sunt cillum excepteur excepteur do deserunt. Dolore eiusmod nostrud aliquip do cupidatat laboris reprehenderit aute ullamco ipsum.",
          "cool_fb": "Culpa elit sunt cillum excepteur excepteur do deserunt. Dolore eiusmod nostrud aliquip do cupidatat laboris reprehenderit aute ullamco ipsum."

        },
        {
          "author_id": 17,
          "project_id": 20,
          "warm_fb": "Do proident nostrud id ea. Dolor consequat et exercitation sunt.",
          "cool_fb": "Do proident nostrud id ea. Dolor consequat et exercitation sunt."

        },
        {
          "author_id": 3,
          "project_id": 3,
          "warm_fb": "Sit minim mollit ad aliqua. Voluptate reprehenderit labore commodo deserunt.",
          "cool_fb": "Sit minim mollit ad aliqua. Voluptate reprehenderit labore commodo deserunt."

        },
        {
          "author_id": 12,
          "project_id": 7,
          "warm_fb": "Velit nostrud magna ad deserunt pariatur quis nisi velit adipisicing cillum. Culpa incididunt velit eu proident ut dolore culpa sint.",
          "cool_fb": "Velit nostrud magna ad deserunt pariatur quis nisi velit adipisicing cillum. Culpa incididunt velit eu proident ut dolore culpa sint."

        }
      ]);
    });
};
