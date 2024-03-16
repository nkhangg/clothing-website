export const commonHeaders = [
    {
        title: 'Trang chủ',
        link: '/',
        funtion: false,
    },
];

export const headersFN = (user?: any) => {
    if (!user)
        return [
            ...commonHeaders,
            {
                title: 'Đăng nhập',
                link: '/dang-nhap',
                funtion: false,
            },
            {
                title: 'Đăng ký',
                link: '/dang-ky',
                funtion: false,
            },
        ];

    return [
        ...commonHeaders,
        { title: 'Hồ sơ', link: '', funtion: true },
        { title: 'Cửa hàng', link: '', funtion: true },
        { title: 'Giỏ hàng', link: '', funtion: true },
        { title: 'Đăng xuất', link: '/dang-xuat', funtion: true },
    ];
};
