---
name: I_CNSLDTNTASK
description: "Cnsldtntask"
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNTASK

**Cnsldtntask**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationTask` | ✓ | |  | `cast( cacti as fincs_tsk preserving type )` |  |  |
| `ConsolidationTaskCategory` |  | |  | `cast( cactt as fincs_taskcategory preserving type )` |  |  |
| `CnsldtnTskDocValdtnIsActive` |  | |  | `docval_active` |  |  |
| `CnsldtnBalValdtnCrcyCategory` |  | |  | `curr_type` |  |  |
| `_CnsldtnTaskCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CnsldtnTskDocTypeDtaColl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnTaskCategory` | `I_CnsldtnTaskCategory` | [1..1] |
| `_Text` | `I_CnsldtnTaskText` | [0..*] |
| `_CnsldtnTskDocTypeDtaColl` | `I_CnsldtnTskDocTypeDtaColl` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNTSK',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata: { 
    ignorePropagatedAnnotations:true,
    allowExtensions:true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S},
  representativeKey: 'ConsolidationTask',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE
                          ],
  sapObjectNodeType.name: 'ConsolidationTask'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Task'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnTask as 
  select from tf540
  
    association [1..1] to I_CnsldtnTaskCategory           as _CnsldtnTaskCategory         on $projection.ConsolidationTaskCategory = _CnsldtnTaskCategory.ConsolidationTaskCategory
    association [0..*] to I_CnsldtnTaskText               as _Text                        on $projection.ConsolidationTask = _Text.ConsolidationTask
    association [0..*] to I_CnsldtnTskDocTypeDtaColl      as _CnsldtnTskDocTypeDtaColl    on $projection.ConsolidationTask = _CnsldtnTskDocTypeDtaColl.ConsolidationTask
{
      @ObjectModel.text.association: '_Text'
      @Search:{
             defaultSearchElement: true,
             ranking: #HIGH,
             fuzzinessThreshold: 0.8
             }
  key cast( cacti as fincs_tsk preserving type )               as ConsolidationTask,
  
      @ObjectModel.foreignKey.association: '_CnsldtnTaskCategory'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTaskCategory'
      cast( cactt as fincs_taskcategory preserving type )      as ConsolidationTaskCategory,
      
      docval_active                                            as CnsldtnTskDocValdtnIsActive,

      curr_type                                                as CnsldtnBalValdtnCrcyCategory,
  
      _CnsldtnTaskCategory,
      _Text,
      _CnsldtnTskDocTypeDtaColl
} 
  where dimen = 'Y1'
```
