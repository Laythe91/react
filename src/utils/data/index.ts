const USERS = [
    {
      "id": "67f6b65be467aa9aa98b8968",
      "gender": "female",
      "picture": "http://placehold.it/32x32",
      "firstName": "Lottie",
      "lastName": "Saunders",
      "birthDate": "2021-08-18T05:04:44 -00:00",
      "email": "lottiesaunders@roboid.com",
      "phone": "+1 (931) 552-3155",
      "address": "468 Colonial Road, Axis, Hawaii, 7266",
      "about": "ad irure incididunt laboris amet minim non aliquip mollit occaecat"
    },
    {
      "id": "67f6b65bb3077ea197134922",
      "gender": "female",
      "picture": "http://placehold.it/32x32",
      "firstName": "Debra",
      "lastName": "Mendez",
      "birthDate": "2023-07-30T07:27:09 -00:00",
      "email": "debramendez@roboid.com",
      "phone": "+1 (831) 484-3507",
      "address": "813 Garfield Place, Coleville, District Of Columbia, 7502",
      "about": "aliqua mollit et officia ad cupidatat aute esse magna enim"
    },
    {
      "id": "67f6b65bcb55b2e3bf57db53",
      "gender": "female",
      "picture": "http://placehold.it/32x32",
      "firstName": "Letha",
      "lastName": "Sutton",
      "birthDate": "2024-05-29T04:23:34 -00:00",
      "email": "lethasutton@roboid.com",
      "phone": "+1 (931) 571-3324",
      "address": "940 Bryant Street, Jacumba, Mississippi, 2123",
      "about": "anim culpa aute officia consequat incididunt ex esse labore ipsum"
    },
    {
      "id": "67f6b65b6ae1c0b3209526e0",
      "gender": "female",
      "picture": "http://placehold.it/32x32",
      "firstName": "Holden",
      "lastName": "Allison",
      "birthDate": "2024-03-26T04:51:15 -00:00",
      "email": "holdenallison@roboid.com",
      "phone": "+1 (809) 431-3241",
      "address": "456 Sackman Street, Edgewater, Iowa, 4323",
      "about": "pariatur irure eu esse mollit ea mollit aute laboris amet"
    },
    {
      "id": "67f6b65be1a3d8e742674d24",
      "gender": "male",
      "picture": "http://placehold.it/32x32",
      "firstName": "Janie",
      "lastName": "Bright",
      "birthDate": "2020-06-04T08:31:05 -00:00",
      "email": "janiebright@roboid.com",
      "phone": "+1 (866) 488-3242",
      "address": "207 Little Street, Russellville, Arkansas, 1483",
      "about": "reprehenderit do voluptate sunt adipisicing amet tempor tempor reprehenderit aute"
    },
    {
      "id": "67f6b65b151f5f68e2862be5",
      "gender": "female",
      "picture": "http://placehold.it/32x32",
      "firstName": "Cheryl",
      "lastName": "Mitchell",
      "birthDate": "2019-06-27T04:16:47 -00:00",
      "email": "cherylmitchell@roboid.com",
      "phone": "+1 (919) 430-3413",
      "address": "357 Poly Place, Katonah, Alabama, 9715",
      "about": "consequat proident cupidatat non ipsum voluptate in elit mollit proident"
    },
    {
      "id": "67f6b65b70da00664a1995f8",
      "gender": "female",
      "picture": "http://placehold.it/32x32",
      "firstName": "Burks",
      "lastName": "Dorsey",
      "birthDate": "2020-05-15T11:31:58 -00:00",
      "email": "burksdorsey@roboid.com",
      "phone": "+1 (940) 597-2790",
      "address": "934 Fulton Street, Geyserville, Kentucky, 3551",
      "about": "dolor fugiat exercitation reprehenderit nulla duis quis adipisicing laboris adipisicing"
    },
    {
      "id": "67f6b65b43a4a8c2f6892e5b",
      "gender": "male",
      "picture": "http://placehold.it/32x32",
      "firstName": "Briana",
      "lastName": "Hudson",
      "birthDate": "2024-07-04T05:16:55 -00:00",
      "email": "brianahudson@roboid.com",
      "phone": "+1 (944) 577-3797",
      "address": "791 Jerome Street, Lookingglass, Northern Mariana Islands, 9543",
      "about": "ut cupidatat pariatur deserunt in cupidatat laboris exercitation duis aute"
    },
    {
      "id": "67f6b65bcc21cb3f3bd25e4c",
      "gender": "female",
      "picture": "http://placehold.it/32x32",
      "firstName": "Margarita",
      "lastName": "Brewer",
      "birthDate": "2019-04-15T10:13:37 -00:00",
      "email": "margaritabrewer@roboid.com",
      "phone": "+1 (804) 440-2448",
      "address": "385 Wakeman Place, Onton, Michigan, 7058",
      "about": "culpa minim laborum exercitation ex enim nisi eu laboris enim"
    },
    {
      "id": "67f6b65b72d520c3c1a4bca8",
      "gender": "female",
      "picture": "http://placehold.it/32x32",
      "firstName": "Trudy",
      "lastName": "Acevedo",
      "birthDate": "2020-06-09T10:04:04 -00:00",
      "email": "trudyacevedo@roboid.com",
      "phone": "+1 (923) 525-2688",
      "address": "418 Landis Court, Caroleen, Washington, 9940",
      "about": "culpa sint consequat eu et ullamco dolore ipsum anim laboris"
    }
  ]


  const MESSAGES = [
    {
      "id": "67f5af1ee6057313e8c75748",
      "texte": "quis ullamco eu do aute sit aliqua exercitation tempor exercitation quis cupidatat consequat laboris nisi voluptate incididunt ipsum labore deserunt cupidatat consequat eu aliquip adipisicing consequat eiusmod proident quis in"
    },
    {
      "id": "67f5af1e9da405b11732cd56",
      "texte": "deserunt labore sunt amet labore et officia nostrud enim dolore elit sint ut Lorem culpa qui fugiat duis laboris mollit dolore sint ea occaecat incididunt excepteur enim dolor dolore nisi"
    },
    {
      "id": "67f5af1e8b52f56631719eb4",
      "texte": "anim duis ullamco proident nulla incididunt eiusmod pariatur eiusmod sunt voluptate dolore dolor consequat sunt nisi ad consectetur amet consectetur ut irure tempor enim culpa laboris qui commodo fugiat ullamco"
    },
    {
      "id": "67f5af1ebe9000d6ebefc0af",
      "texte": "do proident aute laborum officia veniam Lorem consequat elit labore et elit cillum exercitation et tempor consequat non elit dolor nostrud eiusmod consequat est voluptate voluptate in do sit incididunt"
    },
    {
      "id": "67f5af1ed308b816a99043a3",
      "texte": "amet ex tempor labore cillum laborum et enim labore aliquip cupidatat nulla veniam commodo aliquip nisi laboris quis consequat velit officia sunt nulla id aute nostrud proident aliquip ea esse"
    },
    {
      "id": "67f5af1ebab2654b60d40c81",
      "texte": "ex enim dolore sunt elit cupidatat excepteur ipsum nisi adipisicing fugiat exercitation id velit quis aute exercitation reprehenderit Lorem ipsum dolore duis adipisicing adipisicing irure consectetur adipisicing fugiat ex ea"
    },
    {
      "id": "67f5af1e189cf36a6d636e94",
      "texte": "quis tempor ut commodo consequat nostrud amet est culpa quis aliqua anim Lorem officia commodo consequat esse irure consequat cillum aliquip ullamco et ex et magna laborum ullamco laboris ad"
    },
    {
      "id": "67f5af1e3ea5d5288663a790",
      "texte": "labore officia occaecat dolore amet ad ut ad deserunt occaecat nostrud excepteur ea mollit quis est dolore incididunt minim non veniam occaecat Lorem dolor magna ad sunt incididunt consectetur proident"
    },
    {
      "id": "67f5af1e8c4facf636146a29",
      "texte": "mollit reprehenderit duis nisi sunt aliquip id cupidatat commodo culpa occaecat cupidatat reprehenderit magna occaecat consequat qui occaecat ea eiusmod cillum consectetur excepteur veniam in commodo aute commodo adipisicing non"
    },
    {
      "id": "67f5af1e22009d8431d2f103",
      "texte": "nisi duis do fugiat quis voluptate aliqua exercitation sit esse sunt pariatur veniam cupidatat occaecat do irure sint nostrud sint eiusmod minim esse nisi labore veniam aute proident et labore"
    },
    {
      "id": "67f5af1eea58a5ad55dbbc55",
      "texte": "officia labore laboris dolore proident est voluptate excepteur ea pariatur anim magna ad dolor laboris anim veniam do nulla cupidatat nostrud excepteur cillum quis labore ipsum laboris exercitation pariatur in"
    },
    {
      "id": "67f5af1e8d7a67e19fbc62d2",
      "texte": "fugiat voluptate irure ut cupidatat eu cupidatat commodo pariatur amet adipisicing enim aliquip sunt ad quis proident minim ea aute ullamco fugiat aliqua magna occaecat pariatur aliqua amet ex ut"
    },
    {
      "id": "67f5af1e3d3e09106b6026b1",
      "texte": "tempor exercitation et non ut tempor culpa ad magna amet adipisicing et qui veniam non ea reprehenderit aliquip aute fugiat nulla reprehenderit do nostrud cupidatat consectetur ut quis quis cupidatat"
    },
    {
      "id": "67f5af1ee2bb3f6b4ac7f621",
      "texte": "anim in excepteur consectetur veniam est et occaecat minim ad magna amet est culpa commodo est aliquip quis eiusmod aliqua sit qui consectetur adipisicing labore eiusmod ea deserunt mollit eiusmod"
    },
    {
      "id": "67f5af1e299a0564568318de",
      "texte": "ea proident voluptate eiusmod reprehenderit ullamco qui est occaecat ad veniam esse voluptate nisi reprehenderit et consectetur ad nisi tempor nostrud aliqua dolore labore est minim eu consectetur laborum culpa"
    },
    {
      "id": "67f5af1e4734587d4d2c857d",
      "texte": "esse fugiat labore sunt Lorem culpa anim pariatur sunt et eiusmod cillum ullamco deserunt dolore officia sit duis anim ut ea pariatur amet eu culpa amet ullamco ea amet veniam"
    },
    {
      "id": "67f5af1e1832cff67412ed9e",
      "texte": "cillum dolor enim Lorem do voluptate labore mollit veniam nostrud est id consequat nostrud aute ea proident irure esse ullamco in reprehenderit adipisicing amet irure est laboris nostrud id tempor"
    },
    {
      "id": "67f5af1e7dd3058b866d40bd",
      "texte": "quis laborum enim culpa aute irure elit esse commodo amet id mollit esse tempor commodo magna voluptate id minim sit magna ea est sint laboris dolor enim non sunt aliqua"
    },
    {
      "id": "67f5af1e57840733e921eb7a",
      "texte": "eu est esse nulla nostrud duis enim nulla consectetur velit irure minim culpa consectetur amet deserunt id et amet commodo incididunt consectetur amet adipisicing ad in ullamco dolor sint voluptate"
    },
    {
      "id": "67f5af1e945926d8373aab97",
      "texte": "dolor sint aliquip fugiat eu exercitation veniam Lorem sit eu commodo laboris cupidatat fugiat sunt commodo sit reprehenderit mollit dolor esse duis nostrud aliquip commodo esse exercitation aute dolor enim"
    },
    {
      "id": "67f5af1e6b981a8bf315435b",
      "texte": "ex velit do amet est quis consequat veniam excepteur ea proident dolore in cillum voluptate ad consectetur adipisicing labore reprehenderit consectetur enim deserunt laborum est qui esse sunt voluptate id"
    },
    {
      "id": "67f5af1ea6f93b99c756ca12",
      "texte": "consectetur cillum commodo qui consequat qui labore nostrud exercitation commodo in ea nulla quis aliquip ipsum aliquip laborum sunt exercitation cupidatat voluptate reprehenderit laboris ullamco magna non et dolore commodo"
    },
    {
      "id": "67f5af1ed204f6278e66d73e",
      "texte": "eiusmod consequat id consectetur aliqua eiusmod proident ex tempor incididunt ipsum duis cillum nostrud aliquip minim dolor eu occaecat id tempor adipisicing excepteur cupidatat aliqua laborum laborum sint veniam ut"
    },
    {
      "id": "67f5af1efc5b1025bf659c7b",
      "texte": "et ut commodo proident laborum irure cillum enim consectetur non ex cillum ex anim sint commodo tempor laborum et sunt reprehenderit officia id Lorem consectetur velit ipsum Lorem amet fugiat"
    }
  ];
  

  export {USERS, MESSAGES}