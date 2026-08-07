---
name: I_DUNNINGKEY
description: Dunningkey
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
  - component:FI-AR-AR-C-2CL
  - lob:Finance
---
# I_DUNNINGKEY

**Dunningkey**

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
| `MaximumDunningLevel` |  | |  | `cast(maxst as maxst)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DunningKeyText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Dunning Key'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IFIDUNKEY'
//@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.representativeKey: 'DunningKey'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'DunningKey'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
//@ObjectModel.sapObjectNodeType.name: 'DunningKey'
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
        }
define view I_DunningKey
  as select from t040
  association [0..*] to I_DunningKeyText as _Text on $projection.DunningKey = _Text.DunningKey
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key cast( mschl as farp_mschl ) as DunningKey,

      @Consumption: { filter: { hidden: true } }
      cast(maxst as maxst)        as MaximumDunningLevel,

      _Text


};
```
