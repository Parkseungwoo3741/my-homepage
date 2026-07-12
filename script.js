// 3.3 Hobbies 상세 리스트 보여주기 함수
function showSub(id) {
    // 1. 메인 카테고리 화면 숨기기
    document.getElementById('category-main').classList.add('hidden');
    
    // 2. 모든 서브 리스트 일단 숨기기
    let subs = document.getElementsByClassName('sub-container');
    for(let i=0; i<subs.length; i++) {
        subs[i].classList.add('hidden');
    }
    
    // 3. 선택한 카테고리 리스트와 뒤로가기 버튼 보여주기
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('backBtn').classList.remove('hidden');
    
    // 화면 최상단이 아닌 해당 섹션으로 부드럽게 이동
    document.getElementById('hobbies').scrollIntoView({ behavior: 'smooth' });
}

// 3.3 Hobbies 메인 카테고리로 돌아가기 함수
function showMain() {
    // 1. 모든 서브 리스트와 뒤로가기 버튼 숨기기
    let subs = document.getElementsByClassName('sub-container');
    for(let i=0; i<subs.length; i++) {
        subs[i].classList.add('hidden');
    }
    document.getElementById('backBtn').classList.add('hidden');
    // 2. 메인 카테고리 화면 다시 보여주기
    document.getElementById('category-main').classList.remove('hidden');
}

// 3.2 모달(Modal) 창 열기/닫기 제어 (사진 추가 및 설명 확장)
function openModal(title, imgSrc, desc, link1Text, link1Url, link2Text, link2Url) {
    // 이미지, 제목, 상세설명 삽입
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    
    // 모달 링크 영역 가져오기 및 초기화
    let linksContainer = document.querySelector('.modal-links');
    linksContainer.innerHTML = ''; 

    // 첫 번째 버튼 생성
    if(link1Text !== "" && link1Url !== "") {
        let a1 = document.createElement('a');
        a1.href = link1Url;
        a1.innerText = link1Text;
        a1.download = ""; 
        linksContainer.appendChild(a1);
    }

    // 두 번째 버튼 생성
    if(link2Text !== "" && link2Url !== "") {
        let a2 = document.createElement('a');
        a2.href = link2Url;
        a2.innerText = link2Text;
        a2.download = ""; 
        linksContainer.appendChild(a2);
    }

    // 모달 표시
    document.getElementById('projectModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('projectModal').classList.add('hidden');
}

// 3.4 스크롤 이벤트 기반 동적 UI 제어
window.addEventListener('scroll', function() {
    let header = document.getElementById('main-header');
    let topBtn = document.getElementById('topBtn');
    
    // 화면을 50px 이상 내리면 네비게이션 바에 배경색 적용 클래스 추가
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // 화면을 300px 이상 내렸을 때만 플로팅 TOP 버튼 표시
    if (window.scrollY > 300) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});

// 상단으로 이동하는 기능 (Smooth 스크롤)
function scrollToTop() {
    // 자바스크립트를 이용해 문서 최상단으로 부드럽게 이동
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드럽게 이동
    });
}