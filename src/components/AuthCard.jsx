export default function AuthCard({ title, desc, children }) {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      
      <h2 className="text-2xl font-semibold mb-2">
        {title}
      </h2>

      {desc && (
        <p className="text-gray-500 text-sm mb-6">
          {desc}
        </p>
      )}

      {children}
    </div>
  );
}