<template>
      <div class="home">
            <div class="common-layout">
                  <el-container>
                        <el-header>
                              <el-row :gutter="20">
                                    <el-col :span="4"></el-col>
                                    <el-col :span="16">
                                          <h2>前端监控系统-</h2>
                                    </el-col>
                                    <el-col :span="4">
                                    </el-col>
                              </el-row>
                        </el-header>
                        <el-container>
                              <el-aside width="200px">
                                    <el-menu active-text-color="#ffd04b" background-color="#545c64"
                                          class="el-menu-vertical-demo" :default-active="active" text-color="#fff"
                                          router>
                                          <el-menu-item :index="item.path" v-for="(item, index) in list" :key="index">
                                                <span>{{ item.meta.title }}</span>
                                          </el-menu-item>
                                    </el-menu>
                              </el-aside>

                              <el-main>
                                    <!-- 出口 -->
                                    <router-view></router-view>
                              </el-main>
                        </el-container>
                  </el-container>
            </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
      name: "HomeView",
      setup() {
            const router = useRouter();
            const route = useRoute();
            const list = router.getRoutes().filter((v) => v.meta.isShow);
            const active = route.path;
            return { list, active };
      },
});
</script>
<style lang="scss" scoped>
.el-header {
      height: 80px;
      background-color: #666;


      h2 {
            text-align: center;
            height: 80px;
            line-height: 50px;
            color: white;
      }
}

.el-aside {
      .el-menu {
            height: calc(100vh - 80px);
      }
}
</style>
