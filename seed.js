 const db = require('./models').sequelize;
const Event = require('./models').Event;
const Image = require('./models').Image;

const events = [
	{title:"Marilyn Minter: Pretty/Dirty", 
	 location:'Brooklyn Museum', 
	 opening:"11/4/2016", 
	 closing:"4/2/2017", 
	 hours:"Wednesday - Sunday 11am - 6pm | Thursday closes at 10pm", 
	 price: "Suggested $16", 
	 featuredArtist: "Marilyn Minter", 
	 description: "Marilyn Minter’s sensual paintings, photographs, and videos vividly explore complex and contradictory emotions around beauty and the feminine body in American culture. She trains a critical eye on the power of desire, questioning the fashion industry’s commercialization of sex and the body. Marilyn Minter: Pretty/Dirty is the first retrospective of her work.", 
	 streetAddress: '', 
	 city:"", 
	 zipCode:11238, 
	 type:'MUSEUM'},
	{title:"Ken Weathersby: Time after Time", 
	 location:'Minus Space', 
	 opening:"1/7/2017", 
	 closing:"2/25/2017", 
	 hours:"Wednesday - Saturday 11am - 5pm" , 
	 price: "free", 
	 featuredArtist:"Ken Weathersby", 
	 description: "Ken Weathersby makes abstract paintings that play with and against the conventions of both painting and abstraction. His new paintings combine graphic geometric patterns with representational, printed images of art works cut out of discarded art history books. The images Weathersby employs often depict a sculpture of a single human or animal figure and stem primarily from the periods of ancient Greece, Rome, and medieval Europe.", 
	 streetAddress: '', 
	 city:"", 
	 zipCode:11201, 
	 type:'GALLERY'},
	{title:"Comme des Garcons: Art of the In-Between", 
	 location:'The Metropolitan Museum of Art', 
	 opening:"May 4, 2017", 
	 closing:"September 4, 2017", 
	 hours:"Sunday - Thursday: 10AM - 5:30PM | Friday and Saturday: 10AM - 9PM" , 
	 price: "Suggested $25", 
	 featuredArtist:"Rei Kawakubo", 
	 description: "The Costume Institute's spring 2017 exhibition will examine the work of Japanese fashion designer Rei Kawakubo, known for her avant-garde designs and ability to challenge conventional notions of beauty, good taste, and fashionability. The thematic show will feature approximately 120 examples of Kawakubo's womenswear for Comme des Garçons, from her first Paris runway show in 1981 to her most recent collection.", 
	 streetAddress: '', 
	 city:"", 
	 zipCode:10028, 
	 type:'MUSEUM'},
	{title:"Ghazel: Mismappings", 
	 location:'International Studio & Curatorial Program (ISCP)', 
	 opening:"February 14", 
	 closing:"April 7", hours:"Tuesday–Friday, 12–6pm" , 
	 price: "free", featuredArtist:"Ghazel", 
	 description: "A presentation of work by Ghazel, Mismappings is the artist’s first solo exhibition in the United States. Since her 2001 ISCP residency, Ghazel has lived in both Paris and Tehran. The exhibition focuses on Ghazel’s recent Marée Noire and Dyslexiaseries—drawings with ink on printed Farsi maps—that evoke the politics of representation on a geopolitical scale in an era of ongoing ecological and migratory crises.", 
	 streetAddress: '', 
	 city:"", 
	 zipCode:11211, 
	 type:'GALLERY'},
	{title:"Secrets of Leaves by ADRIENNE ELISE TARVER", 
	 location:'VICTORI + MO', 
	 opening:"", 
	 closing:"19 March", 
	 hours:"Thurs-Sun, 1-6pm", 
	 price: "free", 
	 featuredArtist:"ADRIENNE ELISE TARVER", 
	 description: "Secrets of Leaves, consists of caulking paintings on wire mesh and sculptures of varying scale, affixed to the gallery walls and hung from the ceiling throughout the space. The walls will be painted with flora motifs, interspersed with leaf sculptures protruding at various intervals creating the sense of not only viewing a jungle, but being in one.", 
	 streetAddress: '', 
	 city:"", 
	 zipCode:11206, 
	 type:'GALLERY'},
	{title:"Making Faces: Images of Exploitation and Empowerment in Cinema", 
	 location:'Museum of Modern Art', 
	 opening:"", 
	 closing:"April 30, 2017", 
	 hours:"Open 7 days a week | 10:30AM - 5:30PM | Fridays are open until 8:00PM | Target Fridays - Free Entry after 4PM" , 
	 price: "$25", featuredArtist:"Features 38 artists", 
	 description: "Making Faces is a study of screen characters and the performers who embodied them. Focusing on popular American films from the 1910s to the 1970s—from the era of silent movies to that of blaxploitation—this exhibition traces the attempts of commercial film studios to depict difference onscreen. Drawn from MoMA’s extensive collection of film stills, Making Faces presents images that Hollywood studios used to sell their vision—how they thought people should look, dress, and behave—to audiences. Explicitly created for distribution to newspapers, magazines, and other media outlets to advertise upcoming releases, film stills are highly constructed images that functioned as templates for these Hollywood ideals. Rather than simply highlighting major stars in iconic roles, Making Faces focuses on Hollywood’s portrayals of “outsiders” in films, and the various—sometimes contentious—ways in which race and gender were represented onscreen. The selected images showcase performers who rebelled against the accepted cultural norms of the time as well as those who found ways to work within a system that exploited them.", 
	 streetAddress: '', 
	 city:"", 
	 zipCode: 10019, 
	 type:'MUSEUM'},
	{title:"Jackson Pollock: Exploring Alchemy", 
	 location:'Solomon R. Guggenheim Musuem', 
	 opening:"February 10, 2017", 
	 closing:"September 6, 2017", 
	 hours:"Monday - Wednesday: 10AM - 5:45PM | Thursday: Closed | Friday & Sunday: 10AM -5:45PM | Saturday: 10AM - 7:45PM PAY WHAT YOU WISH BETWEEN 5:45PM - 7:45PM On SATURDAYS", 
	 price: "$15", 
	 featuredArtist:"Jackson Pollock", 
	 description: "Jackson Pollock’s Alchemy (1947), a celebrated icon of postwar abstraction that Peggy Guggenheim acquired through her financial support of the artist, is on view for the first time in the United States since 1969. A team of conservators from the Guggenheim and Italian organizations has completed scientific analysis and treatment of the painting in Florence. In the Sackler Center for Arts Education, video footage and interactive kiosks display three-dimensional imaging, elemental mapping, x-radiography, and non-destructive analytical techniques to identify the painting’s pigments and binders. This didactic exhibition on one of Pollock’s earliest poured paintings draws visitors into the world of an art conservator, allowing them to comprehend the physical properties of the materials the artist used to create Alchemy and how he applied them to the canvas.", 
	 streetAddress: '', 
	 city:"", 
	 zipCode:10128, 
	 type:'MUSEUM'},
	{title:"Nectar: War Upon The Bees", 
	 location:'Pratt', 
	 opening:"December 9, 2016", 
	 closing:"February 11, 2017", 
	 hours:"Monday–Saturday 11–6, Thursday until 8", 
	 price: "FREE", 
	 featuredArtist:"Features 10 artists", 
	 description: "Pratt Manhattan Gallery presents Nectar: War Upon the Bees, a visual essay centered on the way that disregard for bees and the “faster, bigger, cheaper” approach to modern food production is leading to severe consequences for human survival. Through various artistic mediums, the work of nine artists speaks to the way that bees are representative of today’s growing environmental threats and creates a rich compilation of imagery that evokes an important and socially engaged mission.", 
	 streetAddress: '', 
	 city:"", 
	 zipCode: 10011, 
	 type:'SCHOOL'},
	{title:"War x Artifice", 
	 location:'School of Visual Arts', 
	 opening:"February 4", 
	 closing:"March 2", 
	 hours:"Monday through Friday 9am – 7pm, Saturday 10am – 6 pm." , 
	 price: "free", 
	 featuredArtist:"Riccardo Vecchio", 
	 description: "For this exhibition, Vecchio called upon the 100 year anniversary of World War I to explore the relationship between war and the artifice of nation-state building and the creation of borders on the landscape of the Italian Dolomites. He explored the typography and transformation of this former battlefront along the former borders between the reign of Italy and the Austro-Hungarian Empire, creating plein-air paintings and drawings of the starkly elegant yet unnatural forms in ice and rock that were the result of scarred mountain peaks and bomb craters blown up 100 years ago.", 
	 streetAddress: '', 
	 city:"", 
	 zipCode: 10010, 
	 type:'SCHOOL/GALLERY'}
];

const images = [
	{title: '',
	 url: 'https://www.brooklynmuseum.org/assets/system-images/made/assets/system-images/remote/https_d1lfxha3ugu3d4.cloudfront.net/exhibitions/images/2016_Pretty_Dirty_Marilyn_Minter_Blue_Poles_2000w_600_494.jpg',
	 EventId: 1	
	},
	{title: '',
	 url: 'http://www.minusspace.com/weathersby-500.jpg',
	 EventId: 2	
	},
	{title: '',
	 url: 'http://www.metmuseum.org/-/media/Images/Exhibitions/2017/Rei%20Kawakubo/ReiKawakubo_DetailPage_1200x1280_111016_v1.jpg',
	 EventId: 3	
	},
	{title: '',
	 url: 'http://iscp-nyc.org/event/ghazel-mismappings',
	 EventId: 4	
	},
	{title: '',
	 url: 'http://victorimo.com/secrets-of-leaves/',
	 EventId: 5
	},
	{title: '',
	 url: 'https://www.moma.org/d/assets/W1siZiIsIjIwMTYvMDkvMjcvN3doM25kbGZpYl9IYXR0aWVfTWNEYW5pZWwuanBnIl0sWyJwIiwiY29udmVydCIsIi1yZXNpemUgMjAwMHgyMDAwXiAtZ3Jhdml0eSBDZW50ZXIgLWV4dGVudCAyMDAweDIwMDAiXV0/Hattie_McDaniel.jpg?sha=9aec7879e65953f3',
	 EventId: 6
	},
	{title: '',
	 url: 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/1947/01/76.2553.150_ph_web.jpg?w=870',
	 EventId: 7
	},
	{title: '',
	 url: 'https://www.pratt.edu/tiny_mce/plugins/imagemanager/files/Heaton--Spent_Flower%2C_2015.jpg',
	 EventId: 8	
	},
	{title: '',
	 url: 'http://www.sva.edu/uploads/assets/headerslideitem/735x410/784ff9a855c180061315bceba5b8b3023761c923.jpeg',
	 EventId: 9
	},
]

db.sync({force: true})
.then(() => Event.bulkCreate(events))
.then(() => Image.bulkCreate(images))

module.exports = {events, images}