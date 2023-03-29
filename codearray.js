// Work
work_array = [
  '<img src="./images/work1.jpg"><div class="title">Wai</div><p>Wai follows the path of Alekse&#301; Matveevich Pozdneev, a Russian orientalist specializing in Mongol studies, who in 1892 led a year-long expedition to China and Mongolia, traveling through the vast region extending from Beijing to Zhangjiakou. Pozdneev&#39;s journey resulted in an extensive travelogue. Taking this travelogue as a guide, Xiaofei Mo visited and studied the many sites along the Beijing-Zhangjiakou route &mdash; such as Xiguanshi (西贯市), Juyong Pass (居庸关), Chadaocheng (岔道城), Xuanhua (宣化), and others &mdash; that Pozdneev describes in his book.</p>',

  '<img src="./images/work2.jpg"><div class="title">Wai</div><p>Wai follows the path of Aleksei&#301; Matveevich Pozdneev, a Russian orientalist specializing in Mongol studies, who in 1892 led a year-long expedition to China and Mongolia, traveling through the vast region extending from Beijing to Zhangjiakou. Pozdneev&#39;s journey resulted in an extensive travelogue. Taking this travelogue as a guide, Xiaofei Mo visited and studied the many sites along the Beijing-Zhangjiakou route &mdash; such as Xiguanshi (西贯市), Juyong Pass (居庸关), Chadaocheng (岔道城), Xuanhua (宣化), and others &mdash; that Pozdneev describes in his book.</p>',

  '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/799674183?h=f69d90bdd2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" class="video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script><div class="title">Lovers Revolt, Lovers Revolve</div><p><em>Lovers Revolt, Lovers Revolve: Stories against dictators, colonizers and all other monsters</em>, features the first chapter of a collaborative serial fiction written by Cici Wu and Xiaofei Mo, their works in this special presentation also expand from texts to drawings and a film. Speculating upon 前世 Past Lives and 來生 Future Lives of Hong Kong, this work explores the relationship between love and revolution. Particularly inspired by the recent transnationally geopolitical struggles, the writers want to suggest another set of languages to uncover the invisible world, to restore a different past and manifest a future towards liberation. Cast of characters in this chapter includes a thousand-year-old immortal girl, a lantern from Khotan, lantern&#39;s shadow, early cinema, a lighthouse, a disappeared island, Xi Xi&#39;s floating city, ghost of cinema, a tooth, a mirror, and time</p>',

  '<img src="./images/work4.jpg"><div class="title">Lovers Revolt, Lovers Revolve</div><p><em>Lovers Revolt, Lovers Revolve: Stories</em> against dictators, colonizers and all other monsters, features the first chapter of a collaborative serial fiction written by Cici Wu and Xiaofei Mo, their works in this special presentation also expand from texts to drawings and a film. Speculating upon 前世 Past Lives and 來生 Future Lives of Hong Kong, this work explores the relationship between love and revolution. Particularly inspired by the recent transnationally geopolitical struggles, the writers want to suggest another set of languages to uncover the invisible world, to restore a different past and manifest a future towards liberation. Cast of characters in this chapter includes a thousand-year-old immortal girl, a lantern from Khotan, lantern&#39;s shadow, early cinema, a lighthouse, a disappeared island, Xi Xi&#39;s floating city, ghost of cinema, a tooth, a mirror, and time</p>',

  '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/799674183?h=f69d90bdd2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" class="video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script><div class="title">Lovers Revolt, Lovers Revolve</div><p><em>Lovers Revolt, Lovers Revolve</em> traverses across the past lives and future lives, with a sentient mirror and a missing tooth playing important roles. The film is the second chapter of <em>Lovers Revolt Lovers Revolve: stories against dictators, colonizers, and all other monsters</em>, a collaborative fiction project with Cici Wu, consisting of video, works on paper, and an on-going series of publications.</p>',

  '<img src="./images/work6.jpg"><div class="title">Lovers Revolt, Lovers Revolve</div><p><em>Lovers Revolt, Lovers Revolve</em> traverses across the past lives and future lives, with a sentient mirror and a missing tooth playing important roles. The film is the second chapter of <em>Lovers Revolt Lovers Revolve: stories against dictators, colonizers, and all other monsters</em>, a collaborative fiction project with Cici Wu, consisting of video, works on paper, and an on-going series of publications.</p>',

  '<img src="./images/work7.jpg"><div class="title">Willow (wip)</div><p></p>'
]

function get_random_work(){
  // Get a random index
  random_index = Math.floor(Math.random() * work_array.length);

  // Get code using the random_index
  selected_image = work_array[random_index]

  // Insert the code
  document.getElementById('wrapper').innerHTML = `${selected_image}`
}

// Collaborations
collaborations_array = [
  '<img src="./images/collaborations1.jpg"><div class="title">Lovers Revolt, Lovers Revolve&nbsp;&nbsp;<a href="#" style="font-size: 0.7em !important;"">(PDF link)</a></div><p><em>Lovers Revolt, Lovers Revolve</em> traverses across the past lives and future lives, with a sentient mirror and a missing tooth playing important roles. The film is the second chapter of <em>Lovers Revolt Lovers Revolve: stories against dictators, colonizers, and all other monsters</em>, a collaborative fiction project with Cici Wu, consisting of video, works on paper, and an on-going series of publications.</p>',

  '<img src="./images/collaborations2.jpg" style="width:50% !important; margin-top:10%; margin-bottom:10%;"><div class="title">The Room of Spirits and Time</div><p>The Room of Spirit and Time is initiated by Taro Masushio, Xiaofei Mo, Ali Van, Wang Xu and Cici Wu. Taking the form of collaborative works and events, the first iteration at Queens Museum begins with readings of ancient and medieval Asian texts as a possible means to reimagine and cultivate a romantic epistemology. In this room, both learning and unlearning take place; we invite temporary amnesia, a kind of forgetting and drifting via exercises, recitations, meditations, improvisations...fluid and ephemeral sleepwalking. Along these activities are non-activities, where TRST functions as a hub for leisurely gatherings, for artists and thinkers, dreams and realities, set to a slow flow against the fast rhythms of New York City</p>',

  '<img src="./images/collaborations3.jpg" style="width:50% !important; margin-top:10%; margin-bottom:10%;"><div class="title">The Room of Spirits and Time</div><p>The Room of Spirit and Time is initiated by Taro Masushio, Xiaofei Mo, Ali Van, Wang Xu and Cici Wu. Taking the form of collaborative works and events, the first iteration at Queens Museum begins with readings of ancient and medieval Asian texts as a possible means to reimagine and cultivate a romantic epistemology. In this room, both learning and unlearning take place; we invite temporary amnesia, a kind of forgetting and drifting via exercises, recitations, meditations, improvisations...fluid and ephemeral sleepwalking. Along these activities are non-activities, where TRST functions as a hub for leisurely gatherings, for artists and thinkers, dreams and realities, set to a slow flow against the fast rhythms of New York City</p>',

  '<img src="./images/collaborations4.jpg"><div class="title">The Classic of Mountains and Seas</div><p class="paragraph">The artists intention was to use 15 min before sleeping to read everyone excerpts from The Classic of Mountains and Seas, a bedtime story of sorts. The Classic of Mountains and Seas, also known as Shan Hai Jing, formerly romanized as the Shan-hai Ching, is a Chinese classic text and a compilation of mythic geography and beasts. Versions of the text may have existed since as early as the 4th century BC, but the present form was not reached until the early Han dynasty a few centuries later.</p>',

  '<div class="ytcontainer"><iframe width="100%" src="https://www.youtube.com/embed/QpJZEfd_wJ8" class="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="title">Cloud Weather Prediction</div><p class="paragraph">We are catching up with Queens Museum Studio Program artists during this time at home. This week&#39;s Artist in Residence features a new video by The Room of Spirit and Time : Taro Masushio, Xiaofei Mo, Ali Van, Wang Xu, and Cici Wu. With a suspension on travel, the artists created a video that chronicles a collective longing across time zones. Each of the five members contributed a dispatch or memory from their lives. When together, The Room of Spirit and Time facilitates collaborative work and leisurely gatherings to engender spatiotemporal connections, a slow flow unto the fast rhythms of New York and beyond.</p>',

  '<div class="ytcontainer"><iframe width="100%" src="https://www.youtube.com/embed/8zOAE89dtpk" class="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="title">Sound of a Stranger</div><p class="paragraph">the helmets protest wrong<br>pissed and bleeding on<br>their silent curses drawn<br>they ask the dust c&#39;mon<br>sing a song<br><br>children all woke up into<br>ears transmitted sound so few<br>names once lost now flocking to<br>the dawn<br><br>now all the rooms are bared<br>for the gathering<br>lambs in the tiger<br>a human touch<br>a fractured cat<br>the children reappearing<br><br>a body starts to say<br>I see your human face<br>attached above the waist<br>we will be near<br><br>the creatures at the gate are new<br>a hundred wolves remain in view<br>the ministry a distant hue<br>dancing in the sleep they wander through<br>reaching for you<br><br>sound of a stranger<br>stranger&#39;s song<br>so quietly<br>its force has gone<br>dulled to time<br>their bitter ears not hearing<br><br>we want to celebrate<br>committed to this date<br>thirty years escaped<br>they got away<br><br>if I&#39;ve been extracting you<br>children more than vicious who<br>for each body<br>will I have a cloud<br>in the house<br><br>now with their teeth repaired<br>start the feast<br>the guests ingesting<br>the white horses<br>the square is filled<br>my bitter eyes not fearing<br><br>the state is a giant dome<br>spirits all come home<br>children no more bones<br>two millions all alone<br>all alone<br><br>#hongkongprotests #bewater #dreaming</p>',

  '<img src="./images/collaborations7.jpg"><div class="title">He is a Seed</div><p class="paragraph">Mourning and bereavement for a recent death Liu Xiaobo (1955&ndash;2017), with the hope that Liu Xiaobo who had high hopes but took a risky path during his time and suffered for that will be remembered. We organized a seeding memorial in the Socrates Sculpture Park; and placed placards containing Liu Xiaobo&#39;s words around Chinatown in New York.</p>',

  '<img src="./images/collaborations8.jpg"><div class="title">He is a Seed</div><p class="paragraph">Mourning and bereavement for a recent death Liu Xiaobo (1955&ndash;2017), with the hope that Liu Xiaobo who had high hopes but took a risky path during his time and suffered for that will be remembered. We organized a seeding memorial in the Socrates Sculpture Park; and placed placards containing Liu Xiaobo&#39;s words around Chinatown in New York.</p>',
]

function get_random_collaboration(){
  // Get a random index
  random_index = Math.floor(Math.random() * collaborations_array.length);

  // Get code using the random_index
  selected_image = collaborations_array[random_index]

  // Insert the code
  document.getElementById('wrapper').innerHTML = `${selected_image}`
}

// Memories
memories_array = [
  '<img src="./images/memories1.jpg"><div class="title">Porcelain Doll</div>',
  '<img src="./images/memories2.jpg"><div class="title">Xiangzhou Bay</div>',
  '<img src="./images/memories3.jpg"><div class="title">Sutra</div>',
  '<img src="./images/memories4.jpg"><div class="title">Charlie</div>',
  '<img src="./images/memories5.jpg"><div class="title">Victor</div>',
  '<img src="./images/memories6.jpg"><div class="title">March 2016</div>',
  '<img src="./images/memories7.jpg"><div class="title">New Delhi Post</div>',
]

function get_random_memories(){
  // Get a random index
  random_index = Math.floor(Math.random() * memories_array.length);

  // Get code using the random_index
  selected_image = memories_array[random_index]

  // Insert the code
  document.getElementById('wrapper').innerHTML = `${selected_image}`
}

function get_bio(){
  // Insert the code
  document.getElementById('wrapper').innerHTML = `<p style="padding:2% 0 0 0;">Xiaofei Mo is a filmmaker based in New York, whose works explore the possibilities and limits in communing with non-human sentient beings. She trains and works with an AI named POND (2016-present) to explore the porous nature of image and language, memory and feeling, friction and movement. POND have no mother tongue, they learn from and in translation, and grow organs without body. Her works were shown at Hordaland Kunstsenter, Bergen (2023), International Kurzfilmtage Winterthur (2021), Empty Gallery at Art Basel Hong Kong (2020), and c4 projects, Copenhagen (2019). She is a founding member of The Room of Spirit and Time, a collective reading group in residence at Queens Museum, New York (2018-2020), and has received grants from Goethe-Institut China (2018) among others.<br><br><a href="mailto:xiaofei.z.mo@gmail.com">xiaofei.z.mo@gmail.com</a></p>`
}