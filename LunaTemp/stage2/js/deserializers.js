var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointSpring' )
  var i537 = data
  i536.spring = i537[0]
  i536.damper = i537[1]
  i536.targetPosition = i537[2]
  return i536
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointMotor' )
  var i539 = data
  i538.m_TargetVelocity = i539[0]
  i538.m_Force = i539[1]
  i538.m_FreeSpin = i539[2]
  return i538
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointLimits' )
  var i541 = data
  i540.m_Min = i541[0]
  i540.m_Max = i541[1]
  i540.m_Bounciness = i541[2]
  i540.m_BounceMinVelocity = i541[3]
  i540.m_ContactDistance = i541[4]
  i540.minBounce = i541[5]
  i540.maxBounce = i541[6]
  return i540
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointDrive' )
  var i543 = data
  i542.m_PositionSpring = i543[0]
  i542.m_PositionDamper = i543[1]
  i542.m_MaximumForce = i543[2]
  i542.m_UseAcceleration = i543[3]
  return i542
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i545 = data
  i544.m_Spring = i545[0]
  i544.m_Damper = i545[1]
  return i544
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i547 = data
  i546.m_Limit = i547[0]
  i546.m_Bounciness = i547[1]
  i546.m_ContactDistance = i547[2]
  return i546
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i549 = data
  i548.m_ExtremumSlip = i549[0]
  i548.m_ExtremumValue = i549[1]
  i548.m_AsymptoteSlip = i549[2]
  i548.m_AsymptoteValue = i549[3]
  i548.m_Stiffness = i549[4]
  return i548
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i551 = data
  i550.m_LowerAngle = i551[0]
  i550.m_UpperAngle = i551[1]
  return i550
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i553 = data
  i552.m_MotorSpeed = i553[0]
  i552.m_MaximumMotorTorque = i553[1]
  return i552
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i555 = data
  i554.m_DampingRatio = i555[0]
  i554.m_Frequency = i555[1]
  i554.m_Angle = i555[2]
  return i554
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i557 = data
  i556.m_LowerTranslation = i557[0]
  i556.m_UpperTranslation = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i559 = data
  i558.name = i559[0]
  i558.width = i559[1]
  i558.height = i559[2]
  i558.mipmapCount = i559[3]
  i558.anisoLevel = i559[4]
  i558.filterMode = i559[5]
  i558.hdr = !!i559[6]
  i558.format = i559[7]
  i558.wrapMode = i559[8]
  i558.alphaIsTransparency = !!i559[9]
  i558.alphaSource = i559[10]
  i558.graphicsFormat = i559[11]
  i558.sRGBTexture = !!i559[12]
  i558.desiredColorSpace = i559[13]
  i558.wrapU = i559[14]
  i558.wrapV = i559[15]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i561 = data
  i560.pivot = new pc.Vec2( i561[0], i561[1] )
  i560.anchorMin = new pc.Vec2( i561[2], i561[3] )
  i560.anchorMax = new pc.Vec2( i561[4], i561[5] )
  i560.sizeDelta = new pc.Vec2( i561[6], i561[7] )
  i560.anchoredPosition3D = new pc.Vec3( i561[8], i561[9], i561[10] )
  i560.rotation = new pc.Quat(i561[11], i561[12], i561[13], i561[14])
  i560.scale = new pc.Vec3( i561[15], i561[16], i561[17] )
  return i560
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i563 = data
  i562.m_Spacing = i563[0]
  i562.m_ChildForceExpandWidth = !!i563[1]
  i562.m_ChildForceExpandHeight = !!i563[2]
  i562.m_ChildControlWidth = !!i563[3]
  i562.m_ChildControlHeight = !!i563[4]
  i562.m_ChildScaleWidth = !!i563[5]
  i562.m_ChildScaleHeight = !!i563[6]
  i562.m_ReverseArrangement = !!i563[7]
  i562.m_Padding = UnityEngine.RectOffset.FromPaddings(i563[8], i563[9], i563[10], i563[11])
  i562.m_ChildAlignment = i563[12]
  return i562
}

Deserializers["CardRow"] = function (request, data, root) {
  var i564 = root || request.c( 'CardRow' )
  var i565 = data
  var i567 = i565[0]
  var i566 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableCard')))
  for(var i = 0; i < i567.length; i += 2) {
  request.r(i567[i + 0], i567[i + 1], 1, i566, '')
  }
  i564.cards = i566
  var i569 = i565[1]
  var i568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.HorizontalLayoutGroup')))
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 1, i568, '')
  }
  i564.cardHolder = i568
  return i564
}

Deserializers["DraggableCard"] = function (request, data, root) {
  var i574 = root || request.c( 'DraggableCard' )
  var i575 = data
  i574.canBeDragged = !!i575[0]
  request.r(i575[1], i575[2], 0, i574, 'image')
  i574.isInAnswerBox = !!i575[3]
  request.r(i575[4], i575[5], 0, i574, 'parentAfterDrag')
  request.r(i575[6], i575[7], 0, i574, 'cardSprite')
  request.r(i575[8], i575[9], 0, i574, 'textObject')
  i574.containedLetter = i575[10]
  request.r(i575[11], i575[12], 0, i574, 'originalParent')
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i577 = data
  i576.cullTransparentMesh = !!i577[0]
  return i576
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.Image' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'm_Sprite')
  i578.m_Type = i579[2]
  i578.m_PreserveAspect = !!i579[3]
  i578.m_FillCenter = !!i579[4]
  i578.m_FillMethod = i579[5]
  i578.m_FillAmount = i579[6]
  i578.m_FillClockwise = !!i579[7]
  i578.m_FillOrigin = i579[8]
  i578.m_UseSpriteMesh = !!i579[9]
  i578.m_PixelsPerUnitMultiplier = i579[10]
  request.r(i579[11], i579[12], 0, i578, 'm_Material')
  i578.m_Maskable = !!i579[13]
  i578.m_Color = new pc.Color(i579[14], i579[15], i579[16], i579[17])
  i578.m_RaycastTarget = !!i579[18]
  i578.m_RaycastPadding = new pc.Vec4( i579[19], i579[20], i579[21], i579[22] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i581 = data
  i580.m_Alpha = i581[0]
  i580.m_Interactable = !!i581[1]
  i580.m_BlocksRaycasts = !!i581[2]
  i580.m_IgnoreParentGroups = !!i581[3]
  i580.enabled = !!i581[4]
  return i580
}

Deserializers["UIPopUp"] = function (request, data, root) {
  var i582 = root || request.c( 'UIPopUp' )
  var i583 = data
  i582.hideOnAwake = !!i583[0]
  i582.hideAfterPopUp = !!i583[1]
  i582.destroyAfterHide = !!i583[2]
  i582.slideInOffset = new pc.Vec2( i583[3], i583[4] )
  i582.popMultiplier = i583[5]
  i582.appearDuration = i583[6]
  i582.minimizeDuration = i583[7]
  i582.fadeDuration = i583[8]
  i582.showDuration = i583[9]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'animatorController')
  request.r(i585[2], i585[3], 0, i584, 'avatar')
  i584.updateMode = i585[4]
  i584.hasTransformHierarchy = !!i585[5]
  i584.applyRootMotion = !!i585[6]
  var i587 = i585[7]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i584.humanBones = i586
  i584.enabled = !!i585[8]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i591 = data
  i590.name = i591[0]
  i590.tagId = i591[1]
  i590.enabled = !!i591[2]
  i590.isStatic = !!i591[3]
  i590.layer = i591[4]
  return i590
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i592 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i593 = data
  i592.m_hasFontAssetChanged = !!i593[0]
  request.r(i593[1], i593[2], 0, i592, 'm_baseMaterial')
  i592.m_maskOffset = new pc.Vec4( i593[3], i593[4], i593[5], i593[6] )
  i592.m_text = i593[7]
  i592.m_isRightToLeft = !!i593[8]
  request.r(i593[9], i593[10], 0, i592, 'm_fontAsset')
  request.r(i593[11], i593[12], 0, i592, 'm_sharedMaterial')
  var i595 = i593[13]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i592.m_fontSharedMaterials = i594
  request.r(i593[14], i593[15], 0, i592, 'm_fontMaterial')
  var i597 = i593[16]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i592.m_fontMaterials = i596
  i592.m_fontColor32 = UnityEngine.Color32.ConstructColor(i593[17], i593[18], i593[19], i593[20])
  i592.m_fontColor = new pc.Color(i593[21], i593[22], i593[23], i593[24])
  i592.m_enableVertexGradient = !!i593[25]
  i592.m_colorMode = i593[26]
  i592.m_fontColorGradient = request.d('TMPro.VertexGradient', i593[27], i592.m_fontColorGradient)
  request.r(i593[28], i593[29], 0, i592, 'm_fontColorGradientPreset')
  request.r(i593[30], i593[31], 0, i592, 'm_spriteAsset')
  i592.m_tintAllSprites = !!i593[32]
  request.r(i593[33], i593[34], 0, i592, 'm_StyleSheet')
  i592.m_TextStyleHashCode = i593[35]
  i592.m_overrideHtmlColors = !!i593[36]
  i592.m_faceColor = UnityEngine.Color32.ConstructColor(i593[37], i593[38], i593[39], i593[40])
  i592.m_fontSize = i593[41]
  i592.m_fontSizeBase = i593[42]
  i592.m_fontWeight = i593[43]
  i592.m_enableAutoSizing = !!i593[44]
  i592.m_fontSizeMin = i593[45]
  i592.m_fontSizeMax = i593[46]
  i592.m_fontStyle = i593[47]
  i592.m_HorizontalAlignment = i593[48]
  i592.m_VerticalAlignment = i593[49]
  i592.m_textAlignment = i593[50]
  i592.m_characterSpacing = i593[51]
  i592.m_wordSpacing = i593[52]
  i592.m_lineSpacing = i593[53]
  i592.m_lineSpacingMax = i593[54]
  i592.m_paragraphSpacing = i593[55]
  i592.m_charWidthMaxAdj = i593[56]
  i592.m_enableWordWrapping = !!i593[57]
  i592.m_wordWrappingRatios = i593[58]
  i592.m_overflowMode = i593[59]
  request.r(i593[60], i593[61], 0, i592, 'm_linkedTextComponent')
  request.r(i593[62], i593[63], 0, i592, 'parentLinkedComponent')
  i592.m_enableKerning = !!i593[64]
  i592.m_enableExtraPadding = !!i593[65]
  i592.checkPaddingRequired = !!i593[66]
  i592.m_isRichText = !!i593[67]
  i592.m_parseCtrlCharacters = !!i593[68]
  i592.m_isOrthographic = !!i593[69]
  i592.m_isCullingEnabled = !!i593[70]
  i592.m_horizontalMapping = i593[71]
  i592.m_verticalMapping = i593[72]
  i592.m_uvLineOffset = i593[73]
  i592.m_geometrySortingOrder = i593[74]
  i592.m_IsTextObjectScaleStatic = !!i593[75]
  i592.m_VertexBufferAutoSizeReduction = !!i593[76]
  i592.m_useMaxVisibleDescender = !!i593[77]
  i592.m_pageToDisplay = i593[78]
  i592.m_margin = new pc.Vec4( i593[79], i593[80], i593[81], i593[82] )
  i592.m_isUsingLegacyAnimationComponent = !!i593[83]
  i592.m_isVolumetricText = !!i593[84]
  request.r(i593[85], i593[86], 0, i592, 'm_Material')
  i592.m_Maskable = !!i593[87]
  i592.m_Color = new pc.Color(i593[88], i593[89], i593[90], i593[91])
  i592.m_RaycastTarget = !!i593[92]
  i592.m_RaycastPadding = new pc.Vec4( i593[93], i593[94], i593[95], i593[96] )
  return i592
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i600 = root || request.c( 'TMPro.VertexGradient' )
  var i601 = data
  i600.topLeft = new pc.Color(i601[0], i601[1], i601[2], i601[3])
  i600.topRight = new pc.Color(i601[4], i601[5], i601[6], i601[7])
  i600.bottomLeft = new pc.Color(i601[8], i601[9], i601[10], i601[11])
  i600.bottomRight = new pc.Color(i601[12], i601[13], i601[14], i601[15])
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i602 = root || new pc.UnityMaterial()
  var i603 = data
  i602.name = i603[0]
  request.r(i603[1], i603[2], 0, i602, 'shader')
  i602.renderQueue = i603[3]
  i602.enableInstancing = !!i603[4]
  var i605 = i603[5]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i605[i + 0]) );
  }
  i602.floatParameters = i604
  var i607 = i603[6]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i607[i + 0]) );
  }
  i602.colorParameters = i606
  var i609 = i603[7]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i609[i + 0]) );
  }
  i602.vectorParameters = i608
  var i611 = i603[8]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i611[i + 0]) );
  }
  i602.textureParameters = i610
  var i613 = i603[9]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i613[i + 0]) );
  }
  i602.materialFlags = i612
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i617 = data
  i616.name = i617[0]
  i616.value = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i621 = data
  i620.name = i621[0]
  i620.value = new pc.Color(i621[1], i621[2], i621[3], i621[4])
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i625 = data
  i624.name = i625[0]
  i624.value = new pc.Vec4( i625[1], i625[2], i625[3], i625[4] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i629 = data
  i628.name = i629[0]
  request.r(i629[1], i629[2], 0, i628, 'value')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i633 = data
  i632.name = i633[0]
  i632.enabled = !!i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i635 = data
  i634.name = i635[0]
  i634.index = i635[1]
  i634.startup = !!i635[2]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i637 = data
  i636.position = new pc.Vec3( i637[0], i637[1], i637[2] )
  i636.scale = new pc.Vec3( i637[3], i637[4], i637[5] )
  i636.rotation = new pc.Quat(i637[6], i637[7], i637[8], i637[9])
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i639 = data
  i638.enabled = !!i639[0]
  i638.aspect = i639[1]
  i638.orthographic = !!i639[2]
  i638.orthographicSize = i639[3]
  i638.backgroundColor = new pc.Color(i639[4], i639[5], i639[6], i639[7])
  i638.nearClipPlane = i639[8]
  i638.farClipPlane = i639[9]
  i638.fieldOfView = i639[10]
  i638.depth = i639[11]
  i638.clearFlags = i639[12]
  i638.cullingMask = i639[13]
  i638.rect = i639[14]
  request.r(i639[15], i639[16], 0, i638, 'targetTexture')
  i638.usePhysicalProperties = !!i639[17]
  i638.focalLength = i639[18]
  i638.sensorSize = new pc.Vec2( i639[19], i639[20] )
  i638.lensShift = new pc.Vec2( i639[21], i639[22] )
  i638.gateFit = i639[23]
  i638.commandBufferCount = i639[24]
  i638.cameraType = i639[25]
  return i638
}

Deserializers["GameManager"] = function (request, data, root) {
  var i640 = root || request.c( 'GameManager' )
  var i641 = data
  i640.wordCounter = i641[0]
  i640.maxWordCounter = i641[1]
  request.r(i641[2], i641[3], 0, i640, 'gameplayCanvas')
  i640.hassGameStarted = !!i641[4]
  i640.isGameOver = !!i641[5]
  var i643 = i641[6]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.hearts = i642
  request.r(i641[7], i641[8], 0, i640, 'lossHeartSprite')
  request.r(i641[9], i641[10], 0, i640, 'endCard')
  request.r(i641[11], i641[12], 0, i640, 'startCard')
  request.r(i641[13], i641[14], 0, i640, 'gameBlocker')
  request.r(i641[15], i641[16], 0, i640, 'failBG')
  request.r(i641[17], i641[18], 0, i640, 'textSprite')
  request.r(i641[19], i641[20], 0, i640, 'buttonSprite')
  request.r(i641[21], i641[22], 0, i640, 'lossTextSprite')
  request.r(i641[23], i641[24], 0, i640, 'buttonLossTextSprite')
  request.r(i641[25], i641[26], 0, i640, 'hintButton')
  i640.idleTimer = i641[27]
  return i640
}

Deserializers["AnswerManager"] = function (request, data, root) {
  var i646 = root || request.c( 'AnswerManager' )
  var i647 = data
  i646._iteration = i647[0]
  var i649 = i647[1]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(i649[i + 0]);
  }
  i646.wordList = i648
  var i651 = i647[2]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 1, i650, '')
  }
  i646.hints = i650
  var i653 = i647[3]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('CardRow')))
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 1, i652, '')
  }
  i646.cardRows = i652
  var i655 = i647[4]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i646.answerBoxes = i654
  var i657 = i647[5]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i646.bgs = i656
  var i659 = i647[6]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i646.uiBottons = i658
  i646.quizzesDone = i647[7]
  request.r(i647[8], i647[9], 0, i646, 'handOnSubmit')
  request.r(i647[10], i647[11], 0, i646, 'textPopUp')
  return i646
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i672 = root || request.c( 'AudioManager' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'library')
  i672.sfxPoolSize = i673[2]
  return i672
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_FirstSelected')
  i674.m_sendNavigationEvents = !!i675[2]
  i674.m_DragThreshold = i675[3]
  return i674
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i677 = data
  i676.m_HorizontalAxis = i677[0]
  i676.m_VerticalAxis = i677[1]
  i676.m_SubmitButton = i677[2]
  i676.m_CancelButton = i677[3]
  i676.m_InputActionsPerSecond = i677[4]
  i676.m_RepeatDelay = i677[5]
  i676.m_ForceModuleActive = !!i677[6]
  i676.m_SendPointerHoverToParent = !!i677[7]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i679 = data
  i678.enabled = !!i679[0]
  i678.planeDistance = i679[1]
  i678.referencePixelsPerUnit = i679[2]
  i678.isFallbackOverlay = !!i679[3]
  i678.renderMode = i679[4]
  i678.renderOrder = i679[5]
  i678.sortingLayerName = i679[6]
  i678.sortingOrder = i679[7]
  i678.scaleFactor = i679[8]
  request.r(i679[9], i679[10], 0, i678, 'worldCamera')
  i678.overrideSorting = !!i679[11]
  i678.pixelPerfect = !!i679[12]
  i678.targetDisplay = i679[13]
  i678.overridePixelPerfect = !!i679[14]
  return i678
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i681 = data
  i680.m_UiScaleMode = i681[0]
  i680.m_ReferencePixelsPerUnit = i681[1]
  i680.m_ScaleFactor = i681[2]
  i680.m_ReferenceResolution = new pc.Vec2( i681[3], i681[4] )
  i680.m_ScreenMatchMode = i681[5]
  i680.m_MatchWidthOrHeight = i681[6]
  i680.m_PhysicalUnit = i681[7]
  i680.m_FallbackScreenDPI = i681[8]
  i680.m_DefaultSpriteDPI = i681[9]
  i680.m_DynamicPixelsPerUnit = i681[10]
  i680.m_PresetInfoIsWorld = !!i681[11]
  return i680
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i683 = data
  i682.m_IgnoreReversedGraphics = !!i683[0]
  i682.m_BlockingObjects = i683[1]
  i682.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i683[2] )
  return i682
}

Deserializers["UIFader"] = function (request, data, root) {
  var i684 = root || request.c( 'UIFader' )
  var i685 = data
  i684.hideOnAwake = !!i685[0]
  i684.disableOnHide = !!i685[1]
  i684.fadeInDuration = i685[2]
  i684.fadeOutDuration = i685[3]
  i684.flickerSpeed = i685[4]
  i684.flickers = i685[5]
  return i684
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Button' )
  var i687 = data
  i686.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i687[0], i686.m_OnClick)
  i686.m_Navigation = request.d('UnityEngine.UI.Navigation', i687[1], i686.m_Navigation)
  i686.m_Transition = i687[2]
  i686.m_Colors = request.d('UnityEngine.UI.ColorBlock', i687[3], i686.m_Colors)
  i686.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i687[4], i686.m_SpriteState)
  i686.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i687[5], i686.m_AnimationTriggers)
  i686.m_Interactable = !!i687[6]
  request.r(i687[7], i687[8], 0, i686, 'm_TargetGraphic')
  return i686
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i689 = data
  i688.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i689[0], i688.m_PersistentCalls)
  return i688
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i691 = data
  var i693 = i691[0]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i693.length; i += 1) {
    i692.add(request.d('UnityEngine.Events.PersistentCall', i693[i + 0]));
  }
  i690.m_Calls = i692
  return i690
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'm_Target')
  i696.m_TargetAssemblyTypeName = i697[2]
  i696.m_MethodName = i697[3]
  i696.m_Mode = i697[4]
  i696.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i697[5], i696.m_Arguments)
  i696.m_CallState = i697[6]
  return i696
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'm_ObjectArgument')
  i698.m_ObjectArgumentAssemblyTypeName = i699[2]
  i698.m_IntArgument = i699[3]
  i698.m_FloatArgument = i699[4]
  i698.m_StringArgument = i699[5]
  i698.m_BoolArgument = !!i699[6]
  return i698
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i701 = data
  i700.m_Mode = i701[0]
  i700.m_WrapAround = !!i701[1]
  request.r(i701[2], i701[3], 0, i700, 'm_SelectOnUp')
  request.r(i701[4], i701[5], 0, i700, 'm_SelectOnDown')
  request.r(i701[6], i701[7], 0, i700, 'm_SelectOnLeft')
  request.r(i701[8], i701[9], 0, i700, 'm_SelectOnRight')
  return i700
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i703 = data
  i702.m_NormalColor = new pc.Color(i703[0], i703[1], i703[2], i703[3])
  i702.m_HighlightedColor = new pc.Color(i703[4], i703[5], i703[6], i703[7])
  i702.m_PressedColor = new pc.Color(i703[8], i703[9], i703[10], i703[11])
  i702.m_SelectedColor = new pc.Color(i703[12], i703[13], i703[14], i703[15])
  i702.m_DisabledColor = new pc.Color(i703[16], i703[17], i703[18], i703[19])
  i702.m_ColorMultiplier = i703[20]
  i702.m_FadeDuration = i703[21]
  return i702
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_HighlightedSprite')
  request.r(i705[2], i705[3], 0, i704, 'm_PressedSprite')
  request.r(i705[4], i705[5], 0, i704, 'm_SelectedSprite')
  request.r(i705[6], i705[7], 0, i704, 'm_DisabledSprite')
  return i704
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i707 = data
  i706.m_NormalTrigger = i707[0]
  i706.m_HighlightedTrigger = i707[1]
  i706.m_PressedTrigger = i707[2]
  i706.m_SelectedTrigger = i707[3]
  i706.m_DisabledTrigger = i707[4]
  return i706
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i709 = data
  i708.m_Spacing = i709[0]
  i708.m_ChildForceExpandWidth = !!i709[1]
  i708.m_ChildForceExpandHeight = !!i709[2]
  i708.m_ChildControlWidth = !!i709[3]
  i708.m_ChildControlHeight = !!i709[4]
  i708.m_ChildScaleWidth = !!i709[5]
  i708.m_ChildScaleHeight = !!i709[6]
  i708.m_ReverseArrangement = !!i709[7]
  i708.m_Padding = UnityEngine.RectOffset.FromPaddings(i709[8], i709[9], i709[10], i709[11])
  i708.m_ChildAlignment = i709[12]
  return i708
}

Deserializers["AnswerBox"] = function (request, data, root) {
  var i710 = root || request.c( 'AnswerBox' )
  var i711 = data
  i710.correctLetter = i711[0]
  i710.containsCorrectLetter = !!i711[1]
  i710.hasChildInbound = !!i711[2]
  i710.validPlacementArea = !!i711[3]
  request.r(i711[4], i711[5], 0, i710, 'draggableObjectChild')
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i713 = data
  i712.ambientIntensity = i713[0]
  i712.reflectionIntensity = i713[1]
  i712.ambientMode = i713[2]
  i712.ambientLight = new pc.Color(i713[3], i713[4], i713[5], i713[6])
  i712.ambientSkyColor = new pc.Color(i713[7], i713[8], i713[9], i713[10])
  i712.ambientGroundColor = new pc.Color(i713[11], i713[12], i713[13], i713[14])
  i712.ambientEquatorColor = new pc.Color(i713[15], i713[16], i713[17], i713[18])
  i712.fogColor = new pc.Color(i713[19], i713[20], i713[21], i713[22])
  i712.fogEndDistance = i713[23]
  i712.fogStartDistance = i713[24]
  i712.fogDensity = i713[25]
  i712.fog = !!i713[26]
  request.r(i713[27], i713[28], 0, i712, 'skybox')
  i712.fogMode = i713[29]
  var i715 = i713[30]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i715[i + 0]) );
  }
  i712.lightmaps = i714
  i712.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i713[31], i712.lightProbes)
  i712.lightmapsMode = i713[32]
  i712.mixedBakeMode = i713[33]
  i712.environmentLightingMode = i713[34]
  i712.ambientProbe = new pc.SphericalHarmonicsL2(i713[35])
  i712.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i713[36])
  i712.useReferenceAmbientProbe = !!i713[37]
  request.r(i713[38], i713[39], 0, i712, 'customReflection')
  request.r(i713[40], i713[41], 0, i712, 'defaultReflection')
  i712.defaultReflectionMode = i713[42]
  i712.defaultReflectionResolution = i713[43]
  i712.sunLightObjectId = i713[44]
  i712.pixelLightCount = i713[45]
  i712.defaultReflectionHDR = !!i713[46]
  i712.hasLightDataAsset = !!i713[47]
  i712.hasManualGenerate = !!i713[48]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'lightmapColor')
  request.r(i719[2], i719[3], 0, i718, 'lightmapDirection')
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i720 = root || new UnityEngine.LightProbes()
  var i721 = data
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i729 = data
  var i731 = i729[0]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i731.length; i += 1) {
    i730.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i731[i + 0]));
  }
  i728.ShaderCompilationErrors = i730
  i728.name = i729[1]
  i728.guid = i729[2]
  var i733 = i729[3]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i728.shaderDefinedKeywords = i732
  var i735 = i729[4]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i735[i + 0]) );
  }
  i728.passes = i734
  var i737 = i729[5]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i737[i + 0]) );
  }
  i728.usePasses = i736
  var i739 = i729[6]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i739[i + 0]) );
  }
  i728.defaultParameterValues = i738
  request.r(i729[7], i729[8], 0, i728, 'unityFallbackShader')
  i728.readDepth = !!i729[9]
  i728.isCreatedByShaderGraph = !!i729[10]
  i728.compiled = !!i729[11]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i743 = data
  i742.shaderName = i743[0]
  i742.errorMessage = i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i748 = root || new pc.UnityShaderPass()
  var i749 = data
  i748.id = i749[0]
  i748.subShaderIndex = i749[1]
  i748.name = i749[2]
  i748.passType = i749[3]
  i748.grabPassTextureName = i749[4]
  i748.usePass = !!i749[5]
  i748.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[6], i748.zTest)
  i748.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[7], i748.zWrite)
  i748.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[8], i748.culling)
  i748.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i749[9], i748.blending)
  i748.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i749[10], i748.alphaBlending)
  i748.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[11], i748.colorWriteMask)
  i748.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[12], i748.offsetUnits)
  i748.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[13], i748.offsetFactor)
  i748.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[14], i748.stencilRef)
  i748.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[15], i748.stencilReadMask)
  i748.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[16], i748.stencilWriteMask)
  i748.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i749[17], i748.stencilOp)
  i748.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i749[18], i748.stencilOpFront)
  i748.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i749[19], i748.stencilOpBack)
  var i751 = i749[20]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i751[i + 0]) );
  }
  i748.tags = i750
  var i753 = i749[21]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i748.passDefinedKeywords = i752
  var i755 = i749[22]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i755[i + 0]) );
  }
  i748.passDefinedKeywordGroups = i754
  var i757 = i749[23]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i757[i + 0]) );
  }
  i748.variants = i756
  var i759 = i749[24]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i759[i + 0]) );
  }
  i748.excludedVariants = i758
  i748.hasDepthReader = !!i749[25]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i761 = data
  i760.val = i761[0]
  i760.name = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i763 = data
  i762.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[0], i762.src)
  i762.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[1], i762.dst)
  i762.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[2], i762.op)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i765 = data
  i764.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[0], i764.pass)
  i764.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[1], i764.fail)
  i764.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[2], i764.zFail)
  i764.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i765[3], i764.comp)
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i769 = data
  i768.name = i769[0]
  i768.value = i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( i775[i + 0] );
  }
  i772.keywords = i774
  i772.hasDiscard = !!i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i779 = data
  i778.passId = i779[0]
  i778.subShaderIndex = i779[1]
  var i781 = i779[2]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i778.keywords = i780
  i778.vertexProgram = i779[3]
  i778.fragmentProgram = i779[4]
  i778.exportedForWebGl2 = !!i779[5]
  i778.readDepth = !!i779[6]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'shader')
  i784.pass = i785[2]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i789 = data
  i788.name = i789[0]
  i788.type = i789[1]
  i788.value = new pc.Vec4( i789[2], i789[3], i789[4], i789[5] )
  i788.textureValue = i789[6]
  i788.shaderPropertyFlag = i789[7]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i791 = data
  i790.name = i791[0]
  request.r(i791[1], i791[2], 0, i790, 'texture')
  i790.aabb = i791[3]
  i790.vertices = i791[4]
  i790.triangles = i791[5]
  i790.textureRect = UnityEngine.Rect.MinMaxRect(i791[6], i791[7], i791[8], i791[9])
  i790.packedRect = UnityEngine.Rect.MinMaxRect(i791[10], i791[11], i791[12], i791[13])
  i790.border = new pc.Vec4( i791[14], i791[15], i791[16], i791[17] )
  i790.transparency = i791[18]
  i790.bounds = i791[19]
  i790.pixelsPerUnit = i791[20]
  i790.textureWidth = i791[21]
  i790.textureHeight = i791[22]
  i790.nativeSize = new pc.Vec2( i791[23], i791[24] )
  i790.pivot = new pc.Vec2( i791[25], i791[26] )
  i790.textureRectOffset = new pc.Vec2( i791[27], i791[28] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i793 = data
  i792.name = i793[0]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i795 = data
  i794.name = i795[0]
  i794.wrapMode = i795[1]
  i794.isLooping = !!i795[2]
  i794.length = i795[3]
  var i797 = i795[4]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i797[i + 0]) );
  }
  i794.curves = i796
  var i799 = i795[5]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i799[i + 0]) );
  }
  i794.events = i798
  i794.halfPrecision = !!i795[6]
  i794._frameRate = i795[7]
  i794.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i795[8], i794.localBounds)
  i794.hasMuscleCurves = !!i795[9]
  var i801 = i795[10]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i794.clipMuscleConstant = i800
  i794.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i795[11], i794.clipBindingConstant)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i805 = data
  i804.path = i805[0]
  i804.hash = i805[1]
  i804.componentType = i805[2]
  i804.property = i805[3]
  i804.keys = i805[4]
  var i807 = i805[5]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i807[i + 0]) );
  }
  i804.objectReferenceKeys = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i811 = data
  i810.time = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'value')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i815 = data
  i814.functionName = i815[0]
  i814.floatParameter = i815[1]
  i814.intParameter = i815[2]
  i814.stringParameter = i815[3]
  request.r(i815[4], i815[5], 0, i814, 'objectReferenceParameter')
  i814.time = i815[6]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i817 = data
  i816.center = new pc.Vec3( i817[0], i817[1], i817[2] )
  i816.extends = new pc.Vec3( i817[3], i817[4], i817[5] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i821 = data
  var i823 = i821[0]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i820.genericBindings = i822
  var i825 = i821[1]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i820.pptrCurveMapping = i824
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i827 = data
  i826.name = i827[0]
  i826.ascent = i827[1]
  i826.originalLineHeight = i827[2]
  i826.fontSize = i827[3]
  var i829 = i827[4]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i829[i + 0]) );
  }
  i826.characterInfo = i828
  request.r(i827[5], i827[6], 0, i826, 'texture')
  i826.originalFontSize = i827[7]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i833 = data
  i832.index = i833[0]
  i832.advance = i833[1]
  i832.bearing = i833[2]
  i832.glyphWidth = i833[3]
  i832.glyphHeight = i833[4]
  i832.minX = i833[5]
  i832.maxX = i833[6]
  i832.minY = i833[7]
  i832.maxY = i833[8]
  i832.uvBottomLeftX = i833[9]
  i832.uvBottomLeftY = i833[10]
  i832.uvBottomRightX = i833[11]
  i832.uvBottomRightY = i833[12]
  i832.uvTopLeftX = i833[13]
  i832.uvTopLeftY = i833[14]
  i832.uvTopRightX = i833[15]
  i832.uvTopRightY = i833[16]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i835 = data
  i834.name = i835[0]
  var i837 = i835[1]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i837[i + 0]) );
  }
  i834.layers = i836
  var i839 = i835[2]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i839[i + 0]) );
  }
  i834.parameters = i838
  i834.animationClips = i835[3]
  i834.avatarUnsupported = i835[4]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i843 = data
  i842.name = i843[0]
  i842.defaultWeight = i843[1]
  i842.blendingMode = i843[2]
  i842.avatarMask = i843[3]
  i842.syncedLayerIndex = i843[4]
  i842.syncedLayerAffectsTiming = !!i843[5]
  i842.syncedLayers = i843[6]
  i842.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i843[7], i842.stateMachine)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i845 = data
  i844.id = i845[0]
  i844.name = i845[1]
  i844.path = i845[2]
  var i847 = i845[3]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i847[i + 0]) );
  }
  i844.states = i846
  var i849 = i845[4]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i849[i + 0]) );
  }
  i844.machines = i848
  var i851 = i845[5]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i851[i + 0]) );
  }
  i844.entryStateTransitions = i850
  var i853 = i845[6]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i853[i + 0]) );
  }
  i844.exitStateTransitions = i852
  var i855 = i845[7]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i855[i + 0]) );
  }
  i844.anyStateTransitions = i854
  i844.defaultStateId = i845[8]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i859 = data
  i858.id = i859[0]
  i858.name = i859[1]
  i858.cycleOffset = i859[2]
  i858.cycleOffsetParameter = i859[3]
  i858.cycleOffsetParameterActive = !!i859[4]
  i858.mirror = !!i859[5]
  i858.mirrorParameter = i859[6]
  i858.mirrorParameterActive = !!i859[7]
  i858.motionId = i859[8]
  i858.nameHash = i859[9]
  i858.fullPathHash = i859[10]
  i858.speed = i859[11]
  i858.speedParameter = i859[12]
  i858.speedParameterActive = !!i859[13]
  i858.tag = i859[14]
  i858.tagHash = i859[15]
  i858.writeDefaultValues = !!i859[16]
  var i861 = i859[17]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i858.behaviours = i860
  var i863 = i859[18]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i863[i + 0]) );
  }
  i858.transitions = i862
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i869 = data
  i868.fullPath = i869[0]
  i868.canTransitionToSelf = !!i869[1]
  i868.duration = i869[2]
  i868.exitTime = i869[3]
  i868.hasExitTime = !!i869[4]
  i868.hasFixedDuration = !!i869[5]
  i868.interruptionSource = i869[6]
  i868.offset = i869[7]
  i868.orderedInterruption = !!i869[8]
  i868.destinationStateId = i869[9]
  i868.isExit = !!i869[10]
  i868.mute = !!i869[11]
  i868.solo = !!i869[12]
  var i871 = i869[13]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i871[i + 0]) );
  }
  i868.conditions = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i875 = data
  i874.mode = i875[0]
  i874.parameter = i875[1]
  i874.threshold = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i881 = data
  i880.destinationStateId = i881[0]
  i880.isExit = !!i881[1]
  i880.mute = !!i881[2]
  i880.solo = !!i881[3]
  var i883 = i881[4]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i883[i + 0]) );
  }
  i880.conditions = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i887 = data
  i886.defaultBool = !!i887[0]
  i886.defaultFloat = i887[1]
  i886.defaultInt = i887[2]
  i886.name = i887[3]
  i886.nameHash = i887[4]
  i886.type = i887[5]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i889 = data
  i888.name = i889[0]
  i888.bytes64 = i889[1]
  i888.data = i889[2]
  return i888
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i890 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i891 = data
  i890.hashCode = i891[0]
  request.r(i891[1], i891[2], 0, i890, 'material')
  i890.materialHashCode = i891[3]
  request.r(i891[4], i891[5], 0, i890, 'atlas')
  i890.normalStyle = i891[6]
  i890.normalSpacingOffset = i891[7]
  i890.boldStyle = i891[8]
  i890.boldSpacing = i891[9]
  i890.italicStyle = i891[10]
  i890.tabSize = i891[11]
  i890.m_Version = i891[12]
  i890.m_SourceFontFileGUID = i891[13]
  request.r(i891[14], i891[15], 0, i890, 'm_SourceFontFile_EditorRef')
  request.r(i891[16], i891[17], 0, i890, 'm_SourceFontFile')
  i890.m_AtlasPopulationMode = i891[18]
  i890.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i891[19], i890.m_FaceInfo)
  var i893 = i891[20]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('UnityEngine.TextCore.Glyph', i893[i + 0]));
  }
  i890.m_GlyphTable = i892
  var i895 = i891[21]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('TMPro.TMP_Character', i895[i + 0]));
  }
  i890.m_CharacterTable = i894
  var i897 = i891[22]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i890.m_AtlasTextures = i896
  i890.m_AtlasTextureIndex = i891[23]
  i890.m_IsMultiAtlasTexturesEnabled = !!i891[24]
  i890.m_ClearDynamicDataOnBuild = !!i891[25]
  var i899 = i891[26]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('UnityEngine.TextCore.GlyphRect', i899[i + 0]));
  }
  i890.m_UsedGlyphRects = i898
  var i901 = i891[27]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('UnityEngine.TextCore.GlyphRect', i901[i + 0]));
  }
  i890.m_FreeGlyphRects = i900
  i890.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i891[28], i890.m_fontInfo)
  i890.m_AtlasWidth = i891[29]
  i890.m_AtlasHeight = i891[30]
  i890.m_AtlasPadding = i891[31]
  i890.m_AtlasRenderMode = i891[32]
  var i903 = i891[33]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('TMPro.TMP_Glyph', i903[i + 0]));
  }
  i890.m_glyphInfoList = i902
  i890.m_KerningTable = request.d('TMPro.KerningTable', i891[34], i890.m_KerningTable)
  i890.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i891[35], i890.m_FontFeatureTable)
  var i905 = i891[36]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i890.fallbackFontAssets = i904
  var i907 = i891[37]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i890.m_FallbackFontAssetTable = i906
  i890.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i891[38], i890.m_CreationSettings)
  var i909 = i891[39]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('TMPro.TMP_FontWeightPair', i909[i + 0]) );
  }
  i890.m_FontWeightTable = i908
  var i911 = i891[40]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('TMPro.TMP_FontWeightPair', i911[i + 0]) );
  }
  i890.fontWeights = i910
  return i890
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i913 = data
  i912.m_FaceIndex = i913[0]
  i912.m_FamilyName = i913[1]
  i912.m_StyleName = i913[2]
  i912.m_PointSize = i913[3]
  i912.m_Scale = i913[4]
  i912.m_UnitsPerEM = i913[5]
  i912.m_LineHeight = i913[6]
  i912.m_AscentLine = i913[7]
  i912.m_CapLine = i913[8]
  i912.m_MeanLine = i913[9]
  i912.m_Baseline = i913[10]
  i912.m_DescentLine = i913[11]
  i912.m_SuperscriptOffset = i913[12]
  i912.m_SuperscriptSize = i913[13]
  i912.m_SubscriptOffset = i913[14]
  i912.m_SubscriptSize = i913[15]
  i912.m_UnderlineOffset = i913[16]
  i912.m_UnderlineThickness = i913[17]
  i912.m_StrikethroughOffset = i913[18]
  i912.m_StrikethroughThickness = i913[19]
  i912.m_TabWidth = i913[20]
  return i912
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i917 = data
  i916.m_Index = i917[0]
  i916.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i917[1], i916.m_Metrics)
  i916.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i917[2], i916.m_GlyphRect)
  i916.m_Scale = i917[3]
  i916.m_AtlasIndex = i917[4]
  i916.m_ClassDefinitionType = i917[5]
  return i916
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i919 = data
  i918.m_Width = i919[0]
  i918.m_Height = i919[1]
  i918.m_HorizontalBearingX = i919[2]
  i918.m_HorizontalBearingY = i919[3]
  i918.m_HorizontalAdvance = i919[4]
  return i918
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i921 = data
  i920.m_X = i921[0]
  i920.m_Y = i921[1]
  i920.m_Width = i921[2]
  i920.m_Height = i921[3]
  return i920
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.TMP_Character' )
  var i925 = data
  i924.m_ElementType = i925[0]
  i924.m_Unicode = i925[1]
  i924.m_GlyphIndex = i925[2]
  i924.m_Scale = i925[3]
  return i924
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i931 = data
  i930.Name = i931[0]
  i930.PointSize = i931[1]
  i930.Scale = i931[2]
  i930.CharacterCount = i931[3]
  i930.LineHeight = i931[4]
  i930.Baseline = i931[5]
  i930.Ascender = i931[6]
  i930.CapHeight = i931[7]
  i930.Descender = i931[8]
  i930.CenterLine = i931[9]
  i930.SuperscriptOffset = i931[10]
  i930.SubscriptOffset = i931[11]
  i930.SubSize = i931[12]
  i930.Underline = i931[13]
  i930.UnderlineThickness = i931[14]
  i930.strikethrough = i931[15]
  i930.strikethroughThickness = i931[16]
  i930.TabWidth = i931[17]
  i930.Padding = i931[18]
  i930.AtlasWidth = i931[19]
  i930.AtlasHeight = i931[20]
  return i930
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_Glyph' )
  var i935 = data
  i934.id = i935[0]
  i934.x = i935[1]
  i934.y = i935[2]
  i934.width = i935[3]
  i934.height = i935[4]
  i934.xOffset = i935[5]
  i934.yOffset = i935[6]
  i934.xAdvance = i935[7]
  i934.scale = i935[8]
  return i934
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.KerningTable' )
  var i937 = data
  var i939 = i937[0]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('TMPro.KerningPair', i939[i + 0]));
  }
  i936.kerningPairs = i938
  return i936
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.KerningPair' )
  var i943 = data
  i942.xOffset = i943[0]
  i942.m_FirstGlyph = i943[1]
  i942.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i943[2], i942.m_FirstGlyphAdjustments)
  i942.m_SecondGlyph = i943[3]
  i942.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i943[4], i942.m_SecondGlyphAdjustments)
  i942.m_IgnoreSpacingAdjustments = !!i943[5]
  return i942
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i945 = data
  var i947 = i945[0]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i947[i + 0]));
  }
  i944.m_GlyphPairAdjustmentRecords = i946
  return i944
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i951 = data
  i950.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i951[0], i950.m_FirstAdjustmentRecord)
  i950.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i951[1], i950.m_SecondAdjustmentRecord)
  i950.m_FeatureLookupFlags = i951[2]
  return i950
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i955 = data
  i954.sourceFontFileName = i955[0]
  i954.sourceFontFileGUID = i955[1]
  i954.pointSizeSamplingMode = i955[2]
  i954.pointSize = i955[3]
  i954.padding = i955[4]
  i954.packingMode = i955[5]
  i954.atlasWidth = i955[6]
  i954.atlasHeight = i955[7]
  i954.characterSetSelectionMode = i955[8]
  i954.characterSequence = i955[9]
  i954.referencedFontAssetGUID = i955[10]
  i954.referencedTextAssetGUID = i955[11]
  i954.fontStyle = i955[12]
  i954.fontStyleModifier = i955[13]
  i954.renderMode = i955[14]
  i954.includeFontFeatures = !!i955[15]
  return i954
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'regularTypeface')
  request.r(i959[2], i959[3], 0, i958, 'italicTypeface')
  return i958
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i960 = root || request.c( 'AudioLibrary' )
  var i961 = data
  var i963 = i961[0]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('AudioLibrary+ClipEntry', i963[i + 0]));
  }
  i960.clips = i962
  return i960
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i966 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i967 = data
  i966.key = i967[0]
  i966.channel = i967[1]
  request.r(i967[2], i967[3], 0, i966, 'clip')
  i966.volume = i967[4]
  i966.loop = !!i967[5]
  return i966
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i968 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i969 = data
  i968.useSafeMode = !!i969[0]
  i968.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i969[1], i968.safeModeOptions)
  i968.timeScale = i969[2]
  i968.unscaledTimeScale = i969[3]
  i968.useSmoothDeltaTime = !!i969[4]
  i968.maxSmoothUnscaledTime = i969[5]
  i968.rewindCallbackMode = i969[6]
  i968.showUnityEditorReport = !!i969[7]
  i968.logBehaviour = i969[8]
  i968.drawGizmos = !!i969[9]
  i968.defaultRecyclable = !!i969[10]
  i968.defaultAutoPlay = i969[11]
  i968.defaultUpdateType = i969[12]
  i968.defaultTimeScaleIndependent = !!i969[13]
  i968.defaultEaseType = i969[14]
  i968.defaultEaseOvershootOrAmplitude = i969[15]
  i968.defaultEasePeriod = i969[16]
  i968.defaultAutoKill = !!i969[17]
  i968.defaultLoopType = i969[18]
  i968.debugMode = !!i969[19]
  i968.debugStoreTargetId = !!i969[20]
  i968.showPreviewPanel = !!i969[21]
  i968.storeSettingsLocation = i969[22]
  i968.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i969[23], i968.modules)
  i968.createASMDEF = !!i969[24]
  i968.showPlayingTweens = !!i969[25]
  i968.showPausedTweens = !!i969[26]
  return i968
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i970 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i971 = data
  i970.logBehaviour = i971[0]
  i970.nestedTweenFailureBehaviour = i971[1]
  return i970
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i972 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i973 = data
  i972.showPanel = !!i973[0]
  i972.audioEnabled = !!i973[1]
  i972.physicsEnabled = !!i973[2]
  i972.physics2DEnabled = !!i973[3]
  i972.spriteEnabled = !!i973[4]
  i972.uiEnabled = !!i973[5]
  i972.textMeshProEnabled = !!i973[6]
  i972.tk2DEnabled = !!i973[7]
  i972.deAudioEnabled = !!i973[8]
  i972.deUnityExtendedEnabled = !!i973[9]
  i972.epoOutlineEnabled = !!i973[10]
  return i972
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_Settings' )
  var i975 = data
  i974.m_enableWordWrapping = !!i975[0]
  i974.m_enableKerning = !!i975[1]
  i974.m_enableExtraPadding = !!i975[2]
  i974.m_enableTintAllSprites = !!i975[3]
  i974.m_enableParseEscapeCharacters = !!i975[4]
  i974.m_EnableRaycastTarget = !!i975[5]
  i974.m_GetFontFeaturesAtRuntime = !!i975[6]
  i974.m_missingGlyphCharacter = i975[7]
  i974.m_warningsDisabled = !!i975[8]
  request.r(i975[9], i975[10], 0, i974, 'm_defaultFontAsset')
  i974.m_defaultFontAssetPath = i975[11]
  i974.m_defaultFontSize = i975[12]
  i974.m_defaultAutoSizeMinRatio = i975[13]
  i974.m_defaultAutoSizeMaxRatio = i975[14]
  i974.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i975[15], i975[16] )
  i974.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i975[17], i975[18] )
  i974.m_autoSizeTextContainer = !!i975[19]
  i974.m_IsTextObjectScaleStatic = !!i975[20]
  var i977 = i975[21]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 1, i976, '')
  }
  i974.m_fallbackFontAssets = i976
  i974.m_matchMaterialPreset = !!i975[22]
  request.r(i975[23], i975[24], 0, i974, 'm_defaultSpriteAsset')
  i974.m_defaultSpriteAssetPath = i975[25]
  i974.m_enableEmojiSupport = !!i975[26]
  i974.m_MissingCharacterSpriteUnicode = i975[27]
  i974.m_defaultColorGradientPresetsPath = i975[28]
  request.r(i975[29], i975[30], 0, i974, 'm_defaultStyleSheet')
  i974.m_StyleSheetsResourcePath = i975[31]
  request.r(i975[32], i975[33], 0, i974, 'm_leadingCharacters')
  request.r(i975[34], i975[35], 0, i974, 'm_followingCharacters')
  i974.m_UseModernHangulLineBreakingRules = !!i975[36]
  return i974
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i979 = data
  i978.m_GlyphIndex = i979[0]
  i978.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i979[1], i978.m_GlyphValueRecord)
  return i978
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i981 = data
  i980.m_XPlacement = i981[0]
  i980.m_YPlacement = i981[1]
  i980.m_XAdvance = i981[2]
  i980.m_YAdvance = i981[3]
  return i980
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i983 = data
  i982.hashCode = i983[0]
  request.r(i983[1], i983[2], 0, i982, 'material')
  i982.materialHashCode = i983[3]
  request.r(i983[4], i983[5], 0, i982, 'spriteSheet')
  var i985 = i983[6]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('TMPro.TMP_Sprite', i985[i + 0]));
  }
  i982.spriteInfoList = i984
  var i987 = i983[7]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 1, i986, '')
  }
  i982.fallbackSpriteAssets = i986
  i982.m_Version = i983[8]
  i982.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i983[9], i982.m_FaceInfo)
  var i989 = i983[10]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('TMPro.TMP_SpriteCharacter', i989[i + 0]));
  }
  i982.m_SpriteCharacterTable = i988
  var i991 = i983[11]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('TMPro.TMP_SpriteGlyph', i991[i + 0]));
  }
  i982.m_SpriteGlyphTable = i990
  return i982
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_Sprite' )
  var i995 = data
  i994.name = i995[0]
  i994.hashCode = i995[1]
  i994.unicode = i995[2]
  i994.pivot = new pc.Vec2( i995[3], i995[4] )
  request.r(i995[5], i995[6], 0, i994, 'sprite')
  i994.id = i995[7]
  i994.x = i995[8]
  i994.y = i995[9]
  i994.width = i995[10]
  i994.height = i995[11]
  i994.xOffset = i995[12]
  i994.yOffset = i995[13]
  i994.xAdvance = i995[14]
  i994.scale = i995[15]
  return i994
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1001 = data
  i1000.m_Name = i1001[0]
  i1000.m_HashCode = i1001[1]
  i1000.m_ElementType = i1001[2]
  i1000.m_Unicode = i1001[3]
  i1000.m_GlyphIndex = i1001[4]
  i1000.m_Scale = i1001[5]
  return i1000
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'sprite')
  i1004.m_Index = i1005[2]
  i1004.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1005[3], i1004.m_Metrics)
  i1004.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1005[4], i1004.m_GlyphRect)
  i1004.m_Scale = i1005[5]
  i1004.m_AtlasIndex = i1005[6]
  i1004.m_ClassDefinitionType = i1005[7]
  return i1004
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_Style', i1009[i + 0]));
  }
  i1006.m_StyleList = i1008
  return i1006
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_Style' )
  var i1013 = data
  i1012.m_Name = i1013[0]
  i1012.m_HashCode = i1013[1]
  i1012.m_OpeningDefinition = i1013[2]
  i1012.m_ClosingDefinition = i1013[3]
  i1012.m_OpeningTagArray = i1013[4]
  i1012.m_ClosingTagArray = i1013[5]
  i1012.m_OpeningTagUnicodeArray = i1013[6]
  i1012.m_ClosingTagUnicodeArray = i1013[7]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1017[i + 0]) );
  }
  i1014.files = i1016
  i1014.componentToPrefabIds = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1021 = data
  i1020.path = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'unityObject')
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1025[i + 0]) );
  }
  i1022.scriptsExecutionOrder = i1024
  var i1027 = i1023[1]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1027[i + 0]) );
  }
  i1022.sortingLayers = i1026
  var i1029 = i1023[2]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1029[i + 0]) );
  }
  i1022.cullingLayers = i1028
  i1022.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1023[3], i1022.timeSettings)
  i1022.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1023[4], i1022.physicsSettings)
  i1022.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1023[5], i1022.physics2DSettings)
  i1022.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1023[6], i1022.qualitySettings)
  i1022.enableRealtimeShadows = !!i1023[7]
  i1022.enableAutoInstancing = !!i1023[8]
  i1022.enableDynamicBatching = !!i1023[9]
  i1022.lightmapEncodingQuality = i1023[10]
  i1022.desiredColorSpace = i1023[11]
  var i1031 = i1023[12]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1022.allTags = i1030
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.value = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1039 = data
  i1038.id = i1039[0]
  i1038.name = i1039[1]
  i1038.value = i1039[2]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1043 = data
  i1042.id = i1043[0]
  i1042.name = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1045 = data
  i1044.fixedDeltaTime = i1045[0]
  i1044.maximumDeltaTime = i1045[1]
  i1044.timeScale = i1045[2]
  i1044.maximumParticleTimestep = i1045[3]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1047 = data
  i1046.gravity = new pc.Vec3( i1047[0], i1047[1], i1047[2] )
  i1046.defaultSolverIterations = i1047[3]
  i1046.bounceThreshold = i1047[4]
  i1046.autoSyncTransforms = !!i1047[5]
  i1046.autoSimulation = !!i1047[6]
  var i1049 = i1047[7]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1049[i + 0]) );
  }
  i1046.collisionMatrix = i1048
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1053 = data
  i1052.enabled = !!i1053[0]
  i1052.layerId = i1053[1]
  i1052.otherLayerId = i1053[2]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'material')
  i1054.gravity = new pc.Vec2( i1055[2], i1055[3] )
  i1054.positionIterations = i1055[4]
  i1054.velocityIterations = i1055[5]
  i1054.velocityThreshold = i1055[6]
  i1054.maxLinearCorrection = i1055[7]
  i1054.maxAngularCorrection = i1055[8]
  i1054.maxTranslationSpeed = i1055[9]
  i1054.maxRotationSpeed = i1055[10]
  i1054.baumgarteScale = i1055[11]
  i1054.baumgarteTOIScale = i1055[12]
  i1054.timeToSleep = i1055[13]
  i1054.linearSleepTolerance = i1055[14]
  i1054.angularSleepTolerance = i1055[15]
  i1054.defaultContactOffset = i1055[16]
  i1054.autoSimulation = !!i1055[17]
  i1054.queriesHitTriggers = !!i1055[18]
  i1054.queriesStartInColliders = !!i1055[19]
  i1054.callbacksOnDisable = !!i1055[20]
  i1054.reuseCollisionCallbacks = !!i1055[21]
  i1054.autoSyncTransforms = !!i1055[22]
  var i1057 = i1055[23]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1057[i + 0]) );
  }
  i1054.collisionMatrix = i1056
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.layerId = i1061[1]
  i1060.otherLayerId = i1061[2]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1065[i + 0]) );
  }
  i1062.qualityLevels = i1064
  var i1067 = i1063[1]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1062.names = i1066
  i1062.shadows = i1063[2]
  i1062.anisotropicFiltering = i1063[3]
  i1062.antiAliasing = i1063[4]
  i1062.lodBias = i1063[5]
  i1062.shadowCascades = i1063[6]
  i1062.shadowDistance = i1063[7]
  i1062.shadowmaskMode = i1063[8]
  i1062.shadowProjection = i1063[9]
  i1062.shadowResolution = i1063[10]
  i1062.softParticles = !!i1063[11]
  i1062.softVegetation = !!i1063[12]
  i1062.activeColorSpace = i1063[13]
  i1062.desiredColorSpace = i1063[14]
  i1062.masterTextureLimit = i1063[15]
  i1062.maxQueuedFrames = i1063[16]
  i1062.particleRaycastBudget = i1063[17]
  i1062.pixelLightCount = i1063[18]
  i1062.realtimeReflectionProbes = !!i1063[19]
  i1062.shadowCascade2Split = i1063[20]
  i1062.shadowCascade4Split = new pc.Vec3( i1063[21], i1063[22], i1063[23] )
  i1062.streamingMipmapsActive = !!i1063[24]
  i1062.vSyncCount = i1063[25]
  i1062.asyncUploadBufferSize = i1063[26]
  i1062.asyncUploadTimeSlice = i1063[27]
  i1062.billboardsFaceCameraPosition = !!i1063[28]
  i1062.shadowNearPlaneOffset = i1063[29]
  i1062.streamingMipmapsMemoryBudget = i1063[30]
  i1062.maximumLODLevel = i1063[31]
  i1062.streamingMipmapsAddAllCameras = !!i1063[32]
  i1062.streamingMipmapsMaxLevelReduction = i1063[33]
  i1062.streamingMipmapsRenderersPerFrame = i1063[34]
  i1062.resolutionScalingFixedDPIFactor = i1063[35]
  i1062.streamingMipmapsMaxFileIORequests = i1063[36]
  i1062.currentQualityLevel = i1063[37]
  return i1062
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1071 = data
  i1070.xPlacement = i1071[0]
  i1070.yPlacement = i1071[1]
  i1070.xAdvance = i1071[2]
  i1070.yAdvance = i1071[3]
  return i1070
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[20],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[20],"76":[77],"78":[79],"80":[79],"31":[0],"81":[0],"23":[10],"11":[10],"82":[83],"84":[85],"86":[83],"87":[0],"88":[0],"33":[31],"6":[9,0],"89":[0],"32":[31],"90":[0],"91":[0],"2":[0],"92":[0],"93":[0],"94":[0],"34":[0],"95":[0],"96":[0],"97":[9,0],"98":[0],"99":[0],"100":[0],"101":[0],"102":[9,0],"103":[0],"104":[29],"105":[29],"30":[29],"106":[29],"107":[20],"108":[20],"109":[110],"111":[20],"112":[0],"113":[77,0],"14":[0,9],"114":[0],"115":[9,0],"116":[77],"117":[9,0],"118":[0],"119":[83]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.MonoBehaviour","CardRow","DraggableCard","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","UIPopUp","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","GameManager","UIFader","AnswerManager","AnswerBox","UnityEngine.UI.Button","AudioManager","AudioLibrary","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.Font","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AnimationClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","SmoothScrollRect","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "2025.09.04 - Wordscapes Solitaire - Garden Makeover";

Deserializers.lunaInitializationTime = "09/18/2025 03:07:52";

Deserializers.lunaDaysRunning = "20.3";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Fix-Grandma-s-House";

Deserializers.lunaAppID = "33000";

Deserializers.projectId = "dababea1912949247b1b8218a265c11a";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "107431cc-1c99-43b6-8c45-866fd4314293";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

