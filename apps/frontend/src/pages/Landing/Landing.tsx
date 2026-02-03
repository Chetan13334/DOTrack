const Landing = () => {
  return (
    <div className="dark relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 font-['Space_Grotesk'] selection:bg-primary/30">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Nexus CI/CD</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8 items-center">
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Marketplace</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Docs</a>
            </nav>
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full relative py-20 lg:py-32 overflow-hidden node-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 dark:via-background-dark/50 to-background-light dark:to-background-dark pointer-events-none"></div>
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v2.0 Beta Now Live
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight max-w-[900px]">
              Trustless CI/CD for the <span className="text-primary">Open Source</span> Future
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-[700px] font-normal leading-relaxed">
              Automate your workflows with blockchain-verified approvals and IPFS-stored templates. Secure. Transparent. Immutable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/30">
                Connect Wallet
              </button>
              <button className="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-8 border border-slate-300 dark:border-slate-700 bg-white/5 dark:bg-white/5 backdrop-blur-md text-lg font-bold hover:bg-white/10 transition-colors">
                Explore Marketplace
              </button>
            </div>
            {/* Hero Visual */}
            <div className="mt-16 w-full max-w-[960px] rounded-xl border border-slate-200 dark:border-border-muted overflow-hidden shadow-2xl">
              <div className="bg-slate-100 dark:bg-surface-dark border-b border-slate-200 dark:border-border-muted px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="mx-auto text-[10px] uppercase tracking-widest opacity-50 font-bold">Mainnet Deployment Pipeline</div>
              </div>
              <div className="aspect-video bg-background-dark p-6 font-mono text-sm overflow-hidden flex flex-col gap-2 text-left">
                <div className="flex items-center gap-3 text-emerald-400">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>[SUCCESS] IPFS Hash Resolved: QmXoyp...</span>
                </div>
                <div className="flex items-center gap-3 text-blue-400">
                  <span className="material-symbols-outlined text-sm">shield</span>
                  <span>[VERIFYING] Multi-sig approval from Node Operator...</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="material-symbols-outlined text-sm">hourglass_empty</span>
                  <span>[PENDING] Committing transaction to Ethereum L2...</span>
                </div>
                <div className="mt-4 p-4 rounded bg-white/5 border border-white/10">
                  <p className="text-xs text-slate-400 mb-2">// On-chain Signature Verification</p>
                  <p className="text-primary">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</p>
                  <p className="text-emerald-500 mt-2 font-bold">VERIFIED_IMMUTABLE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="w-full bg-slate-50 dark:bg-stats-dark border-y border-slate-200 dark:border-border-dark py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Active Pipelines</p>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">1,240+</p>
              </div>
              <div className="flex flex-col items-center md:items-start border-l-0 md:border-l border-slate-200 dark:border-slate-800 md:pl-8">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Nodes Online</p>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">850</p>
              </div>
              <div className="flex flex-col items-center md:items-start border-l-0 md:border-l border-slate-200 dark:border-slate-800 md:pl-8">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Deployments</p>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">45.2k</p>
              </div>
              <div className="flex flex-col items-center md:items-start border-l-0 md:border-l border-slate-200 dark:border-slate-800 md:pl-8">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">TVL in Templates</p>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">$2.4M</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem vs Solution Section */}
        <section className="w-full py-24 bg-background-light dark:bg-background-dark">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Traditional vs. Decentralized DevOps</h2>
              <p className="text-slate-500 dark:text-slate-300 max-w-2xl mx-auto">Moving away from centralized bottlenecks towards a transparent and immutable future where code is law.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Problem Side */}
              <div className="flex flex-col gap-6 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark">
                <div className="flex items-center gap-3 text-red-500 mb-4">
                  <span className="material-symbols-outlined">warning</span>
                  <h3 className="text-xl font-bold">The Centralized Risk</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                      <span className="material-symbols-outlined text-sm">lock</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-slate-900 dark:text-white">Opaque Scripts</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 text-left">Traditional CI/CD hidden runners can be compromised without notice.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                      <span className="material-symbols-outlined text-sm">cloud_off</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-slate-900 dark:text-white">Single Point of Failure</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 text-left">Platform outages halt your entire development lifecycle.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                      <span className="material-symbols-outlined text-sm">gavel</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-slate-900 dark:text-white">Centralized Censorship</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 text-left">Service providers can block your builds based on arbitrary policy.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Solution Side */}
              <div className="flex flex-col gap-6 p-8 rounded-2xl border-2 border-primary/50 bg-primary/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-8xl">verified</span>
                </div>
                <div className="flex items-center gap-3 text-primary mb-4">
                  <span className="material-symbols-outlined">task_alt</span>
                  <h3 className="text-xl font-bold">The Nexus Advantage</h3>
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-sm">hub</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-left">Decentralized Verification</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 text-left">Multi-node consensus ensures every build step is audited.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-sm">storage</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-left">Immutable IPFS Storage</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 text-left">Templates are stored on a permanent web with verifiable hashes.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-sm">public</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-left">Censorship Resistant</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 text-left">Distributed runner network ensures your builds never stop.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-24 bg-slate-50 dark:bg-features-dark">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-[600px] text-left">
                <h2 className="text-4xl font-black mb-4">Core Ecosystem Features</h2>
                <p className="text-slate-500 dark:text-slate-400">Everything you need to ship secure, decentralised software at scale without the friction of traditional web2 gates.</p>
              </div>
              <a className="text-primary font-bold flex items-center gap-2 group" href="#">
                Explore full docs
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'shield', title: 'On-Chain Governance', desc: 'Pipeline changes must be approved by DAO participants or automated smart contract conditions.' },
                { icon: 'find_in_page', title: 'Public Audit Trails', desc: 'Every log, build artifact, and deployment signature is stored with a permanent on-chain hash.' },
                { icon: 'shopping_cart', title: 'Template Marketplace', desc: 'Buy and sell pre-verified, secure pipeline components created by the community.' },
                { icon: 'account_balance_wallet', title: 'Gasless Deployments', desc: 'Leverage meta-transactions and L2 rollup technology for fast, low-cost CI/CD execution.' },
                { icon: 'api', title: 'Cross-Chain Ready', desc: 'Deploy to EVM, Solana, Cosmos, and traditional cloud providers using the same trustless core.' },
                { icon: 'token', title: 'Contributor Incentives', desc: 'Earn protocol tokens for running nodes or creating high-quality open source templates.' },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col gap-4 p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark hover:border-primary/50 transition-colors text-left">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="relative w-full rounded-3xl overflow-hidden p-12 lg:p-20 text-center bg-primary flex flex-col items-center gap-8">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white relative z-10">Ready to secure your software?</h2>
              <p className="text-white/80 max-w-xl text-lg relative z-10">Join 1,000+ developers building the next generation of decentralized infrastructure.</p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <button className="bg-white text-primary px-8 h-14 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
                  Connect Wallet
                </button>
                <button className="bg-primary-dark/20 border border-white/30 text-white px-8 h-14 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                  View Marketplace
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-border-dark py-12 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-[300px] text-left">
            <div className="flex items-center gap-3 text-primary">
              <div className="size-6">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Nexus CI/CD</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Empowering open source developers with decentralized, immutable infrastructure for a trustless world.</p>
            <div className="flex gap-4">
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">hub</span></a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">groups</span></a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">article</span></a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 text-left">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold uppercase text-xs tracking-widest text-slate-400">Platform</h4>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">Features</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">Marketplace</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">Node Status</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold uppercase text-xs tracking-widest text-slate-400">Resources</h4>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">Documentation</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">API Ref</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">Whitepaper</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold uppercase text-xs tracking-widest text-slate-400">Legal</h4>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">Privacy</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">Terms</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary" href="#">Security</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-xs">© 2024 Nexus CI/CD Protocol. All rights reserved. Secured by Ethereum.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
