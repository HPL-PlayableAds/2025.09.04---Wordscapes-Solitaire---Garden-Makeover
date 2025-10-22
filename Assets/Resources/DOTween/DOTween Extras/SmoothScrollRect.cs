using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

/// <summary>
/// Version of <see cref="ScrollRect"/> that supports smooth scrolling.
/// </summary>
public class SmoothScrollRect : ScrollRect
{
    [SerializeField] private bool smoothScrolling = true;
    [SerializeField] private float smoothScrollTime = 1f;

    public bool SmoothScrolling => smoothScrolling;
    public float SmoothScrollTime => smoothScrollTime;

    public override void OnScroll(PointerEventData data)
    {
        if (!IsActive())
            return;

        if (smoothScrolling)
        {
            Vector2 positionBefore = normalizedPosition;
            this.DOKill(complete: true);
            base.OnScroll(data);
            Vector2 positionAfter = normalizedPosition;

            normalizedPosition = positionBefore;
            this.DONormalizedPos(positionAfter, smoothScrollTime);
        }
        else
        {
            base.OnScroll(data);
        }
    }
}