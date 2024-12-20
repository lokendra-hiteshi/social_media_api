import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

// Define User model
class User extends Model {
  public id!: number;
  public email!: string;
  public username!: string;
  public name!: string;
  public profile_picture!: string;
  public other_data!: Record<string, any>;
  public createdAt!: Date;
  public updatedAt!: Date;
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    other_data: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  }
);

export default User;
