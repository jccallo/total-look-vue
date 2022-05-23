import sun from "@/logic/sun";

const API = "http://localhost:8000/api/empleados/";

export default {
  // index
  index(query) {
    console.log(query)
    return sun.ajax(API, "GET", null, query);
  },

  // create
  create(obj) {
    return sun.ajax(API, "POST", obj);
  },

  // show
  show(id) {
    return sun.ajax(API + id, "GET", null);
  },

  // edit
  edit(id, obj) {
    return sun.ajax(API + id, "PUT", obj);
  },

  // delete
  delete(id) {
    return sun.ajax(API + id, "DELETE", null);
  },
};


