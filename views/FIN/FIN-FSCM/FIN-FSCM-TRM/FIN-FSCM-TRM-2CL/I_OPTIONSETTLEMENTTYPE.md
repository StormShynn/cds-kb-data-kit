---
name: I_OPTIONSETTLEMENTTYPE
description: Optionsettlementtype
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
# I_OPTIONSETTLEMENTTYPE

**Optionsettlementtype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `OptionSettlementType` | `cast(DomainValue.domvalue_l as option_settlement_type)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OptionSettlementTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IOPTIONSETTYPE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Option settlement type'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
    usageType : {
        sizeCategory: #S,
        serviceQuality: #X,
        dataClass: #MIXED
    },
    resultSet.sizeCategory: #XS,
    representativeKey:'OptionSettlementType',
    dataCategory:#VALUE_HELP 
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Analytics : {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
        enabled: true
  }
}
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@ObjectModel.sapObjectNodeType.name: 'FinTransOptionSettlementType'

define view I_OptionSettlementType 
  as select from dd07l  as DomainValue 
  association [0..*] to I_OptionSettlementTypeText as _Text on $projection.OptionSettlementType = _Text.OptionSettlementType
{
      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefault.binding.usage: #FILTER_AND_RESULT
  key cast(DomainValue.domvalue_l as option_settlement_type) as OptionSettlementType,
  
  _Text
}
where
     DomainValue.domname  = 'T_SETTLFL'
 and DomainValue.as4local = 'A'
```
