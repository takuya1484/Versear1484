const inputEl = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoListEl = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
    todoListEl.innerHTML = '';
    todos.forEach((todo, index) => {
        //li要素内にtodoの内容を追加していく
        const li = document.createElement('li');

        const text = document.createElement('text');
        //text要素にtextを代入する
        text.textContent = todo.text;

        //deleteボタンの追加
        const delBtn = document.createElement('button');
        //ボタンのテキストを設定
        delBtn.textContent = '削除';
        //delete-btnクラスの追加
        delBtn.classList.add('delete-btn');
        //ボタンが押された時の削除処理
        delBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            renderTodos();
        });

        //それぞれを子要素として追加する
        li.appendChild(text);
        li.appendChild(delBtn);
        todoListEl.appendChild(li);
    });
}

function addTodo() {
    // テキストボックスから取得
    const text = inputEl.value.trim();
    //テキストが空白でなければ
    if (text) {
        todos.push({ text: text });
        renderTodos();
        //テキストボックスを空白にする
        inputEl.value = '';
    }
}

//addBtnをクリックでtodoを追加
addBtn.addEventListener('click', addTodo);

//追加要素enterを押すとtodoが追加される
// inputEl.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         addTodo();
//     }
// });

//localstrageの利用も