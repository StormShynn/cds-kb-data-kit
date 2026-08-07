---
name: I_PRICINGSCALEBASISSHORTTEXT
description: Pricingscalebasisshorttext
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PRICINGSCALEBASISSHORTTEXT

**Pricingscalebasisshorttext**

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
| `PricingScaleBasisShort` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kzbzg )` |  |  |
| `PricingScaleBasisName` |  | |  | `cast ( ddtext as val_text )` |  |  |
| `_PricingScaleBasisShort` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingScaleBasisShort` | `I_PricingScaleBasisShort` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGSCALEBST'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Pricing Scale Type - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'PricingScaleBasisShort'
@Metadata.ignorePropagatedAnnotations:true
define view I_PricingScaleBasisShortText
  as select from dd07t
  association [0..1] to I_PricingScaleBasisShort as _PricingScaleBasisShort on $projection.PricingScaleBasisShort = _PricingScaleBasisShort.PricingScaleBasisShort
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                     as Language,
      @ObjectModel.foreignKey.association: '_PricingScaleBasisShort'
  key cast ( substring( domvalue_l, 1, 1 ) as kzbzg ) as PricingScaleBasisShort,
      @Semantics.text:true
      cast ( ddtext as val_text )                     as PricingScaleBasisName,
      _PricingScaleBasisShort,
      _Language
}
where
      domname  = 'KZBZG'
  and as4local = 'A'
  and as4vers  = '0000'
```
