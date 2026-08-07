---
name: I_CUSTSLSAREAADDRDEPDNTINFO
description: Custslsareaaddrdepdntinfo
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
# I_CUSTSLSAREAADDRDEPDNTINFO

**Custslsareaaddrdepdntinfo**

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
| `SalesOrganization` | ✓ | |  | `vkorg` |  |  |
| `DistributionChannel` | ✓ | |  | `vtweg` |  |  |
| `Division` | ✓ | |  | `spart` |  |  |
| `AddressID` | ✓ | |  | `adrnr` |  |  |
| `IncotermsClassification` |  | |  | `inco1` |  |  |
| `IncotermsLocation1` |  | |  | `inco2_l` |  |  |
| `IncotermsLocation2` |  | |  | `inco3_l` |  |  |
| `DeliveryIsBlocked` |  | |  | `lifsd` |  |  |
| `SalesOffice` |  | |  | `vkbur` |  |  |
| `SalesGroup` |  | |  | `vkgrp` |  |  |
| `ShippingCondition` |  | |  | `vsbed` |  |  |
| `SupplyingPlant` |  | |  | `vwerk` |  |  |
| `IncotermsVersion` |  | |  | `incov` |  |  |
| `IncotermsSupChnLoc1AddlUUID` |  | |  | `cast( inco2_key as /sapapo/location_uuid )` |  |  |
| `IncotermsSupChnLoc2AddlUUID` |  | |  | `cast( inco3_key as /sapapo/location_uuid )` |  |  |
| `IncotermsSupChnDvtgLocAddlUUID` |  | |  | `cast( inco4_key as /sapapo/location_uuid )` |  |  |
| `_Customer` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_DeliveryIsBlockedForCustomer` | | ✓ | | | | |
| `_AddressDefaultRepresentation` | | ✓ | | | | |
| `_CustomerSalesArea` | | ✓ | | | | |
| `_IncotermsSupChnDvtgLoc` | | ✓ | | | | |
| `_IncotermsSupChnLoc2` | | ✓ | | | | |
| `_IncotermsSupChnLoc1` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [1..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [1..1] |
| `_Division` | `I_Division` | [1..1] |
| `_DeliveryIsBlockedForCustomer` | `I_DeliveryBlockReason` | [0..1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [1..1] |
| `_CustomerSalesArea` | `I_CustomerSalesArea` | [1..1] |
| `_CustSlsAreaAddrDepdntInfoExt` | `E_CustSlsAreaAddrDepdntInfo` | [0..1] |
| `_IncotermsSupChnDvtgLoc` | `I_TransportationLocation` | [1..1] |
| `_IncotermsSupChnLoc2` | `I_TransportationLocation` | [1..1] |
| `_IncotermsSupChnLoc1` | `I_TransportationLocation` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTSLSADDRDEP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: ['_AddressDefaultRepresentation']
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ClientHandling.algorithm : #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey:'AddressID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #BASIC
@EndUserText.label: 'Info Depdnt on Cust Addr and Sales Area'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CustSlsAreaAddrDepdntInfo
  as select from knvv_addr
  association [1..1] to I_Customer                  as _Customer                     on  $projection.Customer = _Customer.Customer
  association [1..1] to I_SalesOrganization         as _SalesOrganization            on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [1..1] to I_DistributionChannel       as _DistributionChannel          on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [1..1] to I_Division                  as _Division                     on  $projection.Division = _Division.Division
  association [0..1] to I_DeliveryBlockReason       as _DeliveryIsBlockedForCustomer on  $projection.DeliveryIsBlocked = _DeliveryIsBlockedForCustomer.DeliveryBlockReason
  association [1..1] to I_Address_2                 as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
                                                                                     and _AddressDefaultRepresentation.AddressRepresentationCode = ' '
  //association [1..1] to I_Address_2                 as _Address                      on  $projection.AddressID              = _Address.AddressID
  //                                                                                 and _Address.AddressRepresentationCode = ' '
  association [1..1] to I_CustomerSalesArea         as _CustomerSalesArea            on  $projection.Customer            = _CustomerSalesArea.Customer
                                                                                     and $projection.SalesOrganization   = _CustomerSalesArea.SalesOrganization
                                                                                     and $projection.DistributionChannel = _CustomerSalesArea.DistributionChannel
                                                                                     and $projection.Division            = _CustomerSalesArea.Division
  association [0..1] to E_CustSlsAreaAddrDepdntInfo as _CustSlsAreaAddrDepdntInfoExt on  $projection.Customer            = _CustSlsAreaAddrDepdntInfoExt.Customer
                                                                                     and $projection.SalesOrganization   = _CustSlsAreaAddrDepdntInfoExt.SalesOrganization
                                                                                     and $projection.DistributionChannel = _CustSlsAreaAddrDepdntInfoExt.DistributionChannel
                                                                                     and $projection.Division            = _CustSlsAreaAddrDepdntInfoExt.Division
                                                                                     and $projection.AddressID           = _CustSlsAreaAddrDepdntInfoExt.AddressID
  association [1..1] to I_TransportationLocation    as _IncotermsSupChnDvtgLoc       on  $projection.IncotermsSupChnDvtgLocAddlUUID = _IncotermsSupChnDvtgLoc.LocationAdditionalUUID /*+[hideWarning] { "IDS" : [
"CALCULATED_FIELD_CHECK" ] } */
  association [1..1] to I_TransportationLocation    as _IncotermsSupChnLoc2          on  $projection.IncotermsSupChnLoc2AddlUUID = _IncotermsSupChnLoc2.LocationAdditionalUUID /*+[hideWarning] { "IDS" : [
"CALCULATED_FIELD_CHECK" ] } */
  association [1..1] to I_TransportationLocation    as _IncotermsSupChnLoc1          on  $projection.IncotermsSupChnLoc1AddlUUID = _IncotermsSupChnLoc1.LocationAdditionalUUID
{
      @ObjectModel.foreignKey.association: '_Customer'
  key knvv_addr.kunnr                            as Customer,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
  key knvv_addr.vkorg                            as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
  key knvv_addr.vtweg                            as DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
  key knvv_addr.spart                            as Division,
  key knvv_addr.adrnr                            as AddressID,
      knvv_addr.inco1                            as IncotermsClassification,
      knvv_addr.inco2_l                          as IncotermsLocation1,
      knvv_addr.inco3_l                          as IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_DeliveryIsBlockedForCustomer'
      knvv_addr.lifsd                            as DeliveryIsBlocked,
      knvv_addr.vkbur                            as SalesOffice,
      knvv_addr.vkgrp                            as SalesGroup,
      knvv_addr.vsbed                            as ShippingCondition,
      knvv_addr.vwerk                            as SupplyingPlant,

      knvv_addr.incov                            as IncotermsVersion,
      cast( inco2_key as /sapapo/location_uuid ) as IncotermsSupChnLoc1AddlUUID,
      cast( inco3_key as /sapapo/location_uuid ) as IncotermsSupChnLoc2AddlUUID,
      cast( inco4_key as /sapapo/location_uuid ) as IncotermsSupChnDvtgLocAddlUUID,

      _CustomerSalesArea,

      _Customer,
      _AddressDefaultRepresentation,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _DeliveryIsBlockedForCustomer,
      _IncotermsSupChnDvtgLoc,
      _IncotermsSupChnLoc1,
      _IncotermsSupChnLoc2

}
```
