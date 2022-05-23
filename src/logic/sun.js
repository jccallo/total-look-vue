export default {
  // fecth con async y await
  async ajax($url = "", $method = "GET", $body = null, $query = null) {
    // preparamos la query y el resultado por ejemplo es: "" o "?" o "?page=3&perpage=4"
    let query = "";
    if ($query) {
      query = "?";
      for (let i in $query) {
        if (typeof i === "string" && i.length > 0) {
          query += `&${i}=${$query[i]}`;
        }
      }
    }

    // agregamos la query a la url
    $url = $url + query;
    console.log($url);

    // hacemos la peticion fetch
    const response = await fetch($url, {
      method: $method,
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
      body: $body ? JSON.stringify($body) : null,
    });

    // si hay problemas mandamos un error al catch
    if (!response.ok) {
      throw {
        res: false,
        msg: `${response.status} ${response.statusText}`,
      };
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
