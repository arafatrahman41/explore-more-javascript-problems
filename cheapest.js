const phones = [
    {name:'Samsung', camera: 12, storage: '32gb', price: 36000, color:'silver'},
    {name:'Walton', camera: 12, storage: '32gb', price: 10000, color:'silver'},
    {name:'iphone', camera: 12, storage: '32gb', price: 86000, color:'silver'},
    {name:'Xaomi', camera: 12, storage: '32gb', price: 35000, color:'silver'},
    {name:'Oppo', camera: 12, storage: '32gb', price: 20000, color:'silver'},
    {name:'Nokia', camera: 12, storage: '32gb', price: 46000, color:'silver'},
    {name:'HTC', camera: 12, storage: '32gb', price: 60000, color:'silver'},
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest; 
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);