---
name: I_MAINTEQUIPHIERARCHYNODE
description: "This CDS view is designed to represent the hierarchy of equipment within an organization. It provides a structured view of equipment and their relationships, specifically focusing on the parent-child hierarchy between equipment and their superordinate equipment. The view extracts data from equipment time segments and includes associations to equipment data and equipment text for comprehensive information. This CDS view provides the data to answer the following business questions: What is the hierarchical structure of equipment within the organization? Which equipment is considered superordinate to other equipment? What are the validity periods for equipment usage within the hierarchy? How can we access detailed information and descriptions for specific equipment nodes in the hierarchy? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEQUIPHIERARCHYNODE')/$value
semantic_en: "This CDS view is designed to represent the hierarchy of equipment within an organization. It provides a structured view of equipment and their relationships, specifically focusing on the parent-child hierarchy between equipment and their superordinate equipment. The view extracts data from equipment time segments and includes associations to equipment data and equipment text for comprehensive information. This CDS view provides the data to answer the following business questions: What is the hierarchical structure of equipment within the organization? Which equipment is considered superordinate to other equipment? What are the validity periods for equipment usage within the hierarchy? How can we access detailed information and descriptions for specific equipment nodes in the hierarchy? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PM
  - bo:companycode
  - component:PM-EQM-EQ-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
  - metadata-only
---
# I_MAINTEQUIPHIERARCHYNODE

**This CDS view is designed to represent the hierarchy of equipment within an organization. It provides a structured view of equipment and their relationships, specifically focusing on the parent-child hierarchy between equipment and their superordinate equipment. The view extracts data from equipment time segments and includes associations to equipment data and equipment text for comprehensive information. This CDS view provides the data to answer the following business questions: What is the hierarchical structure of equipment within the organization? Which equipment is considered superordinate to other equipment? What are the validity periods for equipment usage within the hierarchy? How can we access detailed information and descriptions for specific equipment nodes in the hierarchy? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEQUIPHIERARCHYNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HierarchyNode` |  | |  |  | `CHAR(18)` | Equipment Number |
| `EquipUsagePeriodSequenceNumber` |  | |  |  | `NUMC(3)` | Consecutive numbering of EquipUsagePeriods on same day |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `SuperordinateEquipment` |  | |  |  | `CHAR(18)` | Superordinate Equipment |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
