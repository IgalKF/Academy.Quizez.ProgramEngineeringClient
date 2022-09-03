export interface Option {
    right: boolean;
    answer: string;
}

export interface Question {
    question: string;
    image?: string;
    options: Option[];
}

const data: Question[] = [
    {
        question: 'תהליכי פיתוח תוכנה כוללים את כל המרכיבים הבאים',
        options: [
            {
                right: false,
                answer: 'תיעוד, קידוד, בקרת תצורה, אינטרנט, מערכות ניידות'
            },
            {
                right: true,
                answer: 'הגדרת דרישות, תיכנון (deisgn) ,קידוד, בדיקות, תחזוקה'
            },
            {
                right: false,
                answer: 'בסיסי נתונים, תקשורת, ממשק משתמש, יעילות'
            },
            {
                right: false,
                answer: 'מודל מפל מים, פיתוח זמיש (אגילי), פיתוח אב טיפוס, צוות פיתוח רבגוני'
            },
        ]
    },
    {
        question: 'דיאגרמת סדר פעולות (diagram sequence) שייכת למשפחה הבאה של דיאגרמות',
        options: [
            {
                right: false,
                answer: 'מודלי הקשר (models context)'
            },
            {
                right: true,
                answer: 'מודלי אינטראקציה (models interaction)'
            },
            {
                right: false,
                answer: 'מודלי מבנה (models structure)'
            },
            {
                right: false,
                answer: 'מודלי התנהגות (models behavioural)'
            },
        ]
    },
    {
        // 3 .
        question: 'תבניות תיכון Patterns Design משמשות',
        options: [
            {
                right: false,
                answer: 'לכתיבת מבני תוכנה יעילים מבחינת שימוש במשאבי זיכרון וזמן'
            },
            {
                right: true,
                answer: 'לשימור והעברת ידע אודות תיכון אופטימלי במצבים שונים'
            },
            {
                right: false,
                answer: 'לכתיבת קוד נוח לתיעוד, במיוחד בשפת JAVA אך לא בשפות אחרות'
            },
            {
                right: false,
                answer: 'ליצירת קשר טוב בין המפתחים לבין משתמשי הקצה של המערכת'
            },
        ]
    },
    {
        // 4 .
        question: 'תפקידיו העיקריים של בעל המוצר (owner product) הם :',
        options: [
            {
                right: false,
                answer: 'הגדרת התקציב לביצוע הפרויקט'
            },
            {
                right: false,
                answer: 'שמירה על מסגרת הזמנים לביצוע הפרויקט'
            },
            {
                right: true,
                answer: 'קביעת עדיפויות סופיות למימוש מתוך מלאי המוצר'
            },
            {
                right: false,
                answer: 'שימור הידע אודות קצב ביצוע הפרויקט ביחס לתוכנית המקורית'
            },
        ]
    },
    {
        question: 'מהן בדיקות וריפיקציה (Test Verification)',
        options: [
            {
                right: true,
                answer: 'בדיקת המערכת במקרי קצה או אפילו מקרים של קלטים או תסריטים לא סבירים'
            },
            {
                right: false,
                answer: 'בדיקת המערכת במקרים לוגיים'
            },
            {
                right: false,
                answer: 'בדיקת פונקציונליות של המערכת בפעולתה התקינה'
            },
            {
                right: false,
                answer: ' תשובות ב ו - ג נכונות'
            },
        ]
    },
    {
        question: ':Factory Method העיצוב תבנית',
        options: [
            {
                right: false,
                answer: 'יוצרת את המחלקה הרלוונטית בהתאם לבקשת המשתמש'
            },
            {
                right: false,
                answer: 'יוצרת את המשתנה הרלוונטי בהתאם לבקשת המשתמש'
            },
            {
                right: false,
                answer: 'יוצרת את הממשק (interface) הרלוונטי בהתאם לבקשת המשתמש'
            },
            {
                right: true,
                answer: 'יוצרת את המופע הרלוונטי בהתאם לבקשת המשתמש'
            },
        ]
    },
    {
        // 7 .

        question: 'חסרון\נות אופיני\ים לשיטת ה - Reuse',
        options: [
            {
                right: true,
                answer: 'התאמה וקונפיגורציה'
            },
            {
                right: false,
                answer: 'תוכנה פחות אמינה מתוכנה חדשה'
            },
            {
                right: false,
                answer: 'אף אחת מהתשובות איננה נכונה'
            },
            {
                right: false,
                answer: 'מהירות הפיתוח'
            },
        ]
    },
    {
        // 8 .
        question: 'מה המשמעות של הסימון המוקף באדום בדיאגרמת ה sequence הבאה:',
        image: '3.png',
        options: [
            {
                right: false,
                answer: 'A פעיל'
            },
            {
                right: true,
                answer: 'B פעיל'
            },
            {
                right: false,
                answer: 'תלוי איזה info התקבל'
            },
            {
                right: false,
                answer: 'לא ניתן לדעת ע"פ חלק זה בדיאגרמה'
            },
        ]
    },
    {
        // 9 .

        question: 'מערכת תוכנה לפי כללי הנדסת תוכנה :',
        options: [
            {
                right: false,
                answer: 'עובדת ביעילות מקסימלית'
            },
            {
                right: false,
                answer: 'כתובה בזמן מהיר ביותר האפשרי'
            },
            {
                right: true,
                answer: 'מבצעת את כל המשימות הנדרשות ממנה לאורך זמן ובאופן עקבי'
            },
            {
                right: false,
                answer: 'עלות פיתוח נמוכה ביותר'
            },
        ]
    },
    {
        // 10 .

        question: 'דרישות רגולטריות/אתיות הינן בדרך כלל',
        options: [
            {
                right: false,
                answer: 'דרישות פונקציונליות'
            },
            {
                right: true,
                answer: 'דרישות לא פונקציונליות'
            },
            {
                right: false,
                answer: 'תשובות א ו - ב נכונות'
            },
            {
                right: false,
                answer: 'דרישות קלות למימוש'
            },
        ]
    },
    {
        //  11 .

        question: 'לאיזה מודל שייך ה - UML',
        options: [
            {
                right: false,
                answer: 'interaction model'
            },
            {
                right: false,
                answer: 'structure model'
            },
            {
                right: false,
                answer: 'Behavior model'
            },
            {
                right: true,
                answer: 'אף אחת מהתשובות איננה נכונה'
            },
        ]
    },
    {
        //  12 .

        question: 'יתרונות של פיתוח אגילי על פני פיתוח מבוסס מפל מים',
        options: [
            {
                right: false,
                answer: 'פיתוח אגילי מהיר במיוחד'
            },
            {
                right: false,
                answer: 'פיתוח אגילי יותר מתאים יותר לתוכנה שדורשת אמינות גבוהה מאד'
            },
            {
                right: true,
                answer: 'פיתוח אגילי יותר מתאים לצרכי הלקוחות משתנים'
            },
            {
                right: false,
                answer: 'פיתוח תוכנ ה אגילי מתאים יותר ללקוחות שדורשים עמידה במפרטים ידועים מראש'
            },
        ]
    },
    {
        // 1
        question: 'בדיאגרמת המחלקות הבאה, קשרי ההכלה מראים כי:',
        image: '1.png',
        options: [
            {
                right: true,
                answer: 'המחלקות Department, office מוכלות במבני נתונים דינמיים במחלקה Company'
            },
            {
                right: false,
                answer: 'המחלקות Department, office מכילות במבני נתונים דינמיים את המחלקה Company'
            },
            {
                right: false,
                answer: 'המחלקות Department, office מוכלות במבני נתונים קבועים במחלקה Company'
            },
            {
                right: false,
                answer: 'המחלקות Department, office מכילות במבני נתונים קבועים את המחלקה Company'
            },
        ]
    },
    {
        // 2 .

        question: 'כיצד הסעיף במנשר האג`ילי שאומר את הדבר הבא: " שיתוף פעולה עם לקוחות על פני חוזים ומשא ומתן" מתבצע בפועל בשיטה האג`ילית:',
        options: [
            {
                right: false,
                answer: 'צוותים מעורבים (scrums) שפועלים במקביל'
            },
            {
                right: true,
                answer: 'בעל מוצר (Owner Product) שעובד בשיתוף פעולה מלא עם הלקוחות'
            },
            {
                right: false,
                answer: 'זמני פיתוח קצרים והצגות (DEMOS)'
            },
            {
                right: false,
                answer: 'כל התשובות נכונות'
            },
        ]
    },
    {
        // 3 .
        question: 'אלו מהבאים הינן שיטות לגילוי דרישות (elicitation Requirements) .',
        options: [
            {
                right: false,
                answer: 'תרחישי שימוש'
            },
            {
                right: false,
                answer: 'ראיונות ותצפיות על סביבת העבודה'
            },
            {
                right: true,
                answer: 'כל התשובות נכונות'
            },
            {
                right: false,
                answer: 'למידת מערכות קיימות'
            },
        ]
    },
    {
        // 4 .

        question: 'עקרון ה - reuse כולל 4 רמות, אחת מהן היא הרמה האבסטרקטית (level Abstraction) ובה:',
        options: [
            {
                right: true,
                answer: 'עושים שימוש חוזר בידע משותף, כגון: pattern design'
            },
            {
                right: false,
                answer: 'עושים שימוש חוזר בכלים וטכנולוגיות מוכרות כגון: services web'
            },
            {
                right: false,
                answer: 'עושים שימוש חוזר במטודולוגיות פיתוח, כגון: agile'
            },
            {
                right: false,
                answer: 'אין תשובה נכונה'
            },
        ]
    },
    {
        // 5 .

        question: 'בפיתוח מודל ה - V בכל שלבי הפיתוח',
        options: [
            {
                right: false,
                answer: 'מבצעים בדיקות'
            },
            {
                right: true,
                answer: 'מתכננים בדיקות'
            },
            {
                right: false,
                answer: 'מבצעים ומתכננים בדיקות'
            },
            {
                right: false,
                answer: 'בדיקות לא מתבצעות כלל'
            },
        ]
    },
    {
        // 6 .

        question: 'חברת Microsoft החליטה לבצע שינוי ושיפור של מוצרי ה - Office לטובת לקוח פרימיום שלה, מה מהבאים הוא הגדרה נכונה למהלך זה:',
        options: [
            {
                right: true,
                answer: 'שינוי המוצר מ - products Generic ל - products Customized'
            },
            {
                right: false,
                answer: 'שינוי המוצר מ - products Customized ל - products Customize Very'
            },
            {
                right: false,
                answer: 'שינוי המוצר מ - products Customized ל - products Generic'
            },
            {
                right: false,
                answer: 'אין תשובה נכונה'
            },
        ]
    },
    {
        // 7 .

        question: 'ספריית ה - jUnit ברוב המקרים אינה מאפשרת בדיקות:',
        options: [
            {
                right: false,
                answer: 'Unit test'
            },
            {
                right: false,
                answer: 'Sub System Test'
            },
            {
                right: true,
                answer: 'Inspection Test'
            },
            {
                right: false,
                answer: 'System Test'
            },
        ]
    },
    {
        // 8 .

        question: 'בפגישת סקירת ספרינט מתבצע בדר"כ Demo מהי מטרתו ?',
        options: [
            {
                right: false,
                answer: 'הצגת המוצר כולו בפני הלקוח לפני השקתו'
            },
            {
                right: false,
                answer: 'הצגת הקוד והארכיטקטורה בספרינט הנוכחי'
            },
            {
                right: false,
                answer: 'הצגת החלקים שיפותחו בספרינט הבא כדי שהלקוח יאשר'
            },
            {
                right: true,
                answer: 'הצגת תוצרי הספרינט הנוכחי'
            },
        ]
    },
    {
        // 9 .
        question: 'חלק מבעיות הפיתוח והיישום היא בעיית ה - Target Host ,מהי הבעיה ?',
        options: [
            {
                right: false,
                answer: 'התכנון והארכיטקטורה ברוב המקרים אינם מבוצעים בצורה מדוייקת בפיתוח'
            },
            {
                right: true,
                answer: 'סביבת הפיתוח לא תואמת לסביבת הלקוח'
            },
            {
                right: false,
                answer: 'סביבת הפיתוח לא תואמת לסביבת הבדיקות'
            },
            {
                right: false,
                answer: `תשובות ב' ו - ג' נכונות`
            },
        ]
    },
    {
        // 10.
        question: 'דוגמה למערכות עיבוד שפה (systems processing Language) יכולה להיות:',
        options: [
            {
                right: false,
                answer: 'סימולטורים (simulators)'
            },
            {
                right: true,
                answer: 'מהדרים (compilers)'
            },
            {
                right: false,
                answer: 'שרתים (servers)'
            },
            {
                right: false,
                answer: 'דפדנים (browsers)'
            },
        ]
    },
    {
        // . 1

        question: 'Professional Software Development - ל Software Development בין השוני מהו',
        options: [
            {
                right: false,
                answer: 'אין הבדל'
            },
            {
                right: false,
                answer: 'השני נעשה בדר"כ בצוותים ולא ביחידים'
            },
            {
                right: false,
                answer: 'בשני חובה לספק תיעוד, קונפיגורציה ודברים'
            },
            {
                right: true,
                answer: `סעיפים ב' ו - ג' נכונים`
            },
        ]
    },
    {
        // 2 .
        // (א) 
        // (ב) 
        // (ג) 
        // (ד) 

        question: 'לאיזה שלב שייך ה - diagram class',
        options: [
            {
                right: false,
                answer: 'שלב ה - model interaction'
            },
            {
                right: false,
                answer: 'שלב ה - model structure'
            },
            {
                right: true,
                answer: 'שלב ה - development & design'
            },
            {
                right: false,
                answer: 'שלב ה - requirements'
            },
        ]
    },
    {
        // 3 .
        // (א) 
        // (ב) 
        // (ג) 
        // (ד) 

        question: 'כיצד השיטה האגילית עושה שימוש ב - TDD',
        options: [
            {
                right: true,
                answer: 'מקביליות של פיתוח ובדיקות'
            },
            {
                right: false,
                answer: 'ה - TDD גמיש ביכולות שלו'
            },
            {
                right: false,
                answer: 'אין קשר בין השניים'
            },
            {
                right: false,
                answer: `תשובות א' ו - ב' נכונות`
            },
        ]
    },
    {
        // . 4
        question: 'use case בתרשים',
        options: [
            {
                right: false,
                answer: 'בכל תרשים מוצג case use יחיד'
            },
            {
                right: false,
                answer: 'בכל תרשים מוצגים לכל היותר 7 cases use ,כדי שיהיה ברור וקריא'
            },
            {
                right: true,
                answer: 'כאשר ישנם מספר רב של cases use הם יכולים להיות מוצגים במספר תרשימים'
            },
            {
                right: false,
                answer: 'כל ה - cases-use של מערכת אחת מוצגים בתרשים אחד'
            },
        ]
    },
    {
        // 5 .
        // (א) 
        // (ב) 
        // (ג) 
        // (ד) 
        question: 'בתרשים המתואר אילו מהמשפטים הבאים יכול להיות נכון ?',
        image: '2.png',
        options: [
            {
                right: false,
                answer: 'ענף B מכיל את ההתקדמות של ענף A בלבד'
            },
            {
                right: false,
                answer: 'ענף B מכיל את ההתקדמות של ענף A ו - C בלבד'
            },
            {
                right: false,
                answer: 'ענף C מכיל גם ההתקדמות של ענף A'
            },
            {
                right: true,
                answer: 'אף אחת מהתשובות אינה נכונה'
            },
        ]
    },
    {
        // 6 .
        question: 'מהו המשפט הנכון בהשוואה של פיתוח אגילי אל מול פיתוח מבוסס מפל מים',
        options: [
            {
                right: false,
                answer: 'פיתוח אגילי תמיד מהיר יותר'
            },
            {
                right: false,
                answer: 'פיתוח אגילי תמיד מייצר מוצר אמין פחות מפיתוח מבוסס מפל מים'
            },
            {
                right: true,
                answer: 'שלבי הפרויקט קלים יותר לניהול במודל מפל המים'
            },
            {
                right: false,
                answer: 'ישנם יותר שלבי פיתוח במודל מפל המים לעומת הפיתוח האגילי'
            },
        ]
    },
    {
        // 7 .
        question: 'מהו החיסרון העקרי בארכיטקטורת ה - Repository',
        options: [
            {
                right: false,
                answer: 'לא ניתן להשתמש בה ב - web'
            },
            {
                right: false,
                answer: 'מסובכת מאוד למימוש'
            },
            {
                right: true,
                answer: 'קשה להפצה על גבי מספר מכונות'
            },
            {
                right: false,
                answer: 'כיוון שלא ניתן לחלק לשכבות קשה להרחיב מערכות שכתובות כך'
            },
        ]
    },
    {
        // 8 .
        question: 'חלק מבעיות הפיתוח והיישום היא בעיית ה - Target Host ,כיצד ניתן להתמודד עם בעיה זו',
        options: [
            {
                right: false,
                answer: 'כתיבה בשפות שעושות שימוש במכונות וירטואליות כגון JAVA'
            },
            {
                right: false,
                answer: 'Simulators'
            },
            {
                right: false,
                answer: 'שימוש ב - Pattern Design'
            },
            {
                right: true,
                answer: `תשובות א' ו - ב' נכונות`
            },
        ]
    },
    {
        // . 1
        question: 'Professional Software Development - ל Software Development בין השוני מהו',
        options: [
            {
                right: false,
                answer: 'אין הבדל'
            },
            {
                right: false,
                answer: 'השני נעשה בדר"כ בצוותים ולא ביחידים'
            },
            {
                right: false,
                answer: 'בשני חובה לספק תיעוד, קונפיגורציה ודברים נוספים על מנת להשיג את המטרה'
            },
            {
                right: true,
                answer: `סעיפים ב' ו - ג' נכונים`
            },
        ]
    },
    {
        // 2 .
        question: 'לאיזה שלב שייך ה - diagram class',
        options: [
            {
                right: false,
                answer: 'שלב ה - model interaction'
            },
            {
                right: false,
                answer: 'שלב ה - model structure'
            },
            {
                right: true,
                answer: 'שלב ה - development & design'
            },
            {
                right: false,
                answer: 'שלב ה - architecture'
            },
        ]
    },
    {
        // 3
        question: 'הולך Software Customize Product - ל Software Generic Product בין השוני מדוע ונעלם ?',
        options: [
            {
                right: false,
                answer: 'כיוון שהטכנולוגיה מאפשרת זאת'
            },
            {
                right: true,
                answer: 'בשל הצורך העסקי של חברות לבצע התאמה לצרכי הלקוחות שלהם'
            },
            {
                right: false,
                answer: 'כיוון שלא ניתן כיום לפתח Product Customize Software ללא שימוש ב- Software Generic Product'
            },
            {
                right: false,
                answer: 'כיוון שלא ניתן כיום לפתח Product Generic Software ללא שימוש ב- Software Customize Product'
            },
        ]
    },
    {
        // 4 .
        question: 'annotation Before @על גבי מטוד ת up-set מבצע במהלך הטסט',
        options: [
            {
                right: false,
                answer: 'הרצת המטודה פעם אחת לפני כל טסט'
            },
            {
                right: false,
                answer: 'הרצת המטודה פעם אחת אחרי כל טסט'
            },
            {
                right: true,
                answer: 'הרצת המטודה פעם אחת לפני הרצת כל הטסטים'
            },
            {
                right: false,
                answer: 'הרצת המטודה פעם אחת אחרי הרצת כל הטסטים'
            },
        ]
    },
    {
        // 5 .
        // (א) 
        // (ב) 
        // (ג) 
        // (ד ) 

        question: 'מהו המשפט הנכון בהשוואה של פיתוח אגילי אל מול פיתוח מבוסס מפל מים',
        options: [
            {
                right: false,
                answer: 'פיתוח אגילי תמיד מהיר יותר'
            },
            {
                right: false,
                answer: 'פיתוח אגילי תמיד מייצר מוצר אמין פחות מפיתוח מבוסס מפל מים'
            },
            {
                right: true,
                answer: 'שלבי הפרויקט קלים יותר לניהול במודל מפל המים'
            },
            {
                right: false,
                answer: 'ישנם יותר שלבי פיתוח במודל מפל המים לעומת הפיתוח האגילי'
            },
        ]
    },
    {
        // 6 .
        question: 'כיצד השיטה האגילית עושה שימוש ב - TDD',
        options: [
            {
                right: true,
                answer: 'מקביליות של פיתוח ובדיקות'
            },
            {
                right: false,
                answer: 'ה - TDD גמיש ביכולות שלו'
            },
            {
                right: false,
                answer: 'אין קשר בין השניים'
            },
            {
                right: false,
                answer: `תשובות א' ו - ב' נכונות`
            },
        ]
    },
    {
        // 7
        question: 'באיזה עקרון תוכנה עושה שימוש תבנית העיצוב Command',
        options: [
            {
                right: true,
                answer: 'Loosely decouple'
            },
            {
                right: false,
                answer: 'עקרון ה - close open'
            },
            {
                right: false,
                answer: 'שימוש במופע יחיד'
            },
            {
                right: false,
                answer: 'מקביליות'
            },
        ]
    },
    {
        // 8 .
        question: 'מהו ציר הזמן שיש לקרוא /לכתוב את ה - diagram sequence',
        options: [
            {
                right: true,
                answer: 'top to bottom'
            },
            {
                right: false,
                answer: 'bottom to top'
            },
            {
                right: false,
                answer: 'left to right'
            },
            {
                right: false,
                answer: 'right to left'
            },
        ]
    },
    {
        // 9.
        question: 'ההבדל המרכזי בין פיתוח מערכת שדורשת התקנה באתר הלקוח לבין מערכת שעובדת ברשת האינטרנט באמצעות דפדפן',
        options: [
            {
                right: false,
                answer: 'שימוש בטכנולוגיות תיכנות מתקדמות עבור מערכות ברשת'
            },
            {
                right: false,
                answer: 'עלויות תחזוקה יותר נמוכות במערכת המותקנת ישירות באתר הלקוח'
            },
            {
                right: true,
                answer: 'למערכות ברשת האינטרנט יש יכולת תגובה מהירה לדרישות לשינויים'
            },
            {
                right: false,
                answer: 'למערכות שעובדות באינטרנט יש בדרך כלל זמן תגובה יותר מהיר'
            },
        ]
    },
    {
        // 10 .
        question: 'דרישה שבכל מסך יופיע בחלק העליון לוגו של החברה',
        options: [
            {
                right: true,
                answer: 'הינו דרישה פונקציונלית'
            },
            {
                right: false,
                answer: 'הינו דרישה לא פונקציונלית'
            },
            {
                right: false,
                answer: 'הינו דרישה לא חוקית'
            },
            {
                right: false,
                answer: 'איננו דרישה בכלל'
            },
        ]
    },
    {
        // 11.
        question: 'אלו מהבאים הינן שיטות לגילוי דרישות (elicitation Requirements).',
        options: [
            {
                right: false,
                answer: 'תרחישי שימוש'
            },
            {
                right: false,
                answer: 'ראיונות ותצפיות על סביבת העבודה'
            },
            {
                right: true,
                answer: 'כל התשובות נכונות'
            },
            {
                right: false,
                answer: 'למידת מערכות קיימות'
            },
        ]
    },
    {
        // .12
        question: 'נכונה Client Server בארכיטקטורה',
        options: [
            {
                right: false,
                answer: 'כל שרת משרת מספר מוגבל של לקוחות'
            },
            {
                right: false,
                answer: 'כל שרת מעניק מספר רב של שירותים'
            },
            {
                right: false,
                answer: 'כל שרת ומה שירוץ עליו תלוי בכמות הלקוחות'
            },
            {
                right: true,
                answer: 'כל שרת מעניק שירות אחד'
            },
        ]
    },
    {
        // 13.
        question: 'החלטתי לכתוב את אפליקצית ה - web שלי בשפת JAVA ועשיתי שימוש בספריה חיצונית ששייכת לחברת google ,האם אני בהכרח',
        options: [
            {
                right: false,
                answer: 'גונב זכויות יוצרים'
            },
            {
                right: true,
                answer: 'עושה שימוש בגישה מקובלת לכתיבת קוד שנקראת - Reuse'
            },
            {
                right: false,
                answer: 'לא גונב זכויות יוצרים'
            },
            {
                right: false,
                answer: `תשובות ב' ו - ג' נכונות`
            },
        ]
    },
    {
        // 14.
        question: 'מהו החיסרון העקרי בארכיטקטורת ה - Repository',
        options: [
            {
                right: false,
                answer: 'לא ניתן להשתמש בה ב - web'
            },
            {
                right: false,
                answer: 'מסובכת מאוד למימוש'
            },
            {
                right: true,
                answer: 'קשה להפצה על גבי מספר מכונות'
            },
            {
                right: false,
                answer: 'כיוון שלא ניתן לחלק לשכבות קשה להרחיב מערכות שכתובות כך'
            },
        ]
    },
    {
        // 15.
        question: 'תכונות שחשובות לדרישות טובות',
        options: [
            {
                right: true,
                answer: 'יחודיות, שלמות, תאימות פנימית, בדיקתיות'
            },
            {
                right: false,
                answer: 'ניתנות למימוש בקלות, ניתנות להעברה בקלות לתיכון, מכסות את כל האפשרויות'
            },
            {
                right: false,
                answer: 'ניתנות לעידכון, אינן קשורות ישירות לצרכים עסקיים'
            },
            {
                right: false,
                answer: 'כל דרישה קשורה לבעל עניין אחד, מנוסחות באופן מצומצם ככל האפשר'
            },
        ]
    },
    {
        // 16.
        question: 'אם אני מחליט להעלות את קוד המקור שלי ל - GitHub כ - source Open ,היתרונות שלי הם',
        options: [
            {
                right: false,
                answer: 'בפיתוח'
            },
            {
                right: false,
                answer: 'בבדיקות'
            },
            {
                right: false,
                answer: 'בפרסום'
            },
            {
                right: true,
                answer: 'כל התשובות נכונות'
            },
        ]
    },
    {
        // 17.
        question: 'תבנית העיצוב Method Factory יוצרת את המופע הרלוונטי בהתאם לבקשת המשתמש. כיצד היא עושה זאת ?',
        options: [
            {
                right: false,
                answer: 'חתימה שונה לכל מופע כך המשתמש יכול לבחור להפעיל את המטודה הרלוונטית'
            },
            {
                right: false,
                answer: 'תלוי איך התוכניתן כתב את התבנית'
            },
            {
                right: false,
                answer: 'עקרון ה - Close Open'
            },
            {
                right: true,
                answer: 'בחתימת המטודה היא מחזירה interface שממנו יורשים ה - Classes Concrete'
            },
        ]
    },
    {
        // 18.
        question: 'בתרשים המתואר אילו מהמשפטים הבאים הוא הנכון ?',
        image: '2.png',
        options: [
            {
                right: false,
                answer: 'A ו B הם Branches ו - C הוא master'
            },
            {
                right: false,
                answer: 'A הוא Branch ו - C הוא master'
            },
            {
                right: true,
                answer: 'A הוא Branch ו - B הוא master'
            },
            {
                right: false,
                answer: 'לא ניתן לדעת'
            },
        ]
    },
    {
        // 1 .
        question: 'לאיזה מודל שייך ה - diagram class',
        options: [
            {
                right: false,
                answer: 'מודל ה - model interaction'
            },
            {
                right: false,
                answer: 'מודל ה - model structure'
            },
            {
                right: true,
                answer: 'מודל ה - development & design'
            },
            {
                right: false,
                answer: 'מודל ה - requirements'
            },
        ]
    },
    {
        // 2 .
        question: 'מהו היתרון הגדול של התבנית הארכיטקטונית מודל השכבות',
        options: [
            {
                right: true,
                answer: 'בדומה למודל ה - MVC כל שיכבה היא עצמאית וניתן לשנות אותה ללא פגיעה בשכבות אחרות'
            },
            {
                right: false,
                answer: 'בדומה למודל ה - MVC כל שיכבה היא עצמאית ושינוי שלה מוביל לשינוי מינימלי בשכבות האחרות'
            },
            {
                right: false,
                answer: 'ניתן לפתח את השכבות במקביל'
            },
            {
                right: false,
                answer: 'יש יותר מתשובה אחת נכונה'
            },
        ]
    },
    {
        // 3 .
        //  (א(
        //  (ב(
        //  (ג(
        //  (ד(

        question: 'מהו ציר האינטרקציה שיש לקרוא\לכתוב את ה - diagram sequence',
        options: [
            {
                right: true,
                answer: 'top to bottom'
            },
            {
                right: false,
                answer: 'left to right'
            },
            {
                right: false,
                answer: 'bottom to top'
            },
            {
                right: false,
                answer: 'right to left'
            },
        ]
    },
    {
        // 5.
        question: 'ע"פ התרשים המתואר, ברצוני לבנות גירסה חדשה בענף B ללקוח הכוללת את התקדמות ענף C בלבד. כיצד עליי לעשות זאת (הניחו כי הגירסאות בענפים, ממוספרות בסדר עולה ע"פ ציר התקדמות שלהם, ז"א נקודה ראשונה אדומה היא גירסה 1 של ענף B נקודה שניה אדומה היא גירסה 2 של ענף B וגירסה 1 של ענף A ו - C ? (',
        image: '2.png',
        options: [
            {
                right: true,
                answer: 'עליי למזג את גירסה 2 של ענף C עם גירסה 2 של ענף B'
            },
            {
                right: false,
                answer: 'עליי למזג את גירסה 2 של ענף B עם גירסה 2 של ענף C'
            },
            {
                right: false,
                answer: 'עליי למזג את גירסה 3 של ענף C עם גירסה 3 של ענף B'
            },
            {
                right: false,
                answer: 'עליי למזג את גירסה 3 של ענף A עם גירסה 3 של ענף B'
            },
        ]
    },
    {
        // 6 .
        question: 'תרשים מחלקות יכול לסייע',
        options: [
            {
                right: false,
                answer: 'להגדיר שמות משמעותיים של מחלקות ולהגדיר סדר זמנים של קריאות לפונקציות'
            },
            {
                right: false,
                answer: 'להגדיר פיצול של מחלקות לפי מחשבים פיזיים ולהגדיר שמות משמעותיים של מצביעים'
            },
            {
                right: true,
                answer: 'להגדיר יחס היררכי של מחלקות ואוביקטים, להגדיר תכונות של מחלקות'
            },
            {
                right: false,
                answer: 'לשמור על מבנה לוגי של הקוד ולבצע חישובי זמנים של ריצה ו'
            },
        ]
    },
    {
        // 7 .
        question: 'ישנה טענה כי: ההבדל היום בין מוצר תוכנה גנרי (Product Generic) לבין מוצר תוכנה מותאם (Product Customized) קטן יותר ויותר. מהי הסיבה העיקרית לכך ?',
        options: [
            {
                right: false,
                answer: 'סיבה טכנולוגית'
            },
            {
                right: true,
                answer: 'סיבה עיסקית'
            },
            {
                right: false,
                answer: 'סיבה ארכיטקטונית'
            },
            {
                right: false,
                answer: 'לא אחת מהסיבות הנ"ל'
            },
        ]
    },
    {
        // 8.
        question: 'מה מהדרישות שלהלן הוא דרישה לא פונקציונליות?',
        options: [
            {
                right: false,
                answer: 'שדה סיסמה יואר באדום כאשר הסיסמה לא נכונה, התאמה ל-Windows'
            },
            {
                right: true,
                answer: 'לחיצה על כל כפתור תגיב תוך שניה לכל היותר'
            },
            {
                right: false,
                answer: 'ספרינט באורך של שבועיים, אי שימוש בטיפוס int'
            },
            {
                right: false,
                answer: 'התאמה למכשירי Android'
            },
        ]
    },
    {
        // 1.
        question: 'איזה סעיף כולל אך ורק הבטים ארכיטקטוניים (Views Architectural)',
        options: [
            {
                right: false,
                answer: 'הבט לוגי, הבט מכני והבט תיאורטי (View Theoretical, View Mechanical, View Logical)'
            },
            {
                right: true,
                answer: 'הבט לוגי, הבט פיזי והבט תהליכי (View Process, View Physical, View Logical)'
            },
            {
                right: false,
                answer: 'הבט מערכתי, הבט אנושי והבט בטיחותי (View Security, View Human, View System)'
            },
            {
                right: false,
                answer: 'הבט תיעודי הבט יצירתי והבט מערכתי (View System, View Creative, View Documentary)'
            },
        ]
    },
    {
        // 2.
        question: 'מהו היתרון בשימוש בתבנית הארכיטקטורה של מודל השכבות',
        options: [
            {
                right: false,
                answer: 'כל שכבה היא חלק בלתי נפרד מהשכבות האחרות, מה שמאפשר reuse לקוד'
            },
            {
                right: true,
                answer: 'כל שכבה היא בפני העצמה מה שמסייע בתהליך הפיתוח\הבדיקות והשינויים'
            },
            {
                right: false,
                answer: 'היתרון תלוי מימוש'
            },
            {
                right: false,
                answer: 'אף תשובה איננה נכונה'
            },
        ]
    },
    {
        // 3.
        question: 'תבנית ארכיטקטונית של מאגר (repository) מתאימה בעיקר',
        options: [
            {
                right: false,
                answer: 'עבור מערכות שבהן נדרש זמן תגובה קצר ביותר'
            },
            {
                right: false,
                answer: 'עבור מערכות שבהן נידרש שיתוף משאבים ופיתוח במקביל של שירותים שונים'
            },
            {
                right: true,
                answer: 'עבור מערכות שבהן יש פיתוח אלגוריתמי מורכב'
            },
            {
                right: false,
                answer: 'עבור מערכות צבאיות'
            },
        ]
    },
    {
        //     4 .
        question: 'בתרשים המתואר אילו מהמשפטים הבאים הוא הנכון ?',
        image: '2.png',
        options: [
            {
                right: false,
                answer: 'A ו B הם Branches ו - C הוא master'
            },
            {
                right: false,
                answer: 'A הוא Branch ו - C הוא master'
            },
            {
                right: true,
                answer: 'A הוא Branch ו - C הוא Branch'
            },
            {
                right: false,
                answer: 'לא ניתן לדעת'
            },
        ]
    },
    {
        // 5.
        question: 'תרשים מחלקות יכול לסייע',
        options: [
            {
                right: false,
                answer: 'להגדיר שמות משמעותיים של מחלקות ולהגדיר סדר זמנים של קריאות לפונקציות'
            },
            {
                right: false,
                answer: 'להגדיר פיצול של מחלקות לפי מחשבים פיזיים ולהגדיר שמות משמעותיים של מצביעים'
            },
            {
                right: false,
                answer: 'לבצע חישובי זמנים של ריצה ולשמור על מבנה לוגי של הקוד'
            },
            {
                right: true,
                answer: 'להגדיר יחס היררכי של מחלקות ואוביקטים, להגדיר תכונות של מחלקות'
            },
        ]
    },
    {
        // 6.
        question: 'פיתוח לפי שיטת מפל המים יהיה מועיל כאשר',
        options: [
            {
                right: false,
                answer: 'כאשר יש צורך בשינויים רבים בדרישות במהלך הפיתוח'
            },
            {
                right: false,
                answer: 'כאשר המערכת המפותחת מיועדת למספר רב של לקוחות שונים'
            },
            {
                right: true,
                answer: 'יש צורך להגדיר יחסי ספק לקוח עם לוחות זמנים קשיחים ותפוקות מוגדרות היטב'
            },
            {
                right: false,
                answer: 'כאשר לא ניתן להגדיר מראש באופן ברור מי יהיה הלקוח הסופי'
            },
        ]
    },
    {
        // 7.
        question: 'תבנית תיכון מסוג סינגלטון שימושית כאשר',
        options: [
            {
                right: false,
                answer: 'המערכת המפותחת קשורה למערכות מוזיקליות'
            },
            {
                right: false,
                answer: 'יש הכרח לפתח מערכת אחת בלבד ללקוח אחד בלבד'
            },
            {
                right: false,
                answer: 'למערכת המפותחת יש דרישות אמינות וזמינות גבוהים במיוחד'
            },
            {
                right: true,
                answer: 'האוביקט הנדרש מגדיר שליטה על משאב מצומצם במערכת'
            },
        ]
    },
    {
        // 8.
        question: 'תבנית תיכון מסוג MVC שימושית בעיקר ל -',
        options: [
            {
                right: false,
                answer: 'לקוחות שמרניים ביותר'
            },
            {
                right: false,
                answer: 'מערכות ללא ממשק משתמש'
            },
            {
                right: true,
                answer: 'מערכות בעלות ממשק משתמש מורכב'
            },
            {
                right: false,
                answer: 'מערכות שזמן הפיתוח שלהן ארוך והדרישות לא ידועות מראש'
            },
        ]
    },
    {
        // 9.
        question: 'דרישה שממשק המשתמש יאפשר הדרכה קצרה (לכל היותר שעתיים) הינה',
        options: [
            {
                right: false,
                answer: 'דרישה בלתי אפשרית'
            },
            {
                right: true,
                answer: 'דרישה " לא פונקציונלית" טובה'
            },
            {
                right: false,
                answer: 'דרישה " פונקציונלית" טובה'
            },
            {
                right: false,
                answer: 'דרישה סבירה אך מורכבת למימוש'
            },
        ]
    },
    {
        // 11.
        question: 'החסרונות של פיתוח אג`ילי כוללים',
        options: [
            {
                right: false,
                answer: 'חוסר ודאות התחלתי ביחס למה יהיו תוצרי הפרויקט הסופי'
            },
            {
                right: false,
                answer: 'פיתוח קוד ללא תיעוד מספק'
            },
            {
                right: false,
                answer: 'אפשרות לכתיבה מחדש (refactoring)של אותו קוד'
            },
            {
                right: true,
                answer: 'כל התשובות נכונות'
            },
        ]
    },
    {
        // 12.
        question: 'אילו מהבאים איננו "דרישה לא פונקציונליות"',
        options: [
            {
                right: false,
                answer: 'צריכת המשאבים של המערכת מוגבלת ל 30MB'
            },
            {
                right: false,
                answer: 'זמן התגובה המקסימלי של כל שאילתה לא יעלה על 1/2 שניה'
            },
            {
                right: true,
                answer: 'על המערכת לתקשר עם מערכת סליקת כרטיסי אשראי לביצוע חיובים מיידיים'
            },
            {
                right: false,
                answer: 'המערכת צריכה להיכתב בשפת JAVA כדי להתאים לשאר המערכות שפותחו עבור לקוח זה.'
            },
        ]
    },
    {
        // 13.
        question: 'במערכת משחק קיימים אוביקטים שמיצגים תנועה של כלי רכב על כביש וכן אוביקטים שמייצגים תעופה בחלל. בשלב כלשהו בפיתוח הוחלט כי יש לאפשר גם כלי רכב שהם בעיקרם כלי טיס אך יש להם פונקציונליות של תנועה על הכביש (למשל מטוס נוסע על כביש). לצורך מימוש פונקציונלית זו יעשה שימוש בתבנית התיכון הבאה :',
        options: [
            {
                right: false,
                answer: 'תבנית תיכון מסוג Factory'
            },
            {
                right: true,
                answer: 'תבנית תיכון מסוג Interface'
            },
            {
                right: false,
                answer: 'תבנית תיכון מסוג Singleton'
            },
            {
                right: false,
                answer: 'תבנית תיכון מסוג Adapter'
            },
        ]
    },
    {
        // 14.
        question: 'בשיטת מפל המים השלב שבו שינוי בדרישות יהיה בעל העלות הגבוהה ביותר יהיה',
        options: [
            {
                right: true,
                answer: 'בשלב התיכון (design)'
            },
            {
                right: false,
                answer: 'בשלב הקידוד (coding)'
            },
            {
                right: false,
                answer: 'בשלב הבדיקות (testing)'
            },
            {
                right: false,
                answer: 'שלב שבו המערכת כבר נמצאת אצל הלקוח (launched)'
            },
        ]
    },
    {
        // 15.
        question: 'בנית אב טיפוס יכול להיות חלק משלב הפיתוח הבא :',
        options: [
            {
                right: true,
                answer: 'קדם פיתוח'
            },
            {
                right: false,
                answer: 'הגדרת דרישות'
            },
            {
                right: false,
                answer: 'תיכון (design)'
            },
            {
                right: false,
                answer: 'בדיקות לקוח'
            },
        ]
    },
    {
        // 16.
        question: 'use case בתרשים',
        options: [
            {
                right: false,
                answer: 'בכל תרשים מוצג case use יחיד'
            },
            {
                right: false,
                answer: 'בכל תרשים מוצגים לכל היותר שלושה cases use'
            },
            {
                right: true,
                answer: 'כאשר ישנם מספר רב של cases use הם יכולים להיות מוצגים במספר תרשימים'
            },
            {
                right: false,
                answer: 'כל ה cases-use של מערכת אחת מוצגים בתרשים אחד'
            },
        ]
    },
    {
        // 17.
        question: 'אילו מהמשפטים הבאים מתאים לתהליכי פיתוח תוכנה הנדסי באופן כללי',
        options: [
            {
                right: false,
                answer: 'מתאים לשפות מבוססות עצמים מסוג JAVA או ++C בלבד'
            },
            {
                right: false,
                answer: 'מתאים לפיתוח מערכות שרת לקוח אך לא פיתוח למערכות זמן אמת'
            },
            {
                right: true,
                answer: 'קיימים כלים כלליים אולם נידרשת התאמה לפי סוג המערכת המפותחת'
            },
            {
                right: false,
                answer: 'סט של כלים שחובה לממש אותם באותו אופן לכל חברת פיתוח תוכנה'
            },
        ]
    },
    {
        // 18.
        question: 'חסרון \נות אופיני\ים לשימוש ב שיטת ה - Reuse',
        options: [
            {
                right: true,
                answer: 'צורך בהתאמה וקונפיגורציה'
            },
            {
                right: false,
                answer: 'תוכנה פחות אמינה מתוכנה חדשה'
            },
            {
                right: false,
                answer: 'אף אחת מהתשובות איננה נכונה'
            },
            {
                right: false,
                answer: 'מהירות הפיתוח'
            },
        ]
    },
]

function shuffle(array: Question[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const x = shuffle(data);

export { x };