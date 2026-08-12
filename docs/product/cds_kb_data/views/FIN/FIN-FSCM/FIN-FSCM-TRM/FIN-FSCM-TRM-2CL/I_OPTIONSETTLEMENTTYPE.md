---
name: I_OPTIONSETTLEMENTTYPE
description: "Optionsettlementtype"
app_component: FIN-FSCM-TRM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OptionSettlementType` | ✓ | |  | `cast(DomainValue.domvalue_l as option_settlement_type)` |  |  |
| `_Text` | | ✓ | | | | |

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
