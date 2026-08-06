---
name: I_CUSTUNLDGPTADDRDEPDNTINFO
description: Custunldgptaddrdepdntinfo
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CUSTUNLDGPTADDRDEPDNTINFO

**Custunldgptaddrdepdntinfo**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Customer` | `kunnr` |
| key `AddressID` | `adrnr` |
| key `UnloadingPointName` | `ablad` |
| `CustomerFactoryCalenderCode` | `knfak` |
| `BPGoodsReceivingHoursCode` | `wanid` |
| `IsDfltBPUnloadingPoint` | `defab` |
| `MondayMorningOpeningTime` | `moab1` |
| `MondayMorningClosingTime` | `mobi1` |
| `MondayAfternoonOpeningTime` | `moab2` |
| `MondayAfternoonClosingTime` | `mobi2` |
| `TuesdayMorningOpeningTime` | `diab1` |
| `TuesdayMorningClosingTime` | `dibi1` |
| `TuesdayAfternoonOpeningTime` | `diab2` |
| `TuesdayAfternoonClosingTime` | `dibi2` |
| `WednesdayMorningOpeningTime` | `miab1` |
| `WednesdayMorningClosingTime` | `mibi1` |
| `WednesdayAfternoonOpeningTime` | `miab2` |
| `WednesdayAfternoonClosingTime` | `mibi2` |
| `ThursdayMorningOpeningTime` | `doab1` |
| `ThursdayMorningClosingTime` | `dobi1` |
| `ThursdayAfternoonOpeningTime` | `doab2` |
| `ThursdayAfternoonClosingTime` | `dobi2` |
| `FridayMorningOpeningTime` | `frab1` |
| `FridayMorningClosingTime` | `frbi1` |
| `FridayAfternoonOpeningTime` | `frab2` |
| `FridayAfternoonClosingTime` | `frbi2` |
| `SaturdayMorningOpeningTime` | `saab1` |
| `SaturdayMorningClosingTime` | `sabi1` |
| `SaturdayAfternoonOpeningTime` | `saab2` |
| `SaturdayAfternoonClosingTime` | `sabi2` |
| `SundayMorningOpeningTime` | `soab1` |
| `SundayMorningClosingTime` | `sobi1` |
| `SundayAfternoonOpeningTime` | `soab2` |
| `SundayAfternoonClosingTime` | `sobi2` |
| `_Customer` | *Association* |
| `_AddressDefaultRepresentation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSUNLPTADDEP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: ['_AddressDefaultRepresentation' ]
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@Analytics.internalName:#LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Unloading Points dependent on Address'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey:'AddressID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CustUnldgPtAddrDepdntInfo
  as select from knva_addr
  association [1]    to I_Customer  as _Customer                     on  $projection.Customer = _Customer.Customer
  association [1..1] to I_Address_2 as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
                                                                     and _AddressDefaultRepresentation.AddressRepresentationCode = ' '
{
      @ObjectModel.foreignKey.association: '_Customer'
  key kunnr as Customer,
  key adrnr as AddressID,
  key ablad as UnloadingPointName,

      knfak as CustomerFactoryCalenderCode,
      wanid as BPGoodsReceivingHoursCode,
      defab as IsDfltBPUnloadingPoint,

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

      _Customer,
      _AddressDefaultRepresentation
}
```
