function solution(new_id) {
    let id = new_id.toLowerCase();
    const regex = new RegExp(`[^a-z\\d-_.]`, 'gi');
    id = id.replace(regex, '').replace(/\.+/g, '.').replace(/^\.|\.$/g, '');
    id = id.length < 1 ? 'a' : id;
    if (id.length >= 16) {
        id = id.slice(0, 15).replace(/\.$/, '');
    }
    if (id.length <= 2) {
        let lastChar = id[id.length - 1];
        id = id + lastChar.repeat(3 - id.length);
    }
    return id;
}

solution(".123_.def.")

// 정규 표현식
// (3) [^a-z\d] -> [^\w] 로 대체 가능, 이전 단계에서 소문자로 변경했기 때문에 대문자 고려하지 않아도 됨
// [-_.] == [.\\-_]
// 문자열의 시작 또는 끝 모두를 포함하고 싶을 때는 g flag 사용
// (5) -> replace(/^$/, 'a')
// id[id.length - 1] 대신 id.charAt(id.length - 1) 가능
// (9~13) 삼항연산자로 return 가능