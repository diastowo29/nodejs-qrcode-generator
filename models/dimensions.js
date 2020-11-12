module.exports = (sequelize, type) => {
    return sequelize.define('dimensions', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        panjang: type.INTEGER,
        lebar: type.INTEGER,
        tinggi: type.INTEGER,
        berat: type.INTEGER,
    });
}