/**
 * KatoSuite Figma Integration Setup & Quick Deploy
 * Prepares environment and executes Figma → Vercel pipeline
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class FigmaIntegrationSetup {
  constructor() {
    this.requiredEnvVars = [
      'FIGMA_ACCESS_TOKEN',
      'VERCEL_TOKEN'
    ];
    
    this.figmaFileKeys = [
      '000ded51-eed8-4601-98dc-e2c5b74e881c',
      '0848ea56-5a69-4b4c-817e-7ddf6cfe967d',
      '0d878d67-4e5c-4bf4-9b4d-5e1cef84162f',
      '15533f58-8574-4e8d-97f2-bb8604a3175b',
      '4976be6f-eff7-448d-91cf-7e97b48ec91c',
      '4b94d02c-75cc-4ad8-87df-d5fcaa838d70',
      '5c2ee41e-7066-4e99-a6c7-e3c4130ca16f',
      '5f5090c0-b175-4302-9831-5759989f9f45',
      '6aba8389-08ca-49aa-b2aa-58aab465b456',
      '7b5e52b8-532a-44fc-9d47-54928dc2bf90',
      '8fa67f8f-3707-485a-924f-6e070b2ff581',
      '8fde13bc-1fed-4f66-9134-dfdf15625361',
      '949574a0-aea8-4389-a8b2-55fb9e206ae9',
      '9fa22ebd-c87a-440c-b133-4596bd415e8b',
      'bc3e4614-374d-42ad-9880-30f367a9ebe2',
      'cc83a274-a18c-45a9-b2dd-be84705a2dba',
      'dc15e94b-415f-45d7-9fd6-2ad6092efc5a',
      'ecdb6b75-def4-4f3b-87ed-3b168cb846b5',
      'fa177703-258e-4393-9d04-4e2bbe3d1e6f'
    ];
  }

  /**
   * Main setup and deployment function
   */
  async run() {
    console.log('🚀 KatoSuite Figma Integration Setup');
    console.log('=====================================');
    
    try {
      // Step 1: Environment check
      this.checkEnvironment();
      
      // Step 2: Validate Figma access
      await this.validateFigmaAccess();
      
      // Step 3: Setup environment files
      this.setupEnvironmentFiles();
      
      // Step 4: Make scripts executable
      this.makeScriptsExecutable();
      
      // Step 5: Run the deployment pipeline
      await this.runDeploymentPipeline();
      
      console.log('\n✅ KatoSuite Figma integration setup complete!');
      console.log('🎉 Ready for production deployment with transparent logos!');
      
    } catch (error) {
      console.error('\n❌ Setup failed:', error.message);
      this.printTroubleshootingGuide();
      process.exit(1);
    }
  }

  /**
   * Check environment prerequisites
   */
  checkEnvironment() {
    console.log('\n🔍 Checking environment...');
    
    // Check Node.js
    try {
      const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
      console.log(`✅ Node.js: ${nodeVersion}`);
    } catch (error) {
      throw new Error('Node.js is not installed or not in PATH');
    }
    
    // Check npm
    try {
      const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
      console.log(`✅ npm: ${npmVersion}`);
    } catch (error) {
      throw new Error('npm is not installed or not in PATH');
    }
    
    // Check environment variables
    const missingVars = this.requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.log('\n⚠️ Missing environment variables:');
      missingVars.forEach(varName => {
        console.log(`   - ${varName}`);
      });
      
      this.printEnvironmentSetupGuide();
      throw new Error('Required environment variables are missing');
    }
    
    console.log('✅ Environment variables configured');
  }

  /**
   * Validate Figma API access
   */
  async validateFigmaAccess() {
    console.log('\n🎨 Validating Figma access...');
    
    const testFileKey = this.figmaFileKeys[0];
    const figmaToken = process.env.FIGMA_ACCESS_TOKEN;
    
    try {
      const { default: fetch } = await import('node-fetch');
      
      const response = await fetch(`https://api.figma.com/v1/files/${testFileKey}`, {
        headers: {
          'X-Figma-Token': figmaToken
        }
      });
      
      if (!response.ok) {
        throw new Error(`Figma API returned ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log(`✅ Figma access validated (File: ${data.name || 'Unknown'})`);
      console.log(`✅ Connected to ${this.figmaFileKeys.length} Figma files`);
      
    } catch (error) {
      throw new Error(`Figma API validation failed: ${error.message}`);
    }
  }

  /**
   * Setup environment files for deployment
   */
  setupEnvironmentFiles() {
    console.log('\n📁 Setting up environment files...');
    
    // Create .env.local if it doesn't exist
    const envLocalPath = '.env.local';
    const envContent = `# KatoSuite Figma Integration
FIGMA_ACCESS_TOKEN=${process.env.FIGMA_ACCESS_TOKEN}
VERCEL_TOKEN=${process.env.VERCEL_TOKEN}
NODE_ENV=production
VITE_APP_TITLE="KatoSuite - AI-Powered Early Childhood Education"
VITE_APP_DESCRIPTION="Professional AI-powered platform for Early Childhood Educators"
`;

    if (!fs.existsSync(envLocalPath)) {
      fs.writeFileSync(envLocalPath, envContent);
      console.log('✅ Created .env.local');
    } else {
      console.log('✅ .env.local already exists');
    }
    
    // Update package.json scripts if needed
    this.updatePackageScripts();
  }

  /**
   * Update package.json with Figma integration scripts
   */
  updatePackageScripts() {
    const packageJsonPath = 'package.json';
    
    if (!fs.existsSync(packageJsonPath)) {
      console.log('⚠️ package.json not found, skipping script updates');
      return;
    }
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Add Figma integration scripts
      packageJson.scripts = packageJson.scripts || {};
      
      const newScripts = {
        'figma:sync': 'npx ts-node scripts/comprehensive-figma-api-integration.ts',
        'figma:deploy': 'bash scripts/figma-vercel-deployment-pipeline.sh',
        'figma:deploy:preview': 'bash scripts/figma-vercel-deployment-pipeline.sh preview',
        'figma:setup': 'node package-scripts/figma-integration-setup.js',
        'deploy:transparent-logo': 'bash deploy-katosuite-transparent-logo.sh'
      };
      
      let updated = false;
      for (const [key, value] of Object.entries(newScripts)) {
        if (!packageJson.scripts[key]) {
          packageJson.scripts[key] = value;
          updated = true;
        }
      }
      
      if (updated) {
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        console.log('✅ Updated package.json scripts');
      } else {
        console.log('✅ Package.json scripts already configured');
      }
      
    } catch (error) {
      console.log('⚠️ Could not update package.json scripts:', error.message);
    }
  }

  /**
   * Make deployment scripts executable
   */
  makeScriptsExecutable() {
    console.log('\n🔧 Making scripts executable...');
    
    const scripts = [
      'scripts/figma-vercel-deployment-pipeline.sh',
      'deploy-katosuite-transparent-logo.sh',
      'quick-deploy-transparent-logo.sh',
      'make-scripts-executable.sh'
    ];
    
    scripts.forEach(script => {
      if (fs.existsSync(script)) {
        try {
          execSync(`chmod +x ${script}`);
          console.log(`✅ Made executable: ${script}`);
        } catch (error) {
          console.log(`⚠️ Could not make executable: ${script}`);
        }
      } else {
        console.log(`⚠️ Script not found: ${script}`);
      }
    });
  }

  /**
   * Run the deployment pipeline
   */
  async runDeploymentPipeline() {
    console.log('\n🚀 Running Figma → Vercel deployment pipeline...');
    
    const deployMode = process.argv.includes('--preview') ? 'preview' : 'production';
    console.log(`Deployment mode: ${deployMode}`);
    
    try {
      // Run the main deployment script
      execSync('bash scripts/figma-vercel-deployment-pipeline.sh ' + deployMode, {
        stdio: 'inherit',
        env: { ...process.env }
      });
      
    } catch (error) {
      throw new Error(`Deployment pipeline failed: ${error.message}`);
    }
  }

  /**
   * Print environment setup guide
   */
  printEnvironmentSetupGuide() {
    console.log('\n📋 Environment Setup Guide:');
    console.log('============================');
    console.log('');
    console.log('1. Get your Figma Access Token:');
    console.log('   - Go to https://www.figma.com/developers/api#access-tokens');
    console.log('   - Generate a new personal access token');
    console.log('   - Copy the token');
    console.log('');
    console.log('2. Get your Vercel Token:');
    console.log('   - Go to https://vercel.com/account/tokens');
    console.log('   - Create a new token');
    console.log('   - Copy the token');
    console.log('');
    console.log('3. Set environment variables:');
    console.log('   export FIGMA_ACCESS_TOKEN="your_figma_token_here"');
    console.log('   export VERCEL_TOKEN="your_vercel_token_here"');
    console.log('');
    console.log('4. Run setup again:');
    console.log('   npm run figma:setup');
  }

  /**
   * Print troubleshooting guide
   */
  printTroubleshootingGuide() {
    console.log('\n🔧 Troubleshooting Guide:');
    console.log('=========================');
    console.log('');
    console.log('Common issues and solutions:');
    console.log('');
    console.log('1. Figma API Error:');
    console.log('   - Verify your FIGMA_ACCESS_TOKEN is correct');
    console.log('   - Check if you have access to the Figma files');
    console.log('   - Ensure token has not expired');
    console.log('');
    console.log('2. Vercel Deployment Error:');
    console.log('   - Verify your VERCEL_TOKEN is correct');
    console.log('   - Run "vercel login" manually');
    console.log('   - Check Vercel dashboard for errors');
    console.log('');
    console.log('3. Build Errors:');
    console.log('   - Run "npm install" to update dependencies');
    console.log('   - Check for TypeScript errors');
    console.log('   - Verify all required files exist');
    console.log('');
    console.log('4. Permission Errors:');
    console.log('   - Run "chmod +x scripts/*.sh"');
    console.log('   - Check file permissions');
    console.log('');
    console.log('For more help, check the deployment logs or contact support.');
  }
}

// Run the setup
if (require.main === module) {
  const setup = new FigmaIntegrationSetup();
  setup.run().catch(error => {
    console.error('Setup failed:', error);
    process.exit(1);
  });
}

module.exports = FigmaIntegrationSetup;