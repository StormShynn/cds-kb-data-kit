---
name: I_WORKPACKAGEWORKITEM
description: "This CDS view provides the prerequisites for answering the following business questions: What are the work items assigned to a work package and which of the work items are active or inactive? How many or which work packages use a particular work item?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the work items assigned to a work package and which of the work items are active or inactive? How many or which work packages use a particular work item?"
semantic_vi: "Work Item of Work Package — CDS view cơ bản (transactional data) dựa trên P_WorkPackageWorkItem."
keywords:
  - "work"
  - "item"
  - "package"
  - "engagement"
  - "project"
  - "element"
  - "object"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
---
# I_WORKPACKAGEWORKITEM

**This CDS view provides the prerequisites for answering the following business questions: What are the work items assigned to a work package and which of the work items are active or inactive? How many or which work packages use a particular work item?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkItem` | ✓ | |  |  | `CHAR(10)` | Work Item ID |
| `WorkPackage` | ✓ | |  |  | `CHAR(50)` | Plan Item |
| `EngagementProject` |  | |  |  | `CHAR(40)` | Commercial Project ID |
| `WBSElementObject` |  | |  |  | `CHAR(50)` | Object ID |
| `WorkPackageUUID` |  | |  | `cast(WorkPackageWorkItem.WorkPackageUUID as /cpd/wp_db_key preserving type )` | `RAW(16)` | Work Package UUID |
| `WorkItemUUID` |  | |  | `cast(WorkPackageWorkItem.WorkItemUUID as /cpd/wi_db_key preserving type )` | `RAW(16)` | Work Item UUID |
| `EngagementProjFinPlanUUID` |  | |  | `cast(WorkPackageWorkItem.EngagementProjFinPlanUUID as /cpd/eng_pfp_db_key preserving type )` | `RAW(16)` | Financial Plan UUID |
| `WorkItemName` |  | |  |  | `CHAR(40)` | Work Item Name |
| `WorkItemIsInactive` |  | |  |  | `CHAR(1)` | Data Element for Work Item is Inactive |
| `_WorkPackage` | | ✓ | | | | |
| `_EngagementProjFinancialPlan` | | ✓ | | | | |
| `_EngagementProjectPlanData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkPackage` | `I_WorkPackage` | [0..1] |
| `_EngagementProjFinancialPlan` | `I_EngagementProjFinancialPlan` | [0..1] |
| `_EngagementProjectPlanData` | `I_EngagementProjectPlanData` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEM')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWRKPKGWRKITEM',
//  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #NOT_REQUIRED
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Work Item of Work Package'
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    serviceQuality: #B,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE ],
  representativeKey: 'WorkItem',
  sapObjectNodeType.name: 'CommercialProjectWorkPackage' 
}
@VDM: {
//  private: false,
//  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC
}

define view I_WorkPackageWorkItem
  as select from P_WorkPackageWorkItem as WorkPackageWorkItem
  association [0..1] to I_WorkPackage                 as _WorkPackage                 on  $projection.WorkPackage = _WorkPackage.WorkPackage
  association [0..1] to I_EngagementProjFinancialPlan as _EngagementProjFinancialPlan on  $projection.EngagementProjFinPlanUUID = _EngagementProjFinancialPlan.EngagementProjFinPlanUUID
  association [0..*] to I_EngagementProjectPlanData   as _EngagementProjectPlanData   on  $projection.WorkPackage               = _EngagementProjectPlanData.WorkPackage
                                                                                      and $projection.EngagementProjFinPlanUUID = _EngagementProjectPlanData.EngagementProjFinPlanUUID
                                                                                      and $projection.WorkItem                  = _EngagementProjectPlanData.WorkItem
{


      @ObjectModel.text.element: 'WorkItemName'
  key WorkPackageWorkItem.WorkItem                                                                as WorkItem,
      //--[ GENERATED:012:GlBfhyJl7jY4odLnax6PDW
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_WorkPackageStdVH',
                     element: 'WorkPackage' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association:'_WorkPackage'
  key WorkPackageWorkItem.WorkPackage                                                             as WorkPackage,
      WorkPackageWorkItem.EngagementProject                                                       as EngagementProject,
      WorkPackageWorkItem.WBSElementObject                                                        as WBSElementObject,
      cast(WorkPackageWorkItem.WorkPackageUUID as /cpd/wp_db_key preserving type )                as WorkPackageUUID,
      cast(WorkPackageWorkItem.WorkItemUUID    as /cpd/wi_db_key preserving type )                as WorkItemUUID,
      cast(WorkPackageWorkItem.EngagementProjFinPlanUUID as /cpd/eng_pfp_db_key preserving type ) as EngagementProjFinPlanUUID,
      @Semantics.text: true
      WorkPackageWorkItem.WorkItemName                                                            as WorkItemName,
      @Semantics.booleanIndicator:true
      WorkPackageWorkItem.WorkItemIsInactive                                                      as WorkItemIsInactive,
//      @Consumption.hidden: true
//      WorkPackageWorkItem.is_deleted                                                              as IsDeleted,
      _WorkPackage,
      _EngagementProjFinancialPlan,
      _EngagementProjectPlanData

}

where
  WorkPackageWorkItem.is_deleted = ''
```
