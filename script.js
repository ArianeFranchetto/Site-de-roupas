var products = [
    {
        "photo": "img/kitprainha.jpg",
        "name": "Kit verão 2023",
        "price": 189,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cabide.jpg",
        "name": "Look moderno",
        "price": 99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cacharrel.jpg",
        "name": "Blusinha gola alta",
        "price": 70,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/conjunto.jpg",
        "name": "Conjunto completo",
        "price": 299,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/kit.jpg",
        "name": "Look planejado",
        "price": 349,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/oncinha.jpg",
        "name": "Conjunto de oncinha",
        "price": 279,
        "active": false,
        "quantity": 1
    }
];
var acessorios = [
    {
        "photo": "img/colardamoda.jpg",
        "name": "Colar moderno",
        "price": 89,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/colarmoderno.jpg",
        "name": "Colar grande",
        "price": 91,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/conjuntoouro.jpg",
        "name": "Conjunto aneis de ouro",
        "price": 52,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/conjuntoprata.jpg",
        "name": "Conjunto aneis de prata",
        "price": 42,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/bijupraia.jpg",
        "name": "Bijus para praia",
        "price": 39,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/chique.jpg",
        "name": "Brinquinho chique",
        "price": 79,
        "active": false,
        "quantity": 1
    }
];

const SelfServiceMachine = {
data() {
    return {
        products: window.products, acessorios: window.acessorios,
        orderTotal: 0
    }
},
methods: { 
    toggleActive: function(item){
        item.active = !item.active;
    },
    total: function(){
        var total = 0;
        this.products.forEach(function(item){
            if (item.active){
                total+= item.price * item.quantity;
            }}),
            this.acessorios.forEach(function(item){
                if (item.active){
                    total+= item.price * item.quantity;
                }}
            
            );
       return total.toFixed(2);
    }
}
};

Vue.createApp(SelfServiceMachine).mount('#app');