---
name: I_CAOTHERTAXCODETEXT
description: "Caothertaxcodetext"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - tax
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAOTHERTAXCODETEXT

**Caothertaxcodetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land` |  |  |
| `CAOtherTaxCode` | ✓ | |  | `strkz` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CAOtherTaxCodeName` |  | |  | `strkz_txt` |  |  |
| `_Country` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Other Tax Code - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAOtherTaxCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAOtherTaxCodeText
  as select from tfk007ft

  association [0..1] to I_Country  as _Country  on $projection.Country = _Country.Country
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Country'
  key land      as Country,
  key strkz     as CAOtherTaxCode,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras     as Language,

      @Semantics.text
      strkz_txt as CAOtherTaxCodeName,

      _Country,
      _Language

}
```
