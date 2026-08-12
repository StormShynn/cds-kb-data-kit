---
name: I_OPTIONPUTCALLCODE
description: "Optionputcallcode"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_OPTIONPUTCALLCODE

**Optionputcallcode**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OptionPutCallCode` | ✓ | |  | `cast(domvalue_l as ti_sputcal)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OptionPutCallCodeText` | [0..*] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'IOPTPUTCALLCODE' 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@Analytics.internalName: #LOCAL 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Option Put Call Code'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OptionPutCallCode'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'OptionPutCallCode'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_OptionPutCallCode
  as select from dd07l

  association [0..*] to I_OptionPutCallCodeText as _Text on $projection.OptionPutCallCode = _Text.OptionPutCallCode

{
      @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as ti_sputcal) as OptionPutCallCode,
      _Text
}

where
      dd07l.domname  = 'T_SPUTCAL'
  and dd07l.as4local = 'A'
```
