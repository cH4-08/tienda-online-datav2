const {Model, DataTypes, Sequelize}= require('sequelize');

const { USER_TABLE } = require('./user.model');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    lastName:{
        allowNull: false,
        type:DataTypes.STRING,
        field: 'last_name',
    },
    phone: {
      allowNull: true,
      type:DataTypes.STRING,
    },
    createdAt:{
        allowNull: false,
        type:DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    },
    userId: {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model: USER_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'

    }
}

class Customer extends Model{

    static associate(models){
      this.belongsTo(models.User, {as:'user'});
      this.hasMany(models.Order,{
        as: 'orders',
        foreignKey: 'customerId'
      });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customer',
            timestamps: false
         }
      }
 }

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE };
