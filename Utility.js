const MortgageMix = require('./classes/MortgageMix');


module.exports = {
    getMortgageMix: function (mortgage) {
        const plans = mortgage.plans;
        if (plans.length === 2) {
            if (plans.findIndex(plan => plan.plan === 'פריים') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה לא צמודה') !== -1) {
                return MortgageMix.Mix1;
            }
        }
        else if (plans.length === 3) {
            if (plans.findIndex(plan => plan.plan === 'פריים') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה לא צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'משתנה צמודה') !== -1) {
                return MortgageMix.Mix2;
            }
            if (plans.findIndex(plan => plan.plan === 'פריים') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה לא צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'משתנה לא צמודה') !== -1) {
                return MortgageMix.Mix3;
            }
            if (plans.findIndex(plan => plan.plan === 'פריים') !== -1 &&
                plans.findIndex(plan => plan.plan === 'משתנה לא צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה צמודה') !== -1) {
                return MortgageMix.Mix5;
            }
            if (plans.findIndex(plan => plan.plan === 'פריים') !== -1 &&
                plans.findIndex(plan => plan.plan === 'משתנה צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה צמודה') !== -1) {
                return MortgageMix.Mix7;
            }
            if (plans.findIndex(plan => plan.plan === 'פריים') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה לא צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה צמודה') !== -1) {
                return MortgageMix.Mix9;
            }
        }
        else if (plans.length === 4) {
            if (plans.findIndex(plan => plan.plan === 'פריים') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה לא צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'משתנה צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה צמודה') !== -1) {
                return MortgageMix.Mix4;
            }
            if (plans.findIndex(plan => plan.plan === 'פריים') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה לא צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'משתנה צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'משתנה לא צמודה') !== -1) {
                return MortgageMix.Mix6;
            }
            if (plans.findIndex(plan => plan.plan === 'פריים') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה לא צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'משתנה לא צמודה') !== -1 &&
                plans.findIndex(plan => plan.plan === 'קבועה צמודה') !== -1) {
                return MortgageMix.Mix8;
            }
        }
    },
    getarrMortSamefinancPercent: function (financingPercent, docs) {
        let arrMortSamefinancPercent = [];

        if (financingPercent > 0 && financingPercent <= 0.45) {
            arrMortSamefinancPercent = this.getArrMortSamefinancPercent(docs, 0, 0.45); // get all mortgages with same finance percent
        }
        else if (financingPercent > 0.45 && financingPercent <= 0.6) {
            arrMortSamefinancPercent = this.getArrMortSamefinancPercent(docs, 0.45, 0.6); // get all mortgages with same finance percent
        }
        else if (financingPercent > 0.6 && financingPercent <= 0.75) {
            arrMortSamefinancPercent = this.getArrMortSamefinancPercent(docs, 0.6, 0.75); // get all mortgages with same finance percent
        }
        else {
            arrMortSamefinancPercent = this.getArrMortSamefinancPercent(docs, 0.75, 1); // get all mortgages with same finance percent
        }
        return arrMortSamefinancPercent;
    },
    getArrMortSamefinancPercent: function (array, bottomLimit, upperLimit) {
        return array.filter((mort) => {
            return (mort.mortgageSum / mort.propValue > bottomLimit) && (mort.mortgageSum / mort.propValue <= upperLimit)
        });
    },
    getAllMortPlans: function (arrMortSamefinancPercent) {
        const allPlans = [];
        arrMortSamefinancPercent.forEach((mortg) => {
            mortg.plans.forEach((p) => {
                allPlans.push(p);
            })
        });
        return allPlans;
    },
    getInterestCompareObj: function (userPlans, DbPlans) {
        let interestCompare = [];

        userPlans.forEach((plan) => {
            const arrPlans = DbPlans.filter((p) => {
                return p.period === plan.period && p.plan === plan.plan; // filter plans with the same type and same period of years
            });
            const averagePlans = arrPlans.map((plan) => plan.interest).reduce((a, b) => a + b, 0) / arrPlans.length;
            console.log(plan.plan +" "+averagePlans);
            interestCompare.push({plan: plan.plan, result: plan.interest > averagePlans ? 'ניתן לשפר' : 'לא ניתן לשפר'})
        });
        return interestCompare;
    }
}
