---
name: I_CUSTSALESAREATAX
description: Custsalesareatax
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
  - tax
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CUSTSALESAREATAX

**Custsalesareatax**

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
| `DepartureCountry` | ✓ | |  | `aland` |  |  |
| `CustomerTaxCategory` | ✓ | |  | `tatyp` |  |  |
| `CustomerTaxClassification` |  | |  | `taxkd` |  |  |
| `AuthorizationGroup` |  | | `_Customer` | `AuthorizationGroup` |  |  |
| `IsBusinessPurposeCompleted` |  | | `_Customer` | `IsBusinessPurposeCompleted` |  |  |
| `_Customer` | | ✓ | | | | |
| `_CustomerSalesArea` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |
| `_CustomerSalesArea` | `I_CustomerSalesArea` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTSALETAX'
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
@ObjectModel.sapObjectNodeType.name: 'CustomerSalesAreaTax' 
@ObjectModel.representativeKey:'CustomerTaxCategory'
//@ObjectModel.representativeKey:'Division'
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: '_Customer.IsBusinessPurposeCompleted'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]  
@ObjectModel.modelingPattern:#NONE                                     
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED
@EndUserText.label: 'Customer Sales Area Tax'
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CustSalesAreaTax as

select distinct 
from tvkwz
inner join tvta on tvta.vkorg = tvkwz.vkorg and tvta.vtweg = tvkwz.vtweg
left outer join t001w on t001w.werks = tvkwz.werks
left outer join knvi on knvi.aland = t001w.land1
inner join I_CustomerSalesArea as sales on knvi.kunnr =  sales.Customer 
                                                               and tvta.vkorg =  sales.SalesOrganization 
                                                               and tvta.vtweg =  sales.DistributionChannel
                                                               and tvta.spart =  sales.Division 

association[1..1] to I_Customer as _Customer on $projection.Customer = _Customer.Customer

association[1..1] to I_CustomerSalesArea as _CustomerSalesArea on $projection.Customer =  _CustomerSalesArea.Customer 
                                                               and $projection.SalesOrganization =  _CustomerSalesArea.SalesOrganization 
                                                               and $projection.DistributionChannel =  _CustomerSalesArea.DistributionChannel
                                                               and $projection.Division =  _CustomerSalesArea.Division 
association[1..1] to  I_Country  as _Country     on  $projection.DepartureCountry = _Country.Country   
association [0..1] to I_SalesOrganization          as _SalesOrganization            on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization  
association [0..1] to I_DistributionChannel        as _DistributionChannel          on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
association [0..1] to I_Division                   as _Division                     on  $projection.Division = _Division.Division   

//association[0..*]  to I_PricingConditionType as _TaxCategory on $projection.tatyp = _TaxCategory.ConditionType                                                  
{
  @ObjectModel.foreignKey.association: '_Customer'
  key knvi.kunnr  as Customer,  -- Customer Number
  //@ObjectModel.foreignKey.association: '_CustomerSalesArea._SalesOrganization'
  @ObjectModel.foreignKey.association: '_SalesOrganization'
  key tvkwz.vkorg as SalesOrganization, -- Sales Organization
  @ObjectModel.foreignKey.association: '_DistributionChannel'
  key tvkwz.vtweg as DistributionChannel, -- Distribution Channel
  @ObjectModel.foreignKey.association: '_Division'
  key tvta.spart  as Division,  -- Division
  @ObjectModel.foreignKey.association: '_Country'
  key aland       as DepartureCountry, -- Departure Country
 //  @ObjectModel.foreignKey.association: '_TaxCategory'
  key tatyp       as CustomerTaxCategory, -- Tax Category
  taxkd           as CustomerTaxClassification, -- Tax Classification 
  _Customer.AuthorizationGroup,
  _Customer.IsBusinessPurposeCompleted,

  _Customer,
  _CustomerSalesArea,  
  _SalesOrganization,
//  _CustomerSalesArea._SalesOrganization,
 // _SalesOrganization,
  _DistributionChannel,
  _Division,
  _Country
 
  //_TaxCategory

}
```
