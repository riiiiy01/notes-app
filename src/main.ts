class TypescriptLogo extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
            <figure>
                <img src="src/typescript.svg" alt="ts-logo" width="200" />
                <figcaption>ts-logo</figcaption>
            </figure>
        `;
    }
}

customElements.define("ts-logo", TypescriptLogo);
