import sequelize from "../config/database.js";
import User from "./user.model.js";
import Product from "./product.model.js";
import Category from "./category.model.js";

// Define associations
Product.belongsTo(Category, { foreignKey: "category_Id"});
Category.hasMany(Product, { foreignKey: "category_Id"});

export { sequelize, User, Product, Category };
