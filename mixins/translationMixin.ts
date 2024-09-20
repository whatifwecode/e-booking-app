import { defineComponent } from 'vue';
import { getTranslation } from '~/services/translationService';

export default defineComponent({
    methods: {
        translate(key: string) {
            return getTranslation(key);
        }
    }
});
