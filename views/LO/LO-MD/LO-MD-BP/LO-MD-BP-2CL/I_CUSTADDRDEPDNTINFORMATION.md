---
name: I_CUSTADDRDEPDNTINFORMATION
description: "Custaddrdepdntinformation"
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
# I_CUSTADDRDEPDNTINFORMATION

**Custaddrdepdntinformation**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `kunnr` |  |  |
| `AddressID` | ✓ | |  | `adrnr` |  |  |
| `ExpressTrainStationName` |  | |  | `bahne` |  |  |
| `TrainStationName` |  | |  | `bahns` |  |  |
| `CityCode` |  | |  | `cityc` |  |  |
| `County` |  | |  | `counc` |  |  |
| `CustomerHasUnloadingPoint` |  | |  | `exabl` |  |  |
| `_Customer` | | ✓ | | | | |
| `_AddressDefaultRepresentation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [1..1] |
| `_CustAddrDepdntInformationExt` | `E_CustAddrDepdntInformation` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTADDRDEPDNT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: [ '_AddressDefaultRepresentation' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #BASIC
@EndUserText.label: 'Info Dependent on Customer Address'
//@Analytics.dataCategory: #DIMENSION
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_CustAddrDepdntInformation
  as select from kna1_addr
  association [1..1] to I_Customer                  as _Customer                     on  $projection.Customer = _Customer.Customer
  association [1..1] to I_Address_2                 as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
                                                                                     and _AddressDefaultRepresentation.AddressRepresentationCode = ' '
  association [0..1] to E_CustAddrDepdntInformation as _CustAddrDepdntInformationExt on  $projection.Customer  = _CustAddrDepdntInformationExt.Customer
                                                                                     and $projection.AddressID = _CustAddrDepdntInformationExt.AddressID
{
      @ObjectModel.foreignKey.association: '_Customer'
  key kna1_addr.kunnr as Customer,
  key kna1_addr.adrnr as AddressID,
      kna1_addr.bahne as ExpressTrainStationName,
      kna1_addr.bahns as TrainStationName,
      kna1_addr.cityc as CityCode,
      kna1_addr.counc as County,
      kna1_addr.exabl as CustomerHasUnloadingPoint,
      _Customer,
      _AddressDefaultRepresentation

}
```
