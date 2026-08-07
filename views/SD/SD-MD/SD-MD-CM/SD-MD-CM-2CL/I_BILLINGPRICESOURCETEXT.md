---
name: I_BILLINGPRICESOURCETEXT
description: Billingpricesourcetext
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
  - billing
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPRICESOURCETEXT

**Billingpricesourcetext**

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
| `BillingPriceSource` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as prsqu1 )` |  |  |
| `BillingPriceSourceName` |  | |  | `cast ( ddtext as price_element_price_srce_descr )` |  |  |
| `_BillingPriceSource` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingPriceSource` | `I_BillingPriceSource` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBILLGPRICESRCET'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Billing Price Source - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'BillingPriceSource'
@Metadata.ignorePropagatedAnnotations:true 
define view I_BillingPriceSourceText
  as select from dd07t
  association [0..1] to I_BillingPriceSource as _BillingPriceSource on $projection.BillingPriceSource = _BillingPriceSource.BillingPriceSource
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                       as Language,
      @ObjectModel.foreignKey.association: '_BillingPriceSource'
  key cast ( substring( domvalue_l, 1, 1 ) as prsqu1 )  as BillingPriceSource,
      @Semantics.text:true
      cast ( ddtext as price_element_price_srce_descr ) as BillingPriceSourceName,
      _BillingPriceSource,
      _Language
}
where
      domname  = 'PRSQU'
  and as4local = 'A'
```
