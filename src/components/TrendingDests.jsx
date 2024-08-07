export default function TrendingDests({ image, name, description, visitors }) {
    console.log({ image, name, description });
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
            <img src={image} alt={name} className="w-full h-80 object-cover" />
            <div className="p-4 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
                <p className="text-gray-600">{description}</p>
                <h2 className="text-lg font-medium text-gray-800">Last month Visitors: <i>{visitors}</i></h2>
            </div>
        </div>
    );
}
