---
name: I_DEPRPROFILEACCTGPRNCPASSGMT
description: "This CDS view indicates to which accounting principle a depreciation profile is assigned. A depreciation profile can be assigned to several accounting principles. In addition, the CDS view indicates whether the depreciation profile is active within the assigned accounting principle. This CDS view provides the data to answer the following business questions: To which accounting principle is the depreciation profile assigned? Is the depreciation profile active within the accounting principle? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEACCTGPRNCPASSGMT')/$value
semantic_en: "This CDS view indicates to which accounting principle a depreciation profile is assigned. A depreciation profile can be assigned to several accounting principles. In addition, the CDS view indicates whether the depreciation profile is active within the assigned accounting principle. This CDS view provides the data to answer the following business questions: To which accounting principle is the depreciation profile assigned? Is the depreciation profile active within the accounting principle? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_DEPRPROFILEACCTGPRNCPASSGMT

**This CDS view indicates to which accounting principle a depreciation profile is assigned. A depreciation profile can be assigned to several accounting principles. In addition, the CDS view indicates whether the depreciation profile is active within the assigned accounting principle. This CDS view provides the data to answer the following business questions: To which accounting principle is the depreciation profile assigned? Is the depreciation profile active within the accounting principle? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEACCTGPRNCPASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DepreciationProfile` |  | |  |  | `CHAR(12)` | Depreciation Profile |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `DepreciationProfileIsActive` |  | |  |  | `CHAR(1)` | Depreciation Profile Is Active for Accounting Principle |
| `CntrySpcfcDeprPrflClfnForRptg` |  | |  |  | `CHAR(4)` | Ctry/Reg.-Specific Classif. of Depr. Profiles for Reporting |
