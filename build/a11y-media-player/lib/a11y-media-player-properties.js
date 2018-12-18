import{html,PolymerElement}from"../../../@polymer/polymer/polymer-element.js";import{A11yMediaBehaviors}from"./a11y-media-behaviors.js";export{A11yMediaPlayerProperties};class A11yMediaPlayerProperties extends A11yMediaBehaviors{static get properties(){return{allowConcurrent:{type:Boolean,value:!1,reflectToAttribute:!0},audioLabel:{type:String,value:"audio"},audioOnly:{type:Boolean,value:!1,reflectToAttribute:!0},autoScrollLabel:{type:String,value:"auto-scrolling"},autoScrollIcon:{type:String,value:"swap-vert"},captionsIcon:{type:String,value:"av:closed-caption"},captionsLabel:{type:String,value:"closed captions"},captionsMenuLabel:{type:String,value:"Captions"},captionsMenuOff:{type:String,value:"Off"},compactControls:{type:Boolean,computed:"_getCompactControls(responsiveSize)",reflectToAttribute:!0},crossorigin:{type:String,value:null,reflectToAttribute:!0},darkTranscript:{type:Boolean,value:!1},disableFullscreen:{type:Boolean,value:!1},disableInteractive:{type:Boolean,value:!1},disableSearch:{type:Boolean,value:!1},disableScroll:{type:Boolean,value:!1},disablePrintButton:{type:Boolean,value:!1},flexLayout:{type:Boolean,computed:"_isFlexLayout(standAlone,hideTranscript,noHeight,stackedLayout)",reflectToAttribute:!0},forwardIcon:{type:String,value:"av:fast-forward"},forwardLabel:{type:String,value:"forward"},fullscreen:{type:Boolean,value:!1},fullscreenButton:{type:Boolean,computed:"_getFullscreenButton(disableFullscreen)",notify:!0},fullscreenIcon:{type:String,value:"fullscreen"},fullscreenLabel:{type:String,value:"fullscreen"},hasCaptions:{type:Boolean,value:!1},hasTranscript:{type:Boolean,value:!1},hideElapsedTime:{type:Boolean,value:!1},hideTimestamps:{type:Boolean,value:!1},loadingLabel:{type:String,value:"Loading..."},loopLabel:{type:String,value:"Loop Playback"},media:{type:Object,value:null},mediaTitle:{type:String,value:"",reflectToAttribute:!0},muteIcon:{type:String,value:"av:volume-up"},muteLabel:{type:String,value:"mute"},noHeight:{type:Boolean,computed:"_getNoHeight(audioOnly,thumbnailSrc)",reflectToAttribute:!0},noPlayButton:{type:Boolean,computed:"_noPlayButton(noHeight,isYoutube)"},pauseIcon:{type:String,value:"av:pause"},pauseLabel:{type:String,value:"pause"},playIcon:{type:String,value:"av:play-arrow"},playing:{type:Boolean,value:!1},playLabel:{type:String,value:"play"},printLabel:{type:String,value:"print transcript"},printIcon:{type:String,value:"print"},responsiveSize:{type:String,notify:!0,reflectToAttribute:!0},restartIcon:{type:String,value:"av:replay"},restartLabel:{type:String,value:"restart"},rewindIcon:{type:String,value:"av:fast-rewind"},rewindLabel:{type:String,value:"backward"},search:{type:Object,value:null},searchIcon:{type:String,value:"search"},searchLabel:{type:String,value:"search transcript"},searchNextButtonIcon:{type:String,value:"arrow-forward"},searchNextButtonLabel:{type:String,value:"next result"},searchNextIcon:{type:String,value:"arrow-forward"},searchNextLabel:{type:String,value:"next result"},searchPrevButtonIcon:{type:String,value:"arrow-back"},searchPrevButtonLabel:{type:String,value:"previous result"},searchPrevIcon:{type:String,value:"arrow-back"},searchPrevLabel:{type:String,value:"previous result"},settingsIcon:{type:String,value:"settings"},settingsLabel:{type:String,value:"settings"},showCustomCaptions:{type:Boolean,computed:"_showCustomCaptions(isYoutube,audioOnly,hasCaptions,cc)"},skipTranscriptLink:{type:String,value:"Skip the transcript."},speedLabel:{type:String,value:"Speed %"},stackedLayout:{type:Boolean,value:!1},standAlone:{type:Boolean,value:!1,reflectToAttribute:!0},target:{type:Object,value:null},thumbnailSrc:{type:String,value:null,reflectToAttribute:!0},transcriptIcon:{type:String,value:"description"},transcriptLabel:{type:String,value:"transcript"},transcriptMenuLabel:{type:String,value:"Transcript"},uiLanguage:{type:String,value:"en"},unmuteIcon:{type:String,value:"av:volume-off"},unmuteLabel:{type:String,value:"unmute"},videoLabel:{type:String,value:"video"},volumeLabel:{type:String,value:"volume"},width:{type:String,value:null}}}static get behaviors(){return[A11yMediaBehaviors]}static get tag(){return"a11y-media-player-properties"}_getNoHeight(audioOnly,thumbnailSrc){return audioOnly&&(null===thumbnailSrc||thumbnailSrc===void 0)}_noPlayButton(noHeight,isYoutube){return noHeight||isYoutube}_getFullscreenButton(disableFullscreen){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||disableFullscreen){return!1}else{return!0}}_getCompactControls(responsiveSize){return this._testAttribute(responsiveSize,"xs")||this._testAttribute(responsiveSize,"sm")}_showCustomCaptions(isYoutube,audioOnly,hasCaptions,cc){return this._hasCustomCaptions(isYoutube,audioOnly,hasCaptions)&&cc}_hasCustomCaptions(isYoutube,audioOnly,hasCaptions){return(isYoutube||audioOnly)&&hasCaptions}_isFlexLayout(standAlone,hideTranscript,noHeight,stackedLayout){return!standAlone&&!hideTranscript&&!noHeight&&!stackedLayout}}window.customElements.define(A11yMediaPlayerProperties.tag,A11yMediaPlayerProperties);