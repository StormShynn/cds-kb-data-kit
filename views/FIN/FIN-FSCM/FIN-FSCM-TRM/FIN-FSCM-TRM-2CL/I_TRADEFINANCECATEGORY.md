---
name: I_TRADEFINANCECATEGORY
description: Tradefinancecategory
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRADEFINANCECATEGORY

**Tradefinancecategory**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TradeFinanceCategory` | `cast(DomainValue.domvalue_l as ftr_tf_cat)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TradeFinanceCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITRDFINCAT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Trade Finance Category'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
    usageType : {
        sizeCategory: #S,
        serviceQuality: #A,
        dataClass: #MASTER
    },
    resultSet.sizeCategory: #XS,
    representativeKey:'TradeFinanceCategory',
    dataCategory:#VALUE_HELP,
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
}
@Analytics : {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true
  }
}
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@ObjectModel.sapObjectNodeType.name: 'TradeFinanceCategory'

define view I_TradeFinanceCategory 
  as select from dd07l  as DomainValue 
  association [0..*] to I_TradeFinanceCategoryText as _Text on $projection.TradeFinanceCategory = _Text.TradeFinanceCategory
{
      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefault.binding.usage: #FILTER_AND_RESULT
  key cast(DomainValue.domvalue_l as ftr_tf_cat) as TradeFinanceCategory,
  
  _Text
}
where
     DomainValue.domname  = 'FTR_TF_CAT'
 and DomainValue.as4local = 'A'
```
