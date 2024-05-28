(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"propagateClick":false,"class":"Player","children":["this.MainViewer","this.Container_CCCA0454_C011_DB1D_41C9_C069B390BBEA"],"minHeight":20,"gap":10,"minWidth":20,"start":"this.init()","scrollBarMargin":2,"id":"rootPlayer","data":{"textToSpeechConfig":{"pitch":1,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false},"defaultLocale":"en","name":"Player43899","locales":{"en":"locale/en.txt"},"history":{}},"backgroundColor":["#FFFFFF"],"buttonToggleMute":"this.IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236","scripts":{"getMediaByName":TDV.Tour.Script.getMediaByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"shareSocial":TDV.Tour.Script.shareSocial,"toggleVR":TDV.Tour.Script.toggleVR,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"clone":TDV.Tour.Script.clone,"setLocale":TDV.Tour.Script.setLocale,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"playAudioList":TDV.Tour.Script.playAudioList,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"openLink":TDV.Tour.Script.openLink,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMapLocation":TDV.Tour.Script.setMapLocation,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"downloadFile":TDV.Tour.Script.downloadFile,"getPixels":TDV.Tour.Script.getPixels,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"initQuiz":TDV.Tour.Script.initQuiz,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlays":TDV.Tour.Script.getOverlays,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"disableVR":TDV.Tour.Script.disableVR,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"init":TDV.Tour.Script.init,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showWindow":TDV.Tour.Script.showWindow,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"enableVR":TDV.Tour.Script.enableVR,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"mixObject":TDV.Tour.Script.mixObject,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getKey":TDV.Tour.Script.getKey,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"existsKey":TDV.Tour.Script.existsKey,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"historyGoForward":TDV.Tour.Script.historyGoForward,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizStart":TDV.Tour.Script.quizStart,"unregisterKey":TDV.Tour.Script.unregisterKey,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"historyGoBack":TDV.Tour.Script.historyGoBack,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizFinish":TDV.Tour.Script.quizFinish,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"createTween":TDV.Tour.Script.createTween,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"translate":TDV.Tour.Script.translate,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setValue":TDV.Tour.Script.setValue,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"registerKey":TDV.Tour.Script.registerKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex},"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","hash": "8a53395e00782d440f2f126a28b09a7d805e8c8d695574108b8a03403bd6ef9e", "definitions": [{"horizontalAlign":"center","class":"Container","overflow":"hidden","minHeight":20,"gap":4,"minWidth":392,"scrollBarMargin":2,"propagateClick":false,"id":"Container_52EFFDBA_5F1E_E744_41A4_790C8B877FA2","data":{"name":"Container6558"},"verticalAlign":"middle","backgroundOpacity":0,"width":392,"children":["this.IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C","this.IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818","this.IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C","this.IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491","this.Container_52EFFDBA_5F1E_E744_41C3_F77D1A22E975","this.IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C","this.IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9","this.IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236","this.IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320"],"scrollBarColor":"#000000","height":"100%","layout":"horizontal"},{"thumbnailUrl":"media/panorama_CAC681D5_C01F_DD1E_41E3_1846ED6B02E8_t.jpg","label":trans('panorama_CAC681D5_C01F_DD1E_41E3_1846ED6B02E8.label'),"vfov":180,"hfovMin":"150%","hfovMax":130,"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_CAC681D5_C01F_DD1E_41E3_1846ED6B02E8_t.jpg","cube":{"class":"ImageResource","levels":[{"colCount":18,"width":9216,"url":"media/panorama_CAC681D5_C01F_DD1E_41E3_1846ED6B02E8_0/{face}/0/{row}_{column}.jpg","rowCount":3,"class":"TiledImageResourceLevel","tags":"ondemand","height":1536},{"colCount":12,"width":6144,"url":"media/panorama_CAC681D5_C01F_DD1E_41E3_1846ED6B02E8_0/{face}/1/{row}_{column}.jpg","rowCount":2,"class":"TiledImageResourceLevel","tags":"ondemand","height":1024},{"colCount":6,"width":3072,"url":"media/panorama_CAC681D5_C01F_DD1E_41E3_1846ED6B02E8_0/{face}/2/{row}_{column}.jpg","rowCount":1,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"height":512}]},"class":"CubicPanoramaFrame"}],"hfov":360,"id":"panorama_CAC681D5_C01F_DD1E_41E3_1846ED6B02E8","data":{"label":"A360_HaiPhong"}},{"class":"PanoramaCamera","initialSequence":"this.sequence_CAEFE8B4_C01F_CB1D_41D5_859294B61F21","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true,"id":"panorama_CAC681D5_C01F_DD1E_41E3_1846ED6B02E8_camera"},{"items":[{"camera":"this.panorama_CBE8E74B_C01F_C50A_41D9_3372D70CF0FA_camera","media":"this.panorama_CBE8E74B_C01F_C50A_41D9_3372D70CF0FA","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_CAC681D5_C01F_DD1E_41E3_1846ED6B02E8_camera","media":"this.panorama_CAC681D5_C01F_DD1E_41E3_1846ED6B02E8","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList","id":"mainPlayList"},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4","data":{"name":"Button6565"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4_pressed.png","tabIndex":0,"transparencyActive":true,"mode":"toggle","iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4.png","backgroundOpacity":0,"width":40,"height":40},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9","data":{"name":"Button6568"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9_pressed.png","tabIndex":0,"transparencyActive":true,"iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9.png","backgroundOpacity":0,"width":40,"height":40,"rollOverIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9_rollover.png"},{"subtitlesFontSize":"3vmin","subtitlesFontColor":"#FFFFFF","minHeight":50,"minWidth":100,"vrPointerSelectionTime":2000,"firstTransitionDuration":0,"left":0,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"progressBottom":1,"playbackBarHeadShadowBlurRadius":3,"vrPointerColor":"#FFFFFF","playbackBarLeft":0,"playbackBarBorderColor":"#AAAAAA","vrThumbstickRotationStep":20,"playbackBarProgressBackgroundColorRatios":[0,1],"playbackBarHeadHeight":30,"playbackBarBorderRadius":4,"progressBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333333","progressHeight":20,"playbackBarProgressBorderColor":"#000000","progressRight":10,"playbackBarHeadShadow":true,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"progressBorderSize":2,"subtitlesBackgroundOpacity":0.2,"vrPointerSelectionColor":"#FF6600","progressBarBorderRadius":4,"subtitlesFontFamily":"Arial","progressBarBackgroundColorRatios":[0,1],"toolTipPaddingLeft":6,"progressBarBorderColor":"#000000","progressBarBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":10,"playbackBarHeadBorderColor":"#000000","toolTipBorderColor":"#767676","propagateClick":false,"subtitlesTextShadowOpacity":1,"toolTipFontColor":"#606060","toolTipTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","id":"MainViewer","playbackBarBorderSize":2,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeight":20,"toolTipPaddingRight":6,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarProgressBorderRadius":0,"progressBorderColor":"#AAAAAA","playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesTop":0,"playbackBarRight":0,"progressBorderRadius":4,"progressBarBackgroundColor":["#222222","#444444"],"playbackBarBackgroundOpacity":1,"toolTipFontFamily":"Arial","playbackBarHeadShadowOpacity":0.7,"top":0,"subtitlesBottom":50,"width":"100%","progressLeft":10,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"class":"ViewerArea","subtitlesTextShadowColor":"#000000","height":"100%","toolTipPaddingBottom":4,"toolTipPaddingTop":4},{"thumbnailUrl":"media/panorama_CBE8E74B_C01F_C50A_41D9_3372D70CF0FA_t.jpg","label":trans('panorama_CBE8E74B_C01F_C50A_41D9_3372D70CF0FA.label'),"vfov":180,"hfovMin":"150%","hfovMax":130,"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_CBE8E74B_C01F_C50A_41D9_3372D70CF0FA_t.jpg","cube":{"class":"ImageResource","levels":[{"colCount":18,"width":9216,"url":"media/panorama_CBE8E74B_C01F_C50A_41D9_3372D70CF0FA_0/{face}/0/{row}_{column}.jpg","rowCount":3,"class":"TiledImageResourceLevel","tags":"ondemand","height":1536},{"colCount":12,"width":6144,"url":"media/panorama_CBE8E74B_C01F_C50A_41D9_3372D70CF0FA_0/{face}/1/{row}_{column}.jpg","rowCount":2,"class":"TiledImageResourceLevel","tags":"ondemand","height":1024},{"colCount":6,"width":3072,"url":"media/panorama_CBE8E74B_C01F_C50A_41D9_3372D70CF0FA_0/{face}/2/{row}_{column}.jpg","rowCount":1,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"height":512}]},"class":"CubicPanoramaFrame"}],"hfov":360,"id":"panorama_CBE8E74B_C01F_C50A_41D9_3372D70CF0FA","data":{"label":"A360_CL"}},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C","data":{"name":"Button6561"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C_pressed.png","tabIndex":0,"transparencyActive":true,"iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C.png","backgroundOpacity":0,"width":40,"height":40,"rollOverIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C_rollover.png"},{"touchControlMode":"drag_rotation","buttonZoomIn":"this.IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320","mouseControlMode":"drag_rotation","buttonZoomOut":"this.IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C","buttonPause":"this.IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4","buttonRestart":"this.IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818","displayPlaybackBar":true,"buttonMoveRight":"this.IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C","buttonPlayRight":"this.IconButton_52EFFDBA_5F1E_E744_41D1_3BFDF2C580F9","buttonMoveDown":"this.IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0","class":"PanoramaPlayer","arrowKeysAction":"translate","buttonMoveLeft":"this.IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491","viewerArea":"this.MainViewer","buttonMoveUp":"this.IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236","buttonPlayLeft":"this.IconButton_52EFFDBA_5F1E_E744_41C8_0716A5EF571C","id":"MainViewerPanoramaPlayer","aaEnabled":true},{"horizontalAlign":"center","class":"Container","overflow":"hidden","minHeight":20,"gap":4,"minWidth":20,"scrollBarMargin":2,"propagateClick":false,"id":"Container_52EFFDBA_5F1E_E744_41C3_F77D1A22E975","data":{"name":"Container6563"},"verticalAlign":"middle","backgroundOpacity":0,"width":40,"children":["this.IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236","this.IconButton_52EFFDBA_5F1E_E744_41C7_B9851D2BBED4","this.IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0"],"scrollBarColor":"#000000","height":"100%","layout":"vertical"},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236","data":{"name":"Button6564"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236_pressed.png","tabIndex":0,"transparencyActive":true,"iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236.png","backgroundOpacity":0,"width":40,"height":40,"rollOverIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41BA_441B2FBE0236_rollover.png"},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491","data":{"name":"Button6562"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491_pressed.png","tabIndex":0,"transparencyActive":true,"iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491.png","backgroundOpacity":0,"width":40,"height":40,"rollOverIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41B2_0F85303B4491_rollover.png"},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C","data":{"name":"Button6559"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C_pressed.png","tabIndex":0,"transparencyActive":true,"iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C.png","backgroundOpacity":0,"width":40,"height":40,"rollOverIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41B2_8B164A9C987C_rollover.png"},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818","data":{"name":"Button6560"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818_pressed.png","tabIndex":0,"transparencyActive":true,"iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818.png","backgroundOpacity":0,"width":40,"height":40,"rollOverIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41D6_4079C1212818_rollover.png"},{"class":"PanoramaCamera","initialSequence":"this.sequence_CAEB58B1_C01F_CB17_41DB_D926B49B94D7","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true,"id":"panorama_CBE8E74B_C01F_C50A_41D9_3372D70CF0FA_camera"},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236","data":{"name":"Button6569"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236_pressed.png","tabIndex":0,"transparencyActive":true,"mode":"toggle","iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41C3_9571AC923236.png","backgroundOpacity":0,"width":40,"height":40},{"horizontalAlign":"center","class":"Container","overflow":"scroll","minHeight":1,"gap":10,"minWidth":1,"propagateClick":false,"scrollBarMargin":2,"id":"Container_CCCA0454_C011_DB1D_41C9_C069B390BBEA","left":"0%","data":{"name":"Container44746"},"verticalAlign":"middle","backgroundOpacity":0,"bottom":"0%","width":"100%","height":142,"children":["this.Container_52EFFDBA_5F1E_E744_41A4_790C8B877FA2"],"scrollBarColor":"#000000","layout":"horizontal"},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0","data":{"name":"Button6566"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0_pressed.png","tabIndex":0,"transparencyActive":true,"iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0.png","backgroundOpacity":0,"width":40,"height":40,"rollOverIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41CB_F6879A3461A0_rollover.png"},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C","data":{"name":"Button6567"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C_pressed.png","tabIndex":0,"transparencyActive":true,"iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C.png","backgroundOpacity":0,"width":40,"height":40,"rollOverIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_41C6_388165D2943C_rollover.png"},{"class":"IconButton","horizontalAlign":"center","minHeight":0,"minWidth":0,"propagateClick":false,"id":"IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320","data":{"name":"Button6570"},"verticalAlign":"middle","pressedIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320_pressed.png","tabIndex":0,"transparencyActive":true,"iconURL":"skin/IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320.png","backgroundOpacity":0,"width":40,"height":40,"rollOverIconURL":"skin/IconButton_52EFFDBA_5F1E_E744_4195_E83334EB0320_rollover.png"},{"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_CAEFE8B4_C01F_CB1D_41D5_859294B61F21"},{"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_CAEB58B1_C01F_CB17_41DB_D926B49B94D7"}],"backgroundColorRatios":[0],"width":"100%","scrollBarColor":"#000000","height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.1.js.map
})();
//Generated with v2024.0.1, Tue May 28 2024