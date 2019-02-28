var todoitem = /** @class */ (function () {
    function todoitem(name) {
        this.name = name || "";
        this.isdone = false;
        this.isdelete = false;
    }
    todoitem.prototype.finish = function () {
        this.isdone = true;
    };
    todoitem.prototype.delete = function () {
        this.isdelete = true;
    };
    return todoitem;
}());
var todolist = /** @class */ (function () {
    function todolist(item) {
        if (item) {
            this.item = item;
        }
        else
            this.item = new Array();
    }
    todolist.prototype.init = function (item) {
        if (item) {
            this.item = item;
        }
        else
            this.item = new Array();
    };
    todolist.prototype.additem = function (item) {
        this.item.push(item);
    };
    todolist.prototype.edititem = function (newitem, olditem) {
        var i = this.item.indexOf(olditem);
        this.item[i] = newitem;
    };
    todolist.prototype.deleteitem = function (item) {
        var i = this.item.indexOf(item);
        this.item.splice(i + 1, 1);
    };
    return todolist;
}());
var toDoList = new todolist();
var ul = document.querySelector("ul");
var data = document.querySelector("input");
var btn = document.querySelector("button");
function clickAddItem(event) {
    var ul = document.querySelector("ul");
    var todoitem = document.createElement("li");
    var isfinished = document.createElement("input");
    var todovalue = document.createElement("span");
    var isdelete = document.createElement("i");
    todovalue.innerText = event.target.innerText.
        isdelete.innerText = "×";
    isfinished.innerText = "删除";
    isfinished.setAttribute("type", "checkbox");
    todoitem.appendChild(isfinished);
    todoitem.appendChild(todovalue);
    todoitem.appendChild(isdelete);
    ul.appendChild(todoitem);
    debugger;
}
function keyupAddItem(event) {
    var e = event.key;
    if (e == "ENTER" || e == "SPACEBAR") {
        clickAddItem(event);
    }
}
function eventDelegate(parentSelector, targetSelector, events, foo) {
    function triFunction(e) {
        var event = e || window.event;
        var target = event.target || event.srcElement;
        var currentTarget = event.currentTarget;
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.webkitMatchesSelector ||
                    function (s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
                        while (--i >= 0 && matches.item(i) !== this) {
                        }
                        return i > -1;
                    };
        }
        while (target !== currentTarget) {
            if (target.matches(targetSelector)) {
                var sTarget = target;
                // 执行绑定的函数，注意 this
                foo.call(sTarget, Array.prototype.slice.call(arguments));
            }
            target = target.parentNode;
        }
    }
}
function editItem(event) {
    if (event.target.nodeName.toLocaleLowerCase === 'li') {
        var item = event.target;
        var parentItem = item.parentElement;
        item.innerHTML = "<input />";
        if (event.code === "Enter") {
            item.innerHTML = parentItem.querySelector("input").value;
        }
    }
}
function beFinished() { }
function deleteItem() { }
function initItem() { }
function saveToDoList(ToDoList, toDoList) {
    window.localStorage.setItem(ToDoList, JSON.stringify(todolist).toString());
}
function getToDoList(ToDoList) {
    return JSON.parse(localStorage.getItem(ToDoList));
}
window.onload = function init() {
    toDoList = getToDoList("ToDoList");
    initItem();
    eventDelegate("ul", "li", "click", "editItem");
    eventDelegate("ul", "li", "click", "beFinished");
    eventDelegate("ul", "li", "click", "deleteItem");
};
window.onbeforeunload = function fashPage() {
    saveToDoList("ToDoList", toDoList);
};
