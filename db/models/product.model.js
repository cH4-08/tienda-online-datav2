const {Model, DataTypes, Sequelize}= require('sequelize');

const {CATEGORY_TABLE} = require ('./category.model');

const PRODUCT_TABLE = 'products';

const ProductSchema = {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
name: {
    allowNull: false,
    type: DataTypes.STRING,
},
image:{
    type:DataTypes.STRING,
    allowNull: false,
},
description:{
  type:DataTypes.TEXT,
  allowNull: false,
},
price:{
  type:DataTypes.INTEGER,
  allowNull: false,
},
createdAt:{
    allowNull: false,
    type:DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
},
categoryId: {
  field: 'category_id',
  allowNull: false,
  type: DataTypes.INTEGER,
  references:{
    model: CATEGORY_TABLE,
    key: 'id'
  },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'

 }
}

class Product extends Model{

  static associate(models){
  this.belongsTo(models.Category,
     {as:'category'}
     );
  }

  static config(sequelize){
      return {
          sequelize,
          tableName: PRODUCT_TABLE,
          modelName: 'Product',
          timestamps: false
       }
    }
}

module.exports = { Product, ProductSchema, PRODUCT_TABLE };
