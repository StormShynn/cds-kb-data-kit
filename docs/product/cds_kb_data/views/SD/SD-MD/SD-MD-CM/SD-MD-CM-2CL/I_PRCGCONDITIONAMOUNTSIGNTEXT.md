---
name: I_PRCGCONDITIONAMOUNTSIGNTEXT
description: "Prcgconditionamountsigntext"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PRCGCONDITIONAMOUNTSIGNTEXT

**Prcgconditionamountsigntext**

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
| `PrcgConditionAmountSign` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as knega )` |  |  |
| `PricingConditionAmountSignText` |  | |  | `cast ( ddtext as val_text )` |  |  |
| `_PricingConditionAmountSign` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingConditionAmountSign` | `I_PricingConditionAmountSign` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGAMNTST'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Pricing Condition Amount Sign - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'PrcgConditionAmountSign'
@Metadata.ignorePropagatedAnnotations:true
define view I_PrcgConditionAmountSignText
  as select from dd07t
  association [0..1] to I_PricingConditionAmountSign as _PricingConditionAmountSign on $projection.PrcgConditionAmountSign = _PricingConditionAmountSign.PrcgConditionAmountSign
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                     as Language,

  key cast ( substring( domvalue_l, 1, 1 ) as knega ) as PrcgConditionAmountSign,
      @Semantics.text:true
      cast ( ddtext as val_text )                     as PricingConditionAmountSignText,
      _PricingConditionAmountSign,
      _Language
}
where
      domname  = 'KNEGA'
  and as4local = 'A'
  and as4vers  = '0000'
```
