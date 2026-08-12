---
name: I_CN_TAXINVCDEDUCTIONTYPE
description: "CN Taxinvcdeductiontype"
app_component: FI-LOC-TIM-CN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CN_TAXINVCDEDUCTIONTYPE

**CN Taxinvcdeductiontype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TIM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CN_TaxInvcDeductionType` | ✓ | |  |  |  |  |
| `StatusIsActive` |  | |  | `IsEnabled` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CN_TaxInvcDeductionTypeT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: { sqlViewName: 'ICNTXIDEDU', compiler.compareFilter: true }
@VDM: { viewType: #BASIC }
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@AccessControl.privilegedAssociations:  [ '_Text' ] 
@EndUserText.label: 'China Tax Invoice Deduction Type'
@ObjectModel: {
  representativeKey: 'CN_TaxInvcDeductionType',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #MASTER
  }
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'CN_ValueAddedTaxDeductionType'
@ObjectModel.dataCategory:#VALUE_HELP
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}

define view I_CN_TaxInvcDeductionType
  as select from P_CN_TaxInvcDeductionType as ded

  // FOREIGN KEYS
  association [0..*] to I_CN_TaxInvcDeductionTypeT as _Text on $projection.CN_TaxInvcDeductionType = _Text.CN_TaxInvcDeductionType

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key ded.CN_TaxInvcDeductionType,
      
      ded.IsEnabled as StatusIsActive,

      _Text
}
```
