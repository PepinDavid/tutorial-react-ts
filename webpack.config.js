const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx', // Fichier d'entrée principal
    target: "web",
    output: {
        path: path.resolve(__dirname, 'dist'),  // Dossier où Webpack va stocker le bundle
        filename: 'bundle.js',                  // Nom du fichier de sortie
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],  // Extensions des fichiers que Webpack doit gérer
        alias: {
            Components: path.dirname(__dirname, 'src/components/*/**'),
            Pages: path.dirname(__dirname, 'src/pages/*/**'),
            Containers: path.dirname(__dirname, 'src/containers/*/**'),
        },
    },
    module: {
        rules: [
        {
            test: /\.(ts|tsx)$/,     // Transpiler les fichiers TypeScript
            exclude: /node_modules/,
            use: 'babel-loader',     // Utilise Babel pour la transpilation
        },
        {
            test: /\.css$/,          // Gérer les fichiers CSS
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
            ],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,  // Gérer les fichiers d'images
            use: [
            {
                loader: 'file-loader',
                options: {
                name: '[path][name].[ext]',
                },
            },
            ],
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Le fichier HTML source
            filename: 'index.html' // Nom du fichier généré
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',  // Extract le CSS dans des fichiers séparés
            chunkFilename: '[id].css',
        }),
    ],
    devtool: 'source-map',  // Générer des sourcemaps pour faciliter le débogage
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    mode: 'development',    // Définit le mode de Webpack
};
