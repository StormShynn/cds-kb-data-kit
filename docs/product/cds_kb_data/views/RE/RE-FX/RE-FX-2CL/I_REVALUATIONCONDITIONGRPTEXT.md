---
name: I_REVALUATIONCONDITIONGRPTEXT
description: "Revaluationconditiongrptext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_REVALUATIONCONDITIONGRPTEXT

**Revaluationconditiongrptext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `REValuationConditionGroup` | ✓ | |  | `cdgroup` |  |  |
| `REValuationConditionGroupName` |  | |  | `xcdgroup` |  |  |
| `_REValuationConditionGrp` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REValuationConditionGrp` | `I_REValuationConditionGrp` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'REVALCNDGRPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'RE Valuation Condition Group - Text'
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'IREVALCNDGRPT'
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REValuationConditionGroup',
  semanticKey: ['REValuationConditionGroup'],
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT, 
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REValuationConditionGroupText'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType:#BASIC
define view entity I_REValuationConditionGrpText
  as select from tivcecdgrpt
  association [0..1] to I_REValuationConditionGrp as _REValuationConditionGrp on $projection.REValuationConditionGroup = _REValuationConditionGrp.REValuationConditionGroup
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras    as Language,
      @ObjectModel.foreignKey.association: '_REValuationConditionGrp'
  key cdgroup  as REValuationConditionGroup,
      @Semantics.text: true
      xcdgroup as REValuationConditionGroupName,

      _REValuationConditionGrp,
      _Language
}
```
