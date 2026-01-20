import Link from "next/link";

export default function SocialLinks() {
    return (
        <div className="px-4 md:px-40 flex justify-center pb-20">
            <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
                <div className="flex flex-col gap-5 w-full">
                    {/* WhatsApp */}
                    <Link
                        href="https://wa.me/qr/XLPKGIVBXNI4P1"
                        className="group relative w-full h-28 rounded-2xl glass-panel-dark overflow-hidden flex items-center px-6 md:px-8 gap-6"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#25D366] rounded-xl shadow-lg shadow-green-900/20 group-hover:scale-110 transition-transform duration-300">
                            <svg
                                className="w-10 h-10 text-white fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#25D366] transition-colors">
                                WhatsApp
                            </h3>
                            <p className="text-slate-400 text-sm md:text-base truncate">
                                Start a project conversation instantly.
                            </p>
                        </div>
                        <div className="hidden sm:flex size-10 rounded-full border border-slate-700 items-center justify-center text-slate-500 group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </div>
                    </Link>

                    {/* TikTok */}
                    <Link
                        href="https://www.tiktok.com/@malcihuy?_r=1&_t=ZS-93EVYSSxUk3"
                        className="group relative w-full h-28 rounded-2xl glass-panel-dark overflow-hidden flex items-center px-6 md:px-8 gap-6"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center bg-black border border-slate-800 rounded-xl shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform duration-300">
                            <svg
                                className="w-10 h-10 text-white fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.9 6.24-1.72 1.36-4.03 1.86-6.17 1.3-2.7-.71-4.81-3.17-5.11-5.95-.33-3.13 1.57-6.07 4.54-6.9 1.05-.29 2.16-.3 3.24-.04.02 1.35.02 2.7.02 4.05-.2-.05-.42-.08-.63-.07-.9.04-1.75.53-2.2 1.31-.53.94-.3 2.18.52 2.79.88.66 2.16.59 2.94-.21.72-.74 1.11-1.77 1.09-2.81V.02Z"></path>
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">
                                TikTok
                            </h3>
                            <p className="text-slate-400 text-sm md:text-base truncate">
                                Behind the scenes &amp; design tips.
                            </p>
                        </div>
                        <div className="hidden sm:flex size-10 rounded-full border border-slate-700 items-center justify-center text-slate-500 group-hover:bg-pink-500 group-hover:border-pink-500 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </div>
                    </Link>

                    {/* Instagram */}
                    <Link
                        href="https://www.instagram.com/malfz_im/"
                        className="group relative w-full h-28 rounded-2xl glass-panel-dark overflow-hidden flex items-center px-6 md:px-8 gap-6"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center bg-instagram rounded-xl shadow-lg shadow-orange-900/20 group-hover:scale-110 transition-transform duration-300">
                            <svg
                                className="w-10 h-10 text-white fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.03.084c-1.277.06-2.149.264-2.904.556-.78.306-1.441.715-2.102 1.376-.661.661-1.07 1.322-1.376 2.102-.292.755-.496 1.627-.556 2.904-.06 1.276-.073 1.683-.073 4.978 0 3.295.013 3.702.073 4.978.06 1.277.264 2.149.556 2.904.306.78.715 1.441 1.376 2.102.661.661 1.322 1.07 2.102 1.376.755.292 1.627.496 2.904.556 1.276.06 1.683.073 4.978.073 3.295 0 3.702-.013 4.978-.073 1.277-.06 2.149-.264 2.904-.556.78-.306 1.441-.715 2.102-1.376.661-.661 1.07-1.322 1.376-2.102.292-.755.496-1.627.556-2.904.06-1.276.073-1.683.073-4.978 0-3.295-.013-3.702-.073-4.978-.06-1.277-.264-2.149-.556-2.904-.306-.78-.715-1.441-1.376-2.102-.661-.661-1.322-1.07-2.102-1.376-.755-.292-1.627-.496-2.904-.556-1.276-.06-1.683-.073-4.978-.073-3.295 0-3.702.013-4.978.073zm.924 1.88c.682-.03 1.066-.036 3.996-.036 3.013 0 3.315.013 4.022.045 1.15.053 1.942.247 2.656.524.524.202.945.474 1.441.97.497.496.768.917.97 1.441.278.714.472 1.506.524 2.656.033.707.045 1.009.045 4.022 0 3.013-.012 3.315-.044 4.022-.053 1.15-.247 1.942-.524 2.656-.202.524-.474.945-.97 1.441-.496.497-.917.768-1.441.97-.714.278-1.506.472-2.656.524-.707.033-1.009.045-4.022.045-3.013 0-3.315-.012-4.022-.044-1.15-.053-1.942-.247-2.656-.524-.524-.202-.945-.474-1.441-.97-.496-.496-.768-.917-.97-1.441-.278-.714-.472-1.506-.524-2.656-.033-.707-.045-1.009-.045-4.022 0-3.013.012-3.315.044-4.022.053-1.15.247-1.942.524-2.656.202-.524.474-.945.97-1.441.496-.496.917-.768 1.441-.97.714-.278 1.506-.472 2.656-.524zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                                Instagram
                            </h3>
                            <p className="text-slate-400 text-sm md:text-base truncate">
                                Visual diary &amp; lifestyle.
                            </p>
                        </div>
                        <div className="hidden sm:flex size-10 rounded-full border border-slate-700 items-center justify-center text-slate-500 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </div>
                    </Link>

                    {/* X */}
                    <Link
                        href="https://x.com/DeayUsts92426"
                        className="group relative w-full h-28 rounded-2xl glass-panel-dark overflow-hidden flex items-center px-6 md:px-8 gap-6"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center bg-black border border-slate-700 rounded-xl shadow-lg shadow-slate-900/40 group-hover:scale-110 transition-transform duration-300">
                            <svg
                                className="w-9 h-9 text-white fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-slate-300 transition-colors">
                                X
                            </h3>
                            <p className="text-slate-400 text-sm md:text-base truncate">
                                Thoughts on design &amp; tech.
                            </p>
                        </div>
                        <div className="hidden sm:flex size-10 rounded-full border border-slate-700 items-center justify-center text-slate-500 group-hover:bg-white group-hover:border-white group-hover:text-black transition-all">
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
