// ============================================================
//  OFF MENU — curated answer database
//  Each entry: [canonical name, estimated % of players who'd say it, aliases]
//  Frequencies are seed estimates. They get blended with real play data
//  stored in the browser (and later, your shared backend) via the Rarity Engine.
//  Add rows freely — the engine only needs name + freq. Aliases are optional.
// ============================================================
const FOOD_DB = {
  fruits: {
    title: "Fruits",
    prompt: "Name a fruit.",
    hint: "Everyone says apple. Go further.",
    items: [
      ["apple",40],["banana",38],["orange",35],["strawberry",25,["strawberries"]],["grape",22,["grapes"]],
      ["mango",20],["pineapple",18],["watermelon",17],["blueberry",15,["blueberries"]],["pear",14],
      ["peach",13],["cherry",12,["cherries"]],["kiwi",11,["kiwifruit","kiwi fruit"]],["lemon",10],["raspberry",9,["raspberries"]],
      ["plum",8],["papaya",7],["lime",6],["apricot",6],["pomegranate",6],["blackberry",6,["blackberries"]],
      ["cantaloupe",5,["muskmelon","rockmelon"]],["coconut",5],["fig",5],["grapefruit",5],["guava",5],
      ["lychee",4,["litchi"]],["dragon fruit",4,["dragonfruit","pitaya","pitahaya"]],["passion fruit",4,["passionfruit"]],
      ["nectarine",4],["avocado",4],["tangerine",3],["cranberry",3,["cranberries"]],["honeydew",3,["honeydew melon"]],
      ["date",3,["dates"]],["persimmon",2.5],["starfruit",2.5,["star fruit","carambola"]],["jackfruit",2],["durian",2],
      ["clementine",2],["kumquat",1.5],["tomato",1.5],["gooseberry",1.2,["gooseberries"]],["mulberry",1.2,["mulberries"]],
      ["rambutan",1],["plantain",0.8],["mangosteen",0.8],["quince",0.8],["elderberry",0.7,["elderberries"]],
      ["tamarind",0.7],["longan",0.6],["soursop",0.6,["graviola","guanabana"]],["pomelo",0.6,["pummelo"]],["currant",0.6,["blackcurrant","redcurrant","black currant","red currant"]],
      ["olive",0.5],["loquat",0.5],["yuzu",0.5],["jujube",0.4,["chinese date"]],["custard apple",0.4,["sugar apple","sweetsop","sitaphal"]],
      ["feijoa",0.3,["pineapple guava"]],["cherimoya",0.3],["breadfruit",0.3],["boysenberry",0.3],["lingonberry",0.3],
      ["physalis",0.3,["cape gooseberry","goldenberry","golden berry"]],["calamansi",0.3,["calamondin"]],["pawpaw",0.3,["paw paw"]],
      ["amla",0.3,["indian gooseberry"]],["jamun",0.3,["java plum","black plum"]],["sapodilla",0.3,["chikoo","chiku","sapota"]],
      ["ackee",0.2],["cloudberry",0.2],["miracle fruit",0.2,["miracle berry"]],["ugli fruit",0.2,["ugli"]],["huckleberry",0.2],
      ["medlar",0.1],["salak",0.1,["snake fruit"]],["bael",0.1,["wood apple"]],["ber",0.1,["indian jujube"]],["marionberry",0.1],
      ["mamey",0.1,["mamey sapote"]],["santol",0.1],["langsat",0.1,["lanzones"]],["bilberry",0.2],["serviceberry",0.1,["saskatoon"]]
    ]
  },
  vegetables: {
    title: "Vegetables",
    prompt: "Name a vegetable.",
    hint: "Carrot is the apple of this round.",
    items: [
      ["carrot",40],["broccoli",32],["potato",30],["tomato",25],["onion",22],["spinach",20],["cucumber",18],["lettuce",17],
      ["cabbage",15],["cauliflower",14],["pea",13,["peas","green peas"]],["corn",12,["sweetcorn","maize"]],["bell pepper",12,["capsicum","pepper","peppers"]],
      ["celery",11],["zucchini",10,["courgette"]],["green bean",9,["green beans","string beans"]],["asparagus",8],["eggplant",8,["aubergine","brinjal"]],
      ["sweet potato",8],["pumpkin",7],["mushroom",7,["mushrooms"]],["kale",6],["beet",6,["beetroot","beets"]],["radish",6],
      ["garlic",5],["brussels sprout",5,["brussels sprouts","brussel sprouts"]],["squash",5,["butternut squash"]],["okra",4,["lady finger","ladies finger","bhindi"]],
      ["turnip",4],["artichoke",3.5],["leek",3.5],["bok choy",3,["pak choi","bokchoy"]],["arugula",3,["rocket"]],["parsnip",3],
      ["chard",2.5,["swiss chard"]],["ginger",2.5],["fennel",2],["bitter gourd",2,["bitter melon","karela"]],["bottle gourd",1.5,["lauki","calabash"]],
      ["kohlrabi",1.5],["yam",1.5],["collard greens",1.5,["collards"]],["watercress",1.2],["endive",1.2],["rutabaga",1,["swede"]],
      ["daikon",1,["mooli"]],["taro",1,["arbi","colocasia"]],["cassava",1,["yuca","manioc","tapioca root"]],["jicama",0.8],["chayote",0.8,["chow chow"]],
      ["drumstick",0.8,["moringa"]],["snake gourd",0.6],["ridge gourd",0.6,["turai","luffa"]],["ivy gourd",0.5,["tindora","kundru"]],["lotus root",0.5,["kamal kakdi"]],
      ["celeriac",0.5,["celery root"]],["romanesco",0.4],["fiddlehead",0.4,["fiddleheads","fiddlehead fern"]],["salsify",0.2],["samphire",0.2,["sea asparagus"]],
      ["sorrel",0.3],["nopales",0.3,["cactus pad","cactus"]],["bamboo shoot",0.5,["bamboo shoots"]],["water chestnut",0.5,["water chestnuts"]],["radicchio",0.6],
      ["purslane",0.2],["amaranth leaves",0.2,["amaranth","chaulai"]],["fenugreek leaves",0.3,["methi"]],["mustard greens",0.5,["sarson"]],["tomatillo",0.6],
      ["horseradish",0.4],["edamame",1],["shallot",1],["scallion",1.5,["spring onion","green onion"]],["jerusalem artichoke",0.2,["sunchoke"]],["sea beans",0.1],
      ["cardoon",0.1],["crosnes",0.05,["chinese artichoke"]],["oca",0.05],["skirret",0.02],["malabar spinach",0.1,["basella"]],["ash gourd",0.3,["winter melon","petha"]],
      ["pointed gourd",0.2,["parwal"]],["elephant foot yam",0.1,["suran","jimikand"]],["raw banana",0.3,["green banana"]],["sprouts",1.5,["bean sprouts"]]
    ]
  },
  desserts: {
    title: "Desserts",
    prompt: "Name a dessert.",
    hint: "If it has 'cake' in it, so does everyone else's answer.",
    items: [
      ["cake",35],["ice cream",34],["chocolate cake",20],["cheesecake",18],["brownie",17,["brownies"]],["cookie",15,["cookies"]],["pie",14],
      ["apple pie",12],["cupcake",11,["cupcakes"]],["tiramisu",10],["pudding",9],["donut",8,["doughnut","donuts"]],["mousse",7,["chocolate mousse"]],
      ["creme brulee",7,["crème brûlée"]],["gelato",6],["panna cotta",6],["macaron",6,["macarons","macaroon","macaroons"]],["gulab jamun",6],["pancake",5,["pancakes"]],
      ["fudge",5],["eclair",4,["éclair"]],["baklava",4],["churros",4,["churro"]],["sundae",4],["crepe",4,["crêpe","crepes"]],
      ["rasgulla",3.5],["kheer",3.5,["rice pudding"]],["jalebi",3.5],["waffle",3.5,["waffles"]],["sorbet",3],["trifle",3],["tart",3,["fruit tart"]],
      ["banana split",2.5],["kulfi",2.5],["mochi",2.5],["flan",2.5],["halwa",2.5,["halva","gajar halwa","gajar ka halwa"]],["cannoli",2],["profiterole",2,["profiteroles","cream puff"]],
      ["souffle",2,["soufflé"]],["pavlova",2],["red velvet cake",2],["carrot cake",2],["lemon meringue pie",2],["bread pudding",2],["black forest cake",2],["baked alaska",1.5],
      ["tres leches",1.5,["tres leches cake"]],["lava cake",1.5,["molten lava cake","molten chocolate cake"]],["sticky toffee pudding",1.2],["mango sticky rice",1.2],["cobbler",1.2,["peach cobbler"]],
      ["rasmalai",1.2,["ras malai"]],["ladoo",1.2,["laddu","laddoo"]],["barfi",1,["burfi"]],["payasam",0.8],["mysore pak",0.6],["sandesh",0.5],["shrikhand",0.6],["malpua",0.5],
      ["kunafa",0.8,["knafeh","kunafeh"]],["basbousa",0.3],["halo halo",0.4,["halo-halo"]],["bingsu",0.5],["dango",0.3],["taiyaki",0.3],["dorayaki",0.2],
      ["sachertorte",0.4],["black sesame ice cream",0.2],["spotted dick",0.3],["eton mess",0.5],["banoffee pie",0.8],["clafoutis",0.3],["tarte tatin",0.5],
      ["pastel de nata",0.6,["portuguese egg tart","egg tart"]],["alfajores",0.3,["alfajor"]],["brigadeiro",0.4],["dulce de leche",0.6],["arroz con leche",0.3],["paczki",0.2],
      ["semifreddo",0.2],["affogato",0.6],["zabaglione",0.1,["sabayon"]],["cassata",0.2],["kulfi falooda",0.3,["falooda"]],["sheer khurma",0.2],["phirni",0.3],
      ["gajar halwa",2.5],["chikki",0.3],["modak",0.3],["puran poli",0.2],["bebinca",0.1],["pootharekulu",0.05],["mishti doi",0.4],["rabri",0.4],["ghevar",0.2],
      ["kouign amann",0.1,["kouign-amann"]],["cremeschnitte",0.05],["mille feuille",0.4,["mille-feuille","napoleon"]],["frozen yogurt",2]
    ]
  },
  streetfood: {
    title: "Street food",
    prompt: "Name a street food.",
    hint: "Any country, any cart, any corner.",
    items: [
      ["hot dog",30,["hotdog"]],["tacos",28,["taco"]],["pizza",15],["burger",12,["hamburger"]],["kebab",12,["kabob"]],["french fries",10,["fries","chips"]],
      ["pani puri",10,["golgappa","gol gappa","puchka","phuchka"]],["pretzel",9],["samosa",8],["vada pav",7],["falafel",7],["churros",6,["churro"]],
      ["pav bhaji",6],["bhel puri",5,["bhelpuri","bhel"]],["corn dog",5],["shawarma",5],["gyro",5,["gyros"]],["momo",5,["momos"]],["chaat",5],
      ["empanada",4,["empanadas"]],["dosa",4],["elote",4,["mexican street corn","street corn"]],["banh mi",4,["bánh mì"]],["takoyaki",3.5],["poutine",3.5],
      ["crepe",3,["crêpe"]],["arepa",3,["arepas"]],["kathi roll",3,["kati roll","frankie"]],["dabeli",2.5],["sev puri",2.5],["dahi puri",2],["bun kebab",1.5],
      ["currywurst",2],["satay",2.5],["pad thai",2.5],["chole bhature",2.5,["chhole bhature"]],["aloo tikki",2],["jalebi",2],["kulfi",1.5],["tamale",2,["tamales"]],
      ["pupusa",1.5,["pupusas"]],["ceviche",1.5],["roti canai",1],["nasi lemak",1],["jianbing",0.8],["baozi",1,["bao","steamed bun"]],["yakitori",1.5],
      ["okonomiyaki",1],["tteokbokki",1.5],["hotteok",0.5],["bunny chow",0.6],["suya",0.5],["koshari",0.5],["ful medames",0.3,["ful"]],["simit",0.5],
      ["lahmacun",0.5],["chimney cake",0.4,["kurtoskalacs","trdelnik"]],["langos",0.4,["lángos"]],["pierogi",1],["bratwurst",1.5],["frites",0.5],
      ["chicken rice",0.5],["cendol",0.4],["mango sticky rice",0.6],["balut",0.4],["isaw",0.1],["fish ball",0.6,["fishballs","fish balls"]],["egg waffle",0.4,["bubble waffle"]],
      ["roasted corn",1,["bhutta","grilled corn"]],["kachori",1],["litti chokha",0.4],["misal pav",0.6],["poha",0.8],["ragda pattice",0.4],["egg roll",0.8],["frankie",1],
      ["chicken 65",0.5],["bhutte ka kees",0.1],["kulcha",0.5,["amritsari kulcha"]],["jhal muri",0.3],["ghugni",0.1],["puri sabzi",0.3],["chana chaat",0.4],
      ["mirchi bajji",0.3,["mirchi vada"]],["sabudana vada",0.3],["kothu parotta",0.3],["bun maska",0.3],["chaap",0.3,["soya chaap"]],["paratha",1.5],["dim sum",1.5],
      ["gyoza",1],["bulgogi",0.5],["hot pot",0.3],["skewers",1,["chuan","chuanr"]],["scallion pancake",0.4],["stinky tofu",0.3],["halo halo",0.2],["acaraje",0.1],
      ["pastel",0.1],["choripan",0.3,["choripán"]],["anticucho",0.2,["anticuchos"]],["salteña",0.1,["saltena"]],["grilled cheese",1],["philly cheesesteak",1.5,["cheesesteak"]],
      ["funnel cake",1],["fried oreo",0.3,["fried oreos"]],["nachos",2],["quesadilla",2],["burrito",3],["torta",0.5],["sope",0.2,["sopes"]],["tlayuda",0.1],["tostada",0.5]
    ]
  },
  international: {
    title: "International dishes",
    prompt: "Name a dish from a country other than your own.",
    hint: "Beyond pasta and sushi lies the deep end.",
    items: [
      ["pizza",30],["sushi",28],["pasta",22],["tacos",15,["taco"]],["curry",12],["ramen",12],["biryani",11],["pad thai",10],["paella",9],["butter chicken",8],
      ["fried rice",7],["dumplings",7,["dumpling"]],["lasagna",7,["lasagne"]],["pho",6],["kimchi",5],["falafel",5],["hummus",5],["shawarma",5],["burrito",5],
      ["spaghetti carbonara",4,["carbonara"]],["croissant",4],["kebab",4],["tandoori chicken",4],["peking duck",3.5],["moussaka",3],["goulash",3],["risotto",3.5],
      ["gnocchi",2.5],["tempura",3],["bibimbap",3],["tom yum",2.5,["tom yum soup"]],["green curry",2.5,["thai green curry"]],["schnitzel",2.5],["ratatouille",2.5],
      ["bouillabaisse",1],["coq au vin",1.5],["beef bourguignon",1.5,["boeuf bourguignon"]],["jollof rice",2,["jollof"]],["injera",1,["injera with wat"]],["tagine",2,["tajine"]],
      ["couscous",2.5],["pierogi",2],["borscht",1.5,["borsch"]],["ceviche",2],["feijoada",1],["churrasco",0.8],["arepa",1],["pupusa",0.5],["mole",1,["mole poblano"]],
      ["chiles en nogada",0.2],["pozole",0.6],["tamales",1.5],["empanadas",2],["poke",1.5,["poke bowl"]],["laksa",1],["rendang",1,["beef rendang"]],["nasi goreng",1],
      ["satay",1.5],["adobo",1,["chicken adobo"]],["sinigang",0.4],["lechon",0.4],["kare kare",0.2,["kare-kare"]],["okonomiyaki",0.8],["tonkatsu",1],["katsu curry",1],
      ["udon",1.5],["soba",0.8],["onigiri",0.6],["takoyaki",0.8],["mapo tofu",1],["kung pao chicken",2],["dim sum",2],["hot pot",1.2],["xiaolongbao",0.6,["soup dumplings"]],
      ["chow mein",2],["japchae",0.5],["tteokbokki",0.8],["samgyetang",0.2],["bulgogi",1.5],["fish and chips",3],["shepherd's pie",2,["shepherds pie"]],["haggis",0.6],
      ["bangers and mash",0.8],["beef wellington",1],["cassoulet",0.4],["raclette",0.4],["fondue",1],["rosti",0.3,["rösti"]],["wiener schnitzel",0.5],["sauerbraten",0.2],
      ["spätzle",0.3,["spaetzle"]],["bratwurst",1],["smørrebrød",0.1,["smorrebrod"]],["swedish meatballs",1],["gravlax",0.2],["pelmeni",0.3],["beef stroganoff",1.5],["khachapuri",0.4],
      ["khinkali",0.2],["plov",0.3,["pilaf"]],["manti",0.2],["dolma",0.8],["baklava",1],["lahmacun",0.3],["iskender kebab",0.2],["shakshuka",1.5],["koshari",0.3],["ful medames",0.2],
      ["bobotie",0.2],["bunny chow",0.3],["piri piri chicken",0.5,["peri peri chicken"]],["egusi soup",0.2],["fufu",0.5],["thieboudienne",0.1],["doro wat",0.3],["chicken tikka masala",3],
      ["dal makhani",1],["palak paneer",1],["chole",0.8],["masala dosa",2],["rogan josh",0.5],["vindaloo",0.8],["hyderabadi biryani",0.6],["kottu",0.1,["kothu roti"]],["hoppers",0.1,["appam"]],
      ["momo",1.5],["thukpa",0.2],["dal bhat",0.3],["pav bhaji",0.8],["poutine",1.5],["jerk chicken",1.2],["ackee and saltfish",0.2],["jambalaya",0.8],["gumbo",0.8],["clam chowder",0.6],
      ["mac and cheese",1,["macaroni and cheese"]],["cheeseburger",2],["bbq ribs",0.8,["ribs"]],["lomo saltado",0.3],["asado",0.3],["chimichurri steak",0.2],["pastel de choclo",0.05],["moqueca",0.1],
      ["bandeja paisa",0.1],["ropa vieja",0.1],["mofongo",0.1],["cuban sandwich",0.4],["banh mi",1.5],["bun cha",0.2],["cao lau",0.05],["amok",0.1,["fish amok"]],["larb",0.4],["khao soi",0.3],
      ["massaman curry",0.6],["som tam",0.5,["papaya salad","green papaya salad"]],["nasi lemak",0.6],["hainanese chicken rice",0.6,["chicken rice"]],["char kway teow",0.2],["bak kut teh",0.1],
      ["souvlaki",1],["gyro",1.5],["spanakopita",0.6],["pastitsio",0.1],["fabada",0.05],["tortilla española",0.5,["spanish omelette","tortilla espanola"]],["gazpacho",0.8],["jamon iberico",0.3,["jamón"]],
      ["bacalhau",0.1],["francesinha",0.1],["cacio e pepe",0.5],["osso buco",0.3],["saltimbocca",0.1],["arancini",0.5],["pho ga",0.2],["doner kebab",2,["döner"]],["pljeskavica",0.05],["ćevapi",0.2,["cevapi"]]
    ]
  },
  ingredients: {
    title: "Ingredients",
    prompt: "Name something you'd find in a recipe's ingredient list.",
    hint: "Flour, sugar, eggs — everyone's pantry looks the same at first.",
    items: [
      ["salt",35],["sugar",30],["flour",28],["egg",25,["eggs"]],["butter",22],["milk",20],["oil",15,["olive oil","vegetable oil"]],["garlic",14],["onion",13],["pepper",12,["black pepper"]],
      ["water",10],["cheese",10],["rice",9],["chicken",9],["tomato",8],["vanilla",7,["vanilla extract"]],["baking soda",6],["baking powder",6],["honey",6],["lemon",5,["lemon juice"]],
      ["ginger",5],["chili",5,["chilli","chili powder"]],["cinnamon",5],["yeast",4],["cream",4,["heavy cream"]],["yogurt",4,["yoghurt","curd","dahi"]],["soy sauce",4],["vinegar",4],
      ["cornstarch",3,["corn starch","cornflour"]],["cocoa",3,["cocoa powder"]],["chocolate",3],["bread crumbs",2.5,["breadcrumbs","panko"]],["mayonnaise",2.5,["mayo"]],["mustard",2.5],
      ["ketchup",2],["oats",2],["lentils",2,["dal"]],["beans",2],["coconut milk",2],["cumin",2],["turmeric",2],["paprika",1.5],["nutmeg",1.5],["oregano",1.5],["basil",2],
      ["parsley",1.5],["cilantro",1.5,["coriander leaves"]],["thyme",1],["rosemary",1],["bay leaf",0.8,["bay leaves"]],["sesame oil",0.8],["fish sauce",0.8],["miso",0.8],["tahini",0.6],
      ["maple syrup",1],["molasses",0.5],["brown sugar",2],["powdered sugar",1,["icing sugar","confectioners sugar"]],["gelatin",0.5,["gelatine"]],["agar",0.2,["agar agar"]],["cream of tartar",0.4],
      ["xanthan gum",0.2],["buttermilk",0.8],["condensed milk",0.8,["sweetened condensed milk"]],["evaporated milk",0.3],["ghee",1],["lard",0.4],["shortening",0.5],["semolina",0.5,["sooji","rava"]],
      ["chickpea flour",0.4,["besan","gram flour"]],["tapioca",0.3,["sabudana","tapioca starch"]],["arrowroot",0.1],["capers",0.4],["anchovies",0.4,["anchovy"]],["worcestershire sauce",0.5],["oyster sauce",0.4],
      ["hoisin",0.2,["hoisin sauce"]],["gochujang",0.4],["harissa",0.2],["za'atar",0.2,["zaatar"]],["sumac",0.2],["saffron",0.5],["cardamom",0.8],["star anise",0.3],["asafoetida",0.2,["hing"]],
      ["fenugreek",0.3,["methi seeds"]],["mustard seeds",0.3],["curry leaves",0.3],["kokum",0.05],["amchur",0.1,["dry mango powder"]],["jaggery",0.4,["gur"]],["rosewater",0.2,["rose water"]],["kewra",0.05,["kewra water"]],
      ["almonds",1.5],["walnuts",1],["cashews",1],["pistachios",0.6],["pine nuts",0.3],["sesame seeds",0.6],["poppy seeds",0.2,["khus khus"]],["chia seeds",0.4],["flaxseed",0.3,["flax seeds"]],
      ["tofu",0.8],["paneer",1],["mozzarella",1],["parmesan",1],["feta",0.5],["cream cheese",1],["ricotta",0.3],["mascarpone",0.2],["sour cream",0.8],["beef",2],["pork",1.5],["shrimp",1],["bacon",1.5],
      ["liquid smoke",0.05],["msg",0.2,["monosodium glutamate","ajinomoto"]],["nutritional yeast",0.1],["pectin",0.1],["lecithin",0.03],["citric acid",0.1],["glucose syrup",0.05],["invert sugar",0.02],
      ["ice",0.3],["wine",0.8,["white wine","red wine"]],["beer",0.3],["stock",1,["broth","chicken stock","vegetable stock"]],["bouillon",0.2,["bouillon cube","stock cube"]],["mirin",0.2],["sake",0.2],["dashi",0.2],["kombu",0.1],["bonito flakes",0.1,["katsuobushi"]]
    ]
  },
  drinks: {
    title: "Drinks",
    prompt: "Name a drink.",
    hint: "Water counts. It also scores like water.",
    items: [
      ["water",35],["coffee",32],["tea",30],["coke",22,["coca cola","coca-cola","cola"]],["juice",18,["orange juice","apple juice"]],["milk",17],["lemonade",14],["beer",13],
      ["wine",12],["soda",10,["pop","soft drink"]],["milkshake",8],["smoothie",7],["hot chocolate",7,["cocoa"]],["sprite",6],["pepsi",6],["iced tea",5],["latte",5],
      ["cappuccino",4],["espresso",4],["green tea",4],["chai",4,["masala chai"]],["lassi",4,["mango lassi"]],["whiskey",4,["whisky"]],["vodka",3.5],["mojito",3],["margarita",3],
      ["champagne",3],["red bull",2.5],["mocktail",2],["boba",2.5,["bubble tea","boba tea"]],["kombucha",2],["matcha",2],["coconut water",2],["buttermilk",1.5,["chaas","chhaas"]],
      ["nimbu pani",1.5,["shikanji","shikanjvi"]],["jaljeera",0.8,["jal jeera"]],["aam panna",0.5],["thandai",0.6],["sharbat",0.8,["rooh afza"]],["badam milk",0.5],["filter coffee",1],
      ["horchata",1],["sangria",1],["gin and tonic",1.5,["gin tonic","g and t"]],["old fashioned",0.8],["negroni",0.6],["martini",1.5],["cosmopolitan",0.6],["pina colada",1,["piña colada"]],
      ["bloody mary",0.6],["mimosa",0.6],["mead",0.3],["cider",1.5],["sake",0.8],["soju",0.6],["baijiu",0.1],["pisco sour",0.2],["caipirinha",0.3],["mate",0.5,["yerba mate"]],
      ["kvass",0.2],["ayran",0.3],["doogh",0.1],["kefir",0.5],["kumis",0.05],["tej",0.03],["chicha",0.05],["tepache",0.1],["sima",0.02],["birch sap",0.02],["switchel",0.05],
      ["ginger beer",0.8],["ginger ale",1],["root beer",1],["dr pepper",1.5],["mountain dew",1.5],["fanta",2],["7up",1],["tonic water",0.5],["club soda",0.4,["sparkling water"]],
      ["oolong tea",0.4],["earl grey",0.5],["chamomile tea",0.5],["hibiscus tea",0.3,["agua de jamaica","roselle"]],["rooibos",0.2],["yakult",0.3],["calpis",0.1,["calpico"]],["ramune",0.2],
      ["americano",0.8],["flat white",0.6],["macchiato",0.5],["affogato",0.2],["turkish coffee",0.4],["cold brew",0.8],["dalgona coffee",0.3],["frappuccino",1],["eggnog",0.6],["mulled wine",0.3],
      ["absinthe",0.3],["limoncello",0.2],["sherry",0.2],["port",0.3],["vermouth",0.1],["rum",2],["tequila",2],["brandy",0.8],["cognac",0.3],["bourbon",1],["mezcal",0.3],["grappa",0.05],
      ["protein shake",0.8],["energy drink",1.5],["sports drink",0.5,["gatorade"]],["almond milk",0.6],["oat milk",0.6],["soy milk",0.5],["cendol",0.1],["bandung",0.05],["teh tarik",0.2],["sikhye",0.05],["bael sharbat",0.02],["kanji",0.02]
    ]
  },
  spices: {
    title: "Spices",
    prompt: "Name a spice.",
    hint: "Salt is a mineral. Pepper is for amateurs.",
    items: [
      ["pepper",30,["black pepper"]],["cinnamon",28],["cumin",20],["turmeric",18],["paprika",15],["chili powder",13,["chilli powder","red chili powder"]],["ginger",12],
      ["garlic powder",10],["nutmeg",10],["cardamom",9],["cloves",9,["clove"]],["oregano",8],["coriander",8,["dhania"]],["cayenne",7,["cayenne pepper"]],["curry powder",6],
      ["salt",6],["saffron",5],["allspice",4],["mustard seed",3.5,["mustard seeds"]],["fennel seed",3,["fennel","saunf"]],["star anise",3],["bay leaf",3,["bay leaves"]],["garam masala",3.5],
      ["fenugreek",2.5,["methi"]],["basil",2.5],["thyme",2],["rosemary",2],["onion powder",2],["vanilla",2],["anise",1.5,["aniseed"]],["mace",1.2],["asafoetida",1.2,["hing"]],
      ["caraway",1],["sumac",1],["za'atar",0.8,["zaatar"]],["nigella",0.8,["kalonji","black seed","onion seed"]],["ajwain",0.8,["carom seeds","carom"]],["white pepper",1],["sichuan pepper",0.6,["szechuan pepper"]],
      ["juniper",0.4,["juniper berries"]],["galangal",0.3],["tamarind",0.5],["amchur",0.3,["mango powder"]],["kashmiri chili",0.5,["kashmiri red chili"]],["black cardamom",0.4],["long pepper",0.1,["pippali"]],
      ["grains of paradise",0.05],["cubeb",0.03],["mahlab",0.03],["annatto",0.2,["achiote"]],["kokum",0.1],["dried lime",0.1,["black lime","loomi"]],["berbere",0.1],["ras el hanout",0.3],
      ["chinese five spice",0.8,["five spice"]],["chaat masala",0.6],["sambar powder",0.2],["panch phoron",0.1],["celery seed",0.3],["dill seed",0.2],["dill",0.5],["marjoram",0.3],["tarragon",0.4],
      ["sage",0.8],["lemongrass",0.5],["kaffir lime",0.2,["makrut lime","lime leaves"]],["wasabi",0.3],["horseradish",0.2],["smoked paprika",0.8],["chipotle",0.5],["ancho",0.1],["gochugaru",0.2],["shichimi",0.05,["shichimi togarashi"]],
      ["pink peppercorn",0.1],["green peppercorn",0.1],["fenugreek leaves",0.3,["kasuri methi"]],["curry leaves",0.4],["poppy seed",0.2,["khus khus"]],["sesame",0.4],["licorice",0.1,["liquorice","mulethi"]],["vanilla bean",0.3],
      ["lavender",0.2],["rose",0.1,["rose petals"]],["ginger powder",0.5,["dry ginger","sonth"]],["stone flower",0.03,["dagad phool","kalpasi"]],["cassia",0.1],["wild garlic",0.05]
    ]
  }
};

// Letter and cross-category challenges for the food pack.
const FOOD_RANDOM = [
  {type:"letter", letters:"ABCDEFGHJKLMNOPRSTW".split("")},
  {type:"any", prompt:"Name any food or drink — the rarer the better.", hint:"Everything in the game is fair game."},
  {type:"cat2", prompt:"Name a dessert or a street food.", cats:["desserts","streetfood"], hint:"Two menus, one plate."},
  {type:"cat2", prompt:"Name a fruit or a vegetable.", cats:["fruits","vegetables"], hint:"Tomato lives in both. Nobody is impressed."},
  {type:"cat2", prompt:"Name a spice or an ingredient.", cats:["spices","ingredients"], hint:"Cumin is in both. Still common."}
];

