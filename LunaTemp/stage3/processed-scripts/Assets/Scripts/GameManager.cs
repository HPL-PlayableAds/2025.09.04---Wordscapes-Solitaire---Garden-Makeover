using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
//using UnityEngine.UIElements;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;

    public int wordCounter;
    public int maxWordCounter;
    [SerializeField] private GameObject[] hearts;
    [SerializeField] private Sprite lossHeartSprite;
    private int lives = 3;

    [Header("UI Faders")]
    [SerializeField] private UIFader endCard;
    [SerializeField] private UIFader startCard;
    [SerializeField] public UIFader gameplayCanvas;

    [Header("Misc")]
    [SerializeField] private GameObject gameBlocker;
    [SerializeField] private GameObject failBG;
    [SerializeField] private Image textSprite;
    [SerializeField] private Image buttonSprite;
    [SerializeField] private Sprite lossTextSprite;
    [SerializeField] private Sprite buttonLossTextSprite;

    public bool hassGameStarted;
    public bool isGameOver;

    [Header("Hint Activate Timer")]
    [SerializeField] private GameObject hintButton;
    private bool isInteracting = false;
    [SerializeField] private float idleTimer = 2;
    private bool isHandActive = false;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    private void Start()
    {
        StartCoroutine(StartGameSequence());
    }

    private void Update()
    {
        CountdownCheck();
    }

    public void OnCTAClicked()
    {
        Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/ph/app/wordscapes-solitaire/id6452119853", "https://play.google.com/store/apps/details?id=com.peoplefun.wordsolitaire&hl=en");
    }

    public void LoseLife()
    {
        lives--;

        if(lives <= 0)
        {
            lives = 0;
            hearts[lives].GetComponent<Image>().sprite = lossHeartSprite;

            GameOverSequence(true);
            Debug.Log("YOU'RE DEAD. YOU LOSE.");
            return;
        }

        hearts[lives].GetComponent<Image>().sprite = lossHeartSprite;
    }

    public void GameOverSequence(bool failedOrNot = false)
    {
        isGameOver = true;
        if (failedOrNot)
        {
            failBG.SetActive(true);
            buttonSprite.sprite = buttonLossTextSprite;
            textSprite.sprite = lossTextSprite;
        }
        OnCTAClicked();
        //gameplayCanvas.FadeOut();
        endCard.FadeIn();
    }

    public void StartGame()
    {
        hassGameStarted = true;
        AudioManager.Instance.PlayMusic("BGM");
        AudioManager.Instance.PlaySFX("Select");
        startCard.FadeOut();
    }

    private IEnumerator StartGameSequence()
    {
        gameplayCanvas.FadeIn();
        yield return new WaitForSeconds(1f);
        AnswerManager.Instance.InitialStart();
        yield return new WaitForSeconds(4f);
        gameBlocker.SetActive(false);
        startCard.FadeIn();
    }

    private void CountdownCheck()
    {
        if (!hassGameStarted)
        {
            return;
        }

        // Detect screen touch or mouse click (for editor and mobile)
        isInteracting = Input.touchCount > 0 || Input.GetMouseButton(0);

        if (!isInteracting)
        {
            idleTimer -= Time.deltaTime;

            // 5 seconds has passed (Enable Tutorial)
            if (idleTimer <= 0)
            {
                if (!isHandActive)
                {
                    isHandActive = true;
                    hintButton.GetComponent<Animator>().SetBool("isHintActivated", true);

                }
            }
        }
        else
        {
            isHandActive = false;
            hintButton.GetComponent<Animator>().SetBool("isHintActivated", false);
            idleTimer = 2;
        }
    }

    //public void DisableHintButtonGlow()
    //{
    //}
}
