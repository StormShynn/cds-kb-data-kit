---
name: I_BPCREDITSTANDINGTEXT
description: "Bpcreditstandingtext"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - credit
  - component:FS-BP
  - lob:Other
---
# I_BPCREDITSTANDINGTEXT

**Bpcreditstandingtext**

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
| `BusPartCreditStanding` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_solvncy )` |  |  |
| `BPCreditStandingDescription` |  | |  | `ddtext` |  |  |
| `_BPCreditStanding` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPCreditStanding` | `I_BPCreditStanding` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCRDTSTNDGTEXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusPartCreditStanding',
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
@EndUserText.label: 'Credit Standing of BP - Text'

/*+[hideWarning] { "IDS" :  [ "KEY_CHECK" ] } */
define view I_BPCreditStandingText

  as select from dd07t
  association [0..1] to I_BPCreditStanding as _BPCreditStanding on $projection.BusPartCreditStanding = _BPCreditStanding.BusPartCreditStanding
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.element: 'BPCreditStandingDescription'
      @ObjectModel.foreignKey.association: '_BPCreditStanding'
      
  key cast ( dd07t.domvalue_l as bp_solvncy ) as BusPartCreditStanding,
  
      @Semantics.text: true
      dd07t.ddtext     as BPCreditStandingDescription,
      
      _BPCreditStanding,
      _Language

}
where
      dd07t.domname  = 'BP_SOLVNCY'
  and dd07t.as4local = 'A'
```
