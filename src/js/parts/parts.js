export class Parts{

    init() {
        this.BottomLine();
    }

    BottomLine(){
        $('.close-icon').on('click', function () {
            $('.bottom-line').addClass('d-none');
        });
    }

}
