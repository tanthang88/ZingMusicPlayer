import ZingAPI from "./ZingAPI";

export const getDataHome = async (type) => {
    const params = {
        page: 1,
        count: 10,
    };
    try {
        const data = await ZingAPI.getHome(params);
        const rs = data.items.filter((item) => {
            return item.sectionType === type;
        });
        return rs[0];
    } catch (err) {
        console.error(err);
    }
};
