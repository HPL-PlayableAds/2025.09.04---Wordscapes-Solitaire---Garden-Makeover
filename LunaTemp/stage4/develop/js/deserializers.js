var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.JointSpring' )
  var i2681 = data
  i2680.spring = i2681[0]
  i2680.damper = i2681[1]
  i2680.targetPosition = i2681[2]
  return i2680
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.JointMotor' )
  var i2683 = data
  i2682.m_TargetVelocity = i2683[0]
  i2682.m_Force = i2683[1]
  i2682.m_FreeSpin = i2683[2]
  return i2682
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.JointLimits' )
  var i2685 = data
  i2684.m_Min = i2685[0]
  i2684.m_Max = i2685[1]
  i2684.m_Bounciness = i2685[2]
  i2684.m_BounceMinVelocity = i2685[3]
  i2684.m_ContactDistance = i2685[4]
  i2684.minBounce = i2685[5]
  i2684.maxBounce = i2685[6]
  return i2684
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.JointDrive' )
  var i2687 = data
  i2686.m_PositionSpring = i2687[0]
  i2686.m_PositionDamper = i2687[1]
  i2686.m_MaximumForce = i2687[2]
  i2686.m_UseAcceleration = i2687[3]
  return i2686
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2689 = data
  i2688.m_Spring = i2689[0]
  i2688.m_Damper = i2689[1]
  return i2688
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2691 = data
  i2690.m_Limit = i2691[0]
  i2690.m_Bounciness = i2691[1]
  i2690.m_ContactDistance = i2691[2]
  return i2690
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2693 = data
  i2692.m_ExtremumSlip = i2693[0]
  i2692.m_ExtremumValue = i2693[1]
  i2692.m_AsymptoteSlip = i2693[2]
  i2692.m_AsymptoteValue = i2693[3]
  i2692.m_Stiffness = i2693[4]
  return i2692
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2695 = data
  i2694.m_LowerAngle = i2695[0]
  i2694.m_UpperAngle = i2695[1]
  return i2694
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2697 = data
  i2696.m_MotorSpeed = i2697[0]
  i2696.m_MaximumMotorTorque = i2697[1]
  return i2696
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2699 = data
  i2698.m_DampingRatio = i2699[0]
  i2698.m_Frequency = i2699[1]
  i2698.m_Angle = i2699[2]
  return i2698
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2701 = data
  i2700.m_LowerTranslation = i2701[0]
  i2700.m_UpperTranslation = i2701[1]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2703 = data
  i2702.name = i2703[0]
  i2702.width = i2703[1]
  i2702.height = i2703[2]
  i2702.mipmapCount = i2703[3]
  i2702.anisoLevel = i2703[4]
  i2702.filterMode = i2703[5]
  i2702.hdr = !!i2703[6]
  i2702.format = i2703[7]
  i2702.wrapMode = i2703[8]
  i2702.alphaIsTransparency = !!i2703[9]
  i2702.alphaSource = i2703[10]
  i2702.graphicsFormat = i2703[11]
  i2702.sRGBTexture = !!i2703[12]
  i2702.desiredColorSpace = i2703[13]
  i2702.wrapU = i2703[14]
  i2702.wrapV = i2703[15]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2705 = data
  i2704.pivot = new pc.Vec2( i2705[0], i2705[1] )
  i2704.anchorMin = new pc.Vec2( i2705[2], i2705[3] )
  i2704.anchorMax = new pc.Vec2( i2705[4], i2705[5] )
  i2704.sizeDelta = new pc.Vec2( i2705[6], i2705[7] )
  i2704.anchoredPosition3D = new pc.Vec3( i2705[8], i2705[9], i2705[10] )
  i2704.rotation = new pc.Quat(i2705[11], i2705[12], i2705[13], i2705[14])
  i2704.scale = new pc.Vec3( i2705[15], i2705[16], i2705[17] )
  return i2704
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2706 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2707 = data
  i2706.m_Spacing = i2707[0]
  i2706.m_ChildForceExpandWidth = !!i2707[1]
  i2706.m_ChildForceExpandHeight = !!i2707[2]
  i2706.m_ChildControlWidth = !!i2707[3]
  i2706.m_ChildControlHeight = !!i2707[4]
  i2706.m_ChildScaleWidth = !!i2707[5]
  i2706.m_ChildScaleHeight = !!i2707[6]
  i2706.m_ReverseArrangement = !!i2707[7]
  i2706.m_Padding = UnityEngine.RectOffset.FromPaddings(i2707[8], i2707[9], i2707[10], i2707[11])
  i2706.m_ChildAlignment = i2707[12]
  return i2706
}

Deserializers["CardRow"] = function (request, data, root) {
  var i2708 = root || request.c( 'CardRow' )
  var i2709 = data
  var i2711 = i2709[0]
  var i2710 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableCard')))
  for(var i = 0; i < i2711.length; i += 2) {
  request.r(i2711[i + 0], i2711[i + 1], 1, i2710, '')
  }
  i2708.cards = i2710
  var i2713 = i2709[1]
  var i2712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.HorizontalLayoutGroup')))
  for(var i = 0; i < i2713.length; i += 2) {
  request.r(i2713[i + 0], i2713[i + 1], 1, i2712, '')
  }
  i2708.cardHolder = i2712
  return i2708
}

Deserializers["DraggableCard"] = function (request, data, root) {
  var i2718 = root || request.c( 'DraggableCard' )
  var i2719 = data
  i2718.canBeDragged = !!i2719[0]
  request.r(i2719[1], i2719[2], 0, i2718, 'image')
  i2718.isInAnswerBox = !!i2719[3]
  request.r(i2719[4], i2719[5], 0, i2718, 'parentAfterDrag')
  request.r(i2719[6], i2719[7], 0, i2718, 'cardSprite')
  request.r(i2719[8], i2719[9], 0, i2718, 'textObject')
  i2718.containedLetter = i2719[10]
  request.r(i2719[11], i2719[12], 0, i2718, 'originalParent')
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2721 = data
  i2720.cullTransparentMesh = !!i2721[0]
  return i2720
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2722 = root || request.c( 'UnityEngine.UI.Image' )
  var i2723 = data
  request.r(i2723[0], i2723[1], 0, i2722, 'm_Sprite')
  i2722.m_Type = i2723[2]
  i2722.m_PreserveAspect = !!i2723[3]
  i2722.m_FillCenter = !!i2723[4]
  i2722.m_FillMethod = i2723[5]
  i2722.m_FillAmount = i2723[6]
  i2722.m_FillClockwise = !!i2723[7]
  i2722.m_FillOrigin = i2723[8]
  i2722.m_UseSpriteMesh = !!i2723[9]
  i2722.m_PixelsPerUnitMultiplier = i2723[10]
  request.r(i2723[11], i2723[12], 0, i2722, 'm_Material')
  i2722.m_Maskable = !!i2723[13]
  i2722.m_Color = new pc.Color(i2723[14], i2723[15], i2723[16], i2723[17])
  i2722.m_RaycastTarget = !!i2723[18]
  i2722.m_RaycastPadding = new pc.Vec4( i2723[19], i2723[20], i2723[21], i2723[22] )
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2725 = data
  i2724.m_Alpha = i2725[0]
  i2724.m_Interactable = !!i2725[1]
  i2724.m_BlocksRaycasts = !!i2725[2]
  i2724.m_IgnoreParentGroups = !!i2725[3]
  i2724.enabled = !!i2725[4]
  return i2724
}

Deserializers["UIPopUp"] = function (request, data, root) {
  var i2726 = root || request.c( 'UIPopUp' )
  var i2727 = data
  i2726.hideOnAwake = !!i2727[0]
  i2726.hideAfterPopUp = !!i2727[1]
  i2726.destroyAfterHide = !!i2727[2]
  i2726.slideInOffset = new pc.Vec2( i2727[3], i2727[4] )
  i2726.popMultiplier = i2727[5]
  i2726.appearDuration = i2727[6]
  i2726.minimizeDuration = i2727[7]
  i2726.fadeDuration = i2727[8]
  i2726.showDuration = i2727[9]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2729 = data
  request.r(i2729[0], i2729[1], 0, i2728, 'animatorController')
  request.r(i2729[2], i2729[3], 0, i2728, 'avatar')
  i2728.updateMode = i2729[4]
  i2728.hasTransformHierarchy = !!i2729[5]
  i2728.applyRootMotion = !!i2729[6]
  var i2731 = i2729[7]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 2) {
  request.r(i2731[i + 0], i2731[i + 1], 2, i2730, '')
  }
  i2728.humanBones = i2730
  i2728.enabled = !!i2729[8]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2735 = data
  i2734.name = i2735[0]
  i2734.tagId = i2735[1]
  i2734.enabled = !!i2735[2]
  i2734.isStatic = !!i2735[3]
  i2734.layer = i2735[4]
  return i2734
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2736 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2737 = data
  i2736.m_hasFontAssetChanged = !!i2737[0]
  request.r(i2737[1], i2737[2], 0, i2736, 'm_baseMaterial')
  i2736.m_maskOffset = new pc.Vec4( i2737[3], i2737[4], i2737[5], i2737[6] )
  i2736.m_text = i2737[7]
  i2736.m_isRightToLeft = !!i2737[8]
  request.r(i2737[9], i2737[10], 0, i2736, 'm_fontAsset')
  request.r(i2737[11], i2737[12], 0, i2736, 'm_sharedMaterial')
  var i2739 = i2737[13]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 2) {
  request.r(i2739[i + 0], i2739[i + 1], 2, i2738, '')
  }
  i2736.m_fontSharedMaterials = i2738
  request.r(i2737[14], i2737[15], 0, i2736, 'm_fontMaterial')
  var i2741 = i2737[16]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 2) {
  request.r(i2741[i + 0], i2741[i + 1], 2, i2740, '')
  }
  i2736.m_fontMaterials = i2740
  i2736.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2737[17], i2737[18], i2737[19], i2737[20])
  i2736.m_fontColor = new pc.Color(i2737[21], i2737[22], i2737[23], i2737[24])
  i2736.m_enableVertexGradient = !!i2737[25]
  i2736.m_colorMode = i2737[26]
  i2736.m_fontColorGradient = request.d('TMPro.VertexGradient', i2737[27], i2736.m_fontColorGradient)
  request.r(i2737[28], i2737[29], 0, i2736, 'm_fontColorGradientPreset')
  request.r(i2737[30], i2737[31], 0, i2736, 'm_spriteAsset')
  i2736.m_tintAllSprites = !!i2737[32]
  request.r(i2737[33], i2737[34], 0, i2736, 'm_StyleSheet')
  i2736.m_TextStyleHashCode = i2737[35]
  i2736.m_overrideHtmlColors = !!i2737[36]
  i2736.m_faceColor = UnityEngine.Color32.ConstructColor(i2737[37], i2737[38], i2737[39], i2737[40])
  i2736.m_fontSize = i2737[41]
  i2736.m_fontSizeBase = i2737[42]
  i2736.m_fontWeight = i2737[43]
  i2736.m_enableAutoSizing = !!i2737[44]
  i2736.m_fontSizeMin = i2737[45]
  i2736.m_fontSizeMax = i2737[46]
  i2736.m_fontStyle = i2737[47]
  i2736.m_HorizontalAlignment = i2737[48]
  i2736.m_VerticalAlignment = i2737[49]
  i2736.m_textAlignment = i2737[50]
  i2736.m_characterSpacing = i2737[51]
  i2736.m_wordSpacing = i2737[52]
  i2736.m_lineSpacing = i2737[53]
  i2736.m_lineSpacingMax = i2737[54]
  i2736.m_paragraphSpacing = i2737[55]
  i2736.m_charWidthMaxAdj = i2737[56]
  i2736.m_enableWordWrapping = !!i2737[57]
  i2736.m_wordWrappingRatios = i2737[58]
  i2736.m_overflowMode = i2737[59]
  request.r(i2737[60], i2737[61], 0, i2736, 'm_linkedTextComponent')
  request.r(i2737[62], i2737[63], 0, i2736, 'parentLinkedComponent')
  i2736.m_enableKerning = !!i2737[64]
  i2736.m_enableExtraPadding = !!i2737[65]
  i2736.checkPaddingRequired = !!i2737[66]
  i2736.m_isRichText = !!i2737[67]
  i2736.m_parseCtrlCharacters = !!i2737[68]
  i2736.m_isOrthographic = !!i2737[69]
  i2736.m_isCullingEnabled = !!i2737[70]
  i2736.m_horizontalMapping = i2737[71]
  i2736.m_verticalMapping = i2737[72]
  i2736.m_uvLineOffset = i2737[73]
  i2736.m_geometrySortingOrder = i2737[74]
  i2736.m_IsTextObjectScaleStatic = !!i2737[75]
  i2736.m_VertexBufferAutoSizeReduction = !!i2737[76]
  i2736.m_useMaxVisibleDescender = !!i2737[77]
  i2736.m_pageToDisplay = i2737[78]
  i2736.m_margin = new pc.Vec4( i2737[79], i2737[80], i2737[81], i2737[82] )
  i2736.m_isUsingLegacyAnimationComponent = !!i2737[83]
  i2736.m_isVolumetricText = !!i2737[84]
  request.r(i2737[85], i2737[86], 0, i2736, 'm_Material')
  i2736.m_Maskable = !!i2737[87]
  i2736.m_Color = new pc.Color(i2737[88], i2737[89], i2737[90], i2737[91])
  i2736.m_RaycastTarget = !!i2737[92]
  i2736.m_RaycastPadding = new pc.Vec4( i2737[93], i2737[94], i2737[95], i2737[96] )
  return i2736
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.VertexGradient' )
  var i2745 = data
  i2744.topLeft = new pc.Color(i2745[0], i2745[1], i2745[2], i2745[3])
  i2744.topRight = new pc.Color(i2745[4], i2745[5], i2745[6], i2745[7])
  i2744.bottomLeft = new pc.Color(i2745[8], i2745[9], i2745[10], i2745[11])
  i2744.bottomRight = new pc.Color(i2745[12], i2745[13], i2745[14], i2745[15])
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2746 = root || new pc.UnityMaterial()
  var i2747 = data
  i2746.name = i2747[0]
  request.r(i2747[1], i2747[2], 0, i2746, 'shader')
  i2746.renderQueue = i2747[3]
  i2746.enableInstancing = !!i2747[4]
  var i2749 = i2747[5]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2749[i + 0]) );
  }
  i2746.floatParameters = i2748
  var i2751 = i2747[6]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2751[i + 0]) );
  }
  i2746.colorParameters = i2750
  var i2753 = i2747[7]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2753[i + 0]) );
  }
  i2746.vectorParameters = i2752
  var i2755 = i2747[8]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2755[i + 0]) );
  }
  i2746.textureParameters = i2754
  var i2757 = i2747[9]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2757[i + 0]) );
  }
  i2746.materialFlags = i2756
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2761 = data
  i2760.name = i2761[0]
  i2760.value = i2761[1]
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2765 = data
  i2764.name = i2765[0]
  i2764.value = new pc.Color(i2765[1], i2765[2], i2765[3], i2765[4])
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2769 = data
  i2768.name = i2769[0]
  i2768.value = new pc.Vec4( i2769[1], i2769[2], i2769[3], i2769[4] )
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2773 = data
  i2772.name = i2773[0]
  request.r(i2773[1], i2773[2], 0, i2772, 'value')
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2777 = data
  i2776.name = i2777[0]
  i2776.enabled = !!i2777[1]
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2779 = data
  i2778.name = i2779[0]
  i2778.index = i2779[1]
  i2778.startup = !!i2779[2]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2781 = data
  i2780.position = new pc.Vec3( i2781[0], i2781[1], i2781[2] )
  i2780.scale = new pc.Vec3( i2781[3], i2781[4], i2781[5] )
  i2780.rotation = new pc.Quat(i2781[6], i2781[7], i2781[8], i2781[9])
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2783 = data
  i2782.enabled = !!i2783[0]
  i2782.aspect = i2783[1]
  i2782.orthographic = !!i2783[2]
  i2782.orthographicSize = i2783[3]
  i2782.backgroundColor = new pc.Color(i2783[4], i2783[5], i2783[6], i2783[7])
  i2782.nearClipPlane = i2783[8]
  i2782.farClipPlane = i2783[9]
  i2782.fieldOfView = i2783[10]
  i2782.depth = i2783[11]
  i2782.clearFlags = i2783[12]
  i2782.cullingMask = i2783[13]
  i2782.rect = i2783[14]
  request.r(i2783[15], i2783[16], 0, i2782, 'targetTexture')
  i2782.usePhysicalProperties = !!i2783[17]
  i2782.focalLength = i2783[18]
  i2782.sensorSize = new pc.Vec2( i2783[19], i2783[20] )
  i2782.lensShift = new pc.Vec2( i2783[21], i2783[22] )
  i2782.gateFit = i2783[23]
  i2782.commandBufferCount = i2783[24]
  i2782.cameraType = i2783[25]
  return i2782
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2784 = root || request.c( 'GameManager' )
  var i2785 = data
  i2784.wordCounter = i2785[0]
  i2784.maxWordCounter = i2785[1]
  i2784.hassGameStarted = !!i2785[2]
  i2784.isGameOver = !!i2785[3]
  var i2787 = i2785[4]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 2, i2786, '')
  }
  i2784.hearts = i2786
  request.r(i2785[5], i2785[6], 0, i2784, 'lossHeartSprite')
  request.r(i2785[7], i2785[8], 0, i2784, 'endCard')
  request.r(i2785[9], i2785[10], 0, i2784, 'startCard')
  request.r(i2785[11], i2785[12], 0, i2784, 'gameplayCanvas')
  request.r(i2785[13], i2785[14], 0, i2784, 'gameBlocker')
  request.r(i2785[15], i2785[16], 0, i2784, 'failBG')
  request.r(i2785[17], i2785[18], 0, i2784, 'textSprite')
  request.r(i2785[19], i2785[20], 0, i2784, 'buttonSprite')
  request.r(i2785[21], i2785[22], 0, i2784, 'lossTextSprite')
  request.r(i2785[23], i2785[24], 0, i2784, 'buttonLossTextSprite')
  return i2784
}

Deserializers["AnswerManager"] = function (request, data, root) {
  var i2790 = root || request.c( 'AnswerManager' )
  var i2791 = data
  i2790._iteration = i2791[0]
  var i2793 = i2791[1]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(i2793[i + 0]);
  }
  i2790.wordList = i2792
  var i2795 = i2791[2]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2795.length; i += 2) {
  request.r(i2795[i + 0], i2795[i + 1], 1, i2794, '')
  }
  i2790.hints = i2794
  var i2797 = i2791[3]
  var i2796 = new (System.Collections.Generic.List$1(Bridge.ns('CardRow')))
  for(var i = 0; i < i2797.length; i += 2) {
  request.r(i2797[i + 0], i2797[i + 1], 1, i2796, '')
  }
  i2790.cardRows = i2796
  var i2799 = i2791[4]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 2) {
  request.r(i2799[i + 0], i2799[i + 1], 2, i2798, '')
  }
  i2790.answerBoxes = i2798
  var i2801 = i2791[5]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 2) {
  request.r(i2801[i + 0], i2801[i + 1], 2, i2800, '')
  }
  i2790.bgs = i2800
  var i2803 = i2791[6]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 2) {
  request.r(i2803[i + 0], i2803[i + 1], 2, i2802, '')
  }
  i2790.uiBottons = i2802
  i2790.quizzesDone = i2791[7]
  request.r(i2791[8], i2791[9], 0, i2790, 'handOnSubmit')
  return i2790
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2816 = root || request.c( 'AudioManager' )
  var i2817 = data
  request.r(i2817[0], i2817[1], 0, i2816, 'library')
  i2816.sfxPoolSize = i2817[2]
  return i2816
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2818 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2819 = data
  request.r(i2819[0], i2819[1], 0, i2818, 'm_FirstSelected')
  i2818.m_sendNavigationEvents = !!i2819[2]
  i2818.m_DragThreshold = i2819[3]
  return i2818
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2820 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2821 = data
  i2820.m_HorizontalAxis = i2821[0]
  i2820.m_VerticalAxis = i2821[1]
  i2820.m_SubmitButton = i2821[2]
  i2820.m_CancelButton = i2821[3]
  i2820.m_InputActionsPerSecond = i2821[4]
  i2820.m_RepeatDelay = i2821[5]
  i2820.m_ForceModuleActive = !!i2821[6]
  i2820.m_SendPointerHoverToParent = !!i2821[7]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2823 = data
  i2822.enabled = !!i2823[0]
  i2822.planeDistance = i2823[1]
  i2822.referencePixelsPerUnit = i2823[2]
  i2822.isFallbackOverlay = !!i2823[3]
  i2822.renderMode = i2823[4]
  i2822.renderOrder = i2823[5]
  i2822.sortingLayerName = i2823[6]
  i2822.sortingOrder = i2823[7]
  i2822.scaleFactor = i2823[8]
  request.r(i2823[9], i2823[10], 0, i2822, 'worldCamera')
  i2822.overrideSorting = !!i2823[11]
  i2822.pixelPerfect = !!i2823[12]
  i2822.targetDisplay = i2823[13]
  i2822.overridePixelPerfect = !!i2823[14]
  return i2822
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2824 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2825 = data
  i2824.m_UiScaleMode = i2825[0]
  i2824.m_ReferencePixelsPerUnit = i2825[1]
  i2824.m_ScaleFactor = i2825[2]
  i2824.m_ReferenceResolution = new pc.Vec2( i2825[3], i2825[4] )
  i2824.m_ScreenMatchMode = i2825[5]
  i2824.m_MatchWidthOrHeight = i2825[6]
  i2824.m_PhysicalUnit = i2825[7]
  i2824.m_FallbackScreenDPI = i2825[8]
  i2824.m_DefaultSpriteDPI = i2825[9]
  i2824.m_DynamicPixelsPerUnit = i2825[10]
  i2824.m_PresetInfoIsWorld = !!i2825[11]
  return i2824
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2826 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2827 = data
  i2826.m_IgnoreReversedGraphics = !!i2827[0]
  i2826.m_BlockingObjects = i2827[1]
  i2826.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2827[2] )
  return i2826
}

Deserializers["UIFader"] = function (request, data, root) {
  var i2828 = root || request.c( 'UIFader' )
  var i2829 = data
  i2828.hideOnAwake = !!i2829[0]
  i2828.disableOnHide = !!i2829[1]
  i2828.fadeInDuration = i2829[2]
  i2828.fadeOutDuration = i2829[3]
  i2828.flickerSpeed = i2829[4]
  i2828.flickers = i2829[5]
  return i2828
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.UI.Button' )
  var i2831 = data
  i2830.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2831[0], i2830.m_OnClick)
  i2830.m_Navigation = request.d('UnityEngine.UI.Navigation', i2831[1], i2830.m_Navigation)
  i2830.m_Transition = i2831[2]
  i2830.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2831[3], i2830.m_Colors)
  i2830.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2831[4], i2830.m_SpriteState)
  i2830.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2831[5], i2830.m_AnimationTriggers)
  i2830.m_Interactable = !!i2831[6]
  request.r(i2831[7], i2831[8], 0, i2830, 'm_TargetGraphic')
  return i2830
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2832 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2833 = data
  i2832.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2833[0], i2832.m_PersistentCalls)
  return i2832
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2834 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2835 = data
  var i2837 = i2835[0]
  var i2836 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.add(request.d('UnityEngine.Events.PersistentCall', i2837[i + 0]));
  }
  i2834.m_Calls = i2836
  return i2834
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2840 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2841 = data
  request.r(i2841[0], i2841[1], 0, i2840, 'm_Target')
  i2840.m_TargetAssemblyTypeName = i2841[2]
  i2840.m_MethodName = i2841[3]
  i2840.m_Mode = i2841[4]
  i2840.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2841[5], i2840.m_Arguments)
  i2840.m_CallState = i2841[6]
  return i2840
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2842 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2843 = data
  request.r(i2843[0], i2843[1], 0, i2842, 'm_ObjectArgument')
  i2842.m_ObjectArgumentAssemblyTypeName = i2843[2]
  i2842.m_IntArgument = i2843[3]
  i2842.m_FloatArgument = i2843[4]
  i2842.m_StringArgument = i2843[5]
  i2842.m_BoolArgument = !!i2843[6]
  return i2842
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2844 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2845 = data
  i2844.m_Mode = i2845[0]
  i2844.m_WrapAround = !!i2845[1]
  request.r(i2845[2], i2845[3], 0, i2844, 'm_SelectOnUp')
  request.r(i2845[4], i2845[5], 0, i2844, 'm_SelectOnDown')
  request.r(i2845[6], i2845[7], 0, i2844, 'm_SelectOnLeft')
  request.r(i2845[8], i2845[9], 0, i2844, 'm_SelectOnRight')
  return i2844
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2847 = data
  i2846.m_NormalColor = new pc.Color(i2847[0], i2847[1], i2847[2], i2847[3])
  i2846.m_HighlightedColor = new pc.Color(i2847[4], i2847[5], i2847[6], i2847[7])
  i2846.m_PressedColor = new pc.Color(i2847[8], i2847[9], i2847[10], i2847[11])
  i2846.m_SelectedColor = new pc.Color(i2847[12], i2847[13], i2847[14], i2847[15])
  i2846.m_DisabledColor = new pc.Color(i2847[16], i2847[17], i2847[18], i2847[19])
  i2846.m_ColorMultiplier = i2847[20]
  i2846.m_FadeDuration = i2847[21]
  return i2846
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2848 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2849 = data
  request.r(i2849[0], i2849[1], 0, i2848, 'm_HighlightedSprite')
  request.r(i2849[2], i2849[3], 0, i2848, 'm_PressedSprite')
  request.r(i2849[4], i2849[5], 0, i2848, 'm_SelectedSprite')
  request.r(i2849[6], i2849[7], 0, i2848, 'm_DisabledSprite')
  return i2848
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2850 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2851 = data
  i2850.m_NormalTrigger = i2851[0]
  i2850.m_HighlightedTrigger = i2851[1]
  i2850.m_PressedTrigger = i2851[2]
  i2850.m_SelectedTrigger = i2851[3]
  i2850.m_DisabledTrigger = i2851[4]
  return i2850
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2852 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2853 = data
  i2852.m_Spacing = i2853[0]
  i2852.m_ChildForceExpandWidth = !!i2853[1]
  i2852.m_ChildForceExpandHeight = !!i2853[2]
  i2852.m_ChildControlWidth = !!i2853[3]
  i2852.m_ChildControlHeight = !!i2853[4]
  i2852.m_ChildScaleWidth = !!i2853[5]
  i2852.m_ChildScaleHeight = !!i2853[6]
  i2852.m_ReverseArrangement = !!i2853[7]
  i2852.m_Padding = UnityEngine.RectOffset.FromPaddings(i2853[8], i2853[9], i2853[10], i2853[11])
  i2852.m_ChildAlignment = i2853[12]
  return i2852
}

Deserializers["AnswerBox"] = function (request, data, root) {
  var i2854 = root || request.c( 'AnswerBox' )
  var i2855 = data
  i2854.correctLetter = i2855[0]
  i2854.containsCorrectLetter = !!i2855[1]
  i2854.hasChildInbound = !!i2855[2]
  i2854.validPlacementArea = !!i2855[3]
  request.r(i2855[4], i2855[5], 0, i2854, 'draggableObjectChild')
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2857 = data
  i2856.ambientIntensity = i2857[0]
  i2856.reflectionIntensity = i2857[1]
  i2856.ambientMode = i2857[2]
  i2856.ambientLight = new pc.Color(i2857[3], i2857[4], i2857[5], i2857[6])
  i2856.ambientSkyColor = new pc.Color(i2857[7], i2857[8], i2857[9], i2857[10])
  i2856.ambientGroundColor = new pc.Color(i2857[11], i2857[12], i2857[13], i2857[14])
  i2856.ambientEquatorColor = new pc.Color(i2857[15], i2857[16], i2857[17], i2857[18])
  i2856.fogColor = new pc.Color(i2857[19], i2857[20], i2857[21], i2857[22])
  i2856.fogEndDistance = i2857[23]
  i2856.fogStartDistance = i2857[24]
  i2856.fogDensity = i2857[25]
  i2856.fog = !!i2857[26]
  request.r(i2857[27], i2857[28], 0, i2856, 'skybox')
  i2856.fogMode = i2857[29]
  var i2859 = i2857[30]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2859[i + 0]) );
  }
  i2856.lightmaps = i2858
  i2856.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2857[31], i2856.lightProbes)
  i2856.lightmapsMode = i2857[32]
  i2856.mixedBakeMode = i2857[33]
  i2856.environmentLightingMode = i2857[34]
  i2856.ambientProbe = new pc.SphericalHarmonicsL2(i2857[35])
  i2856.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2857[36])
  i2856.useReferenceAmbientProbe = !!i2857[37]
  request.r(i2857[38], i2857[39], 0, i2856, 'customReflection')
  request.r(i2857[40], i2857[41], 0, i2856, 'defaultReflection')
  i2856.defaultReflectionMode = i2857[42]
  i2856.defaultReflectionResolution = i2857[43]
  i2856.sunLightObjectId = i2857[44]
  i2856.pixelLightCount = i2857[45]
  i2856.defaultReflectionHDR = !!i2857[46]
  i2856.hasLightDataAsset = !!i2857[47]
  i2856.hasManualGenerate = !!i2857[48]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2863 = data
  request.r(i2863[0], i2863[1], 0, i2862, 'lightmapColor')
  request.r(i2863[2], i2863[3], 0, i2862, 'lightmapDirection')
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2864 = root || new UnityEngine.LightProbes()
  var i2865 = data
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2873 = data
  var i2875 = i2873[0]
  var i2874 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2875[i + 0]));
  }
  i2872.ShaderCompilationErrors = i2874
  i2872.name = i2873[1]
  i2872.guid = i2873[2]
  var i2877 = i2873[3]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( i2877[i + 0] );
  }
  i2872.shaderDefinedKeywords = i2876
  var i2879 = i2873[4]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2879[i + 0]) );
  }
  i2872.passes = i2878
  var i2881 = i2873[5]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2881[i + 0]) );
  }
  i2872.usePasses = i2880
  var i2883 = i2873[6]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2883[i + 0]) );
  }
  i2872.defaultParameterValues = i2882
  request.r(i2873[7], i2873[8], 0, i2872, 'unityFallbackShader')
  i2872.readDepth = !!i2873[9]
  i2872.isCreatedByShaderGraph = !!i2873[10]
  i2872.compiled = !!i2873[11]
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2887 = data
  i2886.shaderName = i2887[0]
  i2886.errorMessage = i2887[1]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2892 = root || new pc.UnityShaderPass()
  var i2893 = data
  i2892.id = i2893[0]
  i2892.subShaderIndex = i2893[1]
  i2892.name = i2893[2]
  i2892.passType = i2893[3]
  i2892.grabPassTextureName = i2893[4]
  i2892.usePass = !!i2893[5]
  i2892.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[6], i2892.zTest)
  i2892.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[7], i2892.zWrite)
  i2892.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[8], i2892.culling)
  i2892.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2893[9], i2892.blending)
  i2892.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2893[10], i2892.alphaBlending)
  i2892.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[11], i2892.colorWriteMask)
  i2892.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[12], i2892.offsetUnits)
  i2892.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[13], i2892.offsetFactor)
  i2892.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[14], i2892.stencilRef)
  i2892.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[15], i2892.stencilReadMask)
  i2892.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[16], i2892.stencilWriteMask)
  i2892.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2893[17], i2892.stencilOp)
  i2892.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2893[18], i2892.stencilOpFront)
  i2892.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2893[19], i2892.stencilOpBack)
  var i2895 = i2893[20]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2895[i + 0]) );
  }
  i2892.tags = i2894
  var i2897 = i2893[21]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( i2897[i + 0] );
  }
  i2892.passDefinedKeywords = i2896
  var i2899 = i2893[22]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2899[i + 0]) );
  }
  i2892.passDefinedKeywordGroups = i2898
  var i2901 = i2893[23]
  var i2900 = []
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2901[i + 0]) );
  }
  i2892.variants = i2900
  var i2903 = i2893[24]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2903[i + 0]) );
  }
  i2892.excludedVariants = i2902
  i2892.hasDepthReader = !!i2893[25]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2905 = data
  i2904.val = i2905[0]
  i2904.name = i2905[1]
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2907 = data
  i2906.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2907[0], i2906.src)
  i2906.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2907[1], i2906.dst)
  i2906.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2907[2], i2906.op)
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2909 = data
  i2908.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[0], i2908.pass)
  i2908.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[1], i2908.fail)
  i2908.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[2], i2908.zFail)
  i2908.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2909[3], i2908.comp)
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2913 = data
  i2912.name = i2913[0]
  i2912.value = i2913[1]
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2917 = data
  var i2919 = i2917[0]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.push( i2919[i + 0] );
  }
  i2916.keywords = i2918
  i2916.hasDiscard = !!i2917[1]
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2923 = data
  i2922.passId = i2923[0]
  i2922.subShaderIndex = i2923[1]
  var i2925 = i2923[2]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( i2925[i + 0] );
  }
  i2922.keywords = i2924
  i2922.vertexProgram = i2923[3]
  i2922.fragmentProgram = i2923[4]
  i2922.exportedForWebGl2 = !!i2923[5]
  i2922.readDepth = !!i2923[6]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2929 = data
  request.r(i2929[0], i2929[1], 0, i2928, 'shader')
  i2928.pass = i2929[2]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2933 = data
  i2932.name = i2933[0]
  i2932.type = i2933[1]
  i2932.value = new pc.Vec4( i2933[2], i2933[3], i2933[4], i2933[5] )
  i2932.textureValue = i2933[6]
  i2932.shaderPropertyFlag = i2933[7]
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2935 = data
  i2934.name = i2935[0]
  request.r(i2935[1], i2935[2], 0, i2934, 'texture')
  i2934.aabb = i2935[3]
  i2934.vertices = i2935[4]
  i2934.triangles = i2935[5]
  i2934.textureRect = UnityEngine.Rect.MinMaxRect(i2935[6], i2935[7], i2935[8], i2935[9])
  i2934.packedRect = UnityEngine.Rect.MinMaxRect(i2935[10], i2935[11], i2935[12], i2935[13])
  i2934.border = new pc.Vec4( i2935[14], i2935[15], i2935[16], i2935[17] )
  i2934.transparency = i2935[18]
  i2934.bounds = i2935[19]
  i2934.pixelsPerUnit = i2935[20]
  i2934.textureWidth = i2935[21]
  i2934.textureHeight = i2935[22]
  i2934.nativeSize = new pc.Vec2( i2935[23], i2935[24] )
  i2934.pivot = new pc.Vec2( i2935[25], i2935[26] )
  i2934.textureRectOffset = new pc.Vec2( i2935[27], i2935[28] )
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2937 = data
  i2936.name = i2937[0]
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2939 = data
  i2938.name = i2939[0]
  i2938.wrapMode = i2939[1]
  i2938.isLooping = !!i2939[2]
  i2938.length = i2939[3]
  var i2941 = i2939[4]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2941[i + 0]) );
  }
  i2938.curves = i2940
  var i2943 = i2939[5]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2943[i + 0]) );
  }
  i2938.events = i2942
  i2938.halfPrecision = !!i2939[6]
  i2938._frameRate = i2939[7]
  i2938.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2939[8], i2938.localBounds)
  i2938.hasMuscleCurves = !!i2939[9]
  var i2945 = i2939[10]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.push( i2945[i + 0] );
  }
  i2938.clipMuscleConstant = i2944
  i2938.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2939[11], i2938.clipBindingConstant)
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2949 = data
  i2948.path = i2949[0]
  i2948.hash = i2949[1]
  i2948.componentType = i2949[2]
  i2948.property = i2949[3]
  i2948.keys = i2949[4]
  var i2951 = i2949[5]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 1) {
    i2950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2951[i + 0]) );
  }
  i2948.objectReferenceKeys = i2950
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2955 = data
  i2954.time = i2955[0]
  request.r(i2955[1], i2955[2], 0, i2954, 'value')
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2959 = data
  i2958.functionName = i2959[0]
  i2958.floatParameter = i2959[1]
  i2958.intParameter = i2959[2]
  i2958.stringParameter = i2959[3]
  request.r(i2959[4], i2959[5], 0, i2958, 'objectReferenceParameter')
  i2958.time = i2959[6]
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2961 = data
  i2960.center = new pc.Vec3( i2961[0], i2961[1], i2961[2] )
  i2960.extends = new pc.Vec3( i2961[3], i2961[4], i2961[5] )
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2965 = data
  var i2967 = i2965[0]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.push( i2967[i + 0] );
  }
  i2964.genericBindings = i2966
  var i2969 = i2965[1]
  var i2968 = []
  for(var i = 0; i < i2969.length; i += 1) {
    i2968.push( i2969[i + 0] );
  }
  i2964.pptrCurveMapping = i2968
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2971 = data
  i2970.name = i2971[0]
  i2970.ascent = i2971[1]
  i2970.originalLineHeight = i2971[2]
  i2970.fontSize = i2971[3]
  var i2973 = i2971[4]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 1) {
    i2972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2973[i + 0]) );
  }
  i2970.characterInfo = i2972
  request.r(i2971[5], i2971[6], 0, i2970, 'texture')
  i2970.originalFontSize = i2971[7]
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2977 = data
  i2976.index = i2977[0]
  i2976.advance = i2977[1]
  i2976.bearing = i2977[2]
  i2976.glyphWidth = i2977[3]
  i2976.glyphHeight = i2977[4]
  i2976.minX = i2977[5]
  i2976.maxX = i2977[6]
  i2976.minY = i2977[7]
  i2976.maxY = i2977[8]
  i2976.uvBottomLeftX = i2977[9]
  i2976.uvBottomLeftY = i2977[10]
  i2976.uvBottomRightX = i2977[11]
  i2976.uvBottomRightY = i2977[12]
  i2976.uvTopLeftX = i2977[13]
  i2976.uvTopLeftY = i2977[14]
  i2976.uvTopRightX = i2977[15]
  i2976.uvTopRightY = i2977[16]
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2979 = data
  i2978.name = i2979[0]
  var i2981 = i2979[1]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2981[i + 0]) );
  }
  i2978.layers = i2980
  var i2983 = i2979[2]
  var i2982 = []
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2983[i + 0]) );
  }
  i2978.parameters = i2982
  i2978.animationClips = i2979[3]
  i2978.avatarUnsupported = i2979[4]
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2987 = data
  i2986.name = i2987[0]
  i2986.defaultWeight = i2987[1]
  i2986.blendingMode = i2987[2]
  i2986.avatarMask = i2987[3]
  i2986.syncedLayerIndex = i2987[4]
  i2986.syncedLayerAffectsTiming = !!i2987[5]
  i2986.syncedLayers = i2987[6]
  i2986.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2987[7], i2986.stateMachine)
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2989 = data
  i2988.id = i2989[0]
  i2988.name = i2989[1]
  i2988.path = i2989[2]
  var i2991 = i2989[3]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2991[i + 0]) );
  }
  i2988.states = i2990
  var i2993 = i2989[4]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 1) {
    i2992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2993[i + 0]) );
  }
  i2988.machines = i2992
  var i2995 = i2989[5]
  var i2994 = []
  for(var i = 0; i < i2995.length; i += 1) {
    i2994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2995[i + 0]) );
  }
  i2988.entryStateTransitions = i2994
  var i2997 = i2989[6]
  var i2996 = []
  for(var i = 0; i < i2997.length; i += 1) {
    i2996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2997[i + 0]) );
  }
  i2988.exitStateTransitions = i2996
  var i2999 = i2989[7]
  var i2998 = []
  for(var i = 0; i < i2999.length; i += 1) {
    i2998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2999[i + 0]) );
  }
  i2988.anyStateTransitions = i2998
  i2988.defaultStateId = i2989[8]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3003 = data
  i3002.id = i3003[0]
  i3002.name = i3003[1]
  i3002.cycleOffset = i3003[2]
  i3002.cycleOffsetParameter = i3003[3]
  i3002.cycleOffsetParameterActive = !!i3003[4]
  i3002.mirror = !!i3003[5]
  i3002.mirrorParameter = i3003[6]
  i3002.mirrorParameterActive = !!i3003[7]
  i3002.motionId = i3003[8]
  i3002.nameHash = i3003[9]
  i3002.fullPathHash = i3003[10]
  i3002.speed = i3003[11]
  i3002.speedParameter = i3003[12]
  i3002.speedParameterActive = !!i3003[13]
  i3002.tag = i3003[14]
  i3002.tagHash = i3003[15]
  i3002.writeDefaultValues = !!i3003[16]
  var i3005 = i3003[17]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 2) {
  request.r(i3005[i + 0], i3005[i + 1], 2, i3004, '')
  }
  i3002.behaviours = i3004
  var i3007 = i3003[18]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3007[i + 0]) );
  }
  i3002.transitions = i3006
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3013 = data
  i3012.fullPath = i3013[0]
  i3012.canTransitionToSelf = !!i3013[1]
  i3012.duration = i3013[2]
  i3012.exitTime = i3013[3]
  i3012.hasExitTime = !!i3013[4]
  i3012.hasFixedDuration = !!i3013[5]
  i3012.interruptionSource = i3013[6]
  i3012.offset = i3013[7]
  i3012.orderedInterruption = !!i3013[8]
  i3012.destinationStateId = i3013[9]
  i3012.isExit = !!i3013[10]
  i3012.mute = !!i3013[11]
  i3012.solo = !!i3013[12]
  var i3015 = i3013[13]
  var i3014 = []
  for(var i = 0; i < i3015.length; i += 1) {
    i3014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3015[i + 0]) );
  }
  i3012.conditions = i3014
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3019 = data
  i3018.mode = i3019[0]
  i3018.parameter = i3019[1]
  i3018.threshold = i3019[2]
  return i3018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3025 = data
  i3024.destinationStateId = i3025[0]
  i3024.isExit = !!i3025[1]
  i3024.mute = !!i3025[2]
  i3024.solo = !!i3025[3]
  var i3027 = i3025[4]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3027[i + 0]) );
  }
  i3024.conditions = i3026
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3031 = data
  i3030.defaultBool = !!i3031[0]
  i3030.defaultFloat = i3031[1]
  i3030.defaultInt = i3031[2]
  i3030.name = i3031[3]
  i3030.nameHash = i3031[4]
  i3030.type = i3031[5]
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3033 = data
  i3032.name = i3033[0]
  i3032.bytes64 = i3033[1]
  i3032.data = i3033[2]
  return i3032
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3034 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3035 = data
  i3034.hashCode = i3035[0]
  request.r(i3035[1], i3035[2], 0, i3034, 'material')
  i3034.materialHashCode = i3035[3]
  request.r(i3035[4], i3035[5], 0, i3034, 'atlas')
  i3034.normalStyle = i3035[6]
  i3034.normalSpacingOffset = i3035[7]
  i3034.boldStyle = i3035[8]
  i3034.boldSpacing = i3035[9]
  i3034.italicStyle = i3035[10]
  i3034.tabSize = i3035[11]
  i3034.m_Version = i3035[12]
  i3034.m_SourceFontFileGUID = i3035[13]
  request.r(i3035[14], i3035[15], 0, i3034, 'm_SourceFontFile_EditorRef')
  request.r(i3035[16], i3035[17], 0, i3034, 'm_SourceFontFile')
  i3034.m_AtlasPopulationMode = i3035[18]
  i3034.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3035[19], i3034.m_FaceInfo)
  var i3037 = i3035[20]
  var i3036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.add(request.d('UnityEngine.TextCore.Glyph', i3037[i + 0]));
  }
  i3034.m_GlyphTable = i3036
  var i3039 = i3035[21]
  var i3038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.add(request.d('TMPro.TMP_Character', i3039[i + 0]));
  }
  i3034.m_CharacterTable = i3038
  var i3041 = i3035[22]
  var i3040 = []
  for(var i = 0; i < i3041.length; i += 2) {
  request.r(i3041[i + 0], i3041[i + 1], 2, i3040, '')
  }
  i3034.m_AtlasTextures = i3040
  i3034.m_AtlasTextureIndex = i3035[23]
  i3034.m_IsMultiAtlasTexturesEnabled = !!i3035[24]
  i3034.m_ClearDynamicDataOnBuild = !!i3035[25]
  var i3043 = i3035[26]
  var i3042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3043.length; i += 1) {
    i3042.add(request.d('UnityEngine.TextCore.GlyphRect', i3043[i + 0]));
  }
  i3034.m_UsedGlyphRects = i3042
  var i3045 = i3035[27]
  var i3044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3045.length; i += 1) {
    i3044.add(request.d('UnityEngine.TextCore.GlyphRect', i3045[i + 0]));
  }
  i3034.m_FreeGlyphRects = i3044
  i3034.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3035[28], i3034.m_fontInfo)
  i3034.m_AtlasWidth = i3035[29]
  i3034.m_AtlasHeight = i3035[30]
  i3034.m_AtlasPadding = i3035[31]
  i3034.m_AtlasRenderMode = i3035[32]
  var i3047 = i3035[33]
  var i3046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3047.length; i += 1) {
    i3046.add(request.d('TMPro.TMP_Glyph', i3047[i + 0]));
  }
  i3034.m_glyphInfoList = i3046
  i3034.m_KerningTable = request.d('TMPro.KerningTable', i3035[34], i3034.m_KerningTable)
  i3034.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3035[35], i3034.m_FontFeatureTable)
  var i3049 = i3035[36]
  var i3048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3049.length; i += 2) {
  request.r(i3049[i + 0], i3049[i + 1], 1, i3048, '')
  }
  i3034.fallbackFontAssets = i3048
  var i3051 = i3035[37]
  var i3050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3051.length; i += 2) {
  request.r(i3051[i + 0], i3051[i + 1], 1, i3050, '')
  }
  i3034.m_FallbackFontAssetTable = i3050
  i3034.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3035[38], i3034.m_CreationSettings)
  var i3053 = i3035[39]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( request.d('TMPro.TMP_FontWeightPair', i3053[i + 0]) );
  }
  i3034.m_FontWeightTable = i3052
  var i3055 = i3035[40]
  var i3054 = []
  for(var i = 0; i < i3055.length; i += 1) {
    i3054.push( request.d('TMPro.TMP_FontWeightPair', i3055[i + 0]) );
  }
  i3034.fontWeights = i3054
  return i3034
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3056 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3057 = data
  i3056.m_FaceIndex = i3057[0]
  i3056.m_FamilyName = i3057[1]
  i3056.m_StyleName = i3057[2]
  i3056.m_PointSize = i3057[3]
  i3056.m_Scale = i3057[4]
  i3056.m_UnitsPerEM = i3057[5]
  i3056.m_LineHeight = i3057[6]
  i3056.m_AscentLine = i3057[7]
  i3056.m_CapLine = i3057[8]
  i3056.m_MeanLine = i3057[9]
  i3056.m_Baseline = i3057[10]
  i3056.m_DescentLine = i3057[11]
  i3056.m_SuperscriptOffset = i3057[12]
  i3056.m_SuperscriptSize = i3057[13]
  i3056.m_SubscriptOffset = i3057[14]
  i3056.m_SubscriptSize = i3057[15]
  i3056.m_UnderlineOffset = i3057[16]
  i3056.m_UnderlineThickness = i3057[17]
  i3056.m_StrikethroughOffset = i3057[18]
  i3056.m_StrikethroughThickness = i3057[19]
  i3056.m_TabWidth = i3057[20]
  return i3056
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3060 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3061 = data
  i3060.m_Index = i3061[0]
  i3060.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3061[1], i3060.m_Metrics)
  i3060.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3061[2], i3060.m_GlyphRect)
  i3060.m_Scale = i3061[3]
  i3060.m_AtlasIndex = i3061[4]
  i3060.m_ClassDefinitionType = i3061[5]
  return i3060
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3062 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3063 = data
  i3062.m_Width = i3063[0]
  i3062.m_Height = i3063[1]
  i3062.m_HorizontalBearingX = i3063[2]
  i3062.m_HorizontalBearingY = i3063[3]
  i3062.m_HorizontalAdvance = i3063[4]
  return i3062
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3064 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3065 = data
  i3064.m_X = i3065[0]
  i3064.m_Y = i3065[1]
  i3064.m_Width = i3065[2]
  i3064.m_Height = i3065[3]
  return i3064
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3068 = root || request.c( 'TMPro.TMP_Character' )
  var i3069 = data
  i3068.m_ElementType = i3069[0]
  i3068.m_Unicode = i3069[1]
  i3068.m_GlyphIndex = i3069[2]
  i3068.m_Scale = i3069[3]
  return i3068
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3074 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3075 = data
  i3074.Name = i3075[0]
  i3074.PointSize = i3075[1]
  i3074.Scale = i3075[2]
  i3074.CharacterCount = i3075[3]
  i3074.LineHeight = i3075[4]
  i3074.Baseline = i3075[5]
  i3074.Ascender = i3075[6]
  i3074.CapHeight = i3075[7]
  i3074.Descender = i3075[8]
  i3074.CenterLine = i3075[9]
  i3074.SuperscriptOffset = i3075[10]
  i3074.SubscriptOffset = i3075[11]
  i3074.SubSize = i3075[12]
  i3074.Underline = i3075[13]
  i3074.UnderlineThickness = i3075[14]
  i3074.strikethrough = i3075[15]
  i3074.strikethroughThickness = i3075[16]
  i3074.TabWidth = i3075[17]
  i3074.Padding = i3075[18]
  i3074.AtlasWidth = i3075[19]
  i3074.AtlasHeight = i3075[20]
  return i3074
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3078 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3079 = data
  i3078.id = i3079[0]
  i3078.x = i3079[1]
  i3078.y = i3079[2]
  i3078.width = i3079[3]
  i3078.height = i3079[4]
  i3078.xOffset = i3079[5]
  i3078.yOffset = i3079[6]
  i3078.xAdvance = i3079[7]
  i3078.scale = i3079[8]
  return i3078
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3080 = root || request.c( 'TMPro.KerningTable' )
  var i3081 = data
  var i3083 = i3081[0]
  var i3082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3083.length; i += 1) {
    i3082.add(request.d('TMPro.KerningPair', i3083[i + 0]));
  }
  i3080.kerningPairs = i3082
  return i3080
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3086 = root || request.c( 'TMPro.KerningPair' )
  var i3087 = data
  i3086.xOffset = i3087[0]
  i3086.m_FirstGlyph = i3087[1]
  i3086.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3087[2], i3086.m_FirstGlyphAdjustments)
  i3086.m_SecondGlyph = i3087[3]
  i3086.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3087[4], i3086.m_SecondGlyphAdjustments)
  i3086.m_IgnoreSpacingAdjustments = !!i3087[5]
  return i3086
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3088 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3089 = data
  var i3091 = i3089[0]
  var i3090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3091.length; i += 1) {
    i3090.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3091[i + 0]));
  }
  i3088.m_GlyphPairAdjustmentRecords = i3090
  return i3088
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3094 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3095 = data
  i3094.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3095[0], i3094.m_FirstAdjustmentRecord)
  i3094.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3095[1], i3094.m_SecondAdjustmentRecord)
  i3094.m_FeatureLookupFlags = i3095[2]
  return i3094
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3098 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3099 = data
  i3098.sourceFontFileName = i3099[0]
  i3098.sourceFontFileGUID = i3099[1]
  i3098.pointSizeSamplingMode = i3099[2]
  i3098.pointSize = i3099[3]
  i3098.padding = i3099[4]
  i3098.packingMode = i3099[5]
  i3098.atlasWidth = i3099[6]
  i3098.atlasHeight = i3099[7]
  i3098.characterSetSelectionMode = i3099[8]
  i3098.characterSequence = i3099[9]
  i3098.referencedFontAssetGUID = i3099[10]
  i3098.referencedTextAssetGUID = i3099[11]
  i3098.fontStyle = i3099[12]
  i3098.fontStyleModifier = i3099[13]
  i3098.renderMode = i3099[14]
  i3098.includeFontFeatures = !!i3099[15]
  return i3098
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3102 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3103 = data
  request.r(i3103[0], i3103[1], 0, i3102, 'regularTypeface')
  request.r(i3103[2], i3103[3], 0, i3102, 'italicTypeface')
  return i3102
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i3104 = root || request.c( 'AudioLibrary' )
  var i3105 = data
  var i3107 = i3105[0]
  var i3106 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i3107.length; i += 1) {
    i3106.add(request.d('AudioLibrary+ClipEntry', i3107[i + 0]));
  }
  i3104.clips = i3106
  return i3104
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i3110 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i3111 = data
  i3110.key = i3111[0]
  i3110.channel = i3111[1]
  request.r(i3111[2], i3111[3], 0, i3110, 'clip')
  i3110.volume = i3111[4]
  i3110.loop = !!i3111[5]
  return i3110
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3112 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3113 = data
  i3112.useSafeMode = !!i3113[0]
  i3112.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3113[1], i3112.safeModeOptions)
  i3112.timeScale = i3113[2]
  i3112.unscaledTimeScale = i3113[3]
  i3112.useSmoothDeltaTime = !!i3113[4]
  i3112.maxSmoothUnscaledTime = i3113[5]
  i3112.rewindCallbackMode = i3113[6]
  i3112.showUnityEditorReport = !!i3113[7]
  i3112.logBehaviour = i3113[8]
  i3112.drawGizmos = !!i3113[9]
  i3112.defaultRecyclable = !!i3113[10]
  i3112.defaultAutoPlay = i3113[11]
  i3112.defaultUpdateType = i3113[12]
  i3112.defaultTimeScaleIndependent = !!i3113[13]
  i3112.defaultEaseType = i3113[14]
  i3112.defaultEaseOvershootOrAmplitude = i3113[15]
  i3112.defaultEasePeriod = i3113[16]
  i3112.defaultAutoKill = !!i3113[17]
  i3112.defaultLoopType = i3113[18]
  i3112.debugMode = !!i3113[19]
  i3112.debugStoreTargetId = !!i3113[20]
  i3112.showPreviewPanel = !!i3113[21]
  i3112.storeSettingsLocation = i3113[22]
  i3112.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3113[23], i3112.modules)
  i3112.createASMDEF = !!i3113[24]
  i3112.showPlayingTweens = !!i3113[25]
  i3112.showPausedTweens = !!i3113[26]
  return i3112
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3114 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3115 = data
  i3114.logBehaviour = i3115[0]
  i3114.nestedTweenFailureBehaviour = i3115[1]
  return i3114
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3116 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3117 = data
  i3116.showPanel = !!i3117[0]
  i3116.audioEnabled = !!i3117[1]
  i3116.physicsEnabled = !!i3117[2]
  i3116.physics2DEnabled = !!i3117[3]
  i3116.spriteEnabled = !!i3117[4]
  i3116.uiEnabled = !!i3117[5]
  i3116.textMeshProEnabled = !!i3117[6]
  i3116.tk2DEnabled = !!i3117[7]
  i3116.deAudioEnabled = !!i3117[8]
  i3116.deUnityExtendedEnabled = !!i3117[9]
  i3116.epoOutlineEnabled = !!i3117[10]
  return i3116
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3118 = root || request.c( 'TMPro.TMP_Settings' )
  var i3119 = data
  i3118.m_enableWordWrapping = !!i3119[0]
  i3118.m_enableKerning = !!i3119[1]
  i3118.m_enableExtraPadding = !!i3119[2]
  i3118.m_enableTintAllSprites = !!i3119[3]
  i3118.m_enableParseEscapeCharacters = !!i3119[4]
  i3118.m_EnableRaycastTarget = !!i3119[5]
  i3118.m_GetFontFeaturesAtRuntime = !!i3119[6]
  i3118.m_missingGlyphCharacter = i3119[7]
  i3118.m_warningsDisabled = !!i3119[8]
  request.r(i3119[9], i3119[10], 0, i3118, 'm_defaultFontAsset')
  i3118.m_defaultFontAssetPath = i3119[11]
  i3118.m_defaultFontSize = i3119[12]
  i3118.m_defaultAutoSizeMinRatio = i3119[13]
  i3118.m_defaultAutoSizeMaxRatio = i3119[14]
  i3118.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3119[15], i3119[16] )
  i3118.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3119[17], i3119[18] )
  i3118.m_autoSizeTextContainer = !!i3119[19]
  i3118.m_IsTextObjectScaleStatic = !!i3119[20]
  var i3121 = i3119[21]
  var i3120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3121.length; i += 2) {
  request.r(i3121[i + 0], i3121[i + 1], 1, i3120, '')
  }
  i3118.m_fallbackFontAssets = i3120
  i3118.m_matchMaterialPreset = !!i3119[22]
  request.r(i3119[23], i3119[24], 0, i3118, 'm_defaultSpriteAsset')
  i3118.m_defaultSpriteAssetPath = i3119[25]
  i3118.m_enableEmojiSupport = !!i3119[26]
  i3118.m_MissingCharacterSpriteUnicode = i3119[27]
  i3118.m_defaultColorGradientPresetsPath = i3119[28]
  request.r(i3119[29], i3119[30], 0, i3118, 'm_defaultStyleSheet')
  i3118.m_StyleSheetsResourcePath = i3119[31]
  request.r(i3119[32], i3119[33], 0, i3118, 'm_leadingCharacters')
  request.r(i3119[34], i3119[35], 0, i3118, 'm_followingCharacters')
  i3118.m_UseModernHangulLineBreakingRules = !!i3119[36]
  return i3118
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3122 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3123 = data
  i3122.m_GlyphIndex = i3123[0]
  i3122.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3123[1], i3122.m_GlyphValueRecord)
  return i3122
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3124 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3125 = data
  i3124.m_XPlacement = i3125[0]
  i3124.m_YPlacement = i3125[1]
  i3124.m_XAdvance = i3125[2]
  i3124.m_YAdvance = i3125[3]
  return i3124
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3126 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3127 = data
  i3126.hashCode = i3127[0]
  request.r(i3127[1], i3127[2], 0, i3126, 'material')
  i3126.materialHashCode = i3127[3]
  request.r(i3127[4], i3127[5], 0, i3126, 'spriteSheet')
  var i3129 = i3127[6]
  var i3128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3129.length; i += 1) {
    i3128.add(request.d('TMPro.TMP_Sprite', i3129[i + 0]));
  }
  i3126.spriteInfoList = i3128
  var i3131 = i3127[7]
  var i3130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3131.length; i += 2) {
  request.r(i3131[i + 0], i3131[i + 1], 1, i3130, '')
  }
  i3126.fallbackSpriteAssets = i3130
  i3126.m_Version = i3127[8]
  i3126.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3127[9], i3126.m_FaceInfo)
  var i3133 = i3127[10]
  var i3132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3133.length; i += 1) {
    i3132.add(request.d('TMPro.TMP_SpriteCharacter', i3133[i + 0]));
  }
  i3126.m_SpriteCharacterTable = i3132
  var i3135 = i3127[11]
  var i3134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3135.length; i += 1) {
    i3134.add(request.d('TMPro.TMP_SpriteGlyph', i3135[i + 0]));
  }
  i3126.m_SpriteGlyphTable = i3134
  return i3126
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3138 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3139 = data
  i3138.name = i3139[0]
  i3138.hashCode = i3139[1]
  i3138.unicode = i3139[2]
  i3138.pivot = new pc.Vec2( i3139[3], i3139[4] )
  request.r(i3139[5], i3139[6], 0, i3138, 'sprite')
  i3138.id = i3139[7]
  i3138.x = i3139[8]
  i3138.y = i3139[9]
  i3138.width = i3139[10]
  i3138.height = i3139[11]
  i3138.xOffset = i3139[12]
  i3138.yOffset = i3139[13]
  i3138.xAdvance = i3139[14]
  i3138.scale = i3139[15]
  return i3138
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3144 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3145 = data
  i3144.m_Name = i3145[0]
  i3144.m_HashCode = i3145[1]
  i3144.m_ElementType = i3145[2]
  i3144.m_Unicode = i3145[3]
  i3144.m_GlyphIndex = i3145[4]
  i3144.m_Scale = i3145[5]
  return i3144
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3148 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3149 = data
  request.r(i3149[0], i3149[1], 0, i3148, 'sprite')
  i3148.m_Index = i3149[2]
  i3148.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3149[3], i3148.m_Metrics)
  i3148.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3149[4], i3148.m_GlyphRect)
  i3148.m_Scale = i3149[5]
  i3148.m_AtlasIndex = i3149[6]
  i3148.m_ClassDefinitionType = i3149[7]
  return i3148
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3150 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3151 = data
  var i3153 = i3151[0]
  var i3152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3153.length; i += 1) {
    i3152.add(request.d('TMPro.TMP_Style', i3153[i + 0]));
  }
  i3150.m_StyleList = i3152
  return i3150
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3156 = root || request.c( 'TMPro.TMP_Style' )
  var i3157 = data
  i3156.m_Name = i3157[0]
  i3156.m_HashCode = i3157[1]
  i3156.m_OpeningDefinition = i3157[2]
  i3156.m_ClosingDefinition = i3157[3]
  i3156.m_OpeningTagArray = i3157[4]
  i3156.m_ClosingTagArray = i3157[5]
  i3156.m_OpeningTagUnicodeArray = i3157[6]
  i3156.m_ClosingTagUnicodeArray = i3157[7]
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3159 = data
  var i3161 = i3159[0]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3161[i + 0]) );
  }
  i3158.files = i3160
  i3158.componentToPrefabIds = i3159[1]
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3165 = data
  i3164.path = i3165[0]
  request.r(i3165[1], i3165[2], 0, i3164, 'unityObject')
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3167 = data
  var i3169 = i3167[0]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 1) {
    i3168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3169[i + 0]) );
  }
  i3166.scriptsExecutionOrder = i3168
  var i3171 = i3167[1]
  var i3170 = []
  for(var i = 0; i < i3171.length; i += 1) {
    i3170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3171[i + 0]) );
  }
  i3166.sortingLayers = i3170
  var i3173 = i3167[2]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 1) {
    i3172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3173[i + 0]) );
  }
  i3166.cullingLayers = i3172
  i3166.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3167[3], i3166.timeSettings)
  i3166.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3167[4], i3166.physicsSettings)
  i3166.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3167[5], i3166.physics2DSettings)
  i3166.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3167[6], i3166.qualitySettings)
  i3166.enableRealtimeShadows = !!i3167[7]
  i3166.enableAutoInstancing = !!i3167[8]
  i3166.enableDynamicBatching = !!i3167[9]
  i3166.lightmapEncodingQuality = i3167[10]
  i3166.desiredColorSpace = i3167[11]
  var i3175 = i3167[12]
  var i3174 = []
  for(var i = 0; i < i3175.length; i += 1) {
    i3174.push( i3175[i + 0] );
  }
  i3166.allTags = i3174
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3179 = data
  i3178.name = i3179[0]
  i3178.value = i3179[1]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3183 = data
  i3182.id = i3183[0]
  i3182.name = i3183[1]
  i3182.value = i3183[2]
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3187 = data
  i3186.id = i3187[0]
  i3186.name = i3187[1]
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3189 = data
  i3188.fixedDeltaTime = i3189[0]
  i3188.maximumDeltaTime = i3189[1]
  i3188.timeScale = i3189[2]
  i3188.maximumParticleTimestep = i3189[3]
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3191 = data
  i3190.gravity = new pc.Vec3( i3191[0], i3191[1], i3191[2] )
  i3190.defaultSolverIterations = i3191[3]
  i3190.bounceThreshold = i3191[4]
  i3190.autoSyncTransforms = !!i3191[5]
  i3190.autoSimulation = !!i3191[6]
  var i3193 = i3191[7]
  var i3192 = []
  for(var i = 0; i < i3193.length; i += 1) {
    i3192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3193[i + 0]) );
  }
  i3190.collisionMatrix = i3192
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3197 = data
  i3196.enabled = !!i3197[0]
  i3196.layerId = i3197[1]
  i3196.otherLayerId = i3197[2]
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3199 = data
  request.r(i3199[0], i3199[1], 0, i3198, 'material')
  i3198.gravity = new pc.Vec2( i3199[2], i3199[3] )
  i3198.positionIterations = i3199[4]
  i3198.velocityIterations = i3199[5]
  i3198.velocityThreshold = i3199[6]
  i3198.maxLinearCorrection = i3199[7]
  i3198.maxAngularCorrection = i3199[8]
  i3198.maxTranslationSpeed = i3199[9]
  i3198.maxRotationSpeed = i3199[10]
  i3198.baumgarteScale = i3199[11]
  i3198.baumgarteTOIScale = i3199[12]
  i3198.timeToSleep = i3199[13]
  i3198.linearSleepTolerance = i3199[14]
  i3198.angularSleepTolerance = i3199[15]
  i3198.defaultContactOffset = i3199[16]
  i3198.autoSimulation = !!i3199[17]
  i3198.queriesHitTriggers = !!i3199[18]
  i3198.queriesStartInColliders = !!i3199[19]
  i3198.callbacksOnDisable = !!i3199[20]
  i3198.reuseCollisionCallbacks = !!i3199[21]
  i3198.autoSyncTransforms = !!i3199[22]
  var i3201 = i3199[23]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3201[i + 0]) );
  }
  i3198.collisionMatrix = i3200
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3205 = data
  i3204.enabled = !!i3205[0]
  i3204.layerId = i3205[1]
  i3204.otherLayerId = i3205[2]
  return i3204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3207 = data
  var i3209 = i3207[0]
  var i3208 = []
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3209[i + 0]) );
  }
  i3206.qualityLevels = i3208
  var i3211 = i3207[1]
  var i3210 = []
  for(var i = 0; i < i3211.length; i += 1) {
    i3210.push( i3211[i + 0] );
  }
  i3206.names = i3210
  i3206.shadows = i3207[2]
  i3206.anisotropicFiltering = i3207[3]
  i3206.antiAliasing = i3207[4]
  i3206.lodBias = i3207[5]
  i3206.shadowCascades = i3207[6]
  i3206.shadowDistance = i3207[7]
  i3206.shadowmaskMode = i3207[8]
  i3206.shadowProjection = i3207[9]
  i3206.shadowResolution = i3207[10]
  i3206.softParticles = !!i3207[11]
  i3206.softVegetation = !!i3207[12]
  i3206.activeColorSpace = i3207[13]
  i3206.desiredColorSpace = i3207[14]
  i3206.masterTextureLimit = i3207[15]
  i3206.maxQueuedFrames = i3207[16]
  i3206.particleRaycastBudget = i3207[17]
  i3206.pixelLightCount = i3207[18]
  i3206.realtimeReflectionProbes = !!i3207[19]
  i3206.shadowCascade2Split = i3207[20]
  i3206.shadowCascade4Split = new pc.Vec3( i3207[21], i3207[22], i3207[23] )
  i3206.streamingMipmapsActive = !!i3207[24]
  i3206.vSyncCount = i3207[25]
  i3206.asyncUploadBufferSize = i3207[26]
  i3206.asyncUploadTimeSlice = i3207[27]
  i3206.billboardsFaceCameraPosition = !!i3207[28]
  i3206.shadowNearPlaneOffset = i3207[29]
  i3206.streamingMipmapsMemoryBudget = i3207[30]
  i3206.maximumLODLevel = i3207[31]
  i3206.streamingMipmapsAddAllCameras = !!i3207[32]
  i3206.streamingMipmapsMaxLevelReduction = i3207[33]
  i3206.streamingMipmapsRenderersPerFrame = i3207[34]
  i3206.resolutionScalingFixedDPIFactor = i3207[35]
  i3206.streamingMipmapsMaxFileIORequests = i3207[36]
  i3206.currentQualityLevel = i3207[37]
  return i3206
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3214 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3215 = data
  i3214.xPlacement = i3215[0]
  i3214.yPlacement = i3215[1]
  i3214.xAdvance = i3215[2]
  i3214.yAdvance = i3215[3]
  return i3214
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[20],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[20],"76":[77],"78":[79],"80":[79],"31":[0],"81":[0],"23":[10],"11":[10],"82":[83],"84":[85],"86":[83],"87":[0],"88":[0],"33":[31],"6":[9,0],"89":[0],"32":[31],"90":[0],"91":[0],"2":[0],"92":[0],"93":[0],"94":[0],"34":[0],"95":[0],"96":[0],"97":[9,0],"98":[0],"99":[0],"100":[0],"101":[0],"102":[9,0],"103":[0],"104":[29],"105":[29],"30":[29],"106":[29],"107":[20],"108":[20],"109":[110],"111":[20],"112":[0],"113":[77,0],"14":[0,9],"114":[0],"115":[9,0],"116":[77],"117":[9,0],"118":[0],"119":[83]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.MonoBehaviour","CardRow","DraggableCard","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.GameObject","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","UIPopUp","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","GameManager","UIFader","AnswerManager","AnswerBox","UnityEngine.UI.Button","AudioManager","AudioLibrary","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.Font","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AnimationClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","SmoothScrollRect","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "2025.09.04 - Wordscapes Solitaire - Garden Makeover";

Deserializers.lunaInitializationTime = "09/18/2025 03:07:52";

Deserializers.lunaDaysRunning = "13.1";

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

Deserializers.buildID = "c1173599-99b0-4aae-aff0-02490862fb34";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

