{
  "target": [
    "browserslist"
  ],
  "mode": "development",
  "bail": false,
  "devtool": "cheap-module-source-map",
  "entry": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\src\\index.js",
  "output": {
    "path": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\build",
    "pathinfo": true,
    "filename": "static/js/bundle.js",
    "chunkFilename": "static/js/[name].chunk.js",
    "assetModuleFilename": "static/media/[name].[hash][ext]",
    "publicPath": "/",
    "library": "react-client",
    "libraryTarget": "umd"
  },
  "cache": {
    "type": "filesystem",
    "version": "a9a48b11ebc63aabe47e83de218f5238",
    "cacheDirectory": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\.cache",
    "store": "pack",
    "buildDependencies": {
      "defaultWebpack": [
        "webpack/lib/"
      ],
      "config": [
        "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\react-scripts\\config\\webpack.config.js"
      ],
      "tsconfig": []
    }
  },
  "infrastructureLogging": {
    "level": "none"
  },
  "optimization": {
    "minimize": false,
    "minimizer": [
      {
        "options": {
          "test": {},
          "extractComments": true,
          "parallel": true,
          "minimizer": {
            "options": {
              "parse": {
                "ecma": 8
              },
              "compress": {
                "ecma": 5,
                "warnings": false,
                "comparisons": false,
                "inline": 2
              },
              "mangle": {
                "safari10": true
              },
              "keep_classnames": false,
              "keep_fnames": false,
              "output": {
                "ecma": 5,
                "comments": false,
                "ascii_only": true
              }
            }
          }
        }
      },
      {
        "options": {
          "test": {},
          "parallel": true,
          "minimizer": {
            "options": {}
          }
        }
      }
    ]
  },
  "resolve": {
    "modules": [
      "node_modules",
      "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules"
    ],
    "extensions": [
      ".web.mjs",
      ".mjs",
      ".web.js",
      ".js",
      ".json",
      ".web.jsx",
      ".jsx"
    ],
    "alias": {
      "react-native": "react-native-web",
      "@": "E:\\project\\node\\interview-assignments\\fullstack\\src"
    },
    "plugins": [
      {
        "appSrcs": [
          "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\src"
        ],
        "allowedFiles": {},
        "allowedPaths": [
          "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\react-refresh",
          "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\@pmmmwh\\react-refresh-webpack-plugin\\lib",
          "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\babel-preset-react-app",
          "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\@babel\\runtime\\helpers\\esm",
          "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\@babel\\runtime\\regenerator"
        ]
      }
    ]
  },
  "module": {
    "strictExportPresence": true,
    "rules": [
      {
        "enforce": "pre",
        "exclude": {},
        "test": {},
        "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\source-map-loader\\dist\\cjs.js"
      },
      {
        "oneOf": [
          {
            "test": {},
            "use": [
              {
                "loader": "url-loader",
                "options": {
                  "limit": 1000,
                  "name": "assets/[name].[ext]"
                }
              }
            ]
          },
          {
            "test": [
              {}
            ],
            "type": "asset",
            "mimetype": "image/avif",
            "parser": {
              "dataUrlCondition": {
                "maxSize": 10000
              }
            }
          },
          {
            "test": [
              {},
              {},
              {},
              {}
            ],
            "type": "asset",
            "parser": {
              "dataUrlCondition": {
                "maxSize": 10000
              }
            }
          },
          {
            "test": {},
            "use": [
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\@svgr\\webpack\\lib\\index.js",
                "options": {
                  "prettier": false,
                  "svgo": false,
                  "svgoConfig": {
                    "plugins": [
                      {
                        "removeViewBox": false
                      }
                    ]
                  },
                  "titleProp": true,
                  "ref": true
                }
              },
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\file-loader\\dist\\cjs.js",
                "options": {
                  "name": "static/media/[name].[hash].[ext]"
                }
              }
            ],
            "issuer": {
              "and": [
                {}
              ]
            }
          },
          {
            "test": {},
            "include": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\src",
            "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\babel-loader\\lib\\index.js",
            "options": {
              "customize": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\babel-preset-react-app\\webpack-overrides.js",
              "presets": [
                [
                  "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\babel-preset-react-app\\index.js",
                  {
                    "runtime": "automatic"
                  }
                ]
              ],
              "babelrc": false,
              "configFile": false,
              "cacheIdentifier": "development:babel-plugin-named-asset-import@0.3.8:babel-preset-react-app@10.0.1:react-dev-utils@12.0.0:react-scripts@5.0.0",
              "plugins": [
                "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\react-refresh\\babel.js",
                [
                  "import",
                  {
                    "libraryName": "antd",
                    "style": "css"
                  },
                  "fix-import-imports"
                ]
              ],
              "cacheDirectory": true,
              "cacheCompression": false,
              "compact": false
            }
          },
          {
            "test": {},
            "exclude": {},
            "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\babel-loader\\lib\\index.js",
            "options": {
              "babelrc": false,
              "configFile": false,
              "compact": false,
              "presets": [
                [
                  "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\babel-preset-react-app\\dependencies.js",
                  {
                    "helpers": true
                  }
                ]
              ],
              "cacheDirectory": true,
              "cacheCompression": false,
              "cacheIdentifier": "development:babel-plugin-named-asset-import@0.3.8:babel-preset-react-app@10.0.1:react-dev-utils@12.0.0:react-scripts@5.0.0",
              "sourceMaps": true,
              "inputSourceMap": true
            }
          },
          {
            "test": {},
            "exclude": {},
            "use": [
              "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\style-loader\\dist\\cjs.js",
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": true,
                  "modules": {
                    "mode": "icss"
                  }
                }
              },
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\postcss-loader\\dist\\cjs.js",
                "options": {
                  "postcssOptions": {
                    "ident": "postcss",
                    "config": false,
                    "plugins": [
                      "postcss-flexbugs-fixes",
                      [
                        "postcss-preset-env",
                        {
                          "autoprefixer": {
                            "flexbox": "no-2009"
                          },
                          "stage": 3
                        }
                      ],
                      "postcss-normalize"
                    ]
                  },
                  "sourceMap": true
                }
              }
            ],
            "sideEffects": true
          },
          {
            "test": {},
            "use": [
              "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\style-loader\\dist\\cjs.js",
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": true,
                  "modules": {
                    "mode": "local"
                  }
                }
              },
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\postcss-loader\\dist\\cjs.js",
                "options": {
                  "postcssOptions": {
                    "ident": "postcss",
                    "config": false,
                    "plugins": [
                      "postcss-flexbugs-fixes",
                      [
                        "postcss-preset-env",
                        {
                          "autoprefixer": {
                            "flexbox": "no-2009"
                          },
                          "stage": 3
                        }
                      ],
                      "postcss-normalize"
                    ]
                  },
                  "sourceMap": true
                }
              }
            ]
          },
          {
            "test": {},
            "exclude": {},
            "use": [
              "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\style-loader\\dist\\cjs.js",
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "importLoaders": 3,
                  "sourceMap": true,
                  "modules": {
                    "mode": "icss"
                  }
                }
              },
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\postcss-loader\\dist\\cjs.js",
                "options": {
                  "postcssOptions": {
                    "ident": "postcss",
                    "config": false,
                    "plugins": [
                      "postcss-flexbugs-fixes",
                      [
                        "postcss-preset-env",
                        {
                          "autoprefixer": {
                            "flexbox": "no-2009"
                          },
                          "stage": 3
                        }
                      ],
                      "postcss-normalize"
                    ]
                  },
                  "sourceMap": true
                }
              },
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\resolve-url-loader\\index.js",
                "options": {
                  "sourceMap": true,
                  "root": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\src"
                }
              },
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\sass-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": true
                }
              }
            ],
            "sideEffects": true
          },
          {
            "test": {},
            "use": [
              "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\style-loader\\dist\\cjs.js",
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "importLoaders": 3,
                  "sourceMap": true,
                  "modules": {
                    "mode": "local"
                  }
                }
              },
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\postcss-loader\\dist\\cjs.js",
                "options": {
                  "postcssOptions": {
                    "ident": "postcss",
                    "config": false,
                    "plugins": [
                      "postcss-flexbugs-fixes",
                      [
                        "postcss-preset-env",
                        {
                          "autoprefixer": {
                            "flexbox": "no-2009"
                          },
                          "stage": 3
                        }
                      ],
                      "postcss-normalize"
                    ]
                  },
                  "sourceMap": true
                }
              },
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\resolve-url-loader\\index.js",
                "options": {
                  "sourceMap": true,
                  "root": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\src"
                }
              },
              {
                "loader": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\sass-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": true
                }
              }
            ]
          },
          {
            "exclude": [
              {},
              {},
              {},
              {}
            ],
            "type": "asset/resource"
          }
        ]
      }
    ]
  },
  "plugins": [
    {
      "userOptions": {
        "inject": true,
        "template": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\public\\index.html"
      },
      "version": 5
    },
    {
      "replacements": {
        "NODE_ENV": "development",
        "PUBLIC_URL": "",
        "FAST_REFRESH": true,
        "REACT_APP_API": "http://localhost:8001",
        "REACT_APP_ENV": "development",
        "REACT_APP_SITENAME": "FULLSTACK - CASE"
      }
    },
    {
      "appPath": "E:\\project\\node\\interview-assignments\\fullstack\\client-react"
    },
    {
      "definitions": {
        "process.env": {
          "NODE_ENV": "\"development\"",
          "PUBLIC_URL": "\"\"",
          "FAST_REFRESH": "true",
          "REACT_APP_API": "\"http://localhost:8001\"",
          "REACT_APP_ENV": "\"development\"",
          "REACT_APP_SITENAME": "\"FULLSTACK - CASE\""
        }
      }
    },
    {
      "options": {
        "overlay": false,
        "exclude": {},
        "include": {}
      }
    },
    {
      "options": {},
      "logger": {},
      "pathCache": {},
      "fsOperations": 0,
      "primed": false
    },
    {
      "options": {
        "assetHookStage": null,
        "basePath": "",
        "fileName": "asset-manifest.json",
        "filter": null,
        "map": null,
        "publicPath": "/",
        "removeKeyHash": {},
        "sort": null,
        "transformExtensions": {},
        "useEntryKeys": false,
        "useLegacyEmit": false,
        "writeToFileEmit": false
      }
    },
    {
      "options": {
        "resourceRegExp": {},
        "contextRegExp": {}
      }
    },
    {
      "key": "ESLintWebpackPlugin",
      "options": {
        "extensions": [
          "js",
          "mjs",
          "jsx",
          "ts",
          "tsx"
        ],
        "emitError": true,
        "emitWarning": true,
        "failOnError": true,
        "formatter": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\react-dev-utils\\eslintFormatter.js",
        "eslintPath": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\eslint\\lib\\api.js",
        "context": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\src",
        "cache": true,
        "cacheLocation": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\.cache\\.eslintcache",
        "cwd": "E:\\project\\node\\interview-assignments\\fullstack\\client-react",
        "resolvePluginsRelativeTo": "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\react-scripts\\config",
        "baseConfig": {
          "extends": [
            "E:\\project\\node\\interview-assignments\\fullstack\\client-react\\node_modules\\eslint-config-react-app\\base.js"
          ],
          "rules": {}
        }
      }
    }
  ],
  "performance": false
}