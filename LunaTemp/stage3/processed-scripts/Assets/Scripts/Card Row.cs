using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;

public class CardRow : MonoBehaviour
{
    public List<DraggableCard> cards = new List<DraggableCard>();
    [SerializeField] private List<HorizontalLayoutGroup> cardHolder = new List<HorizontalLayoutGroup>();

    public void StartGame()
    {
        StartCoroutine(GameStartSequence());
    }

    private IEnumerator GameStartSequence()
    {
        foreach (var card in cards)
        {
            AudioManager.Instance.PlaySFX("Woosh");
            card.gameObject.SetActive(true);
            card.GetComponent<UIPopUp>().SlideIn();
            yield return new WaitForSeconds(0.2f);

        }
        yield return new WaitForSeconds(1f);

        for (int i = 0; i < cardHolder.Count; i++) 
        {
            cardHolder[i].enabled = true;
        }
        cards.Last().FlipOverCard();

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

    public void RemoveLastCard()
    {
        if (cards.Last().isInAnswerBox)
            StartCoroutine(RemoveSequence());
    }

    private IEnumerator RemoveSequence()
    {
        DraggableCard card = cards.Last();
        cards.Remove(cards.Last());

        if (cards.Count > 0)
            cards.Last().FlipOverCard();

        card.GetComponent<UIPopUp>().Minimize();
        yield return new WaitForSeconds(0.3f);
        Destroy(card.gameObject);

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

    public void ShowCardHint(string letterChecked)
    {
        if(cards.Last().Letter == letterChecked)
        {
            Debug.Log("FOUND HINT AT LETTER " + letterChecked);
            cards.Last().gameObject.GetComponent<Animator>().enabled = true;
            cards.Last().gameObject.GetComponent<Animator>().SetBool("ShowingHint", true);
        }
        else
        {
            Debug.Log("NO Dice");
        }
    }
}
