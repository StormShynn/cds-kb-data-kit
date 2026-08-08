---
name: I_IMPLIEDVOLATILITYIDENTIFIERT
description: "Impliedvolatilityidentifiert"
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
# I_IMPLIEDVOLATILITYIDENTIFIERT

**Impliedvolatilityidentifiert**

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
| `ImpliedVolatilityIdentifier` | ✓ | |  | `vname` |  |  |
| `TextDescription` |  | |  | `lbez` |  |  |
| `_Language` | | ✓ | | | | |
| `_ImpliedVolatilityIdentifier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ImpliedVolatilityIdentifier` | `I_ImpliedVolatilityIdentifier` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IIMPVOLARNAMETXT'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ImpliedVolatilityIdentifier'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Implied Volatility Identifier - Text'
define view I_ImpliedVolatilityIdentifierT
  as select from atvo0t as VolarNameTxt
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language
  association [1..1] to I_ImpliedVolatilityIdentifier as _ImpliedVolatilityIdentifier on $projection.ImpliedVolatilityIdentifier = _ImpliedVolatilityIdentifier.ImpliedVolatilityIdentifier
{
      //VolNameTxt
      @Semantics.language: true
  key VolarNameTxt.spras as Language,
  key VolarNameTxt.vname as ImpliedVolatilityIdentifier,
      @Semantics.text: true
      lbez               as TextDescription,
      _Language,
      _ImpliedVolatilityIdentifier
}
```
