---
name: I_EXCHANGERATETYPETEXT
description: Exchange RateTYPETEXT
app_component: BC-SRV-BSF-CUR-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BSF
  - interface-view
  - text-view
  - exchange-rate
  - text
  - component:BC-SRV-BSF-CUR-2CL
  - lob:Basis Components
---
# I_EXCHANGERATETYPETEXT

**Exchange RateTYPETEXT**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BSF-CUR-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ExchangeRateType` | ✓ | |  | `kurst` |
| `Language` | ✓ | |  | `spras` |
| `ExchangeRateTypeName` |  | |  | `curvw` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Exchange Rate Type Text'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIEXCHRATETYPET'
@AbapCatalog.preserveKey: true
@ObjectModel.representativeKey: 'ExchangeRateType'
@ObjectModel.dataCategory: #TEXT  
@AbapCatalog.buffering.status: #ACTIVE         
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true  
@AbapCatalog.buffering.numberOfKeyFields: 1
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataExtraction.enabled: true}
@Search.searchable: true

define view I_ExchangeRateTypeText as select from tcurw
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key kurst as ExchangeRateType,
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key spras as Language,

  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  curvw as ExchangeRateTypeName,
    _Language
};
```
