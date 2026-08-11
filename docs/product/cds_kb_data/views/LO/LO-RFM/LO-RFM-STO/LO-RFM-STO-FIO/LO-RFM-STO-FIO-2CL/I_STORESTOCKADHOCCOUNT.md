---
name: I_STORESTOCKADHOCCOUNT
description: "Store Stock Ad hoc Count"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADHOCCOUNT')/$value
semantic_en: "Store Stock Ad hoc Count"
semantic_vi: "Store Stock Ad hoc Count — CDS view cơ bản dựa trên rfm_st_stkcnt."
keywords:
  - "store"
  - "stock"
  - "hoc"
  - "count"
  - "adhoc"
  - "storage"
  - "location"
  - "status"
  - "created"
  - "user"
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
# I_STORESTOCKADHOCCOUNT

**Store Stock Ad hoc Count**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADHOCCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` | ✓ | |  | `store` | `CHAR(4)` | Retail plant |
| `StoreStockAdhocCountUUID` | ✓ | |  | `storestockadhoccountuuid` | `RAW(16)` | Unique identifier for New Store Stock Ad hoc Count |
| `StorageLocation` |  | |  | `storagelocation` | `CHAR(4)` | Storage Location |
| `StoreStockAdhocCntStatus` |  | |  | `storestockadhoccntstatus` | `CHAR(2)` | Store Stock Ad hoc Count processing status |
| `CreatedByUser` |  | |  | `createdbyuser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDateTime` |  | |  | `creationdatetime` | `DEC(21)` | Creation date and time of stock count |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` | `CHAR(12)` | User Who Last Changed the Business Document |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | Changed date and time |
| `LastChangeDate` |  | |  | `cast(tstmp_to_dats( cast( lastchangedatetime as abap.dec( 15, 0 ) ), 'UTC', $session.client, 'NULL') as datum)` | `DATS(8)` | Date |
| `_Site` | | ✓ | | | | |
| `_StkAdhocCntPrdt` | | ✓ | | | | |
| `_StorageLoc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Site` | `I_Site` | [1..1] |
| `_StkAdhocCntPrdt` | `I_StoreStkAdhocCntProduct` | [0..*] |
| `_StorageLoc` | `I_StorageLocation` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADHOCCOUNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADHOCCOUNT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory  : [#NONE]
@AccessControl.authorizationCheck     : #CHECK

@VDM: {
  viewType                            : #BASIC,
  lifecycle.contract.type             : #PUBLIC_LOCAL_API
}
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
    representativeKey                 : 'StoreStockAdhocCountUUID',
    usageType.serviceQuality          : #A,
    usageType.sizeCategory            : #L,
    usageType.dataClass               : #TRANSACTIONAL,
    supportedCapabilities             : [ #SQL_DATA_SOURCE,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #EXTRACTION_DATA_SOURCE ,
                                          #ANALYTICAL_DIMENSION
                                        ],
   modelingPattern                    :  #ANALYTICAL_DIMENSION 
}
@Metadata.ignorePropagatedAnnotations : true
@Metadata.allowExtensions             : true
@ObjectModel.sapObjectNodeType.name   : 'StoreStockAdhocCount'
@EndUserText.label                    : 'Store Stock Ad hoc Count'

define view entity I_StoreStockAdhocCount
  as select from rfm_st_stkcnt
  association [1..1] to I_Site                    as _Site            on  $projection.Store                    = _Site.Site
  association [0..*] to I_StoreStkAdhocCntProduct as _StkAdhocCntPrdt on  $projection.Store                    = _StkAdhocCntPrdt.Store
                                                                      and $projection.StoreStockAdhocCountUUID = _StkAdhocCntPrdt.StoreStockAdhocCountUUID

  association [0..1] to I_StorageLocation         as _StorageLoc      on  $projection.Store                    = _StorageLoc.Plant
                                                                      and $projection.StorageLocation          = _StorageLoc.StorageLocation

{
      @ObjectModel.foreignKey.association: '_Site'
  key store                                                                                                          as Store,
  key storestockadhoccountuuid                                                                                       as StoreStockAdhocCountUUID,
      //@ObjectModel.foreignKey.association: '_StorageLoc'
      storagelocation                                                                                                as StorageLocation,
      //@ObjectModel.foreignKey.association: '_StkAdhocCntStatus'
      storestockadhoccntstatus                                                                                       as StoreStockAdhocCntStatus,
      @Semantics.user.createdBy: true
      createdbyuser                                                                                                  as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      creationdatetime                                                                                               as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      lastchangedbyuser                                                                                              as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      lastchangedatetime                                                                                             as LastChangeDateTime,
      //      _ProdCount.NumberOfProducts as NumberOfProducts,
      cast(tstmp_to_dats( cast( lastchangedatetime as abap.dec( 15, 0 ) ), 'UTC', $session.client, 'NULL') as datum) as LastChangeDate,

      /*Association*/
      _Site,
      _StkAdhocCntPrdt,
      _StorageLoc
      //_StkAdhocCntStatus,
      //_UserDesc
}
```
