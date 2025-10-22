using System.Collections;
using UnityEngine;
using DG.Tweening;

[RequireComponent(typeof(CanvasGroup))]
public class UIFader : MonoBehaviour
{
    [SerializeField]
    private bool hideOnAwake = true;
    [SerializeField]
    private bool disableOnHide = true;
    [SerializeField]
    private float fadeInDuration = 0.5f;
    [SerializeField]
    private float fadeOutDuration = 0.5f;
    [SerializeField]
    private float flickerSpeed = 0.1f;
    [SerializeField]
    private int flickers = 3;

    private Coroutine fadeCoroutine;

    private CanvasGroup canvasGroup;

    public bool IsVisible => canvasGroup.alpha >= 1f;

    private void Awake()
    {
        canvasGroup = GetComponent<CanvasGroup>();

        if (hideOnAwake)
            Hide();
    }

    public void Hide()
    {
        canvasGroup.alpha = 0;
        canvasGroup.interactable = false;
        if (disableOnHide)
            gameObject.SetActive(false);
    }

    public void Show()
    {
        gameObject.SetActive(true);
        canvasGroup.alpha = 1f;
        canvasGroup.interactable = true;
    }

    public Coroutine FadeIn(float delay = 0)
    {
        if (fadeCoroutine != null)
            StopCoroutine(fadeCoroutine);
        
        Show();
        canvasGroup.interactable = false;
        canvasGroup.alpha = 0;

        fadeCoroutine = StartCoroutine(FadeSequence(1f, fadeInDuration, false, delay));
        return fadeCoroutine;
    }

    public Coroutine FadeOut(float delay = 0)
    {
        if (fadeCoroutine != null)
            StopCoroutine(fadeCoroutine);
        
        Show();

        fadeCoroutine = StartCoroutine(FadeSequence(0, fadeOutDuration, false, delay));
        return fadeCoroutine;
    }

    public Coroutine Flicker()
    {
        if (fadeCoroutine != null)
            StopCoroutine(fadeCoroutine);

        canvasGroup.alpha = 0;

        fadeCoroutine = StartCoroutine(FlickerSequence());
        return fadeCoroutine;
    }

    private IEnumerator FadeSequence(float alpha, float fadeDuration, bool isFlicker = false, float startDelay = 0)
    {
        yield return new WaitForSeconds(startDelay);

        canvasGroup.interactable = false;

        yield return canvasGroup.DOFade(alpha, fadeDuration).WaitForCompletion();


        canvasGroup.interactable = true;

        if (!isFlicker)
            fadeCoroutine = null;

        if (alpha <= 0)
            Hide();
    }

    private IEnumerator FlickerSequence()
    {
        Show();
        canvasGroup.alpha = 0;
        canvasGroup.interactable = false;

        for (int i=0; i < flickers; i++)
        {
            yield return FadeSequence(1, flickerSpeed, true);
            yield return FadeSequence(0, flickerSpeed, false);
        }


        canvasGroup.interactable = true;

        fadeCoroutine = null;
    }

    private void OnDestroy()
    {
        transform.DOKill();
        canvasGroup.DOKill();

        foreach (Transform child in transform)
        {
            child.DOKill();
        }
    }
}
