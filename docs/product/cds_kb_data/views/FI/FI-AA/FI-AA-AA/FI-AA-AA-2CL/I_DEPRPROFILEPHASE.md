---
name: I_DEPRPROFILEPHASE
description: "This CDS view provides the depreciation phase settings that are maintained for a depreciation profile. It contains information about the depreciation type and the depreciation phase. This CDS view provides the data to answer the following business questions: How is the depreciation phase configured? Which depreciation method is used in the depreciation phase? What is the depreciation percentage rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASE')/$value
semantic_en: "This CDS view provides the depreciation phase settings that are maintained for a depreciation profile. It contains information about the depreciation type and the depreciation phase. This CDS view provides the data to answer the following business questions: How is the depreciation phase configured? Which depreciation method is used in the depreciation phase? What is the depreciation percentage rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - bo:asset
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_DEPRPROFILEPHASE

**This CDS view provides the depreciation phase settings that are maintained for a depreciation profile. It contains information about the depreciation type and the depreciation phase. This CDS view provides the data to answer the following business questions: How is the depreciation phase configured? Which depreciation method is used in the depreciation phase? What is the depreciation percentage rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DepreciationProfile` |  | |  |  | `CHAR(12)` | Depreciation Profile |
| `DepreciationType` |  | |  |  | `CHAR(1)` | Depreciation Type |
| `DepreciationPhase` |  | |  |  | `CHAR(1)` | Depreciation Phase |
| `DepreciationCalcBaseValueKey` |  | |  |  | `CHAR(2)` | Base Value Key for Depreciation Calculation |
| `DeprCalcFixedPercent` |  | |  |  | `DEC(7)` | Depreciation Percentage Rate |
| `DeprCalcBaseValReducnPercent` |  | |  |  | `DEC(7)` | Reduction of Base Value by an Entered Percentage Rate |
| `DeprCalcPctIsFromRmngUsflLife` |  | |  |  | `CHAR(1)` | Calculate Percentage from Remaining Useful Life |
| `DepreciationCalcMethod` |  | |  |  | `CHAR(1)` | Depreciation Calculation Method |
| `DeprCalcUsefulLifeEndsAtFYEnd` |  | |  |  | `CHAR(1)` | Reduce Useful Life to the End of Fiscal Year |
| `DeprIsCalculatedAfterUsflLife` |  | |  |  | `CHAR(1)` | Calculate Depreciation After End of Useful Life |
| `DeprIsCalculatedBelowZero` |  | |  |  | `CHAR(1)` | Calculation of Depreciation Below Net Book Value of Zero |
| `DeprIsCalculatedWithCurb` |  | |  |  | `CHAR(1)` | Depreciation with Curb |
| `DeprCalcDecliningBalFactor` |  | |  |  | `DEC(3)` | Declining-Balance Multiplication Factor |
| `DeprCalcDecliningBalMaxPercent` |  | |  |  | `DEC(7)` | Maximum Percentage Rate |
| `DeprCalcDecliningBalMinPercent` |  | |  |  | `DEC(7)` | Minimum Percentage Rate |
| `DeprPeriodCtrlAcqnInCapznYr` |  | |  |  | `CHAR(2)` | Period Control: Acquisition |
| `Asset1stAcqnDateIsUsdInCapznYr` |  | |  |  | `CHAR(1)` | For Subsequent Acq.: Use Date of First Acq. for Depr. Calc. |
| `DeprPeriodCtrlAcqnAftCapznYr` |  | |  |  | `CHAR(2)` | Period Control: Acquisition in Following Years |
| `DeprPeriodCtrlRetirement` |  | |  |  | `CHAR(2)` | Period Control: Retirement |
| `DeprPeriodCtrlTransfer` |  | |  |  | `CHAR(2)` | Period Control: Transfer |
| `DeprPeriodCtrlRevaluation` |  | |  |  | `CHAR(2)` | Period Control for Revaluation |
| `DeprPeriodCtrlInvestmentSupp` |  | |  |  | `CHAR(2)` | Period Control for Investment Support |
| `DeprPeriodCtrlUnplannedDepr` |  | |  |  | `CHAR(2)` | Period Control for Unplanned Depreciation |
| `DeprPeriodCtrlWriteUps` |  | |  |  | `CHAR(2)` | Period Control for Write-Ups to Reserves |
| `DeprCalcChangeoverMethod` |  | |  |  | `CHAR(1)` | Changeover Method |
| `DeprCalcChangeoverPercent` |  | |  |  | `DEC(3)` | Net Book Value Percentage Rate for Depreciation Changeover |
| `DeprCalcMultipleShiftControl` |  | |  |  | `CHAR(1)` | Multiple Shift Control |
| `DeprCalcShutdownControl` |  | |  |  | `CHAR(1)` | Shutdown Control |
| `DeprCalcScrapValueControl` |  | |  |  | `NUMC(1)` | Scrap Value Control: Effect of Scrap Value on Base Value |
| `DeprCalcMultiLevelStartBasis` |  | |  |  | `CHAR(1)` | Validity Start of Multi-Level Depreciation |
