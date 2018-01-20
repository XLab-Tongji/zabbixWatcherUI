<template>
  <div id="wrapper">

    <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
          <li class="nav-header">
            <div class="dropdown profile-element">
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">Zabbix Watcher UI</strong>
                             </span> </span> </a>
              <ul class="dropdown-menu animated fadeInRight m-t-xs">
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
            <div class="logo-element">
              ZW+
            </div>
          </li>
          <li :class="{ active: is_1}" >
            <a @click="show_zabbix_config"><i class="fa fa-cogs"></i> <span class="nav-label">Zabbix 配置</span></a>
          </li>
          <li :class="{ active: is_2}" >
            <a @click="show_influxdb_config"><i class="fa fa-plug"></i> <span class="nav-label">InfluxDB 配置</span> </a>
          </li>
          <li :class="{ active: is_3}" >
            <a @click="show_downfile"><i class="fa fa-area-chart"></i> <span class="nav-label">数据展示下载</span> </a>
          </li>
        </ul>

      </div>
    </nav>

    <div id="page-wrapper" class="gray-bg">
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
            <form role="search" class="navbar-form-custom" method="post" action="#">
              <div class="form-group">
                <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
              </div>
            </form>
          </div>
          <ul class="nav navbar-top-links navbar-right">
            <li>
              <a href="#">
                <i class="fa fa-sign-out"></i> Log out
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!--main page-->
      <download v-show="download_show"></download>
      <influxdb v-show="influxdb_show"></influxdb>
      <zabbix v-show="zabbix_show"></zabbix>


      <div class="footer">
        <div class="pull-right">
          10GB of <strong>250GB</strong> Free.
        </div>
        <div>
          <strong>Copyright</strong> Example Company &copy; 2014-2015
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import download from '@/views/DownloadFile.vue'
  import influxdb from '@/views/InfluxdbConfig.vue'
  import zabbix from '@/views/ZabbixConfig.vue'

  export default {
    name: 'app',
    data () {
      return {
        "is_1":true,
        "is_2":false,
        "is_3":false,
        "zabbix_show":true,
        "influxdb_show":false,
        "download_show":false,
      }
    },
    components: {
      'download': download,
      'influxdb': influxdb,
      'zabbix': zabbix,
    },
    methods: {
      show_zabbix_config () {
        this.zabbix_show = true;
        this.influxdb_show = false;
        this.download_show = false;

        this.is_1 = true;
        this.is_2 = false;
        this.is_3 = false;
      },
      show_influxdb_config () {
        this.zabbix_show = false;
        this.influxdb_show = true;
        this.download_show = false;

        this.is_1 = false;
        this.is_2 = true;
        this.is_3 = false;
      },
      show_downfile () {
        this.zabbix_show = false;
        this.influxdb_show = false;
        this.download_show = true;

        this.is_1 = false;
        this.is_2 = false;
        this.is_3 = true;
      },
    }
  }
</script>

<style>

</style>
