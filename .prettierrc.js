module.exports = {
  /**
   * 한 줄에 쓸 코드의 길이를 100으로 제한
   */
  printWidth: 100,

  /**
   * 문자열은 작은따옴표(')로 통일
   */
  singleQuote: true,

  /**
   * 코드 마지막에 세미콜론(;) 항상 붙이기
   */
  semi: true,

  /**
   * 탭 대신 스페이스 사용
   */
  useTabs: false,

  /**
   * 탭 너비는 2칸
   */
  tabWidth: 2,

  /**
   * 객체, 배열 등에서 마지막 요소 뒤에 항상 콤마(,) 붙이기
   * - Git Diff 등에서 변경 사항을 명확하게 추적하는 데 도움을 줌
   */
  trailingComma: 'all',

  /**
   * 화살표 함수에서 파라미터가 하나일 때도 괄호()를 항상 붙임
   * - 예) (x) => x
   */
  arrowParens: 'always',

  /**
   * OS에 상관없이 줄바꿈 문자(EOL)는 LF(\n)로 통일
   */
  endOfLine: 'lf',
};
