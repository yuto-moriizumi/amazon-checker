const sortableTable = Vue.component("sortable-table", {
    template: `
      <table>
        <thead>
          <tr>
            <th v-for="key in columns" v-on:click="sort(key)">
              {{key}}
            </th>
          </tr>
        </thead>
        <transition-group name="items" tag="tbody">
          <tr v-for="row in rows" :key="row.id">
            <td v-for="value in row">
              {{ value }}
            </td>
          </tr>
        </transition-group>
      </table>`,
    props: ["columns", "rows"], //rowsでは{key:value}形式を、columnsは[key1,key2...]形式を渡す
    data: function () {
        return {
            asc: true,
            currentSort: 0,
        };
    },
    methods: {
        sort(index) {
            //カラム名についている▲マークを取る
            this.columns[this.currentSort] = this.columns[
                this.currentSort
            ].slice(0, -2);
            if (this.currentSort == index) this.asc = !this.asc;
            //もし既にソートしているカラムを選択したら、昇順と降順を入れ替える
            else this.asc = true; //そうでない場合は昇順
            this.columns[index] += this.asc ? " ▲" : " ▼"; //アイコンを付ける
            this.currentSort = index;

            //選択ソート
            for (let i = 0; i < this.rows.length; i++) {
                minj = i;
                for (let j = i + 1; j < this.rows.length; j++) {
                    if (
                        (this.asc &&
                            this.rows[minj][index] > this.rows[j][index]) ||
                        (!this.asc &&
                            this.rows[minj][index] < this.rows[j][index])
                    )
                        minj = j;
                }
                const t = this.rows[i];
                this.$set(this.rows, i, this.rows[minj]); //オブジェクトを操作するときは$setを使う必要がある
                this.$set(this.rows, minj, t);
            }

            console.log("sorted!", this.rows);
        },
    },
});
