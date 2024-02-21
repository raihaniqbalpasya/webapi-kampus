const kampusServices = require("../services/kampusServices");

module.exports = {
  async getAll(req, res) {
    try {
      const data = await kampusServices.getAll();
      if (data.length >= 1) {
        res.status(200).json({
          status: true,
          message: "Succesfully get all data",
          data,
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Data empty, please input some data!",
        });
      }
    } catch (error) {
      res.status(422).json({
        status: false,
        message: error.message,
      });
    }
  },

  async getById(req, res) {
    try {
      const data = await kampusServices.getById(req.params.id);
      if (data) {
        res.status(200).json({
          status: true,
          message: "Succesfully get data by id",
          data,
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Data not found or deleted",
        });
      }
    } catch (error) {
      res.status(422).json({
        status: false,
        message: error.message,
      });
    }
  },

  async getByFakultas(req, res) {
    try {
      const data = await kampusServices.getByFakultas(req.query.dosenFakultas);
      if (data.length >= 1) {
        res.status(200).json({
          status: true,
          message: "Succesfully get data dosen by fakultas",
          data,
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Data not found or deleted",
        });
      }
    } catch (error) {
      res.status(422).json({
        status: false,
        message: error.message,
      });
    }
  },

  async createMhs(req, res) {
    try {
      const data = await kampusServices.createMhs(req.body);
      res.status(201).json({
        status: true,
        message: "Succesfully create data",
        data,
      });
    } catch (error) {
      res.status(422).json({
        status: false,
        message: error.message,
      });
    }
  },

  async createMhsAndDosen(req, res) {
    try {
      const dataMhs = await kampusServices.createMhs(req.body);
      const dataDosen = await kampusServices.createDosen(req.body);
      res.status(201).json({
        status: true,
        message: "Succesfully create data",
        data: [{ mahasiswa: dataMhs, dosen: dataDosen }],
      });
    } catch (error) {
      res.status(422).json({
        status: false,
        message: error.message,
      });
    }
  },

  async update(req, res) {
    try {
      const data = await kampusServices.getById(req.params.id);
      if (data !== null) {
        await kampusServices.update(req.params.id, req.body);
        const print = await kampusServices.getById(req.params.id);
        res.status(200).json({
          status: true,
          message: "Succesfully update data",
          print,
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Data not found or deleted",
        });
      }
    } catch (error) {
      res.status(422).json({
        status: false,
        message: error.message,
      });
    }
  },

  async delete(req, res) {
    try {
      const data = await kampusServices.getById(req.params.id);
      if (data) {
        await kampusServices.delete(req.params.id);
        res.status(200).json({
          status: true,
          message: "Succesfully delete data",
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Data not found or deleted",
        });
      }
    } catch (error) {
      res.status(422).json({
        status: false,
        message: error.message,
      });
    }
  },
};
