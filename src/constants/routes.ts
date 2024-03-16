export const links = {
    home: '/',
    product: {
        show: (id: string, name: string) => {
            return `/san-pham/${id}/${name}`;
        },
    },
};
