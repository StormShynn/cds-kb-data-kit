---
name: I_CNSLDTNPRFTCTRHIERELIM
description: "This CDS view extracts the elimination members for the analytical scenario for the Profit Center hierarchy node. It's valid for SAP BW/4HANA. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPRFTCTRHIERELIM')/$value
semantic_en: "This CDS view extracts the elimination members for the analytical scenario for the Profit Center hierarchy node. It's valid for SAP BW/4HANA. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-2CL
  - FIN-CS
  - FIN-CS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNPRFTCTRHIERELIM

**This CDS view extracts the elimination members for the analytical scenario for the Profit Center hierarchy node. It's valid for SAP BW/4HANA. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPRFTCTRHIERELIM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationPrftCtrHierarchy` |  | |  |  | `CHAR(42)` | Consolidation Profit Center Hierarchy |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `ConsolidationPrftCtrForElim` |  | |  |  | `CHAR(25)` | Consolidation Elimination Member |
