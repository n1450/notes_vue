// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input'); //getEleemntById == querySelector
// const listEl = document.querySelector('ul');

// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click',addGoal);

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: { 
        addGoal() { //handleClick()
            if(this.enteredValue){
                this.goals.push(this.enteredValue);
                this.enteredValue = "";
                this.$refs.input.focus();
            }   
        },
        handleClickLIItem(event){
            this.$refs.list.removeChild(event.target);
        },
    },
}).mount('#app');
