class askBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="row">
        <div class="col-lg-12 col-sm-6">
          <div class="card">
            <div class="card-header" style="background-color:white">
              <h5 class="card-title">Guest how long U life?</h5>
            </div>
            <div class="card-body">
              <div class="form-group d-flex align-items-center flex-nowrap ">
                <input id="inputBookTitle" onkeyup="this.value=toProperCase(this.value)" type="text" class="form-control"
                  placeholder="Type Your Nickname">
                  <button id="buttonSave" class="btn btn-danger">Generate</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    }
}

customElements.define('ask-bar',askBar);