---
name: I_WORKPACKAGEWORKITEMSTDVH
description: "This view provides value help for work item. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Package Work Item instead."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEMSTDVH')/$value
semantic_en: "This view provides value help for work item. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Package Work Item instead."
semantic_vi: "Work Item of Work Package — CDS view giao diện dựa trên I_WorkPackageWorkItem."
keywords:
  - "work"
  - "item"
  - "package"
  - "name"
  - "engagement"
  - "proj"
  - "plan"
tags:
  - CA
  - bo:purchaseorder
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
---
# I_WORKPACKAGEWORKITEMSTDVH

**This view provides value help for work item. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Package Work Item instead.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkItem` | ✓ | |  |  | `CHAR(10)` | Work Item ID |
| `WorkPackage` | ✓ | |  |  | `CHAR(50)` | Plan Item |
| `WorkItemName` |  | |  |  | `CHAR(40)` | Work Item Name |
| `EngagementProjFinPlanUUID` |  | |  |  | `RAW(16)` | Financial Plan UUID |
| `_WorkPackage` | | ✓ | | | | |
| `_EngagementProjFinancialPlan` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEMSTDVH')/$value)*

```abap
//GENERATED:005:GFBfhyK17kY0cP}Y8x2zE0
@AbapCatalog.sqlViewName: 'IWPWI__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'WorkItem'

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Search.searchable: true
@Consumption.ranked: true
@Consumption.valueHelpDefault.fetchValues: #AUTOMATICALLY_WHEN_DISPLAYED

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Work Item of Work Package'
@ObjectModel: {modelingPattern: #VALUE_HELP_PROVIDER , 
               supportedCapabilities: [#VALUE_HELP_PROVIDER]
}
define view I_WorkPackageWorkItemStdVH as select from I_WorkPackageWorkItem {
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @EndUserText.label: 'Work Item ID'
  @ObjectModel.text.element: ['WorkItemName']
  key WorkItem,
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @EndUserText.label: 'Work Package ID'
  @ObjectModel.foreignKey.association: '_WorkPackage'
  key WorkPackage, 
   
  @EndUserText.label: 'Work Item Name' 
  WorkItemName,
  @Consumption.hidden: true
  EngagementProjFinPlanUUID,

  @Consumption.hidden: true
  _WorkPackage,
  @Consumption.hidden: true
  _EngagementProjFinancialPlan
}
```
