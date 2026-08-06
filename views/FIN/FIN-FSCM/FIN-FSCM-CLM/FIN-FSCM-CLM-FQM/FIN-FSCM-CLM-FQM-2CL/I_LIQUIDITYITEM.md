---
name: I_LIQUIDITYITEM
description: This CDS view provides the prerequisites for answering the following business question: How many liquidity items are defined?
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYITEM')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: How many liquidity items are defined?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-FQM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - interface-view
  - lob:finance
  - lob:quality management
  - metadata-only
---
# I_LIQUIDITYITEM

**This CDS view provides the prerequisites for answering the following business question: How many liquidity items are defined?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYITEM')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `LiquidityItem` | `CHAR(16)` | Liquidity Item |
| `CashFlowDirection` | `CHAR(4)` | Cash Flow Direction |
