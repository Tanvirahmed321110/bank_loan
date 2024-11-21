
function sideBar() {
    const navItems = [...document.querySelectorAll('.sidebar-nav .nav-item')]

    activeClassAdd(navItems)

    // dropdown hide and show
    showAndHideDropdown()
}
sideBar()


function showAndHideDropdown() {
    const btns = [...document.querySelectorAll(' .dropdown-btn-main')]

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const icon = btn.querySelector('.icon')
            icon.classList.toggle('active')



            const dropdown = this.querySelector('.dropdown')
            dropdown.classList.toggle('active')
        })


        const dropdown = btn.querySelector('.dropdown');
        if (dropdown) {
            dropdown.addEventListener('click', function (event) {
                event.stopPropagation();
            });
        }
        btn.classList.add('active')
    })
}




// menu btn
function menuBtnF() {
    const menuBtn = document.getElementById('menu-btn')
    const header = document.querySelector('header')
    const main = document.querySelector('main')
    const sidebar = document.querySelector('.sidebar')

    menuBtn.addEventListener('click', function () {
        header.classList.toggle('active')
        main.classList.toggle('active')
        sidebar.classList.toggle('active')
    })
}

menuBtnF()

function headerNav() {
    const navItems = document.querySelectorAll('header .nav-item')
    activeClassAdd(navItems)
}
headerNav()



// active class add
function activeClassAdd(navItems) {
    navItems.forEach(navItem => {

        navItem.addEventListener('click', function () {
            navItems.forEach(item => item.classList.remove('active'))
            navItem.classList.toggle('active');
        });
    })
}