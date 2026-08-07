---
name: I_PRICINGACCESSFIELD
description: Pricingaccessfield
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
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
# I_PRICINGACCESSFIELD

**Pricingaccessfield**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConditionUsage` | ✓ | |  | `kvewe` |
| `ConditionApplication` | ✓ | |  | `kappl` |
| `AccessSequence` | ✓ | |  | `kozgf` |
| `AccessNumberOfAccessSequence` | ✓ | |  | `kolnr` |
| `ConditionTable` | ✓ | |  | `cast ( t682i.kotabnr as char03 )` |
| `PricingConditionField` | ✓ | |  | `zifna` |
| `PrcgCndnAccDocumentStructure` |  | |  | `qustr` |
| `PrcgCndnAccessDocumentField` |  | |  | `qufna` |
| `PrcgCndnAccConstantValueSource` |  | |  | `qudiw` |
| `PrcgCndnValueInitialIsAllowed` |  | |  | `kzini` |
| `PricingConditionAccessType` |  | |  | `fstst` |
| `PricingConditionAccessPriority` |  | |  | `mbwrt` |
| `PrcgConditionAccessDirection` |  | |  | `direction_hier_eval` |
| `PrcgCndnAccessDistanceValue` |  | |  | `dist_leaf_to_node_in_hlvls` |
| `_PricingAccess` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingAccess` | `I_PricingAccess` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNACCF'
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
@EndUserText.label: 'Field in Access for Pricing'
define view I_PricingAccessField
  as select from t682z
    inner join   t682i on  t682z.kvewe = t682i.kvewe
                       and t682z.kappl = t682i.kappl
                       and t682z.kozgf = t682i.kozgf
                       and t682z.kolnr = t682i.kolnr
  association [1..1] to I_PricingAccess as _PricingAccess on  $projection.ConditionUsage               = _PricingAccess.ConditionUsage
                                                          and $projection.ConditionApplication         = _PricingAccess.ConditionApplication
                                                          and $projection.AccessSequence               = _PricingAccess.AccessSequence
                                                          and $projection.AccessNumberOfAccessSequence = _PricingAccess.AccessNumberOfAccessSequence
{
  key t682z.kvewe                      as ConditionUsage,
  key t682z.kappl                      as ConditionApplication,
  key t682z.kozgf                      as AccessSequence,
  key t682z.kolnr                      as AccessNumberOfAccessSequence,
  key cast ( t682i.kotabnr as char03 ) as ConditionTable,
  key t682z.zifna                      as PricingConditionField,
      t682z.qustr                      as PrcgCndnAccDocumentStructure,
      t682z.qufna                      as PrcgCndnAccessDocumentField,
      t682z.qudiw                      as PrcgCndnAccConstantValueSource,
      t682z.kzini                      as PrcgCndnValueInitialIsAllowed,
      t682z.fstst                      as PricingConditionAccessType,
      t682z.mbwrt                      as PricingConditionAccessPriority,
      t682z.direction_hier_eval        as PrcgConditionAccessDirection,
      t682z.dist_leaf_to_node_in_hlvls as PrcgCndnAccessDistanceValue,
      _PricingAccess
}
where
  t682z.kvewe = 'A'
```
