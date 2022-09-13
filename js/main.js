window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.browsing__button'),
          tabsContent = document.querySelectorAll('.browsing__menu-wrapping'),
          tabsParent = document.querySelector('.browsing__buttons');

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('browsing_opening');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('browsing_opening');

    }

    hideTabsContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if( target && target.classList.contains('browsing__button')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabContent(i);
                }
            });
        }
    });




    





});