---
name: I_DEPRPRFLACCTGPRNCPSTDVH
description: This CDS view provides value help for DepreciationProfile and AccountingPrinciple. This view should be used for value help purposes only. If you intend to select the entire business data, use the view I_DeprProfileAcctgPrncpAssgmt instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPRFLACCTGPRNCPSTDVH')/$value
semantic_en: This CDS view provides value help for DepreciationProfile and AccountingPrinciple. This view should be used for value help purposes only. If you intend to select the entire business data, use the view I_DeprProfileAcctgPrncpAssgmt instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - account
  - bo:asset
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_DEPRPRFLACCTGPRNCPSTDVH

**This CDS view provides value help for DepreciationProfile and AccountingPrinciple. This view should be used for value help purposes only. If you intend to select the entire business data, use the view I_DeprProfileAcctgPrncpAssgmt instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPRFLACCTGPRNCPSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `DepreciationProfile` |  | |  |  | `CHAR(12)` | Depreciation Profile |
| `DepreciationProfileName` |  | |  |  | `CHAR(50)` | Depreciation Profile, Name |
| `DepreciationProfileIsActive` |  | |  |  | `CHAR(1)` | Depreciation Profile Is Active for Accounting Principle |
| `CntrySpcfcDeprPrflClassfctnRpt` |  | |  |  | `CHAR(4)` | Ctry/Reg.-Specific Classif. of Depr. Profiles for Reporting |
