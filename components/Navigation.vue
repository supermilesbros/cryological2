<template>
    <ul>
        <li>
            <n-link to="/">
                <span>Home</span>
            </n-link>
        </li>
        <li>
            <n-link to="/">
                <span>About Us</span>
            </n-link>
        </li>
        <li class="has-children has-children--multilevel-submenu">
            <n-link to="/">
                <span>Services</span>
            </n-link>
            <ul class="submenu">
                <li>
                    <n-link to="/">
                        <span>Cryogenics</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/">
                        <span>Cryotherapy</span>
                    </n-link>
                </li>
            </ul>
        </li>
        <li>
            <n-link to="/contact">
                <span>Contact Us</span>
            </n-link>
        </li>
    </ul>
</template>