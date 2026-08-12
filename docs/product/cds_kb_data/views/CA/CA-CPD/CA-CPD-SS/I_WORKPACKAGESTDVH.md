---
name: I_WORKPACKAGESTDVH
description: "This view provides value help for work package. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Package instead."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGESTDVH')/$value
semantic_en: "This view provides value help for work package. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Package instead."
semantic_vi: "Work Package — CDS view giao diện dựa trên I_WorkPackage."
keywords:
  - "work"
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
# I_WORKPACKAGESTDVH

**This view provides value help for work package. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Package instead.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGESTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkPackage` | ✓ | |  |  | `CHAR(50)` | Plan Item |
| `WorkPackageName` |  | |  |  | `CHAR(60)` | Plan Item Description |
| `EngagementProjFinPlanUUID` |  | |  |  | `RAW(16)` | Financial Plan UUID |
| `_EngagementProjFinancialPlan` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGESTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGESTDVH')/$value)*

```abap
//GENERATED:005:GFBfhyK17kY0cP}Y8x2zE0
@AbapCatalog.sqlViewName: 'IWP__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'WorkPackage'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Search.searchable: true
@Consumption.ranked: true
@Consumption.valueHelpDefault.fetchValues: #AUTOMATICALLY_WHEN_DISPLAYED

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Work Package'

@ObjectModel: {modelingPattern: #VALUE_HELP_PROVIDER, 
               supportedCapabilities: [#VALUE_HELP_PROVIDER]
}
define view I_WorkPackageStdVH as select from I_WorkPackage {
@Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @EndUserText.label: 'Work Package ID'
  @ObjectModel.text.element: ['WorkPackageName']
  key WorkPackage,
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @EndUserText.label: 'Work Package Name'
  WorkPackageName,
  @Consumption.hidden: true
  EngagementProjFinPlanUUID,

  @Consumption.hidden: true
  _EngagementProjFinancialPlan
}
```
