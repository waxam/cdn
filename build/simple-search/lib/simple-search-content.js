import{html,PolymerElement}from"../../../@polymer/polymer/polymer-element.js";export{SimpleSearchContent};class SimpleSearchContent extends PolymerElement{static get is(){return"simple-search-content"}static get properties(){return{content:{type:String,value:null,reflectToAttribute:!0},inSearchMode:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return html`
      <style>
        :host #content {
          @apply --simple-search-content;
        }
        :host #content[match-number] {
          color: var(--simple-search-match-text-color, #000);
          background-color: var(--simple-search-match-bg-color, #f0f0f0);
          border: 1px solid;
          border-color: var(--simple-search-match-border-color, #ddd);
          padding: 0.16px 4px;
          border-radius: 0.16px;
          font-weight: bold;
          @apply --simple-search-match;
        }
      </style>
      <span id="content">
        <span class="initialcontent" hidden$="[[inSearchMode]]"
          >[[content]]</span
        >
        <template is="dom-repeat" items="[[_searchedContent]]">
          <span
            match-number\$="[[item.matchNumber]]"
            tabindex\$="[[_getTabIndex(item.matchNumber)]]"
            >[[item.text]]</span
          >
        </template>
      </span>
    `}enableSearch(searchObject){let root=this,content=[{matched:!1,text:root.content}];if(null===content[0].text)content[0].text=root.innerHTML;this.setContent(content);searchObject.addEventListener("simple-search",function(){root.setContent(content);root.setContent(searchObject.findMatches(content))});searchObject.addEventListener("goto-result",e=>{this.focus(e.detail)})}setContent(newContent){this.inSearchMode=!0;this.__searchedContent=newContent}focus(matchNumber){let result=this.$.content.querySelector("[match-number=\""+matchNumber+"\"]");if(result!==void 0&&null!==result)result.focus()}_getTabIndex(matchNumber){return matchNumber!==void 0&&null!==matchNumber?"1":""}}customElements.define(SimpleSearchContent.is,SimpleSearchContent);