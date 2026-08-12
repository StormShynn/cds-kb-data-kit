---
name: I_CN_TAXINVCTYPE
description: "CN Taxinvctype"
app_component: FI-LOC-TIM-CN
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
  - FI-LOC-TIM
  - interface-view
  - tax
  - component:FI-LOC-TIM-CN
  - lob:Finance
---
# I_CN_TAXINVCTYPE

**CN Taxinvctype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TIM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CN_TaxInvcType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CN_TaxInvcTypeT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ICNTXITYPE'
@AbapCatalog.compiler.compareFilter: true
@VDM: { viewType: #BASIC }
@ObjectModel: {
  representativeKey: 'CN_TaxInvcType',
  usageType: {
    sizeCategory: #S,
    dataClass:  #CUSTOMIZING,
    serviceQuality: #A
  }
}
@ObjectModel.sapObjectNodeType.name: 'CN_ValueAddedTaxInvoiceType'
@ObjectModel.dataCategory:#VALUE_HELP
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@AccessControl.privilegedAssociations:  [ '_Text' ] 
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'CN Tax Invoice Type'

define view I_CN_TaxInvcType
  as select from P_CN_TaxInvcType as type
  association [0..*] to I_CN_TaxInvcTypeT as _Text on $projection.CN_TaxInvcType = _Text.CN_TaxInvcType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key type.CN_TaxInvcType,

      _Text

}
```
