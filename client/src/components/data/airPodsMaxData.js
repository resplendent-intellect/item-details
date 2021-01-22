const airPodsMax = {
  _id: 1,
  brand: 'Apple',
  name: 'AirPods Max',
  model: 'MGYH3AM/A',
  color: 'Space Gray',
  sku: 6373460,
  price: 549.00,
  variations: [{
    _id: 1,
    variationType: 'Color',
    variationItems: [{
      _id: 0,
      name: 'Space Gray',
      price: 549.00,
      image: 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/airpods_max_space_gray_1.jpg',
    },
    {
      _id: 1,
      name: 'Sky Blue',
      price: 549.00,
      image: 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/airpods_max_sky_blue.jpg',
    },
    {
      _id: 2,
      name: 'Green',
      price: 549.00,
      image: 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/airpods_max_green.jpg',
    },
    {
      _id: 3,
      name: 'Pink',
      price: 549.00,
      image: 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/airpods_max_pink.jpg',
    },
    {
      _id: 4,
      name: 'Silver',
      price: 549.00,
      image: 'https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/airpods_max_silver.jpg',
    }],
  }],
  protectionPlans: [
    {
      name: 'AppleCare+ for AirPods Max - 2 Year Plan',
      price: 59.00,
    },
  ],
  inStock: 'Backordered',
  offers: [{
    offerType: 'Cardmember Offers',
    offers: [
      { title: '12 Month Financing' },
      { title: 'Get rewards' },
    ],
  }],
  mightAlsoNeed: {
    name: 'Charger',
    price: 30.00,
  },
};

export default airPodsMax;
