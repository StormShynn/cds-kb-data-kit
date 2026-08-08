---
name: I_CREDITCONTROLAREATEXT
description: "Creditcontrolareatext"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - text-view
  - text
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CREDITCONTROLAREATEXT

**Creditcontrolareatext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditControlArea` | ✓ | |  | `cast(kkber as farp_kkber preserving type)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CreditControlAreaName` |  | |  | `kkbtx` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Credit Control Area - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICREDCONTAREAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CreditControlArea'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_CreditControlAreaText
  as select from t014t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast(kkber as farp_kkber preserving type) as CreditControlArea,
      @Semantics.language: true
  key spras                                     as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true      
      kkbtx                                     as CreditControlAreaName,
      _Language

};
```
