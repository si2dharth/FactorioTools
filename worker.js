export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    
    // Serve qualitySimulator.html for root or /qualitySimulator.html
    if (url.pathname === '/' || url.pathname === '/qualitySimulator.html') {
      return env.ASSETS.fetch(request);
    }
    
    // Forward all other requests to Assets
    return env.ASSETS.fetch(request);
  }
};
