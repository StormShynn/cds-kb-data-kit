---
name: I_PRICINGACCESS
description: "Pricingaccess"
app_component: SD-MD-CM-2CL
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
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PRICINGACCESS

**Pricingaccess**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
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
| `ConditionUsage` | ✓ | |  | `kvewe` |  |  |
| `ConditionApplication` | ✓ | |  | `kappl` |  |  |
| `AccessSequence` | ✓ | |  | `kozgf` |  |  |
| `AccessNumberOfAccessSequence` | ✓ | |  | `kolnr` |  |  |
| `ConditionTable` |  | |  | `cast ( kotabnr as char03 )` |  |  |
| `ConditionRequirement` |  | |  | `kobed` |  |  |
| `PrcgConditionAccessIsExclusive` |  | |  | `kzexl` |  |  |
| `_PricingAccessSequence` | | ✓ | | | | |
| `_PricingAccessField` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingAccessSequence` | `I_PricingAccessSequence` | [1..1] |
| `_PricingAccessField` | `I_PricingAccessField` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNACC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@EndUserText.label: 'Access for Pricing'
define view I_PricingAccess
  as select from t682i
  association [1..1] to I_PricingAccessSequence as _PricingAccessSequence on  $projection.ConditionUsage       = _PricingAccessSequence.ConditionUsage
                                                                          and $projection.ConditionApplication = _PricingAccessSequence.ConditionApplication
                                                                          and $projection.AccessSequence       = _PricingAccessSequence.AccessSequence
  association [0..*] to I_PricingAccessField    as _PricingAccessField    on  $projection.ConditionUsage               = _PricingAccessField.ConditionUsage
                                                                          and $projection.ConditionApplication         = _PricingAccessField.ConditionApplication
                                                                          and $projection.AccessSequence               = _PricingAccessField.AccessSequence
                                                                          and $projection.AccessNumberOfAccessSequence = _PricingAccessField.AccessNumberOfAccessSequence


{
  key kvewe                      as ConditionUsage,
  key kappl                      as ConditionApplication,
  key kozgf                      as AccessSequence,
  key kolnr                      as AccessNumberOfAccessSequence,
      cast ( kotabnr as char03 ) as ConditionTable,
      kobed                      as ConditionRequirement,
      kzexl                      as PrcgConditionAccessIsExclusive,
      _PricingAccessSequence,
      _PricingAccessField
}
where
  kvewe = 'A'
```
