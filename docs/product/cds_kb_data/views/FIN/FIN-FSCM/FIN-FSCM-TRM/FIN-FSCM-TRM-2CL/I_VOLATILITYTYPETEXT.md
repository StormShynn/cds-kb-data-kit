---
name: I_VOLATILITYTYPETEXT
description: "Volatilitytypetext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_VOLATILITYTYPETEXT

**Volatilitytypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `VolatilityType` | ✓ | |  | `volart` |  |  |
| `TextDescription` |  | |  | `xtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_VolatilityType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_VolatilityType` | `I_VolatilityType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IVOLTYPETXT'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@ObjectModel.representativeKey: 'VolatilityType'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Volatility Type - Text'
define view I_VolatilityTypeText
  as select from atvo2 as VolTypTxt
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
  association [1..1] to I_VolatilityType as _VolatilityType on $projection.VolatilityType = _VolatilityType.VolatilityType
{

      @Semantics.language: true
  key VolTypTxt.spras  as Language,
  key VolTypTxt.volart as VolatilityType,
      @Semantics.text: true
      xtext            as TextDescription,
      _Language,
      _VolatilityType
}
```
