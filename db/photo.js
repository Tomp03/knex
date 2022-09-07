const knex = require("./knex");

function createPhoto(photo) {
  return knex("photos").insert(photo);
}

function getAllPhotos() {
  return knex("photos").select("*");
}

function getOnePhoto(slug) {
  return knex("photos").where("slug", slug);
}

function deletePhoto(id) {
  return knex("photos").where("id", id).del();
}

function updatePhoto(slug, photo) {
  return knex("photos").where("slug", slug).update(photo);
}

module.exports = {
  createPhoto,
  getAllPhotos,
  getOnePhoto,
  deletePhoto,
  updatePhoto,
};
