const { Builder, By, WebElement } = require('selenium-webdriver');
const fs = require('fs');
// const { elementIsNotSelected } = require('selenium-webdriver/lib/until');

async function example() {

    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://glovoapp.com/es/es/palma/restaurantes_1/');

    // let father = driver.findElement(By.xpath("//div[@class='category-store-list']"));

    let restaurants = await driver.findElements(By.xpath("//div[@data-test-id='category-store-list']/div[@data-v-d3da9342]"));
    let total_restaurants = restaurants.length;

    let products = await driver.findElement(By.xpath("//*[@id='entrates-s.1180127951']/div[2]/div[3]"));
    let total_products = products.length;

    let pages = await driver.findElement(By.xpath("//*[@id='default-wrapper']/div/div/div/main/div[2]/div[2]/nav/div/span[2]")).getText();
    let splited_pages = pages.split(" ");
    let total_pages = splited_pages[2];
    console.log(total_pages);

     for (let i = 0; i < total_pages; i++) {

        for (let i; i < total_restaurants; i++) {

            for (let i; < total_products; i++) {

            }
        }
    }

//      >div[data-v-d3da9342] El contenedor que hay que clicar para ir al producto.

//      console.log("Hola hijos");
//      console.log("Hijos: " + children_amount);

//      await driver.findElement(By.class('store-card_wrapper')).click();

//      Necesito contar cuantos productos hay una pagina para recorrerlos con un bucle.

//      Cuando éste termine -> Se pulsa el botón de siguiente página.

//      Almacenar en una variable el numero de hijos del contenedor de los productos.

//      Hay que capturar el texto que indica el numero de paginas totales para saber las iteraciones que debe hacer el primer bucle.

}

example();