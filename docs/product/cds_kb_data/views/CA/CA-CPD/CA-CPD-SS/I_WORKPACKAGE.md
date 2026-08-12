---
name: I_WORKPACKAGE
description: "This CDS view provides the prerequisites for answering the following business questions: Which work packages are assigned to which sales orders? When and by whom was a work package changed? Which work packages are assigned to a project’s financial plan?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which work packages are assigned to which sales orders? When and by whom was a work package changed? Which work packages are assigned to a project’s financial plan?"
semantic_vi: "Work Package — CDS view cơ bản (transactional data) dựa trên Work Package."
keywords:
  - "Work Package"
  - "work"
  - "package"
  - "engagement"
  - "proj"
  - "plan"
  - "name"
  - "start"
  - "date"
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - order
  - plan
  - project
  - sales-order
---
# I_WORKPACKAGE

**This CDS view provides the prerequisites for answering the following business questions: Which work packages are assigned to which sales orders? When and by whom was a work package changed? Which work packages are assigned to a project’s financial plan?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkPackage` | ✓ | |  | `plan_item_id` | `CHAR(50)` | Plan Item |
| `WorkPackageUUID` |  | |  | `cast( WorkPackage.db_key as /cpd/wp_db_key preserving type )` | `RAW(16)` | Work Package UUID |
| `EngagementProjFinPlanUUID` |  | |  | `cast(WorkPackage.parent_key as /cpd/eng_pfp_db_key preserving type )` | `RAW(16)` | Financial Plan UUID |
| `WorkPackageName` |  | |  | `plan_item_name` | `CHAR(60)` | Plan Item Description |
| `WorkPackageStartDate` |  | |  | `start_date` | `DATS(8)` | Start Date |
| `WorkPackageEndDate` |  | |  | `end_date` | `DATS(8)` | End Date |
| `WBSElementObject` |  | |  | `mapped_item_id` | `CHAR(50)` | Object ID |
| `WBSDescription` |  | |  | `mapped_item_desc` | `CHAR(80)` | Object Name |
| `SalesOrder` |  | |  | `sales_order_hdr` | `CHAR(10)` | Sales Document |
| `SalesOrderItem` |  | |  | `so_item_id` | `NUMC(6)` | Sales Document Item |
| `LastChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | Changed By |
| `LastChangeDateTime` |  | |  | `cast(WorkPackage.changed_on as /cpd/cpm_changedon)` | `DEC(15)` | Commercial Project Last Changed On |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast(WorkPackage.created_on as /cpd/cpm_createdon)` | `DEC(15)` | Created On |
| `WorkPackageType` |  | |  | `plan_item_type` | `CHAR(1)` | Work Package Type |
| `_EngagementProjFinancialPlan` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_EngagementProjectPlanData` | | ✓ | | | | |
| `_WorkPackageWorkItem` | | ✓ | | | | |
| `_ExtSrvcWrkPckgPlnByPerd` | | ✓ | | | | |
| `_WorkPackageFunction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProjFinancialPlan` | `I_EngagementProjFinancialPlan` | [1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_EngagementProjectPlanData` | `I_EngagementProjectPlanData` | [0..*] |
| `_WorkPackageWorkItem` | `I_WorkPackageWorkItem` | [0..*] |
| `_Extension` | `E_Workpackage` | [0..1] |
| `_ExtSrvcWrkPckgPlnByPerd` | `I_ExtSrvcWrkPckgPlnByPerd` | [0..*] |
| `_WorkPackageFunction` | `I_WorkPackageWithFunctionValue` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGE')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWORKPCKG',
  preserveKey: true,
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  privilegedAssociations: [ '_EngagementProjFinancialPlan' ],
  personalData.blocking: #NOT_REQUIRED
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Work Package'
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE ],
  representativeKey: 'WorkPackage',
  sapObjectNodeType.name: 'CommercialProjectWorkPackage'  
}
@VDM: {
//  private: false,
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC
}
define view I_WorkPackage
  as select from /cpd/d_pfp_ps as WorkPackage

  association [1]    to I_EngagementProjFinancialPlan  as _EngagementProjFinancialPlan on  $projection.EngagementProjFinPlanUUID = _EngagementProjFinancialPlan.EngagementProjFinPlanUUID
  association [0..1] to I_WBSElementBasicData          as _WBSElement                  on  $projection.WBSElementObject = _WBSElement.WBSElementObject
  association [0..1] to I_SalesOrder                   as _SalesOrder                  on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem               as _SalesOrderItem              on  $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
                                                                                       and $projection.SalesOrder     = _SalesOrderItem.SalesOrder
  association [0..*] to I_EngagementProjectPlanData    as _EngagementProjectPlanData   on  $projection.EngagementProjFinPlanUUID = _EngagementProjectPlanData.EngagementProjFinPlanUUID
                                                                                       and $projection.WorkPackage               = _EngagementProjectPlanData.WorkPackage

  association [0..*] to I_WorkPackageWorkItem          as _WorkPackageWorkItem         on  $projection.WorkPackage               = _WorkPackageWorkItem.WorkPackage
                                                                                       and $projection.EngagementProjFinPlanUUID = _WorkPackageWorkItem.EngagementProjFinPlanUUID
  association [0..1] to E_Workpackage                  as _Extension                   on  WorkPackage.db_key = _Extension.WorkPackageUUID

  //This association is used to map WorPackageSet with PlanDataSet in SEGW
  association [0..*] to I_ExtSrvcWrkPckgPlnByPerd      as _ExtSrvcWrkPckgPlnByPerd     on  $projection.EngagementProjFinPlanUUID = _ExtSrvcWrkPckgPlnByPerd.EngagementProjFinPlanUUID
                                                                                       and $projection.WorkPackage               = _ExtSrvcWrkPckgPlnByPerd.WorkPackage

  //This association is used to map WorPackageSet with WorkPackageFunctionSet in SEGW
  association [1..*] to I_WorkPackageWithFunctionValue as _WorkPackageFunction         on  $projection.WorkPackage = _WorkPackageFunction.WorkPackage

{

      @ObjectModel.text.element: 'WorkPackageName'
  key WorkPackage.plan_item_id                                                as WorkPackage,
      cast( WorkPackage.db_key    as /cpd/wp_db_key preserving type )         as WorkPackageUUID,
      cast(WorkPackage.parent_key    as /cpd/eng_pfp_db_key preserving type ) as EngagementProjFinPlanUUID,
      @Semantics.text: true
      WorkPackage.plan_item_name                                              as WorkPackageName,
      WorkPackage.start_date                                                  as WorkPackageStartDate,
      WorkPackage.end_date                                                    as WorkPackageEndDate,
      WorkPackage.mapped_item_id                                              as WBSElementObject,
      WorkPackage.mapped_item_desc                                            as WBSDescription,
      //--[ GENERATED:012:GlBfhyJl7kY4nF6H}hes6m
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesOrderStdVH',
                     element: 'SalesOrder' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_SalesOrder'
      WorkPackage.sales_order_hdr                                             as SalesOrder,
      //--[ GENERATED:012:GlBfhyJl7kY4nF6H}hes6m
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesOrderItemStdVH',
                     element: 'SalesOrderItem' },
          additionalBinding: [{ localElement: 'SalesOrder',
                                element: 'SalesOrder' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      WorkPackage.so_item_id                                                  as SalesOrderItem,
      WorkPackage.changed_by                                                  as LastChangedByUser,
      @Semantics.dateTime:true
      @Semantics.systemDateTime.lastChangedAt:true
      cast(WorkPackage.changed_on as /cpd/cpm_changedon)                      as LastChangeDateTime,
      WorkPackage.created_by                                                  as CreatedByUser,
      @Semantics.dateTime:true
      @Semantics.systemDateTime.createdAt:true
      cast(WorkPackage.created_on as /cpd/cpm_createdon)                      as CreationDateTime,
      WorkPackage.plan_item_type                                              as WorkPackageType,



      /* Associations */
      _EngagementProjFinancialPlan,
      _EngagementProjectPlanData,
      _WBSElement,
      _SalesOrder,
      _SalesOrderItem,
      _WorkPackageWorkItem,
      _ExtSrvcWrkPckgPlnByPerd,
      _WorkPackageFunction

}

where
  WorkPackage.is_deleted = ''
```
