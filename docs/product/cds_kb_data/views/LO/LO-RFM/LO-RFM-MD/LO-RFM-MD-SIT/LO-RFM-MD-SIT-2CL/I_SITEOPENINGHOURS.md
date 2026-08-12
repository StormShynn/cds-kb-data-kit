---
name: I_SITEOPENINGHOURS
description: "Site Opening Hours"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEOPENINGHOURS')/$value
semantic_en: "Site Opening Hours"
semantic_vi: "Site Opening Hours — CDS view giao diện dựa trên wrf1."
keywords:
  - "site"
  - "opening"
  - "hours"
  - "customer"
  - "date"
  - "closing"
  - "monday"
  - "morning"
  - "time"
tags:
  - LO
  - bo:plant
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
---
# I_SITEOPENINGHOURS

**Site Opening Hours**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEOPENINGHOURS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` | ✓ | |  | `locnr` | `CHAR(10)` | Customer Number |
| `SiteOpeningDate` |  | |  | `eroed` | `DATS(8)` | Opening Date |
| `SiteClosingDate` |  | |  | `schld` | `DATS(8)` | Closing Date |
| `MondayMorningOpeningTime` |  | |  | `moab1` | `TIMS(6)` | Goods receipt times: Monday morning from ... |
| `MondayMorningClosingTime` |  | |  | `mobi1` | `TIMS(6)` | Goods receiving hours: Monday morning until ... |
| `MondayAfternoonOpeningTime` |  | |  | `moab2` | `TIMS(6)` | Goods receiving hours: Monday afternoon from ... |
| `MondayAfternoonClosingTime` |  | |  | `mobi2` | `TIMS(6)` | Goods receiving hours: Monday afternoon until ... |
| `TuesdayMorningOpeningTime` |  | |  | `diab1` | `TIMS(6)` | Goods receiving hours: Tuesday morning from... |
| `TuesdayMorningClosingTime` |  | |  | `dibi1` | `TIMS(6)` | Goods receipt times: Tuesday morning until ... |
| `TuesdayAfternoonOpeningTime` |  | |  | `diab2` | `TIMS(6)` | Goods receiving hours: Tuesday afternoon from ... |
| `TuesdayAfternoonClosingTime` |  | |  | `dibi2` | `TIMS(6)` | Goods receiving hours: Tuesday afternoon until ... |
| `WednesdayMorningOpeningTime` |  | |  | `miab1` | `TIMS(6)` | Goods receiving hours: Wednesday morning from ... |
| `WednesdayMorningClosingTime` |  | |  | `mibi1` | `TIMS(6)` | Goods receiving hours: Wednesday morning until ... |
| `WednesdayAfternoonOpeningTime` |  | |  | `miab2` | `TIMS(6)` | Goods receiving hours: Wednesday afternoon from ... |
| `WednesdayAfternoonClosingTime` |  | |  | `mibi2` | `TIMS(6)` | Goods receiving hours: Wednesday afternoon until ... |
| `ThursdayMorningOpeningTime` |  | |  | `doab1` | `TIMS(6)` | Goods receiving hours: Thursday morning from ... |
| `ThursdayMorningClosingTime` |  | |  | `dobi1` | `TIMS(6)` | Goods receiving hours: Thursday morning until ... |
| `ThursdayAfternoonOpeningTime` |  | |  | `doab2` | `TIMS(6)` | Goods receiving hours: Thursday afternoon from ... |
| `ThursdayAfternoonClosingTime` |  | |  | `dobi2` | `TIMS(6)` | Goods receiving hours: Thursday afternoon until... |
| `FridayMorningOpeningTime` |  | |  | `frab1` | `TIMS(6)` | Goods receiving hours: Friday morning from ... |
| `FridayMorningClosingTime` |  | |  | `frbi1` | `TIMS(6)` | Goods receiving hours: Friday morning until ... |
| `FridayAfternoonOpeningTime` |  | |  | `frab2` | `TIMS(6)` | Goods receiving hours: Friday afternoon from ... |
| `FridayAfternoonClosingTime` |  | |  | `frbi2` | `TIMS(6)` | Goods receiving hours: Friday afternoon until ... |
| `SaturdayMorningOpeningTime` |  | |  | `saab1` | `TIMS(6)` | Goods receiving hours: Saturday morning from ... |
| `SaturdayMorningClosingTime` |  | |  | `sabi1` | `TIMS(6)` | Goods receiving hours: Saturday morning until ... |
| `SaturdayAfternoonOpeningTime` |  | |  | `saab2` | `TIMS(6)` | Goods receiving hours: Saturday afternoon from ... |
| `SaturdayAfternoonClosingTime` |  | |  | `sabi2` | `TIMS(6)` | Goods receiving hours: Saturday afternoon until ... |
| `SundayMorningOpeningTime` |  | |  | `soab1` | `TIMS(6)` | Goods receiving hours: Sunday morning from ... |
| `SundayMorningClosingTime` |  | |  | `sobi1` | `TIMS(6)` | Goods receiving hours: Sunday morning until ... |
| `SundayAfternoonOpeningTime` |  | |  | `soab2` | `TIMS(6)` | Goods receiving hours: Sunday afternoon from ... |
| `SundayAfternoonClosingTime` |  | |  | `sobi2` | `TIMS(6)` | Goods receiving hours: Sunday afternoon until ... |
| `SiteGoodsReceivingHoursCode` |  | |  | `wanid` | `CHAR(3)` | Goods receiving hours ID (default value) |
| `_Site` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SiteGoodsReceivingHoursCodeT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Site` | `I_Site` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |
| `_SiteGoodsReceivingHoursCodeT` | `I_SiteGoodsReceivingHoursCodeT` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEOPENINGHOURS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEOPENINGHOURS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISITEOPNINGHOURS'
@EndUserText.label: 'Site Opening Hours'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          automatic: true
        }
    }
}

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel: {
    representativeKey: 'SiteCustomer',
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #EXTRACTION_DATA_SOURCE ],
   sapObjectNodeType: {                
                     name: 'RtlSiteOpeningClosingDateTime'  
                   },                             
    usageType: {
        serviceQuality: #A,
        sizeCategory: #M,
        dataClass: #MASTER
   }
}

define view I_SiteOpeningHours
  as select from wrf1
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
  association [1..1] to I_Site                         as _Site                         on  $projection.SiteCustomer = _Site.SiteCustomer
  association [1..1] to I_Customer                     as _Customer                     on  $projection.SiteCustomer = _Customer.Customer
  association [0..1] to I_SiteGoodsReceivingHoursCodeT as _SiteGoodsReceivingHoursCodeT on  $projection.SiteGoodsReceivingHoursCode = _SiteGoodsReceivingHoursCodeT.SiteGoodsReceivingHoursCode
                                                                                        and _SiteGoodsReceivingHoursCodeT.Language  = $session.system_language

{
  key locnr as SiteCustomer,

      eroed as SiteOpeningDate,
      schld as SiteClosingDate,

      moab1 as MondayMorningOpeningTime,
      mobi1 as MondayMorningClosingTime,
      moab2 as MondayAfternoonOpeningTime,
      mobi2 as MondayAfternoonClosingTime,

      diab1 as TuesdayMorningOpeningTime,
      dibi1 as TuesdayMorningClosingTime,
      diab2 as TuesdayAfternoonOpeningTime,
      dibi2 as TuesdayAfternoonClosingTime,

      miab1 as WednesdayMorningOpeningTime,
      mibi1 as WednesdayMorningClosingTime,
      miab2 as WednesdayAfternoonOpeningTime,
      mibi2 as WednesdayAfternoonClosingTime,

      doab1 as ThursdayMorningOpeningTime,
      dobi1 as ThursdayMorningClosingTime,
      doab2 as ThursdayAfternoonOpeningTime,
      dobi2 as ThursdayAfternoonClosingTime,

      frab1 as FridayMorningOpeningTime,
      frbi1 as FridayMorningClosingTime,
      frab2 as FridayAfternoonOpeningTime,
      frbi2 as FridayAfternoonClosingTime,

      saab1 as SaturdayMorningOpeningTime,
      sabi1 as SaturdayMorningClosingTime,
      saab2 as SaturdayAfternoonOpeningTime,
      sabi2 as SaturdayAfternoonClosingTime,

      soab1 as SundayMorningOpeningTime,
      sobi1 as SundayMorningClosingTime,
      soab2 as SundayAfternoonOpeningTime,
      sobi2 as SundayAfternoonClosingTime,
      wanid as SiteGoodsReceivingHoursCode,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Site,
      _Customer,
      _SiteGoodsReceivingHoursCodeT
}
```
