---
name: C_TRSYCTPTYLIMITOVERVIEWQ
description: This CDS view provides the prerequisites for answering the following business questions for limit utilizations: What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by company code? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group?
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLIMITOVERVIEWQ')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions for limit utilizations: What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by company code? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-CR
  - FIN-FSCM-TRM-CR-2CL
  - lob:finance
  - product
  - metadata-only
---
# C_TRSYCTPTYLIMITOVERVIEWQ

**This CDS view provides the prerequisites for answering the following business questions for limit utilizations: What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by company code? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by business partner? What are the limit utilization amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group? What are the free internal limit amounts in display currency at different dates for a specifc limit type based on a specific limit utilization base by limit product group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRSYCTPTYLIMITOVERVIEWQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LimitUtilznDeterminationDate` |  | |  |  | `DATS(8)` | Base Date for Determining Limit Utilization |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `LimitProductGroup` |  | |  |  | `CHAR(3)` | Limit Product Group |
| `IntLimitAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Internal Limit Amount |
| `LimitUtilznAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Limit Amount Utilized: Totals Record |
| `FreeIntLimitAmountInDspCrcy` |  | |  |  | `CURR(17)` | Free Internal Limit Amount |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
