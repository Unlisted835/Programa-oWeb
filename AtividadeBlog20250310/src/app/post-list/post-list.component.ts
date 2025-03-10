import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
   selector: 'app-post-list',
   imports: [RouterLink, RouterOutlet, NgFor],
   templateUrl: './post-list.component.html',
   styleUrl: './post-list.component.css'
})
export class PostListComponent {
   getPostDetails(id: number): object | undefined {
      return this.posts.find(post => post.id === id);
   }

   posts = [
      {
         id: 1,
         title: 'Exploring the City',
         shortDescription: 'Discover hidden gems and local favorites in urban landscapes.',
         time: 'now',
         longDescription: 'Urban landscapes are teeming with hidden gems and local favorites waiting to be discovered. From quaint coffee shops tucked away in alleyways to vibrant street art that tells the story of the city\'s culture, there\'s always something new to explore. Start your journey by wandering through lesser-known neighborhoods, where you can stumble upon unique boutiques, artisanal markets, and cozy eateries that offer a taste of the local flavor. <br>One of the best ways to uncover these hidden treasures is by engaging with the locals.Strike up conversations with shop owners, baristas, and residents who can provide insider tips on the best places to visit.Additionally, consider joining local tours or community events that showcase the city\'s history and culture. <br>These experiences not only enrich your understanding of the city but also create lasting memories.Don\'t forget to document your adventures! Whether through photography, journaling, or social media, capturing the essence of your urban explorations allows you to share your discoveries with others and inspire them to embark on their own city adventures. Remember, the beauty of exploring the city lies in the unexpected, so keep an open mind and let curiosity guide you.',
         imgRef: 'https://picsum.photos/id/43/300'
      },
      {
         id: 2,
         title: 'Healthy Eating Tips',
         shortDescription: 'Simple and effective ways to improve your diet.',
         time: '2 mins ago',
         longDescription: "Maintaining a healthy diet doesn't have to be complicated or restrictive. Start by incorporating more whole foods into your meals, such as fruits, vegetables, whole grains, and lean proteins. These nutrient-dense options provide essential vitamins and minerals that support overall health and well-being. Additionally, try to minimize processed foods and sugary snacks, which can contribute to weight gain and other health issues. <br>Meal planning and preparation can also play a significant role in healthy eating. By setting aside time each week to plan your meals and prepare ingredients, you can ensure that you have nutritious options readily available. This practice not only saves time but also reduces the temptation to opt for unhealthy convenience foods. Consider experimenting with new recipes and cooking techniques to keep your meals exciting and flavorful. <br>Hydration is another crucial aspect of a healthy diet. Aim to drink plenty of water throughout the day to stay hydrated and support bodily functions. Herbal teas and infused water can be great alternatives if you find plain water boring. Lastly, listen to your body's hunger and fullness cues, and practice mindful eating. This approach helps you develop a healthier relationship with food and prevents overeating.",
         imgRef: 'https://picsum.photos/id/75/300'
      },
      {
         id: 3,
         title: 'Travel on a Budget',
         shortDescription: 'Affordable travel destinations and tips for saving money.',
         time: '5 mins ago',
         longDescription: "Traveling on a budget doesn't mean sacrificing quality experiences. With careful planning and a bit of creativity, you can explore new destinations without breaking the bank. Start by researching affordable travel options, such as budget airlines, off-peak travel times, and alternative accommodations like hostels, guesthouses, or vacation rentals. These options often provide significant savings compared to traditional hotels. <br>Once you've arrived at your destination, look for free or low-cost activities to enjoy. Many cities offer free walking tours, public parks, and museums with discounted or free admission days. Additionally, explore local markets and street food vendors for affordable and delicious meals. Not only do these options save money, but they also provide an authentic taste of the local culture. <br>Another way to save money while traveling is by using public transportation or walking instead of relying on taxis or rental cars. This approach not only reduces expenses but also allows you to experience the destination more intimately. Lastly, consider traveling with a group or finding travel companions to share costs for accommodations, transportation, and activities. With a bit of planning and resourcefulness, budget travel can be both enjoyable and rewarding.",
         imgRef: 'https://picsum.photos/id/17/300'
      },
      {
         id: 4,
         title: 'Tech Trends 2025',
         shortDescription: 'The latest innovations shaping our future.',
         time: '15 mins ago',
         longDescription: "As we look ahead to 2025, several tech trends are poised to shape our future. One of the most significant developments is the continued advancement of artificial intelligence (AI) and machine learning. These technologies are becoming increasingly integrated into various industries, from healthcare and finance to entertainment and education. AI-driven innovations are expected to enhance productivity, improve decision-making, and create new opportunities for businesses and individuals alike. <br>Another trend to watch is the rise of the Internet of Things (IoT). With more devices becoming interconnected, the IoT is set to revolutionize how we interact with our environment. Smart homes, wearable technology, and connected vehicles are just a few examples of how IoT is transforming everyday life. This trend is also driving advancements in data analytics, as the vast amounts of data generated by IoT devices require sophisticated tools to analyze and interpret. <br>Sustainability and green technology are also gaining momentum as global awareness of environmental issues grows. Innovations in renewable energy, electric vehicles, and sustainable manufacturing practices are expected to play a crucial role in addressing climate change and promoting a more sustainable future. As these technologies continue to evolve, they will likely become more accessible and affordable, making it easier for individuals and businesses to adopt eco-friendly practices.",
         imgRef: 'https://picsum.photos/id/8/300'
      },
      {
         id: 5,
         title: 'Mindfulness Practices',
         shortDescription: 'Techniques to incorporate mindfulness into your routine.',
         time: '40 mins ago',
         longDescription: "Incorporating mindfulness into your daily routine can have profound benefits for your mental and physical well-being. One simple way to practice mindfulness is through meditation. Set aside a few minutes each day to sit quietly, focus on your breath, and observe your thoughts without judgment. This practice can help reduce stress, improve concentration, and promote a sense of inner peace. <br>Another effective mindfulness technique is mindful eating. Instead of rushing through meals, take the time to savor each bite, paying attention to the flavors, textures, and aromas of your food. This approach not only enhances your dining experience but also helps you develop a healthier relationship with food and prevents overeating. <br>Mindful movement, such as yoga or tai chi, is another excellent way to incorporate mindfulness into your routine. These practices combine physical exercise with mental focus, helping you stay present and connected to your body. Additionally, spending time in nature can be a powerful mindfulness practice. Whether it's a walk in the park or a hike in the mountains, immersing yourself in the natural world can help you feel grounded and rejuvenated. <br>By integrating these mindfulness practices into your daily life, you can cultivate a greater sense of awareness, reduce stress, and enhance your overall well-being. Remember, mindfulness is a journey, and it's important to be patient and compassionate with yourself as you develop these new habits.",
         imgRef: 'https://picsum.photos/id/65/300'
      }
   ];
}
