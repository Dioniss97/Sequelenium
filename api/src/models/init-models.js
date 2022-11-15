var DataTypes = require("sequelize").DataTypes;
var _Branch = require("./branch");
var _Business = require("./business");
var _Client = require("./client");
var _Distributor = require("./distributor");
var _Order = require("./order");
var _OrdersDetail = require("./orders-detail");
var _PaymentMethod = require("./payment-method");
var _Price = require("./price");
var _Product = require("./product");
var _ProductsCategory = require("./products-category");
var _ProductsDistributor = require("./products-distributor");
var _Recipe = require("./recipe");
var _Sale = require("./sale");
var _SalesDetail = require("./sales-detail");
var _Table = require("./table");
var _Tax = require("./tax");
var _Ubication = require("./ubication");
var _Worker = require("./worker");

function initModels(sequelize) {
    var Branch = _Branch(sequelize, DataTypes);
    var Business = _Business(sequelize, DataTypes);
    var Client = _Client(sequelize, DataTypes);
    var Distributor = _Distributor(sequelize, DataTypes);
    var Order = _Order(sequelize, DataTypes);
    var OrdersDetail = _OrdersDetail(sequelize, DataTypes);
    var PaymentMethod = _PaymentMethod(sequelize, DataTypes);
    var Price = _Price(sequelize, DataTypes);
    var Product = _Product(sequelize, DataTypes);
    var ProductsCategory = _ProductsCategory(sequelize, DataTypes);
    var ProductsDistributor = _ProductsDistributor(sequelize, DataTypes);
    var Recipe = _Recipe(sequelize, DataTypes);
    var Sale = _Sale(sequelize, DataTypes);
    var SalesDetail = _SalesDetail(sequelize, DataTypes);
    var Table = _Table(sequelize, DataTypes);
    var Tax = _Tax(sequelize, DataTypes);
    var Ubication = _Ubication(sequelize, DataTypes);
    var Worker = _Worker(sequelize, DataTypes);

    Ubication.belongsTo(Branch, { as: "branch", foreignKey: "branch_id"});
    Branch.hasMany(Ubication, { as: "ubications", foreignKey: "branch_id"});
    Worker.belongsTo(Branch, { as: "branch", foreignKey: "branch_id"});
    Branch.hasMany(Worker, { as: "workers", foreignKey: "branch_id"});
    Order.belongsTo(Client, { as: "client", foreignKey: "client_id"});
    Client.hasMany(Order, { as: "orders", foreignKey: "client_id"});
    Sale.belongsTo(Client, { as: "client", foreignKey: "client_id"});
    Client.hasMany(Sale, { as: "sales", foreignKey: "client_id"});
    ProductsDistributor.belongsTo(Distributor, { as: "distributor", foreignKey: "distributor_id"});
    Distributor.hasMany(ProductsDistributor, { as: "products_distributors", foreignKey: "distributor_id"});
    Recipe.belongsTo(Distributor, { as: "product_distributor", foreignKey: "product_distributor_id"});
    Distributor.hasMany(Recipe, { as: "recipes", foreignKey: "product_distributor_id"});
    OrdersDetail.belongsTo(Order, { as: "order", foreignKey: "order_id"});
    Order.hasMany(OrdersDetail, { as: "orders_details", foreignKey: "order_id"});
    Sale.belongsTo(PaymentMethod, { as: "payment_method", foreignKey: "payment_method_id"});
    PaymentMethod.hasMany(Sale, { as: "sales", foreignKey: "payment_method_id"});
    OrdersDetail.belongsTo(Price, { as: "price", foreignKey: "price_id"});
    Price.hasMany(OrdersDetail, { as: "orders_details", foreignKey: "price_id"});
    SalesDetail.belongsTo(Price, { as: "price", foreignKey: "price_id"});
    Price.hasMany(SalesDetail, { as: "sales_details", foreignKey: "price_id"});
    Price.belongsTo(Product, { as: "product", foreignKey: "product_id"});
    Product.hasMany(Price, { as: "prices", foreignKey: "product_id"});
    Product.belongsTo(ProductsCategory, { as: "category", foreignKey: "category_id"});
    ProductsCategory.hasMany(Product, { as: "products", foreignKey: "category_id"});
    Recipe.belongsTo(ProductsDistributor, { as: "product", foreignKey: "product_id"});
    ProductsDistributor.hasMany(Recipe, { as: "recipes", foreignKey: "product_id"});
    SalesDetail.belongsTo(Sale, { as: "sale", foreignKey: "sale_id"});
    Sale.hasMany(SalesDetail, { as: "sales_details", foreignKey: "sale_id"});
    Sale.belongsTo(Table, { as: "table", foreignKey: "table_id"});
    Table.hasMany(Sale, { as: "sales", foreignKey: "table_id"});
    Price.belongsTo(Tax, { as: "iva", foreignKey: "iva_id"});
    Tax.hasMany(Price, { as: "prices", foreignKey: "iva_id"});
    Order.belongsTo(Worker, { as: "worker", foreignKey: "worker_id"});
    Worker.hasMany(Order, { as: "orders", foreignKey: "worker_id"});
    Sale.belongsTo(Worker, { as: "worker", foreignKey: "worker_id"});
    Worker.hasMany(Sale, { as: "sales", foreignKey: "worker_id"});

    return {
        Branch,
        Business,
        Client,
        Distributor,
        Order,
        OrdersDetail,
        PaymentMethod,
        Price,
        Product,
        ProductsCategory,
        ProductsDistributor,
        Recipe,
        Sale,
        SalesDetail,
        Table,
        Tax,
        Ubication,
        Worker,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;