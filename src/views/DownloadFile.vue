<template>

  <div class="myform">
    <div class="ibox-title">
      <h5>数据展示下载</h5>
    </div>
    <div class="ibox-content">
      <div  class="form-horizontal">

        <div class="btn-group open" style="width: 100%">

          <button class="btn btn-info" disabled>选择类型</button>

          <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle" aria-expanded="true" style="margin-left: 20px"> {{item}} <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a @click="getDate(1)" class="font-bold">CPU</a></li>
            <li><a @click="getDate(2)" class="font-bold">DISK</a></li>
            <li><a @click="getDate(3)" class="font-bold">INODE</a></li>
            <li><a @click="getDate(4)" class="font-bold">MEMORY</a></li>
            <li><a @click="getDate(5)" class="font-bold">NETWORK</a></li>
            <li><a @click="getDate(6)" class="font-bold">PROCESS</a></li>
            <!--<li class="divider"></li>-->
          </ul>
          <a class="btn btn-primary" :href="downloadUrl" style="position: relative; float: right" v-show="canDownload">下载</a>
        </div>

        <!--todo show data-->


        <div class="ibox-content">

          <div class="jqGrid_wrapper">
            <div class="ui-jqgrid ui-widget ui-widget-content ui-corner-all" id="gbox_table_list_1" dir="ltr" style="width: 1130px;">
              <div class="ui-widget-overlay jqgrid-overlay" id="lui_table_list_1"></div>
              <div class="loading ui-state-default ui-state-active" id="load_table_list_1" style="display: none;">Loading...</div>
              <div class="ui-jqgrid-view" id="gview_table_list_1" style="width: 1130px;">
                <div class="ui-jqgrid-titlebar ui-jqgrid-caption ui-widget-header ui-corner-top ui-helper-clearfix">
                  <span class="ui-jqgrid-title">{{tableNamea}}</span>
                </div>

                <div class="ui-state-default ui-jqgrid-hdiv" style="width: 1130px;">
                  <div class="ui-jqgrid-hbox">
                    <table class="ui-jqgrid-htable" style="width: 1112px;" role="grid" aria-labelledby="gbox_table_list_1" cellspacing="0" cellpadding="0" border="0">
                      <thead>
                      <tr class="ui-jqgrid-labels" role="rowheader">

                        <th id="table_list_1_id" role="columnheader" class="ui-state-default ui-th-column ui-th-ltr" style="width: 104px;" v-for="col in cols">
                          <span class="ui-jqgrid-resize ui-jqgrid-resize-ltr" style="cursor: col-resize;">&nbsp;</span>
                          <div id="jqgh_table_list_1_id" class="ui-jqgrid-sortable">{{col}}
                            <span class="s-ico" style="">
                              <span sort="asc" class="ui-grid-ico-sort ui-icon-asc ui-icon ui-icon-triangle-1-n ui-sort-ltr"></span>
                              <span sort="desc" class="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"></span>
                            </span>
                          </div>
                        </th>

                      </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <div class="ui-jqgrid-bdiv" style="height: 250px; width: 1130px;"><div style="position:relative;"><div></div>
                  <table id="table_list_1" tabindex="0" cellspacing="0" cellpadding="0" border="0" role="grid" aria-multiselectable="false" aria-labelledby="gbox_table_list_1" class="ui-jqgrid-btable" style="width: 1112px;">
                    <tbody>

                    <tr role="row" id="1" tabindex="-1" class="ui-widget-content jqgrow ui-row-ltr" v-for="row in rows">
                      <td role="gridcell" style="" title="1" aria-describedby="table_list_1_id" v-for="value in row">{{value}}</td>
                    </tr>

                    </tbody>
                  </table>
                </div>
                </div>
                </div>
              <div class="ui-jqgrid-resize-mark" id="rs_mtable_list_1">&nbsp;</div><div id="pager_list_1" class="ui-state-default ui-jqgrid-pager ui-corner-bottom" dir="ltr" style="width: 1130px;"><div id="pg_pager_list_1" class="ui-pager-control" role="group"><table cellspacing="0" cellpadding="0" border="0" class="ui-pg-table" style="width:100%;table-layout:fixed;height:100%;" role="row"><tbody><tr><td id="pager_list_1_left" align="left"></td><td id="pager_list_1_center" align="center" style="white-space: pre; width: 301px;"><table cellspacing="0" cellpadding="0" border="0" style="table-layout:auto;" class="ui-pg-table"><tbody><tr><td id="first_pager_list_1" class="ui-pg-button ui-corner-all ui-state-disabled"><span class="ui-icon ui-icon-seek-first"></span></td><td id="prev_pager_list_1" class="ui-pg-button ui-corner-all ui-state-disabled" style="cursor: pointer;"><span class="ui-icon ui-icon-seek-prev"></span></td><td class="ui-pg-button ui-state-disabled" style="width: 4px; cursor: default;"><span class="ui-separator"></span></td><td dir="ltr">Page <input class="ui-pg-input" type="text" size="2" maxlength="7" value="0" role="textbox"> of <span id="sp_1_pager_list_1">2</span></td><td class="ui-pg-button ui-state-disabled" style="width: 4px; cursor: default;"><span class="ui-separator"></span></td><td id="next_pager_list_1" class="ui-pg-button ui-corner-all" style="cursor: default;"><span class="ui-icon ui-icon-seek-next"></span></td><td id="last_pager_list_1" class="ui-pg-button ui-corner-all"><span class="ui-icon ui-icon-seek-end"></span></td><td dir="ltr"><select class="ui-pg-selbox" role="listbox"><option role="option" value="10">10</option><option role="option" value="20">20</option><option role="option" value="30">30</option></select></td></tr></tbody></table></td><td id="pager_list_1_right" align="right"><div dir="ltr" style="text-align:right" class="ui-paging-info">View 1 - 14 of 27</div></td></tr></tbody></table></div></div></div>



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
        item: 'cpu',
        filename: 'cpu',
        tableValue: null,
        downloadUrl: null,
        canDownload: false,
        tableName: null,
        cols: [],
        rows: {},
      }
    },
    methods: {
      getDate (index) {
        switch (index) {
          case 1:
            this.item = "cpu";
            break;
          case 2:
            this.item = "disk";
            break;
          case 3:
            this.item = "inode";
            break;
          case 4:
            this.item = "memory";
            break;
          case 5:
            this.item = "network";
            break;
          case 6:
            this.item = "process";
            break;
        }
        this.filename = this.item;
        this.$http.post('http://localhost:8080/search', {
            "item":this.filename,
          }
        ).then(function (response){
          this.tableValue = JSON.parse(response.bodyText)
          console.log(this.tableValue)

          // todo show data
          this.canDownload = true;
          this.downloadUrl = "http://localhost:8080/download?fileName=" + this.filename;
          this.tableName = this.filename;
          this.cols = this.tableValue.columns;
          this.rows = this.tableValue.values;

        }, function (response) {
          console.log(response)
        });
      },
    }
  }

</script>

<style>

</style>
