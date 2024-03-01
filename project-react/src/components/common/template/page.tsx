interface PageProps {
    children?: React.ReactNode;
    classList?: string;
}

export default function Page({ children, classList }: PageProps) {
    const defaultClasses =
        'relative top-16 z-30 min-h-screen bg-neutral-50 dark:bg-neutral-900 ';
    const additionalClasses = classList || '';

    const pageClasses = defaultClasses + additionalClasses;

    return (
        <>
            <main className={pageClasses}>{children}</main>
            <div className="h-[450px] invisible"></div>
        </>
    );
}
