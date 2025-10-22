using System.Collections;
using UnityEngine;
using DG.Tweening;

public class UIShaker : MonoBehaviour
{
    [SerializeField] private float shakeDuration = 0.3f;
    [SerializeField] private bool useUniformStrength = true;
    [SerializeField] private float uniformShakeStrength = 10f;
    [SerializeField] private Vector3 shakeStrength = new Vector3(10, 10, 10);
    [SerializeField] private int shakeVibrato = 10;
    [SerializeField] private float randomness = 10f;
    [SerializeField] private bool snapping = false;
    [SerializeField] private bool fadeOut = false;

#if UNITY_EDITOR
    private void OnValidate()
    {
        if (useUniformStrength)
        {
            shakeStrength = new Vector3(uniformShakeStrength, uniformShakeStrength, uniformShakeStrength);
        }
    }
#endif

    private void Awake()
    {
        if (useUniformStrength)
        {
            shakeStrength = new Vector3(uniformShakeStrength, uniformShakeStrength, uniformShakeStrength);
        }
    }

    public Coroutine Shake()
    {
        return StartCoroutine(ShakeSequence());
    }

    private IEnumerator ShakeSequence()
    {
        yield return transform.DOShakePosition(shakeDuration, shakeStrength, shakeVibrato, randomness, snapping, fadeOut).WaitForCompletion();
    }

    private void OnDestroy()
    {
        transform.DOKill();

        foreach (Transform child in transform)
        {
            child.DOKill();
        }
    }
}
