import{html,PolymerElement}from"../../../@polymer/polymer/polymer-element.js";import{A11yMediaPlayerProperties}from"./a11y-media-player-properties.js";export{A11yMediaLoader};class A11yMediaLoader extends A11yMediaPlayerProperties{static get properties(){return{controls:{type:String,value:"video"},icon:{type:String,value:null},label:{type:String,value:null},toggle:{type:Boolean,value:!1,reflectToAttribute:!0},disabled:{type:Boolean,value:null}}}static get tag(){return"a11y-media-loader"}static get behaviors(){return[A11yMediaBehaviors]}static get template(){return html`
      <style>
        :host {
          height: 100%;
        }
        #video {
          width: 100%;
          max-width: 100%;
          max-height: 80vh;
        }
      </style>
      <video
        id="video"
        autoplay$="[[autoplay]]"
        crossorigin$="[[crossorigin]]"
        hidden$="[[audioOnly]]"
        lang$="[[lang]]"
        on-loadedmetadata="_handleMetadata"
        src$="[[manifest]]"
        preload="metadata"
      >
        HTML5 video not supported
      </video>
      <audio
        id="audio"
        autoplay$="[[autoplay]]"
        crossorigin$="[[crossorigin]]"
        hidden$="[[!audioOnly]]"
        lang$="[[lang]]"
        on-loadedmetadata="_handleMetadata"
        src$="[[manifest]]"
        preload="metadata"
      >
        HTML5 audio not supported
      </audio>
    `}connectedCallback(){super.connectedCallback()}ready(){super.ready();let root=this;root.media=root.$.video!==void 0&&!root.audioOnly?root.$.video:root.$.audio}_handleMetadata(){let root=this;root.duration=0<root.media.duration?root.media.duration:0;root.tracks=[];root.volume=root.muted?0:Math.max(this.volume,10);root.seekable=root.media.seekable;root.setVolume(root.volume);root.setMute(root.muted);root.setCC(root.cc);root.setLoop(root.loop);root.setPlaybackRate(root.playbackRate);root.aspectRatio=root.media.videoWidth/root.media.videoHeight;root.dispatchEvent(new CustomEvent("media-loaded",{detail:root}))}getBufferedTime(){return 0<this.media.buffered.length?this.media.buffered.end(0):this.getCurrentTime()}getCurrentTime(){return this.media.currentTime}play(){this.media.play()}pause(){this.media.pause()}selectTrack(index){this.selectedTrack=this.media.textTracks[index];for(let i=0;i<this.media.textTracks.length;i++){if(parseInt(index)===i){this.media.textTracks[i].mode="showing"}else if(null!==this.media.textTracks[i]){this.media.textTracks[i].mode="hidden"}}}stop(){this.pause();this.seek(0)}restart(){this.seek(0);this.play()}seek(time){this.media.currentTime=time}setCC(mode){this.media.cc=!0===mode;if(this.selectedTrack!==void 0&&!0==mode){this.selectedTrack.mode="showing";this.$.video.textTracks.value=this.selectedTrackId}else if(this.selectedTrack!==void 0&&null!==this.selectedTrack){this.selectedTrack.mode="hidden";this.$.video.textTracks.value=""}}setVolume(value){this.media.volume=value/100}setPlaybackRate(value){this.media.playbackRate=null!==value?value:1}setLoop(mode){this.media.loop=!0===mode}setMute(mode){this.media.muted=mode}}window.customElements.define(A11yMediaLoader.tag,A11yMediaLoader);