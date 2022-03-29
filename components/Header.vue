<template>
    <div class="header-area header-area--default">

        <fixed-header :threshold="300">
            <div class="header-bottom-wrap">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header default-menu-style position-relative">
                                <div class="header__logo">
                                    <n-link to="/">
                                        <div>
                                            <img src="/images/logo/cryo_logo.png" class="img-fluid" style="width: 50px;" alt="Brand Logo">
                                        </div>
                                    </n-link>
                                </div>

                                <div class="header-midle-box">
                                    <div class="header-bottom-wrap d-md-block d-none">
                                        <div class="header-bottom-inner">
                                            <div class="header-bottom-left-wrap">
                                                <div class="header__navigation d-none d-xl-block">
                                                    <nav class="navigation-menu primary--menu">
                                                        <Navigation />
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </fixed-header>

    </div>
</template>

<script>
    import FixedHeader from 'vue-fixed-header'
    import HeaderTop from '@/components/HeaderTop';
    import Navigation from '@/components/Navigation';

    export default {
        components: {
            HeaderTop,
            Navigation,
            FixedHeader
        },
        methods: {
            // offcanvas mobilemenu open
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>