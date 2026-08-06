---
name: I_USERSETTINGSFORCOMPANYCODE
description: This CDS view provides the prerequisites for answering the following business question: What is the company code user default value for my business user? It can be used as a derivation entity.
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORCOMPANYCODE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: What is the company code user default value for my business user? It can be used as a derivation entity.
tags:
  - FI
  - bo:plant
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_USERSETTINGSFORCOMPANYCODE

**This CDS view provides the prerequisites for answering the following business question: What is the company code user default value for my business user? It can be used as a derivation entity.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORCOMPANYCODE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BusinessUser` | `CHAR(12)` | User ID |
| `CompanyCode` | `CHAR(40)` | Parameter value |
