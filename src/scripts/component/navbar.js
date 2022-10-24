class Navbar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <h1 class="navbar">LongLife Generator</h1>
            `;
    }
}

customElements.define('nav-bar',Navbar);