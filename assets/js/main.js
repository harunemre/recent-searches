$(function() {   
    $("#search-input").on('keyup', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {           
            var newSearchWord = $(this).val().trim();           
            if (newSearchWord.length != 0) {                
                var searchWordsList = $('.search-word').map((i,o) => o.textContent.trim()).toArray();
               
                if (!searchWordsList.includes(newSearchWord)) {
                    $('#search-word-container').append(`
                    <div class="row no-gutters py-3 search-word-wrapper">
                    <div class="col-12">
                        <span class="text-muted search-word" style="font-size: 18px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewbox="0 0 22 22">
                                <path d="M0,0H22V22H0Z" fill="none" />
                                <circle cx="8.25" cy="8.25" r="8.25" transform="translate(2.75 2.75)" fill="none"
                                    stroke="#0f0f2b" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-miterlimit="10" stroke-width="1.375" />
                                <path data-name="Path" d="M0,0V4.583l2.75,2.75" transform="translate(11 6.417)"
                                    fill="none" stroke="#0f0f2b" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-miterlimit="10" stroke-width="1.375" />
                            </svg>
                            ${newSearchWord}</span>
                        <button type="button" class="close pr-3" aria-label="Close">
                            <span aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
                                    <g opacity="0.6">
                                        <path d="M0,0H24V24H0Z" fill="none" />
                                        <path data-name="Path" d="M12,0,0,12" transform="translate(6 6)" fill="none"
                                            stroke="#202842" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-miterlimit="10" stroke-width="1.5" />
                                        <path data-name="Path" d="M0,0,12,12" transform="translate(6 6)" fill="none"
                                            stroke="#202842" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-miterlimit="10" stroke-width="1.5" />
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                        `);
                }
            }
        }
    });

    $(document).on('click','button.close', function() {          
        $(this).closest('.search-word-wrapper').remove();
    })
});