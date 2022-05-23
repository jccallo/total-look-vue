export default {
  // fecth con async y await
  async ajax($url, $method, $body) {
    // validamos
    $url = typeof $url == "string" ? $url : "";
    $method = typeof $method == "string" ? $method : "GET";
    $body = $method != "GET" && typeof $body == "object" ? JSON.stringify($body) : null;

    // hacemos la peticion fetch
    const response = await fetch($url, {
      method: $method,
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
      body: $body,
    });

    // si hay problemas mandamos un error al catch
    if (!response.ok) {
      console.log({res: false, msg: `${response.status} ${response.statusText}`});
    }

    // convertimos a json la respuesta
    const json = await response.json();

    // si hay problemas mandamos el json al catch
    if (!json.res) {
      throw json;
    }

    return json;
  },
};
