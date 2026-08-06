---
name: I_ASSETACCTDETERMINATIONTEXT
description: Assetacctdeterminationtext
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
# I_ASSETACCTDETERMINATIONTEXT

**Assetacctdeterminationtext**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AssetAccountDetermination` | `gl_account_det` |
| key `Language` | `language` |
| `AssetAccountDeterminationDesc` | `description_short` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETACCTDETT', preserveKey: true}
@EndUserText.label: 'Asset Account Determination - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetAccountDetermination',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetAcctDeterminationText
  as select from faac_acctdet0_t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key gl_account_det as AssetAccountDetermination,
      @Semantics.language:true
  key language as Language,
      @Semantics.text: true
      description_short as AssetAccountDeterminationDesc,

      _Language
}
```
