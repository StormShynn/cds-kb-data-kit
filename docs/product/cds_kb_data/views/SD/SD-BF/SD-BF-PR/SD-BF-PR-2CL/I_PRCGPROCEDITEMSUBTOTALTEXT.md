---
name: I_PRCGPROCEDITEMSUBTOTALTEXT
description: "Prcgproceditemsubtotaltext"
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
  - text-view
  - text
  - item-level
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_PRCGPROCEDITEMSUBTOTALTEXT

**Prcgproceditemsubtotaltext**

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
| `PrcgProcedItemSubtotal` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kzwiw )` |  |  |
| `PrcgProcedItemSubtotalText` |  | |  | `cast ( ddtext as val_text )` |  |  |
| `_PricingProcedureItemSubtotal` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingProcedureItemSubtotal` | `I_PricingProcedureItemSubtotal` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGPROCIST'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Pricing Procedure Subtotal Line - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'PrcgProcedItemSubtotal'
@Metadata.ignorePropagatedAnnotations:true
define view I_PrcgProcedItemSubtotalText
  as select from dd07t
  association [0..1] to I_PricingProcedureItemSubtotal as _PricingProcedureItemSubtotal on $projection.PrcgProcedItemSubtotal = _PricingProcedureItemSubtotal.PrcgProcedItemSubtotal
  association [0..1] to I_Language                     as _Language                     on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                     as Language,

  key cast ( substring( domvalue_l, 1, 1 ) as kzwiw ) as PrcgProcedItemSubtotal,
      @Semantics.text:true
      cast ( ddtext as val_text )                     as PrcgProcedItemSubtotalText,
      _PricingProcedureItemSubtotal,
      _Language
}
where
      domname  = 'KZWIW'
  and as4local = 'A'
  and as4vers  = '0000'
```
