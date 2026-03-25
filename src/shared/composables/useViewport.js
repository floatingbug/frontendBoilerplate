import { computed, onMounted, onUnmounted, ref } from 'vue';
import breakpoints from '@/shared/config/breakpoints';


export default function useViewport(){
    const width = ref(window.innerWidth);

    function onResize(){
        width.value = window.innerWidth;
    }

    const viewport = computed(() => {
        if(width.value <= breakpoints.mobileMax){
            return 'mobile';
        }

        if(width.value <= breakpoints.tabletMax){
            return 'tablet';
        }

        if(width.value <= breakpoints.notebookMax){
            return 'notebook';
        }

        return 'desktop';
    });

    onMounted(() => {
        window.addEventListener('resize', onResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', onResize);
    });

    return {
        width,
        viewport,
    };
}
