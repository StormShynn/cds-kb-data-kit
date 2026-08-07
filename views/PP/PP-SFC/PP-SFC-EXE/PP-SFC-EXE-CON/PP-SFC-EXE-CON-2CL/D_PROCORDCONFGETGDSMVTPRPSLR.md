---
name: D_PROCORDCONFGETGDSMVTPRPSLR
description: D Procordconfgetgdsmvtprpslr
app_component: PP-SFC-EXE-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - PP-SFC-EXE
  - component:PP-SFC-EXE-CON-2CL
  - lob:Manufacturing
---
# D_PROCORDCONFGETGDSMVTPRPSLR

**D Procordconfgetgdsmvtprpslr**

| Property | Value |
|---|---|
| App Component | `PP-SFC-EXE-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConfirmationGroup` |  | |  | `pph_rueck` |
| `OrderType` |  | |  | `manufacturingordertype` |
| `OrderID` |  | |  | `manufacturingorder` |
| `OrderItem` |  | |  | `manufacturingorderitem` |
| `ManufacturingOrderCategory` |  | |  | `manufacturingordercategory` |
| `Material` |  | |  | `matnr` |
| `Plant` |  | |  | `werks_d` |
| `Reservation` |  | |  | `rsnum` |
| `ReservationItem` |  | |  | `nsdm_rspos` |
| `StorageLocation` |  | |  | `storagelocation` |
| `Batch` |  | |  | `charg_d` |
| `InventoryValuationType` |  | |  | `pph_bwtar` |
| `GoodsMovementType` |  | |  | `pph_bwart` |
| `GoodsMovementReasonCode` |  | |  | `mb_grbew` |
| `GoodsMovementRefDocType` |  | |  | `nsdm_kzbew` |
| `InventoryUsabilityCode` |  | |  | `nsdm_insmk` |
| `InventorySpecialStockType` |  | |  | `nsdm_spcl_stock_type` |
| `SalesOrder` |  | |  | `co_kdauf` |
| `SalesOrderItem` |  | |  | `co_kdpos` |
| `WBSElementExternalID` |  | |  | `vdm_ps_posid` |
| `Supplier` |  | |  | `lifnr` |
| `Customer` |  | |  | `kunnr` |
| `ReservationIsFinallyIssued` |  | |  | `boolean` |
| `IsCompletelyDelivered` |  | |  | `boolean` |
| `ShelfLifeExpirationDate` |  | |  | `vfdat` |
| `ManufactureDate` |  | |  | `hsdat` |
| `StorageType` |  | |  | `lgtyp` |
| `StorageBin` |  | |  | `lgpla` |
| `EWMWarehouse` |  | |  | `/scwm/lgnum` |
| `EWMStorageBin` |  | |  | `/scwm/lgpla` |
| `EntryUnit` |  | |  | `erfme` |
| `EntryUnitISOCode` |  | |  | `isocd_unit` |
| `EntryUnitSAPCode` |  | |  | `meinsint` |
| `QuantityInEntryUnit` |  | |  | `pph_erfmg` |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@EndUserText.label: 'Goods Movements Proposal for Process Order Confirmation'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//// Odata CDS A_ProcOrdConfMatlDocItem is used as a reference for fields
define abstract entity D_ProcOrdConfGetGdsMvtPrpslR
{
        ConfirmationGroup        : pph_rueck;
        OrderType                : manufacturingordertype ;
        OrderID                  : manufacturingorder;
        OrderItem                : manufacturingorderitem;
        ManufacturingOrderCategory : manufacturingordercategory;
        Material                 : matnr;
        Plant                    : werks_d;
        Reservation              : rsnum;
        ReservationItem          : nsdm_rspos;
        StorageLocation          : storagelocation;
        Batch                    : charg_d;
        InventoryValuationType   : pph_bwtar;
        GoodsMovementType        : pph_bwart;
        GoodsMovementReasonCode  : mb_grbew;
        GoodsMovementRefDocType  : nsdm_kzbew;
        InventoryUsabilityCode   : nsdm_insmk;
        InventorySpecialStockType: nsdm_spcl_stock_type; 
        SalesOrder               : co_kdauf; 
        SalesOrderItem           : co_kdpos;
        WBSElementExternalID     : vdm_ps_posid; 
        Supplier                 : lifnr;
        Customer                 : kunnr;
        ReservationIsFinallyIssued : boolean;
        IsCompletelyDelivered   : boolean;
        ShelfLifeExpirationDate : vfdat;
        ManufactureDate         : hsdat;
        StorageType              : lgtyp;
        StorageBin               : lgpla;
        EWMWarehouse             : /scwm/lgnum; 
        EWMStorageBin            : /scwm/lgpla; 
        EntryUnit                : erfme;
        EntryUnitISOCode         : isocd_unit; 
        EntryUnitSAPCode         : meinsint;  
        @Semantics.quantity.unitOfMeasure: 'EntryUnit' 
        QuantityInEntryUnit      : pph_erfmg;
}
```
