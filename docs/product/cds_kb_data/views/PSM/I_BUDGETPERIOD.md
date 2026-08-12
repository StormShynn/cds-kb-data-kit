---
name: I_BUDGETPERIOD
description: "This CDS view provides the master data for budget periods, which can be used to answer the following business questions: What is the frequency for a budget period? Which funds are assigned to a budget period?"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIOD')/$value
semantic_en: "This CDS view provides the master data for budget periods, which can be used to answer the following business questions: What is the frequency for a budget period? Which funds are assigned to a budget period?"
semantic_vi: "Budget Period — CDS view giao diện dựa trên I_BudgetPeriodBasic."
keywords:
  - "Budget Period"
  - "budget"
  - "period"
  - "validity"
  - "start"
  - "date"
  - "expiration"
  - "reversal"
tags:
  - PSM
  - bo:businesspartner
  - budget
  - component:PSM
  - interface-view
  - master-data
---
# I_BUDGETPERIOD

**This CDS view provides the master data for budget periods, which can be used to answer the following business questions: What is the frequency for a budget period? Which funds are assigned to a budget period?**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BudgetPeriod` | ✓ | |  |  | `CHAR(10)` | Budget Period |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Budget Period Valid From |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Budget Period Valid To |
| `BudgetPeriodExpirationDate` |  | |  |  | `DATS(8)` | Budget Period Expiration Date |
| `BudgetPeriodReversalDate` |  | |  |  | `DATS(8)` | Budget Period Reversal Date |
| `BudgetPeriodAuthznGrp` |  | |  |  | `CHAR(10)` | Budget Period Authorization Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Budget Period Created by User |
| `CreationDate` |  | |  |  | `DATS(8)` | Budget Period Created on Date |
| `LastChangeUser` |  | |  |  | `CHAR(12)` | Budget Period Last Changed by User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Budget Period Last Changed on Date |
| `BudgetPeriodPeriodicity` |  | |  |  | `CHAR(10)` | Frequency for Budget Period |
| `_FundPeriodicity` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_BudgetPeriodHierarchyNode` | | ✓ | | | | |
| `_FundToBudgetPeriod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_BudgetPeriod` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIOD')/$value)*

```abap
@EndUserText.label: 'Budget Period'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@ObjectModel.representativeKey: 'BudgetPeriod'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S
}
@ObjectModel.sapObjectNodeType.name: 'BudgetPeriod'
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IBUDGETPERIOD'
@AbapCatalog.preserveKey: true
define view I_BudgetPeriod
  as select from I_BudgetPeriodBasic
 
    association [1..1] to E_BudgetPeriod as _Extension  //do not expose this association in the projection list of the view 
       on  $projection.BudgetPeriod  = _Extension.BudgetPeriod 
 
{
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_BudgetPeriodHierarchyNode'
  key BudgetPeriod,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      BudgetPeriodExpirationDate,
      BudgetPeriodReversalDate,
      @EndUserText.label: 'Budget Period Authorization Group'
      BudgetPeriodAuthznGrp,
      @Consumption.valueHelpDefinition: { entity: { name: 'I_BusinessUserVH', element: 'UserID' } }
      CreatedByUser,
//      @ObjectModel.readOnly: true --> leads to ATC error

      @Semantics.systemDate.createdAt: true
      CreationDate,
//      @ObjectModel.readOnly: true --> leads to ATC error

      @Consumption.valueHelpDefinition: { entity: { name: 'I_BusinessUserVH', element: 'UserID' } }
      LastChangeUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FundPeriodicity',
                     element: 'FundPeriodicity' }
        }]
      @ObjectModel.foreignKey.association: '_FundPeriodicity'
      BudgetPeriodPeriodicity,

      _FundPeriodicity,
      _Text,
      _CreatedByUser,
      _LastChangedByUser,
      _BudgetPeriodHierarchyNode,
      _FundToBudgetPeriod
}
```
