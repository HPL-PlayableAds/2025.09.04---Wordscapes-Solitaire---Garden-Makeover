using System.Collections;
using UnityEngine;
using DG.Tweening;

[RequireComponent(typeof(CanvasGroup))]
public class UIPopUp : MonoBehaviour
{
    [SerializeField]
    private bool hideOnAwake = false;
    [SerializeField]
    private bool hideAfterPopUp = false;
    [SerializeField]
    private bool destroyAfterHide = false;
    [SerializeField]
    private Vector2 slideInOffset = new Vector2(0, -100);
    [Min(1f)]
    [SerializeField]
    private float popMultiplier = 1.1f;
    [SerializeField]
    private float appearDuration = 0.15f;
    [SerializeField]
    private float minimizeDuration = 0.3f;
    [SerializeField]
    private float fadeDuration = 0.15f;
    [SerializeField]
    private float showDuration = 0.7f;

    private CanvasGroup canvasGroup;

    private Vector2 originalScale;
    private Vector2 originalPosition;

    private Coroutine activeCoroutine = null;

    private RectTransform rectTransform => transform as RectTransform;
    public bool IsHidden => CanvasGroup.alpha is 0 || !gameObject.activeSelf;
    public CanvasGroup CanvasGroup { get
        {
            if (canvasGroup == null)
            {
                canvasGroup = GetComponent<CanvasGroup>();
            }

            return canvasGroup;
        } }

    private void Awake()
    {
        canvasGroup = GetComponent<CanvasGroup>();
        SetOriginalScale();
        SetOriginalPosition();
        //canvasGroup.alpha = 0;

        if (hideOnAwake)
            Hide();
    }

    public void SetOriginalPosition()
    {
        originalPosition = rectTransform.anchoredPosition;
    }

    public void SetOriginalScale()
    {
        originalScale = rectTransform.localScale;
    }

    public void ResetPosition()
    {
        rectTransform.anchoredPosition = originalPosition;
    }

    public void ResetScale()
    {
        rectTransform.localScale = originalScale;
    }

    public void Hide(bool fadeOut = false)
    {
        CanvasGroup.interactable = false;

        if (fadeOut)
        {
            StartCoroutine(FadeOutSequence());
        }
        else
        {
            CanvasGroup.alpha = 0;

            if (destroyAfterHide)
                Destroy(this.gameObject);
            else
                gameObject.SetActive(false);
        }
    }

    public void Show()
    {
        gameObject.SetActive(true);
        CanvasGroup.alpha = 1f;
        CanvasGroup.interactable = true;
    }

    public Coroutine SlideIn(bool doFade = false, float durationMultiplier = 1f, bool minimizeAfter = false, Ease ease = Ease.Unset)
    {
        if (activeCoroutine != null)
        {
            StopCoroutine(activeCoroutine);
        }

        gameObject.SetActive(true);
        activeCoroutine = StartCoroutine(SlideInSequence(doFade, durationMultiplier, minimizeAfter, ease));

        return activeCoroutine;
    }

    public Coroutine SlideOut(bool doFade = false)
    {
        if (activeCoroutine != null)
            StopCoroutine(activeCoroutine);

        gameObject.SetActive(true);
        activeCoroutine = StartCoroutine(SlideOutSequence(doFade));

        return activeCoroutine;
    }

    public Coroutine ScaleUp(bool doFade = false, bool minimizeAfter = false, float startingScale = 0)
    {
        if (activeCoroutine != null)
            StopCoroutine(activeCoroutine);

        Show();
        activeCoroutine = StartCoroutine(ScaleUpSequence(doFade, minimizeAfter));

        return activeCoroutine;
    }

    public Coroutine PopUp(bool doFade = false, bool minimizeAfter = false, float startingScale = 0)
    {
        if (activeCoroutine != null)
            StopCoroutine(activeCoroutine);

        gameObject.SetActive(true);
        activeCoroutine = StartCoroutine(PopUpSequence(doFade, minimizeAfter));

        return activeCoroutine;
    }

    public Coroutine Minimize(bool pop = true, bool doFade = false)
    {
        if (activeCoroutine != null)
            StopCoroutine(activeCoroutine);

        gameObject.SetActive(true);
        activeCoroutine = StartCoroutine(MinimizeSequence(pop, doFade));

        return activeCoroutine;
    }

    private IEnumerator SlideInSequence(bool doFade = false, float durationMultiplier = 1f, bool minimizeAfter = false, Ease ease = Ease.Unset)
    {
        rectTransform.anchoredPosition += slideInOffset;

        rectTransform.localScale = originalScale;

        Sequence sequence = DOTween.Sequence();

        CanvasGroup.interactable = false;

        if (doFade)
        {
            CanvasGroup.alpha = 0;

            sequence.Append(CanvasGroup.DOFade(1, fadeDuration * durationMultiplier));
            sequence.Insert(0, rectTransform.DOAnchorPos(originalPosition, appearDuration * durationMultiplier).SetEase(ease));
        }
        else
        {
            CanvasGroup.alpha = 1f;

            sequence.Append(rectTransform.DOAnchorPos(originalPosition, appearDuration * durationMultiplier).SetEase(ease));
        }
        
        yield return sequence.WaitForCompletion();

        CanvasGroup.interactable = true;

        yield return new WaitForSeconds(showDuration);

        if (hideAfterPopUp)
        {
            if (minimizeAfter)
                yield return Minimize();
            else
                Hide(true);
        }
    }

    private IEnumerator SlideOutSequence(bool doFade = false)
    {
        Vector2 sinkPosition = originalPosition + slideInOffset;

        rectTransform.localScale = originalScale;

        CanvasGroup.alpha = 1f;

        CanvasGroup.interactable = false;

        Sequence sequence = DOTween.Sequence();

        if (doFade)
        {
            CanvasGroup.alpha = 1;

            sequence.Append(CanvasGroup.DOFade(0, fadeDuration));
            sequence.Insert(0, rectTransform.DOAnchorPos(sinkPosition, appearDuration));
        }
        else
        {
            sequence.Append(rectTransform.DOAnchorPos(sinkPosition, appearDuration));
        }

        yield return sequence.WaitForCompletion();

        CanvasGroup.interactable = true;

        Hide(true);
    }

    private IEnumerator ScaleUpSequence(bool doFade = false, bool minimizeAfter = false, float startingScale = 0)
    {
        rectTransform.localScale = new Vector2(startingScale, startingScale);

        Sequence sequence = DOTween.Sequence();

        CanvasGroup.interactable = false;

        if (doFade)
        {
            CanvasGroup.alpha = 0;

            sequence.Append(CanvasGroup.DOFade(1, fadeDuration));
            sequence.Insert(0, rectTransform.DOScale(originalScale, appearDuration));
        }
        else
        {
            CanvasGroup.alpha = 1f;

            sequence.Append(rectTransform.DOScale(originalScale, appearDuration));
        }

        yield return sequence.WaitForCompletion();

        CanvasGroup.interactable = true;

        yield return new WaitForSeconds(showDuration);

        if (hideAfterPopUp)
        {
            if (minimizeAfter)
                yield return Minimize();
            else
                Hide(true);
        }
    }

    private IEnumerator PopUpSequence(bool doFade = false, bool minimizeAfter = false, float startingScale = 0)
    {
        rectTransform.localScale = new Vector2(startingScale, startingScale);

        float upMultiplier = 0.75f;
        float downMultiplier = 0.25f;

        Sequence sequence = DOTween.Sequence();

        CanvasGroup.alpha = 1f;
        CanvasGroup.interactable = false;

        sequence.Append(rectTransform.DOScale(originalScale * popMultiplier, appearDuration * upMultiplier));

        sequence.Append(rectTransform.DOScale(originalScale, appearDuration * downMultiplier));

        if (doFade)
        {
            CanvasGroup.alpha = 0;
            sequence.Insert(0, CanvasGroup.DOFade(1, fadeDuration));
        }

        yield return sequence.WaitForCompletion();

        CanvasGroup.interactable = true;

        yield return new WaitForSeconds(showDuration);

        if (hideAfterPopUp)
        {
            if (minimizeAfter)
                yield return Minimize();
            else
                Hide(true);
        }
    }

    private IEnumerator MinimizeSequence(bool pop = true, bool doFade = false)
    {
        if (IsHidden)
            yield break;

        rectTransform.localScale = originalScale;

        float upMultiplier = 0.25f;
        float downMultiplier = 0.75f;

        Vector2 firstTargetScale = pop ? originalScale * popMultiplier : originalScale;

        CanvasGroup.interactable = false;

        Sequence sequence = DOTween.Sequence();

        if (pop)
            sequence.Append(rectTransform.DOScale(firstTargetScale, minimizeDuration * upMultiplier));

        sequence.Append(rectTransform.DOScale(Vector2.zero, minimizeDuration * downMultiplier));

        if (doFade)
            sequence.Insert(0, CanvasGroup.DOFade(0, fadeDuration));

        yield return sequence.WaitForCompletion();

        CanvasGroup.interactable = true;

        Hide();
    }

    private IEnumerator FadeOutSequence()
    {
        yield return CanvasGroup.DOFade(0, fadeDuration).WaitForCompletion();

        if (destroyAfterHide)
            Destroy(this.gameObject);
        else
            gameObject.SetActive(false);
    }

    private void OnDestroy()
    {
        rectTransform.DOKill();
        CanvasGroup.DOKill();

        foreach (RectTransform child in rectTransform)
        {
            child.DOKill();
        }
    }
}
