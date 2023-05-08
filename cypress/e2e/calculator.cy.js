// 사용자에게 가장 중요한 기능은 연산의 '결과'
// 그래서 우리는 연산의 결과가 보여지는 디스플레이에 연산 결과가 값이 잘 보여지는 지 테스트
// know to unknown, 점진적으로 원하는 결과치에 다가가자

// 2개의 숫자에 대해 덧셈이 가능하다.
// 2개의 숫자에 대해 뺄셈이 가능하다.
// 2개의 숫자에 대해 곱셈이 가능하다.
// 2개의 숫자에 대해 나눗셈이 가능하다.
// AC(All Clear)버튼을 누르면 0으로 초기화 한다.
// 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
// 계산 결과를 표현할 때 소수점 이하는 버림한다.

const clickDigitButtons = (digits = []) => {
  digits.forEach((digit) => {
    cy.get(".digit").contains(digit).click();
  });
};

const checkDisplayValue = (value) => {
  cy.get("#total").should("have.text", value);
};

describe("계산기 앱 테스트", () => {
  // 그래서 우리는 연산의 결과가 보여지는 디스플레이에 연산 결과가 값이 잘 보여지는 지 테스트
  beforeEach("페이지 방문", () => {
    cy.visit("../../index.html");
  });

  it("디스플레이에 기본적으로 숫자 0이 표시된다.", () => {
    checkDisplayValue(0);
  });

  // know to unknown, 점진적으로 원하는 결과치에 다가가자
  it("1개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다.", () => {
    clickDigitButtons(["1"]);
    checkDisplayValue(1);
  });

  it("2개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다.", () => {
    clickDigitButtons(["1", "2"]);
    checkDisplayValue(12);
  });

  it("3개의 숫자 버튼을 클릭하면 display에 숫자가 표시된다.", () => {
    clickDigitButtons(["1", "2", "3"]);
    checkDisplayValue(123);
  });
});
