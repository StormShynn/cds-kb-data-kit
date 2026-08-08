---
name: I_ASSETDEPRECIATIONPHASE
description: "This CDS view provides the supported values for DepreciationPhase. The following depreciation phases are available: Value Meaning 1 From the start of depreciation 2 From the start of depreciation 3 Changeover after end of the useful life This CDS view provides the data to answer the following business questions: Which depreciation phases are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETDEPRECIATIONPHASE')/$value
semantic_en: "This CDS view provides the supported values for DepreciationPhase. The following depreciation phases are available: Value Meaning 1 From the start of depreciation 2 From the start of depreciation 3 Changeover after end of the useful life This CDS view provides the data to answer the following business questions: Which depreciation phases are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_ASSETDEPRECIATIONPHASE

**This CDS view provides the supported values for DepreciationPhase. The following depreciation phases are available: Value Meaning 1 From the start of depreciation 2 From the start of depreciation 3 Changeover after end of the useful life This CDS view provides the data to answer the following business questions: Which depreciation phases are available? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETDEPRECIATIONPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DepreciationPhase` |  | |  |  | `CHAR(1)` | Depreciation Phase |
