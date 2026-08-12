---
name: I_IMPLIEDVOLATILITYIDENTIFIER
description: "Impliedvolatilityidentifier"
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
# I_IMPLIEDVOLATILITYIDENTIFIER

**Impliedvolatilityidentifier**

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
| `ImpliedVolatilityIdentifier` | ✓ | |  | `vname` |  |  |
| `_Text` | | ✓ | | | | |
| `_Profile_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ImpliedVolatilityIdentifierT` | [0..*] |
| `_Profile_2` | `I_VolatilityProfile_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IVOLATILITYID'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.preserveKey: true
@ObjectModel.representativeKey: 'ImpliedVolatilityIdentifier'
@Analytics.internalName:#LOCAL
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter:true
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Implied Volatility Identifier'
@ObjectModel.sapObjectNodeType.name: 'MarketDataVolatility'
define view I_ImpliedVolatilityIdentifier
  as select from atvo0 as ImpliedVolatilityIdentifier
  association [0..*] to I_ImpliedVolatilityIdentifierT as _Text      on $projection.ImpliedVolatilityIdentifier = _Text.ImpliedVolatilityIdentifier
  association [0..*] to I_VolatilityProfile_2          as _Profile_2 on $projection.ImpliedVolatilityIdentifier = _Profile_2.ImpliedVolatilityIdentifier

{
      //atvo0
      @ObjectModel.text.association: '_Text'
  key ImpliedVolatilityIdentifier.vname as ImpliedVolatilityIdentifier,
      _Profile_2,
      _Text
}
```
