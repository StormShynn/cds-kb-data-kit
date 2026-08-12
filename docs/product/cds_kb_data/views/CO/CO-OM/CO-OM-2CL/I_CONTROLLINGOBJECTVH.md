---
name: I_CONTROLLINGOBJECTVH
description: "This CDS view is designed to provide a value help for controlling objects within a business context. It serves as a composite view that aggregates various attributes related to controlling objects, facilitating easier access and selection for users who need to work with these entities in transactional scenarios. This view provides value help for ControllingObject. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available controlling objects within a specific controlling area? How can I find specific orders, or cost center activity types associated with a controlling object? Which sales documents and items are linked to a particular controlling object? What cost centers or work breakdown structure (WBS) elements are related to a controlling object? How can I identify the project associated with a controlling object? What is the type of a specific controlling object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLLINGOBJECTVH')/$value
semantic_en: "This CDS view is designed to provide a value help for controlling objects within a business context. It serves as a composite view that aggregates various attributes related to controlling objects, facilitating easier access and selection for users who need to work with these entities in transactional scenarios. This view provides value help for ControllingObject. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available controlling objects within a specific controlling area? How can I find specific orders, or cost center activity types associated with a controlling object? Which sales documents and items are linked to a particular controlling object? What cost centers or work breakdown structure (WBS) elements are related to a controlling object? How can I identify the project associated with a controlling object? What is the type of a specific controlling object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Controlling Object — CDS view giao diện dựa trên I_ControllingObject."
keywords:
  - "controlling"
  - "object"
  - "area"
  - "order"
  - "business"
  - "process"
  - "cost"
  - "activity"
  - "type"
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
---
# I_CONTROLLINGOBJECTVH

**This CDS view is designed to provide a value help for controlling objects within a business context. It serves as a composite view that aggregates various attributes related to controlling objects, facilitating easier access and selection for users who need to work with these entities in transactional scenarios. This view provides value help for ControllingObject. This view should be used for value help purposes only. This CDS view provides the data to answer the following business questions: What are the available controlling objects within a specific controlling area? How can I find specific orders, or cost center activity types associated with a controlling object? Which sales documents and items are linked to a particular controlling object? What cost centers or work breakdown structure (WBS) elements are related to a controlling object? How can I identify the project associated with a controlling object? What is the type of a specific controlling object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLLINGOBJECTVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingObject` | ✓ | |  |  | `CHAR(22)` | Object Number |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLLINGOBJECTVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLLINGOBJECTVH')/$value)*

```abap
//GENERATED:005:GFBfhxvv7jY3dCF5hTvUTG
@AbapCatalog.sqlViewName: 'IFICO__VH1'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ControllingObject'

@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL

@Search.searchable: true
@Consumption.ranked: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Controlling Object'
define view I_ControllingObjectVH as select from I_ControllingObject {

  @Search: { defaultSearchElement: true, ranking: #HIGH }
  key ControllingObject,

  @Consumption.hidden: true
  ControllingArea,
  
  OrderID,
  BusinessProcess,
  CostCtrActivityType,
  SalesDocument,
  SalesDocumentItem,
  CostCenter,
  WBSElementInternalID,
  ProjectInternalID,
  //@Search: { defaultSearchElement: true, ranking: #LOW }
  ControllingObjectType
  
}
```
