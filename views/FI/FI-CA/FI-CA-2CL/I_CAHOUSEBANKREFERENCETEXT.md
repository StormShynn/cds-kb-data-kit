---
name: I_CAHOUSEBANKREFERENCETEXT
description: Cahousebankreferencetext
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
  - text-view
  - bank
  - text
  - component:FI-CA-2CL
  - lob:Finance
  - bo:Bank
---
# I_CAHOUSEBANKREFERENCETEXT

**Cahousebankreferencetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAPaymentCompanyCode` | ✓ | |  | `bukrs` |  |  |
| `CAHouseBankReference` | ✓ | |  | `eigbv` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CAHouseBankReferenceName` |  | |  | `txt50` |  |  |
| `_Language` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'House Bank Reference - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAHouseBankReference',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAHouseBankReferenceText
  as select from tfk042ht

  association [0..1] to I_Language    as _Language on $projection.Language = _Language.Language
  association [0..1] to I_CompanyCode as _CompCode on $projection.CAPaymentCompanyCode = _CompCode.CompanyCode

{
      @ObjectModel.foreignKey.association: '_CompCode'
  key bukrs as CAPaymentCompanyCode,
  key eigbv as CAHouseBankReference,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text
      txt50 as CAHouseBankReferenceName,

      _Language,
      _CompCode
}
```
