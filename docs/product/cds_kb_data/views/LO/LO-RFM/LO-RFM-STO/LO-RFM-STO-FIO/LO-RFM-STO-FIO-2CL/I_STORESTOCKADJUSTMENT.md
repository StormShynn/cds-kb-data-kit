---
name: I_STORESTOCKADJUSTMENT
description: "Store Stock Adjustment"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENT')/$value
semantic_en: "Store Stock Adjustment"
semantic_vi: "Store Stock Adjustment — CDS view cơ bản dựa trên rfm_st_stkadj."
keywords:
  - "store"
  - "stock"
  - "adjustment"
  - "goods"
  - "movement"
  - "type"
  - "reason"
  - "storage"
  - "location"
tags:
  - LO
  - bo:inventory
  - component:LO-RFM-STO-FIO-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-STO
  - LO-RFM-STO-FIO
  - LO-RFM-STO-FIO-2CL
  - lob:finance
  - lob:logistics general
  - stock
---
# I_STORESTOCKADJUSTMENT

**Store Stock Adjustment**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` | ✓ | |  | `store` | `CHAR(4)` | Retail plant |
| `StoreStockAdjustmentUUID` | ✓ | |  | `storestockadjustmentuuid` | `RAW(16)` | Unique Identifier for New Stock Adjustment |
| `GoodsMovementType` |  | |  | `goodsmovementtype` | `CHAR(3)` | Movement Type (Inventory Management) |
| `StockAdjustmentReason` |  | |  | `stockadjustmentreason` | `CHAR(4)` | Stock Adjustment Reason |
| `StorageLocation` |  | |  | `storagelocation` | `CHAR(4)` | Storage Location |
| `StockAdjustmentStatus` |  | |  | `stockadjustmentstatus` | `CHAR(2)` | Processing Status of the Stock Adjustment |
| `CreatedByUser` |  | |  | `createdbyuser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDateTime` |  | |  | `creationdatetime` | `DEC(21)` | Creation date and time of Stock Adjustment |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` | `CHAR(12)` | User Who Last Changed the Business Document |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `CreationDate` |  | |  | `cast(tstmp_to_dats( creationdatetime , 'UTC', $session.client, 'NULL') as datum)` | `DATS(8)` | Date |
| `LastChangeDate` |  | |  | `cast(tstmp_to_dats( lastchangedatetime , 'UTC', $session.client, 'NULL') as datum)` | `DATS(8)` | Date |
| `MaterialDocument` |  | |  | `materialdocument` | `CHAR(10)` | Number of Material Document |
| `_Site` | | ✓ | | | | |
| `_Items` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Site` | `I_Site` | [1..1] |
| `_Items` | `I_StoreStockAdjustmentItem` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADJUSTMENT')/$value)*

```abap
@AbapCatalog.sqlViewName              : 'ISTORESTKADJ'
@VDM: {
  viewType                            : #BASIC,
  lifecycle.contract.type             : #PUBLIC_LOCAL_API
}
@AbapCatalog.compiler.compareFilter   : true
@AbapCatalog.preserveKey              : true
@AccessControl.authorizationCheck     : #CHECK
@ClientHandling.algorithm             : #SESSION_VARIABLE

@Analytics: {
  dataCategory                        : #DIMENSION,
  internalName                        : #LOCAL,
  dataExtraction                      : {
    enabled                           : true,
    delta.changeDataCapture           : {
      automatic                       : true
    }
  }
}
@ObjectModel: {
   representativeKey                  : 'StoreStockAdjustmentUUID',
   supportedCapabilities              : [ #SQL_DATA_SOURCE,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #EXTRACTION_DATA_SOURCE ,
                                          #ANALYTICAL_DIMENSION
                                        ],
   modelingPattern                    : #ANALYTICAL_DIMENSION ,
   usageType                          : {serviceQuality: #A,dataClass: #TRANSACTIONAL,sizeCategory: #L}
 }
@Metadata.ignorePropagatedAnnotations : true
@Metadata.allowExtensions             : true
@ObjectModel.sapObjectNodeType.name   : 'StoreStockAdjustment'
@EndUserText.label                    : 'Store Stock Adjustment'

define view I_StoreStockAdjustment
  as select from rfm_st_stkadj
  association [1..1] to I_Site                     as _Site  on  $projection.Store = _Site.Site
  association [0..*] to I_StoreStockAdjustmentItem as _Items on  $projection.Store                    = _Items.Store
                                                             and $projection.StoreStockAdjustmentUUID = _Items.StoreStockAdjustmentUUID
{
      @ObjectModel.foreignKey.association: '_Site'
  key store                                                                              as Store,
  key storestockadjustmentuuid                                                           as StoreStockAdjustmentUUID,
      goodsmovementtype                                                                  as GoodsMovementType,
      stockadjustmentreason                                                              as StockAdjustmentReason,
      storagelocation                                                                    as StorageLocation,
      stockadjustmentstatus                                                              as StockAdjustmentStatus,
      @Semantics.user.createdBy: true
      createdbyuser                                                                      as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      creationdatetime                                                                   as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      lastchangedbyuser                                                                  as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      lastchangedatetime                                                                 as LastChangeDateTime,
      cast(tstmp_to_dats( creationdatetime , 'UTC', $session.client, 'NULL') as datum)   as CreationDate,
      cast(tstmp_to_dats( lastchangedatetime , 'UTC', $session.client, 'NULL') as datum) as LastChangeDate,
      materialdocument                                                                   as MaterialDocument,
      /* Associations */
      _Site,
      _Items
}
```
