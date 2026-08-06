---
name: I_CUSTRCVGPTADDRDEPDNTINFO
description: Custrcvgptaddrdepdntinfo
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
# I_CUSTRCVGPTADDRDEPDNTINFO

**Custrcvgptaddrdepdntinfo**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Customer` | `locnr` |
| key `AddressID` | `adrnr` |
| key `ReceivingPoint` | `empst` |
| `UnloadingPointName` | `ablad` |
| `_Customer` | *Association* |
| `_AddressDefaultRepresentation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSRECPTADDEP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED 
@AccessControl.privilegedAssociations: [ '_AddressDefaultRepresentation']
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Receiving Points dependent on Address'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CustRcvgPtAddrDepdntInfo
  as select from wrf12_addr
  association [1..1] to I_Customer  as _Customer                     on  $projection.Customer = _Customer.Customer
  association [1..1] to I_Address_2 as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
                                                                     and _AddressDefaultRepresentation.AddressRepresentationCode = ' '
                                                                     and _AddressDefaultRepresentation.AddressPersonID = ' '
{
      @ObjectModel.foreignKey.association: '_Customer'
  key locnr as Customer,
  key adrnr as AddressID,
  key empst as ReceivingPoint,
      ablad as UnloadingPointName,
      _Customer,
      _AddressDefaultRepresentation
}
```
