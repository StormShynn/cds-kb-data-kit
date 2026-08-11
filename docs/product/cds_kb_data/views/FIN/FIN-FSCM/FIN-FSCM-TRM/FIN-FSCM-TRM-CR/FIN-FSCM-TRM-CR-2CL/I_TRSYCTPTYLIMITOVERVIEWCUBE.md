---
name: I_TRSYCTPTYLIMITOVERVIEWCUBE
description: "This CDS view provides the prerequisites for answering the following business questions for limit amounts, limit utilization amounts, and free limit amounts: What are the limit utilization amounts in display currency at different dates of the different limit types by business partner? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by company code? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by limit product group? What are the free internal or external limit amounts in display currency at different dates of the different limit types by limit product group?"
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLIMITOVERVIEWCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions for limit amounts, limit utilization amounts, and free limit amounts: What are the limit utilization amounts in display currency at different dates of the different limit types by business partner? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by company code? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by limit product group? What are the free internal or external limit amounts in display currency at different dates of the different limit types by limit product group?"
tags:
  - FIN
  - bo:material
  - component:FIN-FSCM-TRM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-CR
  - FIN-FSCM-TRM-CR-2CL
  - interface-view
  - lob:finance
  - product
  - metadata-only
---
# I_TRSYCTPTYLIMITOVERVIEWCUBE

**This CDS view provides the prerequisites for answering the following business questions for limit amounts, limit utilization amounts, and free limit amounts: What are the limit utilization amounts in display currency at different dates of the different limit types by business partner? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by company code? What are the free internal or external limit amounts in display currency at different dates of the different limit types by business partner? What are the limit utilization amounts in display currency at different dates of the different limit types by limit product group? What are the free internal or external limit amounts in display currency at different dates of the different limit types by limit product group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRSYCTPTYLIMITOVERVIEWCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LimitType` |  | |  |  | `CHAR(3)` | Limit Type |
| `LimitUtilznDeterminationDate` |  | |  |  | `DATS(8)` | Base Date for Determining Limit Utilization |
| `LimitUtilizationBase` |  | |  |  | `NUMC(1)` | Limit Utilization Base |
| `LmtCharacteristicsRecordNumber` |  | |  |  | `NUMC(20)` | Number of Limit Record |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `LimitProductGroup` |  | |  |  | `CHAR(3)` | Limit Product Group |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `CharacteristicCurrency` |  | |  |  | `CUKY(5)` | Currency as Limit Characteristic |
| `FreeDefinedMonitoringAttribute` |  | |  |  | `CHAR(10)` | Monitoring Unit |
| `InternalOrganizationalCenter` |  | |  |  | `CHAR(10)` | Internal Organizational Unit |
| `CountryRiskCountry` |  | |  |  | `CHAR(3)` | Relevant Country/Region for Country/Region Risk |
| `LimitValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date of a Limit |
| `LimitValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date of a Limit |
| `LimitUtilizationValidityDate` |  | |  |  | `DATS(8)` | Valid-From Date of the Limit Utilization |
| `CounterpartyLimitIsLocked` |  | |  |  | `CHAR(1)` | Limit is locked |
| `IntLimitSpecAmountInDspCrcy` |  | |  |  | `CURR(17)` | Internal Limit Specification Amount |
| `IntInterimLimitAmountInDspCrcy` |  | |  |  | `CURR(17)` | Internal Interim Limit Amount |
| `ExtLimitSpecAmountInDspCrcy` |  | |  |  | `CURR(17)` | External Limit Specification Amount |
| `ExtInterimLimitAmountInDspCrcy` |  | |  |  | `CURR(17)` | External Interim Limit Amount |
| `IntLimitTransfAmountInDspCrcy` |  | |  |  | `CURR(17)` | Internal Limit Transfer Amount |
| `ExtLimitTransfAmountInDspCrcy` |  | |  |  | `CURR(17)` | External Limit Transfer Amount |
| `IntLimitAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Internal Limit Amount |
| `ExtLimitAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | External Limit Amount |
| `LimitUtilznAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Limit Amount Utilized: Totals Record |
| `FreeIntLimitAmountInDspCrcy` |  | |  |  | `CURR(17)` | Free Internal Limit Amount |
| `FreeExtLimitAmountInDspCrcy` |  | |  |  | `CURR(17)` | Free External Limit Amount |
| `CtptyLmtWrngThldAmtInDspCrcy` |  | |  |  | `CURR(17)` | Warning Threshold |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `CtptyLmtWrngThresholdCategory` |  | |  |  | `NUMC(1)` | Early Warning Control |
