---
name: I_PRCGDTEIDNCODETEXT
description: "Prcgdteidncodetext"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PRCGDTEIDNCODETEXT

**Prcgdteidncodetext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `PricingDateIdentificationCode` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kprdt )` |  |  |
| `PrcgDateIdentificationCodeText` |  | |  | `cast ( ddtext as val_text )` |  |  |
| `_PrcgDateIdentificationCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrcgDateIdentificationCode` | `I_PrcgDateIdentificationCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGDIDCDT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Condition Pricing date - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'PricingDateIdentificationCode'
@Metadata.ignorePropagatedAnnotations:true
define view I_PrcgDteIdnCodeText
  as select from dd07t
  association [0..1] to I_PrcgDateIdentificationCode as _PrcgDateIdentificationCode on $projection.PricingDateIdentificationCode = _PrcgDateIdentificationCode.PricingDateIdentificationCode
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                     as Language,

  key cast ( substring( domvalue_l, 1, 1 ) as kprdt ) as PricingDateIdentificationCode,
      @Semantics.text:true
      cast ( ddtext as val_text )                     as PrcgDateIdentificationCodeText,
      _PrcgDateIdentificationCode,
      _Language
}
where
      domname  = 'KPRDT'
  and as4local = 'A'
  and as4vers  = '0000'
```
