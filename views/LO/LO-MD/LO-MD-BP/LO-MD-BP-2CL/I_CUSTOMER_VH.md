---
name: I_CUSTOMER_VH
description: Customer (Value Help)
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
  - value-help
  - customer
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMER_VH

**Customer (Value Help)**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Customer` | `I_Customer.Customer` |
| `OrganizationBPName1` | `I_Customer.OrganizationBPName1` |
| `BusinessPartnerName1` | `I_Customer.BusinessPartnerName1` |
| `OrganizationBPName2` | `I_Customer.OrganizationBPName2` |
| `BusinessPartnerName2` | `I_Customer.BusinessPartnerName2` |
| `Country` | `I_Customer.Country` |
| `CityName` | `I_Customer.CityName` |
| `BPAddrCityName` | `I_Customer.BPAddrCityName` |
| `StreetName` | `I_Customer.StreetName` |
| `BPAddrStreetName` | `I_Customer.BPAddrStreetName` |
| `PostalCode` | `I_Customer.PostalCode` |
| `CustomerName` | `I_Customer.CustomerName` |
| `BPCustomerName` | `I_Customer.BPCustomerName` |
| `CustomerAccountGroup` | `I_Customer.CustomerAccountGroup` |
| `AuthorizationGroup` | `I_Customer.AuthorizationGroup` |
| `IsBusinessPurposeCompleted` | `I_Customer.IsBusinessPurposeCompleted` |
| `IsCompetitor` | `I_Customer.IsCompetitor` |
| `BusinessPartner` | `I_Customer._CustomerToBusinessPartner._BusinessPartner.BusinessPartner` |
| `BusinessPartnerType` | `I_Customer._CustomerToBusinessPartner._BusinessPartner.BusinessPartnerType` |
| `DataControllerSet` | `I_Customer.DataControllerSet` |
| `DataController1` | `I_Customer.DataController1` |
| `DataController2` | `I_Customer.DataController2` |
| `DataController3` | `I_Customer.DataController3` |
| `DataController4` | `I_Customer.DataController4` |
| `DataController5` | `I_Customer.DataController5` |
| `DataController6` | `I_Customer.DataController6` |
| `DataController7` | `I_Customer.DataController7` |
| `DataController8` | `I_Customer.DataController8` |
| `DataController9` | `I_Customer.DataController9` |
| `DataController10` | `I_Customer.DataController10` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSOMERVH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #BASIC

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'Customer'

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern:#NONE
@ObjectModel.usageType.serviceQuality: #B 
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
//<TODO> Please double-check personal data blocking
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Customer'
@Consumption.ranked: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_Customer_VH
  as select from I_Customer
{
          @ObjectModel.text.element: ['BPCustomerName']
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          @Search.ranking: #HIGH
  key     I_Customer.Customer,

          @EndUserText.label: 'Customer Name 1'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          //@Search.ranking: #HIGH
          @Search.ranking: #LOW
          I_Customer.OrganizationBPName1,
          
//          @UI.hidden: true
//          @Consumption.filter.hidden: true
          @EndUserText.label: 'Business Partner Name 1'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          @Search.ranking: #LOW
          I_Customer.BusinessPartnerName1,

          @EndUserText.label: 'Customer Name 2'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          //@Search.ranking: #HIGH
          @Search.ranking: #LOW
          I_Customer.OrganizationBPName2,
          
//          @UI.hidden: true
//          @Consumption.filter.hidden: true
          @EndUserText.label: 'Business Partner Name 2'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          @Search.ranking: #LOW
          I_Customer.BusinessPartnerName2,

          @EndUserText.label: 'Country/Region'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          //@Search.ranking: #HIGH
          @Search.ranking: #LOW
          I_Customer.Country,

          @EndUserText.label: 'City'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          //@Search.ranking: #HIGH
          @Search.ranking: #LOW
          I_Customer.CityName,
          
          @UI.hidden: true
          @Consumption.filter.hidden: true
          @EndUserText.label: 'Business Partner Address City'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          @Search.ranking: #LOW
          I_Customer.BPAddrCityName,

          @EndUserText.label: 'Street'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          //@Search.ranking: #HIGH
          @Search.ranking: #LOW
          I_Customer.StreetName,
          
          @UI.hidden: true
          @Consumption.filter.hidden: true
          @EndUserText.label: 'Business Partner Address Street'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          @Search.ranking: #LOW
          I_Customer.BPAddrStreetName,

          @EndUserText.label: 'Postal Code'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          //@Search.ranking: #HIGH
          @Search.ranking: #LOW
          I_Customer.PostalCode,

          @EndUserText.label: 'Customer Name'
          // @Search.defaultSearchElement: true
          //  @Search.fuzzinessThreshold: 0.8
          //  @Search.ranking: #HIGH
          I_Customer.CustomerName,
          
//          @UI.hidden: true
//          @Consumption.filter.hidden: true
          @EndUserText.label: 'Business Partner Customer Name'
          I_Customer.BPCustomerName,


          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.CustomerAccountGroup,

          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.AuthorizationGroup,

          @UI.hidden: true
          @Consumption.filter.hidden: true
          @EndUserText.label: 'Purpose Complete Flag'
          I_Customer.IsBusinessPurposeCompleted,

          @UI.hidden: true
          I_Customer.IsCompetitor,
          @EndUserText.label: 'Business Partner'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          //@Search.ranking: #HIGH
          @Search.ranking: #LOW
          I_Customer._CustomerToBusinessPartner._BusinessPartner.BusinessPartner,

          @EndUserText.label: 'Business Partner Type'
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer._CustomerToBusinessPartner._BusinessPartner.BusinessPartnerType,

          // Fields added For Data Controller in DCL .... NOT TO BE CONSUMED.
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataControllerSet,
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataController1,
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataController2,
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataController3,
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataController4,
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataController5,
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataController6,
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataController7,
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataController8,
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataController9,
          @UI.hidden: true
          @Consumption.filter.hidden: true
          I_Customer.DataController10

}
```
