---
name: I_CUSTPROJSLSORDITEMPARTNER
description: "Custprojslsorditempartner"
app_component: SD-SLS-PBS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerProject` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `SalesOrderItem` | ✓ | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `AddressObjectType` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `BPAddrDeterminationTransaction` |  | |  |  |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `_CustProjSlsOrdItem` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_CustomerProject` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |

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
