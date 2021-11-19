import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { client, clientId } from './client';
import type { pays, paysId } from './pays';
import type { ville, villeId } from './ville';

export interface adresseAttributes {
  id_adresse: number;
  id_client: number;
  pays: string;
  ville: string;
  adresse: string;
  code_postal: string;
}

export type adressePk = "id_adresse";
export type adresseId = adresse[adressePk];
export type adresseCreationAttributes = Optional<adresseAttributes, adressePk>;

export class adresse extends Model<adresseAttributes, adresseCreationAttributes> implements adresseAttributes {
  id_adresse!: number;
  id_client!: number;
  pays!: string;
  ville!: string;
  adresse!: string;
  pays!: string;
  ville!: string;
  code_postal!: string;

  // adresse belongsTo client via id_client
  id_client_client!: client;
  getId_client_client!: Sequelize.BelongsToGetAssociationMixin<client>;
  setId_client_client!: Sequelize.BelongsToSetAssociationMixin<client, clientId>;
  createId_client_client!: Sequelize.BelongsToCreateAssociationMixin<client>;
  // adresse belongsTo pays via id_pays
  id_pays_pay!: pays;
  getId_pays_pay!: Sequelize.BelongsToGetAssociationMixin<pays>;
  setId_pays_pay!: Sequelize.BelongsToSetAssociationMixin<pays, paysId>;
  createId_pays_pay!: Sequelize.BelongsToCreateAssociationMixin<pays>;
  // adresse belongsTo ville via id_ville
  id_ville_ville!: ville;
  getId_ville_ville!: Sequelize.BelongsToGetAssociationMixin<ville>;
  setId_ville_ville!: Sequelize.BelongsToSetAssociationMixin<ville, villeId>;
  createId_ville_ville!: Sequelize.BelongsToCreateAssociationMixin<ville>;

  static initModel(sequelize: Sequelize.Sequelize): typeof adresse {
    adresse.init({
    id_adresse: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_client: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
        key: 'id_client'
      }
    },
    pays: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ville: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adresse: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    code_postal: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adresse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_adresse" },
        ]
      },
      {
        name: "id_pays",
        using: "BTREE",
        fields: [
          { name: "id_pays" },
        ]
      },
      {
        name: "id_client",
        using: "BTREE",
        fields: [
          { name: "id_client" },
        ]
      },
      {
        name: "id_ville",
        using: "BTREE",
        fields: [
          { name: "id_ville" },
        ]
      },
    ]
  });
  return adresse;
  }
}