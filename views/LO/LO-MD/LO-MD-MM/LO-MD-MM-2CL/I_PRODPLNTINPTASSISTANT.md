---
name: I_PRODPLNTINPTASSISTANT
description: Prodplntinptassistant
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODPLNTINPTASSISTANT

**Prodplntinptassistant**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `ProductType` |  | |  | `mtart` |  |  |
| `ProductGroup` |  | |  | `matkl` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `MRPType` |  | |  | `dismm` |  |  |
| `MRPController` |  | |  | `dispo` |  |  |
| `MRPGroup` |  | |  | `disgr` |  |  |
| `LotSizingProcedure` |  | |  | `disls` |  |  |
| `MinimumLotSizeQuantity` |  | |  | `bstmi` |  |  |
| `PlanningTimeFence` |  | |  | `fxhor` |  |  |
| `SafetyDuration` |  | |  | `shzet` |  |  |
| `GoodsReceiptDuration` |  | |  | `webaz` |  |  |
| `_BaseUnitOfMeasure` | | ✓ | | | | |
| `_BaseUnitOfMeasureText` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_ProductTypeName` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductGroupText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BaseUnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_BaseUnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |
| `_ProductType` | `I_Producttype` | [1..1] |
| `_ProductTypeName` | `I_ProductTypeText` | [0..*] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_ProductGroupText` | `I_ProductGroupText_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDPLNTIA'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Input Assistance for Product Plant'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics:{
    dataExtraction: {
        enabled: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE
]
define view I_ProdPlntInptAssistant
  as select from v_marc_md
    inner join   mara on mara.matnr = v_marc_md.matnr
  association [1..1] to I_UnitOfMeasure      as _BaseUnitOfMeasure     on $projection.BaseUnit = _BaseUnitOfMeasure.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText  as _BaseUnitOfMeasureText on $projection.BaseUnit = _BaseUnitOfMeasureText.UnitOfMeasure
  association [1..1] to I_Producttype        as _ProductType           on $projection.ProductType = _ProductType.ProductType
  association [0..*] to I_ProductTypeText    as _ProductTypeName       on $projection.ProductType = _ProductTypeName.ProductType
  association [0..1] to I_ProductGroup_2     as _ProductGroup          on $projection.ProductGroup = _ProductGroup.ProductGroup
  association [0..*] to I_ProductGroupText_2 as _ProductGroupText      on $projection.ProductGroup = _ProductGroupText.ProductGroup
{
  key  mara.matnr      as Product,
  key  v_marc_md.werks as Plant,

       @ObjectModel.foreignKey.association: '_ProductType'
       mtart           as ProductType,
       _ProductType,
       _ProductTypeName,

       @ObjectModel.foreignKey.association: '_ProductGroup'
       matkl           as ProductGroup,
       _ProductGroup,
       _ProductGroupText,

       @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
       @Semantics.unitOfMeasure: true
       meins           as BaseUnit,
       _BaseUnitOfMeasure,
       _BaseUnitOfMeasureText,

       begru           as AuthorizationGroup,

       dismm           as MRPType,
       dispo           as MRPController,
       disgr           as MRPGroup,
       disls           as LotSizingProcedure,

       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       bstmi           as MinimumLotSizeQuantity,
       fxhor           as PlanningTimeFence,
       shzet           as SafetyDuration,
       webaz           as GoodsReceiptDuration

}
```
