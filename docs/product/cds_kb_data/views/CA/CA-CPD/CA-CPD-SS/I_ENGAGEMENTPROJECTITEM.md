---
name: I_ENGAGEMENTPROJECTITEM
description: "This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a project?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTITEM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a project?"
semantic_vi: "Item of Engagement Project — CDS view giao diện dựa trên P_EngagementProjectItem."
keywords:
  - "item"
  - "engagement"
  - "project"
  - "type"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - order
  - project
  - sales-order
  - bo:project
---
# I_ENGAGEMENTPROJECTITEM

**This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` | ✓ | |  |  | `CHAR(40)` | Commercial Project ID |
| `EngagementProjectItemType` | ✓ | |  |  | `CHAR(5)` | Master Project: Related Object Link |
| `EngagementProjectItem` | ✓ | |  |  | `CHAR(40)` | Item Key (Master Project) |
| `EngagementProjectUUID` |  | |  | `cast(EngagementProjectItem.EngagementProjectUUID as /cpd/eng_db_key preserving type )` | `RAW(16)` | Engagement Project UUID |
| `_EngagementProject` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProject` | `I_EngagementProject` | [1..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTITEM')/$value)*

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IEPPROJITEM'
@EndUserText.label: 'Item of Engagement Project'
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
define view I_EngagementProjectItem
  as select from P_EngagementProjectItem as EngagementProjectItem

  association [1..1] to I_EngagementProject as _EngagementProject on  $projection.EngagementProject = _EngagementProject.EngagementProject
  association [0..1] to I_SalesOrder        as _SalesOrder        on  $projection.EngagementProjectItem     = _SalesOrder.SalesOrder
                                                                 and $projection.EngagementProjectItemType = '0SOH'
{
  key EngagementProjectItem.EngagementProject                                                   as EngagementProject,
  key EngagementProjectItem.EngagementProjectItemType                                           as EngagementProjectItemType,
  key EngagementProjectItem.EngagementProjectItem                                               as EngagementProjectItem,
      cast(EngagementProjectItem.EngagementProjectUUID  as /cpd/eng_db_key preserving type )    as EngagementProjectUUID,
      _EngagementProject,
      _SalesOrder
}
```
