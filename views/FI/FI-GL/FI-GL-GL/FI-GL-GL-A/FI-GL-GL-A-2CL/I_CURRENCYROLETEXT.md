---
name: I_CURRENCYROLETEXT
description: Currencyroletext
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - text-view
  - currency
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_CURRENCYROLETEXT

**Currencyroletext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyRole` | ✓ | |  | `curtype` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `CurrencyRoleName` |  | |  | `cast( name as fac_crcyrole_txt preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Currency Role - Text'
@VDM.viewType: #BASIC
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CurrencyRole'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IFICURRENCYROLET'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@AbapCatalog.preserveKey:true
@Search.searchable: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
define view I_CurrencyRoleText as select from finsc_curtypet
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key curtype as CurrencyRole,
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language:true
  key langu as Language, 
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8     
//  short_name as CurrencyRoleName,
  @Semantics.text:true
  cast( name as fac_crcyrole_txt preserving type ) as CurrencyRoleName,
  _Language
  }
```
