---
name: I_BPCRDTSTANDINGSTATUSTEXT
description: "Bpcrdtstandingstatustext"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
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
