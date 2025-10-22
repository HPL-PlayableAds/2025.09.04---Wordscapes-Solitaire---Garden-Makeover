using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;
using Debug = UnityEngine.Debug;

public class AnswerManager : MonoBehaviour
{
    public static AnswerManager Instance;

    [Header("Iteration")]
    [LunaPlaygroundField("Iteration Number", 1, "Iteration Settings")]
    [SerializeField] private int _iteration = 0;

    [Header("Lists")]
    [SerializeField] private List<string> wordList = new List<string>();
    private string letterToSolve;
    private List<char> charList = new List<char>();
    [SerializeField] private List<GameObject> hints = new List<GameObject>();

    [Header("Card Rows and Answer Boxes")]
    [SerializeField] private List<CardRow> cardRows = new List<CardRow>();
    [SerializeField] private AnswerBox[] answerBoxes;
    [SerializeField] private UIFader[] bgs;
    [SerializeField] private Button[] uiBottons;

    [Header("Integers")]
    [SerializeField] private int quizzesDone = 0;
    private int currentWordIndex = 0;

    [SerializeField] private GameObject handOnSubmit;
    [SerializeField] private UIPopUp textPopUp;

    private string letterToCheck;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
    }
    public void InitialStart()
    {
        StartCoroutine(InitialSequence());
    }

    private IEnumerator InitialSequence()
    {
        SetupAnswerBoxes(currentWordIndex);

        for (int i = 0; i < cardRows.Count; i++)
        {
            cardRows[i].StartGame();
        }

        yield return null;
    }

    private void SetupAnswerBoxes(int index)
    {
        if(quizzesDone >= 3)
            answerBoxes[3].validPlacementArea = false;

        if (index < wordList.Count)
            letterToSolve = wordList[index];

        foreach (char c in letterToSolve)
        {
            charList.Add(c);
        }

        for (int i = 0; i < letterToSolve.Count(); i++) 
        {
            answerBoxes[i].validPlacementArea = true;
            answerBoxes[i].correctLetter = charList[i].ToString();
            answerBoxes[i].containsCorrectLetter = false;
            //answerBoxes[i].GetComponent<UIPopUp>().PopUp();
        }

        //answerBoxes[0].GetComponent<Animator>().SetTrigger("ShowingHint");
    }

    public void CheckForFilledBoxes()
    {
        for (int i = 0; i < answerBoxes.Length; i++)
        {
            if (!answerBoxes[i].containsCorrectLetter)
            {
                AudioManager.Instance.PlaySFX("Incorrect");
                GameManager.Instance.LoseLife();
                return;
            }
        }
        AudioManager.Instance.PlaySFX("Correct");
        Debug.Log("Word Complete");
        StartCoroutine(WordCompletionSequence());
    }

    public void CheckToShowHint()
    {
        for (int i = 0; i < answerBoxes.Length; i++)
        {
            if (answerBoxes[i].transform.childCount == 0)
            {
                return;
            }
        }

        if(quizzesDone <=0)
            handOnSubmit.SetActive(true);
    }

    private IEnumerator WordCompletionSequence()
    {
        currentWordIndex++;
        quizzesDone++;
        charList.Clear();

        hints[currentWordIndex - 1].GetComponent<Animator>().SetTrigger("Completed");

        for (int i = 0; i < uiBottons.Length; i++) 
        {
            uiBottons[i].interactable = false;
        }

        for (int i = 0; i < cardRows.Count; i++)
        {
            cardRows[i].RemoveLastCard();
        }

        for (int i = 0; i < answerBoxes.Length; i++)
        {
            if (answerBoxes[i].transform.childCount != 0)
            {
                answerBoxes[i].hasChildInbound = false;
                answerBoxes[i].validPlacementArea = false;
            }
        }

        if (currentWordIndex < bgs.Length && bgs.Length > 2)
        {
            bgs[currentWordIndex - 1].FadeOut();
            bgs[currentWordIndex].FadeIn();
        }
        else if(quizzesDone >= 4)
        {
            bgs[0].FadeOut();
            bgs[1].FadeIn();
        }

        yield return new WaitForSeconds(1f);

        if(quizzesDone >= 4)
        {
            GameManager.Instance.gameplayCanvas.FadeOut();
            yield return StartCoroutine(GameCompletedSequence());

        }

        if (currentWordIndex < hints.Count)
            hints[currentWordIndex].GetComponent<Image>().DOFade(1f, 0.5f);

        SetupAnswerBoxes(currentWordIndex);

        for (int i = 0; i < uiBottons.Length; i++)
        {
            uiBottons[i].interactable = true;
        }

    }

    private IEnumerator GameCompletedSequence()
    {
        AudioManager.Instance.PlaySFX("BigWin");
        textPopUp.PopUp();   
        yield return new WaitForSeconds(1.5f);
        GameManager.Instance.GameOverSequence();
    }

    public void CheckforEndCard()
    {
        if(_iteration == 1 && quizzesDone >= 2)
        {
            GameManager.Instance.gameplayCanvas.FadeOut();
            GameManager.Instance.GameOverSequence();
        }
    }

    public void OnClearPressed()
    {
        AudioManager.Instance.PlaySFX("Place");
        handOnSubmit.SetActive(false);
        for (int i = 0; i < answerBoxes.Length; i++) 
        {
            if (answerBoxes[i].transform.childCount != 0)
            {
                answerBoxes[i].hasChildInbound = false;
                answerBoxes[i].ReturnCardToOriginalParent();
            }
        }
    }

    public void OnSubmitPressed()
    {
        handOnSubmit.SetActive(false);
        CheckForFilledBoxes();
        CheckforEndCard();
    }

    public void OnHintPressed()
    {
        AudioManager.Instance.PlaySFX("Place");
        for (int i = 0; i < answerBoxes.Length; i++)
        {
            if (answerBoxes[i].transform.childCount == 0)
            {
                letterToCheck = answerBoxes[i].correctLetter;
                Debug.Log(letterToCheck);
                break;
            }
        }

        for (int i = 0; i < cardRows.Count; i++)
        {
            cardRows[i].ShowCardHint(letterToCheck);
        }
    }

    public Transform CheckIfEmpty()
    {
        for (int i = 0; i < answerBoxes.Length; i++)
        {
            if (answerBoxes[i].transform.childCount == 0 && !answerBoxes[i].hasChildInbound && answerBoxes[i].validPlacementArea)
            {
                Debug.Log("Something Here");
                answerBoxes[i].hasChildInbound = true;
                return answerBoxes[i].transform;
            }
        }

        Debug.Log("Nothing Here");
        return null;
    }
}
