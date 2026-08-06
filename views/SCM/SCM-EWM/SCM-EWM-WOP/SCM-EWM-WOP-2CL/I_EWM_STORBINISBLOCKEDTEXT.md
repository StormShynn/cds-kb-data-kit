---
name: I_EWM_STORBINISBLOCKEDTEXT
description: Ewm Storbinisblockedtext
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - text-view
  - text
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_STORBINISBLOCKEDTEXT

**Ewm Storbinisblockedtext**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `ddlanguage` |
| key `EWMStorBinIsBlocked` | `cast ( substring( dd07t.domvalue_l, 1, 1 ) as ewm_de_storbinisblocked preserving type )` |
| `EWMStorageBinBlockedDesc` | `cast( ddtext as ewm_de_storbinblockeddesc preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Storage Bin Is Blocked Indicator - Txt'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'EWMStorBinIsBlocked'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #S}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ] 
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                   
define view entity I_EWM_StorBinIsBlockedText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                              as Language,
  key cast ( substring( dd07t.domvalue_l, 1, 1 ) as ewm_de_storbinisblocked preserving type ) as EWMStorBinIsBlocked,
      @Semantics.text: true
      cast( ddtext as ewm_de_storbinblockeddesc preserving type )                             as EWMStorageBinBlockedDesc,

      /* Associations */
      _Language
}
where
      domname  = 'XFELD'
  and as4local = 'A';
```
