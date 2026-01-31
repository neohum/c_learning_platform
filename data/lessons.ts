import type { Lesson } from '@/lib/types';

export const lessons: Lesson[] = [
  // ========== 🔰 초급 레슨 ==========
  {
    id: 'beginner-01-number-guessing',
    title: '🎮 숫자 맞추기 게임',
    category: 'beginner',
    description: '랜덤 숫자를 맞추는 게임을 만들면서 C 언어의 기본을 배웁니다.',
    gameRules: `🎯 게임 목표:
컴퓨터가 1~100 사이의 랜덤 숫자를 하나 선택하고, 사용자가 그 숫자를 맞추는 게임입니다.

📋 게임 룰:
• 사용자가 숫자를 입력하면 "더 큰 숫자입니다" 또는 "더 작은 숫자입니다" 힌트를 제공
• 정답을 맞출 때까지 계속 시도 가능
• 몇 번 만에 맞췄는지 횟수를 기록

💡 배울 내용:
변수, 입출력(scanf/printf), 조건문(if-else), 반복문(while), 난수 생성(rand)`,
    concepts: ['변수', 'scanf/printf', 'if문', 'while문', '난수 생성'],
    steps: [
      {
        code: `#include <stdio.h>

int main() {
    printf("Hello, C World!\\n");
    return 0;
}`,
        explanation: `C 프로그램의 기본 구조입니다.

- #include <stdio.h>: 입출력 함수를 사용하기 위한 헤더 파일
- int main(): 프로그램의 시작점
- printf(): 화면에 출력하는 함수
- return 0: 프로그램이 정상 종료됨을 의미`,
        highlights: [1, 3, 4, 5],
      },
      {
        code: `#include <stdio.h>

int main() {
    int number = 42;
    printf("숫자: %d\\n", number);
    return 0;
}`,
        explanation: `변수를 선언하고 사용해봅시다.

- int number = 42: 정수형 변수 number를 선언하고 42로 초기화
- %d: 정수를 출력할 때 사용하는 형식 지정자`,
        highlights: [4, 5],
      },
      {
        code: `#include <stdio.h>

int main() {
    int guess;
    printf("숫자를 입력하세요: ");
    scanf("%d", &guess);
    printf("입력한 숫자: %d\\n", guess);
    return 0;
}`,
        explanation: `사용자로부터 입력을 받아봅시다.

- scanf("%d", &guess): 사용자 입력을 정수로 받아 guess에 저장
- &guess: 변수의 주소를 의미 (포인터의 기초)`,
        highlights: [4, 5, 6, 7],
      },
      {
        code: `#include <stdio.h>

int main() {
    int answer = 42;
    int guess;

    printf("숫자를 입력하세요: ");
    scanf("%d", &guess);

    if (guess == answer) {
        printf("정답입니다!\\n");
    } else {
        printf("틀렸습니다!\\n");
    }

    return 0;
}`,
        explanation: `조건문(if-else)을 사용해서 정답을 체크합니다.

- if (guess == answer): 조건이 참이면 실행
- else: 조건이 거짓이면 실행
- ==: 같음을 비교하는 연산자 (= 는 대입!)`,
        highlights: [10, 11, 12, 13],
      },
      {
        code: `#include <stdio.h>

int main() {
    int answer = 42;
    int guess = 0;
    int tries = 0;

    while (guess != answer) {
        printf("숫자를 입력하세요: ");
        scanf("%d", &guess);
        tries++;

        if (guess == answer) {
            printf("정답! %d번 만에 맞췄습니다!\\n", tries);
        } else if (guess < answer) {
            printf("더 큰 숫자입니다!\\n");
        } else {
            printf("더 작은 숫자입니다!\\n");
        }
    }

    return 0;
}`,
        explanation: `반복문(while)을 사용해서 여러 번 시도할 수 있게 만듭니다.

- while (조건): 조건이 참인 동안 반복
- tries++: tries를 1 증가시킴`,
        highlights: [8, 11, 13],
      },
    ],
    finalCode: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));
    int answer = rand() % 100 + 1;
    int guess = 0;
    int tries = 0;

    printf("=== 숫자 맞추기 게임 ===\\n");
    printf("1부터 100 사이의 숫자를 맞춰보세요!\\n\\n");

    while (guess != answer) {
        printf("숫자를 입력하세요: ");
        scanf("%d", &guess);
        tries++;

        if (guess == answer) {
            printf("\\n정답입니다! %d번 만에 맞췄습니다!\\n", tries);
        } else if (guess < answer) {
            printf("더 큰 숫자입니다!\\n\\n");
        } else {
            printf("더 작은 숫자입니다!\\n\\n");
        }
    }

    return 0;
}`,
    challenge: `게임을 개선해봅시다:
1. 시도 횟수를 10번으로 제한하기
2. 범위를 벗어난 입력 처리하기
3. 다시 플레이 기능 추가하기`,
  },

  {
    id: 'beginner-02-phonebook',
    title: '📒 전화번호부',
    category: 'beginner',
    description: '배열과 문자열을 사용해서 연락처를 관리하는 프로그램을 만듭니다.',
    concepts: ['배열', '문자열', '구조체', 'for문', '함수'],
    steps: [
      {
        code: `#include <stdio.h>
#include <string.h>

int main() {
    char name[50];
    printf("이름을 입력하세요: ");
    scanf("%s", name);
    printf("안녕하세요, %s님!\\n", name);
    return 0;
}`,
        explanation: `문자열을 다뤄봅시다.

- char name[50]: 최대 50자를 저장할 수 있는 문자 배열
- scanf("%s", name): 문자열 입력 (& 없이 사용!)
- %s: 문자열 출력 형식 지정자`,
        highlights: [5, 6, 7, 8],
      },
      {
        code: `#include <stdio.h>
#include <string.h>

struct Contact {
    char name[50];
    char phone[20];
};

int main() {
    struct Contact person;

    printf("이름: ");
    scanf("%s", person.name);
    printf("전화번호: ");
    scanf("%s", person.phone);

    printf("\\n저장된 연락처:\\n");
    printf("이름: %s\\n", person.name);
    printf("전화: %s\\n", person.phone);

    return 0;
}`,
        explanation: `구조체로 관련된 데이터를 묶어봅시다.

- struct Contact: 이름과 전화번호를 함께 저장하는 구조체
- person.name: 구조체 멤버에 접근하는 방법 (점 연산자)`,
        highlights: [4, 5, 6, 10, 13, 15],
      },
      {
        code: `#include <stdio.h>
#include <string.h>

struct Contact {
    char name[50];
    char phone[20];
};

int main() {
    struct Contact contacts[100];
    int count = 0;

    // 연락처 3개 입력
    for (int i = 0; i < 3; i++) {
        printf("\\n[%d번째 연락처]\\n", i + 1);
        printf("이름: ");
        scanf("%s", contacts[i].name);
        printf("전화번호: ");
        scanf("%s", contacts[i].phone);
        count++;
    }

    // 전체 출력
    printf("\\n=== 전화번호부 ===\\n");
    for (int i = 0; i < count; i++) {
        printf("%d. %s - %s\\n", i + 1,
               contacts[i].name, contacts[i].phone);
    }

    return 0;
}`,
        explanation: `배열로 여러 개의 연락처를 저장해봅시다.

- struct Contact contacts[100]: 최대 100개의 연락처를 저장
- for (int i = 0; i < 3; i++): 반복문으로 3번 입력받기
- contacts[i].name: 배열의 i번째 요소의 name 멤버`,
        highlights: [10, 11, 14, 17, 19, 25],
      },
      {
        code: `#include <stdio.h>
#include <string.h>

struct Contact {
    char name[50];
    char phone[20];
};

void addContact(struct Contact contacts[], int *count) {
    printf("\\n이름: ");
    scanf("%s", contacts[*count].name);
    printf("전화번호: ");
    scanf("%s", contacts[*count].phone);
    (*count)++;
    printf("연락처가 추가되었습니다!\\n");
}

void printAll(struct Contact contacts[], int count) {
    printf("\\n=== 전화번호부 ===\\n");
    for (int i = 0; i < count; i++) {
        printf("%d. %s - %s\\n", i + 1,
               contacts[i].name, contacts[i].phone);
    }
}

int main() {
    struct Contact contacts[100];
    int count = 0;

    addContact(contacts, &count);
    addContact(contacts, &count);
    printAll(contacts, count);

    return 0;
}`,
        explanation: `함수로 기능을 분리해봅시다.

- void addContact(...): 연락처를 추가하는 함수
- int *count: 포인터로 값을 변경 (주소 전달)
- (*count)++: 포인터가 가리키는 값을 증가`,
        highlights: [9, 14, 18, 30, 31],
      },
    ],
    finalCode: `#include <stdio.h>
#include <string.h>

struct Contact {
    char name[50];
    char phone[20];
};

void addContact(struct Contact contacts[], int *count) {
    if (*count >= 100) {
        printf("전화번호부가 가득 찼습니다!\\n");
        return;
    }
    printf("\\n이름: ");
    scanf("%s", contacts[*count].name);
    printf("전화번호: ");
    scanf("%s", contacts[*count].phone);
    (*count)++;
    printf("연락처가 추가되었습니다!\\n");
}

void searchContact(struct Contact contacts[], int count) {
    char searchName[50];
    printf("\\n검색할 이름: ");
    scanf("%s", searchName);

    for (int i = 0; i < count; i++) {
        if (strcmp(contacts[i].name, searchName) == 0) {
            printf("이름: %s\\n", contacts[i].name);
            printf("전화: %s\\n", contacts[i].phone);
            return;
        }
    }
    printf("찾을 수 없습니다.\\n");
}

void printAll(struct Contact contacts[], int count) {
    if (count == 0) {
        printf("\\n저장된 연락처가 없습니다.\\n");
        return;
    }
    printf("\\n=== 전화번호부 (%d개) ===\\n", count);
    for (int i = 0; i < count; i++) {
        printf("%d. %s - %s\\n", i + 1,
               contacts[i].name, contacts[i].phone);
    }
}

int main() {
    struct Contact contacts[100];
    int count = 0;
    int choice;

    while (1) {
        printf("\\n=== 메뉴 ===\\n");
        printf("1. 추가\\n");
        printf("2. 검색\\n");
        printf("3. 전체보기\\n");
        printf("4. 종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        if (choice == 1) {
            addContact(contacts, &count);
        } else if (choice == 2) {
            searchContact(contacts, count);
        } else if (choice == 3) {
            printAll(contacts, count);
        } else if (choice == 4) {
            printf("프로그램을 종료합니다.\\n");
            break;
        } else {
            printf("잘못된 선택입니다.\\n");
        }
    }

    return 0;
}`,
    challenge: `전화번호부를 확장해봅시다:
1. 연락처 삭제 기능 추가
2. 이메일 주소 필드 추가
3. 파일로 저장/불러오기 기능`,
  },

  {
    id: 'beginner-03-calculator',
    title: '🧮 계산기',
    category: 'beginner',
    description: '사칙연산을 수행하는 계산기를 만들면서 연산자와 함수를 배웁니다.',
    concepts: ['연산자', 'switch문', '함수', 'double형'],
    steps: [
      {
        code: `#include <stdio.h>

int main() {
    double a = 10.5;
    double b = 3.2;

    printf("%.2f + %.2f = %.2f\\n", a, b, a + b);
    printf("%.2f - %.2f = %.2f\\n", a, b, a - b);
    printf("%.2f * %.2f = %.2f\\n", a, b, a * b);
    printf("%.2f / %.2f = %.2f\\n", a, b, a / b);

    return 0;
}`,
        explanation: `기본 산술 연산자를 사용해봅시다.

- double: 실수를 저장하는 자료형
- %.2f: 소수점 둘째 자리까지 출력
- +, -, *, /: 사칙연산 연산자`,
        highlights: [4, 5, 7, 8, 9, 10],
      },
      {
        code: `#include <stdio.h>

int main() {
    double a, b;
    char op;

    printf("계산식을 입력하세요 (예: 5 + 3): ");
    scanf("%lf %c %lf", &a, &op, &b);

    if (op == '+') {
        printf("결과: %.2f\\n", a + b);
    } else if (op == '-') {
        printf("결과: %.2f\\n", a - b);
    } else if (op == '*') {
        printf("결과: %.2f\\n", a * b);
    } else if (op == '/') {
        printf("결과: %.2f\\n", a / b);
    } else {
        printf("알 수 없는 연산자입니다.\\n");
    }

    return 0;
}`,
        explanation: `사용자 입력을 받아서 계산해봅시다.

- char op: 연산자를 저장하는 문자 변수
- %lf: double 입력/출력 형식 지정자
- %c: 문자 입력 형식 지정자`,
        highlights: [5, 8, 10, 12, 14, 16],
      },
      {
        code: `#include <stdio.h>

double calculate(double a, double b, char op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b != 0) {
                return a / b;
            } else {
                printf("0으로 나눌 수 없습니다!\\n");
                return 0;
            }
        default:
            printf("알 수 없는 연산자입니다.\\n");
            return 0;
    }
}

int main() {
    double a, b;
    char op;

    printf("계산식을 입력하세요 (예: 5 + 3): ");
    scanf("%lf %c %lf", &a, &op, &b);

    double result = calculate(a, b, op);
    printf("결과: %.2f\\n", result);

    return 0;
}`,
        explanation: `switch문과 함수를 사용해서 깔끔하게 만들어봅시다.

- switch (op): 여러 경우를 처리하는 조건문
- case '+': op가 '+'인 경우
- return: 함수에서 값을 반환
- default: 해당하는 case가 없을 때`,
        highlights: [3, 4, 5, 6, 11, 12, 18],
      },
      {
        code: `#include <stdio.h>

double add(double a, double b) { return a + b; }
double subtract(double a, double b) { return a - b; }
double multiply(double a, double b) { return a * b; }
double divide(double a, double b) {
    if (b != 0) return a / b;
    printf("0으로 나눌 수 없습니다!\\n");
    return 0;
}

void printMenu() {
    printf("\\n=== 계산기 ===\\n");
    printf("1. 덧셈\\n");
    printf("2. 뺄셈\\n");
    printf("3. 곱셈\\n");
    printf("4. 나눗셈\\n");
    printf("5. 종료\\n");
    printf("선택: ");
}

int main() {
    int choice;
    double a, b, result;

    while (1) {
        printMenu();
        scanf("%d", &choice);

        if (choice == 5) {
            printf("계산기를 종료합니다.\\n");
            break;
        }

        printf("첫 번째 숫자: ");
        scanf("%lf", &a);
        printf("두 번째 숫자: ");
        scanf("%lf", &b);

        switch (choice) {
            case 1:
                result = add(a, b);
                printf("%.2f + %.2f = %.2f\\n", a, b, result);
                break;
            case 2:
                result = subtract(a, b);
                printf("%.2f - %.2f = %.2f\\n", a, b, result);
                break;
            case 3:
                result = multiply(a, b);
                printf("%.2f * %.2f = %.2f\\n", a, b, result);
                break;
            case 4:
                result = divide(a, b);
                if (b != 0) {
                    printf("%.2f / %.2f = %.2f\\n", a, b, result);
                }
                break;
            default:
                printf("잘못된 선택입니다.\\n");
        }
    }

    return 0;
}`,
        explanation: `메뉴 기반 계산기를 만들어봅시다.

- 각 연산을 독립적인 함수로 분리
- while (1): 무한 루프
- break: 루프 종료`,
        highlights: [3, 4, 5, 6, 12, 26, 31, 40, 42, 46],
      },
    ],
    finalCode: `#include <stdio.h>
#include <math.h>

double add(double a, double b) { return a + b; }
double subtract(double a, double b) { return a - b; }
double multiply(double a, double b) { return a * b; }
double divide(double a, double b) {
    if (b != 0) return a / b;
    printf("0으로 나눌 수 없습니다!\\n");
    return 0;
}

void printMenu() {
    printf("\\n=== 공학 계산기 ===\\n");
    printf("1. 덧셈\\n");
    printf("2. 뺄셈\\n");
    printf("3. 곱셈\\n");
    printf("4. 나눗셈\\n");
    printf("5. 제곱\\n");
    printf("6. 제곱근\\n");
    printf("7. 종료\\n");
    printf("선택: ");
}

int main() {
    int choice;
    double a, b, result;

    while (1) {
        printMenu();
        scanf("%d", &choice);

        if (choice == 7) {
            printf("계산기를 종료합니다.\\n");
            break;
        }

        if (choice >= 1 && choice <= 4) {
            printf("첫 번째 숫자: ");
            scanf("%lf", &a);
            printf("두 번째 숫자: ");
            scanf("%lf", &b);
        } else if (choice == 5 || choice == 6) {
            printf("숫자: ");
            scanf("%lf", &a);
        }

        switch (choice) {
            case 1:
                printf("%.2f + %.2f = %.2f\\n", a, b, add(a, b));
                break;
            case 2:
                printf("%.2f - %.2f = %.2f\\n", a, b, subtract(a, b));
                break;
            case 3:
                printf("%.2f * %.2f = %.2f\\n", a, b, multiply(a, b));
                break;
            case 4:
                result = divide(a, b);
                if (b != 0) {
                    printf("%.2f / %.2f = %.2f\\n", a, b, result);
                }
                break;
            case 5:
                printf("%.2f ^ 2 = %.2f\\n", a, pow(a, 2));
                break;
            case 6:
                if (a >= 0) {
                    printf("√%.2f = %.2f\\n", a, sqrt(a));
                } else {
                    printf("음수의 제곱근은 계산할 수 없습니다.\\n");
                }
                break;
            default:
                printf("잘못된 선택입니다.\\n");
        }
    }

    return 0;
}`,
    challenge: `계산기를 확장해봅시다:
1. 삼각함수 (sin, cos, tan) 추가
2. 계산 기록 저장 기능
3. 연속 계산 기능 (이전 결과 사용)`,
  },

  {
    id: 'beginner-04-tictactoe',
    title: '❌⭕ 틱택토',
    category: 'beginner',
    description: '2차원 배열을 사용해서 틱택토 게임을 만듭니다.',
    concepts: ['2차원 배열', '중첩 반복문', '게임 로직'],
    steps: [
      {
        code: `#include <stdio.h>

int main() {
    char board[3][3] = {
        {' ', ' ', ' '},
        {' ', ' ', ' '},
        {' ', ' ', ' '}
    };

    // 보드 출력
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf(" %c ", board[i][j]);
            if (j < 2) printf("|");
        }
        printf("\\n");
        if (i < 2) printf("---|---|---\\n");
    }

    return 0;
}`,
        explanation: `2차원 배열로 게임 보드를 만들어봅시다.

- char board[3][3]: 3x3 크기의 2차원 배열
- 중첩 for문: 2차원 배열을 순회
- board[i][j]: i행 j열의 값`,
        highlights: [4, 5, 6, 7, 11, 12],
      },
      {
        code: `#include <stdio.h>

void printBoard(char board[3][3]) {
    printf("\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf(" %c ", board[i][j]);
            if (j < 2) printf("|");
        }
        printf("\\n");
        if (i < 2) printf("---|---|---\\n");
    }
    printf("\\n");
}

int main() {
    char board[3][3] = {
        {' ', ' ', ' '},
        {' ', ' ', ' '},
        {' ', ' ', ' '}
    };

    int row, col;

    printBoard(board);

    printf("위치를 입력하세요 (행 열, 0-2): ");
    scanf("%d %d", &row, &col);

    board[row][col] = 'X';

    printBoard(board);

    return 0;
}`,
        explanation: `보드에 표시해봅시다.

- printBoard 함수: 보드를 출력하는 함수
- scanf로 행, 열 입력 받기
- board[row][col] = 'X': 해당 위치에 X 표시`,
        highlights: [3, 27, 29, 31],
      },
      {
        code: `#include <stdio.h>

void printBoard(char board[3][3]) {
    printf("\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf(" %c ", board[i][j]);
            if (j < 2) printf("|");
        }
        printf("\\n");
        if (i < 2) printf("---|---|---\\n");
    }
    printf("\\n");
}

int checkWin(char board[3][3], char player) {
    // 가로 체크
    for (int i = 0; i < 3; i++) {
        if (board[i][0] == player &&
            board[i][1] == player &&
            board[i][2] == player) {
            return 1;
        }
    }

    // 세로 체크
    for (int j = 0; j < 3; j++) {
        if (board[0][j] == player &&
            board[1][j] == player &&
            board[2][j] == player) {
            return 1;
        }
    }

    // 대각선 체크
    if ((board[0][0] == player &&
         board[1][1] == player &&
         board[2][2] == player) ||
        (board[0][2] == player &&
         board[1][1] == player &&
         board[2][0] == player)) {
        return 1;
    }

    return 0;
}

int main() {
    char board[3][3] = {
        {' ', ' ', ' '},
        {' ', ' ', ' '},
        {' ', ' ', ' '}
    };

    board[0][0] = 'X';
    board[0][1] = 'X';
    board[0][2] = 'X';

    printBoard(board);

    if (checkWin(board, 'X')) {
        printf("X가 승리했습니다!\\n");
    }

    return 0;
}`,
        explanation: `승리 조건을 체크하는 함수를 만들어봅시다.

- checkWin 함수: 가로, 세로, 대각선을 체크
- return 1: 승리 (참)
- return 0: 승리하지 않음 (거짓)`,
        highlights: [16, 18, 19, 20, 21, 27, 36, 59, 60],
      },
      {
        code: `#include <stdio.h>

void printBoard(char board[3][3]) {
    printf("\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf(" %c ", board[i][j]);
            if (j < 2) printf("|");
        }
        printf("\\n");
        if (i < 2) printf("---|---|---\\n");
    }
    printf("\\n");
}

int checkWin(char board[3][3], char player) {
    for (int i = 0; i < 3; i++) {
        if (board[i][0] == player &&
            board[i][1] == player &&
            board[i][2] == player) return 1;
    }
    for (int j = 0; j < 3; j++) {
        if (board[0][j] == player &&
            board[1][j] == player &&
            board[2][j] == player) return 1;
    }
    if ((board[0][0] == player &&
         board[1][1] == player &&
         board[2][2] == player) ||
        (board[0][2] == player &&
         board[1][1] == player &&
         board[2][0] == player)) return 1;
    return 0;
}

int main() {
    char board[3][3] = {
        {' ', ' ', ' '},
        {' ', ' ', ' '},
        {' ', ' ', ' '}
    };

    char currentPlayer = 'X';
    int row, col;
    int moves = 0;

    while (1) {
        printBoard(board);

        printf("%c 차례입니다. 위치 입력 (행 열, 0-2): ", currentPlayer);
        scanf("%d %d", &row, &col);

        if (row < 0 || row > 2 || col < 0 || col > 2 ||
            board[row][col] != ' ') {
            printf("잘못된 위치입니다!\\n");
            continue;
        }

        board[row][col] = currentPlayer;
        moves++;

        if (checkWin(board, currentPlayer)) {
            printBoard(board);
            printf("%c가 승리했습니다!\\n", currentPlayer);
            break;
        }

        if (moves == 9) {
            printBoard(board);
            printf("무승부입니다!\\n");
            break;
        }

        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    }

    return 0;
}`,
        explanation: `완전한 게임 루프를 만들어봅시다.

- currentPlayer: 현재 플레이어 ('X' 또는 'O')
- 입력 검증: 범위 체크 및 빈 칸 체크
- 턴 교체: 삼항 연산자 사용
- 무승부 체크: moves == 9`,
        highlights: [42, 46, 50, 51, 52, 58, 61, 67, 73],
      },
    ],
    finalCode: `#include <stdio.h>

void printBoard(char board[3][3]) {
    printf("\\n");
    printf("     0   1   2\\n");
    for (int i = 0; i < 3; i++) {
        printf("  %d ", i);
        for (int j = 0; j < 3; j++) {
            printf(" %c ", board[i][j]);
            if (j < 2) printf("|");
        }
        printf("\\n");
        if (i < 2) printf("    ---|---|---\\n");
    }
    printf("\\n");
}

int checkWin(char board[3][3], char player) {
    for (int i = 0; i < 3; i++) {
        if (board[i][0] == player &&
            board[i][1] == player &&
            board[i][2] == player) return 1;
    }
    for (int j = 0; j < 3; j++) {
        if (board[0][j] == player &&
            board[1][j] == player &&
            board[2][j] == player) return 1;
    }
    if ((board[0][0] == player &&
         board[1][1] == player &&
         board[2][2] == player) ||
        (board[0][2] == player &&
         board[1][1] == player &&
         board[2][0] == player)) return 1;
    return 0;
}

int main() {
    char board[3][3] = {
        {' ', ' ', ' '},
        {' ', ' ', ' '},
        {' ', ' ', ' '}
    };

    char currentPlayer = 'X';
    int row, col;
    int moves = 0;

    printf("=== 틱택토 게임 ===\\n");

    while (1) {
        printBoard(board);

        printf("%c 차례입니다. 위치 입력 (행 열, 0-2): ", currentPlayer);
        scanf("%d %d", &row, &col);

        if (row < 0 || row > 2 || col < 0 || col > 2) {
            printf("잘못된 범위입니다! (0-2 사이의 숫자를 입력하세요)\\n");
            continue;
        }

        if (board[row][col] != ' ') {
            printf("이미 차있는 위치입니다!\\n");
            continue;
        }

        board[row][col] = currentPlayer;
        moves++;

        if (checkWin(board, currentPlayer)) {
            printBoard(board);
            printf("축하합니다! %c가 승리했습니다!\\n", currentPlayer);
            break;
        }

        if (moves == 9) {
            printBoard(board);
            printf("무승부입니다!\\n");
            break;
        }

        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    }

    return 0;
}`,
    challenge: `틱택토를 확장해봅시다:
1. AI 상대 추가 (컴퓨터가 랜덤하게 두기)
2. 다시 플레이 기능
3. 승리 횟수 기록`,
  },

  {
    id: 'beginner-05-rps',
    title: '✊✋✌️ 가위바위보',
    category: 'beginner',
    description: '난수를 활용한 가위바위보 게임을 만듭니다.',
    concepts: ['난수 생성', 'enum', '조건문'],
    steps: [
      {
        code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));

    int computer = rand() % 3; // 0, 1, 2

    printf("컴퓨터가 선택한 숫자: %d\\n", computer);
    printf("0: 가위, 1: 바위, 2: 보\\n");

    return 0;
}`,
        explanation: `난수를 생성해봅시다.

- srand(time(NULL)): 난수 시드 설정 (현재 시간 사용)
- rand(): 난수 생성
- rand() % 3: 0, 1, 2 중 하나를 반환`,
        highlights: [6, 8],
      },
      {
        code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));

    int player, computer;

    printf("가위(0), 바위(1), 보(2): ");
    scanf("%d", &player);

    computer = rand() % 3;

    printf("\\n플레이어: %d\\n", player);
    printf("컴퓨터: %d\\n", computer);

    if (player == computer) {
        printf("비겼습니다!\\n");
    } else if ((player == 0 && computer == 2) ||
               (player == 1 && computer == 0) ||
               (player == 2 && computer == 1)) {
        printf("플레이어 승리!\\n");
    } else {
        printf("컴퓨터 승리!\\n");
    }

    return 0;
}`,
        explanation: `승부를 판정해봅시다.

- player == computer: 비김
- 승리 조건: 가위(0) > 보(2), 바위(1) > 가위(0), 보(2) > 바위(1)
- 나머지는 패배`,
        highlights: [18, 20, 21, 22, 24],
      },
      {
        code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

const char* choices[] = {"가위", "바위", "보"};

int main() {
    srand(time(NULL));

    int player, computer;

    printf("가위(0), 바위(1), 보(2): ");
    scanf("%d", &player);

    if (player < 0 || player > 2) {
        printf("잘못된 입력입니다!\\n");
        return 1;
    }

    computer = rand() % 3;

    printf("\\n플레이어: %s\\n", choices[player]);
    printf("컴퓨터: %s\\n\\n", choices[computer]);

    if (player == computer) {
        printf("비겼습니다!\\n");
    } else if ((player == 0 && computer == 2) ||
               (player == 1 && computer == 0) ||
               (player == 2 && computer == 1)) {
        printf("플레이어 승리!\\n");
    } else {
        printf("컴퓨터 승리!\\n");
    }

    return 0;
}`,
        explanation: `문자열 배열로 보기 좋게 출력해봅시다.

- const char* choices[]: 문자열 배열
- choices[player]: 배열의 player번째 문자열
- 입력 검증 추가`,
        highlights: [5, 15, 16, 17, 22, 23],
      },
      {
        code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

const char* choices[] = {"가위", "바위", "보"};

int main() {
    srand(time(NULL));

    int player, computer;
    int playerWins = 0, computerWins = 0, draws = 0;
    char playAgain;

    do {
        printf("\\n=== 가위바위보 ===\\n");
        printf("가위(0), 바위(1), 보(2): ");
        scanf("%d", &player);

        if (player < 0 || player > 2) {
            printf("잘못된 입력입니다!\\n");
            continue;
        }

        computer = rand() % 3;

        printf("\\n플레이어: %s\\n", choices[player]);
        printf("컴퓨터: %s\\n\\n", choices[computer]);

        if (player == computer) {
            printf("비겼습니다!\\n");
            draws++;
        } else if ((player == 0 && computer == 2) ||
                   (player == 1 && computer == 0) ||
                   (player == 2 && computer == 1)) {
            printf("플레이어 승리!\\n");
            playerWins++;
        } else {
            printf("컴퓨터 승리!\\n");
            computerWins++;
        }

        printf("\\n현재 전적: %d승 %d패 %d무\\n",
               playerWins, computerWins, draws);

        printf("\\n다시 하시겠습니까? (y/n): ");
        scanf(" %c", &playAgain);

    } while (playAgain == 'y' || playAgain == 'Y');

    printf("\\n최종 전적: %d승 %d패 %d무\\n",
           playerWins, computerWins, draws);
    printf("게임을 종료합니다.\\n");

    return 0;
}`,
        explanation: `반복 플레이와 전적 기록을 추가해봅시다.

- do-while문: 최소 1번은 실행되는 반복문
- playerWins++: 승리 횟수 증가
- continue: 현재 반복을 건너뛰고 다음 반복으로`,
        highlights: [11, 14, 31, 36, 40, 42, 43, 47],
      },
    ],
    finalCode: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

const char* choices[] = {"✊ 가위", "✋ 바위", "✌️ 보"};

int main() {
    srand(time(NULL));

    int player, computer;
    int playerWins = 0, computerWins = 0, draws = 0;
    int totalGames = 0;
    char playAgain;

    printf("=== 가위바위보 게임 ===\\n");

    do {
        printf("\\n--- 게임 #%d ---\\n", totalGames + 1);
        printf("가위(0), 바위(1), 보(2), 종료(9): ");
        scanf("%d", &player);

        if (player == 9) {
            break;
        }

        if (player < 0 || player > 2) {
            printf("잘못된 입력입니다!\\n");
            continue;
        }

        computer = rand() % 3;

        printf("\\n플레이어: %s\\n", choices[player]);
        printf("컴퓨터: %s\\n\\n", choices[computer]);

        if (player == computer) {
            printf("🤝 비겼습니다!\\n");
            draws++;
        } else if ((player == 0 && computer == 2) ||
                   (player == 1 && computer == 0) ||
                   (player == 2 && computer == 1)) {
            printf("🎉 플레이어 승리!\\n");
            playerWins++;
        } else {
            printf("😢 컴퓨터 승리!\\n");
            computerWins++;
        }

        totalGames++;

        float winRate = totalGames > 0 ?
                       (float)playerWins / totalGames * 100 : 0;

        printf("\\n현재 전적: %d승 %d패 %d무 (승률: %.1f%%)\\n",
               playerWins, computerWins, draws, winRate);

        printf("계속하시겠습니까? (y/n): ");
        scanf(" %c", &playAgain);

    } while (playAgain == 'y' || playAgain == 'Y');

    printf("\\n=== 최종 결과 ===\\n");
    printf("총 게임 수: %d\\n", totalGames);
    printf("전적: %d승 %d패 %d무\\n",
           playerWins, computerWins, draws);

    if (playerWins > computerWins) {
        printf("축하합니다! 당신이 이겼습니다!\\n");
    } else if (playerWins < computerWins) {
        printf("아쉽네요. 다음에 다시 도전하세요!\\n");
    } else {
        printf("동점입니다!\\n");
    }

    printf("\\n게임을 종료합니다. 감사합니다!\\n");

    return 0;
}`,
    challenge: `가위바위보를 확장해봅시다:
1. 베스트 오브 3, 5 모드 추가
2. 플레이어 2명이 하는 모드
3. 특수 기술 추가 (1회 사용 가능한 필살기)`,
  },

  {
    id: 'beginner-06-todo',
    title: '📅 일정 관리',
    category: 'beginner',
    description: '배열과 구조체로 간단한 할 일 목록을 만듭니다.',
    concepts: ['구조체 배열', '문자열 함수', '파일 입출력'],
    steps: [
      {
        code: `#include <stdio.h>
#include <string.h>

struct Task {
    char title[100];
    int completed;
};

int main() {
    struct Task task;

    strcpy(task.title, "C 언어 공부하기");
    task.completed = 0;

    printf("할 일: %s\\n", task.title);
    printf("완료 여부: %s\\n", task.completed ? "완료" : "미완료");

    return 0;
}`,
        explanation: `구조체로 할 일을 표현해봅시다.

- struct Task: 제목과 완료 여부를 가진 구조체
- strcpy: 문자열 복사 함수
- 삼항 연산자: 조건 ? 참일때 : 거짓일때`,
        highlights: [4, 5, 6, 10, 12, 13, 16],
      },
      {
        code: `#include <stdio.h>
#include <string.h>

struct Task {
    char title[100];
    int completed;
};

void printTasks(struct Task tasks[], int count) {
    printf("\\n=== 할 일 목록 ===\\n");
    for (int i = 0; i < count; i++) {
        printf("%d. [%s] %s\\n", i + 1,
               tasks[i].completed ? "✓" : " ",
               tasks[i].title);
    }
    printf("\\n");
}

int main() {
    struct Task tasks[100];
    int count = 3;

    strcpy(tasks[0].title, "C 언어 공부");
    tasks[0].completed = 1;

    strcpy(tasks[1].title, "프로젝트 코딩");
    tasks[1].completed = 0;

    strcpy(tasks[2].title, "운동하기");
    tasks[2].completed = 0;

    printTasks(tasks, count);

    return 0;
}`,
        explanation: `여러 개의 할 일을 관리해봅시다.

- struct Task tasks[100]: 할 일 배열
- printTasks 함수: 모든 할 일 출력
- [✓] 또는 [ ]: 완료 여부 표시`,
        highlights: [9, 11, 12, 13, 19, 20, 32],
      },
      {
        code: `#include <stdio.h>
#include <string.h>

struct Task {
    char title[100];
    int completed;
};

void addTask(struct Task tasks[], int *count) {
    if (*count >= 100) {
        printf("할 일이 가득 찼습니다!\\n");
        return;
    }

    printf("할 일을 입력하세요: ");
    getchar(); // 버퍼 비우기
    fgets(tasks[*count].title, 100, stdin);
    tasks[*count].title[strlen(tasks[*count].title) - 1] = '\\0';
    tasks[*count].completed = 0;
    (*count)++;

    printf("할 일이 추가되었습니다!\\n");
}

void printTasks(struct Task tasks[], int count) {
    printf("\\n=== 할 일 목록 ===\\n");
    if (count == 0) {
        printf("등록된 할 일이 없습니다.\\n");
        return;
    }
    for (int i = 0; i < count; i++) {
        printf("%d. [%s] %s\\n", i + 1,
               tasks[i].completed ? "✓" : " ",
               tasks[i].title);
    }
    printf("\\n");
}

void toggleTask(struct Task tasks[], int count) {
    int num;
    printf("완료 처리할 번호: ");
    scanf("%d", &num);

    if (num < 1 || num > count) {
        printf("잘못된 번호입니다!\\n");
        return;
    }

    tasks[num - 1].completed = !tasks[num - 1].completed;
    printf("%s (으)로 변경되었습니다!\\n",
           tasks[num - 1].completed ? "완료" : "미완료");
}

int main() {
    struct Task tasks[100];
    int count = 0;
    int choice;

    while (1) {
        printf("\\n1.추가 2.보기 3.완료 4.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        if (choice == 1) {
            addTask(tasks, &count);
        } else if (choice == 2) {
            printTasks(tasks, count);
        } else if (choice == 3) {
            toggleTask(tasks, count);
        } else if (choice == 4) {
            printf("프로그램을 종료합니다.\\n");
            break;
        }
    }

    return 0;
}`,
        explanation: `완전한 할 일 관리 시스템을 만들어봅시다.

- addTask: 새 할 일 추가
- fgets: 공백 포함 문자열 입력
- toggleTask: 완료 상태 변경
- !tasks[num - 1].completed: 논리 NOT (반전)`,
        highlights: [9, 16, 17, 18, 38, 49, 65, 67, 69],
      },
    ],
    finalCode: `#include <stdio.h>
#include <string.h>

struct Task {
    char title[100];
    char priority[10]; // "높음", "보통", "낮음"
    int completed;
};

void addTask(struct Task tasks[], int *count) {
    if (*count >= 100) {
        printf("할 일이 가득 찼습니다!\\n");
        return;
    }

    printf("\\n할 일을 입력하세요: ");
    getchar();
    fgets(tasks[*count].title, 100, stdin);
    tasks[*count].title[strlen(tasks[*count].title) - 1] = '\\0';

    printf("우선순위 (1.높음 2.보통 3.낮음): ");
    int priority;
    scanf("%d", &priority);

    if (priority == 1) strcpy(tasks[*count].priority, "높음");
    else if (priority == 2) strcpy(tasks[*count].priority, "보통");
    else strcpy(tasks[*count].priority, "낮음");

    tasks[*count].completed = 0;
    (*count)++;

    printf("할 일이 추가되었습니다!\\n");
}

void printTasks(struct Task tasks[], int count) {
    printf("\\n=== 할 일 목록 (%d개) ===\\n", count);
    if (count == 0) {
        printf("등록된 할 일이 없습니다.\\n");
        return;
    }

    for (int i = 0; i < count; i++) {
        printf("%d. [%s] %s [%s]\\n", i + 1,
               tasks[i].completed ? "✓" : " ",
               tasks[i].title,
               tasks[i].priority);
    }
    printf("\\n");
}

void toggleTask(struct Task tasks[], int count) {
    if (count == 0) {
        printf("할 일이 없습니다!\\n");
        return;
    }

    int num;
    printf("번호를 입력하세요: ");
    scanf("%d", &num);

    if (num < 1 || num > count) {
        printf("잘못된 번호입니다!\\n");
        return;
    }

    tasks[num - 1].completed = !tasks[num - 1].completed;
    printf("'%s' (을)를 %s(으)로 변경했습니다!\\n",
           tasks[num - 1].title,
           tasks[num - 1].completed ? "완료" : "미완료");
}

void deleteTask(struct Task tasks[], int *count) {
    if (*count == 0) {
        printf("할 일이 없습니다!\\n");
        return;
    }

    int num;
    printf("삭제할 번호: ");
    scanf("%d", &num);

    if (num < 1 || num > *count) {
        printf("잘못된 번호입니다!\\n");
        return;
    }

    printf("'%s'을(를) 삭제했습니다.\\n", tasks[num - 1].title);

    for (int i = num - 1; i < *count - 1; i++) {
        tasks[i] = tasks[i + 1];
    }
    (*count)--;
}

int main() {
    struct Task tasks[100];
    int count = 0;
    int choice;

    printf("=== 할 일 관리 프로그램 ===\\n");

    while (1) {
        printf("\\n1.추가 2.보기 3.완료 4.삭제 5.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        if (choice == 1) {
            addTask(tasks, &count);
        } else if (choice == 2) {
            printTasks(tasks, count);
        } else if (choice == 3) {
            toggleTask(tasks, count);
        } else if (choice == 4) {
            deleteTask(tasks, &count);
        } else if (choice == 5) {
            printf("\\n프로그램을 종료합니다.\\n");
            break;
        } else {
            printf("잘못된 선택입니다!\\n");
        }
    }

    return 0;
}`,
    challenge: `일정 관리를 확장해봅시다:
1. 파일에 저장하고 불러오기 (파일 입출력)
2. 날짜와 시간 추가
3. 카테고리별 분류 (공부, 운동, 개인 등)`,
  },

  // ========== 💪 중급 레슨 ==========
  {
    id: 'intermediate-01-notepad',
    title: '🗂 파일 메모장',
    category: 'intermediate',
    description: '파일 입출력을 배우면서 텍스트 파일을 읽고 쓰는 메모장을 만듭니다.',
    concepts: ['FILE 포인터', 'fopen/fclose', 'fprintf/fscanf', 'fgets/fputs'],
    steps: [
      {
        code: `#include <stdio.h>

int main() {
    FILE *file;

    file = fopen("test.txt", "w");

    if (file == NULL) {
        printf("파일을 열 수 없습니다!\\n");
        return 1;
    }

    fprintf(file, "Hello, File!\\n");
    fprintf(file, "C 언어 파일 입출력\\n");

    fclose(file);

    printf("파일이 저장되었습니다.\\n");

    return 0;
}`,
        explanation: `파일에 텍스트를 써봅시다.

- FILE *file: 파일 포인터
- fopen("파일명", "모드"): 파일 열기
  - "w": 쓰기 모드 (덮어쓰기)
- fprintf: 파일에 출력
- fclose: 파일 닫기 (필수!)`,
        highlights: [4, 6, 8, 9, 13, 14, 16],
      },
      {
        code: `#include <stdio.h>

int main() {
    FILE *file;
    char line[256];

    file = fopen("test.txt", "r");

    if (file == NULL) {
        printf("파일을 찾을 수 없습니다!\\n");
        return 1;
    }

    printf("=== 파일 내용 ===\\n");

    while (fgets(line, sizeof(line), file) != NULL) {
        printf("%s", line);
    }

    fclose(file);

    return 0;
}`,
        explanation: `파일에서 텍스트를 읽어봅시다.

- "r": 읽기 모드
- fgets: 한 줄씩 읽기
- while 루프: 파일 끝까지 읽기
- fgets가 NULL을 반환하면 파일 끝`,
        highlights: [5, 7, 16, 17],
      },
      {
        code: `#include <stdio.h>
#include <string.h>

void writeFile(const char *filename) {
    FILE *file = fopen(filename, "w");
    if (file == NULL) {
        printf("파일을 생성할 수 없습니다!\\n");
        return;
    }

    char line[256];
    printf("메모를 입력하세요 (끝내려면 빈 줄 입력):\\n");

    getchar(); // 버퍼 비우기

    while (1) {
        fgets(line, sizeof(line), stdin);
        if (line[0] == '\\n') break;
        fputs(line, file);
    }

    fclose(file);
    printf("파일이 저장되었습니다.\\n");
}

void readFile(const char *filename) {
    FILE *file = fopen(filename, "r");
    if (file == NULL) {
        printf("파일을 찾을 수 없습니다!\\n");
        return;
    }

    char line[256];
    printf("\\n=== %s 내용 ===\\n", filename);

    while (fgets(line, sizeof(line), file) != NULL) {
        printf("%s", line);
    }

    fclose(file);
}

int main() {
    int choice;
    char filename[100];

    while (1) {
        printf("\\n1.파일 쓰기 2.파일 읽기 3.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        if (choice == 3) break;

        printf("파일 이름: ");
        scanf("%s", filename);

        if (choice == 1) {
            writeFile(filename);
        } else if (choice == 2) {
            readFile(filename);
        }
    }

    printf("프로그램을 종료합니다.\\n");
    return 0;
}`,
        explanation: `파일 쓰기와 읽기를 함수로 분리했습니다.

- writeFile: 사용자 입력을 파일에 저장
- readFile: 파일 내용을 화면에 출력
- fputs: 문자열을 파일에 쓰기
- 빈 줄 입력 시 종료`,
        highlights: [4, 5, 17, 18, 19, 26, 27, 37, 57, 59],
      },
    ],
    finalCode: `#include <stdio.h>
#include <string.h>

void writeFile(const char *filename, int append) {
    FILE *file = fopen(filename, append ? "a" : "w");
    if (file == NULL) {
        printf("파일을 열 수 없습니다!\\n");
        return;
    }

    char line[256];
    printf("\\n내용을 입력하세요 (끝내려면 빈 줄):\\n");

    getchar();

    while (1) {
        fgets(line, sizeof(line), stdin);
        if (line[0] == '\\n') break;
        fputs(line, file);
    }

    fclose(file);
    printf("저장되었습니다.\\n");
}

void readFile(const char *filename) {
    FILE *file = fopen(filename, "r");
    if (file == NULL) {
        printf("파일이 존재하지 않습니다!\\n");
        return;
    }

    char line[256];
    int lineNum = 1;
    printf("\\n=== %s ===\\n", filename);

    while (fgets(line, sizeof(line), file) != NULL) {
        printf("%3d | %s", lineNum++, line);
    }

    fclose(file);
}

void appendFile(const char *filename) {
    writeFile(filename, 1);
}

void deleteFile(const char *filename) {
    if (remove(filename) == 0) {
        printf("파일이 삭제되었습니다.\\n");
    } else {
        printf("파일을 삭제할 수 없습니다.\\n");
    }
}

int main() {
    int choice;
    char filename[100];

    printf("=== 간단한 메모장 ===\\n");

    while (1) {
        printf("\\n1.새 파일 2.파일 열기 3.추가하기 4.삭제 5.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        if (choice == 5) {
            printf("종료합니다.\\n");
            break;
        }

        printf("파일 이름: ");
        scanf("%s", filename);

        switch (choice) {
            case 1:
                writeFile(filename, 0);
                break;
            case 2:
                readFile(filename);
                break;
            case 3:
                appendFile(filename);
                break;
            case 4:
                deleteFile(filename);
                break;
            default:
                printf("잘못된 선택입니다.\\n");
        }
    }

    return 0;
}`,
    challenge: `메모장을 확장해봅시다:
1. 특정 줄 번호의 내용 수정 기능
2. 단어 검색 기능
3. 여러 파일 목록 보기`,
  },

  {
    id: 'intermediate-02-student-manager',
    title: '📊 학생 성적 관리',
    category: 'intermediate',
    description: '구조체 배열과 파일 입출력으로 학생 성적을 관리합니다.',
    concepts: ['구조체', '파일 입출력', '정렬', '평균 계산'],
    steps: [
      {
        code: `#include <stdio.h>

struct Student {
    int id;
    char name[50];
    int korean;
    int english;
    int math;
    float average;
};

int main() {
    struct Student s;

    s.id = 1;
    sprintf(s.name, "홍길동");
    s.korean = 90;
    s.english = 85;
    s.math = 95;
    s.average = (s.korean + s.english + s.math) / 3.0;

    printf("학번: %d\\n", s.id);
    printf("이름: %s\\n", s.name);
    printf("평균: %.2f\\n", s.average);

    return 0;
}`,
        explanation: `학생 정보를 구조체로 표현해봅시다.

- struct Student: 학생 정보를 담는 구조체
- 여러 과목 점수와 평균을 저장
- 평균 계산: 3.0으로 나누어 실수 결과 얻기`,
        highlights: [3, 4, 5, 6, 7, 8, 9, 13, 20, 24],
      },
      {
        code: `#include <stdio.h>
#include <string.h>

struct Student {
    int id;
    char name[50];
    int korean;
    int english;
    int math;
    float average;
};

void inputStudent(struct Student *s, int id) {
    s->id = id;

    printf("이름: ");
    scanf("%s", s->name);

    printf("국어 점수: ");
    scanf("%d", &s->korean);
    printf("영어 점수: ");
    scanf("%d", &s->english);
    printf("수학 점수: ");
    scanf("%d", &s->math);

    s->average = (s->korean + s->english + s->math) / 3.0;
}

void printStudent(struct Student s) {
    printf("%d\\t%s\\t%d\\t%d\\t%d\\t%.2f\\n",
           s.id, s.name, s.korean, s.english, s.math, s.average);
}

int main() {
    struct Student students[100];
    int count = 0;

    printf("학생 수: ");
    scanf("%d", &count);

    for (int i = 0; i < count; i++) {
        printf("\\n[학생 %d]\\n", i + 1);
        inputStudent(&students[i], i + 1);
    }

    printf("\\n학번\\t이름\\t국어\\t영어\\t수학\\t평균\\n");
    printf("--------------------------------------------------\\n");
    for (int i = 0; i < count; i++) {
        printStudent(students[i]);
    }

    return 0;
}`,
        explanation: `여러 학생의 정보를 관리해봅시다.

- inputStudent: 학생 정보 입력 함수
- s->: 구조체 포인터로 멤버 접근
- printStudent: 학생 정보 출력
- 배열로 여러 학생 저장`,
        highlights: [13, 14, 17, 20, 22, 24, 26, 29, 30, 43, 49],
      },
      {
        code: `#include <stdio.h>
#include <string.h>

struct Student {
    int id;
    char name[50];
    int korean;
    int english;
    int math;
    float average;
};

void saveToFile(struct Student students[], int count) {
    FILE *file = fopen("students.dat", "wb");
    if (file == NULL) {
        printf("파일을 열 수 없습니다!\\n");
        return;
    }

    fwrite(&count, sizeof(int), 1, file);
    fwrite(students, sizeof(struct Student), count, file);

    fclose(file);
    printf("파일에 저장되었습니다.\\n");
}

int loadFromFile(struct Student students[]) {
    FILE *file = fopen("students.dat", "rb");
    if (file == NULL) {
        printf("파일이 없습니다.\\n");
        return 0;
    }

    int count;
    fread(&count, sizeof(int), 1, file);
    fread(students, sizeof(struct Student), count, file);

    fclose(file);
    printf("파일에서 불러왔습니다. (%d명)\\n", count);
    return count;
}

int main() {
    struct Student students[100];
    int count = 0;

    count = loadFromFile(students);

    // ... 학생 추가/수정 등 작업

    saveToFile(students, count);

    return 0;
}`,
        explanation: `파일로 데이터를 저장하고 불러와봅시다.

- fopen("파일", "wb"): 바이너리 쓰기 모드
- fwrite: 구조체를 파일에 씀
- fread: 파일에서 구조체 읽기
- 바이너리 모드: 데이터를 그대로 저장`,
        highlights: [13, 14, 20, 21, 23, 27, 28, 35, 36, 47, 51],
      },
    ],
    finalCode: `#include <stdio.h>
#include <string.h>

struct Student {
    int id;
    char name[50];
    int korean;
    int english;
    int math;
    float average;
};

void inputStudent(struct Student *s, int id) {
    s->id = id;
    printf("이름: ");
    scanf("%s", s->name);
    printf("국어: ");
    scanf("%d", &s->korean);
    printf("영어: ");
    scanf("%d", &s->english);
    printf("수학: ");
    scanf("%d", &s->math);
    s->average = (s->korean + s->english + s->math) / 3.0;
}

void printAll(struct Student students[], int count) {
    printf("\\n학번\\t이름\\t국어\\t영어\\t수학\\t평균\\n");
    printf("------------------------------------------------------\\n");
    for (int i = 0; i < count; i++) {
        printf("%d\\t%s\\t%d\\t%d\\t%d\\t%.2f\\n",
               students[i].id, students[i].name,
               students[i].korean, students[i].english,
               students[i].math, students[i].average);
    }
}

void searchStudent(struct Student students[], int count) {
    char name[50];
    printf("검색할 이름: ");
    scanf("%s", name);

    for (int i = 0; i < count; i++) {
        if (strcmp(students[i].name, name) == 0) {
            printf("\\n학번: %d\\n", students[i].id);
            printf("이름: %s\\n", students[i].name);
            printf("국어: %d\\n", students[i].korean);
            printf("영어: %d\\n", students[i].english);
            printf("수학: %d\\n", students[i].math);
            printf("평균: %.2f\\n", students[i].average);
            return;
        }
    }
    printf("학생을 찾을 수 없습니다.\\n");
}

void saveToFile(struct Student students[], int count) {
    FILE *file = fopen("students.dat", "wb");
    if (file == NULL) return;
    fwrite(&count, sizeof(int), 1, file);
    fwrite(students, sizeof(struct Student), count, file);
    fclose(file);
    printf("저장 완료!\\n");
}

int loadFromFile(struct Student students[]) {
    FILE *file = fopen("students.dat", "rb");
    if (file == NULL) return 0;
    int count;
    fread(&count, sizeof(int), 1, file);
    fread(students, sizeof(struct Student), count, file);
    fclose(file);
    return count;
}

int main() {
    struct Student students[100];
    int count = 0;
    int choice;

    count = loadFromFile(students);

    printf("=== 학생 성적 관리 ===\\n");

    while (1) {
        printf("\\n1.추가 2.전체보기 3.검색 4.저장 5.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        if (choice == 1) {
            printf("\\n[학생 %d 추가]\\n", count + 1);
            inputStudent(&students[count], count + 1);
            count++;
        } else if (choice == 2) {
            printAll(students, count);
        } else if (choice == 3) {
            searchStudent(students, count);
        } else if (choice == 4) {
            saveToFile(students, count);
        } else if (choice == 5) {
            saveToFile(students, count);
            printf("종료합니다.\\n");
            break;
        }
    }

    return 0;
}`,
    challenge: `성적 관리를 확장해봅시다:
1. 평균 기준으로 정렬 기능
2. 통계 기능 (전체 평균, 최고/최저점)
3. 학생 정보 수정/삭제 기능`,
  },

  {
    id: 'intermediate-03-stack',
    title: '🧠 스택 (Stack)',
    category: 'intermediate',
    description: '배열로 스택 자료구조를 구현하면서 포인터와 동적 메모리를 배웁니다.',
    concepts: ['스택', 'LIFO', '배열', '포인터'],
    steps: [
      {
        code: `#include <stdio.h>
#define MAX_SIZE 100

int stack[MAX_SIZE];
int top = -1;

void push(int value) {
    if (top >= MAX_SIZE - 1) {
        printf("스택이 가득 찼습니다!\\n");
        return;
    }
    stack[++top] = value;
    printf("%d를 추가했습니다.\\n", value);
}

int main() {
    push(10);
    push(20);
    push(30);

    printf("top: %d, 값: %d\\n", top, stack[top]);

    return 0;
}`,
        explanation: `스택의 push 연산을 구현해봅시다.

- 스택: LIFO (Last In First Out) 자료구조
- top: 스택의 최상단 인덱스 (-1은 빈 상태)
- push: 스택에 값을 추가
- ++top: top을 먼저 증가시킨 후 사용`,
        highlights: [4, 5, 7, 8, 9, 12, 18, 19, 20],
      },
      {
        code: `#include <stdio.h>
#define MAX_SIZE 100

int stack[MAX_SIZE];
int top = -1;

void push(int value) {
    if (top >= MAX_SIZE - 1) {
        printf("스택이 가득 찼습니다!\\n");
        return;
    }
    stack[++top] = value;
}

int pop() {
    if (top < 0) {
        printf("스택이 비어있습니다!\\n");
        return -1;
    }
    return stack[top--];
}

int main() {
    push(10);
    push(20);
    push(30);

    printf("pop: %d\\n", pop());
    printf("pop: %d\\n", pop());
    printf("pop: %d\\n", pop());
    printf("pop: %d\\n", pop()); // 에러!

    return 0;
}`,
        explanation: `pop 연산을 추가해봅시다.

- pop: 스택에서 값을 꺼냄
- top--: 값을 반환한 후 top 감소
- 빈 스택에서 pop 시 에러 처리`,
        highlights: [15, 16, 17, 20, 28, 29, 30, 31],
      },
      {
        code: `#include <stdio.h>
#define MAX_SIZE 100

int stack[MAX_SIZE];
int top = -1;

void push(int value) {
    if (top >= MAX_SIZE - 1) {
        printf("스택 오버플로우!\\n");
        return;
    }
    stack[++top] = value;
}

int pop() {
    if (top < 0) {
        printf("스택 언더플로우!\\n");
        return -1;
    }
    return stack[top--];
}

int peek() {
    if (top < 0) {
        printf("스택이 비어있습니다!\\n");
        return -1;
    }
    return stack[top];
}

int isEmpty() {
    return top < 0;
}

void printStack() {
    if (isEmpty()) {
        printf("스택이 비어있습니다.\\n");
        return;
    }
    printf("스택: ");
    for (int i = 0; i <= top; i++) {
        printf("%d ", stack[i]);
    }
    printf("\\n");
}

int main() {
    int choice, value;

    while (1) {
        printf("\\n1.Push 2.Pop 3.Peek 4.출력 5.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        if (choice == 1) {
            printf("값 입력: ");
            scanf("%d", &value);
            push(value);
        } else if (choice == 2) {
            value = pop();
            if (value != -1) {
                printf("pop: %d\\n", value);
            }
        } else if (choice == 3) {
            value = peek();
            if (value != -1) {
                printf("peek: %d\\n", value);
            }
        } else if (choice == 4) {
            printStack();
        } else if (choice == 5) {
            break;
        }
    }

    return 0;
}`,
        explanation: `완전한 스택 자료구조를 만들어봅시다.

- peek: 값을 제거하지 않고 최상단 값만 확인
- isEmpty: 스택이 비었는지 확인
- printStack: 전체 스택 출력`,
        highlights: [23, 24, 28, 31, 32, 35, 36, 41, 42, 57, 60, 65, 68],
      },
    ],
    finalCode: `#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int top;
} Stack;

void init(Stack *s) {
    s->top = -1;
}

int isEmpty(Stack *s) {
    return s->top < 0;
}

int isFull(Stack *s) {
    return s->top >= MAX_SIZE - 1;
}

void push(Stack *s, int value) {
    if (isFull(s)) {
        printf("스택 오버플로우!\\n");
        return;
    }
    s->data[++(s->top)] = value;
    printf("%d 추가됨\\n", value);
}

int pop(Stack *s) {
    if (isEmpty(s)) {
        printf("스택 언더플로우!\\n");
        return -1;
    }
    return s->data[(s->top)--];
}

int peek(Stack *s) {
    if (isEmpty(s)) {
        printf("스택이 비어있습니다!\\n");
        return -1;
    }
    return s->data[s->top];
}

void print(Stack *s) {
    if (isEmpty(s)) {
        printf("스택이 비어있습니다.\\n");
        return;
    }
    printf("\\n스택 [bottom -> top]: ");
    for (int i = 0; i <= s->top; i++) {
        printf("%d ", s->data[i]);
    }
    printf("\\n");
}

int main() {
    Stack stack;
    init(&stack);

    int choice, value;

    printf("=== 스택 구현 ===\\n");

    while (1) {
        printf("\\n1.Push 2.Pop 3.Peek 4.출력 5.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("값: ");
                scanf("%d", &value);
                push(&stack, value);
                break;
            case 2:
                value = pop(&stack);
                if (value != -1) {
                    printf("pop: %d\\n", value);
                }
                break;
            case 3:
                value = peek(&stack);
                if (value != -1) {
                    printf("최상단: %d\\n", value);
                }
                break;
            case 4:
                print(&stack);
                break;
            case 5:
                printf("종료합니다.\\n");
                return 0;
            default:
                printf("잘못된 선택입니다.\\n");
        }
    }

    return 0;
}`,
    challenge: `스택을 확장해봅시다:
1. 동적 메모리(malloc)를 사용한 가변 크기 스택
2. 문자열 뒤집기 구현 (스택 활용)
3. 괄호 짝 맞추기 검사`,
  },

  {
    id: 'intermediate-04-queue',
    title: '🧠 큐 (Queue)',
    category: 'intermediate',
    description: 'FIFO 방식의 큐 자료구조를 배열로 구현합니다.',
    concepts: ['큐', 'FIFO', '순환 큐', '포인터'],
    steps: [
      {
        code: `#include <stdio.h>
#define MAX_SIZE 100

int queue[MAX_SIZE];
int front = -1;
int rear = -1;

void enqueue(int value) {
    if (rear >= MAX_SIZE - 1) {
        printf("큐가 가득 찼습니다!\\n");
        return;
    }

    if (front == -1) front = 0;
    queue[++rear] = value;
    printf("%d를 추가했습니다.\\n", value);
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);

    printf("front: %d, rear: %d\\n", front, rear);

    return 0;
}`,
        explanation: `큐의 enqueue 연산을 구현해봅시다.

- 큐: FIFO (First In First Out) 자료구조
- front: 큐의 앞쪽 인덱스
- rear: 큐의 뒤쪽 인덱스
- enqueue: 큐의 뒤에 값 추가`,
        highlights: [5, 6, 8, 14, 15, 20, 21, 22],
      },
      {
        code: `#include <stdio.h>
#define MAX_SIZE 100

int queue[MAX_SIZE];
int front = -1;
int rear = -1;

void enqueue(int value) {
    if (rear >= MAX_SIZE - 1) {
        printf("큐가 가득 찼습니다!\\n");
        return;
    }
    if (front == -1) front = 0;
    queue[++rear] = value;
}

int dequeue() {
    if (front == -1 || front > rear) {
        printf("큐가 비어있습니다!\\n");
        return -1;
    }
    return queue[front++];
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);

    printf("dequeue: %d\\n", dequeue());
    printf("dequeue: %d\\n", dequeue());
    printf("dequeue: %d\\n", dequeue());
    printf("dequeue: %d\\n", dequeue()); // 에러!

    return 0;
}`,
        explanation: `dequeue 연산을 추가해봅시다.

- dequeue: 큐의 앞에서 값을 꺼냄
- front++: front를 증가시켜 다음 요소로 이동
- 빈 큐 체크: front > rear`,
        highlights: [17, 18, 19, 22, 30, 31, 32, 33],
      },
      {
        code: `#include <stdio.h>
#define MAX_SIZE 5

int queue[MAX_SIZE];
int front = 0;
int rear = 0;
int count = 0;

void enqueue(int value) {
    if (count >= MAX_SIZE) {
        printf("큐가 가득 찼습니다!\\n");
        return;
    }

    queue[rear] = value;
    rear = (rear + 1) % MAX_SIZE;
    count++;
    printf("%d 추가됨 (rear=%d, count=%d)\\n", value, rear, count);
}

int dequeue() {
    if (count == 0) {
        printf("큐가 비어있습니다!\\n");
        return -1;
    }

    int value = queue[front];
    front = (front + 1) % MAX_SIZE;
    count--;
    return value;
}

void printQueue() {
    if (count == 0) {
        printf("큐가 비어있습니다.\\n");
        return;
    }

    printf("큐: ");
    int idx = front;
    for (int i = 0; i < count; i++) {
        printf("%d ", queue[idx]);
        idx = (idx + 1) % MAX_SIZE;
    }
    printf("\\n");
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);

    printQueue();

    printf("dequeue: %d\\n", dequeue());
    printf("dequeue: %d\\n", dequeue());

    printQueue();

    enqueue(40);
    enqueue(50);
    enqueue(60);

    printQueue();

    return 0;
}`,
        explanation: `순환 큐(Circular Queue)를 구현해봅시다.

- count: 현재 큐에 있는 요소 개수
- (rear + 1) % MAX_SIZE: 순환 인덱스
- 공간을 효율적으로 재사용
- front와 rear가 배열을 순환`,
        highlights: [7, 10, 16, 17, 22, 28, 29, 40, 41, 42, 43],
      },
    ],
    finalCode: `#include <stdio.h>
#define MAX_SIZE 10

typedef struct {
    int data[MAX_SIZE];
    int front;
    int rear;
    int count;
} Queue;

void init(Queue *q) {
    q->front = 0;
    q->rear = 0;
    q->count = 0;
}

int isEmpty(Queue *q) {
    return q->count == 0;
}

int isFull(Queue *q) {
    return q->count >= MAX_SIZE;
}

void enqueue(Queue *q, int value) {
    if (isFull(q)) {
        printf("큐 오버플로우!\\n");
        return;
    }

    q->data[q->rear] = value;
    q->rear = (q->rear + 1) % MAX_SIZE;
    q->count++;
    printf("%d 추가됨\\n", value);
}

int dequeue(Queue *q) {
    if (isEmpty(q)) {
        printf("큐 언더플로우!\\n");
        return -1;
    }

    int value = q->data[q->front];
    q->front = (q->front + 1) % MAX_SIZE;
    q->count--;
    return value;
}

int peek(Queue *q) {
    if (isEmpty(q)) {
        printf("큐가 비어있습니다!\\n");
        return -1;
    }
    return q->data[q->front];
}

void print(Queue *q) {
    if (isEmpty(q)) {
        printf("큐가 비어있습니다.\\n");
        return;
    }

    printf("\\n큐 [front -> rear]: ");
    int idx = q->front;
    for (int i = 0; i < q->count; i++) {
        printf("%d ", q->data[idx]);
        idx = (idx + 1) % MAX_SIZE;
    }
    printf("(count=%d)\\n", q->count);
}

int main() {
    Queue queue;
    init(&queue);

    int choice, value;

    printf("=== 순환 큐 구현 ===\\n");

    while (1) {
        printf("\\n1.Enqueue 2.Dequeue 3.Peek 4.출력 5.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("값: ");
                scanf("%d", &value);
                enqueue(&queue, value);
                break;
            case 2:
                value = dequeue(&queue);
                if (value != -1) {
                    printf("dequeue: %d\\n", value);
                }
                break;
            case 3:
                value = peek(&queue);
                if (value != -1) {
                    printf("front 값: %d\\n", value);
                }
                break;
            case 4:
                print(&queue);
                break;
            case 5:
                printf("종료합니다.\\n");
                return 0;
            default:
                printf("잘못된 선택입니다.\\n");
        }
    }

    return 0;
}`,
    challenge: `큐를 확장해봅시다:
1. 우선순위 큐 구현
2. 대기열 시뮬레이션 (은행, 병원 등)
3. 동적 메모리를 사용한 큐`,
  },

  {
    id: 'intermediate-05-linked-list',
    title: '🧠 연결 리스트',
    category: 'intermediate',
    description: '동적 메모리와 포인터로 연결 리스트를 구현합니다.',
    concepts: ['포인터', '동적 메모리', 'malloc/free', '구조체 포인터'],
    steps: [
      {
        code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

int main() {
    struct Node *head = NULL;

    // 첫 번째 노드 생성
    head = (struct Node*)malloc(sizeof(struct Node));
    head->data = 10;
    head->next = NULL;

    printf("노드 데이터: %d\\n", head->data);

    free(head);

    return 0;
}`,
        explanation: `노드를 동적으로 생성해봅시다.

- struct Node: 데이터와 다음 노드를 가리키는 포인터
- malloc: 메모리 동적 할당
- sizeof: 구조체 크기 계산
- free: 메모리 해제 (필수!)`,
        highlights: [4, 5, 6, 10, 13, 14, 15, 19],
      },
      {
        code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

void printList(struct Node *head) {
    struct Node *current = head;
    printf("리스트: ");

    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

int main() {
    struct Node *head = NULL;
    struct Node *second = NULL;
    struct Node *third = NULL;

    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node));

    head->data = 10;
    head->next = second;

    second->data = 20;
    second->next = third;

    third->data = 30;
    third->next = NULL;

    printList(head);

    free(head);
    free(second);
    free(third);

    return 0;
}`,
        explanation: `여러 노드를 연결해봅시다.

- 각 노드의 next가 다음 노드를 가리킴
- head: 리스트의 시작점
- current->next: 다음 노드로 이동
- 마지막 노드의 next는 NULL`,
        highlights: [9, 10, 13, 14, 15, 29, 30, 32, 33, 35, 36],
      },
      {
        code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node* createNode(int data) {
    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

void insertAtEnd(struct Node **head, int data) {
    struct Node *newNode = createNode(data);

    if (*head == NULL) {
        *head = newNode;
        return;
    }

    struct Node *current = *head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = newNode;
}

void printList(struct Node *head) {
    struct Node *current = head;
    printf("리스트: ");
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

int main() {
    struct Node *head = NULL;

    insertAtEnd(&head, 10);
    insertAtEnd(&head, 20);
    insertAtEnd(&head, 30);

    printList(head);

    return 0;
}`,
        explanation: `노드를 끝에 추가하는 함수를 만들어봅시다.

- createNode: 새 노드 생성 함수
- insertAtEnd: 리스트 끝에 노드 추가
- **head: 포인터의 포인터 (head를 변경하기 위해)
- 마지막 노드를 찾아 연결`,
        highlights: [9, 10, 11, 12, 16, 17, 19, 20, 24, 25, 26, 28, 44, 45, 46],
      },
      {
        code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node* createNode(int data) {
    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

void insertAtEnd(struct Node **head, int data) {
    struct Node *newNode = createNode(data);
    if (*head == NULL) {
        *head = newNode;
        return;
    }
    struct Node *current = *head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = newNode;
}

void deleteNode(struct Node **head, int data) {
    struct Node *temp = *head;
    struct Node *prev = NULL;

    // 첫 노드가 삭제할 노드인 경우
    if (temp != NULL && temp->data == data) {
        *head = temp->next;
        free(temp);
        printf("%d 삭제됨\\n", data);
        return;
    }

    // 삭제할 노드 찾기
    while (temp != NULL && temp->data != data) {
        prev = temp;
        temp = temp->next;
    }

    // 노드를 찾지 못한 경우
    if (temp == NULL) {
        printf("%d를 찾을 수 없습니다.\\n", data);
        return;
    }

    // 노드 삭제
    prev->next = temp->next;
    free(temp);
    printf("%d 삭제됨\\n", data);
}

void printList(struct Node *head) {
    struct Node *current = head;
    printf("리스트: ");
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

int main() {
    struct Node *head = NULL;
    int choice, value;

    printf("=== 연결 리스트 ===\\n");

    while (1) {
        printf("\\n1.추가 2.삭제 3.출력 4.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        if (choice == 1) {
            printf("값: ");
            scanf("%d", &value);
            insertAtEnd(&head, value);
            printf("%d 추가됨\\n", value);
        } else if (choice == 2) {
            printf("삭제할 값: ");
            scanf("%d", &value);
            deleteNode(&head, value);
        } else if (choice == 3) {
            printList(head);
        } else if (choice == 4) {
            break;
        }
    }

    return 0;
}`,
        explanation: `노드 삭제 기능을 추가해봅시다.

- deleteNode: 특정 값을 가진 노드 삭제
- prev: 이전 노드 추적
- prev->next = temp->next: 노드 연결 끊기
- free(temp): 메모리 해제`,
        highlights: [29, 30, 31, 34, 35, 36, 42, 43, 44, 48, 54, 55, 89, 92],
      },
    ],
    finalCode: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* createNode(int data) {
    Node *newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        printf("메모리 할당 실패!\\n");
        return NULL;
    }
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

void insertAtBeginning(Node **head, int data) {
    Node *newNode = createNode(data);
    newNode->next = *head;
    *head = newNode;
    printf("%d를 맨 앞에 추가\\n", data);
}

void insertAtEnd(Node **head, int data) {
    Node *newNode = createNode(data);

    if (*head == NULL) {
        *head = newNode;
        printf("%d를 추가\\n", data);
        return;
    }

    Node *current = *head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = newNode;
    printf("%d를 맨 뒤에 추가\\n", data);
}

void deleteNode(Node **head, int data) {
    Node *temp = *head;
    Node *prev = NULL;

    if (temp != NULL && temp->data == data) {
        *head = temp->next;
        free(temp);
        printf("%d 삭제됨\\n", data);
        return;
    }

    while (temp != NULL && temp->data != data) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("%d를 찾을 수 없습니다\\n", data);
        return;
    }

    prev->next = temp->next;
    free(temp);
    printf("%d 삭제됨\\n", data);
}

void printList(Node *head) {
    if (head == NULL) {
        printf("리스트가 비어있습니다\\n");
        return;
    }

    Node *current = head;
    printf("\\n리스트: ");
    while (current != NULL) {
        printf("%d", current->data);
        if (current->next != NULL) printf(" -> ");
        current = current->next;
    }
    printf("\\n");
}

void freeList(Node **head) {
    Node *current = *head;
    Node *next;

    while (current != NULL) {
        next = current->next;
        free(current);
        current = next;
    }

    *head = NULL;
    printf("모든 메모리 해제됨\\n");
}

int main() {
    Node *head = NULL;
    int choice, value;

    printf("=== 연결 리스트 구현 ===\\n");

    while (1) {
        printf("\\n1.맨앞추가 2.맨뒤추가 3.삭제 4.출력 5.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("값: ");
                scanf("%d", &value);
                insertAtBeginning(&head, value);
                break;
            case 2:
                printf("값: ");
                scanf("%d", &value);
                insertAtEnd(&head, value);
                break;
            case 3:
                printf("삭제할 값: ");
                scanf("%d", &value);
                deleteNode(&head, value);
                break;
            case 4:
                printList(head);
                break;
            case 5:
                freeList(&head);
                printf("종료합니다\\n");
                return 0;
            default:
                printf("잘못된 선택입니다\\n");
        }
    }

    return 0;
}`,
    challenge: `연결 리스트를 확장해봅시다:
1. 이중 연결 리스트 구현
2. 정렬된 상태로 삽입하기
3. 리스트 역순으로 뒤집기`,
  },

  {
    id: 'intermediate-06-caesar-cipher',
    title: '🔐 간단한 암호화',
    category: 'intermediate',
    description: '시저 암호를 구현하면서 문자열 처리와 암호화 개념을 배웁니다.',
    concepts: ['문자열 처리', '아스키 코드', '암호화/복호화'],
    finalCode: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

void encrypt(char *text, int shift) {
    for (int i = 0; text[i] != '\\0'; i++) {
        if (isalpha(text[i])) {
            char base = isupper(text[i]) ? 'A' : 'a';
            text[i] = (text[i] - base + shift) % 26 + base;
        }
    }
}

void decrypt(char *text, int shift) {
    encrypt(text, 26 - shift);
}

int main() {
    char message[256];
    int shift, choice;

    printf("=== 시저 암호 ===\\n");

    while (1) {
        printf("\\n1.암호화 2.복호화 3.종료\\n");
        printf("선택: ");
        scanf("%d", &choice);

        if (choice == 3) break;

        printf("메시지: ");
        getchar();
        fgets(message, sizeof(message), stdin);
        message[strlen(message) - 1] = '\\0';

        printf("시프트 값 (1-25): ");
        scanf("%d", &shift);

        if (choice == 1) {
            encrypt(message, shift);
            printf("암호화: %s\\n", message);
        } else if (choice == 2) {
            decrypt(message, shift);
            printf("복호화: %s\\n", message);
        }
    }

    return 0;
}`,
    challenge: `암호화를 확장해봅시다:
1. 파일 암호화/복호화 기능
2. 비즈네르 암호 구현
3. 단순 치환 암호 구현`,
  },

  {
    id: 'intermediate-07-mini-shell',
    title: '🐚 미니 쉘',
    category: 'intermediate',
    description: '간단한 쉘 프로그램을 만들면서 명령어 처리와 프로세스 실행을 배웁니다.',
    concepts: ['명령어 파싱', 'system 함수', '문자열 처리'],
    finalCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void executeCommand(char *cmd) {
    if (strcmp(cmd, "exit") == 0 || strcmp(cmd, "quit") == 0) {
        printf("쉘을 종료합니다.\\n");
        exit(0);
    } else if (strcmp(cmd, "clear") == 0 || strcmp(cmd, "cls") == 0) {
        #ifdef _WIN32
            system("cls");
        #else
            system("clear");
        #endif
    } else if (strcmp(cmd, "help") == 0) {
        printf("\\n사용 가능한 명령어:\\n");
        printf("  exit, quit - 종료\\n");
        printf("  clear, cls - 화면 지우기\\n");
        printf("  help - 도움말\\n");
        printf("  기타 시스템 명령어도 사용 가능\\n\\n");
    } else {
        int result = system(cmd);
        if (result != 0) {
            printf("명령어 실행 실패\\n");
        }
    }
}

int main() {
    char command[256];

    printf("=== 미니 쉘 ===\\n");
    printf("'help' 입력 시 도움말\\n\\n");

    while (1) {
        printf("myshell> ");

        if (fgets(command, sizeof(command), stdin) == NULL) {
            break;
        }

        command[strlen(command) - 1] = '\\0';

        if (strlen(command) == 0) {
            continue;
        }

        executeCommand(command);
    }

    return 0;
}`,
    challenge: `미니 쉘을 확장해봅시다:
1. 명령어 히스토리 기능
2. 파이프(|)와 리다이렉션(>, <) 지원
3. 환경 변수 설정/출력`,
  },

  // ========== 🧠 고급 레슨 ==========
  {
    id: 'advanced-01-threads',
    title: '🧵 멀티스레드',
    category: 'advanced',
    description: 'pthread를 사용해서 멀티스레드 프로그램을 만듭니다.',
    concepts: ['스레드', 'pthread', '동시성', '뮤텍스'],
    finalCode: `#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

#define NUM_THREADS 5

void* threadFunction(void* arg) {
    int id = *(int*)arg;

    printf("[Thread %d] 시작\\n", id);

    for (int i = 0; i < 3; i++) {
        printf("[Thread %d] 작업 %d 수행 중...\\n", id, i + 1);
        sleep(1);
    }

    printf("[Thread %d] 종료\\n", id);

    return NULL;
}

int main() {
    pthread_t threads[NUM_THREADS];
    int thread_ids[NUM_THREADS];

    printf("=== 멀티스레드 예제 ===\\n\\n");

    for (int i = 0; i < NUM_THREADS; i++) {
        thread_ids[i] = i + 1;
        if (pthread_create(&threads[i], NULL, threadFunction, &thread_ids[i]) != 0) {
            printf("스레드 생성 실패\\n");
            return 1;
        }
    }

    for (int i = 0; i < NUM_THREADS; i++) {
        pthread_join(threads[i], NULL);
    }

    printf("\\n모든 스레드 종료\\n");

    return 0;
}`,
    challenge: `멀티스레드를 활용해봅시다:
1. 생산자-소비자 문제 구현
2. 뮤텍스를 사용한 동기화
3. 스레드 풀 구현`,
  },

  {
    id: 'advanced-02-game-engine',
    title: '🕹 콘솔 게임 엔진',
    category: 'advanced',
    description: '간단한 콘솔 게임 엔진을 만들면서 게임 루프와 렌더링을 배웁니다.',
    concepts: ['게임 루프', '입력 처리', '더블 버퍼링', '충돌 감지'],
    finalCode: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#ifdef _WIN32
#include <conio.h>
#include <windows.h>
#else
#include <unistd.h>
#include <termios.h>
#endif

#define WIDTH 20
#define HEIGHT 10

typedef struct {
    int x, y;
    int velX, velY;
} Player;

void clearScreen() {
    #ifdef _WIN32
        system("cls");
    #else
        system("clear");
    #endif
}

void drawGame(Player *p) {
    clearScreen();

    for (int y = 0; y < HEIGHT; y++) {
        for (int x = 0; x < WIDTH; x++) {
            if (x == 0 || x == WIDTH - 1 || y == 0 || y == HEIGHT - 1) {
                printf("#");
            } else if (x == p->x && y == p->y) {
                printf("P");
            } else {
                printf(" ");
            }
        }
        printf("\\n");
    }

    printf("\\nWASD로 이동, Q로 종료\\n");
}

void updatePlayer(Player *p) {
    p->x += p->velX;
    p->y += p->velY;

    if (p->x <= 1) p->x = 1;
    if (p->x >= WIDTH - 2) p->x = WIDTH - 2;
    if (p->y <= 1) p->y = 1;
    if (p->y >= HEIGHT - 2) p->y = HEIGHT - 2;

    p->velX = 0;
    p->velY = 0;
}

int main() {
    Player player = {WIDTH / 2, HEIGHT / 2, 0, 0};

    printf("=== 간단한 게임 ===\\n");
    printf("엔터를 눌러 시작...\\n");
    getchar();

    while (1) {
        drawGame(&player);

        #ifdef _WIN32
            if (_kbhit()) {
                char ch = _getch();
        #else
            char ch = getchar();
        #endif

                if (ch == 'w' || ch == 'W') player.velY = -1;
                else if (ch == 's' || ch == 'S') player.velY = 1;
                else if (ch == 'a' || ch == 'A') player.velX = -1;
                else if (ch == 'd' || ch == 'D') player.velX = 1;
                else if (ch == 'q' || ch == 'Q') break;

        #ifdef _WIN32
            }
        #endif

        updatePlayer(&player);

        #ifdef _WIN32
            Sleep(100);
        #else
            usleep(100000);
        #endif
    }

    printf("게임 종료\\n");
    return 0;
}`,
    challenge: `게임 엔진을 확장해봅시다:
1. 적 캐릭터 추가 및 충돌 감지
2. 점수 시스템
3. 여러 레벨 구현`,
  },

  {
    id: 'advanced-03-scheduler',
    title: '💻 CPU 스케줄러 시뮬레이션',
    category: 'advanced',
    description: 'FCFS, SJF, Round Robin 스케줄링 알고리즘을 구현합니다.',
    concepts: ['운영체제', '스케줄링', '알고리즘', '시뮬레이션'],
    finalCode: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int pid;
    int arrival;
    int burst;
    int waiting;
    int turnaround;
} Process;

void fcfs(Process processes[], int n) {
    int currentTime = 0;

    printf("\\n=== FCFS 스케줄링 ===\\n");

    for (int i = 0; i < n; i++) {
        if (currentTime < processes[i].arrival) {
            currentTime = processes[i].arrival;
        }

        processes[i].waiting = currentTime - processes[i].arrival;
        processes[i].turnaround = processes[i].waiting + processes[i].burst;

        printf("P%d: 대기=%d, 반환=%d\\n",
               processes[i].pid,
               processes[i].waiting,
               processes[i].turnaround);

        currentTime += processes[i].burst;
    }

    float avgWaiting = 0, avgTurnaround = 0;
    for (int i = 0; i < n; i++) {
        avgWaiting += processes[i].waiting;
        avgTurnaround += processes[i].turnaround;
    }

    printf("\\n평균 대기 시간: %.2f\\n", avgWaiting / n);
    printf("평균 반환 시간: %.2f\\n", avgTurnaround / n);
}

int main() {
    int n;

    printf("=== CPU 스케줄러 시뮬레이터 ===\\n");
    printf("프로세스 개수: ");
    scanf("%d", &n);

    Process *processes = (Process*)malloc(n * sizeof(Process));

    for (int i = 0; i < n; i++) {
        processes[i].pid = i + 1;
        printf("\\nP%d 도착 시간: ", i + 1);
        scanf("%d", &processes[i].arrival);
        printf("P%d 실행 시간: ", i + 1);
        scanf("%d", &processes[i].burst);
    }

    fcfs(processes, n);

    free(processes);
    return 0;
}`,
    challenge: `스케줄러를 확장해봅시다:
1. SJF (Shortest Job First) 구현
2. Round Robin 구현
3. 우선순위 스케줄링 구현`,
  },

  {
    id: 'advanced-04-memory-manager',
    title: '💾 메모리 관리자',
    category: 'advanced',
    description: '간단한 메모리 할당자를 구현하면서 동적 메모리 관리를 깊이 이해합니다.',
    concepts: ['malloc/free 구현', '메모리 풀', '메모리 단편화'],
    finalCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define POOL_SIZE 1024

typedef struct Block {
    size_t size;
    int free;
    struct Block *next;
} Block;

static char memory_pool[POOL_SIZE];
static Block *freeList = NULL;

void initMemoryPool() {
    freeList = (Block*)memory_pool;
    freeList->size = POOL_SIZE - sizeof(Block);
    freeList->free = 1;
    freeList->next = NULL;
    printf("메모리 풀 초기화 완료 (%d bytes)\\n", POOL_SIZE);
}

void* myMalloc(size_t size) {
    Block *current = freeList;

    while (current != NULL) {
        if (current->free && current->size >= size) {
            current->free = 0;
            printf("할당: %zu bytes\\n", size);
            return (void*)(current + 1);
        }
        current = current->next;
    }

    printf("메모리 부족!\\n");
    return NULL;
}

void myFree(void *ptr) {
    if (ptr == NULL) return;

    Block *block = (Block*)ptr - 1;
    block->free = 1;
    printf("해제: %zu bytes\\n", block->size);
}

void printMemoryStatus() {
    Block *current = freeList;
    int blockNum = 0;

    printf("\\n=== 메모리 상태 ===\\n");
    while (current != NULL) {
        printf("블록 %d: %zu bytes (%s)\\n",
               ++blockNum,
               current->size,
               current->free ? "비어있음" : "사용중");
        current = current->next;
    }
    printf("\\n");
}

int main() {
    initMemoryPool();

    void *p1 = myMalloc(100);
    void *p2 = myMalloc(200);

    printMemoryStatus();

    myFree(p1);

    printMemoryStatus();

    void *p3 = myMalloc(50);

    printMemoryStatus();

    myFree(p2);
    myFree(p3);

    printf("프로그램 종료\\n");
    return 0;
}`,
    challenge: `메모리 관리자를 확장해봅시다:
1. 메모리 병합 (coalescing) 구현
2. 다양한 할당 전략 (First Fit, Best Fit, Worst Fit)
3. 메모리 사용 통계 추적`,
  },

  {
    id: 'advanced-05-library',
    title: '🧰 나만의 라이브러리 만들기',
    category: 'advanced',
    description: '자주 사용하는 함수들을 모아 라이브러리로 만듭니다.',
    concepts: ['헤더 파일', '정적 라이브러리', '동적 라이브러리', '모듈화'],
    finalCode: `// mylib.h
#ifndef MYLIB_H
#define MYLIB_H

// 문자열 유틸리티
int str_length(const char *str);
void str_reverse(char *str);
int str_compare(const char *s1, const char *s2);

// 배열 유틸리티
void array_print(int arr[], int size);
int array_max(int arr[], int size);
int array_min(int arr[], int size);
void array_sort(int arr[], int size);

// 수학 유틸리티
int math_pow(int base, int exp);
int math_factorial(int n);
int math_gcd(int a, int b);

#endif

// mylib.c
#include "mylib.h"
#include <stdio.h>

int str_length(const char *str) {
    int len = 0;
    while (str[len] != '\\0') len++;
    return len;
}

void str_reverse(char *str) {
    int len = str_length(str);
    for (int i = 0; i < len / 2; i++) {
        char temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }
}

int array_max(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

int math_factorial(int n) {
    if (n <= 1) return 1;
    return n * math_factorial(n - 1);
}

// main.c - 사용 예제
#include <stdio.h>
#include "mylib.h"

int main() {
    printf("=== 나만의 라이브러리 ===\\n\\n");

    // 문자열 함수 테스트
    char str[] = "Hello";
    printf("원본: %s\\n", str);
    printf("길이: %d\\n", str_length(str));
    str_reverse(str);
    printf("뒤집기: %s\\n\\n", str);

    // 배열 함수 테스트
    int arr[] = {5, 2, 8, 1, 9};
    printf("배열 최대값: %d\\n", array_max(arr, 5));

    // 수학 함수 테스트
    printf("5! = %d\\n", math_factorial(5));

    return 0;
}

/* 컴파일 방법:
   gcc -c mylib.c -o mylib.o
   gcc main.c mylib.o -o program
   ./program
*/`,
    challenge: `라이브러리를 확장해봅시다:
1. 정적 라이브러리(.a) 생성
2. 동적 라이브러리(.so/.dll) 생성
3. Makefile 작성해서 빌드 자동화`,
  },
];
