---
name: I_CONTROLLINGOBJECTVH
description: "This CDS view is designed to provide a value help for controlling objects within a business context. It serves as a composite view that aggregates various attributes related to controlling objects, facilitating easier access and selection for users who need to work with these entities in transactional scenarios. This view provides value help for ControllingObject. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available controlling objects within a specific controlling area? How can I find specific orders, or cost center activity types associated with a controlling object? Which sales documents and items are linked to a particular controlling object? What cost centers or work breakdown structure (WBS) elements are related to a controlling object? How can I identify the project associated with a controlling object? What is the type of a specific controlling object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLLINGOBJECTVH')/$value
semantic_en: "This CDS view is designed to provide a value help for controlling objects within a business context. It serves as a composite view that aggregates various attributes related to controlling objects, facilitating easier access and selection for users who need to work with these entities in transactional scenarios. This view provides value help for ControllingObject. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available controlling objects within a specific controlling area? How can I find specific orders, or cost center activity types associated with a controlling object? Which sales documents and items are linked to a particular controlling object? What cost centers or work breakdown structure (WBS) elements are related to a controlling object? How can I identify the project associated with a controlling object? What is the type of a specific controlling object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CO
  - bo:companycode
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - document
  - interface-view
  - lob:controlling
  - order
  - project
  - transaction
  - metadata-only
---
# I_CONTROLLINGOBJECTVH

**This CDS view is designed to provide a value help for controlling objects within a business context. It serves as a composite view that aggregates various attributes related to controlling objects, facilitating easier access and selection for users who need to work with these entities in transactional scenarios. This view provides value help for ControllingObject. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available controlling objects within a specific controlling area? How can I find specific orders, or cost center activity types associated with a controlling object? Which sales documents and items are linked to a particular controlling object? What cost centers or work breakdown structure (WBS) elements are related to a controlling object? How can I identify the project associated with a controlling object? What is the type of a specific controlling object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLLINGOBJECTVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingObject` |  | |  |  | `CHAR(22)` | Object Number |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ControllingObjectType` |  | |  |  | `CHAR(2)` | Object Type |
