---
name: I_BOPFORMITEMTEXT
description: "Bopformitemtext"
app_component: FI-LOC-FI
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - text-view
  - text
  - item-level
  - component:FI-LOC-FI
  - lob:Finance
---
# I_BOPFORMITEMTEXT

**Bopformitemtext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BOPRptgCntry` | ✓ | |  | `country` |  |  |
| `BOPForm` | ✓ | |  | `form` |  |  |
| `BOPFormItem` | ✓ | |  | `item` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `BOPFormItemDescription` |  | |  | `description` |  |  |
| `_BOPRptgCntry` | | ✓ | | | | |
| `_BOPForm` | | ✓ | | | | |
| `_BOPFormItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BOPRptgCntry` | `I_Country` | [1..1] |
| `_BOPForm` | `I_BOPForm` | [1..1] |
| `_BOPFormItem` | `I_BOPFormItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBOPITEMT' 
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@Search.searchable: true
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #B }
@ObjectModel.representativeKey: 'BOPFormItem'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@EndUserText.label: 'Balance of Payments Form Item - Text'
define view I_BOPFormItemText
as select from glo_t_bopitem_t 
  association [1..1] to I_Country as _BOPRptgCntry on $projection.BOPRptgCntry = _BOPRptgCntry.Country  
  association [1..1] to I_BOPForm as _BOPForm on $projection.BOPRptgCntry = _BOPForm.BOPRptgCntry
                                                     and $projection.BOPForm = _BOPForm.BOPForm
  association [1..1] to I_BOPFormItem as _BOPFormItem on $projection.BOPRptgCntry = _BOPFormItem.BOPRptgCntry
                                                     and $projection.BOPForm = _BOPFormItem.BOPForm
                                                     and $projection.BOPFormItem = _BOPFormItem.BOPFormItem
 {
  @ObjectModel.foreignKey.association: '_BOPRptgCntry' 
  key country as BOPRptgCntry,  
  @ObjectModel.foreignKey.association: '_BOPForm'  
  key form    as BOPForm,
  key item    as BOPFormItem,
  @Semantics.language: true
  key langu as Language,
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
      description as BOPFormItemDescription,
      _BOPFormItem,
      _BOPForm,
      _BOPRptgCntry
}
```
