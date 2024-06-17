/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/contracts.json`.
 */
export type Contracts = {
  address: 'D1LVs5srvVZ86WJvS3Ujj1QLyk75YS19P6QD63rdiD36';
  metadata: {
    name: 'contracts';
    version: '0.1.0';
    spec: '0.1.0';
    description: 'Created with Anchor';
  };
  instructions: [
    {
      name: 'buy';
      discriminator: [102, 6, 61, 18, 1, 218, 235, 234];
      accounts: [
        {
          name: 'aprList';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 112, 114];
              }
            ];
          };
        },
        {
          name: 'interest';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'buyer';
              },
              {
                kind: 'const';
                value: [105, 110, 116, 101, 114, 101, 115, 116];
              }
            ];
          };
        },
        {
          name: 'buyer';
          writable: true;
          signer: true;
        },
        {
          name: 'mint';
          writable: true;
        },
        {
          name: 'stableMint';
        },
        {
          name: 'tokenAccount';
          writable: true;
        },
        {
          name: 'stableAccount';
          writable: true;
        },
        {
          name: 'mintAuthority';
          writable: true;
        },
        {
          name: 'treasury';
          writable: true;
        },
        {
          name: 'vaultAccount';
          writable: true;
        },
        {
          name: 'treasuryAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
          docs: ['Solana ecosystem accounts'];
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'clock';
          address: 'SysvarC1ock11111111111111111111111111111111';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        }
      ];
    },
    {
      name: 'initialize';
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
      accounts: [
        {
          name: 'aprList';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 112, 114];
              }
            ];
          };
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'metadataAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [109, 101, 116, 97, 100, 97, 116, 97];
              },
              {
                kind: 'account';
                path: 'tokenMetadataProgram';
              },
              {
                kind: 'account';
                path: 'mintAccount';
              }
            ];
            program: {
              kind: 'account';
              path: 'tokenMetadataProgram';
            };
          };
        },
        {
          name: 'mintAccount';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenMetadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'clock';
          address: 'SysvarC1ock11111111111111111111111111111111';
        }
      ];
      args: [
        {
          name: 'tokenName';
          type: 'string';
        },
        {
          name: 'tokenSymbol';
          type: 'string';
        },
        {
          name: 'tokenUri';
          type: 'string';
        }
      ];
    },
    {
      name: 'sell';
      discriminator: [51, 230, 133, 164, 1, 127, 131, 173];
      accounts: [
        {
          name: 'aprList';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 112, 114];
              }
            ];
          };
        },
        {
          name: 'interest';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'seller';
              },
              {
                kind: 'const';
                value: [105, 110, 116, 101, 114, 101, 115, 116];
              }
            ];
          };
        },
        {
          name: 'seller';
          writable: true;
          signer: true;
        },
        {
          name: 'mint';
          writable: true;
        },
        {
          name: 'stableMint';
        },
        {
          name: 'tokenAccount';
          writable: true;
        },
        {
          name: 'stableAccount';
          writable: true;
        },
        {
          name: 'mintAuthority';
          writable: true;
        },
        {
          name: 'vaultAuthority';
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'mint';
              },
              {
                kind: 'account';
                path: 'stableMint';
              },
              {
                kind: 'const';
                value: [97, 117, 116, 104, 111, 114, 105, 116, 121];
              }
            ];
          };
        },
        {
          name: 'vaultTokenAccount';
          writable: true;
        },
        {
          name: 'vaultAccount';
          writable: true;
        },
        {
          name: 'tokenProgram';
          docs: ['Solana ecosystem accounts'];
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'clock';
          address: 'SysvarC1ock11111111111111111111111111111111';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        }
      ];
    },
    {
      name: 'updateApr';
      discriminator: [176, 26, 214, 172, 136, 120, 77, 215];
      accounts: [
        {
          name: 'aprList';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 112, 114];
              }
            ];
          };
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'clock';
          address: 'SysvarC1ock11111111111111111111111111111111';
        }
      ];
      args: [
        {
          name: 'newApr';
          type: 'u8';
        }
      ];
    },
    {
      name: 'withdrawInterest';
      discriminator: [109, 104, 246, 175, 226, 8, 237, 250];
      accounts: [
        {
          name: 'aprList';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 112, 114];
              }
            ];
          };
        },
        {
          name: 'interest';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'buyer';
              },
              {
                kind: 'const';
                value: [105, 110, 116, 101, 114, 101, 115, 116];
              }
            ];
          };
        },
        {
          name: 'buyer';
          writable: true;
          signer: true;
        },
        {
          name: 'mint';
          writable: true;
        },
        {
          name: 'tokenAccount';
          writable: true;
        },
        {
          name: 'mintAuthority';
          writable: true;
        },
        {
          name: 'tokenProgram';
          docs: ['Solana ecosystem accounts'];
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'clock';
          address: 'SysvarC1ock11111111111111111111111111111111';
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: 'aprList';
      discriminator: [148, 253, 8, 42, 205, 254, 101, 233];
    },
    {
      name: 'interest';
      discriminator: [209, 34, 91, 96, 198, 99, 167, 92];
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'insufficient';
      msg: 'Insufficient stable coins!';
    },
    {
      code: 6001;
      name: 'invalidOwner';
      msg: 'invalidOwner';
    },
    {
      code: 6002;
      name: 'invalidinterest';
      msg: 'Nothing interest';
    }
  ];
  types: [
    {
      name: 'apr';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'apr';
            type: 'u8';
          },
          {
            name: 'updatedDate';
            type: 'i64';
          }
        ];
      };
    },
    {
      name: 'aprList';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: 'pubkey';
          },
          {
            name: 'aprs';
            type: {
              vec: {
                defined: {
                  name: 'apr';
                };
              };
            };
          }
        ];
      };
    },
    {
      name: 'interest';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'withdrawableAmount';
            type: 'u64';
          },
          {
            name: 'lastupdatedDate';
            type: 'i64';
          }
        ];
      };
    }
  ];
  constants: [
    {
      name: 'aprSeed';
      type: 'bytes';
      value: '[97, 112, 114]';
    },
    {
      name: 'defaultApr';
      type: 'u8';
      value: '100';
    }
  ];
};

export const IDL: Contracts = {
  address: 'D1LVs5srvVZ86WJvS3Ujj1QLyk75YS19P6QD63rdiD36',
  metadata: {
    name: 'contracts',
    version: '0.1.0',
    spec: '0.1.0',
    description: 'Created with Anchor',
  },
  instructions: [
    {
      name: 'buy',
      discriminator: [102, 6, 61, 18, 1, 218, 235, 234],
      accounts: [
        {
          name: 'aprList',
          pda: {
            seeds: [
              {
                kind: 'const',
                value: [97, 112, 114],
              },
            ],
          },
        },
        {
          name: 'interest',
          writable: true,
          pda: {
            seeds: [
              {
                kind: 'account',
                path: 'buyer',
              },
              {
                kind: 'const',
                value: [105, 110, 116, 101, 114, 101, 115, 116],
              },
            ],
          },
        },
        {
          name: 'buyer',
          writable: true,
          signer: true,
        },
        {
          name: 'mint',
          writable: true,
        },
        {
          name: 'stableMint',
        },
        {
          name: 'tokenAccount',
          writable: true,
        },
        {
          name: 'stableAccount',
          writable: true,
        },
        {
          name: 'mintAuthority',
          writable: true,
        },
        {
          name: 'treasury',
          writable: true,
        },
        {
          name: 'vaultAccount',
          writable: true,
        },
        {
          name: 'treasuryAccount',
          writable: true,
        },
        {
          name: 'tokenProgram',
          docs: ['Solana ecosystem accounts'],
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
        },
        {
          name: 'associatedTokenProgram',
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
        },
        {
          name: 'systemProgram',
          address: '11111111111111111111111111111111',
        },
        {
          name: 'clock',
          address: 'SysvarC1ock11111111111111111111111111111111',
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'initialize',
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
      accounts: [
        {
          name: 'aprList',
          writable: true,
          pda: {
            seeds: [
              {
                kind: 'const',
                value: [97, 112, 114],
              },
            ],
          },
        },
        {
          name: 'payer',
          writable: true,
          signer: true,
        },
        {
          name: 'metadataAccount',
          writable: true,
          pda: {
            seeds: [
              {
                kind: 'const',
                value: [109, 101, 116, 97, 100, 97, 116, 97],
              },
              {
                kind: 'account',
                path: 'tokenMetadataProgram',
              },
              {
                kind: 'account',
                path: 'mintAccount',
              },
            ],
            program: {
              kind: 'account',
              path: 'tokenMetadataProgram',
            },
          },
        },
        {
          name: 'mintAccount',
          writable: true,
          signer: true,
        },
        {
          name: 'tokenMetadataProgram',
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
        },
        {
          name: 'tokenProgram',
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
        },
        {
          name: 'systemProgram',
          address: '11111111111111111111111111111111',
        },
        {
          name: 'rent',
          address: 'SysvarRent111111111111111111111111111111111',
        },
        {
          name: 'clock',
          address: 'SysvarC1ock11111111111111111111111111111111',
        },
      ],
      args: [
        {
          name: 'tokenName',
          type: 'string',
        },
        {
          name: 'tokenSymbol',
          type: 'string',
        },
        {
          name: 'tokenUri',
          type: 'string',
        },
      ],
    },
    {
      name: 'sell',
      discriminator: [51, 230, 133, 164, 1, 127, 131, 173],
      accounts: [
        {
          name: 'aprList',
          pda: {
            seeds: [
              {
                kind: 'const',
                value: [97, 112, 114],
              },
            ],
          },
        },
        {
          name: 'interest',
          writable: true,
          pda: {
            seeds: [
              {
                kind: 'account',
                path: 'seller',
              },
              {
                kind: 'const',
                value: [105, 110, 116, 101, 114, 101, 115, 116],
              },
            ],
          },
        },
        {
          name: 'seller',
          writable: true,
          signer: true,
        },
        {
          name: 'mint',
          writable: true,
        },
        {
          name: 'stableMint',
        },
        {
          name: 'tokenAccount',
          writable: true,
        },
        {
          name: 'stableAccount',
          writable: true,
        },
        {
          name: 'mintAuthority',
          writable: true,
        },
        {
          name: 'vaultAuthority',
          pda: {
            seeds: [
              {
                kind: 'account',
                path: 'mint',
              },
              {
                kind: 'account',
                path: 'stableMint',
              },
              {
                kind: 'const',
                value: [97, 117, 116, 104, 111, 114, 105, 116, 121],
              },
            ],
          },
        },
        {
          name: 'vaultTokenAccount',
          writable: true,
        },
        {
          name: 'vaultAccount',
          writable: true,
        },
        {
          name: 'tokenProgram',
          docs: ['Solana ecosystem accounts'],
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
        },
        {
          name: 'associatedTokenProgram',
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
        },
        {
          name: 'systemProgram',
          address: '11111111111111111111111111111111',
        },
        {
          name: 'clock',
          address: 'SysvarC1ock11111111111111111111111111111111',
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'updateApr',
      discriminator: [176, 26, 214, 172, 136, 120, 77, 215],
      accounts: [
        {
          name: 'aprList',
          writable: true,
          pda: {
            seeds: [
              {
                kind: 'const',
                value: [97, 112, 114],
              },
            ],
          },
        },
        {
          name: 'payer',
          writable: true,
          signer: true,
        },
        {
          name: 'systemProgram',
          address: '11111111111111111111111111111111',
        },
        {
          name: 'rent',
          address: 'SysvarRent111111111111111111111111111111111',
        },
        {
          name: 'clock',
          address: 'SysvarC1ock11111111111111111111111111111111',
        },
      ],
      args: [
        {
          name: 'newApr',
          type: 'u8',
        },
      ],
    },
    {
      name: 'withdrawInterest',
      discriminator: [109, 104, 246, 175, 226, 8, 237, 250],
      accounts: [
        {
          name: 'aprList',
          pda: {
            seeds: [
              {
                kind: 'const',
                value: [97, 112, 114],
              },
            ],
          },
        },
        {
          name: 'interest',
          writable: true,
          pda: {
            seeds: [
              {
                kind: 'account',
                path: 'buyer',
              },
              {
                kind: 'const',
                value: [105, 110, 116, 101, 114, 101, 115, 116],
              },
            ],
          },
        },
        {
          name: 'buyer',
          writable: true,
          signer: true,
        },
        {
          name: 'mint',
          writable: true,
        },
        {
          name: 'tokenAccount',
          writable: true,
        },
        {
          name: 'mintAuthority',
          writable: true,
        },
        {
          name: 'tokenProgram',
          docs: ['Solana ecosystem accounts'],
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
        },
        {
          name: 'associatedTokenProgram',
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
        },
        {
          name: 'systemProgram',
          address: '11111111111111111111111111111111',
        },
        {
          name: 'clock',
          address: 'SysvarC1ock11111111111111111111111111111111',
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: 'aprList',
      discriminator: [148, 253, 8, 42, 205, 254, 101, 233],
    },
    {
      name: 'interest',
      discriminator: [209, 34, 91, 96, 198, 99, 167, 92],
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'insufficient',
      msg: 'Insufficient stable coins!',
    },
    {
      code: 6001,
      name: 'invalidOwner',
      msg: 'invalidOwner',
    },
    {
      code: 6002,
      name: 'invalidinterest',
      msg: 'Nothing interest',
    },
  ],
  types: [
    {
      name: 'apr',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'apr',
            type: 'u8',
          },
          {
            name: 'updatedDate',
            type: 'i64',
          },
        ],
      },
    },
    {
      name: 'aprList',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'pubkey',
          },
          {
            name: 'aprs',
            type: {
              vec: {
                defined: {
                  name: 'apr',
                },
              },
            },
          },
        ],
      },
    },
    {
      name: 'interest',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'withdrawableAmount',
            type: 'u64',
          },
          {
            name: 'lastupdatedDate',
            type: 'i64',
          },
        ],
      },
    },
  ],
  constants: [
    {
      name: 'aprSeed',
      type: 'bytes',
      value: '[97, 112, 114]',
    },
    {
      name: 'defaultApr',
      type: 'u8',
      value: '100',
    },
  ],
};
