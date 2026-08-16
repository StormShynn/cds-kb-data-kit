---
name: I_BPCRDTSTANDINGSTATUSTEXT
description: "Bpcrdtstandingstatustext"
semantic_vi: "View BPCreditStandingStatusText cung cấp các mô tả văn bản cho trạng thái tín dụng trong SAP Financial Supply Chain Management, hữu ích khi hiển thị hoặc báo cáo thông tin trạng thái tín dụng."
keywords:
  - "credit standing"
  - "tín dụng"
  - "financial supply chain management"
  - "sap fs-bp"
  - "bpcrdtstandingstatustext"
  - "trạng thái tín dụng"
  - "sap financial supply chain management"
  - "fs-bp"
  - "interface view"
  - "text view"
  - "sap"
semantic_en: "The BPCreditStandingStatusText view provides text descriptions for credit standing statuses in SAP Financial Supply Chain Management, useful when displaying or reporting on credit standing status information."
app_component: FS-BP
software_component: SAP_BASIS
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
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - status
  - component:FS-BP
  - lob:Other
---
# I_BPCRDTSTANDINGSTATUSTEXT

**Bpcrdtstandingstatustext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BPCreditStandingStatus` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_sol_inf )` |  |  |
| `BPCreditStandingStatusDesc` |  | |  | `ddtext` |  |  |
| `_BPCreditStandingStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPCreditStandingStatus` | `I_BPCreditStandingStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTSTATUSTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPCreditStandingStatus',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY
                                        ],   
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT                
              }
@Analytics.dataExtraction.enabled: true              
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Credit Standing Status of BP - Text'

/*+[hideWarning] { "IDS" :  [ "KEY_CHECK" ] } */
define view I_BPCrdtStandingStatusText

  as select from dd07t
  association [0..1] to I_BPCreditStandingStatus as _BPCreditStandingStatus on $projection.BPCreditStandingStatus = _BPCreditStandingStatus.BPCreditStandingStatus
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                         as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.element: 'BPCreditStandingStatusDesc'
      @ObjectModel.foreignKey.association: '_BPCreditStandingStatus'
  key cast ( dd07t.domvalue_l as bp_sol_inf )                  as BPCreditStandingStatus,
        
      @Semantics.text: true
      dd07t.ddtext                                             as BPCreditStandingStatusDesc,
      _BPCreditStandingStatus,
      _Language

}
where
      dd07t.domname  = 'BP_SOL_INF'
  and dd07t.as4local = 'A'
```
