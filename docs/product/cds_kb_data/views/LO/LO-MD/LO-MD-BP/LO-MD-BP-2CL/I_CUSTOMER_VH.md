---
name: I_CUSTOMER_VH
description: "Customer (Value Help)"
app_component: LO-MD-BP-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  |  |  |  |
| `OrganizationBPName1` |  | |  |  |  |  |
| `BusinessPartnerName1` |  | |  |  |  |  |
| `OrganizationBPName2` |  | |  |  |  |  |
| `BusinessPartnerName2` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `BPAddrCityName` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `BPAddrStreetName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `CustomerName` |  | |  |  |  |  |
| `BPCustomerName` |  | |  |  |  |  |
| `CustomerAccountGroup` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `IsCompetitor` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `BusinessPartnerType` |  | |  |  |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `DataController1` |  | |  |  |  |  |
| `DataController2` |  | |  |  |  |  |
| `DataController3` |  | |  |  |  |  |
| `DataController4` |  | |  |  |  |  |
| `DataController5` |  | |  |  |  |  |
| `DataController6` |  | |  |  |  |  |
| `DataController7` |  | |  |  |  |  |
| `DataController8` |  | |  |  |  |  |
| `DataController9` |  | |  |  |  |  |
| `DataController10` |  | |  |  |  |  |

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
