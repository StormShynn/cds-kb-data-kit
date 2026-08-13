---
name: C_MM_SUPLREVALOUTPSCORETYPEVH
description: "MM Suplrevaloutpscoretypevh"
semantic_vi: "View CDS MM Suplrevaloutpscoretypevh cung cấp hỗ trợ giá trị cho loại hành động đánh giá điểm số của nhà cung cấp, được sử dụng trong thành phần MM-PUR-ANA-2CL cho phân tích nguồn cung và mua sắm."
keywords:
  - "mm"
  - "mm-pur"
  - "mm-pur-ana"
  - "value-help"
  - "sourcing"
  - "procurement"
  - "supplier-evaluation"
  - "score-output-action-type"
  - "lob:sourcing & procurement"
  - "component:mm-pur-ana-2cl"
semantic_en: "The MM Suplrevaloutpscoretypevh CDS view provides a value help for supplier evaluation score output action types, which is used in the MM-PUR-ANA-2CL component for sourcing and procurement analysis."
app_component: MM-PUR-ANA-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - value-help
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_MM_SUPLREVALOUTPSCORETYPEVH

**MM Suplrevaloutpscoretypevh**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
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
| `SuplrEvalScoreOutputActionType` | ✓ | |  | `cast( SuplrEvalScoreOutputActionType as mmpur_ana_de_output_act_typ)` |  |  |
| `SuplrEvalScoreOutpActnTypeText` |  | |  | `_Text[1: Language = $session.system_language ].SuplrEvalScoreOutpActnTypeText` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSESOTPTYPVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #CONSUMPTION
@AbapCatalog.preserveKey:true
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@ObjectModel.semanticKey: ['SuplrEvalScoreOutputActionType']
@ObjectModel.representativeKey: 'SuplrEvalScoreOutputActionType'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Value Help for SE Output Score Type'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true 
define view C_MM_SuplrEvalOutpScoreTypeVH 

 as select from I_SuplrEvalOutputScoreType
{      
       @Search.ranking: #HIGH
       @ObjectModel.text.element: ['SuplrEvalScoreOutpActnTypeText']
       @Consumption.labelElement: 'SuplrEvalScoreOutpActnTypeText'
  key  cast( SuplrEvalScoreOutputActionType   as mmpur_ana_de_output_act_typ) as SuplrEvalScoreOutputActionType,

       @Semantics.text: true
       @Search: { defaultSearchElement: true, ranking: #LOW,  fuzzinessThreshold: 0.8   }
       _Text[1: Language = $session.system_language ].SuplrEvalScoreOutpActnTypeText                                   as SuplrEvalScoreOutpActnTypeText
}
```
