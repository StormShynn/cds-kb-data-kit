---
name: I_CUSTOMSPREFERENCE
description: Customspreference
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
  - customs
  - component:FT-ITR-TRC
  - lob:Other
---
# I_CUSTOMSPREFERENCE

**Customspreference**

| Property | Value |
|---|---|
| App Component | `FT-ITR-TRC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomsPreference` | ✓ | |  | `cast(domvalue_l as prefe)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustomsPreferenceText` | [1..*] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.viewEnhancementCategory: [#NONE]

@EndUserText.label: 'Trade Preference Indicator'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}

@ObjectModel.representativeKey: 'CustomsPreference'

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]
@ObjectModel.modelingPattern:#NONE
                                        
define view entity I_CustomsPreference
  as select from dd07l
  association [1..*] to I_CustomsPreferenceText as _Text on $projection.CustomsPreference = _Text.CustomsPreference
{
  @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as prefe) as CustomsPreference,

  _Text
}
where
  domname = 'PREFE'
 and as4local = 'A'
```
