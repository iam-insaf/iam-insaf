import Insaf from "#/assets/Insaf.jpg";

const Header = () => {
	return (
		<header className="w-80 h-fit place-self-center bg-linear-150 from-stone-200 dark:from-stone-900 rounded-xl shadow px-3 py-10 space-y-5 border-t-2 border-zinc-100 dark:border-zinc-800">
			<div className="overflow-hidden rounded-full size-40 mx-auto">
				<img src={Insaf} alt="Insaf" />
			</div>

			<div>
				<h1 className="text-center font-extrabold text-xl">Muhammad Insaf</h1>

				<p className="text-center text-sm text-taupe-700 dark:text-taupe-400">
					Your technical partner for fast <span>high-quality</span> web
					application development
				</p>
			</div>

			<hr className="w-1/2 mx-auto" />
		</header>
	);
};

export default Header;
