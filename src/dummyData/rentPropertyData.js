const rentPropertyData = [
  {
    id: "O4Ld78YdeeF5",
    name: "3 BHK in Kaushalya nagar",
    imgUrl:
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    address: 
    "2699 Green Valley , Highland Lake, FL",
    rent: 40000,
    isPopular: false,
    bedsQty: 3,
    bathroomQty: 3,
    propertyArea: "1000",
    city: "Seattle",
    moveInDate: "09/07/2022",
    type: "apartment",
  },
  {
    id: "J3Ld2YdeoH5",
    name: "1 BHK in Sector-19, Kharghar",
    imgUrl:
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    address: 
    " 3228 Marcus Street",
    rent: 20000,
    isPopular: false,
    bedsQty: 1,
    bathroomQty: 2,
    propertyArea: "1200",
    city: "New York",
    moveInDate: "09/11/2022",
    type: "apartment",
  },
  {
    id: "I8Lg2YkTH5",
    name: "1 BHK in Lodha Palava, Dombivali",
    imgUrl:
    "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    address: 
    " 1381 Joyce Street",
    rent: 20005,
    isPopular: false,
    bedsQty: 1,
    bathroomQty: 2,
    propertyArea: "1250",
    city: "Seattle",
    moveInDate: "09/08/2022",
    type: "apartment",
  },
  {
    id: "WK4TYnocIY",
    name: "2 BHK in Lok Darshan, Marol",
    imgUrl:
      "https://is1-3.housingcdn.com/01c16c28/826019585322cf78ff7d32070ceaed07/v0/fs/2_bhk_apartment-for-rent-andheri_east-Mumbai-bedroom.jpg.webp",
    address: "Lok Darshan, Marol, Andheri-East",
    rent: 2095,
    isPopular: false,
    bedsQty: 2,
    bathroomQty: 2,
    propertyArea: "1000",
    city: "mumbai",
    moveInDate: "09/08/2022",
    type: "apartment",
  },
  {
    id: "QAd3HuAbq7",
    name: "3 BHK in Samraat, Gangapur",
    imgUrl:
    "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: 
    " 1427 Monroe Street",

    rent: 15000,
    isPopular: false,
    bedsQty: 2,
    bathroomQty: 2,
    propertyArea: "1000",
    city: "Arizona",
    moveInDate: "09/14/2022",
    type: "apartment",
  },
  {
    id: "Gr2XYzz29c",
    name: "8 BHK Villa for Rent in Pali Hill",
    imgUrl:
    "https://images.unsplash.com/photo-1574120583586-de8847ae992c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address:
    " 4579 McDowell Street",
    rent: 180000,
    isPopular: false,
    bedsQty: 8,
    bathroomQty: 4,
    propertyArea: "15000",
    city: "Texas",
    moveInDate: "09/10/2022",
    type: "villa",
  },
  {
    id: "wxVqoBWl9u",
    name: "3 BHK Villa for Rent in Panvel",
    imgUrl:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ,address: "Panvel, Navi Mumbai",
    rent: 150000,
    isPopular: false,
    bedsQty: 3,
    bathroomQty: 3,
    propertyArea: "2000",
    city: "New York",
    moveInDate: "09/11/2022",
    type: "villa",
  },
  {
    id: "jxMqoBWl9u",
    name: "RedhomeX Sea Glass Villa",
    imgUrl:
    "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80",
    address:
    "1481 McDowell Road",
    rent: 200000,
    isPopular: false,
    bedsQty: 3,
    bathroomQty: 3,
    propertyArea: "2000",
    city: "Seattle",
    moveInDate: "09/12/2022",
    type: "villa",
  },
  {
    id: "dxVqoBgl9u",
    name: "4 BHK Villa for Rent in Panvel",
    imgUrl:
    "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80",
    address:
    "4579 McDowell Street",
    rent: 1100000,
    isPopular: false,
    bedsQty: 4,
    bathroomQty: 3,
    propertyArea: "2000",
    city: "Texas",
    moveInDate: "09/13/2022",
    type: "villa",
  },
  {
    id: "KFuCEwE1pN",
    name: "1RK Studio Apartment, Nyati Elysia",
    imgUrl:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address:
    "3228 Marcus Street",
    rent: 15000,
    isPopular: false,
    bedsQty: 1,
    bathroomQty: 1,
    propertyArea: "269",
    city: "Seattle",
    moveInDate: "09/17/2022",
    type: "studio",
  },
  {
    id: "lFuHEwE1pN",
    name: "1RK Studio Apartment, Satyavihar society",
    imgUrl:
    "https://images.unsplash.com/photo-1567428485548-c499e4931c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address:
    "1427 Monroe Street",
    rent: 9000,
    isPopular: false,
    bedsQty: 1,
    bathroomQty: 1,
    propertyArea: "249",
    city: "Texas",
    moveInDate: "09/18/2022",
    type: "studio",
  },
  {
    id: "PFuGEwE1pN",
    name: "3BHK Apartment, Panchshil Towers",
    imgUrl:
    "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: 
    "1381 Joyce Street",
    rent: 35000,
    isPopular: false,
    bedsQty: 3,
    bathroomQty: 3,
    propertyArea: "1648",
    city: "Texas",
    moveInDate: "09/19/2022",
    type: "apartment",
  },
];

export default rentPropertyData;
