---
name: I_BPCREDITRATINGAGENCYTEXT
description: Bpcreditratingagencytext
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
  - credit
  - component:FS-BP
  - lob:Other
---
# I_BPCREDITRATINGAGENCYTEXT

**Bpcreditratingagencytext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `CreditRatingAgency` | ✓ | |  | `sol_ins` |  |  |
| `CreditRatingAgencyName` |  | |  | `xsolv` |  |  |
| `_BPCreditRatingAgency` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPCreditRatingAgency` | `I_BPCreditRatingAgency` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATGAGCYTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'CreditRatingAgency',
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
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Rating Agency of BP - Text'

define view I_BPCreditRatingAgencyText   
  as select from tp07t
  association [0..1] to I_BPCreditRatingAgency   as _BPCreditRatingAgency   on $projection.CreditRatingAgency = _BPCreditRatingAgency.CreditRatingAgency
  association [0..1] to I_Language               as _Language               on $projection.Language           = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tp07t.langu   as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPCreditRatingAgency'
  key tp07t.sol_ins as CreditRatingAgency,
  
      @Semantics.text: true
      tp07t.xsolv   as CreditRatingAgencyName,
      
      _BPCreditRatingAgency,
      _Language      
}
```
