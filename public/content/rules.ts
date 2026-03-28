export interface Example {
  id: number;
  category?: string;
  title: string;
  image: string;
  description: string;
  translation: string;
}

export interface Rule {
  id: number;
  title: string;
  description: string;
  translation: string;
  examples: Example[];
}

export const rules: Rule[] = [
  {
    id: 1,
    title: "Visibility of System Status",
    description:
      "The design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time.",
    translation:
      "Projekt powinien zawsze informować użytkowników o tym, co się aktualnie dzieje, dostarczając odpowiednie informacje zwrotne w rozsądnym czasie.",
    examples: [
      {
        id: 1,
        title: "Google Drive – File Upload Progress (Web)",
        image: "/images/google-drive-upload.webp",
        description:
          "Google Drive shows a visible progress bar when files are being uploaded. Users receive immediate feedback about the current status and how long the process may take, reducing uncertainty.",
        translation:
          "Google Drive pokazuje pasek postępu podczas przesyłania plików. Użytkownik otrzymuje natychmiastową informację zwrotną o stanie procesu i jego czasie trwania, co zmniejsza niepewność.",
      },
      {
        id: 2,
        title: "Twitter/X – Pull to Refresh Indicator (Mobile)",
        image: "/images/twitter-refresh.jpg",
        description:
          "When users pull down to refresh the feed, a loading spinner appears to indicate that new content is being fetched. This feedback reassures users that the system is responding.",
        translation:
          "Podczas odświeżania feedu poprzez przeciągnięcie w dół pojawia się wskaźnik ładowania. Informuje on użytkownika, że system reaguje i pobiera nowe dane.",
      },
    ],
  },
  {
    id: 2,
    title: "Match between system and the real world",
    description:
      "The design should speak the users' language. Use words, phrases, and concepts familiar to the user, rather than internal jargon. Follow real-world conventions, making information appear in a natural and logical order.",
    translation:
      "Projekt powinien mówić użytkownikowi po jego języku. Używaj słów, wyrażeń i pojęć znanych użytkownikowi, a nie wewnętrznego jargona. Stosuj konwencje rzeczywistego świata, aby informacje pojawiały się w naturalnym i logicznym porządku.",
    examples: [
      {
        id: 1,
        title: "E-commerce – Shopping Cart Concept (Web)",
        image: "/images/amazon-cart.png",
        description:
          "Online stores use a shopping cart icon and terminology that mirrors real-world shopping. This makes the interface intuitive because users already understand the concept.",
        translation:
          "Sklepy internetowe używają ikony koszyka i terminologii znanej z zakupów w świecie rzeczywistym. Dzięki temu interfejs jest intuicyjny.",
      },
      {
        id: 2,
        title: "iPhone Camera – Real-World Camera Metaphor (Mobile)",
        image: "/images/ios-camera.jpg",
        description:
          "The iPhone camera app mimics a real camera with a shutter button and mode switching. This familiar metaphor helps users understand how to take photos without instructions.",
        translation:
          "Aplikacja aparatu w iOS odwzorowuje prawdziwy aparat (przycisk migawki, tryby). Dzięki temu użytkownik intuicyjnie wie, jak robić zdjęcia.",
      },
    ],
  },
  {
    id: 3,
    title: "User Control and Freedom",
    description:
      "Users often perform actions by mistake. They need a clearly marked 'emergency exit' to leave the unwanted action without having to go through an extended process.",
    translation:
      "Użytkownicy często wykonują działania przez pomyłkę. Potrzebują jasno zaznaczonego „wyjścia awaryjnego”, aby opuścić niechciane działanie bez muszenia przechodzić przez rozszerzony proces.",
    examples: [
      {
        id: 1,
        title: "Gmail – Undo Send (Web)",
        image: "/images/gmail-undo.webp",
        description:
          "After sending an email, Gmail provides an 'Undo' option for a few seconds. This allows users to quickly reverse accidental actions.",
        translation:
          "Po wysłaniu e-maila Gmail daje możliwość cofnięcia akcji („Undo”). Pozwala to użytkownikowi szybko naprawić błąd.",
      },
      {
        id: 2,
        title: "iOS – Swipe Back Gesture (Mobile)",
        image: "/images/ios-swipe-back.png",
        description:
          "Users can navigate back using a swipe gesture from the left edge of the screen. This gives them quick control and an easy way to exit unwanted screens.",
        translation:
          "Użytkownicy mogą wrócić do poprzedniego ekranu gestem przesunięcia od lewej krawędzi. Daje to szybkie wyjście z niechcianych widoków.",
      },
    ],
  },
  {
    id: 4,
    title: "Consistency and Standards",
    description:
      "Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.",
    translation:
      "Użytkownicy nie powinni się zastanawiać, czy różne słowa, sytuacje lub działania oznaczają to samo. Stosuj konwencje obowiązujące na platformie i w branży.",
    examples: [
      {
        id: 1,
        category: "Consistency",
        title: "Amazon – Consistent 'Add to Cart' Button (Web)",
        image: "/images/amazon-cart.png",
        description:
          "On Amazon, the 'Add to Cart' button maintains the same color, shape, and placement across product pages. The cart icon remains in the top-right corner on all pages. This internal consistency reduces cognitive load, builds user trust, and allows users to develop interaction habits without relearning layouts.",
        translation:
          "Na Amazonie przycisk „Dodaj do koszyka” ma na wszystkich stronach produktu ten sam kolor, kształt i miejsce. Ikona koszyka pozostaje w prawym górnym rogu na każdej stronie. Taka spójność zmniejsza obciążenie poznawcze, buduje zaufanie użytkowników i pozwala im wykształcić nawyki interakcji bez ponownego uczenia się układu.",
      },
      {
        id: 2,
        category: "Consistency",
        title: "Instagram – Consistent Bottom Navigation (Mobile)",
        image: "/images/instagram-navigation.png",
        description:
          "Instagram keeps its bottom navigation bar fixed across all major screens (Home, Search, Reels, Profile). Icons remain in the same position and use consistent styling. This enables muscle memory, fast navigation, and a seamless transition between different sections of the app.",
        translation:
          "Instagram utrzymuje dolny pasek nawigacji w stałym miejscu na wszystkich głównych ekranach (Strona główna, Szukaj, Reels, Profil). Ikony są w tym samym położeniu i zachowują spójny styl. Dzięki temu użytkownicy szybciej poruszają się po aplikacji („pamięć mięśniowa”) i płynnie przechodzą między sekcjami bez szukania funkcji.",
      },
      {
        id: 3,
        category: "Standards",
        title: "Wikipedia – Standard Blue Underlined Links (Web)",
        image: "/images/wikipedia-links.png",
        description:
          "Wikipedia uses blue, underlined text to indicate hyperlinks — a long-established web standard. Users instantly recognize these elements as clickable without additional explanation. Following this convention reduces confusion and aligns with decades of web browsing expectations.",
        translation:
          "Wikipedia używa niebieskiego podkreślonego tekstu jako oznaczenia hiperłączy — to dobrze ugruntowany standard sieci. Użytkownicy od razu rozpoznają te elementy jako klikalne, bez potrzeby dodatkowych wyjaśnień. Trzymanie się tej konwencji ogranicza nieporozumienia i jest zgodne z wieloletnimi oczekiwaniami wobec przeglądania internetu.",
      },
      {
        id: 4,
        category: "Standards",
        title: "iOS – Standard Back Navigation Pattern (Mobile)",
        image: "/images/ios-back-navigation.png",
        description:
          "iOS applications follow the platform standard of placing a back arrow in the top-left corner and supporting swipe-to-go-back gestures. Users expect this behavior from prior experience with the system. Adhering to platform standards minimizes learning time and prevents navigation errors.",
        translation:
          "Aplikacje iOS trzymają się standardu platformy: umieszczają strzałkę „wstecz” w lewym górnym rogu oraz wspierają gest przewinięcia w celu powrotu. Użytkownicy oczekują takiego zachowania na podstawie wcześniejszego doświadczenia z systemem. Stosowanie się do standardów platformy skraca czas nauki i zmniejsza ryzyko błędów w nawigacji.",
      },
    ],
  },
  {
    id: 5,
    title: "Error Prevention",
    description:
      "Good error messages are important, but the best designs carefully prevent problems from occurring in the first place. Either eliminate error-prone conditions, or check for them and present users with a confirmation option before they commit to the action.",
    translation:
      "Ważne są dobre komunikaty o błędach, ale najlepsze projekty starannie zapobiegają problemom przed ich wystąpieniem. Albo eliminuj warunki, które są źródłem błędów, albo sprawdzaj je i prezentuj użytkownikom opcję potwierdzenia przed wykonaniem działania.",
    examples: [
      {
        id: 1,
        title: "Booking.com – Confirmation Before Payment (Web)",
        image: "/images/booking-confirm.png",
        description:
          "Before completing a booking, users must confirm details such as dates and payment. This prevents costly mistakes.",
        translation:
          "Przed finalizacją rezerwacji użytkownik musi potwierdzić szczegóły. Zapobiega to kosztownym błędom.",
      },
      {
        id: 2,
        title: "iOS – Delete Confirmation Dialog (Mobile)",
        image: "/images/ios-delete-confirm.png",
        description:
          "When deleting photos, iOS asks for confirmation before permanently removing them. This prevents accidental data loss.",
        translation:
          "iOS wymaga potwierdzenia przed usunięciem zdjęcia. Zapobiega to przypadkowej utracie danych.",
      },
    ],
  },
  {
    id: 6,
    title: "Recognition Rather than Recall",
    description:
      "Minimize the user's memory load by making elements, actions, and options visible. The user should not have to remember information from one part of the interface to another. Information required to use the design (e.g. field labels or menu items) should be visible or easily retrievable when needed.",
    translation:
      "Zmniejsz obciążenie pamięci użytkownika poprzez uczynienie elementów, działań i opcji widocznymi. Użytkownik nie powinien musieć pamiętać informacji z jednej części interfejsu do drugiej. Informacje wymagane do użycia projektu (np. etykiety pól i elementy menu) powinny być widoczne lub łatwo dostępne w razie potrzeby.",
    examples: [
      {
        id: 1,
        title: "Google Search – Autocomplete Suggestions (Web)",
        image: "/images/google-autocomplete.png",
        description:
          "Google suggests search queries as users type, reducing the need to remember exact phrases.",
        translation:
          "Google podpowiada zapytania podczas wpisywania, zmniejszając potrzebę zapamiętywania.",
      },
      {
        id: 2,
        title: "Spotify – Recently Played (Mobile)",
        image: "/images/spotify-recent.png",
        description:
          "Spotify displays recently played songs, allowing users to recognize rather than recall content.",
        translation:
          "Spotify pokazuje ostatnio odtwarzane utwory, co eliminuje konieczność ich zapamiętywania.",
      },
    ],
  },
  {
    id: 7,
    title: "Flexibility and Efficiency of Use",
    description:
      "Shortcuts — hidden from novice users — may speed up the interaction for the expert user so that the design can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.",
    translation:
      "Skróty — ukryte dla użytkowników początkujących — mogą przyspieszyć interakcję dla eksperta, dzięki czemu projekt może być dostosowany do obu grup: początkujących i eksperci. Umożliw użytkownikom dostosowanie często wykonywanych działań.",
    examples: [
      {
        id: 1,
        title: "Gmail – Keyboard Shortcuts (Web)",
        image: "/images/gmail-shortcuts.png",
        description:
          "Gmail supports keyboard shortcuts for advanced users, speeding up interaction.",
        translation:
          "Gmail obsługuje skróty klawiszowe, które przyspieszają pracę zaawansowanych użytkowników.",
      },
      {
        id: 2,
        title: "iOS – Text Replacement Shortcuts (Mobile)",
        image: "/images/ios-text-shortcuts.png",
        description:
          "Users can create custom shortcuts for frequently typed phrases, improving efficiency.",
        translation:
          "Użytkownicy mogą tworzyć skróty tekstowe, co zwiększa efektywność pisania.",
      },
    ],
  },
  {
    id: 8,
    title: "Aesthetic and Minimalist Design",
    description:
      "Interfaces should not contain information that is irrelevant or rarely needed. Every extra unit of information in an interface competes with the relevant units of information and diminishes their relative visibility.",
    translation:
      "Interfejsy nie powinny zawierać informacji, które są nieistotne lub potrzebne bardzo rzadko. Każdy dodatkowy element informacji w interfejsie konkurował z istotnymi elementami informacji i zmniejsza ich widoczność względną.",
    examples: [
      {
        id: 1,
        title: "Google Homepage – Minimalist Interface (Web)",
        image: "/images/google-home.png",
        description:
          "Google’s homepage contains only essential elements, focusing attention on search.",
        translation:
          "Strona główna Google zawiera tylko niezbędne elementy, skupiając uwagę na wyszukiwaniu.",
      },
      {
        id: 2,
        title: "Apple Weather – Clean Layout (Mobile)",
        image: "/images/weather-app.png",
        description:
          "The weather app presents key information clearly without clutter.",
        translation:
          "Aplikacja pogodowa prezentuje kluczowe informacje bez zbędnych elementów.",
      },
    ],
  },
  {
    id: 9,
    title: "Help Users Recognize, Diagnose, and Recover from Errors",
    description:
      "Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.",
    translation:
      "Komunikaty o błędach powinny być wyrażone w języku zrozumiałym dla użytkownika (bez kodów błędów), precyzyjnie wskazywać problem i konstruktywnie sugerować rozwiązanie.",
    examples: [
      {
        id: 1,
        title: "Login Form – Clear Error Message (Web)",
        image: "/images/login-error.png",
        description:
          "A clear message explains what went wrong and how to fix it.",
        translation: "Komunikat jasno wyjaśnia błąd i sposób jego naprawy.",
      },
      {
        id: 2,
        title: "Instagram – Incorrect Password Error (Mobile)",
        image: "/images/instagram-error.png",
        description:
          "The app explains the issue and suggests corrective action.",
        translation: "Aplikacja wyjaśnia problem i sugeruje rozwiązanie.",
      },
    ],
  },
  {
    id: 10,
    title: "Help and Documentation",
    description:
      "It’s best if the system doesn’t need any additional explanation. However, it may be necessary to provide documentation to help users understand how to complete their tasks.",
    translation:
      "Najlepiej, jeśli system nie potrzebuje żadnych dodatkowych wyjaśnień. Jednak może być konieczne dostarczenie dokumentacji, aby pomóc użytkownikom zrozumieć, jak ukończyć swoje zadania.",
    examples: [
      {
        id: 1,
        title: "Slack – Help Center (Web)",
        image: "/images/slack-help.png",
        description: "Slack provides searchable help documentation for users.",
        translation: "Slack oferuje przeszukiwalną dokumentację pomocy.",
      },
      {
        id: 2,
        title: "Duolingo – Guided Onboarding (Mobile)",
        image: "/images/duolingo-onboarding.png",
        description: "Duolingo guides new users through features step by step.",
        translation:
          "Duolingo prowadzi użytkownika krok po kroku przez funkcje aplikacji.",
      },
    ],
  },
];
