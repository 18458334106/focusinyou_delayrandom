#!/usr/bin/env node

/**
 * Build script for Terser minification
 * Uses Terser programmatically with JavaScript config file
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { minify } from 'terser';

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the input file
const inputPath = path.join(__dirname, 'index.js');
const outputPath = path.join(__dirname, 'index.min.js');

// Import the Terser config (using dynamic import for ESM compatibility)
const loadConfig = async () => {
  try {
    // For ESM, we need to use dynamic import
    const configModule = await import('./terser.config.js');
    return configModule.default;
  } catch (error) {
    console.error('Error loading terser config:', error);
    process.exit(1);
  }
};

// Build function
const build = async () => {
  try {
    console.log('Starting build process...');
    
    // Read input file
    const code = fs.readFileSync(inputPath, 'utf8');
    
    // Load config
    const config = await loadConfig();
    
    // Add module option since our input is an ES module
    config.module = true;
    
    // Minify the code
    const result = await minify(code, config);
    
    if (result.error) {
      throw result.error;
    }
    
    // Write the output file
    fs.writeFileSync(outputPath, result.code, 'utf8');
    
    console.log(`✅ Build completed successfully!`);
    console.log(`📦 Output file: ${outputPath}`);
    console.log(`📊 Original size: ${code.length.toLocaleString()} bytes`);
    console.log(`📉 Minified size: ${result.code.length.toLocaleString()} bytes`);
    console.log(`📈 Compression ratio: ${((1 - result.code.length / code.length) * 100).toFixed(2)}%`);
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
};

// Execute the build
build();
