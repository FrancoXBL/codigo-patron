import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Login from "./LoginForm";
import axios from "axios";
import { API_KEY } from "../../../const/API_KEY";
import { useNavigate } from "react-router-dom";

const ArticleForm = () => {
  const [logged, setLogged] = useState(false)
  const [article, setArticle] = useState({
    title: "Patronato busca la victoria",
    type: "Primera",
    img: "https://media.lacapital.com.ar/p/bfa85750a005d7a2bdb1995db5fa4f27/adjuntos/205/imagenes/101/664/0101664466/san-martin-patronato-3jpg.jpg",
    body: `# Encabezados

# Encabezado de nivel 1
## Encabezado de nivel 2
### Encabezado de nivel 3
#### Encabezado de nivel 4
##### Encabezado de nivel 5
###### Encabezado de nivel 6

---

# Énfasis

*Texto en cursiva* o _Texto en cursiva_

**Texto en negrita** o __Texto en negrita__

~~Texto tachado~~

---

# Listas

## Lista ordenada

1. Primer ítem
2. Segundo ítem
   1. Subítem
   2. Subítem
3. Tercer ítem

## Lista desordenada

- Primer ítem
- Segundo ítem
  - Subítem
  - Subítem
- Tercer ítem

---

# Enlaces

[Enlace simple](http://ejemplo.com)

[Enlace con título](http://ejemplo.com "Título del enlace")

---

# Imágenes

![Texto alternativo](http://ejemplo.com/imagen.jpg)

![Texto alternativo con título](http://ejemplo.com/imagen.jpg "Título de la imagen")

---

# Citas

> Esta es una cita

>> Esta es una cita anidada


---

# Línea horizontal

---

# Saltos de línea

Esto es un párrafo con  
un salto de línea.

# Texto en bloques

\`\`\`markdown
# Encabezado de nivel 1
Texto en bloque de Markdown
\`\`\`

# Checkbox o tareas

- [ ] Tarea pendiente
- [x] Tarea completada

---

# Menciones y referencias

@usuario para mencionar a alguien (soporte en plataformas específicas)

[Referencia interna][1]

[1]: http://ejemplo.com`,
    date: "2024-11-21"
  });

  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({
      ...article,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_KEY}/api/news`, article);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (<>
  {logged ? <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title:</label>
        <input type="text" name="title" value={article.title} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Type:</label>
        <input type="text" name="type" value={article.type} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Image URL:</label>
        <input type="text" name="img" value={article.img} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Body:</label>
        <textarea name="body" value={article.body} onChange={handleChange} rows="10" />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input type="date" name="date" value={article.date} onChange={handleChange} />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>

    <div className="preview">
      <h2>Preview</h2>
      <h1>{article.title}</h1>
      <p><strong>Type:</strong> {article.type}</p>
      <img src={article.img} alt={article.title} style={{ width: '100%', height: 'auto' }} />
      <ReactMarkdown>{article.body}</ReactMarkdown>
      <p><strong>Date:</strong> {article.date}</p>
    </div>
  </div> : <><Login setLogged={setLogged} /></>}
  </>
  );
};

export default ArticleForm;
