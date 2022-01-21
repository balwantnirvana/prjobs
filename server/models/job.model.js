const { DataTypes } = require('sequelize');

function job(sequelize) {
    const attributes = {
		id : {type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey:true},
        uid : {type: DataTypes.INTEGER, allowNull: false},
        job_title: { type: DataTypes.STRING, allowNull: false },
        job_category: { type: DataTypes.STRING, allowNull: false },
        employer: { type: DataTypes.STRING, allowNull: false },
		city: { type: DataTypes.STRING(100), allowNull: false },
		province: { type: DataTypes.STRING(100), allowNull: false },
        country : { type: DataTypes.STRING(100), allowNull: false },
        website: { type: DataTypes.STRING, allowNull: false },
        end_date: { type: DataTypes.STRING(100), allowNull: false },
        job_type: { type: DataTypes.STRING, allowNull: false },
		sallery_min: { type: DataTypes.STRING, allowNull: false },
        sallery_max: { type: DataTypes.STRING, allowNull: false },
		education: { type: DataTypes.STRING, allowNull: false },
        education_detail: { type: DataTypes.TEXT, allowNull: false },
        experience: { type: DataTypes.STRING, allowNull: false },
        skills: { type: DataTypes.TEXT, allowNull: false },
		skills2: { type: DataTypes.TEXT, allowNull: false },
        capability: { type: DataTypes.TEXT, allowNull: false },
        documents: { type: DataTypes.TEXT, allowNull: false },
        status: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1},
        is_expired: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0},
        views: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    }; 


    return sequelize.define('tbl_jobs', attributes);
}
module.exports.Job = job