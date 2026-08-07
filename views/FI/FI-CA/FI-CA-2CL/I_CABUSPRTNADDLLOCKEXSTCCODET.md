---
name: I_CABUSPRTNADDLLOCKEXSTCCODET
description: "Cabusprtnaddllockexstccodet"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CABUSPRTNADDLLOCKEXSTCCODET

**Cabusprtnaddllockexstccodet**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABusPartnerAddlLockExstcCode` | ✓ | |  | `cast( left( dd07t.domvalue_l, 1 ) as bpl_xaddl_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `CABusPrtnAddlLockExstcCodeText` |  | |  | `cast( ddtext as bpl_xaddl_text_kk preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName : 'ICABPADDLOCKECT'

@EndUserText.label: 'BP Additional Lock Existence Code - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CABusPartnerAddlLockExstcCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusPrtnAddlLockExstcCodeT
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( dd07t.domvalue_l, 1 ) as bpl_xaddl_kk preserving type ) as CABusPartnerAddlLockExstcCode,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                         as Language,
      @Semantics.text
      cast( ddtext as bpl_xaddl_text_kk preserving type )                 as CABusPrtnAddlLockExstcCodeText,

      _Language
}
where
      domname  = 'BPL_XADDL_KK'
  and as4local = 'A'
```
