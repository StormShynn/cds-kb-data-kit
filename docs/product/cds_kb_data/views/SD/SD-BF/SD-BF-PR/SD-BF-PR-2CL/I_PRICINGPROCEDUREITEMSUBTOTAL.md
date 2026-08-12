---
name: I_PRICINGPROCEDUREITEMSUBTOTAL
description: "Pricingprocedureitemsubtotal"
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
  - pricing
  - item-level
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_PRICINGPROCEDUREITEMSUBTOTAL

**Pricingprocedureitemsubtotal**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrcgProcedItemSubtotal` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kzwiw )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrcgProcedItemSubtotalText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGPROCIS'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Pricing Procedure Subtotal Line'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'PrcgProcedItemSubtotal'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PricingProcedureItemSubtotal'
define view I_PricingProcedureItemSubtotal
  as select from dd07l
  association [0..*] to I_PrcgProcedItemSubtotalText as _Text on $projection.PrcgProcedItemSubtotal = _Text.PrcgProcedItemSubtotal
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as kzwiw ) as PrcgProcedItemSubtotal,
     _Text

}

where
      domname  = 'KZWIW'
  and as4local = 'A'
  and as4vers  = '0000'
```
