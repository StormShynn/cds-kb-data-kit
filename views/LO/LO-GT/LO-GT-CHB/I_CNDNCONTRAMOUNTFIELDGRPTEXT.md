---
name: I_CNDNCONTRAMOUNTFIELDGRPTEXT
description: "Cndncontramountfieldgrptext"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - text-view
  - text
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRAMOUNTFIELDGRPTEXT

**Cndncontramountfieldgrptext**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `AmountFieldGroup` | ✓ | |  | `af_group` |  |  |
| `AmountFieldGroupDesc` |  | |  | `cast( wb2_c_af_groupt.text as wb2_amount_fields_group_txt preserving type )` |  |  |
| `_AmountFieldGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AmountFieldGroup` | `I_CndnContrAmountFieldGrp` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Amount Field Group - Text'
@ObjectModel: {
    dataCategory:           #TEXT,
    representativeKey:      'AmountFieldGroup',
    modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #EXTRACTION_DATA_SOURCE],
    usageType: {
      dataClass:      #CUSTOMIZING,
      serviceQuality: #A,
      sizeCategory:   #S
      }
    }
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ICCAMTFLDGRPT'
}
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata.ignorePropagatedAnnotations: true
define root view entity I_CndnContrAmountFieldGrpText
  as select from wb2_c_af_groupt
  association [0..1] to I_CndnContrAmountFieldGrp as _AmountFieldGroup on $projection.AmountFieldGroup = _AmountFieldGroup.AmountFieldGroup
  association [0..1] to I_Language                as _Language         on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key wb2_c_af_groupt.spras                                                       as Language,
      @ObjectModel.foreignKey.association: '_AmountFieldGroup'
  key wb2_c_af_groupt.af_group                                                    as AmountFieldGroup,

      @Semantics.text: true
      cast( wb2_c_af_groupt.text as wb2_amount_fields_group_txt preserving type ) as AmountFieldGroupDesc,

      /* Associations */
      _AmountFieldGroup,
      _Language
}
```
