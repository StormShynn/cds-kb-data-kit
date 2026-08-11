---
name: I_TIMEDEPENDENTSTOCKLEVEL
description: "Time Dependent Stock Level"
app_component: PP-DD-BLM-BAS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TIMEDEPENDENTSTOCKLEVEL')/$value
semantic_en: "Time Dependent Stock Level"
semantic_vi: "Time Dependent Stock Level — CDS view giao diện dựa trên pph_dd_stk."
keywords:
  - "time"
  - "dependent"
  - "stock"
  - "level"
  - "product"
  - "plant"
  - "area"
  - "validity"
  - "start"
  - "date"
tags:
  - PP
  - bo:inventory
  - component:PP-DD-BLM-BAS-2CL
  - interface-view
  - lob:manufacturing
  - PP-DD
  - PP-DD-BLM
  - PP-DD-BLM-BAS
  - PP-DD-BLM-BAS-2CL
  - stock
---
# I_TIMEDEPENDENTSTOCKLEVEL

**Time Dependent Stock Level**

| Property | Value |
|---|---|
| App Component | `PP-DD-BLM-BAS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TIMEDEPENDENTSTOCKLEVEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  | `werks` | `CHAR(4)` | Plant |
| `MRPArea` | ✓ | |  | `berid` | `CHAR(10)` | MRP Area |
| `StockLevelValidityStartDate` | ✓ | |  | `date_from` | `DATS(8)` | Valid-From Date |
| `StockLevelValidityEndDate` |  | |  | `date_to` | `DATS(8)` | Valid-To Date |
| `ProductSafetyStockLvlQuantity` |  | |  | `safety_stock` | `QUAN(13)` | Safety Stock |
| `ReorderThresholdQuantity` |  | |  | `reorder_point` | `QUAN(13)` | Reorder Point |
| `ProductMaxStockLevelQuantity` |  | |  | `max_stock` | `QUAN(13)` | Maximum Stock Level |
| `ProductTargetStockLvlQuantity` |  | |  | `target_stock` | `QUAN(13)` | Target Stock Level |
| `BaseUnit` |  | |  | `stock_unit` | `UNIT(3)` | Base Unit of Measure |
| `TargetSupplyDurationInDays` |  | |  | `target_dos` | `DEC(6)` | Target Days of Supply in Workdays |
| `MaxSupplyDurationInDays` |  | |  | `max_dos` | `DEC(6)` | Maximum Days of Supply in Workdays |
| `SafetySupplyDurationInDays` |  | |  | `safety_dos` | `DEC(6)` | Safety Days of Supply in Workdays |
| `ChangeMode` |  | |  | `change_mode` | `CHAR(1)` | Mode of change |
| `StockLevelProposalID` |  | |  | `proposal_id` | `CHAR(75)` | Proposal Id |
| `ProposalVersion` |  | |  | `prop_ver` | `NUMC(8)` | Proposal Version |
| `ProposalStartDate` |  | |  | `prop_date_from` | `DATS(8)` | Proposal Validity From Date |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | Name of Person Who Changed Object |
| `CreationDateTime` |  | |  | `created_time` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangeDateTime` |  | |  | `changed_time` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TIMEDEPENDENTSTOCKLEVEL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TIMEDEPENDENTSTOCKLEVEL')/$value)*

```abap
@EndUserText.label: 'Time Dependent Stock Level'
@AccessControl: {authorizationCheck: #CHECK,
                personalData.blocking: #NOT_REQUIRED}
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #NONE

define view entity I_TimeDependentStockLevel
  as select from pph_dd_stk
  
  association [1..1] to I_Product  as _Product on _Product.Product = $projection.Product
{

  key matnr          as Product,
  key werks          as Plant,
  key berid          as MRPArea,
  key date_from      as StockLevelValidityStartDate,
      date_to        as StockLevelValidityEndDate,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      safety_stock   as ProductSafetyStockLvlQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      reorder_point  as ReorderThresholdQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      max_stock      as ProductMaxStockLevelQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      target_stock   as ProductTargetStockLvlQuantity,
      //@Semantics.unitOfMeasure: true
      stock_unit     as BaseUnit,
      
       /* PP/DS specific fields */
      target_dos     as TargetSupplyDurationInDays,
      max_dos        as MaxSupplyDurationInDays,
      safety_dos     as SafetySupplyDurationInDays,

       /* Decribes how the entry got created*/
      change_mode    as ChangeMode,
      
      /* DDMRP specific fields */
      proposal_id    as StockLevelProposalID,
      prop_ver       as ProposalVersion,
      prop_date_from as ProposalStartDate,
      
       /* Administrative fields */
      created_by     as CreatedByUser,
      changed_by     as LastChangedByUser,
      created_time   as CreationDateTime,
      changed_time   as LastChangeDateTime,
      
      _Product                                          //exposed for DCL purpose

}
```
