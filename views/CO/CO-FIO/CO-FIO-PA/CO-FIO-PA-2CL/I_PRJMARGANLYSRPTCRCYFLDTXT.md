---
name: I_PRJMARGANLYSRPTCRCYFLDTXT
description: Prjmarganlysrptcrcyfldtxt
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - interface-view
  - component:CO-FIO-PA-2CL
  - lob:Controlling
---
# I_PRJMARGANLYSRPTCRCYFLDTXT

**Prjmarganlysrptcrcyfldtxt**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `CurrencyField` | ✓ | |  | `cast( dd07t.domvalue_l as fis_crcy_role_field )` |  |  |
| `CurrencyFieldName` |  | |  | `cast( dd07t.ddtext as fis_crcy_role_field_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Currency Field - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
}
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CurrencyField'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT]
                                     
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.internalName:#LOCAL 

define view entity I_PrjMargAnlysRptCrcyFldTxt as select from dd07t

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
  key cast( dd07t.domvalue_l as fis_crcy_role_field ) as CurrencyField,
  @Semantics.text: true
  cast( dd07t.ddtext as fis_crcy_role_field_text preserving type ) as CurrencyFieldName,
  _Language
  
}
where dd07t.domname = 'FIS_REP_CRCY_ROLE_FIELD' and dd07t.as4local = 'A';
```
