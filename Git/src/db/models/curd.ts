
import { DataTypes,Model,Optional, Sequelize } from "sequelize";
import sequelizeconnection from "../config";
import exp from "constants";

interface curdattributes{
    id: number;
    name: string;
    age: number;
}

export interface curdInput extends Optional<curdattributes, 'id' >{}
export interface curdOutput extends Required<curdattributes>{}

class curd extends Model<curdattributes, curdInput> implements curdattributes{
    static findAllByName(name: string | import("qs").ParsedQs | string[] | import("qs").ParsedQs[]) {
      throw new Error('Method not implemented.');
    }
    public id!: number;
    public name!: string;
    public age!: number;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
    public readonly deletedAt?: Date;
} 

curd.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
   {
    timestamps: true,
    paranoid: true,
    sequelize: sequelizeconnection,

   } 

)

export default curd;