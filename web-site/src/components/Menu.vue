<template>
    <div id="menu">
        <header>
            <h1><a href="#">OPENKNOWL</a></h1>
            <nav>
                <ul>
                    <li>
                        <router-link to="/">Vision</router-link>
                    </li>
                    <li>
                        <router-link to="/service">Services</router-link>
                    </li>
                    <!-- <li>
                        <a href="/./vision" class="" title="오픈놀 비전">Vision</a>
                    </li>
                    <li>
                        <a href="/./services" class="router-link-exact-active router-link-active" title="오픈놀 서비스">Services</a>
                    </li> -->
                    <li>
                        <router-link to="/history">History</router-link>                    
                    </li>
                    
                    <li>
                        <a href="/./recruit" class="" title="오픈놀 채용">Recruit</a>
                    </li>
                    <li>
                        <a href="/./contact" class="" title="오픈놀 문의">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        <footer>
            <a href="#">blog</a>
            <a href="#">facebook</a>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Menu'  
}
</script>

<style scoped>
    #menu {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 999;
        width: 256px;
        padding-top: 48px;
        padding-left: 48px;
        padding-right: 48px;
        border-right: 1px solid #bcc5d0;
        background-color: hsla(0,0%,100%,.95);
    }    
    nav {
        margin-top: 49px;
        letter-spacing: .25em;
        text-transform: uppercase;
    }
    ul {
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
        list-style-type: none;
    }
    li {
        margin-top: 32px;
    }
    a {
        color: inherit;
        text-decoration: initial;
    }
    footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding-bottom: 48px;
        padding-left: 48px;
        padding-right: 48px;
    }
</style>