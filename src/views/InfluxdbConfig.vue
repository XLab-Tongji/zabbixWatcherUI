<template>

  <div class="myform">
    <div class="ibox-title">
      <h5>InfluxDB 配置</h5>
      <button class="btn btn-info btn-circle" type="button" style="float: right; position: relative; bottom: 8px;" v-show="success"><i class="fa fa-check"></i></button>
      <button class="btn btn-info btn-warning" type="button" style="float: right; position: relative; bottom: 8px;" v-show="!success"><i class="fa fa-times"></i></button>
    </div>
    <div class="ibox-content">
      <div class="form-horizontal">
        <div class="form-group"><label class="col-sm-2 control-label">Influxdb ip</label>

          <div class="col-sm-10"><input type="text" class="form-control" v-model="influxdb_ip"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Influxdb port</label>

          <div class="col-sm-10"><input type="text" class="form-control" v-model="influxdb_port"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Username</label>

          <div class="col-sm-10"><input type="text" class="form-control" v-model="influxdb_username"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Password</label>

          <div class="col-sm-10"><input type="password" class="form-control"
                                        name="password" v-model="influxdb_password"/></div>
        </div>
        <div class="hr-line-dashed"></div>
        <div class="form-group"><label class="col-sm-2 control-label">Database name</label>

          <div class="col-sm-10"><input type="text" class="form-control" v-model="influxdb_bdname"/></div>
        </div>
        <div class="form-group">
          <div class="col-sm-4 col-sm-offset-2">
            <button class="btn btn-white"  @click="cancel">Cancel</button>
            <button class="btn btn-primary"  @click="loginInfluxdb">Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'influxdbconfig',
    data() {
      return {
        "success":false,
        "influxdb_ip":"202.120.167.198",
        "influxdb_port":"8086",
        "influxdb_username":"root",
        "influxdb_password":"root",
        "influxdb_bdname":"zabbix",
      }
    },
    methods: {
      cancel () {
        this.influxdb_ip = "202.120.167.198";
        this.influxdb_port = "8086";
        this.influxdb_username = "root";
        this.influxdb_password = "root";
        this.influxdb_bdname = "zabbix";
      },
      loginInfluxdb () {
        this.$http.post('http://localhost:8080/influx', {
            "influxIp":this.influxdb_ip,
            "influxPort":this.influxdb_port,
            "influxUsername":this.influxdb_username,
            "influxPassword":this.influxdb_password,
            "influxDbName":this.influxdb_bdname,
          }
        ).then(function (response){
          console.log(response);
          this.success = true;
          toastr.success("连接成功");
        }, function (response) {
          console.log(response);
          this.success = false;
          toastr.error("连接失败，请检查配置");
        });
      },
    }
  }

</script>

<style>

</style>
