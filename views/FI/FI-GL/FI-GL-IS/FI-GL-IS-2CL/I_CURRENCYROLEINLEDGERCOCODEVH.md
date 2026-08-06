---
name: I_CURRENCYROLEINLEDGERCOCODEVH
description: This CDS view provides the prerequisites for answering the following business questions: How many currency roles are defined? In contrast to I_CurrencyRole, it only displays the currency roles which are assigned to a company code/ledger.
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENCYROLEINLEDGERCOCODEVH')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How many currency roles are defined? In contrast to I_CurrencyRole, it only displays the currency roles which are assigned to a company code/ledger.
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CURRENCYROLEINLEDGERCOCODEVH

**This CDS view provides the prerequisites for answering the following business questions: How many currency roles are defined? In contrast to I_CurrencyRole, it only displays the currency roles which are assigned to a company code/ledger.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENCYROLEINLEDGERCOCODEVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CurrencyRole` | `CHAR(2)` | Currency Type |
