import Messages from "./pages/Messages";

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


function App() {

  return (
    <section>
      <Messages messages={MESSAGES}/>

    </section>

  );
}

export default App
