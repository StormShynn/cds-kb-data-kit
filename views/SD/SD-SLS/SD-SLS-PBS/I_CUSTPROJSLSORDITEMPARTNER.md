---
name: I_CUSTPROJSLSORDITEMPARTNER
description: Custprojslsorditempartner
app_component: SD-SLS-PBS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-PBS
  - interface-view
  - item-level
  - partner
  - component:SD-SLS-PBS
  - lob:Sales & Distribution
---
# I_CUSTPROJSLSORDITEMPARTNER

**Custprojslsorditempartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-PBS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CustomerProject` | `CustProjSlsOrdItemPartner.CustomerProject` |
| key `PartnerFunction` | `SalesOrderItemPartner.PartnerFunction` |
| key `SalesOrderItem` | `SalesOrderItemPartner.SalesOrderItem` |
| `SalesOrder` | `SalesOrderItemPartner.SalesOrder` |
| `Partner` | `SalesOrderItemPartner.Partner` |
| `ContactPerson` | `SalesOrderItemPartner.ContactPerson` |
| `AddressID` | `SalesOrderItemPartner.AddressID` |
| `AddressPersonID` | `SalesOrderItemPartner.AddressPersonID` |
| `AddressObjectType` | `SalesOrderItemPartner.AddressObjectType` |
| `SDDocPartnerAddressRefType` | `SalesOrderItemPartner.SDDocPartnerAddressRefType` |
| `ReferenceBusinessPartner` | `SalesOrderItemPartner.ReferenceBusinessPartner` |
| `BPAddrDeterminationTransaction` | `SalesOrderItemPartner.BPAddrDeterminationTransaction` |
| `BPRefAddressIDForDocSpcfcAddr` | `SalesOrderItemPartner.BPRefAddressIDForDocSpcfcAddr` |
| `SalesOrderType` | `CustProjSlsOrdItemPartner.SalesOrderType` |
| `OrganizationDivision` | `CustProjSlsOrdItemPartner.OrganizationDivision` |
| `SalesOrganization` | `CustProjSlsOrdItemPartner.SalesOrganization` |
| `DistributionChannel` | `CustProjSlsOrdItemPartner.DistributionChannel` |
| `_CustProjSlsOrdItem` | *Association* |
| `_SalesOrderItem` | *Association* |
| `_CustomerProject` | *Association* |
| `_SalesOrder` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustProjSlsOrdItem` | `I_CustProjSlsOrdItem` | [1..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [1..1] |
| `_CustomerProject` | `I_CustomerProject` | [1..1] |
| `_SalesOrder` | `I_SalesOrder` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTPROJSOIP'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED,
  privilegedAssociations:  [ '_Address', '_DfltAddrRprstn' ]
}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@ObjectModel: {
   representativeKey: 'PartnerFunction',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: [ #NONE]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Sales Order Item Partner for Cust Proj'
define view I_CustProjSlsOrdItemPartner
  as select from I_SalesOrderItemPartner as SalesOrderItemPartner
    inner join   I_CustProjSlsOrdItem    as CustProjSlsOrdItemPartner on  SalesOrderItemPartner.SalesOrder     = CustProjSlsOrdItemPartner.SalesOrder
                                                                      and SalesOrderItemPartner.SalesOrderItem = CustProjSlsOrdItemPartner.SalesOrderItem

  association [1..1] to I_CustProjSlsOrdItem as _CustProjSlsOrdItem on  $projection.CustomerProject = _CustProjSlsOrdItem.CustomerProject
                                                                    and $projection.SalesOrderItem  = _CustProjSlsOrdItem.SalesOrderItem

  association [1..1] to I_SalesOrderItem     as _SalesOrderItem     on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                    and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem

  association [1..1] to I_CustomerProject    as _CustomerProject    on  $projection.CustomerProject = _CustomerProject.CustomerProject

  association [1..1] to I_SalesOrder         as _SalesOrder         on  $projection.SalesOrder = _SalesOrder.SalesOrder  
  
{
    //  @Consumption.valueHelpDefinition: [
      //      { entity:  { name:    'I_CustomerProjectVH',
        //                 element: 'CustomerProject' }
          //  }]
      @ObjectModel.foreignKey.association: '_CustomerProject'
  key CustProjSlsOrdItemPartner.CustomerProject,

      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key SalesOrderItemPartner.PartnerFunction,

      @ObjectModel.foreignKey.association: '_SalesOrderItem'
  key SalesOrderItemPartner.SalesOrderItem,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrderItemPartner.SalesOrder,

      SalesOrderItemPartner.Partner,
      
      //used for multiple addresses feature
      @Consumption.hidden: true
      SalesOrderItemPartner.ContactPerson,
      
      @ObjectModel.foreignKey.association: '_Address'
      SalesOrderItemPartner.AddressID,
      
      SalesOrderItemPartner.AddressPersonID,
      
      SalesOrderItemPartner.AddressObjectType,
      
      SalesOrderItemPartner.SDDocPartnerAddressRefType,
      
      SalesOrderItemPartner.ReferenceBusinessPartner,
      
      SalesOrderItemPartner.BPAddrDeterminationTransaction,
      
      SalesOrderItemPartner.BPRefAddressIDForDocSpcfcAddr,

      // For Access control
      @Consumption.hidden: true
      CustProjSlsOrdItemPartner.SalesOrderType,
      //_SalesOrder.SalesOrderType,
      @Consumption.hidden: true
      CustProjSlsOrdItemPartner.OrganizationDivision,
      @Consumption.hidden: true
      CustProjSlsOrdItemPartner.SalesOrganization,
      @Consumption.hidden: true
      CustProjSlsOrdItemPartner.DistributionChannel,

      //Association
      _CustomerProject,
      _CustProjSlsOrdItem,
      _SalesOrderItem,
      _SalesOrder,
      SalesOrderItemPartner._PartnerFunction,
      SalesOrderItemPartner._Address,
      SalesOrderItemPartner._DfltAddrRprstn,
      SalesOrderItemPartner._BusinessPartnerAddress,
      SalesOrderItemPartner._BPRefAddressForDocSpcfcAddr

}
```
