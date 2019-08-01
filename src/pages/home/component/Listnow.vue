<template>
    <div>
        <ul class="getShowing">
            <li class="getShowing-li" v-for="(item,index) in subjects" :key="index">
                <div class="poster" :style="{backgroundImage:'url('+item.images.large+')'}"></div>
                <div class="content">
                    <h3>{{item.title}}</h3>
                    <p>类型：<em v-for="(items,index) in item.genres" :key="index">{{items}}</em></p>
                    <p>导演：<em v-for="(items,index) in item.directors" :key="index">{{items.name}}  </em></p>
                    <p>主演：<em v-for="(items,index) in item.casts" :key="index">{{items.name}}  </em></p>
                </div>
                <hr class="line"/>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
  name: 'HomeListnow',
  props: {
    subjects: Array
  }
}
</script>

<style>
.getShowing{
    margin: 0 10px;
}

.poster{
    width: 7.8125rem;
    height: 10.9375rem;
    background-repeat:no-repeat;
    background-size:100% 100%;
    display: inline-block;
    margin-left: 16px;
}

.content{
    float: right;
    width: calc(100% -7.8125rem);
}

.content h3{
    font-size: 20px;
    margin-bottom: 50px;
}

.content p{
    margin-bottom: 10px;
}

.getShowing-li{
    padding: 10px 0;
}

.line{
    background-color: #ddd;
    margin-top: 10px;
    height: 0.1px;
}
</style>
