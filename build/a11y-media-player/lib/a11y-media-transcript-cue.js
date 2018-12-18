import{html,PolymerElement}from"../../../@polymer/polymer/polymer-element.js";import{A11yMediaPlayerProperties}from"./a11y-media-player-properties.js";import"../../../@polymer/iron-a11y-keys/iron-a11y-keys.js";import"../../simple-search/lib/simple-search-content.js";export{A11yMediaTranscriptCue};class A11yMediaTranscriptCue extends A11yMediaPlayerProperties{static get properties(){return{active:{type:Boolean,reflectToAttribute:!0,computed:"_getActiveCue(cue,activeCues)",notify:!0,reflectToAttribute:!0},activeCues:{type:Array,value:null,notify:!0},cue:{type:Array,value:null},disabled:{type:Boolean,value:!1},text:{type:String,value:""}}}static get tag(){return"a11y-media-transcript-cue"}static get behaviors(){return[A11yMediaPlayerProperties]}static get template(){return html`
      <style is="custom-style">
        :host {
          cursor: default;
          display: table-row;
          width: 100%;
          color: var(--a11y-media-transcript-color);
          background-color: var(--a11y-media-transcript-bg-color);
          transition: color 0.25s, background-color 0.25s;
        }
        :host([hide-timestamps]) {
          display: inline;
        }
        :host(:not([active]):not([disabled]):active),
        :host(:not([active]):not([disabled]):focus),
        :host(:not([active]):not([disabled]):hover) {
          cursor: pointer;
          color: var(--a11y-media-transcript-focused-cue-color);
          background-color: var(--a11y-media-transcript-focused-cue-bg-color);
          outline: 1px dotted var(--a11y-media-transcript-focused-cue-color);
          @apply --a11y-media-transcript-focused-cue;
        }
        :host([active]) {
          color: var(--a11y-media-transcript-active-cue-color);
          background-color: var(--a11y-media-transcript-active-cue-bg-color);
          @apply --a11y-media-transcript-active-cue;
        }
        :host #text {
          display: table-cell;
          width: 100%;
          line-height: 200%;
        }
        :host([hide-timestamps]) #text {
          display: inline;
        }
        :host #time {
          display: table-cell;
          font-size: 80%;
          padding: 0 16px 0 0;
          white-space: nowrap;
          font-family: monospace;
        }
        :host([hide-timestamps]) #time {
          display: none;
        }
        :host simple-search-content {
          --simple-search-match-text-color: var(
            --a11y-media-transcript-match-color
          );
          --simple-search-match-bg-color: var(
            --a11y-media-transcript-match-bg-color
          );
          --simple-search-match-border-color: var(
            --a11y-media-transcript-match-border-color
          );
          --simple-search-match: {
            border: none;
            border-radius: 4px;
            font-weight: normal;
          }
        }
        @media print {
          :host,
          :host([active]),
          :host(:not([active]):not([disabled]):active),
          :host(:not([active]):not([disabled]):focus),
          :host(:not([active]):not([disabled]):hover) {
            color: #000000;
            background-color: #ffffff;
          }
        }
      </style>
      <span id="time">[[cue.start]] - [[cue.end]]</span>
      <span id="text">
        <simple-search-content
          id="content"
          content="[[cue.text]]"
        ></simple-search-content>
      </span>
    `}connectedCallback(){super.connectedCallback()}ready(){super.ready();let root=this,search=root.search;if(!root.disabled){root.__target=this;root.setAttribute("aria-role","button");root.setAttribute("controls",this.mediaId)}if(!root.disableSearch&&root.search!==void 0&&null!==root.search){root.$.content.enableSearch(search)}root.addEventListener("click",root._handleTap)}_getActiveCue(cue,activeCues){return null!==activeCues&&activeCues.includes(cue.order.toString())?!0:!1}_handleTap(){let root=this;this.dispatchEvent(new CustomEvent("tap",{detail:root.cue.seek}))}}window.customElements.define(A11yMediaTranscriptCue.tag,A11yMediaTranscriptCue);