using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class AnswerBox : MonoBehaviour/*, IDropHandler*/
{
    public string correctLetter;
    public bool containsCorrectLetter;
    [SerializeField] private DraggableCard draggableObjectChild;

    public bool hasChildInbound = false;
    public bool validPlacementArea = false;

    public void OnDroppedCard(GameObject droppedObject)
    {
        if (validPlacementArea)
        {
            //GameObject droppedObject = eventData.pointerDrag;
            DraggableCard draggableItem = droppedObject.GetComponent<DraggableCard>();

            if (!draggableItem.canBeDragged)
                return;

            #region Old Code Region (Uncomment if changes are necessary)
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

            #endregion

            AudioManager.Instance.PlaySFX("Place");
            if (!draggableItem.GetComponent<Animator>().isActiveAndEnabled)
            {
                draggableItem.GetComponent<Animator>().enabled = true;
            }
            if(draggableItem.GetComponent<Animator>().GetBool("ShowingHint") == true)
                draggableItem.GetComponent<Animator>().SetTrigger("HidingHint");

            draggableItem.parentAfterDrag = transform;
            draggableItem.canBeDragged = false;
            draggableItem.isInAnswerBox = true;
            draggableItem.transform.SetParent(draggableItem.parentAfterDrag);

            draggableObjectChild = draggableItem;

            if (draggableItem.Letter != correctLetter)
            {
                containsCorrectLetter = false;
            }
            else
            {
                containsCorrectLetter = true;
                draggableItem.GetComponent<Animator>().SetBool("IsCorrectCard", true);
                AnswerManager.Instance.CheckToShowHint();
            }
        }
    }

    public void ReturnCardToOriginalParent()
    {
        containsCorrectLetter = false;
        draggableObjectChild.ReturnToOriginal();
    }
}
