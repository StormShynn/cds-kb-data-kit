---
name: I_ASSETDEPRECIATIONPHASETEXT
description: This CDS view provides the supported values for DepreciationType. The following depreciation types are available: Value Meaning N Ordinary depreciation S Special tax depreciation Z Interest (not supported) This CDS view provides the data to answer the following business questions: Which depreciation types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETDEPRECIATIONPHASETEXT')/$value
semantic_en: This CDS view provides the supported values for DepreciationType. The following depreciation types are available: Value Meaning N Ordinary depreciation S Special tax depreciation Z Interest (not supported) This CDS view provides the data to answer the following business questions: Which depreciation types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_ASSETDEPRECIATIONPHASETEXT

**This CDS view provides the supported values for DepreciationType. The following depreciation types are available: Value Meaning N Ordinary depreciation S Special tax depreciation Z Interest (not supported) This CDS view provides the data to answer the following business questions: Which depreciation types are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETDEPRECIATIONPHASETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DepreciationPhase` |  | |  |  | `CHAR(1)` | Depreciation Phase |
| `DepreciationPhaseName` |  | |  |  | `CHAR(60)` | Depreciation Phase Text |
