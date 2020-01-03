<template>
    <section>
        <transition-group name="list" tag="ul">            
            <li v-for="(todoItem, index) in propsdata" :key="todoItem.key" class="shadow" @click="listClick(index, todoItem.value)">
                <i class="checkBtn fa fa-check" aria-hidden="true"></i>
                {{todoItem.value}}
                <span class="removeBtn" type="button" @click.stop.prevent="removeTodo(todoItem, index)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </li>        
        </transition-group>
        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">
                수정
                <span class="closeModalBtn" @click="showModal = false">                
                    <i class="fa fa-times" aria-hidden="true"></i>
                </span>
            </h3>
            <div slot="body">
                <div class="inputBox shadow">
                    <input type="text" v-model="updateValue">
                    <span class="addContainer" @click="updateTodo">
                        <i class="addBtn fa fa-check" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div slot="footer"></div>       
        </modal>        
    </section>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    props: ['propsdata'],    
    methods: {
        removeTodo(todoItem, index) {
            this.$emit("removeTodo", todoItem, index)            
        },
        updateTodo() {            
            this.$emit("updateTodo", this.key, this.updateValue)
            this.updateValue = ''
            this.showModal = false
        },
        listClick(key, value) {
            this.showModal = !this.showModal
            this.key = key
            this.updateValue = value            
        }
    },
    data() {
        return {
            showModal: false,
            updateValue: '',
            key: ''
        }
    },
    components: {
        'modal': Modal
    }
}
</script>

<style>
    ul {
        list-style: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {        
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-move {
        transition: transform 1s;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;        
    }
    .modal-body .inputBox {
        border-bottom: 1px solid #8763fb;
    }
    .inputBox input {
        border-style:none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478fb, #8763fb);        
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
    .closeModalBtn {
        float: right;
    }
</style>