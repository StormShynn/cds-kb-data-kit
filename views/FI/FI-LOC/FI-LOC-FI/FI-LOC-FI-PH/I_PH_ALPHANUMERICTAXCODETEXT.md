---
name: I_PH_ALPHANUMERICTAXCODETEXT
description: PH Alphanumerictaxcodetext
app_component: FI-LOC-FI-PH
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - text-view
  - tax
  - text
  - component:FI-LOC-FI-PH
  - lob:Finance
---
# I_PH_ALPHANUMERICTAXCODETEXT

**PH Alphanumerictaxcodetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-PH` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Country` | ✓ | |  | `country` |
| `AlphanumericTaxCode` | ✓ | |  | `fiph_atc` |
| `Language` | ✓ | |  | `langu` |
| `IndustryKeyText` |  | |  | `description` |
| `_Country` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl:{authorizationCheck: #NOT_REQUIRED, personalData.blocking: #NOT_REQUIRED}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API 
@AbapCatalog: {sqlViewName: 'IPHATCCTEXT', compiler.compareFilter: true, preserveKey:true }
@ObjectModel: {dataCategory: #TEXT, representativeKey: 'AlphanumericTaxCode', usageType.sizeCategory: #S, 
               usageType.dataClass: #CUSTOMIZING, usageType.serviceQuality: #A,
               supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]}
@EndUserText.label: 'Philippines Alphanumeric Tax Code - Text'
define view I_PH_AlphanumericTaxCodeText
  as select from fiph_atc_codet
  association [0..1] to I_Country  as _Country  on $projection.Country = _Country.Country
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Country'
  key country     as Country,
  key fiph_atc    as AlphanumericTaxCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language:true
  key langu       as Language,

      @Semantics.text: true
      description as IndustryKeyText,
      _Country,
      _Language
}
```
