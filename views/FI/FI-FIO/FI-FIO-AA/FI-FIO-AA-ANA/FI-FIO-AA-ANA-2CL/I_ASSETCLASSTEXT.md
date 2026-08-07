---
name: I_ASSETCLASSTEXT
description: Assetclasstext
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - text-view
  - text
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETCLASSTEXT

**Assetclasstext**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AssetClass` | ✓ | |  | `asset_class` |
| `Language` | ✓ | |  | `language` |
| `AssetClassName` |  | |  | `cast(description_short as faa_asset_class_name )` |
| `AssetClassDescription` |  | |  | `description_long` |
| `AssetAuthorizationContext` |  | |  | `cast('NEW' as faa_authcntxt)` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETCLASST', preserveKey: true}
@EndUserText.label: 'Asset Class - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetClass',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AssetClassText
  as select from faac_acls0_t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key asset_class                  as AssetClass,
      @Semantics.language: true
  key language                     as Language,

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(description_short as faa_asset_class_name ) as AssetClassName,
      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      description_long             as AssetClassDescription,

      @Consumption.hidden: true
      @VDM.lifecycle.status: #DEPRECATED
      cast('NEW' as faa_authcntxt) as AssetAuthorizationContext, //Needed for DCL

      _Language
}
```
