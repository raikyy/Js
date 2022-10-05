let i=1;
while (i<=10) {
    console.log(i);
    i++;
}

for (let i=1; i<=10; i++) {
    console.log(i);
}


for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
    console.log(i);
    }
  }

let name = prompt('Введите ваше имя');
let town = prompt('Введите ваш город проживания');
let age = prompt('Введите ваш возраст');
console.log(`Добрый день ${name}, вы проживаете в городе ${town}, ваш вазраст - ${age}`);


let r = prompt('Сумма товаров в корзине');
if (r>10000) {
    w = r-(r*0.15);
    console.log(`В корзине товаров на сумму ${r}. С учетом скидки - ${w}`);
}  
 else if (r>5000) {
    w = r-(r*0.1);
    console.log(`В корзине товаров на сумму ${r}. С учетом скидки - ${w}`);
}  
else if (r>2000) {
    w = r-(r*0.05);
    console.log(`В корзине товаров на сумму ${r}. С учетом скидки - ${w}`);
} 
else (console.log(`Бесплатная доставка от 1000 рублей, до бесплатной доставки не 
хватает ${1000-r}`));

let sum = 10000;
let promo = prompt(`Стоимость товаров в корзине - ${sum} руб. Введите промокод`);
let p = 0.5;
if (promo=='DELFA') {
    sum=sum-(sum*p);
    console.log(`Скидка по промокоду составила ${p*100}%. Стоимость товаров - ${sum}`);
}
else {
    console.log('Промокод не подходит');
}
