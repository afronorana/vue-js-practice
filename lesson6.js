new Vue({

    el: '#app',

    data: {
        plans: [
            {name: 'Enterprise', price: 100},
            {name: 'Pro', price: 50},
            {name: 'Personal', price: 10},
            {name: 'Free', price: 0}
        ],

        active: {name: 'Free', price: 0}
    },

    components: {
        plan: {
            template: '#plan-template',
            props: ['plan', 'active'],
            computed: {
                isUpgrade: function () {
                    return this.active.price < this.plan.price;
                }
            },
            methods: {
                setActivePlan: function () {
                    this.active = this.plan;
                }
            }
        }
    }
});