---
name: I_CUSTSLSAREAADDRDEPDNTTAXINFO
description: Custslsareaaddrdepdnttaxinfo
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
# I_CUSTSLSAREAADDRDEPDNTTAXINFO

**Custslsareaaddrdepdnttaxinfo**

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
| `SalesOrganization` | ✓ | |  |  |
| `DistributionChannel` | ✓ | |  |  |
| `Division` | ✓ | |  |  |
| `AddressID` | ✓ | |  | `adrnr` |
| `DepartureCountry` | ✓ | |  | `aland` |
| `CustomerTaxCategory` | ✓ | |  | `tatyp` |
| `CustomerTaxClassification` |  | |  | `taxkd` |
| `_CustomerSalesAreaTax` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_AddressDefaultRepresentation` | | ✓ | | |
| `_CustomerSalesArea` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_Division` | | ✓ | | |
| `_Country` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerSalesAreaTax` | `I_CustSalesAreaTax` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [1..1] |
| `_CustomerSalesArea` | `I_CustomerSalesArea` | [1..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTSLSADDRTAX'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: ['_AddressDefaultRepresentation' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.modelingPattern:#NONE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@EndUserText.label: 'Customer Sales Area Address dep Tax'
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_CustSlsAreaAddrDepdntTaxInfo
  as select from knvi_addr
    inner join   I_CustSalesAreaTax as SalesAreaTax on  knvi_addr.kunnr = SalesAreaTax.Customer
                                           and knvi_addr.aland = SalesAreaTax.DepartureCountry
                                           and knvi_addr.tatyp = SalesAreaTax.CustomerTaxCategory
  association [1..1] to I_CustSalesAreaTax    as _CustomerSalesAreaTax                     on  $projection.Customer            = _CustomerSalesAreaTax.Customer
                                                                               and $projection.DepartureCountry    = _CustomerSalesAreaTax.DepartureCountry
                                                                               and $projection.CustomerTaxCategory = _CustomerSalesAreaTax.CustomerTaxCategory
                                                                               and $projection.SalesOrganization   = _CustomerSalesAreaTax.SalesOrganization
                                                                               and $projection.DistributionChannel = _CustomerSalesAreaTax.DistributionChannel
                                                                               and $projection.Division            = _CustomerSalesAreaTax.Division
  association [1..1] to I_Customer            as _Customer                     on  $projection.Customer = _Customer.Customer
  association [1..1] to I_Address_2           as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
                                                                               and _AddressDefaultRepresentation.AddressRepresentationCode = ' '
  association [1..1] to I_CustomerSalesArea   as _CustomerSalesArea            on  $projection.Customer            = _CustomerSalesArea.Customer
                                                                               and $projection.SalesOrganization   = _CustomerSalesArea.SalesOrganization
                                                                               and $projection.DistributionChannel = _CustomerSalesArea.DistributionChannel
                                                                               and $projection.Division            = _CustomerSalesArea.Division
  association [0..1] to I_SalesOrganization   as _SalesOrganization            on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel as _DistributionChannel          on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division            as _Division                     on  $projection.Division = _Division.Division
  association [0..1] to I_Country             as _Country                      on  $projection.DepartureCountry = _Country.Country
{
      @ObjectModel.foreignKey.association: '_Customer'
  key knvi_addr.kunnr         as Customer, -- Customer Number
      @ObjectModel.foreignKey.association: '_SalesOrganization'
  key SalesAreaTax.SalesOrganization   as SalesOrganization, -- Sales Organization
      @ObjectModel.foreignKey.association: '_DistributionChannel'
  key SalesAreaTax.DistributionChannel as DistributionChannel, -- Distribution Channel
      @ObjectModel.foreignKey.association: '_Division'
  key SalesAreaTax.Division            as Division,  -- Division
  key knvi_addr.adrnr         as AddressID, -- Address number
      @ObjectModel.foreignKey.association: '_Country'
  key knvi_addr.aland         as DepartureCountry, -- Departure Country
  key knvi_addr.tatyp         as CustomerTaxCategory, -- Tax Category
      knvi_addr.taxkd         as CustomerTaxClassification, -- Tax Classification
      _CustomerSalesArea,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _Customer,
      _CustomerSalesAreaTax,
      _Country,
      _AddressDefaultRepresentation
}
```
