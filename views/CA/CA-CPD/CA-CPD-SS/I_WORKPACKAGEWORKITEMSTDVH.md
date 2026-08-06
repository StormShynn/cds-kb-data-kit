---
name: I_WORKPACKAGEWORKITEMSTDVH
description: This view provides value help for work item. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Item of Work Package instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEMSTDVH')/$value
semantic_en: This view provides value help for work item. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Item of Work Package instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKPACKAGEWORKITEMSTDVH

**This view provides value help for work item. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Item of Work Package instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEMSTDVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `WorkItem` | `CHAR(10)` | Work Item ID |
| `WorkPackage` | `CHAR(50)` | Plan Item |
| `WorkItemName` | `CHAR(40)` | Work Item Name |
| `EngagementProjFinPlanUUID` | `RAW(16)` | Financial Plan UUID |
