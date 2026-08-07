---
name: I_TRDPREFSTMNTINTORIGINCODE
description: Trdprefstmntintorigincode
app_component: FT-ITR-TRC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FT
  - FT-ITR
  - FT-ITR-TRC
  - interface-view
  - component:FT-ITR-TRC
  - lob:Other
---
# I_TRDPREFSTMNTINTORIGINCODE

**Trdprefstmntintorigincode**

| Property | Value |
|---|---|
| App Component | `FT-ITR-TRC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdPrefStmntInternalOriginCode` | ✓ | |  | `cast(domvalue_l as /sapsll/prene_r3)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TrdPrefStmntIntOriginCodeTxt` | [1..*] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.viewEnhancementCategory: [#NONE]

@EndUserText.label: 'Preference Internal Origin Code' 
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}

@ObjectModel.representativeKey: 'TrdPrefStmntInternalOriginCode'

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]
@ObjectModel.modelingPattern:#NONE

                                        
define view entity I_TrdPrefStmntIntOriginCode
  as select from dd07l
  association [1..*] to I_TrdPrefStmntIntOriginCodeTxt as _Text on $projection.TrdPrefStmntInternalOriginCode = _Text.TrdPrefStmntInternalOriginCode
{
  @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as /sapsll/prene_r3) as TrdPrefStmntInternalOriginCode,

  _Text
}
where
  domname = '/SAPSLL/PRENE_R3'
 and as4local = 'A'
```
