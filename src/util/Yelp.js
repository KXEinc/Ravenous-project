const apiKey =
  "YMoHHyJRYm94F7pQleUJ9NtaQS2MggOBdKUVKjvX1K5Q4qG-3ZzcqJMNAEaANMmoL38TqwwwLGp7VO9YMNUeyxPahz9ljuGkuyfnLIQdow9ozhKjc6b2aMn66zsaXnYx";

const Yelp = {
  serchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_Code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        } else {
          return [];
        }
      });
  }
};

export default Yelp;
