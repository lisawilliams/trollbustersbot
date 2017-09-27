// from list templates example 

module.exports = {
  cities: [
    { name: 'San Francisco', code: 'SF', image: `${process.env.BOT_BASE_URL}/san_francisco.jpg` },
    { name: 'New York', code: 'NY', image: `${process.env.BOT_BASE_URL}/new_york.jpg` },
    { name: 'Frankfurt', code: 'FRA', image: `${process.env.BOT_BASE_URL}/frankfurt.jpg` },
    { name: 'Budapest', code: 'BUD', image: `${process.env.BOT_BASE_URL}/budapest.jpg` },
    { name: 'Kuala Lumpur', code: 'KL', image: `${process.env.BOT_BASE_URL}/kuala_lumpur.jpg` }
  ]
}
