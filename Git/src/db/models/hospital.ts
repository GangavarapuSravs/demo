// models/hospital.ts
import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface HospitalAttributes {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface HospitalInput extends Optional<HospitalAttributes, 'id'> {}
export interface HospitalOutput extends Required<HospitalAttributes> {}

class Hospital extends Model<HospitalAttributes, HospitalInput> implements HospitalAttributes {
  public id!: number;
  public name!: string;
  public address!: string;
  public latitude!: number;
  public longitude!: number;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
  public readonly deletedAt?: Date;
}

Hospital.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelizeConnection,
  }
);

export default Hospital;
