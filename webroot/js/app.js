new Vue({
    el: "#app",
    data: {
        products: [],
        columns: [],
    },
    template: `
        <div>
            <sortable-table :columns="columns" :rows="products"></sortable-table>
        </div>
    `,
    mounted: function () {
        const req = new XMLHttpRequest();
        req.open("GET", "./api");
        req.send(null);
        req.onloadend = () => {
            const json = JSON.parse(req.responseText);
            this.products = json;
            this.columns = Object.keys(json[0]);

            //amazon.comからデータを取得する
            this.columns.push("amazon.com price");
            for (const product of this.products) {
                const link = product.link_amazon_com;
                const req = new XMLHttpRequest();
                req.open("GET", link);
                req.send(null);
                req.onloadend = () => {
                    console.log(req.responseText);
                };
            }
        };
    },
});
