const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

console.log(path.resolve(__dirname,'./bounds'));
module.exports = {
  entry:'./scr/index',
  output:{
    filename:'bundle_[hash:8].js',
    path: path.resolve(__dirname,'./build'),
    clean:true
  },
  mode:'development',// production
  resolve:{
    extensions:['.js','.vue','.json','.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'scr'),
    },
  },
  module:{
    rules:[{
      // 告诉webpack匹配什么文件
      test:/\.css$/,
      use:[{
        loader:'style-loader'
      },{
        loader:'css-loader'
      }]
    },{
      test:/\.less$/,
      use:['style-loader',
        {
          loader:'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
          }
        }
    ,'postcss-loader',
    //   {
    //     loader:'postcss-loader',
    //     options:{
    //       postcssOptions:{
    //         plugins:['autoprefixer']
    //       }
    //     }
    //  },
      'less-loader']
    },{
      test:/\.(png|jpe?g|svg|gif)$/,
      type:'asset',
      parser:{
        dataUrlCondition:{
          maxSize:10 * 1024
        }
      },
      generator:{
        // 占位符
        // hash , name , ext ; hash:数字 表示取hash的前几位数字
        filename:'img/[hash:8]_[name][ext]'
      }
    },{
      test:/\.js$/,
      use:['babel-loader']
    }]
  },
  plugins:[
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({title:'webpack深入学习',template:'./index.html'}),
  ],
  devServer:{
    // host:'0.0.0.0',
    hot:true,
    open:true,
    port:3000
  }
};