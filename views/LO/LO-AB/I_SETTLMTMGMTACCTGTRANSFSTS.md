---
name: I_SETTLMTMGMTACCTGTRANSFSTS
description: This CDS view exposes fixed values of the field Settlement Management Accounting Transfer Status. The following fixed values have been maintained: A Document blocked for forwarding to Accounting B Accounting document not created (account determination error) C Accounting document has been created D Document is not relevant for accounting E Document has been reversed and is therefore completed F Accounting document not created (pricing error) G Posted using supplier settlement list (parking) H Credit-side using supplier settlement list, debit-side completed I Accounting document not generated (document contains balance) J Accounting document not required K Posted via supplier settlement list L Document completed (accounting documents created) M Inconsistent terms of payment N Document in customer settlement list (accounting document not created) O Document in supplier settlement list (accounting document not created) P Document is incomplete Q Supplier settlement list completed (follow-on documents not required) R Document completed (not relevant for follow-on documents)
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTACCTGTRANSFSTS')/$value
semantic_en: This CDS view exposes fixed values of the field Settlement Management Accounting Transfer Status. The following fixed values have been maintained: A Document blocked for forwarding to Accounting B Accounting document not created (account determination error) C Accounting document has been created D Document is not relevant for accounting E Document has been reversed and is therefore completed F Accounting document not created (pricing error) G Posted using supplier settlement list (parking) H Credit-side using supplier settlement list, debit-side completed I Accounting document not generated (document contains balance) J Accounting document not required K Posted via supplier settlement list L Document completed (accounting documents created) M Inconsistent terms of payment N Document in customer settlement list (accounting document not created) O Document in supplier settlement list (accounting document not created) P Document is incomplete Q Supplier settlement list completed (follow-on documents not required) R Document completed (not relevant for follow-on documents)
tags:
  - LO
  - account
  - bo:businesspartner
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - payment
  - pricing
  - supplier
  - metadata-only
---
# I_SETTLMTMGMTACCTGTRANSFSTS

**This CDS view exposes fixed values of the field Settlement Management Accounting Transfer Status. The following fixed values have been maintained: A Document blocked for forwarding to Accounting B Accounting document not created (account determination error) C Accounting document has been created D Document is not relevant for accounting E Document has been reversed and is therefore completed F Accounting document not created (pricing error) G Posted using supplier settlement list (parking) H Credit-side using supplier settlement list, debit-side completed I Accounting document not generated (document contains balance) J Accounting document not required K Posted via supplier settlement list L Document completed (accounting documents created) M Inconsistent terms of payment N Document in customer settlement list (accounting document not created) O Document in supplier settlement list (accounting document not created) P Document is incomplete Q Supplier settlement list completed (follow-on documents not required) R Document completed (not relevant for follow-on documents)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTACCTGTRANSFSTS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtMgmtAcctgTransfSts` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
