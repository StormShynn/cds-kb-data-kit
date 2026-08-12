---
name: I_REVALUATIONCONDITIONGRPTEXT
description: "Revaluationconditiongrptext"
app_component: RE-FX-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
