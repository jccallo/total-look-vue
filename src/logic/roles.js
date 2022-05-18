const API = "http://localhost:8000/api/roles/";

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
  edit(id, obj) {
    return this.$ajax(API + id, "PUT", obj);
  },

  // create
  create(obj) {
    return this.$ajax(API, "POST", obj);
  },
};

// export default {
//   // funcion comun
//   async $ajax($url, $method, $body) {
//     const response = await fetch($url, {
//       method: $method,
//       headers: {
//         "Content-type": "application/json",
//         accept: "application/json",
//       },
//       body: null || JSON.stringify($body),
//     });
//     if (!response.ok) {
//       throw {
//         res: false,
//         msg: `${response.status} ${response.statusText}`,
//       };
//     }
//     const json = await response.json();
//     if (!json.res) {
//       throw json;
//     }
//     return json;
//   },

//   // index
//   async index() {
//     const response = await fetch(API, {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//         accept: "application/json",
//       },
//       body: null,
//     });
//     if (!response.ok) {
//       throw {
//         res: false,
//         msg: `${response.status} ${response.statusText}`,
//       };
//     }
//     const json = await response.json();
//     if (!json.res) {
//       throw json;
//     }
//     return json;
//   },

//   // delete
//   async delete(id) {
//     const response = await fetch(API + id, {
//       method: "DELETE",
//       headers: {
//         "Content-type": "application/json",
//         accept: "application/json",
//       },
//       body: null,
//     });
//     if (!response.ok) {
//       throw {
//         res: false,
//         msg: `${response.status} ${response.statusText}`,
//       };
//     }
//     const json = await response.json();
//     if (!json.res) {
//       throw json;
//     }
//     return json;
//   },

//   // show
//   async show(id) {
//     const response = await fetch(API + id, {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//         accept: "application/json",
//       },
//       body: null,
//     });
//     if (!response.ok) {
//       throw {
//         res: false,
//         msg: `${response.status} ${response.statusText}`,
//       };
//     }
//     const json = await response.json();
//     if (!json.res) {
//       throw json;
//     }
//     return json;
//   },

//   // edit
//   async edit(id, obj) {
//     const response = await fetch(API + id, {
//       method: "PUT",
//       headers: {
//         "Content-type": "application/json",
//         accept: "application/json",
//       },
//       body: JSON.stringify(obj),
//     });
//     if (!response.ok) {
//       throw {
//         res: false,
//         msg: `${response.status} ${response.statusText}`,
//       };
//     }
//     const json = await response.json();
//     if (!json.res) {
//       throw json;
//     }
//     return json;
//   },
// };

// index() {
//   return fetch(API)
//     .then((response) => {
//       if (!response.ok) {
//         throw {
//           res: false,
//           msg: `${response.status} ${response.statusText}`,
//         };
//       }
//       return response;
//     })
//     .then((response) => response.json())
//     .then((response) => {
//       if (!response.res) {
//         throw response;
//       }
//       return response.roles;
//     })
// },
