import { defineStore } from 'pinia';
interface ServiceDetailState {
    selectedDetailService: string;
}

export const useServiceDetailSelectionStore = defineStore('serviceDetailSelection', {
    state: (): ServiceDetailState => ({
        selectedServiceDetail: '',
    }),
    actions: {
        setServiceDetail(serviceDetail: string) {
            this.selectedDetailService = serviceDetail;
        },
    },
});
