const bookPage = new Vue({
    el: "#bookPage",
    data: {
        books: [],
        isLoading: true,
        input: "",

    },
    created: function () {
        this.getData();
    },
    methods: {
        async getData() {
            this.books = await fetch('https://api.myjson.com/bins/1h3vb3', {
                    method: "GET",
                    dataType: "jsonp"
                })
                .then(data => data.json())
                .then(data => data.books)
                .catch(error => console.error(error))
            this.isLoading = false;
            console.log("hi", this.books)


        }
    },
    computed: {
        getFilteredBooks: function () {
            if (this.input == "") return this.books;
            console.log("inside")
            let books = this.books;
            return this.books.filter((book) => {
                return book.titulo.toLowerCase().match(this.input.toLowerCase());
            });
        }
    }
})