---
name: I_CUSTPROJSLSORDPARTNER
description: "Custprojslsordpartner"
app_component: SD-SLS-PBS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-PBS
  - interface-view
  - partner
  - component:SD-SLS-PBS
  - lob:Sales & Distribution
---
# I_CUSTPROJSLSORDPARTNER

**Custprojslsordpartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-PBS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerProject` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
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
| `_SalesOrder` | | ✓ | | | | |
| `_CustProjSlsOrd` | | ✓ | | | | |
| `_CustomerProject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_CustProjSlsOrd` | `I_CustProjSlsOrd` | [1..1] |
| `_CustomerProject` | `I_CustomerProject` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTPROJSOHP'
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
   modelingPattern: [ #NONE ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Sales Order Partner for Customer Project'
define view I_CustProjSlsOrdPartner
  as select from I_SalesOrderPartner as SalesOrderPartner
    inner join   I_CustProjSlsOrd    as CustProjSlsOrd on SalesOrderPartner.SalesOrder = CustProjSlsOrd.SalesOrder

  association [1..1] to I_SalesOrder      as _SalesOrder      on $projection.SalesOrder = _SalesOrder.SalesOrder
  association [1..1] to I_CustProjSlsOrd  as _CustProjSlsOrd  on $projection.CustomerProject = _CustProjSlsOrd.CustomerProject
  association [1..1] to I_CustomerProject as _CustomerProject on $projection.CustomerProject = _CustomerProject.CustomerProject
                                                                                 
{
    //  @Consumption.valueHelpDefinition: [
      //      { entity:  { name:    'I_CustomerProjectVH',
        //                 element: 'CustomerProject' }
          //  }]
      @ObjectModel.foreignKey.association: '_CustomerProject'
  key CustProjSlsOrd.CustomerProject,

      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key SalesOrderPartner.PartnerFunction,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrderPartner.SalesOrder,
      
      SalesOrderPartner.Partner,
      
      //used for multiple addresses feature
      @Consumption.hidden: true
      SalesOrderPartner.ContactPerson,
   
      @ObjectModel.foreignKey.association: '_Address'
      SalesOrderPartner.AddressID,
      
      SalesOrderPartner.AddressPersonID,
      
      SalesOrderPartner.AddressObjectType,
      
      SalesOrderPartner.SDDocPartnerAddressRefType,
      
      SalesOrderPartner.ReferenceBusinessPartner,
      
      SalesOrderPartner.BPAddrDeterminationTransaction,
      
      SalesOrderPartner.BPRefAddressIDForDocSpcfcAddr,
      

      // For Access control
      @Consumption.hidden: true
      CustProjSlsOrd.SalesOrderType,
      //_SalesOrder.SalesOrderType,
      @Consumption.hidden: true
      CustProjSlsOrd.OrganizationDivision,
      @Consumption.hidden: true
      CustProjSlsOrd.SalesOrganization,
      @Consumption.hidden: true
      CustProjSlsOrd.DistributionChannel,

      //Association
      _CustomerProject,
      _CustProjSlsOrd,
      _SalesOrder,
      SalesOrderPartner._PartnerFunction,
      SalesOrderPartner._Address,
      SalesOrderPartner._DfltAddrRprstn,
      SalesOrderPartner._BusinessPartnerAddress,
      SalesOrderPartner._BPRefAddressForDocSpcfcAddr
      
}
```
