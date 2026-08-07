---
name: I_CUSTSALESPARTNERFUNC
description: Custsalespartnerfunc
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
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CUSTSALESPARTNERFUNC

**Custsalespartnerfunc**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Customer` | ✓ | |  | `kunnr` |
| `SalesOrganization` | ✓ | |  | `vkorg` |
| `DistributionChannel` | ✓ | |  | `vtweg` |
| `Division` | ✓ | |  | `spart` |
| `PartnerCounter` | ✓ | |  | `parza` |
| `PartnerFunction` | ✓ | |  | `parvw` |
| `PartnerFunctionType` |  | |  | `nrart` |
| `BPCustomerNumber` |  | |  | `case when tpar.nrart = 'KU' then knvp.kunn2 when tpar.nrart = 'LI' then knvp.lifnr when tpar.nrart = 'AP' then knvp.parnr when tpar.nrart = 'PE' then knvp.pernr else '' end` |
| `CustomerPartnerDescription` |  | |  | `knref` |
| `DefaultPartner` |  | |  | `defpa` |
| `Supplier` |  | |  | `lifnr` |
| `PersonnelNumber` |  | |  | `pernr` |
| `ContactPerson` |  | |  | `parnr` |
| `AddressID` |  | |  | `adrnr` |
| `_CustomerSalesArea` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_Division` | | ✓ | | |
| `_CustSalesPartnerCounter` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerSalesArea` | `I_CustomerSalesArea` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_CustSalesPartnerCounter` | `I_CustSalesPartnerCounter` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTPARTNERFUNC'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@ObjectModel.sapObjectNodeType.name: 'CustomerPartnerFunction'
@ObjectModel.representativeKey:'PartnerFunction'
@AccessControl.privilegedAssociations:  [ '_CustSalesPartnerCounter' ]
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: '_Customer.IsBusinessPurposeCompleted'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE                                     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@EndUserText.label: 'Customer Sales Area Partner Function'
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
//@VDM.lifecycle.status: #DEPRECATED
//@VDM.lifecycle.successor: 'I_CustSalesPartnerFunc_2' 

define view I_CustSalesPartnerFunc as select from knvp
inner join tpar on knvp.parvw = tpar.parvw
association[1..1] to I_CustomerSalesArea as _CustomerSalesArea on $projection.Customer =  _CustomerSalesArea.Customer 
                                                               and $projection.SalesOrganization =  _CustomerSalesArea.SalesOrganization 
                                                               and $projection.DistributionChannel =  _CustomerSalesArea.DistributionChannel
                                                               and $projection.Division =  _CustomerSalesArea.Division 

association[1..1] to I_Customer as _Customer on $projection.Customer =  _Customer.Customer
association [0..1] to I_SalesOrganization    as _SalesOrganization   on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization  
association [0..1] to I_DistributionChannel  as _DistributionChannel on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
association [0..1] to I_Division             as _Division            on  $projection.Division = _Division.Division
//association [0..1] to I_PartnerFunction      as _PartnerFunction     on $projection.PartnerFunction = _PartnerFunction.PartnerFunction 
association [0..1] to I_CustSalesPartnerCounter     as _CustSalesPartnerCounter     on $projection.PartnerCounter = _CustSalesPartnerCounter.PartnerCounter  
{
  @ObjectModel.foreignKey.association: '_Customer'
  key knvp.kunnr                                                      as Customer,
  @ObjectModel.foreignKey.association: '_SalesOrganization'
  key knvp.vkorg                                                      as SalesOrganization,
  @ObjectModel.foreignKey.association: '_DistributionChannel'
  key knvp.vtweg                                                      as DistributionChannel,
  @ObjectModel.foreignKey.association: '_Division'
  key knvp.spart                                                      as Division,
  @ObjectModel.foreignKey.association: '_CustSalesPartnerCounter'
  key knvp.parza                                                      as PartnerCounter,
  //@ObjectModel.foreignKey.association: '_PartnerFunction'
  key knvp.parvw                                                      as PartnerFunction, //partner role
       tpar.nrart                                                      as PartnerFunctionType,
      case
        when tpar.nrart = 'KU'
          then knvp.kunn2
        when tpar.nrart = 'LI'
          then knvp.lifnr
        when tpar.nrart = 'AP'
          then knvp.parnr
        when tpar.nrart = 'PE'
          then knvp.pernr
        else ''
      end as BPCustomerNumber,
      //knvp.kunn2                                                      as BPCustomerNumber,
      knvp.knref                                                      as CustomerPartnerDescription,
      knvp.defpa                                                      as DefaultPartner,
      knvp.lifnr                                                      as Supplier,
      knvp.pernr                                                      as PersonnelNumber,
      knvp.parnr                                                      as ContactPerson,
      knvp.adrnr                                                      as AddressID,

      //_CustomerSalesArea._Customer.AuthorizationGroup, *Field removed to reduce complexity, use from association instead*
      _CustomerSalesArea,
      _Customer,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
    //  _PartnerFunction,
     _CustSalesPartnerCounter 
    
}
```
