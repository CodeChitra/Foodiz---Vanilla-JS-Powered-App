class SearchView{
    #parentContainer = document.querySelector(".search");

    getQuery(){
        return this.#parentContainer.querySelector(".search__field").value;
    }

    addHandlerSearch(handler){
        this.#parentContainer.addEventListener("submit", (e)=>{
            e.preventDefault();
            handler();
        });
    }
}

export const searchView = new SearchView();