class Clock extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="cf-container">
        <div class="cf-flame-container"  id="fireNodes1">
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
        </div>
        <div class="cf-flame-container" id="fireNodes2">
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
        </div>
        <div class="cf-flame-container" id="base-fire">
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
          <div class = "cf-flame"></div>
        </div>
        <div class= "cf-log-container">
          <div class="cf-log"></div>
          <div class="cf-log"></div>
        <div>
      </div>
        `;
    }
}

customElements.define('the-time', Clock);