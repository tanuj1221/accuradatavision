import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Breadcrumb.css';

interface BreadcrumbItem {
    label: string;
    path: string;
}

const Breadcrumb = () => {
    const location = useLocation();
    const baseUrl = 'https://accuradatavision.com';
    
    // Generate breadcrumb items based on current path
    const getBreadcrumbs = (): BreadcrumbItem[] => {
        const paths = location.pathname.split('/').filter(Boolean);
        const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];
        
        let currentPath = '';
        paths.forEach((path) => {
            currentPath += `/${path}`;
            const label = path
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            breadcrumbs.push({ label, path: currentPath });
        });
        
        return breadcrumbs;
    };

    const breadcrumbs = getBreadcrumbs();
    const breadcrumbList = breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `${baseUrl}${item.path}`
    }));

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": breadcrumbList
                    })}
                </script>
            </Helmet>
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <ol className="breadcrumb-list">
                    {breadcrumbs.map((item, index) => (
                        <li key={item.path} className="breadcrumb-item">
                            {index === breadcrumbs.length - 1 ? (
                                <span className="breadcrumb-current" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link to={item.path} className="breadcrumb-link">
                                    {item.label}
                                </Link>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <span className="breadcrumb-separator" aria-hidden="true">
                                    /
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumb;

