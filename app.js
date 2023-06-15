// DOM MANIPULATION

// Goal: Retail Site

// Dynamically change the entire site with a click of a button

// General -- Mens -- Womens -- Children

let majorContainer = {
  mens: {
    headImage:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    optionTags: ["Boots", "Flannels", "rugged Wear", "Shaving Cream"],
    prodcutImages: [
      {
        name: "Sneakers",
        pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMHNuZWFrZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Boots",
        pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGJvb3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Flannels",
        pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
      {
        name: "Scarves",
        pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
      {
        name: "Hoodies",
        pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
      {
        name: "Hats",
        pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=423&q=80",
      },
    ],
    textDescription:
      "Update your everyday wardrobe with our collection of men’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.",
    lowerImage:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  womens: {
    headImage:
      "https://plus.unsplash.com/premium_photo-1671198905435-20f8d166efb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    optionTags: ["Boots", "Flannels", "rugged Wear", "Shaving Cream"],
    prodcutImages: [
      {
        name: "Sneakers",
        pic: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW5zJTIwc25lYWtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Boots",
        pic: "https://images.unsplash.com/photo-1542841791-1925b02a2bbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVucyUyMGJvb3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Flannels",
        pic: "https://images.unsplash.com/photo-1529066659029-2d063ccffc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxhbm5lbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Scarves",
        pic: "https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NhcnZlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Hoodies",
        pic: "https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9vZGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Hats",
        pic: "https://images.unsplash.com/photo-1569520254493-8edfdeaa8fae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
    textDescription:
      "Refresh your daily rotation with our women’s clothing range. With the freshest styles available all in one place, you can expect everyday basics, like women's tops and skirts, as well as must-have knitwear and cozy loungewear for downtime days. Plans to go out? Our women's dresses line up mini, midi and maxi styles that were made for summer evenings, while our stylish jeans and pants offer something to flatter every silhouette. Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are",
    lowerImage:
      "https://images.unsplash.com/photo-1607748851687-ba9a10438621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  children: {
    headImage:
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGRyZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    optionTags: ["Boots", "Flannels", "rugged Wear", "Shaving Cream"],
    prodcutImages: [
      {
        name: "Sneakers",
        pic: "https://images.unsplash.com/flagged/photo-1575563578148-814fd0b1b5fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWxkcmVucyUyMHNuZWFrZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Boots",
        pic: "https://images.unsplash.com/photo-1584225064881-6a1380d4d71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWxkcmVuJTIwYm9vdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Flannels",
        pic: "https://images.unsplash.com/photo-1615863712239-becde744591a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NhcmYlMjBraWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=600",
      },
      {
        name: "Scarves",
        pic: "https://images.unsplash.com/photo-1667434766386-95acd34ee456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NhcmYlMjBraWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Hoodies",
        pic: "https://images.unsplash.com/photo-1675163918357-a27b2b75041b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvb2RpZXMlMjBraWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Hats",
        pic: "https://images.unsplash.com/photo-1603923407810-1e4d9ee1c220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF0JTIwa2lkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
    ],
    textDescription:
      "Refill on their everyday essentials with our kids' clothes. You'll find an extensive selection of kids' tops and T-Shirts featuring colors that pop, plus adorable designs to suit their personality. Pair their favorite cardigan or sweater with our kids' jeans and pants – you'll find an array of cuts and styles, including chinos and cargo pants, to name a few. outdoor adventures on the cards? No problem. Keep chills at bay and little ones warm with our standout edit of kids' jackets and coats – and don't forget to scroll our kids' shoes for wellington boots, trendy sneakers and summer",
    lowerImage:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
};

let body = document.querySelector("body");
let mainImage = document.querySelector(".mainImg");
let option = document.querySelector(".options");
let miniOp = document.querySelector(".choice");
let productBox = document.querySelector(".productContainer");
let pic = document.querySelector(".polaroid");
let textBox = document.querySelector(".textContainer");

// Change to Mens Wear Page
const changeAllMens = () => {
  changeMensTopPic();
  changeMensOptions();
  mensProduct();
  changeMensPolaroid();
  changeMensText();

  body.style.backgroundColor = "LightSteelBlue";
};

const changeMensTopPic = () => {
  // createImage
  let newImage = document.createElement("img");
  newImage.setAttribute("src", majorContainer.mens.headImage);
  newImage.setAttribute("class", "topPic");
  // replaceWith current
  mainImage.replaceWith(newImage);
};

const changeMensOptions = () => {
  majorContainer.mens.optionTags.forEach((tagname) => {
    // Create Element
    let txt = document.createElement("div");
    txt.innerHTML = tagname;
    // replace element with new element
    option.replaceChild(txt);
  });
};

const mensProduct = () => {
  majorContainer.mens.prodcutImages.forEach((obj) => {
    let shopBox = document.createElement("img");
    shopBox.setAttribute("src", obj.pic);
    shopBox.setAttribute("class", "product");
    productBox.append(shopBox);
  });
};

const changeMensPolaroid = () => {
  pic.setAttribute("src", majorContainer.mens.lowerImage);
};

const changeMensText = () => {
  textBox.innerHTML = majorContainer.mens.textDescription;
};

// Change to Womens Page
const changeAllWomens = () => {
  changeWomensTopPic();
  changeWomensOptions();
  womensProduct();
  changeWomensPolaroid();
  changeWomensText();

  body.style.backgroundColor = "MediumOrchid";
  body.style.color = "white";
};

const changeWomensTopPic = () => {
  // createImage
  let newImage = document.createElement("img");
  newImage.setAttribute("src", majorContainer.womens.headImage);
  newImage.setAttribute("class", "topPic");
  // replaceWith current
  mainImage.replaceWith(newImage);
};

const changeWomensOptions = () => {
  majorContainer.womens.optionTags.forEach((tagname) => {
    // Create Element
    let txt = document.createElement("div");
    txt.innerHTML = tagname;
    // replace element with new element
    option.append(txt);
  });
};

const womensProduct = () => {
  majorContainer.womens.prodcutImages.forEach((obj) => {
    let shopBox = document.createElement("img");
    shopBox.setAttribute("src", obj.pic);
    shopBox.setAttribute("class", "product");
    productBox.append(shopBox);
  });
};

const changeWomensPolaroid = () => {
  pic.setAttribute("src", majorContainer.womens.lowerImage);
};

const changeWomensText = () => {
  textBox.innerHTML = majorContainer.womens.textDescription;
};

// Change to Childrens Page
const changeAllChildren = () => {
  changeChildrenTopPic();
  changeChildrenOptions();
  childrenProduct();
  changeChildrenPolaroid();
  changeChildrenText;

  body.style.backgroundColor = "Thistle";
};

const changeChildrenTopPic = () => {
  // createImage
  let newImage = document.createElement("img");
  newImage.setAttribute("src", majorContainer.children.headImage);
  newImage.setAttribute("class", "topPic");
  // replaceWith current
  mainImage.replaceWith(newImage);
};

const changeChildrenOptions = () => {
  majorContainer.children.optionTags.forEach((tagname) => {
    // Create Element
    let txt = document.createElement("div");
    txt.innerHTML = tagname;
    // replace element with new element
    option.append(txt);
  });
};

const childrenProduct = () => {
  majorContainer.children.prodcutImages.forEach((obj) => {
    let shopBox = document.createElement("img");
    shopBox.setAttribute("src", obj.pic);
    shopBox.setAttribute("class", "product");
    productBox.append(shopBox);
  });
};

const changeChildrenPolaroid = () => {
  pic.setAttribute("src", majorContainer.children.lowerImage);
};

const changeChildrenText = () => {
  textBox.innerHTML = majorContainer.children.textDescription;
};
