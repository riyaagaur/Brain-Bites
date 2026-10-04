
// ============================================================
//  ANIMALS
// ============================================================
const ANIMAL_DB = {
  mammals: {
    title: "Mammals",
    prompt: "Name a mammal.",
    hint: "Lion, tiger, bear. Everyone starts there.",
    items: [
      ["dog",35],["cat",32],["lion",28],["elephant",25],["tiger",24],["horse",20],["cow",18],["bear",16],["monkey",15],
      ["giraffe",14],["zebra",13],["wolf",12],["deer",11],["rabbit",11],["pig",10],["sheep",10],["goat",9],["fox",9],
      ["kangaroo",8],["panda",8],["rhinoceros",7,["rhino"]],["hippopotamus",7,["hippo"]],["gorilla",6],["chimpanzee",6,["chimp"]],
      ["leopard",6],["cheetah",6],["camel",5],["squirrel",5],["mouse",5],["whale",5],["dolphin",5],["rat",4],["bat",4],
      ["seal",3],["otter",3],["raccoon",3],["koala",3],["skunk",2.5],["beaver",2.5],["moose",2.5],["hyena",2.5],["jaguar",2.5],
      ["elk",2],["bison",2],["buffalo",2],["llama",2],["donkey",2],["sloth",2],["antelope",1.5],["gazelle",1.5],["jackal",1.5],
      ["lynx",1.5],["cougar",1.5,["puma","mountain lion"]],["alpaca",1.5],["meerkat",1.5],["armadillo",1.5],["porcupine",1.5],
      ["hedgehog",1.5],["platypus",1.5],["orangutan",1.5],["walrus",1],["orca",1.5,["killer whale"]],["mule",1],["yak",1],
      ["wildebeest",1],["warthog",1],["mongoose",1],["badger",1],["capybara",1],["opossum",1,["possum"]],["snow leopard",1],
      ["anteater",1.2],["lemur",1.2],["baboon",1.2],["weasel",0.8],["wolverine",0.8],["ferret",0.8],["wombat",0.8],
      ["chinchilla",0.6],["pangolin",0.6],["narwhal",0.6],["tasmanian devil",0.6],["arctic fox",0.6],["flying squirrel",0.5],
      ["echidna",0.5],["gibbon",0.5],["aardvark",0.5],["beluga",0.5],["mandrill",0.4],["tapir",0.4],["quokka",0.4],["fennec fox",0.4],
      ["manatee",0.6],["marmoset",0.3],["okapi",0.3],["mink",0.3],["ocelot",0.3],["sugar glider",0.3],["dugong",0.2],["stoat",0.2],
      ["caracal",0.2],["serval",0.2],["clouded leopard",0.2],["pika",0.2],["marmot",0.2],["ibex",0.2],["springbok",0.2],
      ["sun bear",0.2],["sloth bear",0.2],["marten",0.1],["civet",0.1],["bilby",0.1],["coati",0.1],["kudu",0.1],["oryx",0.1],
      ["dik dik",0.1],["muskox",0.1],["pronghorn",0.1],["maned wolf",0.1],["spectacled bear",0.1],["vicuna",0.1,["vicuña"]],
      ["numbat",0.05],["dhole",0.05],["kinkajou",0.05],["gerenuk",0.05],["markhor",0.05],["saiga",0.05],["binturong",0.05],
      ["takin",0.02],["solenodon",0.02],["colugo",0.02],["zorilla",0.02],["olinguito",0.02]
    ]
  },
  birds: {
    title: "Birds",
    prompt: "Name a bird.",
    hint: "The sky is bigger than eagle, owl and penguin.",
    items: [
      ["eagle",25],["parrot",20],["pigeon",18],["crow",17],["owl",16],["penguin",15],["sparrow",14],["peacock",13],["chicken",13],
      ["duck",12],["ostrich",11],["flamingo",10],["swan",9],["hawk",8],["robin",8],["seagull",7,["gull"]],["falcon",7],
      ["pelican",6],["woodpecker",6],["hummingbird",6],["turkey",5],["goose",5],["vulture",5],["raven",5],["dove",4],["canary",4],
      ["finch",3],["crane",3],["heron",3],["stork",3],["kingfisher",3],["toucan",3],["emu",2.5],["blue jay",2.5],["cardinal",2.5],
      ["hornbill",2],["cuckoo",2],["nightingale",2],["magpie",2],["swallow",2],["kiwi",2],["macaw",2],["quail",1.5],["pheasant",1.5],
      ["starling",1.5],["cockatoo",1.5],["puffin",1.5],["dodo",1.5],["albatross",1.2],["condor",1],["budgerigar",1,["budgie","parakeet"]],
      ["partridge",0.8],["cassowary",0.8],["lovebird",0.8],["myna",0.8,["mynah"]],["kookaburra",0.8],["egret",0.8],["roadrunner",0.8],
      ["bird of paradise",0.6],["osprey",0.6],["kestrel",0.6],["ibis",0.6],["cormorant",0.5],["chickadee",0.5],["wren",0.5],
      ["lark",0.5],["buzzard",0.5],["oriole",0.4],["kite",0.4],["tern",0.4],["swift",0.4],["bulbul",0.3],["warbler",0.3],
      ["sandpiper",0.3],["plover",0.3],["spoonbill",0.3],["loon",0.3],["grouse",0.3],["shoebill",0.3],["nuthatch",0.2],
      ["lapwing",0.2],["grebe",0.2],["gannet",0.2],["hoopoe",0.2],["bee eater",0.2],["quetzal",0.2],["lyrebird",0.2],
      ["secretary bird",0.2],["harpy eagle",0.2],["ptarmigan",0.1],["skua",0.1],["bittern",0.1],["curlew",0.1],["oystercatcher",0.1],
      ["drongo",0.1],["kea",0.1],["kakapo",0.1],["weaver bird",0.2],["nightjar",0.1],["jacana",0.05],["godwit",0.05],
      ["sapsucker",0.05],["takahe",0.02],["potoo",0.05],["frogmouth",0.05],["hoatzin",0.05],["kagu",0.02]
    ]
  },
  sealife: {
    title: "Sea creatures",
    prompt: "Name a sea creature.",
    hint: "The ocean is 95% unexplored. Your answer shouldn't be.",
    items: [
      ["shark",30],["dolphin",26],["whale",24],["octopus",20],["jellyfish",17],["crab",16],["starfish",15],["sea turtle",14,["turtle"]],
      ["seahorse",12],["squid",10],["lobster",10],["stingray",9],["eel",8],["clownfish",8],["tuna",7],["salmon",7],["shrimp",6],
      ["swordfish",5],["seal",5],["blue whale",4],["orca",4],["walrus",4],["manta ray",3.5],["anglerfish",3],["pufferfish",3],
      ["great white shark",3],["barracuda",2.5],["narwhal",2.5],["piranha",2.5],["hammerhead shark",2.5],["whale shark",2.5],
      ["sea urchin",2],["humpback whale",2],["coral",2],["clam",2],["trout",2],["catfish",2],["cod",2],["marlin",1.5],
      ["mackerel",1.5],["sardine",1.5],["sea otter",1.5],["sea cucumber",1.5],["anemone",1.5,["sea anemone"]],["oyster",1.5],
      ["cuttlefish",1.5],["hermit crab",1.5],["electric eel",1.5],["giant squid",1.5],["sperm whale",1.5],["plankton",1.5],
      ["krill",1],["mussel",1],["scallop",1],["grouper",1],["halibut",1],["carp",1],["tilapia",1],["manatee",1],["mantis shrimp",1],
      ["beluga",1],["flying fish",1],["anchovy",1],["herring",0.8],["barnacle",0.8],["lionfish",0.8],["moray eel",0.8],
      ["blobfish",0.8],["parrotfish",0.8],["box jellyfish",0.6],["portuguese man o war",0.6],["nautilus",0.6],["horseshoe crab",0.6],
      ["sunfish",0.5,["mola mola"]],["sea slug",0.4],["dumbo octopus",0.3],["vampire squid",0.3],["lamprey",0.3],["coelacanth",0.3],
      ["colossal squid",0.3],["dugong",0.3],["nudibranch",0.3],["triggerfish",0.3],["mudskipper",0.3],["sawfish",0.3],
      ["viperfish",0.2],["hagfish",0.2],["remora",0.2],["comb jelly",0.2],["brittle star",0.2],["isopod",0.2],["wrasse",0.2],
      ["surgeonfish",0.2],["leafy sea dragon",0.3],["gulper eel",0.1],["siphonophore",0.1],["tube worm",0.1],["yeti crab",0.1],
      ["archerfish",0.1],["batfish",0.1],["amphipod",0.05],["copepod",0.05],["crinoid",0.05],["sea pen",0.05],["chambered nautilus",0.1],
      ["goblin shark",0.4],["frilled shark",0.2],["cookiecutter shark",0.1],["sea pig",0.1],["pyrosome",0.02],["salp",0.05]
    ]
  },
  insects: {
    title: "Insects & arachnids",
    prompt: "Name an insect or arachnid.",
    hint: "There are a million described species. Name one of the odd ones.",
    items: [
      ["ant",30],["bee",28],["butterfly",26],["spider",24],["mosquito",20],["fly",18],["beetle",15],["grasshopper",14],
      ["cockroach",13],["ladybug",12,["ladybird"]],["dragonfly",11],["moth",10],["wasp",10],["caterpillar",9],["cricket",8],
      ["termite",7],["scorpion",7],["centipede",6],["millipede",5],["worm",5],["tick",4],["flea",4],["praying mantis",4],
      ["firefly",4],["cicada",3],["locust",3],["tarantula",3],["bumblebee",3],["honeybee",3],["monarch butterfly",2.5],
      ["black widow",2.5],["hornet",2.5],["dung beetle",2],["stick insect",2],["bedbug",2],["aphid",1.5],["silverfish",1],
      ["earwig",1.5],["gnat",1.5],["daddy long legs",1.5],["stink bug",1.5],["weevil",1],["mayfly",1],["horsefly",1],
      ["yellowjacket",1],["maggot",1],["mite",1],["stag beetle",1],["jumping spider",1],["brown recluse",1],["wolf spider",0.8],
      ["rhinoceros beetle",0.8],["june bug",0.8],["mealworm",0.6],["lanternfly",0.6],["swallowtail",0.6],["katydid",0.4],
      ["botfly",0.5],["lacewing",0.5],["water strider",0.5],["glowworm",0.5],["luna moth",0.5],["midge",0.5],["grub",0.5],
      ["orb weaver",0.4],["huntsman spider",0.4],["funnel web spider",0.3],["camel spider",0.3],["click beetle",0.3],
      ["antlion",0.3],["assassin bug",0.3],["hercules beetle",0.3],["chigger",0.2],["trapdoor spider",0.2],["goliath birdeater",0.2],
      ["atlas moth",0.2],["leafhopper",0.2],["shield bug",0.2],["nymph",0.2],["stonefly",0.2],["bombardier beetle",0.2],
      ["harvestman",0.2],["morpho",0.2],["skipper",0.1],["treehopper",0.1],["caddisfly",0.1],["springtail",0.1],["thrips",0.1],
      ["water boatman",0.1],["whirligig beetle",0.1],["backswimmer",0.1],["whip scorpion",0.1],["jewel beetle",0.1],
      ["pseudoscorpion",0.05],["cochineal",0.05],["scale insect",0.05],["weta",0.05],["booklouse",0.02],["velvet mite",0.05],
      ["velvet worm",0.05],["sea spider",0.05],["vinegaroon",0.03],["tailless whip scorpion",0.03]
    ]
  },
  reptiles: {
    title: "Reptiles & amphibians",
    prompt: "Name a reptile or amphibian.",
    hint: "Snake and frog are the apple and banana of this round.",
    items: [
      ["snake",30],["frog",28],["lizard",25],["crocodile",22],["alligator",20],["turtle",20],["tortoise",15],["chameleon",13],
      ["iguana",12],["gecko",11],["cobra",10],["python",10],["toad",9],["salamander",8],["rattlesnake",7],["anaconda",7],
      ["komodo dragon",6],["newt",5],["boa constrictor",5],["viper",4],["black mamba",4,["mamba"]],["king cobra",4],
      ["sea turtle",3],["bearded dragon",3],["axolotl",3],["tree frog",2.5],["garter snake",2],["monitor lizard",2],
      ["poison dart frog",2],["bullfrog",2],["skink",1.5],["caiman",1.5],["gila monster",1],["gharial",1],["corn snake",1],
      ["snapping turtle",1],["saltwater crocodile",1],["leopard gecko",1],["green anaconda",1],["basilisk",0.8],["copperhead",0.8],
      ["coral snake",0.8],["horned lizard",0.6],["cottonmouth",0.6],["box turtle",0.6],["sea snake",0.6],["nile crocodile",0.6],
      ["frilled lizard",0.6],["cane toad",0.6],["tuatara",0.5],["anole",0.5],["fire salamander",0.5],["sidewinder",0.5],
      ["taipan",0.5],["leatherback turtle",0.5],["marine iguana",0.5],["glass frog",0.4],["krait",0.4],["milk snake",0.4],
      ["kingsnake",0.4],["crested gecko",0.4],["galapagos tortoise",0.8],["death adder",0.3],["hognose snake",0.3],
      ["rat snake",0.3],["painted turtle",0.3],["tiger salamander",0.3],["hellbender",0.3],["terrapin",0.5],["thorny devil",0.3],
      ["boomslang",0.2],["caecilian",0.2],["mudpuppy",0.2],["slow worm",0.2],["legless lizard",0.2],["flying snake",0.2],
      ["goliath frog",0.2],["wood frog",0.2],["spring peeper",0.2],["tokay gecko",0.2],["bushmaster",0.1],["fer de lance",0.1],
      ["vine snake",0.1],["blind snake",0.1],["olm",0.1],["surinam toad",0.1],["chuckwalla",0.1],["matamata",0.1],
      ["gaboon viper",0.3],["bush viper",0.1],["chinese alligator",0.2],["softshell turtle",0.2],["pancake tortoise",0.05],
      ["purple frog",0.05],["axolotl",3],["titicaca frog",0.02]
    ]
  },
  domestic: {
    title: "Pets & farm animals",
    prompt: "Name an animal people keep — as a pet or on a farm.",
    hint: "Someone, somewhere, keeps something stranger than a hamster.",
    items: [
      ["dog",35],["cat",32],["cow",25],["chicken",22],["horse",20],["pig",18],["sheep",17],["goat",15],["rabbit",14],
      ["hamster",12],["goldfish",10],["duck",10],["parrot",8],["turkey",7],["donkey",7],["guinea pig",7],["turtle",5],
      ["snake",4],["lizard",3],["ferret",3],["gerbil",3],["mouse",3],["goose",2.5],["rat",2.5],["bull",2],["chinchilla",2],
      ["hedgehog",2],["canary",2],["budgie",2,["budgerigar","parakeet"]],["pigeon",2],["llama",2],["alpaca",2],["lamb",2],
      ["ox",1.5],["buffalo",1.5],["calf",1.5],["pony",1.5],["cockatiel",1.5],["betta",1.5,["betta fish","fighting fish"]],
      ["bearded dragon",1.5],["piglet",1.2],["mule",1],["duckling",1],["quail",1],["koi",1],["guppy",1],["leopard gecko",1],
      ["axolotl",1],["camel",1],["yak",0.8],["foal",0.8],["lovebird",0.8],["tarantula",0.8],["hermit crab",0.8],["honeybee",0.8],
      ["peacock",0.8],["reindeer",0.8],["water buffalo",0.6],["angelfish",0.6],["corn snake",0.6],["pheasant",0.6],["gosling",0.5],
      ["guinea fowl",0.4],["sugar glider",0.4],["chick",1.5],["kitten",1.5],["puppy",1.5],["mynah",0.3],["cichlid",0.3],
      ["silkworm",0.3],["jersey cow",0.3],["holstein",0.3],["pot bellied pig",0.3],["miniature horse",0.3],["carp",0.3],
      ["catfish",0.3],["merino sheep",0.2],["oscar fish",0.2],["angora rabbit",0.1],["boer goat",0.1],["alpaca",2],
      ["emu",0.5],["ostrich",0.5],["axolotl",1],["pygmy goat",0.4],["dexter cattle",0.05],["muscovy duck",0.2],
      ["jacob sheep",0.05],["kunekune pig",0.05],["zebu",0.1],["nguni cattle",0.03]
    ]
  },
  prehistoric: {
    title: "Prehistoric & extinct",
    prompt: "Name an extinct or prehistoric animal.",
    hint: "T. rex is the house red of this category.",
    items: [
      ["dinosaur",25],["t rex",24,["tyrannosaurus","tyrannosaurus rex","trex"]],["mammoth",18,["woolly mammoth"]],["dodo",16],
      ["triceratops",15],["velociraptor",13],["stegosaurus",12],["brachiosaurus",10],["pterodactyl",10],
      ["saber toothed tiger",9,["sabertooth","saber tooth tiger"]],["megalodon",9],["spinosaurus",6],["diplodocus",5],
      ["allosaurus",4],["ankylosaurus",4],["pteranodon",3],["archaeopteryx",3],["trilobite",3],["brontosaurus",3],
      ["iguanodon",2.5],["apatosaurus",2.5],["parasaurolophus",2],["dilophosaurus",2],["dimetrodon",2],["neanderthal",2],
      ["dire wolf",2],["mastodon",2],["woolly rhinoceros",1.5],["giant sloth",1.5],["thylacine",1.5,["tasmanian tiger"]],
      ["mosasaurus",1.5],["plesiosaur",1.5],["smilodon",1.5],["passenger pigeon",1.2],["ichthyosaur",1],["giganotosaurus",1],
      ["australopithecus",0.8],["titanoboa",0.8],["quetzalcoatlus",0.8],["dunkleosteus",0.8],["carnotaurus",0.8],
      ["pachycephalosaurus",0.8],["great auk",0.6],["oviraptor",0.6],["glyptodon",0.5],["moa",0.5],["compsognathus",0.5],
      ["therizinosaurus",0.5],["anomalocaris",0.4],["quagga",0.4],["liopleurodon",0.4],["microraptor",0.4],["protoceratops",0.4],
      ["gallimimus",0.4],["utahraptor",0.4],["deinonychus",0.4],["megatherium",0.3],["elephant bird",0.3],["hallucigenia",0.3],
      ["eurypterid",0.3,["sea scorpion"]],["steller's sea cow",0.3],["troodon",0.3],["styracosaurus",0.3],["baryonyx",0.3],
      ["andrewsarchus",0.2],["basilosaurus",0.2],["helicoprion",0.2],["meganeura",0.2],["arthropleura",0.2],["opabinia",0.2],
      ["haast's eagle",0.2],["deinosuchus",0.2],["sarcosuchus",0.2],["edmontosaurus",0.2],["corythosaurus",0.2],
      ["paraceratherium",0.1,["indricotherium"]],["entelodont",0.1],["pikaia",0.1],["nodosaurus",0.1],["suchomimus",0.1],
      ["cryolophosaurus",0.1],["yutyrannus",0.1],["sinosauropteryx",0.1],["maiasaura",0.1],["irritator",0.05],
      ["confuciusornis",0.05],["gomphothere",0.05],["uintatherium",0.05],["platybelodon",0.05],["dickinsonia",0.05],
      ["charnia",0.02],["tiktaalik",0.3],["ambulocetus",0.1],["pakicetus",0.1],["gigantopithecus",0.4],["aurochs",0.5],
      ["cave bear",1],["cave lion",0.4],["irish elk",0.3],["diprotodon",0.2],["procoptodon",0.05]
    ]
  },
  endangered: {
    title: "Endangered animals",
    prompt: "Name an endangered or threatened animal.",
    hint: "Past the panda, the list gets long and strange.",
    items: [
      ["panda",25,["giant panda"]],["tiger",22],["rhino",18,["rhinoceros"]],["elephant",16],["gorilla",14],["polar bear",14],
      ["orangutan",12],["snow leopard",10],["blue whale",9],["sea turtle",8],["cheetah",7],["red panda",6],["leopard",6],
      ["pangolin",4],["axolotl",4],["vaquita",3],["black rhino",3],["mountain gorilla",3],["komodo dragon",3],
      ["california condor",2.5],["sumatran tiger",2],["amur leopard",2],["kakapo",2],["kiwi",2],["javan rhino",1.5],
      ["bonobo",1.5],["northern white rhino",1.5],["african wild dog",1.5],["manatee",1.5],["sea otter",1.5],
      ["whooping crane",1.5],["sumatran rhino",1],["iberian lynx",1],["okapi",1],["golden lion tamarin",1],
      ["hawksbill turtle",0.8],["leatherback turtle",0.8],["right whale",0.8],["gharial",0.8],["proboscis monkey",0.8],
      ["hyacinth macaw",0.8],["red wolf",0.8],["tapir",0.8],["saiga antelope",0.5],["przewalski's horse",0.5],
      ["bactrian camel",0.5],["philippine eagle",0.5],["spix's macaw",0.6],["harpy eagle",0.6],["black footed ferret",0.5],
      ["slow loris",0.6],["tarsier",0.6],["aye aye",0.5],["dugong",0.6],["tuatara",0.5],["saola",0.5],["galapagos penguin",0.5],
      ["hawaiian monk seal",0.4],["giant otter",0.4],["maned wolf",0.4],["arabian oryx",0.4],["tree kangaroo",0.4],
      ["pygmy hippo",0.4],["ethiopian wolf",0.3],["fishing cat",0.3],["cotton top tamarin",0.3],["ganges river dolphin",0.3],
      ["baiji",0.3],["yangtze finless porpoise",0.3],["chinese alligator",0.3],["north atlantic right whale",0.5],
      ["mediterranean monk seal",0.2],["irrawaddy dolphin",0.2],["takahe",0.2],["numbat",0.2],["bilby",0.2],["dhole",0.2],
      ["addax",0.2],["markhor",0.2],["indri",0.2],["douc langur",0.1],["ili pika",0.2],["binturong",0.1],["andean cat",0.1],
      ["scimitar oryx",0.1],["hainan gibbon",0.1],["blue throated macaw",0.1],["northern hairy nosed wombat",0.1],
      ["regent honeyeater",0.05],["orange bellied parrot",0.05],["leadbeater's possum",0.05],["flat headed cat",0.05],
      ["dama gazelle",0.05],["kouprey",0.05],["kagu",0.05],["hirola",0.02],["vancouver island marmot",0.05],["axolotl",4]
    ]
  }
};

const ANIMAL_RANDOM = [
  { type: "letter", letters: "ABCDEFGHJKLMOPRSTW".split("") },
  { type: "any", prompt: "Name any animal — the rarer the better.", hint: "Every creature in the game counts." },
  { type: "cat2", prompt: "Name a bird or a reptile.", cats: ["birds", "reptiles"], hint: "Dinosaurs sit between them. So do your points." },
  { type: "cat2", prompt: "Name a mammal or a sea creature.", cats: ["mammals", "sealife"], hint: "Whales live in both. Nobody is impressed." },
  { type: "cat2", prompt: "Name an insect or a reptile.", cats: ["insects", "reptiles"], hint: "Small and scaly, or small and crunchy." },
  { type: "cat2", prompt: "Name an extinct or an endangered animal.", cats: ["prehistoric", "endangered"], hint: "Gone, or going." }
];

// ============================================================
//  TECHNOLOGY
// ============================================================
const TECH_DB = {
  languages: {
    title: "Programming languages",
    prompt: "Name a programming language.",
    hint: "Python and Java are the white bread of this round.",
    items: [
      ["python",35],["java",30],["javascript",28],["c",22],["c++",22,["cpp"]],["html",18],["c#",15,["c sharp","csharp"]],
      ["sql",10],["php",12],["ruby",10],["swift",9],["go",9,["golang"]],["rust",8],["kotlin",8],["typescript",8],["r",6],
      ["matlab",5],["perl",5],["scala",4],["dart",3],["objective c",3],["assembly",3],["visual basic",3],["pascal",2.5],
      ["fortran",2.5],["cobol",2.5],["bash",2],["lua",2],["basic",2],["lisp",2],["haskell",2],["vim script",0.3],
      ["julia",1.5],["erlang",1.2],["elixir",1.2],["clojure",1],["prolog",1],["powershell",1],["scratch",1],["sas",0.8],
      ["f#",0.8,["f sharp"]],["solidity",0.8],["groovy",0.6],["scheme",0.6],["ada",0.6],["smalltalk",0.5],["delphi",0.5],
      ["zig",0.4],["ocaml",0.4],["verilog",0.4],["stata",0.4],["logo",0.4],["mojo",0.3],["vhdl",0.3],["abap",0.3],
      ["awk",0.3],["coffeescript",0.3],["actionscript",0.3],["spss",0.3],["brainfuck",0.3],["algol",0.3],["racket",0.2],
      ["nim",0.2],["crystal",0.2],["apex",0.2],["tcl",0.2],["sed",0.2],["simula",0.1],["eiffel",0.1],["forth",0.1],
      ["apl",0.1],["raku",0.1],["postscript",0.1],["labview",0.1],["vlang",0.1],["carbon",0.1],["odin",0.05],["hack",0.05],
      ["rexx",0.05],["modula 2",0.05],["mumps",0.05],["idl",0.05],["j",0.05],["k",0.05],["io",0.02],["factor",0.02],
      ["red",0.02],["ballerina",0.02],["chapel",0.02],["pony",0.02],["befunge",0.05],["malbolge",0.03],["whitespace",0.05],
      ["intercal",0.03],["lolcode",0.1],["haxe",0.1],["purescript",0.1],["elm",0.3],["reasonml",0.05],["gleam",0.1]
    ]
  },
  apps: {
    title: "Websites & apps",
    prompt: "Name a website or app.",
    hint: "Everyone's first five answers are the same five icons.",
    items: [
      ["google",30],["youtube",28],["facebook",26],["instagram",24],["whatsapp",20],["twitter",20,["x"]],["tiktok",18],
      ["amazon",16],["netflix",15],["snapchat",12],["linkedin",12],["reddit",11],["wikipedia",10],["gmail",10],["spotify",9],
      ["pinterest",7],["telegram",7],["discord",7],["zoom",6],["uber",6],["airbnb",5],["ebay",5],["twitch",5],["github",5],
      ["quora",4],["stackoverflow",3],["slack",3],["paypal",3],["tumblr",3],["yahoo",3],["bing",3],["imdb",2],["duckduckgo",2],
      ["vimeo",2],["myspace",2],["notion",2],["figma",2],["canva",2],["dropbox",2],["etsy",2],["shopify",2],["hulu",2],
      ["disney plus",2],["steam",2],["roblox",2],["duolingo",2],["minecraft",2.5],["venmo",2],["threads",1.5],["bluesky",1.5],
      ["signal",1.5],["trello",1.5],["cashapp",1.5],["flipkart",1.5],["aliexpress",1.5],["alibaba",1.5],["doordash",1.5],
      ["lyft",1.5],["craigslist",1.5],["yelp",1.5],["tripadvisor",1.5],["coursera",1.5],["medium",1.5],["soundcloud",1.5],
      ["prime video",1.5],["hbo max",1.5],["wordle",1.5],["vine",1.5],["flickr",1.5],["zomato",1.2],["patreon",1.2],["udemy",1.2],
      ["mastodon",1],["asana",1],["onedrive",1],["swiggy",1],["paytm",1],["grubhub",1],["instacart",1],["khan academy",1],
      ["substack",1],["onlyfans",1],["goodreads",1],["letterboxd",1],["epic games",1],["coinbase",1],["crunchyroll",1],
      ["clubhouse",0.6],["bereal",1],["imgur",0.8],["9gag",0.6],["4chan",0.8],["strava",0.8],["pandora",0.8],["robinhood",0.8],
      ["expedia",0.8],["binance",0.8],["bandcamp",0.6],["chegg",0.6],["ola",0.6],["fitbit",0.6],["headspace",0.5],["calm",0.5],
      ["tidal",0.5],["deezer",0.4],["grab",0.4],["periscope",0.3],["friendster",0.3],["hi5",0.3],["orkut",1],["digg",0.4],
      ["delicious",0.1],["stumbleupon",0.3],["geocities",0.3],["angelfire",0.1],["napster",0.6],["limewire",0.5],["kazaa",0.2],
      ["second life",0.4],["neopets",0.4],["club penguin",0.5],["habbo",0.2],["bebo",0.2],["xanga",0.1],["livejournal",0.3]
    ]
  },
  devices: {
    title: "Gadgets & devices",
    prompt: "Name a gadget or electronic device.",
    hint: "Dead formats and dusty drawers score best here.",
    items: [
      ["smartphone",25,["phone","mobile phone"]],["laptop",22],["computer",20],["tablet",18],["smartwatch",15],["headphones",14],
      ["television",14,["tv"]],["camera",12],["iphone",10],["printer",10],["speaker",9],["mouse",9],["keyboard",9],["monitor",8],
      ["router",7],["earbuds",7],["ipad",7],["airpods",6],["drone",6],["console",5,["game console"]],["macbook",5],["microwave",5],
      ["kindle",4],["charger",3],["calculator",3],["radio",3],["projector",3],["webcam",3],["modem",3],["hard drive",3],
      ["usb drive",3,["pen drive","flash drive","thumb drive"]],["power bank",3],["vr headset",3],["playstation",3],["xbox",3],
      ["apple watch",3],["smart watch",4,["smartwatch"]],["digital watch",2],["wrist watch",1.5,["wristwatch"]],["fitness tracker",2.5],["fitness band",1.5],["galaxy watch",1],["pocket watch",1],["stopwatch",1.5],["alarm clock",2],["fitbit",3],["gopro",3],["scanner",2.5],["smart speaker",2.5,["alexa","echo"]],["nintendo switch",2.5],
      ["ipod",2.5],["microphone",2],["dvd player",1.5],["robot vacuum",1.5,["roomba"]],["3d printer",1.5],["raspberry pi",1.5],
      ["oculus",1.5],["blackberry",1.5],["typewriter",1.5],["walkman",1.5],["roku",1.5],["firestick",1.5],["chromecast",1.5],
      ["google home",1.5],["arduino",1.2],["flip phone",1.2],["vcr",1],["telescope",1],["smart thermostat",1],["doorbell camera",1,["ring doorbell"]],
      ["walkie talkie",1],["fax machine",1],["ereader",1],["steam deck",1],["pager",0.8],["landline",0.8],["blu ray player",0.8],
      ["cassette player",0.8],["turntable",0.8],["stylus",0.8],["airtag",0.8],["dashcam",0.8],["binoculars",0.8],["nokia 3310",0.8],
      ["boombox",0.6],["docking station",0.6],["graphics tablet",0.6],["ring light",0.6],["discman",0.5],["trackpad",0.5],
      ["multimeter",0.5],["abacus",0.5],["floppy drive",0.6],["synthesizer",0.4],["metal detector",0.4],["nas",0.4],["ups",0.4],
      ["pda",0.4],["midi keyboard",0.3],["audio interface",0.3],["gimbal",0.3],["night vision goggles",0.3],["soldering iron",0.3],
      ["oscilloscope",0.3],["slide rule",0.3],["bodycam",0.3],["zune",0.3],["trackball",0.3],["mixer",0.3],["barcode scanner",0.3],
      ["palm pilot",0.2],["laserdisc",0.2],["minidisc",0.2],["numpad",0.2],["pos terminal",0.2],["kvm switch",0.1],
      ["geiger counter",0.1],["sextant",0.05],["teleprompter",0.2],["seismograph",0.1],["polygraph",0.1],["dictaphone",0.2],
      ["view master",0.2],["tamagotchi",0.8],["game boy",2],["atari",1.2],["commodore 64",0.6],["zx spectrum",0.3]
    ]
  },
  companies: {
    title: "Tech companies",
    prompt: "Name a technology company.",
    hint: "Beyond the big five there are a thousand.",
    items: [
      ["google",30],["apple",30],["microsoft",28],["amazon",25],["meta",20,["facebook"]],["tesla",15],["netflix",13],
      ["nvidia",13],["samsung",13],["intel",12],["ibm",10],["sony",9],["openai",8],["oracle",8],["adobe",7],["salesforce",6],
      ["twitter",6,["x corp"]],["uber",6],["airbnb",5],["spotify",5],["dell",5],["hp",5],["amd",4],["lenovo",4],["cisco",3],
      ["asus",3],["xiaomi",3],["huawei",3],["nokia",3],["nintendo",3],["paypal",3],["lg",2.5],["acer",2.5],["motorola",2.5],
      ["qualcomm",2.5],["ebay",2.5],["alibaba",2.5],["spacex",2.5],["zoom",2.5],["sap",2],["tsmc",2],["tencent",2],
      ["bytedance",2],["oneplus",2],["deepmind",2],["anthropic",3],["baidu",1.5],["infosys",1.5],["tcs",1.5],["accenture",1.5],
      ["siemens",1.5],["philips",1.5],["panasonic",1.5],["toshiba",1.5],["arm",1.5],["shopify",1.5],["stripe",1.5],["slack",1.5],
      ["dropbox",1.5],["blackberry",1.5],["ericsson",1.5],["valve",1.5],["ea",1.5],["ubisoft",1.5],["activision",1.5],
      ["sega",1.5],["midjourney",1.5],["palantir",1.5],["wipro",1.2],["atari",1.2],["waymo",1],["dji",1],["cloudflare",1],
      ["snowflake",1],["databricks",1],["boston dynamics",1],["perplexity",1],["roblox",1],["unity",0.8],["mongodb",0.8],
      ["atlassian",0.8],["hcl",0.6],["intuit",0.6],["gitlab",0.6],["mistral",0.6],["unreal",0.6,["epic games"]],["texas instruments",0.8],
      ["cognizant",0.8],["western digital",0.6],["seagate",0.6],["micron",0.6],["foxconn",0.8],["garmin",0.8],["gopro",0.8],
      ["rivian",0.8],["byd",0.8],["blue origin",0.8],["hugging face",0.8],["twilio",0.5],["servicenow",0.5],["workday",0.5],
      ["vercel",0.5],["capgemini",0.5],["stability ai",0.5],["broadcom",1],["akamai",0.4],["digitalocean",0.4],["heroku",0.4],
      ["irobot",0.4],["redis",0.4],["scale ai",0.4],["cruise",0.3],["elastic",0.3],["hashicorp",0.3],["netlify",0.3],
      ["cohere",0.3],["epic systems",0.3],["cerner",0.2],["infineon",0.2],["analog devices",0.2],["figure",0.2],["nxp",0.1],
      ["veeva",0.1],["stmicroelectronics",0.1],["globalfoundries",0.2],["asml",0.6],["zeiss",0.2],["fujitsu",0.4],["nec",0.3],
      ["sharp",0.5],["hitachi",0.5],["mitsubishi electric",0.2],["zte",0.4],["vivo",0.6],["oppo",0.8],["realme",0.5],["honor",0.3]
    ]
  },
  software: {
    title: "Operating systems & software",
    prompt: "Name an operating system or piece of software.",
    hint: "Windows, Android, iOS — and then what?",
    items: [
      ["windows",32],["android",28],["ios",25],["linux",22],["macos",18,["mac os","os x"]],["ubuntu",12],["chrome",10],
      ["photoshop",8],["excel",8],["word",7],["unix",6],["chrome os",6],["powerpoint",6],["firefox",6],["safari",5],["dos",5],
      ["vscode",5,["visual studio code"]],["edge",4],["debian",3.5],["fedora",3],["red hat",3],["git",3],["illustrator",3],
      ["vlc",2.5],["kali",2.5,["kali linux"]],["arch",2.5,["arch linux"]],["mint",2.5,["linux mint"]],["blender",2.5],
      ["premiere",2.5,["premiere pro"]],["docker",2],["autocad",2],["figma",2],["after effects",2],["centos",2],["vim",2],
      ["kubernetes",1.5],["unity",1.5],["gimp",1.5],["audacity",1.5],["obs",1.5],["winrar",1.5],["emacs",1.5],["intellij",1.5],
      ["eclipse",1.5],["xcode",1.5],["android studio",1.5],["matlab",1.5],["tableau",1.5],["7zip",1],["notepad++",1],
      ["virtualbox",1],["vmware",1],["power bi",1],["maya",1],["suse",1],["solaris",1],["windows phone",1],["bsd",1,["freebsd"]],
      ["watchos",1],["ipados",1],["sublime",0.8],["teamviewer",0.8],["postman",0.8],["symbian",0.8],["anydesk",0.6],
      ["wireshark",0.6],["jenkins",0.6],["manjaro",0.6],["harmonyos",0.6],["tvos",0.6],["gentoo",0.5],["pop os",0.5],
      ["sketch",0.8],["inkscape",0.8],["tails",0.4],["tizen",0.4],["blackberry os",0.4],["elementary os",0.3],["palm os",0.3],
      ["openbsd",0.3],["puppy linux",0.2],["zorin",0.2],["netbsd",0.2],["minix",0.2],["beos",0.1],["haiku",0.1],["temple os",0.2],
      ["qnx",0.1],["plan 9",0.1],["amigaos",0.2],["os/2",0.2],["whonix",0.1],["vxworks",0.05],["cp/m",0.1],["openvms",0.1],
      ["zos",0.05],["raspbian",0.6],["alpine linux",0.3],["nixos",0.3],["slackware",0.2],["mandrake",0.1],["knoppix",0.1],
      ["reactos",0.1],["freedos",0.1],["krita",0.4],["davinci resolve",0.8],["final cut",0.8],["logic pro",0.4],["ableton",0.6],
      ["fl studio",0.6],["pro tools",0.3],["cubase",0.2],["reaper",0.2],["godot",0.5],["unreal engine",1],["solidworks",0.5],
      ["catia",0.2],["ansys",0.2],["labview",0.1],["simulink",0.3],["sas",0.6],["spss",0.4],["stata",0.3],["rstudio",0.8]
    ]
  },
  hardware: {
    title: "Computer hardware",
    prompt: "Name a computer component or hardware part.",
    hint: "Open the case. Name something inside it.",
    items: [
      ["cpu",25,["processor"]],["ram",20,["memory"]],["gpu",20],["motherboard",18],["hard drive",16],["graphics card",15],
      ["ssd",14],["monitor",10],["keyboard",10],["mouse",10],["power supply",10],["fan",8],["usb",7],["heat sink",6],
      ["case",6],["hdmi",6],["cooler",5],["cable",5],["transistor",4],["bios",3],["chipset",3],["capacitor",3],["resistor",3],
      ["ethernet port",3],["diode",2],["psu",2],["vga",2],["cmos battery",1.5],["pcie slot",1.5],["sata",1.5],["nvme",1.5],
      ["sound card",1.5],["network card",1.5],["optical drive",1.5],["cd drive",1.5],["thermal paste",1.5],["cache",1.5],
      ["m.2",1.2],["firmware",1],["ram slot",1],["vram",1],["wifi card",1],["liquid cooler",1],["floppy drive",1],
      ["cross flow fan",0.05],["dvi",1],["thunderbolt",1],["alu",0.8],["displayport",0.8],["ddr5",0.8],["clock speed",0.8],
      ["bus",0.8],["socket",0.6],["microcontroller",0.6],["soc",0.6],["firewire",0.5],["dimm",0.5],["tpm",0.5],["fpga",0.5],
      ["asic",0.5],["surge protector",0.5],["radiator",0.5],["serial port",0.5],["l1 cache",0.4],["control unit",0.4],
      ["northbridge",0.4],["ups",0.4],["ps/2 port",0.4],["rj45",0.4],["sdram",0.4],["ups battery",0.1],["southbridge",0.3],
      ["ide cable",0.3],["vrm",0.3],["register",0.3],["wafer",0.3],["nic",0.3],["parallel port",0.3],["raid controller",0.3],
      ["sodimm",0.2],["backplate",0.2],["riser cable",0.2],["jumper",0.2],["ribbon cable",0.2],["molex",0.2],["die",0.2],
      ["lithography",0.2],["ecc memory",0.2],["crystal oscillator",0.2],["dip switch",0.1],["pin grid array",0.1],["bnc",0.1],
      ["kvm",0.1],["hba",0.05],["stylus digitizer",0.1],["daughterboard",0.2],["backplane",0.1],["bus bar",0.05],
      ["punch card",0.6],["magnetic tape",0.8],["vacuum tube",0.8],["core memory",0.1],["drum memory",0.05],["zip drive",0.4],
      ["jaz drive",0.05],["tape drive",0.3],["cd rom",1.5],["dvd rom",0.8],["blu ray drive",0.5]
    ]
  },
  internet: {
    title: "Internet & networking",
    prompt: "Name something from networking or the internet.",
    hint: "Protocols, attacks, acronyms — all fair game.",
    items: [
      ["wifi",25],["ip address",20],["router",18],["browser",15],["url",13],["dns",12],["http",12],["server",12],["email",10],
      ["vpn",10],["firewall",9],["ethernet",8],["bandwidth",7],["modem",7],["cookie",7],["cloud",7],["https",6],["ftp",5],
      ["tcp",5],["api",5],["ssl",4],["proxy",4],["ping",4],["lan",4],["html",4],["bluetooth",4],["packet",3.5],["udp",3],
      ["port",3],["latency",3],["encryption",3],["malware",3],["css",3],["blockchain",3],["5g",3],["subnet",2.5],["gateway",2.5],
      ["mac address",2.5],["dhcp",2.5],["ssh",2.5],["wan",2.5],["torrent",2.5],["json",2.5],["phishing",2.5],["nat",2],
      ["captcha",2],["cache",2],["tor",2],["ddos",2],["ransomware",2],["xml",2],["fiber optic",2],["broadband",2],
      ["two factor authentication",2,["2fa"]],["cdn",1.5],["traceroute",1.5],["ipv6",1.5],["smtp",1.5],["intranet",1.5],
      ["darknet",1.5],["p2p",1.5],["rest",1.5],["dial up",1.5],["lte",1.5],["starlink",1.5],["hashing",1.5],["sql injection",1],
      ["load balancer",1.2],["imap",1],["pop3",1],["telnet",1],["graphql",1],["botnet",1],["oauth",1],["node",1],
      ["throttling",1],["zero day",1],["satellite internet",1],["bgp",0.8],["vlan",0.8],["xss",0.8],["soap",0.6],["webhook",0.6],
      ["jwt",0.6],["man in the middle",0.8],["onion routing",0.5],["seeding",0.5],["arp",0.5],["cors",0.5],["honeypot",0.5],
      ["man",0.5],["mesh network",0.5],["qos",0.3],["ospf",0.3],["cidr",0.3],["icmp",0.4],["nfc",2],["zigbee",0.3],
      ["reverse proxy",0.4],["li fi",0.2],["lora",0.2],["mpls",0.2],["pan",0.2],["extranet",0.5],["anycast",0.1],
      ["multicast",0.3],["broadcast storm",0.1],["spanning tree",0.1],["netmask",0.3],["port forwarding",0.6],["dmz",0.3],
      ["air gap",0.3],["rootkit",0.6],["keylogger",0.8],["spyware",1],["adware",0.8],["worm",1],["trojan",1.5],
      ["sandbox",0.6],["packet sniffing",0.4],["spoofing",0.6],["sim swap",0.2],["smishing",0.1],["pharming",0.1],
      ["dns poisoning",0.2],["clickjacking",0.1],["csrf",0.2],["waf",0.1],["ids",0.1],["siem",0.1]
    ]
  },
  ai: {
    title: "AI & data",
    prompt: "Name a term from AI, machine learning or data science.",
    hint: "Your field. Make the rest of us look bad.",
    items: [
      ["artificial intelligence",20,["ai"]],["machine learning",18],["neural network",16],["chatgpt",16],["algorithm",14],
      ["data",12],["big data",10],["deep learning",10],["model",8],["llm",8],["dataset",7],["prompt",6],["gpt",6],["token",5],
      ["transformer",5],["training",6],["nlp",3],["regression",3],["classification",3],["cnn",3],["clustering",2.5],
      ["decision tree",2.5],["embedding",2.5],["rnn",2.5],["gan",2.5],["reinforcement learning",2.5],["computer vision",2.5],
      ["data mining",2],["lstm",2],["random forest",2],["gradient descent",2],["backpropagation",2],["overfitting",2],
      ["vector",2],["fine tuning",2],["hallucination",2],["bias",2],["speech recognition",2],["svm",1.5],["knn",1.5],
      ["epoch",1.5],["learning rate",1.5],["loss function",1.5],["attention",1.5],["inference",1.5],["rag",1.5],
      ["diffusion model",1.5],["stable diffusion",1.5],["agent",1.5],["ocr",1.5],["recommendation system",1.5],["bert",1.5],
      ["naive bayes",1.2],["activation function",1.2],["batch size",1.2],["feature engineering",1.2],["pca",1.2],
      ["sentiment analysis",1.2],["precision",1.2],["recall",1.2],["hyperparameter",1.2],["underfitting",1],["dropout",1],
      ["regularization",1],["relu",1],["sigmoid",1],["rlhf",1],["bayesian",1],["confusion matrix",1],["cross validation",1],
      ["f1 score",1],["xgboost",1],["data warehouse",1],["data pipeline",1],["chain of thought",1],["multimodal",1],
      ["context window",1],["benchmark",1],["etl",1.2],["softmax",0.8],["self attention",0.8],["quantization",0.8],
      ["autoencoder",0.8],["dimensionality reduction",0.8],["ensemble",0.8],["boosting",0.8],["mlops",0.8],["data lake",0.8],
      ["few shot",0.8],["zero shot",0.8],["synthetic data",0.8],["explainability",0.8],["markov chain",0.8],["eval",0.8],
      ["grid search",0.6],["auc",0.6],["roc curve",0.6],["annotation",0.6],["ground truth",0.6],["perplexity",0.6],
      ["distillation",0.5],["q learning",0.5],["bagging",0.5],["drift",0.4],["edge ai",0.4],["t sne",0.4],["shap",0.3],
      ["federated learning",0.3],["umap",0.2],["lime",0.2],["feature store",0.2],["bleu score",0.2],["rouge",0.1],
      ["data lineage",0.1],["mixture of experts",0.6],["lora",0.5],["beam search",0.3],["tokenizer",0.8],["logit",0.4],
      ["temperature",0.8],["top k sampling",0.3],["vector database",0.8],["prompt injection",0.6],["constitutional ai",0.3],
      ["red teaming",0.5],["model collapse",0.3],["catastrophic forgetting",0.2],["curriculum learning",0.1],["active learning",0.3],
      ["transfer learning",1],["one hot encoding",0.8],["normalization",0.8],["imputation",0.4],["stratified sampling",0.3],
      ["p value",0.8],["a/b test",1],["cohort analysis",0.3],["silhouette score",0.1],["elbow method",0.3],["dbscan",0.2],
      ["k means",1.5],["apriori",0.2],["collaborative filtering",0.5],["word2vec",0.6],["tf idf",0.6],["n gram",0.4]
    ]
  }
};

const TECH_RANDOM = [
  { type: "letter", letters: "ABCDEFGHIJKLMNOPRSTVW".split("") },
  { type: "any", prompt: "Name anything from the world of technology.", hint: "Language, app, company, part, protocol — anything." },
  { type: "cat2", prompt: "Name a programming language or a piece of software.", cats: ["languages", "software"], hint: "The tools, not the toys." },
  { type: "cat2", prompt: "Name a gadget or a hardware component.", cats: ["devices", "hardware"], hint: "If you can hold it, it counts." },
  { type: "cat2", prompt: "Name a tech company or an app.", cats: ["companies", "apps"], hint: "Dead startups score best." },
  { type: "cat2", prompt: "Name a networking or an AI term.", cats: ["internet", "ai"], hint: "Acronyms welcome." }
];

// ============================================================
//  DOMAIN REGISTRY — add a pack here and it appears in the game
// ============================================================
const DOMAINS = {
  food: {
    letterPrompt: "Name a food or drink that starts with {L}.",
    label: "Food",
    heading: "Food, course by course",
    db: FOOD_DB,
    random: FOOD_RANDOM,
    order: ["fruits", "vegetables", "desserts", "streetfood", "international", "ingredients", "drinks", "spices", "random"]
  },
  animals: {
    letterPrompt: "Name an animal that starts with {L}.",
    label: "Animals",
    heading: "Animals, branch by branch",
    db: ANIMAL_DB,
    random: ANIMAL_RANDOM,
    order: ["mammals", "birds", "sealife", "insects", "reptiles", "domestic", "prehistoric", "endangered", "random"]
  },
  technology: {
    letterPrompt: "Name something from technology that starts with {L}.",
    label: "Technology",
    heading: "Technology, layer by layer",
    db: TECH_DB,
    random: TECH_RANDOM,
    order: ["languages", "apps", "devices", "companies", "software", "hardware", "internet", "ai", "random"]
  }
};
