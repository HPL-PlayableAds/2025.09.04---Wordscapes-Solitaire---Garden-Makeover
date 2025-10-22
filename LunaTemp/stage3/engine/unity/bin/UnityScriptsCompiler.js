if ( TRACE ) { TRACE( JSON.parse( '["AnswerBox#init","AnswerBox#OnDroppedCard","AnswerBox#ReturnCardToOriginalParent","AnswerManager#init","AnswerManager#Awake","AnswerManager#InitialStart","AnswerManager#InitialSequence","AnswerManager#SetupAnswerBoxes","AnswerManager#CheckForFilledBoxes","AnswerManager#CheckToShowHint","AnswerManager#WordCompletionSequence","AnswerManager#GameCompletedSequence","AnswerManager#CheckforEndCard","AnswerManager#OnClearPressed","AnswerManager#OnSubmitPressed","AnswerManager#OnHintPressed","AnswerManager#CheckIfEmpty","AudioLibrary#init","AudioLibrary#Initialize","AudioLibrary#TryGetClip","AudioLibrary.ClipEntry#getDefaultValue","AudioLibrary.ClipEntry#ctor","AudioLibrary.ClipEntry#getHashCode","AudioLibrary.ClipEntry#equals","AudioLibrary.ClipEntry#$clone","CardRow#init","CardRow#StartGame","CardRow#GameStartSequence","CardRow#RemoveLastCard","CardRow#RemoveSequence","CardRow#ShowCardHint","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","DraggableCard#Letter#get","DraggableCard#init","DraggableCard#Awake","DraggableCard#OnPointerClick","DraggableCard#FlipOverCard","DraggableCard#FlipSequence","DraggableCard#ReturnToOriginal","GameManager#init","GameManager#Awake","GameManager#Start","GameManager#Update","GameManager#OnCTAClicked","GameManager#LoseLife","GameManager#GameOverSequence","GameManager#StartGame","GameManager#StartGameSequence","GameManager#CountdownCheck","UIFader#IsVisible#get","UIFader#init","UIFader#Awake","UIFader#Hide","UIFader#Show","UIFader#FadeIn","UIFader#FadeOut","UIFader#Flicker","UIFader#FadeSequence","UIFader#FlickerSequence","UIFader#OnDestroy","UIPopUp#rectTransform#get","UIPopUp#IsHidden#get","UIPopUp#CanvasGroup#get","UIPopUp#init","UIPopUp#Awake","UIPopUp#SetOriginalPosition","UIPopUp#SetOriginalScale","UIPopUp#ResetPosition","UIPopUp#ResetScale","UIPopUp#Hide","UIPopUp#Show","UIPopUp#SlideIn","UIPopUp#SlideOut","UIPopUp#ScaleUp","UIPopUp#PopUp","UIPopUp#Minimize","UIPopUp#SlideInSequence","UIPopUp#SlideOutSequence","UIPopUp#ScaleUpSequence","UIPopUp#PopUpSequence","UIPopUp#MinimizeSequence","UIPopUp#FadeOutSequence","UIPopUp#OnDestroy","AudioManager#init","AudioManager#Awake","AudioManager#PlaySFX","AudioManager#PlayMusic","AudioManager#StopMusic$1","AudioManager#StopMusic","AudioManager#SetMusicVolume","AudioManager#SetSFXVolume","AudioManager#ReturnToPoolWhenDone","AudioManager#CrossfadeMusic"]' ) ); }
/**
 * @version 1.0.9412.32065
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AnswerBox start.*/
    Bridge.define("AnswerBox", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            correctLetter: null,
            containsCorrectLetter: false,
            draggableObjectChild: null,
            hasChildInbound: false,
            validPlacementArea: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AnswerBox#init", this ); }

                this.hasChildInbound = false;
                this.validPlacementArea = false;
            }
        },
        methods: {
            /*AnswerBox.OnDroppedCard start.*/
            OnDroppedCard: function (droppedObject) {
if ( TRACE ) { TRACE( "AnswerBox#OnDroppedCard", this ); }

                if (this.validPlacementArea) {
                    //GameObject droppedObject = eventData.pointerDrag;
                    var draggableItem = droppedObject.GetComponent(DraggableCard);

                    if (!draggableItem.canBeDragged) {
                        return;
                    }

                    //Old Code for Checking Fpr right or wrong (Checks as soon as tile is placed)
                    //if(draggableItem.Letter != correctLetter)
                    //{
                    //    Debug.Log("WRONG LETTER");
                    //    AudioManager.Instance.PlaySFX("Incorrect");
                    //    GameManager.Instance.LoseLife();
                    //    return;
                    //}
                    //else
                    //{

                    //    AudioManager.Instance.PlaySFX("Place");
                    //    draggableItem.parentAfterDrag = transform;
                    //    Debug.Log("CORRECT LETTER");
                    //    draggableItem.canBeDragged = false;
                    //    draggableItem.isInAnswerBox = true;
                    //    draggableItem.transform.SetParent(draggableItem.parentAfterDrag);
                    //    containsCorrectLetter = true;

                    //    if (draggableItem.GetComponent<Animator>())
                    //    {
                    //        draggableItem.GetComponent<Animator>().SetTrigger("HidingHint");
                    //    }

                    //    AnswerManager.Instance.amountofCorrectWords++;
                    //    AnswerManager.Instance.CheckforEndCard();
                    //    AnswerManager.Instance.CheckForFilledBoxes();
                    //}


                    AudioManager.Instance.PlaySFX("Place");
                    if (!draggableItem.GetComponent(UnityEngine.Animator).isActiveAndEnabled) {
                        draggableItem.GetComponent(UnityEngine.Animator).enabled = true;
                    }
                    if (draggableItem.GetComponent(UnityEngine.Animator).GetBool$1("ShowingHint") === true) {
                        draggableItem.GetComponent(UnityEngine.Animator).SetTrigger$1("HidingHint");
                    }

                    draggableItem.parentAfterDrag = this.transform;
                    draggableItem.canBeDragged = false;
                    draggableItem.isInAnswerBox = true;
                    draggableItem.transform.SetParent(draggableItem.parentAfterDrag);

                    this.draggableObjectChild = draggableItem;

                    if (!Bridge.referenceEquals(draggableItem.Letter, this.correctLetter)) {
                        this.containsCorrectLetter = false;
                    } else {
                        this.containsCorrectLetter = true;
                        draggableItem.GetComponent(UnityEngine.Animator).SetBool$1("IsCorrectCard", true);
                        AnswerManager.Instance.CheckToShowHint();
                    }
                }
            },
            /*AnswerBox.OnDroppedCard end.*/

            /*AnswerBox.ReturnCardToOriginalParent start.*/
            ReturnCardToOriginalParent: function () {
if ( TRACE ) { TRACE( "AnswerBox#ReturnCardToOriginalParent", this ); }

                this.containsCorrectLetter = false;
                this.draggableObjectChild.ReturnToOriginal();
            },
            /*AnswerBox.ReturnCardToOriginalParent end.*/


        }
    });
    /*AnswerBox end.*/

    /*AnswerManager start.*/
    Bridge.define("AnswerManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            _iteration: 0,
            wordList: null,
            letterToSolve: null,
            charList: null,
            hints: null,
            cardRows: null,
            answerBoxes: null,
            bgs: null,
            uiBottons: null,
            quizzesDone: 0,
            currentWordIndex: 0,
            handOnSubmit: null,
            textPopUp: null,
            letterToCheck: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AnswerManager#init", this ); }

                this._iteration = 0;
                this.wordList = new (System.Collections.Generic.List$1(System.String)).ctor();
                this.charList = new (System.Collections.Generic.List$1(System.Char)).ctor();
                this.hints = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.cardRows = new (System.Collections.Generic.List$1(CardRow)).ctor();
                this.quizzesDone = 0;
                this.currentWordIndex = 0;
            }
        },
        methods: {
            /*AnswerManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AnswerManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(AnswerManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(AnswerManager.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                AnswerManager.Instance = this;
            },
            /*AnswerManager.Awake end.*/

            /*AnswerManager.InitialStart start.*/
            InitialStart: function () {
if ( TRACE ) { TRACE( "AnswerManager#InitialStart", this ); }

                this.StartCoroutine$1(this.InitialSequence());
            },
            /*AnswerManager.InitialStart end.*/

            /*AnswerManager.InitialSequence start.*/
            InitialSequence: function () {
if ( TRACE ) { TRACE( "AnswerManager#InitialSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.SetupAnswerBoxes(this.currentWordIndex);

                                        for (var i = 0; i < this.cardRows.Count; i = (i + 1) | 0) {
                                            this.cardRows.getItem(i).StartGame();
                                        }

                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AnswerManager.InitialSequence end.*/

            /*AnswerManager.SetupAnswerBoxes start.*/
            SetupAnswerBoxes: function (index) {
if ( TRACE ) { TRACE( "AnswerManager#SetupAnswerBoxes", this ); }

                var $t;
                if (this.quizzesDone >= 3) {
                    this.answerBoxes[3].validPlacementArea = false;
                }

                if (index < this.wordList.Count) {
                    this.letterToSolve = this.wordList.getItem(index);
                }

                $t = Bridge.getEnumerator(this.letterToSolve);
                try {
                    while ($t.moveNext()) {
                        var c = $t.Current;
                        this.charList.add(c);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                for (var i = 0; i < System.Linq.Enumerable.from(this.letterToSolve, System.Char).count(); i = (i + 1) | 0) {
                    this.answerBoxes[i].validPlacementArea = true;
                    this.answerBoxes[i].correctLetter = String.fromCharCode(this.charList.getItem(i));
                    this.answerBoxes[i].containsCorrectLetter = false;
                    //answerBoxes[i].GetComponent<UIPopUp>().PopUp();
                }

                //answerBoxes[0].GetComponent<Animator>().SetTrigger("ShowingHint");
            },
            /*AnswerManager.SetupAnswerBoxes end.*/

            /*AnswerManager.CheckForFilledBoxes start.*/
            CheckForFilledBoxes: function () {
if ( TRACE ) { TRACE( "AnswerManager#CheckForFilledBoxes", this ); }

                for (var i = 0; i < this.answerBoxes.length; i = (i + 1) | 0) {
                    if (!this.answerBoxes[i].containsCorrectLetter) {
                        AudioManager.Instance.PlaySFX("Incorrect");
                        GameManager.Instance.LoseLife();
                        return;
                    }
                }
                AudioManager.Instance.PlaySFX("Correct");
                UnityEngine.Debug.Log$1("Word Complete");
                this.StartCoroutine$1(this.WordCompletionSequence());
            },
            /*AnswerManager.CheckForFilledBoxes end.*/

            /*AnswerManager.CheckToShowHint start.*/
            CheckToShowHint: function () {
if ( TRACE ) { TRACE( "AnswerManager#CheckToShowHint", this ); }

                for (var i = 0; i < this.answerBoxes.length; i = (i + 1) | 0) {
                    if (this.answerBoxes[i].transform.childCount === 0) {
                        return;
                    }
                }

                if (this.quizzesDone <= 0) {
                    this.handOnSubmit.SetActive(true);
                }
            },
            /*AnswerManager.CheckToShowHint end.*/

            /*AnswerManager.WordCompletionSequence start.*/
            WordCompletionSequence: function () {
if ( TRACE ) { TRACE( "AnswerManager#WordCompletionSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.currentWordIndex = (this.currentWordIndex + 1) | 0;
                                        this.quizzesDone = (this.quizzesDone + 1) | 0;
                                        this.charList.clear();

                                        this.hints.getItem(((this.currentWordIndex - 1) | 0)).GetComponent(UnityEngine.Animator).SetTrigger$1("Completed");

                                        for (var i = 0; i < this.uiBottons.length; i = (i + 1) | 0) {
                                            this.uiBottons[i].interactable = false;
                                        }

                                        for (var i1 = 0; i1 < this.cardRows.Count; i1 = (i1 + 1) | 0) {
                                            this.cardRows.getItem(i1).RemoveLastCard();
                                        }

                                        for (var i2 = 0; i2 < this.answerBoxes.length; i2 = (i2 + 1) | 0) {
                                            if (this.answerBoxes[i2].transform.childCount !== 0) {
                                                this.answerBoxes[i2].hasChildInbound = false;
                                                this.answerBoxes[i2].validPlacementArea = false;
                                            }
                                        }

                                        if (this.currentWordIndex < this.bgs.length && this.bgs.length > 2) {
                                            this.bgs[((this.currentWordIndex - 1) | 0)].FadeOut();
                                            this.bgs[this.currentWordIndex].FadeIn();
                                        } else if (this.quizzesDone >= 4) {
                                            this.bgs[0].FadeOut();
                                            this.bgs[1].FadeIn();
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.quizzesDone >= 4) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    GameManager.Instance.gameplayCanvas.FadeOut();
                                        $enumerator.current = this.StartCoroutine$1(this.GameCompletedSequence());
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    if (this.currentWordIndex < this.hints.Count) {
                                            DG.Tweening.DOTweenModuleUI.DOFade$2(this.hints.getItem(this.currentWordIndex).GetComponent(UnityEngine.UI.Image), 1.0, 0.5);
                                        }

                                        this.SetupAnswerBoxes(this.currentWordIndex);

                                        for (var i3 = 0; i3 < this.uiBottons.length; i3 = (i3 + 1) | 0) {
                                            this.uiBottons[i3].interactable = true;
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AnswerManager.WordCompletionSequence end.*/

            /*AnswerManager.GameCompletedSequence start.*/
            GameCompletedSequence: function () {
if ( TRACE ) { TRACE( "AnswerManager#GameCompletedSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    AudioManager.Instance.PlaySFX("BigWin");
                                        this.textPopUp.PopUp();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    GameManager.Instance.GameOverSequence();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AnswerManager.GameCompletedSequence end.*/

            /*AnswerManager.CheckforEndCard start.*/
            CheckforEndCard: function () {
if ( TRACE ) { TRACE( "AnswerManager#CheckforEndCard", this ); }

                if (this._iteration === 1 && this.quizzesDone >= 2) {
                    GameManager.Instance.gameplayCanvas.FadeOut();
                    GameManager.Instance.GameOverSequence();
                }
            },
            /*AnswerManager.CheckforEndCard end.*/

            /*AnswerManager.OnClearPressed start.*/
            OnClearPressed: function () {
if ( TRACE ) { TRACE( "AnswerManager#OnClearPressed", this ); }

                AudioManager.Instance.PlaySFX("Place");
                this.handOnSubmit.SetActive(false);
                for (var i = 0; i < this.answerBoxes.length; i = (i + 1) | 0) {
                    if (this.answerBoxes[i].transform.childCount !== 0) {
                        this.answerBoxes[i].hasChildInbound = false;
                        this.answerBoxes[i].ReturnCardToOriginalParent();
                    }
                }
            },
            /*AnswerManager.OnClearPressed end.*/

            /*AnswerManager.OnSubmitPressed start.*/
            OnSubmitPressed: function () {
if ( TRACE ) { TRACE( "AnswerManager#OnSubmitPressed", this ); }

                this.handOnSubmit.SetActive(false);
                this.CheckForFilledBoxes();
                this.CheckforEndCard();
            },
            /*AnswerManager.OnSubmitPressed end.*/

            /*AnswerManager.OnHintPressed start.*/
            OnHintPressed: function () {
if ( TRACE ) { TRACE( "AnswerManager#OnHintPressed", this ); }

                AudioManager.Instance.PlaySFX("Place");
                for (var i = 0; i < this.answerBoxes.length; i = (i + 1) | 0) {
                    if (this.answerBoxes[i].transform.childCount === 0) {
                        this.letterToCheck = this.answerBoxes[i].correctLetter;
                        UnityEngine.Debug.Log$1(this.letterToCheck);
                        break;
                    }
                }

                for (var i1 = 0; i1 < this.cardRows.Count; i1 = (i1 + 1) | 0) {
                    this.cardRows.getItem(i1).ShowCardHint(this.letterToCheck);
                }
            },
            /*AnswerManager.OnHintPressed end.*/

            /*AnswerManager.CheckIfEmpty start.*/
            CheckIfEmpty: function () {
if ( TRACE ) { TRACE( "AnswerManager#CheckIfEmpty", this ); }

                for (var i = 0; i < this.answerBoxes.length; i = (i + 1) | 0) {
                    if (this.answerBoxes[i].transform.childCount === 0 && !this.answerBoxes[i].hasChildInbound && this.answerBoxes[i].validPlacementArea) {
                        UnityEngine.Debug.Log$1("Something Here");
                        this.answerBoxes[i].hasChildInbound = true;
                        return this.answerBoxes[i].transform;
                    }
                }

                UnityEngine.Debug.Log$1("Nothing Here");
                return null;
            },
            /*AnswerManager.CheckIfEmpty end.*/


        }
    });
    /*AnswerManager end.*/

    /*AudioChannel start.*/
    Bridge.define("AudioChannel", {
        $kind: 6,
        statics: {
            fields: {
                Music: 0,
                SFX: 1
            }
        }
    });
    /*AudioChannel end.*/

    /*AudioLibrary start.*/
    Bridge.define("AudioLibrary", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            clips: null,
            lookup: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AudioLibrary#init", this ); }

                this.clips = new (System.Collections.Generic.List$1(AudioLibrary.ClipEntry)).ctor();
            }
        },
        methods: {
            /*AudioLibrary.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "AudioLibrary#Initialize", this ); }

                var $t;
                this.lookup = new (System.Collections.Generic.Dictionary$2(System.String,AudioLibrary.ClipEntry)).ctor();
                $t = Bridge.getEnumerator(this.clips);
                try {
                    while ($t.moveNext()) {
                        var entry = $t.Current.$clone();
                        if (!this.lookup.containsKey(entry.key)) {
                            this.lookup.add(entry.key, entry.$clone());
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*AudioLibrary.Initialize end.*/

            /*AudioLibrary.TryGetClip start.*/
            TryGetClip: function (key, entry) {
if ( TRACE ) { TRACE( "AudioLibrary#TryGetClip", this ); }

                if (this.lookup == null) {
                    this.Initialize();
                }
                return this.lookup.tryGetValue(key, entry);
            },
            /*AudioLibrary.TryGetClip end.*/


        }
    });
    /*AudioLibrary end.*/

    /*AudioLibrary+ClipEntry start.*/
    Bridge.define("AudioLibrary.ClipEntry", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "AudioLibrary.ClipEntry#getDefaultValue", this ); }
 return new AudioLibrary.ClipEntry(); }
            }
        },
        fields: {
            key: null,
            channel: 0,
            clip: null,
            volume: 0,
            loop: false
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "AudioLibrary.ClipEntry#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "AudioLibrary.ClipEntry#getHashCode", this ); }

                var h = Bridge.addHash([3806190337, this.key, this.channel, this.clip, this.volume, this.loop]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "AudioLibrary.ClipEntry#equals", this ); }

                if (!Bridge.is(o, AudioLibrary.ClipEntry)) {
                    return false;
                }
                return Bridge.equals(this.key, o.key) && Bridge.equals(this.channel, o.channel) && Bridge.equals(this.clip, o.clip) && Bridge.equals(this.volume, o.volume) && Bridge.equals(this.loop, o.loop);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "AudioLibrary.ClipEntry#$clone", this ); }

                var s = to || new AudioLibrary.ClipEntry();
                s.key = this.key;
                s.channel = this.channel;
                s.clip = this.clip;
                s.volume = this.volume;
                s.loop = this.loop;
                return s;
            }
        }
    });
    /*AudioLibrary+ClipEntry end.*/

    /*Core.Services.IAudioService start.*/
    Bridge.define("Core.Services.IAudioService", {
        $kind: 3
    });
    /*Core.Services.IAudioService end.*/

    /*CardRow start.*/
    Bridge.define("CardRow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cards: null,
            cardHolder: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CardRow#init", this ); }

                this.cards = new (System.Collections.Generic.List$1(DraggableCard)).ctor();
                this.cardHolder = new (System.Collections.Generic.List$1(UnityEngine.UI.HorizontalLayoutGroup)).ctor();
            }
        },
        methods: {
            /*CardRow.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "CardRow#StartGame", this ); }

                this.StartCoroutine$1(this.GameStartSequence());
            },
            /*CardRow.StartGame end.*/

            /*CardRow.GameStartSequence start.*/
            GameStartSequence: function () {
if ( TRACE ) { TRACE( "CardRow#GameStartSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    card,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $t = Bridge.getEnumerator(this.cards);
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ($t.moveNext()) {
                                            card = $t.Current;
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 4;
                                    continue;
                                }
                                case 2: {
                                    AudioManager.Instance.PlaySFX("Woosh");
                                        card.gameObject.SetActive(true);
                                        card.GetComponent(UIPopUp).SlideIn();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 1;
                                    continue;
                                }
                                case 4: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    for (var i = 0; i < this.cardHolder.Count; i = (i + 1) | 0) {
                                            this.cardHolder.getItem(i).enabled = true;
                                        }
                                        System.Linq.Enumerable.from(this.cards, DraggableCard).last().FlipOverCard();

                                        //cards.Last().image.raycastTarget = false;

                                        //cards.Last().transform.SetParent(transform.root);
                                        //cards.Last().transform.SetAsLastSibling();
                                        //cards.Last().GetComponent<RectTransform>().DOMove(playableCardArea.transform.position, 0.5f).OnComplete(() =>
                                        //{
                                        //    cards.Last().FlipOverCard();
                                        //    cards.Last().transform.SetParent(playableCardArea.transform);
                                        //    cards.Last().image.raycastTarget = true;
                                        //});

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CardRow.GameStartSequence end.*/

            /*CardRow.RemoveLastCard start.*/
            RemoveLastCard: function () {
if ( TRACE ) { TRACE( "CardRow#RemoveLastCard", this ); }

                if (System.Linq.Enumerable.from(this.cards, DraggableCard).last().isInAnswerBox) {
                    this.StartCoroutine$1(this.RemoveSequence());
                }
            },
            /*CardRow.RemoveLastCard end.*/

            /*CardRow.RemoveSequence start.*/
            RemoveSequence: function () {
if ( TRACE ) { TRACE( "CardRow#RemoveSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    card,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    card = System.Linq.Enumerable.from(this.cards, DraggableCard).last();
                                        this.cards.remove(System.Linq.Enumerable.from(this.cards, DraggableCard).last());

                                        if (this.cards.Count > 0) {
                                            System.Linq.Enumerable.from(this.cards, DraggableCard).last().FlipOverCard();
                                        }

                                        card.GetComponent(UIPopUp).Minimize();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.3);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.MonoBehaviour.Destroy(card.gameObject);

                                        //if (!GameManager.Instance.isGameOver)
                                        //{
                                        //    cards.Last().image.raycastTarget = false;

                                        //    cards.Last().transform.SetParent(transform.root);
                                        //    cards.Last().transform.SetAsLastSibling();
                                        //    cards.Last().GetComponent<RectTransform>().DOMove(playableCardArea.transform.position, 0.5f).OnComplete(() =>
                                        //    {      
                                        //        cards.Last().transform.SetParent(playableCardArea.transform);
                                        //        cards.Last().image.raycastTarget = true;
                                        //    });
                                        //}

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CardRow.RemoveSequence end.*/

            /*CardRow.ShowCardHint start.*/
            ShowCardHint: function (letterChecked) {
if ( TRACE ) { TRACE( "CardRow#ShowCardHint", this ); }

                if (Bridge.referenceEquals(System.Linq.Enumerable.from(this.cards, DraggableCard).last().Letter, letterChecked)) {
                    UnityEngine.Debug.Log$1("FOUND HINT AT LETTER " + (letterChecked || ""));
                    System.Linq.Enumerable.from(this.cards, DraggableCard).last().gameObject.GetComponent(UnityEngine.Animator).enabled = true;
                    System.Linq.Enumerable.from(this.cards, DraggableCard).last().gameObject.GetComponent(UnityEngine.Animator).SetBool$1("ShowingHint", true);
                } else {
                    UnityEngine.Debug.Log$1("NO Dice");
                }
            },
            /*CardRow.ShowCardHint end.*/


        }
    });
    /*CardRow end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DraggableCard start.*/
    Bridge.define("DraggableCard", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerClickHandler],
        fields: {
            canBeDragged: false,
            image: null,
            cardSprite: null,
            textObject: null,
            containedLetter: null,
            isInAnswerBox: false,
            parentAfterDrag: null,
            originalParent: null
        },
        props: {
            Letter: {
                get: function () {
if ( TRACE ) { TRACE( "DraggableCard#Letter#get", this ); }

                    return this.containedLetter;
                }
            }
        },
        alias: ["OnPointerClick", "UnityEngine$EventSystems$IPointerClickHandler$OnPointerClick"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DraggableCard#init", this ); }

                this.isInAnswerBox = false;
            }
        },
        methods: {
            /*DraggableCard.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DraggableCard#Awake", this ); }

                this.containedLetter = this.textObject.GetComponent(TMPro.TextMeshProUGUI).text;
            },
            /*DraggableCard.Awake end.*/

            /*DraggableCard.OnPointerClick start.*/
            OnPointerClick: function (eventData) {
if ( TRACE ) { TRACE( "DraggableCard#OnPointerClick", this ); }

                if (!this.canBeDragged) {
                    return;
                }

                if (!GameManager.Instance.hassGameStarted) {
                    GameManager.Instance.StartGame();
                }

                AudioManager.Instance.PlaySFX("Select");

                var foundEmptySlot = AnswerManager.Instance.CheckIfEmpty();
                if (UnityEngine.Component.op_Inequality(foundEmptySlot, null)) {
                    this.image.raycastTarget = false;
                    this.isInAnswerBox = true;

                    this.transform.SetParent(this.transform.root);
                    this.transform.SetAsLastSibling();
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.gameObject.GetComponent(UnityEngine.RectTransform), foundEmptySlot.position.$clone(), 0.5), Bridge.fn.bind(this, function () {
                        this.transform.SetParent(foundEmptySlot);
                        this.image.raycastTarget = true;

                        foundEmptySlot.gameObject.GetComponent(AnswerBox).OnDroppedCard(this.gameObject);
                    }));
                }
            },
            /*DraggableCard.OnPointerClick end.*/

            /*DraggableCard.FlipOverCard start.*/
            FlipOverCard: function () {
if ( TRACE ) { TRACE( "DraggableCard#FlipOverCard", this ); }

                this.StartCoroutine$1(this.FlipSequence());
            },
            /*DraggableCard.FlipOverCard end.*/

            /*DraggableCard.FlipSequence start.*/
            FlipSequence: function () {
if ( TRACE ) { TRACE( "DraggableCard#FlipSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (!GameManager.Instance.isGameOver) {
                                            AudioManager.Instance.PlaySFX("FlipCard");
                                        }

                                        DG.Tweening.ShortcutExtensions.DOScaleX(this.gameObject.GetComponent(UnityEngine.RectTransform), 0, 0.5);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.image.sprite = this.cardSprite;
                                        this.textObject.SetActive(true);
                                        DG.Tweening.ShortcutExtensions.DOScaleX(this.gameObject.GetComponent(UnityEngine.RectTransform), 1.0, 0.5);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.4);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    //if (this.gameObject.GetComponent<Animator>())
                                        //{
                                        //    this.gameObject.GetComponent<Animator>().enabled = true;
                                        //    this.gameObject.GetComponent<Animator>().SetTrigger("ShowingHint");
                                        //}

                                        this.canBeDragged = true;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*DraggableCard.FlipSequence end.*/

            /*DraggableCard.ReturnToOriginal start.*/
            ReturnToOriginal: function () {
if ( TRACE ) { TRACE( "DraggableCard#ReturnToOriginal", this ); }

                this.canBeDragged = true;
                this.isInAnswerBox = false;

                this.gameObject.GetComponent(UnityEngine.Animator).SetBool$1("IsCorrectCard", false);
                this.gameObject.GetComponent(UnityEngine.Animator).SetBool$1("ShowingHint", false);

                this.parentAfterDrag = this.originalParent;
                this.transform.SetParent(this.parentAfterDrag);
                this.image.raycastTarget = true;
            },
            /*DraggableCard.ReturnToOriginal end.*/


        }
    });
    /*DraggableCard end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            wordCounter: 0,
            maxWordCounter: 0,
            hearts: null,
            lossHeartSprite: null,
            lives: 0,
            endCard: null,
            startCard: null,
            gameplayCanvas: null,
            gameBlocker: null,
            failBG: null,
            textSprite: null,
            buttonSprite: null,
            lossTextSprite: null,
            buttonLossTextSprite: null,
            hassGameStarted: false,
            isGameOver: false,
            hintButton: null,
            isInteracting: false,
            idleTimer: 0,
            isHandActive: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.lives = 3;
                this.isInteracting = false;
                this.idleTimer = 2;
                this.isHandActive = false;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(GameManager.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                GameManager.Instance = this;
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                this.StartCoroutine$1(this.StartGameSequence());
            },
            /*GameManager.Start end.*/

            /*GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager#Update", this ); }

                this.CountdownCheck();
            },
            /*GameManager.Update end.*/

            /*GameManager.OnCTAClicked start.*/
            OnCTAClicked: function () {
if ( TRACE ) { TRACE( "GameManager#OnCTAClicked", this ); }

                Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/ph/app/wordscapes-solitaire/id6452119853", "https://play.google.com/store/apps/details?id=com.peoplefun.wordsolitaire&hl=en");
            },
            /*GameManager.OnCTAClicked end.*/

            /*GameManager.LoseLife start.*/
            LoseLife: function () {
if ( TRACE ) { TRACE( "GameManager#LoseLife", this ); }

                this.lives = (this.lives - 1) | 0;

                if (this.lives <= 0) {
                    this.lives = 0;
                    this.hearts[this.lives].GetComponent(UnityEngine.UI.Image).sprite = this.lossHeartSprite;

                    this.GameOverSequence(true);
                    UnityEngine.Debug.Log$1("YOU'RE DEAD. YOU LOSE.");
                    return;
                }

                this.hearts[this.lives].GetComponent(UnityEngine.UI.Image).sprite = this.lossHeartSprite;
            },
            /*GameManager.LoseLife end.*/

            /*GameManager.GameOverSequence start.*/
            GameOverSequence: function (failedOrNot) {
if ( TRACE ) { TRACE( "GameManager#GameOverSequence", this ); }

                if (failedOrNot === void 0) { failedOrNot = false; }
                this.isGameOver = true;
                if (failedOrNot) {
                    this.failBG.SetActive(true);
                    this.buttonSprite.sprite = this.buttonLossTextSprite;
                    this.textSprite.sprite = this.lossTextSprite;
                }
                this.OnCTAClicked();
                //gameplayCanvas.FadeOut();
                this.endCard.FadeIn();
            },
            /*GameManager.GameOverSequence end.*/

            /*GameManager.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "GameManager#StartGame", this ); }

                this.hassGameStarted = true;
                AudioManager.Instance.PlayMusic("BGM");
                AudioManager.Instance.PlaySFX("Select");
                this.startCard.FadeOut();
            },
            /*GameManager.StartGame end.*/

            /*GameManager.StartGameSequence start.*/
            StartGameSequence: function () {
if ( TRACE ) { TRACE( "GameManager#StartGameSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.gameplayCanvas.FadeIn();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    AnswerManager.Instance.InitialStart();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(4.0);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.gameBlocker.SetActive(false);
                                        this.startCard.FadeIn();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.StartGameSequence end.*/

            /*GameManager.CountdownCheck start.*/
            CountdownCheck: function () {
if ( TRACE ) { TRACE( "GameManager#CountdownCheck", this ); }

                if (!this.hassGameStarted) {
                    return;
                }

                // Detect screen touch or mouse click (for editor and mobile)
                this.isInteracting = UnityEngine.Input.touchCount > 0 || UnityEngine.Input.GetMouseButton(0);

                if (!this.isInteracting) {
                    this.idleTimer -= UnityEngine.Time.deltaTime;

                    // 5 seconds has passed (Enable Tutorial)
                    if (this.idleTimer <= 0) {
                        if (!this.isHandActive) {
                            this.isHandActive = true;
                            this.hintButton.GetComponent(UnityEngine.Animator).SetBool$1("isHintActivated", true);

                        }
                    }
                } else {
                    this.isHandActive = false;
                    this.hintButton.GetComponent(UnityEngine.Animator).SetBool$1("isHintActivated", false);
                    this.idleTimer = 2;
                }
            },
            /*GameManager.CountdownCheck end.*/


        }
    });
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*UIFader start.*/
    Bridge.define("UIFader", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hideOnAwake: false,
            disableOnHide: false,
            fadeInDuration: 0,
            fadeOutDuration: 0,
            flickerSpeed: 0,
            flickers: 0,
            fadeCoroutine: null,
            canvasGroup: null
        },
        props: {
            IsVisible: {
                get: function () {
if ( TRACE ) { TRACE( "UIFader#IsVisible#get", this ); }

                    return this.canvasGroup.alpha >= 1.0;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UIFader#init", this ); }

                this.hideOnAwake = true;
                this.disableOnHide = true;
                this.fadeInDuration = 0.5;
                this.fadeOutDuration = 0.5;
                this.flickerSpeed = 0.1;
                this.flickers = 3;
            }
        },
        methods: {
            /*UIFader.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UIFader#Awake", this ); }

                this.canvasGroup = this.GetComponent(UnityEngine.CanvasGroup);

                if (this.hideOnAwake) {
                    this.Hide();
                }
            },
            /*UIFader.Awake end.*/

            /*UIFader.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "UIFader#Hide", this ); }

                this.canvasGroup.alpha = 0;
                this.canvasGroup.interactable = false;
                if (this.disableOnHide) {
                    this.gameObject.SetActive(false);
                }
            },
            /*UIFader.Hide end.*/

            /*UIFader.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "UIFader#Show", this ); }

                this.gameObject.SetActive(true);
                this.canvasGroup.alpha = 1.0;
                this.canvasGroup.interactable = true;
            },
            /*UIFader.Show end.*/

            /*UIFader.FadeIn start.*/
            FadeIn: function (delay) {
if ( TRACE ) { TRACE( "UIFader#FadeIn", this ); }

                if (delay === void 0) { delay = 0.0; }
                if (this.fadeCoroutine != null) {
                    this.StopCoroutine$2(this.fadeCoroutine);
                }

                this.Show();
                this.canvasGroup.interactable = false;
                this.canvasGroup.alpha = 0;

                this.fadeCoroutine = this.StartCoroutine$1(this.FadeSequence(1.0, this.fadeInDuration, false, delay));
                return this.fadeCoroutine;
            },
            /*UIFader.FadeIn end.*/

            /*UIFader.FadeOut start.*/
            FadeOut: function (delay) {
if ( TRACE ) { TRACE( "UIFader#FadeOut", this ); }

                if (delay === void 0) { delay = 0.0; }
                if (this.fadeCoroutine != null) {
                    this.StopCoroutine$2(this.fadeCoroutine);
                }

                this.Show();

                this.fadeCoroutine = this.StartCoroutine$1(this.FadeSequence(0, this.fadeOutDuration, false, delay));
                return this.fadeCoroutine;
            },
            /*UIFader.FadeOut end.*/

            /*UIFader.Flicker start.*/
            Flicker: function () {
if ( TRACE ) { TRACE( "UIFader#Flicker", this ); }

                if (this.fadeCoroutine != null) {
                    this.StopCoroutine$2(this.fadeCoroutine);
                }

                this.canvasGroup.alpha = 0;

                this.fadeCoroutine = this.StartCoroutine$1(this.FlickerSequence());
                return this.fadeCoroutine;
            },
            /*UIFader.Flicker end.*/

            /*UIFader.FadeSequence start.*/
            FadeSequence: function (alpha, fadeDuration, isFlicker, startDelay) {
if ( TRACE ) { TRACE( "UIFader#FadeSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (isFlicker === void 0) { isFlicker = false; }
                                        if (startDelay === void 0) { startDelay = 0.0; }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(startDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.canvasGroup.interactable = false;

                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.DOTweenModuleUI.DOFade(this.canvasGroup, alpha, fadeDuration));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.canvasGroup.interactable = true;

                                        if (!isFlicker) {
                                            this.fadeCoroutine = null;
                                        }

                                        if (alpha <= 0) {
                                            this.Hide();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UIFader.FadeSequence end.*/

            /*UIFader.FlickerSequence start.*/
            FlickerSequence: function () {
if ( TRACE ) { TRACE( "UIFader#FlickerSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    i,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.Show();
                                        this.canvasGroup.alpha = 0;
                                        this.canvasGroup.interactable = false;

                                        i = 0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( i < this.flickers ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 6;
                                    continue;
                                }
                                case 2: {
                                    $enumerator.current = this.FadeSequence(1, this.flickerSpeed, true);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.FadeSequence(0, this.flickerSpeed, false);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    i = (i + 1) | 0;
                                    $step = 1;
                                    continue;
                                }
                                case 6: {
                                    this.canvasGroup.interactable = true;

                                        this.fadeCoroutine = null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UIFader.FlickerSequence end.*/

            /*UIFader.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "UIFader#OnDestroy", this ); }

                var $t;
                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                DG.Tweening.ShortcutExtensions.DOKill(this.canvasGroup);

                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        DG.Tweening.ShortcutExtensions.DOKill(child);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*UIFader.OnDestroy end.*/


        }
    });
    /*UIFader end.*/

    /*UIPopUp start.*/
    Bridge.define("UIPopUp", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hideOnAwake: false,
            hideAfterPopUp: false,
            destroyAfterHide: false,
            slideInOffset: null,
            popMultiplier: 0,
            appearDuration: 0,
            minimizeDuration: 0,
            fadeDuration: 0,
            showDuration: 0,
            canvasGroup: null,
            originalScale: null,
            originalPosition: null,
            activeCoroutine: null
        },
        props: {
            rectTransform: {
                get: function () {
if ( TRACE ) { TRACE( "UIPopUp#rectTransform#get", this ); }

                    return Bridge.as(this.transform, UnityEngine.RectTransform);
                }
            },
            IsHidden: {
                get: function () {
if ( TRACE ) { TRACE( "UIPopUp#IsHidden#get", this ); }

                    return this.CanvasGroup.alpha === 0 || !this.gameObject.activeSelf;
                }
            },
            CanvasGroup: {
                get: function () {
if ( TRACE ) { TRACE( "UIPopUp#CanvasGroup#get", this ); }

                    if (UnityEngine.MonoBehaviour.op_Equality(this.canvasGroup, null)) {
                        this.canvasGroup = this.GetComponent(UnityEngine.CanvasGroup);
                    }

                    return this.canvasGroup;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UIPopUp#init", this ); }

                this.slideInOffset = new UnityEngine.Vector2();
                this.originalScale = new UnityEngine.Vector2();
                this.originalPosition = new UnityEngine.Vector2();
                this.hideOnAwake = false;
                this.hideAfterPopUp = false;
                this.destroyAfterHide = false;
                this.slideInOffset = new pc.Vec2( 0, -100 );
                this.popMultiplier = 1.1;
                this.appearDuration = 0.15;
                this.minimizeDuration = 0.3;
                this.fadeDuration = 0.15;
                this.showDuration = 0.7;
            }
        },
        methods: {
            /*UIPopUp.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UIPopUp#Awake", this ); }

                this.canvasGroup = this.GetComponent(UnityEngine.CanvasGroup);
                this.SetOriginalScale();
                this.SetOriginalPosition();
                //canvasGroup.alpha = 0;

                if (this.hideOnAwake) {
                    this.Hide();
                }
            },
            /*UIPopUp.Awake end.*/

            /*UIPopUp.SetOriginalPosition start.*/
            SetOriginalPosition: function () {
if ( TRACE ) { TRACE( "UIPopUp#SetOriginalPosition", this ); }

                this.originalPosition = this.rectTransform.anchoredPosition.$clone();
            },
            /*UIPopUp.SetOriginalPosition end.*/

            /*UIPopUp.SetOriginalScale start.*/
            SetOriginalScale: function () {
if ( TRACE ) { TRACE( "UIPopUp#SetOriginalScale", this ); }

                this.originalScale = UnityEngine.Vector2.FromVector3(this.rectTransform.localScale.$clone());
            },
            /*UIPopUp.SetOriginalScale end.*/

            /*UIPopUp.ResetPosition start.*/
            ResetPosition: function () {
if ( TRACE ) { TRACE( "UIPopUp#ResetPosition", this ); }

                this.rectTransform.anchoredPosition = this.originalPosition.$clone();
            },
            /*UIPopUp.ResetPosition end.*/

            /*UIPopUp.ResetScale start.*/
            ResetScale: function () {
if ( TRACE ) { TRACE( "UIPopUp#ResetScale", this ); }

                this.rectTransform.localScale = UnityEngine.Vector3.FromVector2(this.originalScale.$clone());
            },
            /*UIPopUp.ResetScale end.*/

            /*UIPopUp.Hide start.*/
            Hide: function (fadeOut) {
if ( TRACE ) { TRACE( "UIPopUp#Hide", this ); }

                if (fadeOut === void 0) { fadeOut = false; }
                this.CanvasGroup.interactable = false;

                if (fadeOut) {
                    this.StartCoroutine$1(this.FadeOutSequence());
                } else {
                    this.CanvasGroup.alpha = 0;

                    if (this.destroyAfterHide) {
                        UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    } else {
                        this.gameObject.SetActive(false);
                    }
                }
            },
            /*UIPopUp.Hide end.*/

            /*UIPopUp.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "UIPopUp#Show", this ); }

                this.gameObject.SetActive(true);
                this.CanvasGroup.alpha = 1.0;
                this.CanvasGroup.interactable = true;
            },
            /*UIPopUp.Show end.*/

            /*UIPopUp.SlideIn start.*/
            SlideIn: function (doFade, durationMultiplier, minimizeAfter, ease) {
if ( TRACE ) { TRACE( "UIPopUp#SlideIn", this ); }

                if (doFade === void 0) { doFade = false; }
                if (durationMultiplier === void 0) { durationMultiplier = 1.0; }
                if (minimizeAfter === void 0) { minimizeAfter = false; }
                if (ease === void 0) { ease = 0; }
                if (this.activeCoroutine != null) {
                    this.StopCoroutine$2(this.activeCoroutine);
                }

                this.gameObject.SetActive(true);
                this.activeCoroutine = this.StartCoroutine$1(this.SlideInSequence(doFade, durationMultiplier, minimizeAfter, ease));

                return this.activeCoroutine;
            },
            /*UIPopUp.SlideIn end.*/

            /*UIPopUp.SlideOut start.*/
            SlideOut: function (doFade) {
if ( TRACE ) { TRACE( "UIPopUp#SlideOut", this ); }

                if (doFade === void 0) { doFade = false; }
                if (this.activeCoroutine != null) {
                    this.StopCoroutine$2(this.activeCoroutine);
                }

                this.gameObject.SetActive(true);
                this.activeCoroutine = this.StartCoroutine$1(this.SlideOutSequence(doFade));

                return this.activeCoroutine;
            },
            /*UIPopUp.SlideOut end.*/

            /*UIPopUp.ScaleUp start.*/
            ScaleUp: function (doFade, minimizeAfter, startingScale) {
if ( TRACE ) { TRACE( "UIPopUp#ScaleUp", this ); }

                if (doFade === void 0) { doFade = false; }
                if (minimizeAfter === void 0) { minimizeAfter = false; }
                if (startingScale === void 0) { startingScale = 0.0; }
                if (this.activeCoroutine != null) {
                    this.StopCoroutine$2(this.activeCoroutine);
                }

                this.Show();
                this.activeCoroutine = this.StartCoroutine$1(this.ScaleUpSequence(doFade, minimizeAfter));

                return this.activeCoroutine;
            },
            /*UIPopUp.ScaleUp end.*/

            /*UIPopUp.PopUp start.*/
            PopUp: function (doFade, minimizeAfter, startingScale) {
if ( TRACE ) { TRACE( "UIPopUp#PopUp", this ); }

                if (doFade === void 0) { doFade = false; }
                if (minimizeAfter === void 0) { minimizeAfter = false; }
                if (startingScale === void 0) { startingScale = 0.0; }
                if (this.activeCoroutine != null) {
                    this.StopCoroutine$2(this.activeCoroutine);
                }

                this.gameObject.SetActive(true);
                this.activeCoroutine = this.StartCoroutine$1(this.PopUpSequence(doFade, minimizeAfter));

                return this.activeCoroutine;
            },
            /*UIPopUp.PopUp end.*/

            /*UIPopUp.Minimize start.*/
            Minimize: function (pop, doFade) {
if ( TRACE ) { TRACE( "UIPopUp#Minimize", this ); }

                if (pop === void 0) { pop = true; }
                if (doFade === void 0) { doFade = false; }
                if (this.activeCoroutine != null) {
                    this.StopCoroutine$2(this.activeCoroutine);
                }

                this.gameObject.SetActive(true);
                this.activeCoroutine = this.StartCoroutine$1(this.MinimizeSequence(pop, doFade));

                return this.activeCoroutine;
            },
            /*UIPopUp.Minimize end.*/

            /*UIPopUp.SlideInSequence start.*/
            SlideInSequence: function (doFade, durationMultiplier, minimizeAfter, ease) {
if ( TRACE ) { TRACE( "UIPopUp#SlideInSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    sequence,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (doFade === void 0) { doFade = false; }
                                        if (durationMultiplier === void 0) { durationMultiplier = 1.0; }
                                        if (minimizeAfter === void 0) { minimizeAfter = false; }
                                        if (ease === void 0) { ease = 0; }
                                        this.rectTransform.anchoredPosition = this.rectTransform.anchoredPosition.$clone().add( this.slideInOffset.$clone() );

                                        this.rectTransform.localScale = UnityEngine.Vector3.FromVector2(this.originalScale.$clone());

                                        sequence = DG.Tweening.DOTween.Sequence();

                                        this.CanvasGroup.interactable = false;

                                        if (doFade) {
                                            this.CanvasGroup.alpha = 0;

                                            DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.DOTweenModuleUI.DOFade(this.CanvasGroup, 1, this.fadeDuration * durationMultiplier));
                                            DG.Tweening.TweenSettingsExtensions.Insert(sequence, 0, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.rectTransform, this.originalPosition.$clone(), this.appearDuration * durationMultiplier), ease));
                                        } else {
                                            this.CanvasGroup.alpha = 1.0;

                                            DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.rectTransform, this.originalPosition.$clone(), this.appearDuration * durationMultiplier), ease));
                                        }

                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(sequence);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.CanvasGroup.interactable = true;

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.showDuration);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (this.hideAfterPopUp) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 3: {
                                    if (minimizeAfter) {
                                            $step = 4;
                                            continue;
                                        } else  {
                                            $step = 6;
                                            continue;
                                        }
                                }
                                case 4: {
                                    $enumerator.current = this.Minimize();
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 7;
                                    continue;
                                }
                                case 6: {
                                    this.Hide(true);
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UIPopUp.SlideInSequence end.*/

            /*UIPopUp.SlideOutSequence start.*/
            SlideOutSequence: function (doFade) {
if ( TRACE ) { TRACE( "UIPopUp#SlideOutSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    sinkPosition,
                    sequence,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (doFade === void 0) { doFade = false; }
                                        sinkPosition = this.originalPosition.$clone().add( this.slideInOffset );

                                        this.rectTransform.localScale = UnityEngine.Vector3.FromVector2(this.originalScale.$clone());

                                        this.CanvasGroup.alpha = 1.0;

                                        this.CanvasGroup.interactable = false;

                                        sequence = DG.Tweening.DOTween.Sequence();

                                        if (doFade) {
                                            this.CanvasGroup.alpha = 1;

                                            DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.DOTweenModuleUI.DOFade(this.CanvasGroup, 0, this.fadeDuration));
                                            DG.Tweening.TweenSettingsExtensions.Insert(sequence, 0, DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.rectTransform, sinkPosition.$clone(), this.appearDuration));
                                        } else {
                                            DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.rectTransform, sinkPosition.$clone(), this.appearDuration));
                                        }

                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(sequence);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.CanvasGroup.interactable = true;

                                        this.Hide(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UIPopUp.SlideOutSequence end.*/

            /*UIPopUp.ScaleUpSequence start.*/
            ScaleUpSequence: function (doFade, minimizeAfter, startingScale) {
if ( TRACE ) { TRACE( "UIPopUp#ScaleUpSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    sequence,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (doFade === void 0) { doFade = false; }
                                        if (minimizeAfter === void 0) { minimizeAfter = false; }
                                        if (startingScale === void 0) { startingScale = 0.0; }
                                        this.rectTransform.localScale = UnityEngine.Vector3.FromVector2(new pc.Vec2( startingScale, startingScale ));

                                        sequence = DG.Tweening.DOTween.Sequence();

                                        this.CanvasGroup.interactable = false;

                                        if (doFade) {
                                            this.CanvasGroup.alpha = 0;

                                            DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.DOTweenModuleUI.DOFade(this.CanvasGroup, 1, this.fadeDuration));
                                            DG.Tweening.TweenSettingsExtensions.Insert(sequence, 0, DG.Tweening.ShortcutExtensions.DOScale$1(this.rectTransform, UnityEngine.Vector3.FromVector2(this.originalScale.$clone()), this.appearDuration));
                                        } else {
                                            this.CanvasGroup.alpha = 1.0;

                                            DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.ShortcutExtensions.DOScale$1(this.rectTransform, UnityEngine.Vector3.FromVector2(this.originalScale.$clone()), this.appearDuration));
                                        }

                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(sequence);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.CanvasGroup.interactable = true;

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.showDuration);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (this.hideAfterPopUp) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 3: {
                                    if (minimizeAfter) {
                                            $step = 4;
                                            continue;
                                        } else  {
                                            $step = 6;
                                            continue;
                                        }
                                }
                                case 4: {
                                    $enumerator.current = this.Minimize();
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 7;
                                    continue;
                                }
                                case 6: {
                                    this.Hide(true);
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UIPopUp.ScaleUpSequence end.*/

            /*UIPopUp.PopUpSequence start.*/
            PopUpSequence: function (doFade, minimizeAfter, startingScale) {
if ( TRACE ) { TRACE( "UIPopUp#PopUpSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    upMultiplier,
                    downMultiplier,
                    sequence,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (doFade === void 0) { doFade = false; }
                                        if (minimizeAfter === void 0) { minimizeAfter = false; }
                                        if (startingScale === void 0) { startingScale = 0.0; }
                                        this.rectTransform.localScale = UnityEngine.Vector3.FromVector2(new pc.Vec2( startingScale, startingScale ));

                                        upMultiplier = 0.75;
                                        downMultiplier = 0.25;

                                        sequence = DG.Tweening.DOTween.Sequence();

                                        this.CanvasGroup.alpha = 1.0;
                                        this.CanvasGroup.interactable = false;

                                        DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.ShortcutExtensions.DOScale$1(this.rectTransform, UnityEngine.Vector3.FromVector2(this.originalScale.$clone().scale( this.popMultiplier )), this.appearDuration * upMultiplier));

                                        DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.ShortcutExtensions.DOScale$1(this.rectTransform, UnityEngine.Vector3.FromVector2(this.originalScale.$clone()), this.appearDuration * downMultiplier));

                                        if (doFade) {
                                            this.CanvasGroup.alpha = 0;
                                            DG.Tweening.TweenSettingsExtensions.Insert(sequence, 0, DG.Tweening.DOTweenModuleUI.DOFade(this.CanvasGroup, 1, this.fadeDuration));
                                        }

                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(sequence);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.CanvasGroup.interactable = true;

                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.showDuration);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (this.hideAfterPopUp) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 3: {
                                    if (minimizeAfter) {
                                            $step = 4;
                                            continue;
                                        } else  {
                                            $step = 6;
                                            continue;
                                        }
                                }
                                case 4: {
                                    $enumerator.current = this.Minimize();
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 7;
                                    continue;
                                }
                                case 6: {
                                    this.Hide(true);
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UIPopUp.PopUpSequence end.*/

            /*UIPopUp.MinimizeSequence start.*/
            MinimizeSequence: function (pop, doFade) {
if ( TRACE ) { TRACE( "UIPopUp#MinimizeSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    upMultiplier,
                    downMultiplier,
                    firstTargetScale,
                    sequence,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (pop === void 0) { pop = true; }
                                        if (doFade === void 0) { doFade = false; }
                                        if (this.IsHidden) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    this.rectTransform.localScale = UnityEngine.Vector3.FromVector2(this.originalScale.$clone());

                                        upMultiplier = 0.25;
                                        downMultiplier = 0.75;

                                        firstTargetScale = pop ? this.originalScale.$clone().scale( this.popMultiplier ) : this.originalScale.$clone();

                                        this.CanvasGroup.interactable = false;

                                        sequence = DG.Tweening.DOTween.Sequence();

                                        if (pop) {
                                            DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.ShortcutExtensions.DOScale$1(this.rectTransform, UnityEngine.Vector3.FromVector2(firstTargetScale.$clone()), this.minimizeDuration * upMultiplier));
                                        }

                                        DG.Tweening.TweenSettingsExtensions.Append(sequence, DG.Tweening.ShortcutExtensions.DOScale$1(this.rectTransform, UnityEngine.Vector3.FromVector2(pc.Vec2.ZERO.clone()), this.minimizeDuration * downMultiplier));

                                        if (doFade) {
                                            DG.Tweening.TweenSettingsExtensions.Insert(sequence, 0, DG.Tweening.DOTweenModuleUI.DOFade(this.CanvasGroup, 0, this.fadeDuration));
                                        }

                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(sequence);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.CanvasGroup.interactable = true;

                                        this.Hide();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UIPopUp.MinimizeSequence end.*/

            /*UIPopUp.FadeOutSequence start.*/
            FadeOutSequence: function () {
if ( TRACE ) { TRACE( "UIPopUp#FadeOutSequence", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.DOTweenModuleUI.DOFade(this.CanvasGroup, 0, this.fadeDuration));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.destroyAfterHide) {
                                            UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                                        } else {
                                            this.gameObject.SetActive(false);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UIPopUp.FadeOutSequence end.*/

            /*UIPopUp.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "UIPopUp#OnDestroy", this ); }

                var $t;
                DG.Tweening.ShortcutExtensions.DOKill(this.rectTransform);
                DG.Tweening.ShortcutExtensions.DOKill(this.CanvasGroup);

                $t = Bridge.getEnumerator(this.rectTransform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.RectTransform);
                        DG.Tweening.ShortcutExtensions.DOKill(child);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*UIPopUp.OnDestroy end.*/


        }
    });
    /*UIPopUp end.*/

    /*AudioManager start.*/
    Bridge.define("AudioManager", {
        inherits: [UnityEngine.MonoBehaviour,Core.Services.IAudioService],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            library: null,
            sfxPoolSize: 0,
            sfxPool: null,
            musicSource: null,
            musicVolume: 0,
            sfxVolume: 0
        },
        alias: [
            "PlaySFX", "Core$Services$IAudioService$PlaySFX",
            "PlayMusic", "Core$Services$IAudioService$PlayMusic",
            "SetMusicVolume", "Core$Services$IAudioService$SetMusicVolume",
            "SetSFXVolume", "Core$Services$IAudioService$SetSFXVolume",
            "StopMusic", "Core$Services$IAudioService$StopMusic"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AudioManager#init", this ); }

                this.sfxPoolSize = 10;
                this.sfxPool = new (System.Collections.Generic.Queue$1(UnityEngine.AudioSource)).ctor();
                this.musicVolume = 1.0;
                this.sfxVolume = 1.0;
            }
        },
        methods: {
            /*AudioManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AudioManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(AudioManager.Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(AudioManager.Instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                AudioManager.Instance = this;
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);

                // Create SFX sources
                for (var i = 0; i < this.sfxPoolSize; i = (i + 1) | 0) {
                    var go = new UnityEngine.GameObject.$ctor2(System.String.format("SFX_Source_{0}", [Bridge.box(i, System.Int32)]));
                    go.transform.parent = this.transform;
                    var src = go.AddComponent(UnityEngine.AudioSource);
                    src.playOnAwake = false;
                    src.loop = false;
                    src.volume = this.sfxVolume;
                    this.sfxPool.Enqueue(src);
                }

                // Create Music source
                var musicGo = new UnityEngine.GameObject.$ctor2("Music_Source");
                musicGo.transform.parent = this.transform;
                this.musicSource = musicGo.AddComponent(UnityEngine.AudioSource);
                this.musicSource.playOnAwake = false;
                this.musicSource.loop = true;
                this.musicSource.volume = this.musicVolume;

                this.library.Initialize();

                //ServicesLocator.Register<IAudioService>(this);
            },
            /*AudioManager.Awake end.*/

            /*AudioManager.PlaySFX start.*/
            PlaySFX: function (key, position, pitch) {
if ( TRACE ) { TRACE( "AudioManager#PlaySFX", this ); }

                if (position === void 0) { position = null; }
                if (pitch === void 0) { pitch = 1.0; }
                var entry = { v : new AudioLibrary.ClipEntry() };
                if (!this.library.TryGetClip(key, entry) || entry.v.channel !== AudioChannel.SFX) {
                    return;
                }

                if (this.sfxPool.Count === 0) {
                    return;
                } // Avoid overflow

                var src = this.sfxPool.Dequeue();
                src.clip = entry.v.clip;
                src.volume = this.sfxVolume * entry.v.volume;
                src.pitch = pitch;

                src.Play();

                this.StartCoroutine$1(this.ReturnToPoolWhenDone(src));
            },
            /*AudioManager.PlaySFX end.*/

            /*AudioManager.PlayMusic start.*/
            PlayMusic: function (key, fadeDuration) {
if ( TRACE ) { TRACE( "AudioManager#PlayMusic", this ); }

                if (fadeDuration === void 0) { fadeDuration = 0.5; }
                var entry = { v : new AudioLibrary.ClipEntry() };
                if (!this.library.TryGetClip(key, entry) || entry.v.channel !== AudioChannel.Music) {
                    return;
                }

                if (this.musicSource.isPlaying && Bridge.referenceEquals(this.musicSource.clip, entry.v.clip)) {
                    return;
                }

                this.StopCoroutine$1("CrossfadeMusic");
                this.StartCoroutine$1(this.CrossfadeMusic(entry.v.clip, entry.v.volume, entry.v.loop, fadeDuration));
            },
            /*AudioManager.PlayMusic end.*/

            /*AudioManager.StopMusic$1 start.*/
            StopMusic$1: function () {
if ( TRACE ) { TRACE( "AudioManager#StopMusic$1", this ); }

                this.musicSource.Stop();
            },
            /*AudioManager.StopMusic$1 end.*/

            /*AudioManager.StopMusic start.*/
            StopMusic: function (fadeDuration) {
if ( TRACE ) { TRACE( "AudioManager#StopMusic", this ); }

                if (fadeDuration === void 0) { fadeDuration = 1.0; }

            },
            /*AudioManager.StopMusic end.*/

            /*AudioManager.SetMusicVolume start.*/
            SetMusicVolume: function (volume) {
if ( TRACE ) { TRACE( "AudioManager#SetMusicVolume", this ); }

                this.musicVolume = Math.max(0, Math.min(1, volume));
                this.musicSource.volume = this.musicVolume;
            },
            /*AudioManager.SetMusicVolume end.*/

            /*AudioManager.SetSFXVolume start.*/
            SetSFXVolume: function (volume) {
if ( TRACE ) { TRACE( "AudioManager#SetSFXVolume", this ); }

                this.sfxVolume = Math.max(0, Math.min(1, volume));
            },
            /*AudioManager.SetSFXVolume end.*/

            /*AudioManager.ReturnToPoolWhenDone start.*/
            ReturnToPoolWhenDone: function (src) {
if ( TRACE ) { TRACE( "AudioManager#ReturnToPoolWhenDone", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitWhile(function () {
                                            return src.isPlaying;
                                        });
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.sfxPool.Enqueue(src);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AudioManager.ReturnToPoolWhenDone end.*/

            /*AudioManager.CrossfadeMusic start.*/
            CrossfadeMusic: function (newClip, targetVolume, loop, duration) {
if ( TRACE ) { TRACE( "AudioManager#CrossfadeMusic", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startVolume,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startVolume = this.musicSource.volume;
                                        t = 0.0;

                                        // Fade out
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.musicSource.volume = pc.math.lerp(startVolume, 0.0, t / duration);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.musicSource.Stop();
                                        this.musicSource.clip = newClip;
                                        this.musicSource.loop = loop;
                                        this.musicSource.Play();

                                        // Fade in
                                        t = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( t < duration ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.musicSource.volume = pc.math.lerp(0.0, targetVolume, t / duration);
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this.musicSource.volume = targetVolume;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AudioManager.CrossfadeMusic end.*/


        },
        overloads: {
            "StopMusic()": "StopMusic$1"
        }
    });
    /*AudioManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections.Generic","UnityEngine","System.Collections","DG.Tweening","UnityEngine.EventSystems","UnityEngine.UI","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*AudioChannel start.*/
    $m("AudioChannel", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Music","is":true,"t":4,"rt":AudioChannel,"sn":"Music","box":function ($v) { return Bridge.box($v, AudioChannel, System.Enum.toStringFn(AudioChannel));}},{"a":2,"n":"SFX","is":true,"t":4,"rt":AudioChannel,"sn":"SFX","box":function ($v) { return Bridge.box($v, AudioChannel, System.Enum.toStringFn(AudioChannel));}}]}; }, $n);
    /*AudioChannel end.*/

    /*AudioLibrary start.*/
    $m("AudioLibrary", function () { return {"nested":[AudioLibrary.ClipEntry],"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        menuName: "Audio/Audio Library", fileName: "AudioLibrary"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":2,"n":"TryGetClip","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0},{"n":"entry","out":true,"pt":AudioLibrary.ClipEntry,"ps":1}],"sn":"TryGetClip","rt":$n[0].Boolean,"p":[$n[0].String,AudioLibrary.ClipEntry],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"clips","t":4,"rt":$n[1].List$1(AudioLibrary.ClipEntry),"sn":"clips"},{"a":1,"n":"lookup","t":4,"rt":$n[1].Dictionary$2(System.String,AudioLibrary.ClipEntry),"sn":"lookup"}]}; }, $n);
    /*AudioLibrary end.*/

    /*AudioLibrary+ClipEntry start.*/
    $m("AudioLibrary.ClipEntry", function () { return {"td":AudioLibrary,"att":1057034,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"channel","t":4,"rt":AudioChannel,"sn":"channel","box":function ($v) { return Bridge.box($v, AudioChannel, System.Enum.toStringFn(AudioChannel));}},{"a":2,"n":"clip","t":4,"rt":$n[2].AudioClip,"sn":"clip"},{"a":2,"n":"key","t":4,"rt":$n[0].String,"sn":"key"},{"a":2,"n":"loop","t":4,"rt":$n[0].Boolean,"sn":"loop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"volume","t":4,"rt":$n[0].Single,"sn":"volume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*AudioLibrary+ClipEntry end.*/

    /*AudioManager start.*/
    $m("AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CrossfadeMusic","t":8,"pi":[{"n":"newClip","pt":$n[2].AudioClip,"ps":0},{"n":"targetVolume","pt":$n[0].Single,"ps":1},{"n":"loop","pt":$n[0].Boolean,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"CrossfadeMusic","rt":$n[3].IEnumerator,"p":[$n[2].AudioClip,$n[0].Single,$n[0].Boolean,$n[0].Single]},{"a":2,"n":"PlayMusic","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0},{"n":"fadeDuration","dv":0.5,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"PlayMusic","rt":$n[0].Void,"p":[$n[0].String,$n[0].Single]},{"a":2,"n":"PlaySFX","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0},{"n":"position","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":1},{"n":"pitch","dv":1.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"PlaySFX","rt":$n[0].Void,"p":[$n[0].String,$n[0].Nullable$1(UnityEngine.Vector3),$n[0].Single]},{"a":1,"n":"ReturnToPoolWhenDone","t":8,"pi":[{"n":"src","pt":$n[2].AudioSource,"ps":0}],"sn":"ReturnToPoolWhenDone","rt":$n[3].IEnumerator,"p":[$n[2].AudioSource]},{"a":2,"n":"SetMusicVolume","t":8,"pi":[{"n":"volume","pt":$n[0].Single,"ps":0}],"sn":"SetMusicVolume","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetSFXVolume","t":8,"pi":[{"n":"volume","pt":$n[0].Single,"ps":0}],"sn":"SetSFXVolume","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"StopMusic","t":8,"sn":"StopMusic$1","rt":$n[0].Void},{"a":2,"n":"StopMusic","t":8,"pi":[{"n":"fadeDuration","dv":1.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"StopMusic","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"Instance","is":true,"t":16,"rt":AudioManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":AudioManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[AudioManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("Library")],"a":2,"n":"library","t":4,"rt":AudioLibrary,"sn":"library"},{"a":1,"n":"musicSource","t":4,"rt":$n[2].AudioSource,"sn":"musicSource"},{"a":1,"n":"musicVolume","t":4,"rt":$n[0].Single,"sn":"musicVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"sfxPool","t":4,"rt":$n[1].Queue$1(UnityEngine.AudioSource),"sn":"sfxPool"},{"at":[new UnityEngine.HeaderAttribute("SFX Pool Settings")],"a":2,"n":"sfxPoolSize","t":4,"rt":$n[0].Int32,"sn":"sfxPoolSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"sfxVolume","t":4,"rt":$n[0].Single,"sn":"sfxVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":AudioManager,"sn":"Instance"}]}; }, $n);
    /*AudioManager end.*/

    /*UIFader start.*/
    $m("UIFader", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.CanvasGroup)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"FadeIn","t":8,"pi":[{"n":"delay","dv":0.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"FadeIn","rt":$n[2].Coroutine,"p":[$n[0].Single]},{"a":2,"n":"FadeOut","t":8,"pi":[{"n":"delay","dv":0.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"FadeOut","rt":$n[2].Coroutine,"p":[$n[0].Single]},{"a":1,"n":"FadeSequence","t":8,"pi":[{"n":"alpha","pt":$n[0].Single,"ps":0},{"n":"fadeDuration","pt":$n[0].Single,"ps":1},{"n":"isFlicker","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2},{"n":"startDelay","dv":0.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"FadeSequence","rt":$n[3].IEnumerator,"p":[$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Single]},{"a":2,"n":"Flicker","t":8,"sn":"Flicker","rt":$n[2].Coroutine},{"a":1,"n":"FlickerSequence","t":8,"sn":"FlickerSequence","rt":$n[3].IEnumerator},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":2,"n":"IsVisible","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsVisible","t":8,"rt":$n[0].Boolean,"fg":"IsVisible","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsVisible"},{"a":1,"n":"canvasGroup","t":4,"rt":$n[2].CanvasGroup,"sn":"canvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"disableOnHide","t":4,"rt":$n[0].Boolean,"sn":"disableOnHide","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"fadeCoroutine","t":4,"rt":$n[2].Coroutine,"sn":"fadeCoroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeInDuration","t":4,"rt":$n[0].Single,"sn":"fadeInDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeOutDuration","t":4,"rt":$n[0].Single,"sn":"fadeOutDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flickerSpeed","t":4,"rt":$n[0].Single,"sn":"flickerSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flickers","t":4,"rt":$n[0].Int32,"sn":"flickers","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hideOnAwake","t":4,"rt":$n[0].Boolean,"sn":"hideOnAwake","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*UIFader end.*/

    /*UIPopUp start.*/
    $m("UIPopUp", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.CanvasGroup)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FadeOutSequence","t":8,"sn":"FadeOutSequence","rt":$n[3].IEnumerator},{"a":2,"n":"Hide","t":8,"pi":[{"n":"fadeOut","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"Hide","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"Minimize","t":8,"pi":[{"n":"pop","dv":true,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"doFade","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"Minimize","rt":$n[2].Coroutine,"p":[$n[0].Boolean,$n[0].Boolean]},{"a":1,"n":"MinimizeSequence","t":8,"pi":[{"n":"pop","dv":true,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"doFade","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"MinimizeSequence","rt":$n[3].IEnumerator,"p":[$n[0].Boolean,$n[0].Boolean]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"PopUp","t":8,"pi":[{"n":"doFade","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"minimizeAfter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"startingScale","dv":0.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"PopUp","rt":$n[2].Coroutine,"p":[$n[0].Boolean,$n[0].Boolean,$n[0].Single]},{"a":1,"n":"PopUpSequence","t":8,"pi":[{"n":"doFade","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"minimizeAfter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"startingScale","dv":0.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"PopUpSequence","rt":$n[3].IEnumerator,"p":[$n[0].Boolean,$n[0].Boolean,$n[0].Single]},{"a":2,"n":"ResetPosition","t":8,"sn":"ResetPosition","rt":$n[0].Void},{"a":2,"n":"ResetScale","t":8,"sn":"ResetScale","rt":$n[0].Void},{"a":2,"n":"ScaleUp","t":8,"pi":[{"n":"doFade","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"minimizeAfter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"startingScale","dv":0.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"ScaleUp","rt":$n[2].Coroutine,"p":[$n[0].Boolean,$n[0].Boolean,$n[0].Single]},{"a":1,"n":"ScaleUpSequence","t":8,"pi":[{"n":"doFade","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"minimizeAfter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1},{"n":"startingScale","dv":0.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"ScaleUpSequence","rt":$n[3].IEnumerator,"p":[$n[0].Boolean,$n[0].Boolean,$n[0].Single]},{"a":2,"n":"SetOriginalPosition","t":8,"sn":"SetOriginalPosition","rt":$n[0].Void},{"a":2,"n":"SetOriginalScale","t":8,"sn":"SetOriginalScale","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":2,"n":"SlideIn","t":8,"pi":[{"n":"doFade","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"durationMultiplier","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1},{"n":"minimizeAfter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2},{"n":"ease","dv":0,"o":true,"pt":$n[4].Ease,"ps":3}],"sn":"SlideIn","rt":$n[2].Coroutine,"p":[$n[0].Boolean,$n[0].Single,$n[0].Boolean,$n[4].Ease]},{"a":1,"n":"SlideInSequence","t":8,"pi":[{"n":"doFade","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"durationMultiplier","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1},{"n":"minimizeAfter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2},{"n":"ease","dv":0,"o":true,"pt":$n[4].Ease,"ps":3}],"sn":"SlideInSequence","rt":$n[3].IEnumerator,"p":[$n[0].Boolean,$n[0].Single,$n[0].Boolean,$n[4].Ease]},{"a":2,"n":"SlideOut","t":8,"pi":[{"n":"doFade","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"SlideOut","rt":$n[2].Coroutine,"p":[$n[0].Boolean]},{"a":1,"n":"SlideOutSequence","t":8,"pi":[{"n":"doFade","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"SlideOutSequence","rt":$n[3].IEnumerator,"p":[$n[0].Boolean]},{"a":2,"n":"CanvasGroup","t":16,"rt":$n[2].CanvasGroup,"g":{"a":2,"n":"get_CanvasGroup","t":8,"rt":$n[2].CanvasGroup,"fg":"CanvasGroup"},"fn":"CanvasGroup"},{"a":2,"n":"IsHidden","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsHidden","t":8,"rt":$n[0].Boolean,"fg":"IsHidden","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsHidden"},{"a":1,"n":"rectTransform","t":16,"rt":$n[2].RectTransform,"g":{"a":1,"n":"get_rectTransform","t":8,"rt":$n[2].RectTransform,"fg":"rectTransform"},"fn":"rectTransform"},{"a":1,"n":"activeCoroutine","t":4,"rt":$n[2].Coroutine,"sn":"activeCoroutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"appearDuration","t":4,"rt":$n[0].Single,"sn":"appearDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"canvasGroup","t":4,"rt":$n[2].CanvasGroup,"sn":"canvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"destroyAfterHide","t":4,"rt":$n[0].Boolean,"sn":"destroyAfterHide","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeDuration","t":4,"rt":$n[0].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hideAfterPopUp","t":4,"rt":$n[0].Boolean,"sn":"hideAfterPopUp","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hideOnAwake","t":4,"rt":$n[0].Boolean,"sn":"hideOnAwake","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minimizeDuration","t":4,"rt":$n[0].Single,"sn":"minimizeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalPosition","t":4,"rt":$n[2].Vector2,"sn":"originalPosition"},{"a":1,"n":"originalScale","t":4,"rt":$n[2].Vector2,"sn":"originalScale"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"popMultiplier","t":4,"rt":$n[0].Single,"sn":"popMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"showDuration","t":4,"rt":$n[0].Single,"sn":"showDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"slideInOffset","t":4,"rt":$n[2].Vector2,"sn":"slideInOffset"}]}; }, $n);
    /*UIPopUp end.*/

    /*AnswerBox start.*/
    $m("AnswerBox", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnDroppedCard","t":8,"pi":[{"n":"droppedObject","pt":$n[2].GameObject,"ps":0}],"sn":"OnDroppedCard","rt":$n[0].Void,"p":[$n[2].GameObject]},{"a":2,"n":"ReturnCardToOriginalParent","t":8,"sn":"ReturnCardToOriginalParent","rt":$n[0].Void},{"a":2,"n":"containsCorrectLetter","t":4,"rt":$n[0].Boolean,"sn":"containsCorrectLetter","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"correctLetter","t":4,"rt":$n[0].String,"sn":"correctLetter"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"draggableObjectChild","t":4,"rt":DraggableCard,"sn":"draggableObjectChild"},{"a":2,"n":"hasChildInbound","t":4,"rt":$n[0].Boolean,"sn":"hasChildInbound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"validPlacementArea","t":4,"rt":$n[0].Boolean,"sn":"validPlacementArea","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*AnswerBox end.*/

    /*AnswerManager start.*/
    $m("AnswerManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CheckForFilledBoxes","t":8,"sn":"CheckForFilledBoxes","rt":$n[0].Void},{"a":2,"n":"CheckIfEmpty","t":8,"sn":"CheckIfEmpty","rt":$n[2].Transform},{"a":2,"n":"CheckToShowHint","t":8,"sn":"CheckToShowHint","rt":$n[0].Void},{"a":2,"n":"CheckforEndCard","t":8,"sn":"CheckforEndCard","rt":$n[0].Void},{"a":1,"n":"GameCompletedSequence","t":8,"sn":"GameCompletedSequence","rt":$n[3].IEnumerator},{"a":1,"n":"InitialSequence","t":8,"sn":"InitialSequence","rt":$n[3].IEnumerator},{"a":2,"n":"InitialStart","t":8,"sn":"InitialStart","rt":$n[0].Void},{"a":2,"n":"OnClearPressed","t":8,"sn":"OnClearPressed","rt":$n[0].Void},{"a":2,"n":"OnHintPressed","t":8,"sn":"OnHintPressed","rt":$n[0].Void},{"a":2,"n":"OnSubmitPressed","t":8,"sn":"OnSubmitPressed","rt":$n[0].Void},{"a":1,"n":"SetupAnswerBoxes","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"SetupAnswerBoxes","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"WordCompletionSequence","t":8,"sn":"WordCompletionSequence","rt":$n[3].IEnumerator},{"a":2,"n":"Instance","is":true,"t":4,"rt":AnswerManager,"sn":"Instance"},{"at":[new UnityEngine.HeaderAttribute("Iteration"),new UnityEngine.LunaPlaygroundFieldAttribute("Iteration Number", 1, "Iteration Settings", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_iteration","t":4,"rt":$n[0].Int32,"sn":"_iteration","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"answerBoxes","t":4,"rt":System.Array.type(AnswerBox),"sn":"answerBoxes"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bgs","t":4,"rt":System.Array.type(UIFader),"sn":"bgs"},{"at":[new UnityEngine.HeaderAttribute("Card Rows and Answer Boxes"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cardRows","t":4,"rt":$n[1].List$1(CardRow),"sn":"cardRows"},{"a":1,"n":"charList","t":4,"rt":$n[1].List$1(System.Char),"sn":"charList"},{"a":1,"n":"currentWordIndex","t":4,"rt":$n[0].Int32,"sn":"currentWordIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handOnSubmit","t":4,"rt":$n[2].GameObject,"sn":"handOnSubmit"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hints","t":4,"rt":$n[1].List$1(UnityEngine.GameObject),"sn":"hints"},{"a":1,"n":"letterToCheck","t":4,"rt":$n[0].String,"sn":"letterToCheck"},{"a":1,"n":"letterToSolve","t":4,"rt":$n[0].String,"sn":"letterToSolve"},{"at":[new UnityEngine.HeaderAttribute("Integers"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"quizzesDone","t":4,"rt":$n[0].Int32,"sn":"quizzesDone","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"textPopUp","t":4,"rt":UIPopUp,"sn":"textPopUp"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"uiBottons","t":4,"rt":System.Array.type(UnityEngine.UI.Button),"sn":"uiBottons"},{"at":[new UnityEngine.HeaderAttribute("Lists"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"wordList","t":4,"rt":$n[1].List$1(System.String),"sn":"wordList"}]}; }, $n);
    /*AnswerManager end.*/

    /*CardRow start.*/
    $m("CardRow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GameStartSequence","t":8,"sn":"GameStartSequence","rt":$n[3].IEnumerator},{"a":2,"n":"RemoveLastCard","t":8,"sn":"RemoveLastCard","rt":$n[0].Void},{"a":1,"n":"RemoveSequence","t":8,"sn":"RemoveSequence","rt":$n[3].IEnumerator},{"a":2,"n":"ShowCardHint","t":8,"pi":[{"n":"letterChecked","pt":$n[0].String,"ps":0}],"sn":"ShowCardHint","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cardHolder","t":4,"rt":$n[1].List$1(UnityEngine.UI.HorizontalLayoutGroup),"sn":"cardHolder"},{"a":2,"n":"cards","t":4,"rt":$n[1].List$1(DraggableCard),"sn":"cards"}]}; }, $n);
    /*CardRow end.*/

    /*DraggableCard start.*/
    $m("DraggableCard", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"FlipOverCard","t":8,"sn":"FlipOverCard","rt":$n[0].Void},{"a":1,"n":"FlipSequence","t":8,"sn":"FlipSequence","rt":$n[3].IEnumerator},{"a":2,"n":"OnPointerClick","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerClick","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"ReturnToOriginal","t":8,"sn":"ReturnToOriginal","rt":$n[0].Void},{"a":2,"n":"Letter","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Letter","t":8,"rt":$n[0].String,"fg":"Letter"},"fn":"Letter"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"canBeDragged","t":4,"rt":$n[0].Boolean,"sn":"canBeDragged","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cardSprite","t":4,"rt":$n[2].Sprite,"sn":"cardSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"containedLetter","t":4,"rt":$n[0].String,"sn":"containedLetter"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"image","t":4,"rt":$n[6].Image,"sn":"image"},{"a":2,"n":"isInAnswerBox","t":4,"rt":$n[0].Boolean,"sn":"isInAnswerBox","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"originalParent","t":4,"rt":$n[2].Transform,"sn":"originalParent"},{"a":2,"n":"parentAfterDrag","t":4,"rt":$n[2].Transform,"sn":"parentAfterDrag"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"textObject","t":4,"rt":$n[2].GameObject,"sn":"textObject"}]}; }, $n);
    /*DraggableCard end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CountdownCheck","t":8,"sn":"CountdownCheck","rt":$n[0].Void},{"a":2,"n":"GameOverSequence","t":8,"pi":[{"n":"failedOrNot","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"GameOverSequence","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"LoseLife","t":8,"sn":"LoseLife","rt":$n[0].Void},{"a":2,"n":"OnCTAClicked","t":8,"sn":"OnCTAClicked","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":1,"n":"StartGameSequence","t":8,"sn":"StartGameSequence","rt":$n[3].IEnumerator},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttonLossTextSprite","t":4,"rt":$n[2].Sprite,"sn":"buttonLossTextSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttonSprite","t":4,"rt":$n[6].Image,"sn":"buttonSprite"},{"at":[new UnityEngine.HeaderAttribute("UI Faders"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endCard","t":4,"rt":UIFader,"sn":"endCard"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"failBG","t":4,"rt":$n[2].GameObject,"sn":"failBG"},{"at":[new UnityEngine.HeaderAttribute("Misc"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameBlocker","t":4,"rt":$n[2].GameObject,"sn":"gameBlocker"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"gameplayCanvas","t":4,"rt":UIFader,"sn":"gameplayCanvas"},{"a":2,"n":"hassGameStarted","t":4,"rt":$n[0].Boolean,"sn":"hassGameStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hearts","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"hearts"},{"at":[new UnityEngine.HeaderAttribute("Hint Activate Timer"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hintButton","t":4,"rt":$n[2].GameObject,"sn":"hintButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"idleTimer","t":4,"rt":$n[0].Single,"sn":"idleTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"isGameOver","t":4,"rt":$n[0].Boolean,"sn":"isGameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isHandActive","t":4,"rt":$n[0].Boolean,"sn":"isHandActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isInteracting","t":4,"rt":$n[0].Boolean,"sn":"isInteracting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lives","t":4,"rt":$n[0].Int32,"sn":"lives","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lossHeartSprite","t":4,"rt":$n[2].Sprite,"sn":"lossHeartSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lossTextSprite","t":4,"rt":$n[2].Sprite,"sn":"lossTextSprite"},{"a":2,"n":"maxWordCounter","t":4,"rt":$n[0].Int32,"sn":"maxWordCounter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startCard","t":4,"rt":UIFader,"sn":"startCard"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"textSprite","t":4,"rt":$n[6].Image,"sn":"textSprite"},{"a":2,"n":"wordCounter","t":4,"rt":$n[0].Int32,"sn":"wordCounter","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[7].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[4].Sequence,"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[9].Path,$n[0].Single,$n[4].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"towards","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[4].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[4].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,$n[9].Path,$n[0].Single,$n[4].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[4].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[2].Rigidbody,$n[2].Vector3,$n[0].Single,$n[4].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[4].Sequence,"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[9].Path,$n[0].Single,$n[4].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,$n[9].Path,$n[0].Single,$n[4].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[4].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[4].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[4].PathType,$n[4].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[4].Tweener,"p":[$n[2].SpriteRenderer,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[4].Sequence,"p":[$n[2].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[4].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[4].Tweener,"p":[$n[6].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[4].Tweener,"p":[$n[6].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[4].Tweener,"p":[$n[6].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Graphic,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Image,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Outline,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[2].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Text,$n[2].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[10].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[8].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[6].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[10].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[4].Sequence,"p":[$n[6].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[4].Tweener,"p":[$n[6].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[4].Sequence,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[4].Tweener,"p":[$n[6].ScrollRect,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"punch","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[4].Tweener,"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].Outline,$n[2].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[4].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[4].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[4].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[2].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[4].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[4].Tweener,"p":[$n[2].RectTransform,$n[0].Single,$n[2].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[4].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"center","pt":$n[2].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].RectTransform,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].RectTransform,$n[2].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[4].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[8].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[6].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[4].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[4].Tweener,"p":[$n[6].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[4].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[2].RectTransform,"ps":0},{"n":"to","pt":$n[2].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[2].Vector2,"p":[$n[2].RectTransform,$n[2].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[4].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[4].Sequence,"p":[$n[2].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Material,"ps":0},{"n":"endValue","pt":$n[2].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Material,$n[2].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[4].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[2].CustomYieldInstruction,"p":[$n[4].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[4].DOTweenCYInstruction.WaitForCompletion,$n[4].DOTweenCYInstruction.WaitForRewind,$n[4].DOTweenCYInstruction.WaitForKill,$n[4].DOTweenCYInstruction.WaitForElapsedLoops,$n[4].DOTweenCYInstruction.WaitForPosition,$n[4].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[4].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].Tween],"pi":[{"n":"tween","pt":$n[4].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[4].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[4].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[4].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[9].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[4].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[2].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[9].Path,$n[0].Single,$n[4].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[2].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[11].PathOptions,"ps":0},{"n":"t","pt":$n[4].Tween,"ps":1},{"n":"newRot","pt":$n[2].Quaternion,"ps":2},{"n":"trans","pt":$n[2].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[11].PathOptions,$n[4].Tween,$n[2].Quaternion,$n[2].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Core.Services.IAudioService start.*/
    $m("Core.Services.IAudioService", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"PlayMusic","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0},{"n":"fadeDuration","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"Core$Services$IAudioService$PlayMusic","rt":$n[0].Void,"p":[$n[0].String,$n[0].Single]},{"ab":true,"a":2,"n":"PlaySFX","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0},{"n":"position","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":1},{"n":"pitch","dv":1.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"Core$Services$IAudioService$PlaySFX","rt":$n[0].Void,"p":[$n[0].String,$n[0].Nullable$1(UnityEngine.Vector3),$n[0].Single]},{"ab":true,"a":2,"n":"SetMusicVolume","t":8,"pi":[{"n":"volume","pt":$n[0].Single,"ps":0}],"sn":"Core$Services$IAudioService$SetMusicVolume","rt":$n[0].Void,"p":[$n[0].Single]},{"ab":true,"a":2,"n":"SetSFXVolume","t":8,"pi":[{"n":"volume","pt":$n[0].Single,"ps":0}],"sn":"Core$Services$IAudioService$SetSFXVolume","rt":$n[0].Void,"p":[$n[0].Single]},{"ab":true,"a":2,"n":"StopMusic","t":8,"pi":[{"n":"fadeDuration","dv":1.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"Core$Services$IAudioService$StopMusic","rt":$n[0].Void,"p":[$n[0].Single]}]}; }, $n);
    /*Core.Services.IAudioService end.*/

    }});
