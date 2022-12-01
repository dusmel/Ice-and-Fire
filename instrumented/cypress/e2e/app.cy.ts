function cov_2pjbrwsbpl() {
  var path = "/Users/hadad/Desktop/melliom/gigs/zatec/ice-and-fire/cypress/e2e/app.cy.ts";
  var hash = "3c6cd836968966a4a4191717a5faef15b890729e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/hadad/Desktop/melliom/gigs/zatec/ice-and-fire/cypress/e2e/app.cy.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 10,
          column: 2
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 9,
          column: 4
        }
      },
      "2": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 38
        }
      },
      "3": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 22
          },
          end: {
            line: 1,
            column: 23
          }
        },
        loc: {
          start: {
            line: 1,
            column: 28
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 2,
            column: 38
          },
          end: {
            line: 2,
            column: 39
          }
        },
        loc: {
          start: {
            line: 2,
            column: 44
          },
          end: {
            line: 9,
            column: 3
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3c6cd836968966a4a4191717a5faef15b890729e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pjbrwsbpl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2pjbrwsbpl();
cov_2pjbrwsbpl().s[0]++;
describe('Home page', () => {
  cov_2pjbrwsbpl().f[0]++;
  cov_2pjbrwsbpl().s[1]++;
  it('should have a welcome message', () => {
    cov_2pjbrwsbpl().f[1]++;
    cov_2pjbrwsbpl().s[2]++;
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // The new page should contain an h1 with "About page"
    cov_2pjbrwsbpl().s[3]++;
    cy.get('h1').contains('Welcome to Ice and Fire');
  });
});
export {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsImdldCIsImNvbnRhaW5zIl0sInNvdXJjZXMiOlsiYXBwLmN5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRlc2NyaWJlKCdIb21lIHBhZ2UnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgaGF2ZSBhIHdlbGNvbWUgbWVzc2FnZScsICgpID0+IHtcbiAgICAvLyBTdGFydCBmcm9tIHRoZSBpbmRleCBwYWdlXG4gICAgY3kudmlzaXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nKVxuXG5cbiAgICAvLyBUaGUgbmV3IHBhZ2Ugc2hvdWxkIGNvbnRhaW4gYW4gaDEgd2l0aCBcIkFib3V0IHBhZ2VcIlxuICAgIGN5LmdldCgnaDEnKS5jb250YWlucygnV2VsY29tZSB0byBJY2UgYW5kIEZpcmUnKVxuICB9KVxufSlcblxuZXhwb3J0IHt9XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZaQSxRQUFRLENBQUMsV0FBVyxFQUFFLE1BQU07RUFBQTtFQUFBO0VBQzFCQyxFQUFFLENBQUMsK0JBQStCLEVBQUUsTUFBTTtJQUFBO0lBQUE7SUFDeEM7SUFDQUMsRUFBRSxDQUFDQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7O0lBR2xDO0lBQUE7SUFDQUQsRUFBRSxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztFQUNsRCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRiJ9