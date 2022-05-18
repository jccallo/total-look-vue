const API = "http://localhost:8000/api/empleados/";

export default {
  // funcion ajax
  async $ajax($url, $method, $body) {
    const response = await fetch($url, {
      method: $method,
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
      body: $body ? JSON.stringify($body) : null,
    });
    if (!response.ok) {
      throw {
        res: false,
        msg: `${response.status} ${response.statusText}`,
      };
    }
    const json = await response.json();
    if (!json.res) {
      throw json;
    }
    return json;
  },

  // index
  index() {
    return this.$ajax(API, "GET", null);
  },

  // delete
  delete(id) {
    return this.$ajax(API + id, "DELETE", null);
  },

  // show
  show(id) {
    return this.$ajax(API + id, "GET", null);
  },

  // edit
  async edit(id, obj) {
    return this.$ajax(API + id, "PUT", obj);
  },
};


