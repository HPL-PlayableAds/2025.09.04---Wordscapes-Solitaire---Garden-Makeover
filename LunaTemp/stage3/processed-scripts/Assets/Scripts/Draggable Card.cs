using DG.Tweening;
using System.Collections;
using TMPro;
using Unity.Collections.LowLevel.Unsafe;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class DraggableCard : MonoBehaviour, /*IDragHandler,IBeginDragHandler, IEndDragHandler, */IPointerClickHandler
{
    [SerializeField] public bool canBeDragged;
    [SerializeField] public Image image;
    [SerializeField] private Sprite cardSprite;
    [SerializeField] private GameObject textObject;
    [SerializeField] private string containedLetter;

    public bool isInAnswerBox = false;
    public Transform parentAfterDrag;
    [SerializeField] private Transform originalParent;

    public string Letter => containedLetter;

    private void Awake()
    {
        containedLetter = textObject.GetComponent<TextMeshProUGUI>().text;
    }

    //public void OnBeginDrag(PointerEventData eventData)
    //{
    //    if(!canBeDragged) 
    //        return;

    //    if (!GameManager.Instance.hassGameStarted)
    //    {
    //        GameManager.Instance.StartGame();
    //    }

    //    AudioManager.Instance.PlaySFX("Select");
    //    image.raycastTarget = false;
    //    parentAfterDrag = transform.parent;
    //    transform.SetParent(transform.root);
    //    transform.SetAsLastSibling();

    //}

    //public void OnDrag(PointerEventData eventData)
    //{
    //    if (canBeDragged)
    //    {
    //        transform.position = Input.mousePosition;
    //    }
    //}

    //public void OnEndDrag(PointerEventData eventData)
    //{
    //    if (!canBeDragged)
    //        return;

    //    transform.SetParent(parentAfterDrag);

    //    image.raycastTarget = true;
    //}

    public void OnPointerClick(PointerEventData eventData)
    {
        if (!canBeDragged)
            return;

        if (!GameManager.Instance.hassGameStarted)
        {
            GameManager.Instance.StartGame();
        }

        AudioManager.Instance.PlaySFX("Select");

        Transform foundEmptySlot = AnswerManager.Instance.CheckIfEmpty();
        if (foundEmptySlot != null)
        {
            image.raycastTarget = false;
            isInAnswerBox = true;

            transform.SetParent(transform.root);
            transform.SetAsLastSibling();
            gameObject.GetComponent<RectTransform>().DOMove(foundEmptySlot.position, 0.5f).OnComplete(() =>
            {
                transform.SetParent(foundEmptySlot);
                image.raycastTarget = true;

                foundEmptySlot.gameObject.GetComponent<AnswerBox>().OnDroppedCard(this.gameObject);
            }
            );
        }
    }

    public void FlipOverCard()
    {
        StartCoroutine(FlipSequence());
    }

    private IEnumerator FlipSequence()
    {
        if(!GameManager.Instance.isGameOver)
            AudioManager.Instance.PlaySFX("FlipCard");

        gameObject.GetComponent<RectTransform>().DOScaleX(0, 0.5f);
        yield return new WaitForSeconds(0.5f);
        image.sprite = cardSprite;
        textObject.SetActive(true);
        gameObject.GetComponent<RectTransform>().DOScaleX(1f, 0.5f);

        yield return new WaitForSeconds(0.4f);
        //if (this.gameObject.GetComponent<Animator>())
        //{
        //    this.gameObject.GetComponent<Animator>().enabled = true;
        //    this.gameObject.GetComponent<Animator>().SetTrigger("ShowingHint");
        //}

        canBeDragged = true;
    }

    public void ReturnToOriginal()
    {
        canBeDragged = true;
        isInAnswerBox = false;

        this.gameObject.GetComponent<Animator>().SetBool("IsCorrectCard", false);
        this.gameObject.GetComponent<Animator>().SetBool("ShowingHint", false);

        parentAfterDrag = originalParent;
        transform.SetParent(parentAfterDrag);
        image.raycastTarget = true;
    }


}
