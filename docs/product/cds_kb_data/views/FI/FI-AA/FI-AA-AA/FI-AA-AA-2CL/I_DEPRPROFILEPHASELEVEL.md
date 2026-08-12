---
name: I_DEPRPROFILEPHASELEVEL
description: "This CDS view provides the depreciation phase levels with the information about the depreciation phase and the corresponding valid fiscal year. This CDS view provides the data to answer the following business questions: What are the depreciation levels in the depreciation phase? In which fiscal year is my depreciation phase valid? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASELEVEL')/$value
semantic_en: "This CDS view provides the depreciation phase levels with the information about the depreciation phase and the corresponding valid fiscal year. This CDS view provides the data to answer the following business questions: What are the depreciation levels in the depreciation phase? In which fiscal year is my depreciation phase valid? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_DEPRPROFILEPHASELEVEL

**This CDS view provides the depreciation phase levels with the information about the depreciation phase and the corresponding valid fiscal year. This CDS view provides the data to answer the following business questions: What are the depreciation levels in the depreciation phase? In which fiscal year is my depreciation phase valid? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASELEVEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DepreciationProfile` |  | |  |  | `CHAR(12)` | Depreciation Profile |
| `DepreciationType` |  | |  |  | `CHAR(1)` | Depreciation Type |
| `DepreciationPhase` |  | |  |  | `CHAR(1)` | Depreciation Phase |
| `AssetCapitalizationToYear` |  | |  |  | `NUMC(4)` | Valid to Vintage Year |
| `DeprCalcPhaseLevelValue` |  | |  |  | `NUMC(2)` | Level for Depreciation Percentage Rate |
| `DeprPhaseLevelDurationInYears` |  | |  |  | `NUMC(3)` | Validity of a Level in Years |
| `DeprPhaseLevelDurationInMonths` |  | |  |  | `NUMC(3)` | Validity of a Level in Months |
| `DepreciationCalcBaseValueKey` |  | |  |  | `CHAR(2)` | Base Value Key for Depreciation Calculation |
| `DeprCalcFixedPercent` |  | |  |  | `DEC(7)` | Depreciation Percentage Rate |
| `DeprCalcBaseValReducnPercent` |  | |  |  | `DEC(7)` | Reduction of Base Value by an Entered Percentage Rate |
| `DeprCalcPctIsFromRmngUsflLife` |  | |  |  | `CHAR(1)` | Calculate Percentage from Remaining Useful Life |
