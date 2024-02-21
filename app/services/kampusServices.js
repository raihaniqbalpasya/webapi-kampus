const { Mahasiswa, Dosen } = require("../models");

module.exports = {
  getAll() {
    try {
      return Mahasiswa.findAll();
    } catch (error) {
      throw error;
    }
  },

  getById(id) {
    try {
      return Mahasiswa.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  getByFakultas(dosenFakultas) {
    try {
      return Dosen.findAll({
        where: {
          dosenFakultas: dosenFakultas,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  createMhs(createArgs) {
    try {
      return Mahasiswa.create(createArgs);
    } catch (error) {
      throw error;
    }
  },

  createDosen(createArgs) {
    try {
      return Dosen.create(createArgs);
    } catch (error) {
      throw error;
    }
  },

  update(id, updateArgs) {
    try {
      return Mahasiswa.update(updateArgs, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  delete(id) {
    try {
      return Mahasiswa.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },
};
