export default {
  // fecth con async y await
  async ajax($url, $method, $body) {
    // validamos
    $url = typeof $url == "string" ? $url : "";
    $method = typeof $method == "string" ? $method : "GET";
    $body =
      $method != "GET" && typeof $body == "object"
        ? JSON.stringify($body)
        : null;

    // hacemos la peticion fetch
    const response = await fetch($url, {
      method: $method,
      headers: {
        "Content-type": "application/json",
        "Content-Type": " multipart/form-data",
        accept: "application/json",
      },
      body: $body,
    });

    // si hay problemas mandamos un error al catch
    if (!response.ok) {
      console.log({
        res: false,
        msg: `${response.status} ${response.statusText}`,
      });
    }

    // convertimos a json la respuesta
    const json = await response.json();

    // si hay problemas mandamos el json al catch
    if (!json.res) {
      throw json;
    }

    return json;
  },
  async put($url, $method, $body) {
    // validamos
    // $url = typeof $url == "string" ? $url : "";
    // $method = typeof $method == "string" ? $method : "GET";
    // if ($method != "GET" && typeof $body == "object") {
    //   console.log(typeof $body)
    //   console.log($body)
    //   let data = new FormData();
    //   for (let key in $body){
    //     data.append(key, $body[key]);
    //   }
    //   $body = data;
    //   $body.get("id")
    //   console.log("fin")
    // } else {
    //   $body = null;
    // }

    // let data = new FormData();
    // data.append('nombre', $body.nombre);
    // data.append('apellido', $body.apellido);
    // data.append('dni', $body.dni);
    // data.append('telefono', $body.telefono);
    // data.append('direccion', $body.direccion);
    // data.append('imagen', $body.imagen);
    // data.append('estado', $body.estado);
    // data.append('email', $body.email);
    // data.append('password', $body.password);
    // data.append('rol_id', $body.rol_id);



    // hacemos la peticion fetch
    const response = await fetch($url, {
      method: $method,
      headers: {
        // "Content-type": "application/json",
        // "Content-Type": " multipart/form-data",
        accept: "application/json",
      },
      body: JSON.stringify($body),
    });

    // si hay problemas mandamos un error al catch
    if (!response.ok) {
      console.log({
        res: false,
        msg: `${response.status} ${response.statusText}`,
      });
    }

    // convertimos a json la respuesta
    const json = await response.json();

    // si hay problemas mandamos el json al catch
    if (!json.res) {
      throw json;
    }

    return json;
  }
};
