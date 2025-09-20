
import React from 'react';
import { UploadCloud, Github } from 'lucide-react';

const HowToDeploy: React.FC = () => {

  const deploymentOptions = [
    {
      name: 'Vercel',
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>,
      description: 'A platform for frontend frameworks and static sites, with a focus on performance and ease of use. Their free tier is very generous.',
      steps: [
        'Sign up for a Vercel account using your GitHub, GitLab, or Bitbucket account.',
        'Click the "Add New..." button and select "Project".',
        'Import the Git repository containing your EcoLearner app.',
        'Vercel will automatically detect that it is a Vite project (which is similar to this setup). It should pre-fill the settings correctly.',
        'Verify the build settings: Build Command should be `npm run build` or similar, and the Output Directory should be `dist`.',
        'Click "Deploy". Vercel will build and deploy your site, providing you with a free `.vercel.app` URL.'
      ]
    },
    {
      name: 'Netlify',
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Netlify</title><path d="M12.755 16.588H9.94L12 12.01l-2.12-4.578h2.813L15.06 12l-2.305 4.588zM24 12.13c0-1.39-1.04-2.52-2.33-2.52h-2.1v4.86h2.1c1.29 0 2.33-1.13 2.33-2.34zm-4.43-1.23h-1.03v2.28h1.03c.52 0 .95-.49.95-1.14 0-.65-.43-1.14-.95-1.14zM8.515 9.61H6.25v4.86h2.265c1.47 0 2.65-1.22 2.65-2.72 0-1.49-1.18-2.71-2.65-2.71zm0 3.6h-1.19v-2.3h1.19c.65 0 1.17.58 1.17 1.15 0 .57-.52 1.15-1.17 1.15zM4.94 9.61H.16v7.24h1.17V9.61H4.94z"/></svg>,
      description: 'An all-in-one platform for automating modern web projects. Great for continuous deployment from Git.',
      steps: [
        'Sign up for a Netlify account, typically by linking your GitHub, GitLab, or Bitbucket account.',
        'Click "Add new site" and choose "Import an existing project".',
        'Connect to your Git provider and select the repository for your EcoLearner app.',
        'Netlify will detect your project\'s settings. Confirm them.',
        'Set the Build command to `npm run build` (or equivalent).',
        'Set the Publish directory (or Output directory) to `dist`.',
        'Click "Deploy site". Netlify will build your project and give you a free `.netlify.app` URL.'
      ]
    },
     {
      name: 'GitHub Pages',
      icon: <Github className="w-8 h-8"/>,
      description: 'Host your static site directly from your GitHub repository. Simple, free, and perfect for project sites.',
      steps: [
        'First, ensure your `index.html` loads scripts with relative paths. This setup is already configured correctly.',
        'In your `package.json`, add a "homepage" field: `"homepage": "https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/"`',
        'Build your project locally using `npm run build`. This creates a `dist` folder.',
        'Push the `dist` folder to a new branch, commonly named `gh-pages`. A tool like `gh-pages` can automate this.',
        'In your repository settings on GitHub, go to the "Pages" section.',
        'Under "Build and deployment", select the source as "Deploy from a branch", and choose the `gh-pages` branch with the `/ (root)` folder.',
        'Your site will be deployed at the URL specified in your "homepage" field.'
      ]
    },
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <UploadCloud size={48} className="mx-auto text-primary" />
        <h1 className="text-4xl font-bold text-text-primary mt-4 mb-2">How to Deploy for Free</h1>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          This application is a static web app, meaning it doesn't require a complex server. You can host it for free on numerous platforms that specialize in serving static files. Here are a few popular and easy-to-use options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {deploymentOptions.map((option) => (
          <div key={option.name} className="bg-card rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="p-6 bg-gray-50 flex items-center gap-4">
              <div className="text-primary-dark">{option.icon}</div>
              <div>
                <h2 className="text-2xl font-bold text-text-primary">{option.name}</h2>
                <p className="text-text-secondary">{option.description}</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg text-primary-dark mb-3">Deployment Steps:</h3>
              <ol className="list-decimal list-inside space-y-3 text-text-secondary">
                {option.steps.map((step, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: step.replace(/`([^`]+)`/g, '<code class="bg-gray-200 text-gray-800 font-mono py-0.5 px-1.5 rounded text-sm">$1</code>') }}></li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
       <div className="mt-12 text-center bg-blue-50 border border-blue-200 text-blue-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">General Instructions</h3>
            <p className="max-w-2xl mx-auto">
                No matter which provider you choose, the basic process is the same. You need to tell the service how to build your project and where the final files are located. For this app, the standard command is <code className="bg-blue-200 font-mono py-0.5 px-1.5 rounded text-sm">npm run build</code> and the output directory is <code className="bg-blue-200 font-mono py-0.5 px-1.5 rounded text-sm">dist</code>.
            </p>
        </div>
    </div>
  );
};

export default HowToDeploy;
