import "../../assets/css/admin/Admin.css"

export function Admin() {
  return `
    <form class="admin" data-admin>
      <div class="container">
        <h2>Ajouter un bucket</h2>
        <input type="text" placeholder="Titre" name="activity" />
        <input type="file" name="img" />
          
        <label>Déja fait !
          <input type="checkbox" name="done" />
        </label> 
        <input type="text" placeholder="Lien infos" name="link" />
        <input type="text" placeholder="Latitude" name="lat" />
        <input type="text" placeholder="Longitude" name="lng" />
        <input type="submit" value="Submit" />
      </div>
      <a href="/" data-back>Back</a>
    </form>
  `
}
