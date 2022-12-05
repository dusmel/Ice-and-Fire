function cov_2musqyhnx() {
  var path = "/Users/hadad/Desktop/melliom/gigs/zatec/ice-and-fire/instrumented/cypress/support/commands.ts";
  var hash = "95aedaeb4b2d09566b2b5b3291e054cca8b42ad8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/hadad/Desktop/melliom/gigs/zatec/ice-and-fire/instrumented/cypress/support/commands.ts",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 13
        },
        end: {
          line: 2,
          column: 95
        }
      },
      "1": {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 3,
          column: 55
        }
      },
      "2": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
          column: 44
        }
      },
      "3": {
        start: {
          line: 5,
          column: 12
        },
        end: {
          line: 5,
          column: 26
        }
      },
      "4": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "5": {
        start: {
          line: 17,
          column: 17
        },
        end: {
          line: 17,
          column: 50
        }
      },
      "6": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "7": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 34
        }
      },
      "8": {
        start: {
          line: 21,
          column: 23
        },
        end: {
          line: 21,
          column: 37
        }
      },
      "9": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 26,
          column: 6
        }
      },
      "10": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 28
        }
      },
      "11": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 24
        }
      },
      "12": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "cov_5dqz3q8ek",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 22
          }
        },
        loc: {
          start: {
            line: 1,
            column: 25
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 24,
            column: 20
          },
          end: {
            line: 24,
            column: 21
          }
        },
        loc: {
          start: {
            line: 24,
            column: 32
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 24
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 17,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 17,
            column: 28
          }
        }, {
          start: {
            line: 17,
            column: 33
          },
          end: {
            line: 17,
            column: 49
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        }, {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        }],
        line: 18
      },
      "2": {
        loc: {
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 18,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 18,
            column: 21
          }
        }, {
          start: {
            line: 18,
            column: 25
          },
          end: {
            line: 18,
            column: 53
          }
        }],
        line: 18
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      names: [],
      sources: ["commands.ts"],
      sourcesContent: ["/// <reference types=\"cypress\" />\n// ***********************************************\n// This example commands.ts shows you how to\n// create various custom commands and overwrite\n// existing commands.\n//\n// For more comprehensive examples of custom\n// commands please read more here:\n// https://on.cypress.io/custom-commands\n// ***********************************************\n//\n//\n// -- This is a parent command --\n// Cypress.Commands.add('login', (email, password) => { ... })\n//\n//\n// -- This is a child command --\n// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })\n//\n//\n// -- This is a dual command --\n// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })\n//\n//\n// -- This will overwrite an existing command --\n// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })\n//\n// declare global {\n//   namespace Cypress {\n//     interface Chainable {\n//       login(email: string, password: string): Chainable<void>\n//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>\n//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>\n//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>\n//     }\n//   }\n// }\n\nexport {}"],
      mappings: ";;;;;;;;;;;;;;;;;;;;;;IAeY;IAAA;MAAA;IAAA;EAAA;EAAA;AAAA;AAAA;AAfZ;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "95aedaeb4b2d09566b2b5b3291e054cca8b42ad8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2musqyhnx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2musqyhnx();
function cov_5dqz3q8ek() {
  cov_2musqyhnx().f[0]++;
  var path = (cov_2musqyhnx().s[0]++, "/Users/hadad/Desktop/melliom/gigs/zatec/ice-and-fire/cypress/support/commands.ts");
  var hash = (cov_2musqyhnx().s[1]++, "9503830685ed79e744d7f6d9192d92e622af4205");
  var global = (cov_2musqyhnx().s[2]++, new Function("return this")());
  var gcv = (cov_2musqyhnx().s[3]++, "__coverage__");
  var coverageData = (cov_2musqyhnx().s[4]++, {
    path: "/Users/hadad/Desktop/melliom/gigs/zatec/ice-and-fire/cypress/support/commands.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9503830685ed79e744d7f6d9192d92e622af4205"
  });
  var coverage = (cov_2musqyhnx().s[5]++, (cov_2musqyhnx().b[0][0]++, global[gcv]) || (cov_2musqyhnx().b[0][1]++, global[gcv] = {}));
  cov_2musqyhnx().s[6]++;
  if ((cov_2musqyhnx().b[2][0]++, !coverage[path]) || (cov_2musqyhnx().b[2][1]++, coverage[path].hash !== hash)) {
    cov_2musqyhnx().b[1][0]++;
    cov_2musqyhnx().s[7]++;
    coverage[path] = coverageData;
  } else {
    cov_2musqyhnx().b[1][1]++;
  }
  var actualCoverage = (cov_2musqyhnx().s[8]++, coverage[path]);
  {
    cov_2musqyhnx().s[9]++;
    // @ts-ignore
    cov_5dqz3q8ek = function () {
      cov_2musqyhnx().f[1]++;
      cov_2musqyhnx().s[10]++;
      return actualCoverage;
    };
  }
  cov_2musqyhnx().s[11]++;
  return actualCoverage;
}
cov_2musqyhnx().s[12]++;
cov_5dqz3q8ek();
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

export {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiY29tbWFuZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgY29tbWFuZHMudHMgc2hvd3MgeW91IGhvdyB0b1xuLy8gY3JlYXRlIHZhcmlvdXMgY3VzdG9tIGNvbW1hbmRzIGFuZCBvdmVyd3JpdGVcbi8vIGV4aXN0aW5nIGNvbW1hbmRzLlxuLy9cbi8vIEZvciBtb3JlIGNvbXByZWhlbnNpdmUgZXhhbXBsZXMgb2YgY3VzdG9tXG4vLyBjb21tYW5kcyBwbGVhc2UgcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY3VzdG9tLWNvbW1hbmRzXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgcGFyZW50IGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKCdsb2dpbicsIChlbWFpbCwgcGFzc3dvcmQpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZHJhZycsIHsgcHJldlN1YmplY3Q6ICdlbGVtZW50J30sIChzdWJqZWN0LCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgZHVhbCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZGlzbWlzcycsIHsgcHJldlN1YmplY3Q6ICdvcHRpb25hbCd9LCAoc3ViamVjdCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLm92ZXJ3cml0ZSgndmlzaXQnLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgbmFtZXNwYWNlIEN5cHJlc3Mge1xuLy8gICAgIGludGVyZmFjZSBDaGFpbmFibGUge1xuLy8gICAgICAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IENoYWluYWJsZTx2b2lkPlxuLy8gICAgICAgZHJhZyhzdWJqZWN0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFR5cGVPcHRpb25zPik6IENoYWluYWJsZTxFbGVtZW50PlxuLy8gICAgICAgZGlzbWlzcyhzdWJqZWN0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFR5cGVPcHRpb25zPik6IENoYWluYWJsZTxFbGVtZW50PlxuLy8gICAgICAgdmlzaXQob3JpZ2luYWxGbjogQ29tbWFuZE9yaWdpbmFsRm4sIHVybDogc3RyaW5nLCBvcHRpb25zOiBQYXJ0aWFsPFZpc2l0T3B0aW9ucz4pOiBDaGFpbmFibGU8RWxlbWVudD5cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IHt9Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIn0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBQUFBO0FBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJuYW1lcyI6WyJjb3ZfNWRxejNxOGVrIl0sInNvdXJjZXMiOlsiY29tbWFuZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgY29tbWFuZHMudHMgc2hvd3MgeW91IGhvdyB0b1xuLy8gY3JlYXRlIHZhcmlvdXMgY3VzdG9tIGNvbW1hbmRzIGFuZCBvdmVyd3JpdGVcbi8vIGV4aXN0aW5nIGNvbW1hbmRzLlxuLy9cbi8vIEZvciBtb3JlIGNvbXByZWhlbnNpdmUgZXhhbXBsZXMgb2YgY3VzdG9tXG4vLyBjb21tYW5kcyBwbGVhc2UgcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY3VzdG9tLWNvbW1hbmRzXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgcGFyZW50IGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKCdsb2dpbicsIChlbWFpbCwgcGFzc3dvcmQpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZHJhZycsIHsgcHJldlN1YmplY3Q6ICdlbGVtZW50J30sIChzdWJqZWN0LCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgZHVhbCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZGlzbWlzcycsIHsgcHJldlN1YmplY3Q6ICdvcHRpb25hbCd9LCAoc3ViamVjdCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLm92ZXJ3cml0ZSgndmlzaXQnLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgbmFtZXNwYWNlIEN5cHJlc3Mge1xuLy8gICAgIGludGVyZmFjZSBDaGFpbmFibGUge1xuLy8gICAgICAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IENoYWluYWJsZTx2b2lkPlxuLy8gICAgICAgZHJhZyhzdWJqZWN0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFR5cGVPcHRpb25zPik6IENoYWluYWJsZTxFbGVtZW50PlxuLy8gICAgICAgZGlzbWlzcyhzdWJqZWN0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFR5cGVPcHRpb25zPik6IENoYWluYWJsZTxFbGVtZW50PlxuLy8gICAgICAgdmlzaXQob3JpZ2luYWxGbjogQ29tbWFuZE9yaWdpbmFsRm4sIHVybDogc3RyaW5nLCBvcHRpb25zOiBQYXJ0aWFsPFZpc2l0T3B0aW9ucz4pOiBDaGFpbmFibGU8RWxlbWVudD5cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IHt9Il19