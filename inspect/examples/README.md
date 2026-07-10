# Inspect Example Catalog

These programs are website content, not compiler fixtures. Each example must
remain a standalone Rasa program whose behavior can be proven without the
Inspect UI.

| Example | Primary pressure | Expected outcome |
| --- | --- | --- |
| Ledger reconciliation | Nested immutable data, grouping, reduction, invariants | Successful structured value. |
| Dependency scheduler | `loop`/`recur`, sets, graph admission, cycle branch | Successful layered schedule. |
| Validation DSL | Macros, expansion, higher-order collection processing | Successful validation report plus inspectable expansion. |
| Telemetry correlation | Bounded lazy sequence operations, grouping, alert projection | Successful request summaries. |
| Packed sensor calibration | Explicit packed lifecycle and indexed packed computation | Successful result with planner/runtime packed evidence; no materialization. |
| Checked pricing | Checked scalar contracts | Successful typed result. |
| Checked pricing rejection | Wrong argument type under checked mode | Source-linked non-recoverable diagnostic. |
| Capability HTTP pipeline | Package import, policy, suspension, browser provider | Policy refusal until admitted; successful same-origin fetch after admission. |
| Browser crypto extension | Browser-only extension package and async provider | Successful digest plus provider trace; structured adapter/policy/provider failures. |

The UI may summarize these outcomes, but it may not infer compiler, packed,
type, capability, or extension truth from the source text. Those claims come
from the structured run/report and browser provider trace.

## Current Gates

- `validation-dsl.ras` is intentionally absent from the active catalog. The
  current pipeline leaves user `syntax-quote` for analysis, which refuses it as
  an unsupported analyzer form before IR. The example resumes only after user
  macro expansion is restored in core; the website does not emulate macros.
- The HTTP example's default state is an intentional policy refusal. Its
  admitted browser run requires the packaged `rasa.http` provider and a
  same-origin URL resolved by the browser adapter.
- The cryptography example is deferred. Core `ras package build` currently
  rejects browser-only JavaScript provider authoring, so it cannot generate an
  authoritative `package.ras`. No manual package authority is checked in as a
  substitute.

Observed standalone source results on 2026-07-10:

| Source | Result |
| --- | --- |
| `ledger-reconciliation.ras` | balanced, 7 postings, 3 batches |
| `dependency-scheduler.ras` | 5 layers, 25 elapsed minutes |
| `telemetry-correlation.ras` | 9 events, 4 requests, 2 alerts |
| `packed-sensor-calibration.ras` | 512 packed bytes, checksum `16983479` |
| `checked-pricing.ras` | gross `12500`, net `12000` |
| `checked-pricing-rejected.ras` | checked diagnostic: expected `i64`, actual `string`, exact argument span |
| `capability-http-pipeline.ras` | policy denial for `http/client` before provider lookup |
