import {mapState} from "vuex";
const caseDateil = {
    data(){
        return{
            // 案例参数
            casePage: {
                // 分类id
                typeId: "",
                // 当前页
                pageNum: 1,
                // 一页显示多少
                pageSize: 6
            },
            // 案例数据
            CaseList: [],
        }
    },
    mounted() {
        this.caseDetailList()
    },
    methods:{
        // 获取案例数据
        async caseDetailList(page = 1) {
            this.casePage.pageNum = page
            await this.$store.dispatch('Case/getAllCaseList', this.casePage)
            this.CaseList = this.CaseListDetaile.records
        }
    },
    computed:{
        ...mapState('Case', ['CaseListDetaile']),
    }
}

export default caseDateil
