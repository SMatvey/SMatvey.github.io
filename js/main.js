var app = new Vue({
    el: '.items',
    data: {
        products:[
            {id:1, title:"Shallot", short_text:"Onions please with greenery throughout the year. From one bulb, 3-12 new ones are formed.", image:"../images/GOnion/shallot.jpg", desc:"The family group is united by a common bottom and appearance, like a tall bush of greenery. It is especially valuable that the onion feathers are constantly cut off, the developing onions continue to grow. The variety is early ripe, not afraid of the cold."},
            {id:2, title:"Batun", short_text:"This species is larger and longer. Very productive - 20 to 45 kg from 9 square meters.", image:"../images/GOnion/batut.jpg", desc:"Perennial, appears early, not afraid of frost. It does not form bulbs, but during the season it repeatedly gives abundant cutting. Greens are harvested at the end of May. Harvest is stored salted or frozen. At the same time, taste and aroma are not lost."},
            {id:3, title:"Parade", short_text:"High-yielding, mid-season variety bred in Holland. The plant reaches 60 cm in height.", image:"../images/GOnion/parade.jpg", desc:"After cutting, it grows quickly - it is cut three times per season. The onion has a short stem, the bulb does not form. Feathers are tender, juicy, pleasant and semi-sharp in taste. Long time keep a trade dress. The variety is not afraid of the cold."},
            {id:4, title:"Leek", short_text:"Biennial, tall, powerful plant up to one and a half meters. Not afraid of frost down to -7 degrees.", image:"../images/GOnion/porey.jpg", desc:"In fact, the white stem or false stem is the bulb. Contains essential oils, vitamin C, potassium salts and sugar. It retains properties not only in raw, but also in boiled, stewed form. Suitable for canning. Growing onion seedlings."},
            {id:5, title:"Totem", short_text:"A variety of onions on a feather, bred in Japan. Leaves ripen in 60 days. Tolerate heat and cold.", image:"../images/GOnion/totem.jpg", desc:"The tips of the feathers do not turn brown. The leaves are tender and juicy, moderately sharp, similar to onion greens. They keep their freshness and presentation for a long time, they are not afraid of transportation. The plant is tall - up to 55 cm. It is grown by seeds."}
        ],
    },
    mounted:function() {
        console.log(window.localStorage.getItem('prod'));
    },

    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        },
    },
});
