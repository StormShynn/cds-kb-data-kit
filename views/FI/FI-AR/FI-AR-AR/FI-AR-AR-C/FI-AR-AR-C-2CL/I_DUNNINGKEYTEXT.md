---
name: I_DUNNINGKEYTEXT
description: Dunningkeytext
app_component: FI-AR-AR-C-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-AR
  - interface-view
  - text-view
  - text
  - component:FI-AR-AR-C-2CL
  - lob:Finance
---
# I_DUNNINGKEYTEXT

**Dunningkeytext**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DunningKey` | ✓ | |  | `cast( mschl as farp_mschl )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaximumDunningLevelDescription` |  | |  | `cast( text1 as farp_text1_040a )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Dunning Key - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIDUNKEYT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DunningKey'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_DunningKeyText
  as select from t040a
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key cast( mschl as farp_mschl )      as DunningKey,
      @Semantics.language: true
  key spras                            as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true       
      cast( text1 as farp_text1_040a ) as MaximumDunningLevelDescription,
      _Language
}
```
