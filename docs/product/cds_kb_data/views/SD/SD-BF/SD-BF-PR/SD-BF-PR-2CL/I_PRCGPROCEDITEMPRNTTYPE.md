---
name: I_PRCGPROCEDITEMPRNTTYPE
description: "Prcgproceditemprnttype"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - item-level
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_PRCGPROCEDITEMPRNTTYPE

**Prcgproceditemprnttype**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingProcedureItemPrintType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as drukz )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrcgProcedItmPrntTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGPIPRNTTYP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Print Type for Pricing Procedure Item'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'PricingProcedureItemPrintType'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PricingProcedureItemPrintType'

define view I_PrcgProcedItemPrntType
  as select from dd07l
  association [0..*] to I_PrcgProcedItmPrntTypeText as _Text on $projection.PricingProcedureItemPrintType = _Text.PricingProcedureItemPrintType
{
      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as drukz ) as PricingProcedureItemPrintType,
      _Text

}
where
      domname  = 'DRUKZ'
  and as4local = 'A'
```
