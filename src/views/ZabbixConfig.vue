<template>

  <div class="myform">
    <div class="ibox-title">
      <h5>Zabbix 配置</h5>
    </div>
    <div class="ibox-content">
      <div  class="form-horizontal">
        <div class="form-group"><label class="col-sm-2 control-label">Zabbix ip</label>

          <div class="col-sm-10"><input type="text"class="form-control" v-model="zabbix_ip"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Zabbix port</label>

          <div class="col-sm-10"><input type="text" class="form-control" v-model="zabbix_port"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Username</label>

          <div class="col-sm-10"><input type="text" class="form-control" v-model="zabbix_username"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Password</label>

          <div class="col-sm-10"><input type="password"  class="form-control"
                                        name="password" v-model="zabbix_password"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Hostname</label>

          <div class="col-sm-10"><input type="text" class="form-control" v-model="zabbix_hostname"/></div>
        </div>
        <div class="form-group">
          <div class="col-sm-4 col-sm-offset-2">
            <button class="btn btn-white" @click="cancel">Cancel</button>
            <button class="btn btn-primary" @click="loginZabbix">Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zabbixconfig',
    data() {
      return {
        "zabbix_show": true,
        "influxdb_show": false,
        "download_show": false,

        "zabbix_ip":"202.120.167.198",
        "zabbix_port":"8088",
        "zabbix_username":"Admin",
        "zabbix_password":"zabbix",
        "zabbix_hostname":"rjxy-dqf-web.tongji.edu.cn",
      }
    },
    methods: {
      cancel () {
        this.zabbix_ip = "202.120.167.198";
        this.zabbix_port = "8088";
        this.zabbix_username = "Admin";
        this.zabbix_password = "zabbix";
        this.zabbix_hostname = "rjxy-dqf-web.tongji.edu.cn";
      },
      loginZabbix () {
        this.$http.post('http://localhost:8080/zabbix', {
            "zabbixIp":this.zabbix_ip,
            "zabbixPort":this.zabbix_port,
            "zabbixUsername":this.zabbix_username,
            "zabbixPassword":this.zabbix_password,
            "zabbixHostname":this.zabbix_hostname,
          }
        ).then(function (response){
            console.log(response)
          }, function (response) {
            console.log(response)
        });
      },
    }
  }

</script>

<style>

</style>
