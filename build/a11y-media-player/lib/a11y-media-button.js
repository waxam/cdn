import{html,PolymerElement}from"../../../@polymer/polymer/polymer-element.js";import{A11yMediaPlayerProperties}from"./a11y-media-player-properties.js";import"../../../@polymer/iron-icons/iron-icons.js";import"../../../@polymer/iron-icons/av-icons.js";import"../../../@polymer/paper-tooltip/paper-tooltip.js";export{A11yMediaButton};class A11yMediaButton extends A11yMediaPlayerProperties{static get properties(){return{controls:{type:String,value:"video"},icon:{type:String,value:null},label:{type:String,value:null},toggle:{type:Boolean,value:!1,reflectToAttribute:!0},disabled:{type:Boolean,value:null}}}static get tag(){return"a11y-media-button"}static get behaviors(){return[A11yMediaPlayerProperties]}static get template(){return html`
      <style>
        :host {
          margin: 0;
          padding: 0;
        }
        :host #button {
          margin: 0;
          padding: 8px;
          line-height: 1;
          border: none;
          transition: color 0.25s;
          color: var(--a11y-media-button-color);
          background-color: var(--a11y-media-button-bg-color);
        }
        :host([toggle]) #button {
          color: var(--a11y-media-button-toggle-color);
          background-color: var(--a11y-media-button-toggle-bg-color);
        }
        :host([toggle]:active) #button,
        :host([toggle]:focus) #button,
        :host([toggle]:hover) #button,
        :host(:active) #button,
        :host(:focus) #button,
        :host(:hover) #button {
          cursor: pointer;
          color: var(--a11y-media-button-hover-color);
          background-color: var(--a11y-media-button-hover-bg-color);
        }
        :host .sr-only {
          position: absolute;
          left: -99999;
          top: 0;
          height: 0;
          width: 0;
          overflow: hidden;
        }
        :host paper-tooltip {
          z-index: 100;
        }
        iron-icon {
          display: inline-block;
        }
      </style>
      <button
        id="button"
        aria-label$="[[label]]"
        aria-pressed$="[[toggle]]"
        aria-role="button"
        controls="[[controls]]"
        disabled$="[[disabled]]"
        on-tap="_buttonTap"
        tabindex="0"
        toggle$="[[toggle]]"
      >
        <iron-icon icon="[[icon]]"></iron-icon>
      </button>
      <paper-tooltip for="button">[[label]]</paper-tooltip>
    `}connectedCallback(){super.connectedCallback()}ready(){super.ready();this.__target=this.$.button}_buttonTap(){this.dispatchEvent(new CustomEvent("tap",{detail:this}))}}window.customElements.define(A11yMediaButton.tag,A11yMediaButton);