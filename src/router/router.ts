import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/coms/Home.vue';
import Nav1 from '../components/nav/Nav1.vue';
import Nav2 from '../components/nav/Nav2.vue';
import Nav3 from '../components/nav/Nav3.vue';
import Nav4 from '../components/nav/Nav4.vue';
import Nav5 from '../components/nav/Nav5.vue';
import Button from '../components/coms/Button.vue';
import Expand from '../components/coms/Expan.vue';
import HelloWorld from '../components/coms/HelloWorld.vue';
import Tooltip from '../components/coms/Tooltip.vue';
import Bread from '../components/coms/Bread.vue';
import Bottom1 from '../components/nav/Bottom1.vue';
import Fbtn from '../components/coms/Fbtn.vue';
import Footers from '../components/coms/Footers.vue';
import Tabs from '../components/coms/Tabs.vue';
import Page from '../components/coms/Page.vue';
import Dir from '../components/ref/Dir.vue';
import Event from '../components/ref/Event.vue';
import Met from '../components/ref/Met.vue';
import Comp from '../components/ref/Comp.vue';
import Vmodel from '../components/ref/V-model.vue';
import Watchers from '../components/ref/Watchers.vue';

import Auto from '../components/coms/Auto.vue';
import Check from '../components/coms/Check.vue';
import Combo from '../components/coms/Combo.vue';
import File from '../components/coms/File.vue';
import Form from '../components/coms/Form.vue';
import Custom from '../components/coms/Custom.vue';
import Numbs from '../components/coms/Numbs.vue';
import Otp from '../components/coms/Otp.vue';
import Radio from '../components/coms/Radio.vue';
import Sw from '../components/coms/Switch.vue';
import Textf from '../components/coms/Textf.vue';
import Texta from '../components/coms/Texta.vue';

import ToggleBtn from '../components/coms/ToggleBtn.vue';
import Carousel from '../components/coms/Carousel.vue';
import Chip from '../components/coms/Chip.vue';
import Item from '../components/coms/Item.vue';
import Slide from '../components/coms/Slide.vue';
import Stepper from '../components/coms/Stepper.vue';
import Windows from '../components/coms/Windows.vue';
import Alerts from '../components/coms/Alerts.vue';
import Badges from '../components/coms/Badges.vue';
import Banner from '../components/coms/Banner.vue';
import Empty from '../components/coms/Empty.vue';
import Hover from '../components/coms/Hover.vue';
import Progress from '../components/coms/Progress.vue';
import Circular from '../components/coms/Circular.vue';
import Linear from '../components/coms/Linear.vue';
import Rating from '../components/coms/Rating.vue';
import Skl from '../components/coms/Skeleton.vue';
import Snack from '../components/coms/Snack.vue';
import SnackQ from '../components/coms/SnackQ.vue';
import Timelines from '../components/coms/Timelines.vue';
import Ratio from '../components/coms/Ratio.vue';
import Ava from '../components/coms/Ava.vue';
import Icons from '../components/coms/Icons.vue';
import Imgs from '../components/coms/Imgs.vue';
import Parallax from '../components/coms/Parallax.vue';


const routes = [
    { path: '/', redirect: '/home' }, // 기본 리디렉션
    { path: '/home', component: Home },
    { path: '/nav1', component: Nav1 },
    { path: '/nav2', component: Nav2 },
    { path: '/nav3', component: Nav3 },
    { path: '/nav4', component: Nav4 },
    { path: '/nav5', component: Nav5 },
    { path: '/bottom1', component: Bottom1 },
    { path: '/button', component: Button },
    { path: '/expand', component: Expand },
    { path: '/hello', component: HelloWorld },
    { path: '/tooltip', component: Tooltip },
    { path: '/breadcrumbs', component: Bread },
    { path: '/fbtn', component: Fbtn },
    { path: '/footers', component: Footers },
    { path: '/tabs', component: Tabs },
    { path: '/pagenation', component: Page },
    { path: '/diractive', component: Dir },
    { path: '/event', component: Event },
    { path: '/met', component: Met },
    { path: '/watchers', component: Watchers },
    { path: '/computed', component: Comp },
    { path: '/vmodel', component: Vmodel },

    { path: '/auto', component: Auto },
    { path: '/check', component: Check },
    { path: '/combo', component: Combo },
    { path: '/file', component: File },
    { path: '/form', component: Form },
    { path: '/custom', component: Custom },
    { path: '/Numbs', component: Numbs },
    { path: '/otp', component: Otp },
    { path: '/radio', component: Radio },
    { path: '/sw', component: Sw },
    { path: '/textf', component: Textf },
    { path: '/tecta', component: Texta },

    { path: '/togglebtn', component: ToggleBtn },
    { path: '/carousel', component: Carousel },
    { path: '/chip', component: Chip },
    { path: '/itemgroup', component: Item },
    { path: '/slide', component: Slide },
    { path: '/stepper', component: Stepper },
    { path: '/windows', component: Windows },

    { path: '/alerts', component: Alerts },
    { path: '/badges', component: Badges },
    { path: '/banner', component: Banner },
    { path: '/empty', component: Empty },
    { path: '/hover', component: Hover },
    { path: '/circular', component: Circular },
    { path: '/linear', component: Linear },
    { path: '/ratings', component: Rating },
    { path: '/skloaders', component: Skl },
    { path: '/snack', component: Snack },
    { path: '/snackq', component: SnackQ },
    { path: '/timelines', component: Timelines },

    { path: '/ratio', component: Ratio },
    { path: '/ava', component: Ava },
    { path: '/icons', component: Icons },
    { path: '/imgs', component: Imgs },
    { path: '/parallax', component: Parallax },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;