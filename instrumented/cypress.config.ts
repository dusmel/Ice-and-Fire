function cov_ugom0k9w7() {
  var path = "/Users/hadad/Desktop/melliom/gigs/zatec/ice-and-fire/cypress.config.ts";
  var hash = "0f4aa40954eae9410c825f413ee1e03473c3da67";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/hadad/Desktop/melliom/gigs/zatec/ice-and-fire/cypress.config.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 6,
          column: 56
        }
      },
      "1": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 5,
            column: 5
          }
        },
        loc: {
          start: {
            line: 5,
            column: 32
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0f4aa40954eae9410c825f413ee1e03473c3da67"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ugom0k9w7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ugom0k9w7();
import { defineConfig } from "cypress";
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cov_ugom0k9w7().f[0]++;
      cov_ugom0k9w7().s[0]++;
      require('@cypress/code-coverage/task')(on, config);
      // implement node event listeners here
      cov_ugom0k9w7().s[1]++;
      return config;
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkZWZpbmVDb25maWciLCJlMmUiLCJzZXR1cE5vZGVFdmVudHMiLCJvbiIsImNvbmZpZyIsInJlcXVpcmUiXSwic291cmNlcyI6WyJjeXByZXNzLmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwiY3lwcmVzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlMmU6IHtcbiAgICBzZXR1cE5vZGVFdmVudHMob24sIGNvbmZpZykge1xuICAgICAgcmVxdWlyZSgnQGN5cHJlc3MvY29kZS1jb3ZlcmFnZS90YXNrJykob24sIGNvbmZpZylcbiAgICAgIC8vIGltcGxlbWVudCBub2RlIGV2ZW50IGxpc3RlbmVycyBoZXJlXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVNBLFlBQVksUUFBUSxTQUFTO0FBRXRDLGVBQWVBLFlBQVksQ0FBQztFQUMxQkMsR0FBRyxFQUFFO0lBQ0hDLGVBQWUsQ0FBQ0MsRUFBRSxFQUFFQyxNQUFNLEVBQUU7TUFBQTtNQUFBO01BQzFCQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQ0YsRUFBRSxFQUFFQyxNQUFNLENBQUM7TUFDbEQ7TUFBQTtNQUNBLE9BQU9BLE1BQU07SUFDZjtFQUNGO0FBQ0YsQ0FBQyxDQUFDIn0=