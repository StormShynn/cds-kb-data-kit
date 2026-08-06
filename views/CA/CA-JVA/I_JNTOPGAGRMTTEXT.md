---
name: I_JNTOPGAGRMTTEXT
description: Jntopgagrmttext
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - text-view
  - text
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTOPGAGRMTTEXT

**Jntopgagrmttext**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `bukrs` |
| key `Language` | `spras` |
| key `JntOpgAgrmt` | `joa` |
| `JntOpgAgrmtText` | `jtext` |
| `JntOpgAgrmtLongText` | `ltext` |
| `_Language` | *Association* |
| `_CompanyCode` | *Association* |
| `_JntOpgAgrmt` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmt` | `I_JntOpgAgrmt` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJOAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled:true }
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  dataClass: #MASTER,
  sizeCategory: #L,
  serviceQuality: #D }
@ObjectModel.dataCategory: #TEXT
@ObjectModel: { supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION }
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'JntOpgAgrmt'
@EndUserText.label: 'Joint Operating Agreement - Text'


define view I_JntOpgAgrmtText
  as select from t8jut
  association [0..1] to I_Language    as _Language    on  $projection.Language = _Language.Language
  association [1..1] to I_CompanyCode as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JntOpgAgrmt as _JntOpgAgrmt on  $projection.CompanyCode = _JntOpgAgrmt.CompanyCode
                                                      and $projection.JntOpgAgrmt = _JntOpgAgrmt.JntOpgAgrmt
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs           as CompanyCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
      @UI.hidden: true
  key spras           as Language,
      @ObjectModel.foreignKey.association: '_JntOpgAgrmt'
      @ObjectModel.text.element: ['JntOpgAgrmtText']
  key joa             as JntOpgAgrmt,
      @Semantics.text: true
      jtext           as JntOpgAgrmtText,
      ltext           as JntOpgAgrmtLongText,
      _CompanyCode,
      _Language,
      _JntOpgAgrmt
}
```
