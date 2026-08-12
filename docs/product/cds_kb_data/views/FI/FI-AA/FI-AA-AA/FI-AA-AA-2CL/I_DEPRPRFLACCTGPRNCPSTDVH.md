---
name: I_DEPRPRFLACCTGPRNCPSTDVH
description: "This CDS view provides value help for DepreciationProfile and AccountingPrinciple. This view should be used for value help purposes only. If you intend to select the entire business data, use the view I_DeprProfileAcctgPrncpAssgmt instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPRFLACCTGPRNCPSTDVH')/$value
semantic_en: "This CDS view provides value help for DepreciationProfile and AccountingPrinciple. This view should be used for value help purposes only. If you intend to select the entire business data, use the view I_DeprProfileAcctgPrncpAssgmt instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
