---
name: I_CN_TAXINPTVATCAT
description: CN Taxinptvatcat
app_component: FI-LOC-TIM-CN
software_component: SAPSCORE
release_state: released
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
# I_CN_TAXINPTVATCAT

**CN Taxinptvatcat**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TIM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TaxCategory` | ✓ | |  |  |
| `TaxRate` |  | |  |  |
| `IsDeleted` |  | |  |  |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CN_TaxInptVATCatT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ICNTXIIPTVATCAT'
@AbapCatalog.compiler.compareFilter: true
@VDM: { viewType: #BASIC }
@ObjectModel: {
  representativeKey: 'TaxCategory',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  }
}
@ObjectModel.sapObjectNodeType.name: 'CN_ValueAddedTaxInvoiceCat'
@ObjectModel.dataCategory:#VALUE_HELP
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
//@AccessControl.privilegedAssociations:  [ '_Text' ] 
@EndUserText.label: 'China Input VAT Category'

define view I_CN_TaxInptVATCat
  as select from P_CN_TaxInptVATCat as category
  association [0..*] to I_CN_TaxInptVATCatT as _Text on $projection.TaxCategory = _Text.TaxCategory
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key TaxCategory,
      TaxRate,

      IsDeleted,

      _Text
}
```
