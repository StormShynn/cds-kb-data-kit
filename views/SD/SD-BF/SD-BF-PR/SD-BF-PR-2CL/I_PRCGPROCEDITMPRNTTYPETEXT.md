---
name: I_PRCGPROCEDITMPRNTTYPETEXT
description: Prcgproceditmprnttypetext
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - text-view
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_PRCGPROCEDITMPRNTTYPETEXT

**Prcgproceditmprnttypetext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `PricingProcedureItemPrintType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as drukz )` |  |  |
| `PrcgProcedItemPrintTypeName` |  | |  | `cast ( ddtext as val_text )` |  |  |
| `_PrcgProcedItemPrntType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrcgProcedItemPrntType` | `I_PrcgProcedItemPrntType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGPIPRNTTYPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Print Type for Pricing Procedure Item - Text'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'PricingProcedureItemPrintType'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@Metadata.ignorePropagatedAnnotations:true

define view I_PrcgProcedItmPrntTypeText
  as select from dd07t
  association [0..1] to I_PrcgProcedItemPrntType as _PrcgProcedItemPrntType on $projection.PricingProcedureItemPrintType = _PrcgProcedItemPrntType.PricingProcedureItemPrintType
  association [0..1] to I_Language                    as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
  key cast( ddlanguage as spras )                     as Language,
      @ObjectModel.foreignKey.association: '_PrcgProcedItemPrntType'
  key cast ( substring( domvalue_l, 1, 1 ) as drukz ) as PricingProcedureItemPrintType,
      @Semantics.text: true
      cast ( ddtext as val_text )                     as PrcgProcedItemPrintTypeName,
      _PrcgProcedItemPrntType,
      _Language
}
where
      domname  = 'DRUKZ'
  and as4local = 'A'
```
