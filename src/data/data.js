export const navbar = [
	{
		id: 1,
		name: "HOME",
		path: "/",
		// subcatagory:[

		// ]
	},
	{
		id: 2,
		name: "ABOUT US",
		path: "/aboutUs",
	},
	,
	{
		id: 3,
		name: "OUR SERVICES",
		path: "/services",
		subcatagory: [
			{
				title: "SWIMMING POOLS",
			},
			{
				title: "PROCURMENT & SUPPLY",
			},
			{
				title: "HEALTH CLUBS EQUIPMENT (SAUNA CABINS ,SPA STREAM BATHS)",
			},
			{
				title: "PLUMBING STATIONS",
			},
			{
				title: "FIRE FIGHTING SYSTEMS",
			},
			{
				title: "MAINTENANCE & OPERATION",
			},
			{
				title: "WATER FEATURE INSTRUCTION",
			},
		],
	},
	{
		id: 4,
		name: "OUR PORTFOLIO",
		path: "/portfolio",
	},
	{
		id: 5,
		name: "CONTACT US",
		path: "/contact",
	},
];

export const portfolio = [
	{
		icon: (
			<svg
				width={60}
				height={33}
				className="m-auto"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 576 512"
			>
				<path d="M128 127.7C128 74.9 170.9 32 223.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7l0 96.3 192 0 0-96.3C384 74.9 426.9 32 479.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7L448 361c-1.6 1-3.3 2-4.8 3.1c-18 12.4-40.1 20.3-59.2 20.3c0 0 0 0 0 0l0-96.5-192 0 0 96.5c-19 0-41.2-7.9-59.1-20.3c-1.6-1.1-3.2-2.2-4.9-3.1l0-233.3zM306.5 389.9C329 405.4 356.5 416 384 416c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 469.7 417 480 384 480c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 405.2 165.1 416 192 416c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" />
			</svg>
		),
		name: "Olymbic pools",
		Catagory: [
			{
				desc: "Olympic athletic competitions and swimming are the most widely followed Olympic sports in the world and also have the largest number of events and participants from different countries. It s no surprise that aspiring Olympians and swimming fans get caught up in the big event and want an Olympicsized swimming pool of their own",

				subcatagory: [
					{
						image: "/assets/service1.jpg",
						title: "Meridien Pyramids",
					},

					{
						image: "/assets/service1.jpg",
						title: "Jaz Alcazer",
					},
				],
			},
		],
	},
	{
		icon: (
			<svg
				width={60}
				height={33}
				className="m-auto"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 512"
			>
				<path d="M296 136l0-48 48 0 0 48-48 0zM288 32c-26.5 0-48 21.5-48 48l0 4L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-3.3 0c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1l64 0c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1l-3.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-4.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84l0-4c0-26.5-21.5-48-48-48l-64 0zM88 376l48 0 0 48-48 0 0-48zm416 48l0-48 48 0 0 48-48 0z" />
			</svg>
		),
		name: "Hydro-therapy pools",
		Catagory: [
			{
				desc: "Olympic athletic competitions and swimming are the most widely followed Olympic sports in the world and also have the largest number of events and participants from different countries. It s no surprise that aspiring Olympians and swimming fans get caught up in the big event and want an Olympicsized swimming pool of their own",

				subcatagory: [
				

					{
						image: "/assets/service1.jpg",
						title: "Jaz Alcazer",
					},
				],
			},
		],
	},
	{
		icon: (
			<svg
				width={60}
				height={33}
				className="m-auto"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 512"
			>
				<path d="M296 136l0-48 48 0 0 48-48 0zM288 32c-26.5 0-48 21.5-48 48l0 4L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-3.3 0c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1l64 0c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1l-3.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-4.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84l0-4c0-26.5-21.5-48-48-48l-64 0zM88 376l48 0 0 48-48 0 0-48zm416 48l0-48 48 0 0 48-48 0z" />
			</svg>
		),
		name: "Artificial Lake",
		Catagory: [
			{
				desc: "Olympic athletic competitions and swimming are the most widely followed Olympic sports in the world and also have the largest number of events and participants from different countries. It s no surprise that aspiring Olympians and swimming fans get caught up in the big event and want an Olympicsized swimming pool of their own",

				subcatagory: [
					{
						image: "/assets/service1.jpg",
						title: "Meridien Pyramids",
					},

				],
			},
		],
	},
	{
		icon: (
			<svg
				width={60}
				height={33}
				className="m-auto"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 512"
			>
				<path d="M296 136l0-48 48 0 0 48-48 0zM288 32c-26.5 0-48 21.5-48 48l0 4L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-3.3 0c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1l64 0c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1l-3.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-4.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84l0-4c0-26.5-21.5-48-48-48l-64 0zM88 376l48 0 0 48-48 0 0-48zm416 48l0-48 48 0 0 48-48 0z" />
			</svg>
		),
		name: "Infinity Pool",
		Catagory: [
			{
				desc: "Olympic athletic competitions and swimming are the most widely followed Olympic sports in the world and also have the largest number of events and participants from different countries. It s no surprise that aspiring Olympians and swimming fans get caught up in the big event and want an Olympicsized swimming pool of their own",

				subcatagory: [
					{
						image: "/assets/service1.jpg",
						title: "Meridien Pyramids",
					},

					{
						image: "/assets/service1.jpg",
						title: "Jaz Alcazer",
					},
				],
			},
		],
	},
	{
		icon: (
			<svg
				width={60}
				height={33}
				className="m-auto"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 512"
			>
				<path d="M296 136l0-48 48 0 0 48-48 0zM288 32c-26.5 0-48 21.5-48 48l0 4L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-3.3 0c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1l64 0c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1l-3.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-4.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84l0-4c0-26.5-21.5-48-48-48l-64 0zM88 376l48 0 0 48-48 0 0-48zm416 48l0-48 48 0 0 48-48 0z" />
			</svg>
		),
		name: "Pool With Jacuzi",
		Catagory: [],
	},
	{
		icon: (
			<svg
				width={60}
				height={33}
				className="m-auto"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 512"
			>
				<path d="M296 136l0-48 48 0 0 48-48 0zM288 32c-26.5 0-48 21.5-48 48l0 4L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-3.3 0c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1l64 0c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1l-3.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-4.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84l0-4c0-26.5-21.5-48-48-48l-64 0zM88 376l48 0 0 48-48 0 0-48zm416 48l0-48 48 0 0 48-48 0z" />
			</svg>
		),
		name: "Family Pool",
		Catagory: [],
	},
	{
		icon: (
			<svg
				width={60}
				height={33}
				className="m-auto"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 512"
			>
				<path d="M296 136l0-48 48 0 0 48-48 0zM288 32c-26.5 0-48 21.5-48 48l0 4L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-3.3 0c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1l64 0c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1l-3.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-4.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84l0-4c0-26.5-21.5-48-48-48l-64 0zM88 376l48 0 0 48-48 0 0-48zm416 48l0-48 48 0 0 48-48 0z" />
			</svg>
		),
		name: "Indoor Pool",
		Catagory: [
			{
				desc: "Olympic athletic competitions and swimming are the most widely followed Olympic sports in the world and also have the largest number of events and participants from different countries. It s no surprise that aspiring Olympians and swimming fans get caught up in the big event and want an Olympicsized swimming pool of their own",

				subcatagory: [
					{
						image: "/assets/service1.jpg",
						title: "Meridien Pyramids",
					},

					{
						image: "/assets/service1.jpg",
						title: "Jaz Alcazer",
					},
				],
			},
		],
	},
];




// export const Productgallery = [
// 	{
// 		src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
// 		//   width: 320,
// 		height: 174,
// 		tags: [
// 			{ value: "Nature", title: "Nature" },
// 			{ value: "Flora", title: "Flora" },
// 		],
// 		caption: "After Rain (Jeshu John - designerspics.com)",
// 	},
// 	{
// 		src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
// 		//   width: 320,
// 		height: 212,
// 		caption: "Boats (Jeshu John - designerspics.com)",
// 	},
// 	{
// 		src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
// 		//   width: 320,
// 		height: 212,
// 		caption: "Color Pencils (Jeshu John - designerspics.com)",
// 	},
// 	{
// 		src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
// 		//   width: 320,
// 		height: 213,
// 		caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
// 	},
// 	{
// 		src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
// 		//   width: 320,
// 		height: 183,
// 		caption: "37H (gratispgraphy.com)",
// 	},
// 	{
// 		src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
// 		//   width: 240,
// 		//   height: 320,
// 		tags: [{ value: "Nature", title: "Nature" }],
// 		caption: "8H (gratisography.com)",
// 	},
// 	{
// 		src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
// 		//   width: 320,
// 		//   height: 190,
// 		caption: "286H (gratisography.com)",
// 	},
// 	{
// 		src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
// 		//   width: 320,
// 		//   height: 148,
// 		tags: [{ value: "People", title: "People" }],
// 		caption: "315H (gratisography.com)",
// 	},
// 	{
// 		src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
// 		//   width: 320,
// 		//   height: 213,
// 		caption: "201H (gratisography.com)",
// 	},
// 	{
// 		src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
// 		alt: "Big Ben - London",
// 		//   width: 248,
// 		//   height: 320,
// 		caption: "Big Ben (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
// 		alt: "Red Zone - Paris",
// 		//   width: 320,
// 		//   height: 113,
// 		tags: [{ value: "People", title: "People" }],
// 		caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
// 		alt: "Wood Glass",
// 		//   width: 313,
// 		//   height: 320,
// 		caption: "Wood Glass (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
// 		//   width: 320,
// 		//   height: 213,
// 		caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
// 		//   width: 320,
// 		//   height: 194,
// 		caption: "Old Barn (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
// 		alt: "Cosmos Flower",
// 		//   width: 320,
// 		//   height: 213,
// 		caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
// 		//   width: 271,
// 		//   height: 320,
// 		caption: "Orange Macro (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
// 		//   width: 320,
// 		//   height: 213,
// 		tags: [
// 			{ value: "Nature", title: "Nature" },
// 			{ value: "People", title: "People" },
// 		],
// 		caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
// 		//   width: 320,
// 		//   height: 213,
// 		tags: [
// 			{ value: "People", title: "People" },
// 			{ value: "Sport", title: "Sport" },
// 		],
// 		caption: "Man on BMX (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
// 		//   width: 320,
// 		//   height: 213,
// 		caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
// 		//   width: 320,
// 		//   height: 213,
// 		caption: "Time to Think (Tom Eversley - isorepublic.com)",
// 	},
// 	{
// 		src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
// 		//   width: 320,
// 		//   height: 179,
// 		tags: [
// 			{ value: "Nature", title: "Nature" },
// 			{ value: "Fauna", title: "Fauna" },
// 		],
// 		caption: "Untitled (Jan Vasek - jeshoots.com)",
// 	},
// 	{
// 		src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
// 		//   width: 320,
// 		//   height: 215,
// 		tags: [{ value: "People", title: "People" }],
// 		caption: "Untitled (moveast.me)",
// 	},
// 	{
// 		src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
// 		//   width: 257,
// 		//   height: 320,
// 		caption: "A photo by 贝莉儿 NG. (unsplash.com)",
// 	},
// 	{
// 		src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
// 		//   width: 226,
// 		//   height: 320,
// 		caption: "A photo by Matthew Wiebe. (unsplash.com)",
// 	},
// ];
