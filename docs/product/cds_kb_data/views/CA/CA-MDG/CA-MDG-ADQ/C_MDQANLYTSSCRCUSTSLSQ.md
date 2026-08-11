---
name: C_MDQANLYTSSCRCUSTSLSQ
description: "This CDS view helps to retrieve the results of quality evaluations and master data scores for customer sales data. You can analyze the data using master data attributes, for example, country, or sales organization, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my customer sales data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRCUSTSLSQ')/$value
semantic_en: "This CDS view helps to retrieve the results of quality evaluations and master data scores for customer sales data. You can analyze the data using master data attributes, for example, country, or sales organization, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my customer sales data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "MDQ Score for Customer Sales - Query — CDS view tiêu dùng dựa trên MDQ Score for Customer Sales - Query."
keywords:
  - "MDQ Score for Customer Sales"
  - "mdq"
  - "score"
  - "for"
  - "customer"
  - "sales"
  - "query"
  - "alternative"
  - "payee"
  - "allowed"
  - "city"
  - "name"
  - "country"
  - "account"
  - "group"
tags:
  - CA
  - bo:businesspartner
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - consumption-view
  - customer
  - lob:cross_application components
  - master-data
---
# C_MDQANLYTSSCRCUSTSLSQ

**This CDS view helps to retrieve the results of quality evaluations and master data scores for customer sales data. You can analyze the data using master data attributes, for example, country, or sales organization, to identify any issues and improve the data. This CDS view provides the data to answer the following business questions: What is the quality score of my customer sales data? Which data is compliant with or violating specific validation rules? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRCUSTSLSQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AlternativePayeeIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Is an alternative payer allowed in document? |
| `CityName` |  | |  |  | `CHAR(35)` | City |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerCorporateGroup` |  | |  |  | `CHAR(10)` | Group Key |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `DeliveryIsBlocked` |  | |  |  | `CHAR(2)` | Central delivery block for the customer |
| `Industry` |  | |  |  | `CHAR(4)` | Industry Key |
| `IsSalesProspect` |  | |  |  | `CHAR(1)` | Indicator: Sales prospect |
| `NielsenRegion` |  | |  |  | `CHAR(2)` | Nielsen ID |
| `PaymentIsBlockedForCustomer` |  | |  |  | `CHAR(1)` | Payment Block |
| `PostalCode` |  | |  |  | `CHAR(10)` | Postal Code |
| `PostingIsBlocked` |  | |  |  | `CHAR(1)` | Central Posting Block |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `BillingIsBlockedForCustomer` |  | |  |  | `CHAR(2)` | Billing block for customer (sales and distribution) |
| `Currency` |  | |  |  | `CUKY(5)` | Currency |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `OrderIsBlockedForCustomer` |  | |  |  | `CHAR(2)` | Customer order block (sales area) |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `MasterDataChangeProcess` |  | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `MDChgProcessFinishDate` |  | |  |  | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | |  |  | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | |  |  | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleBaseTabName` |  | |  |  | `CHAR(80)` | Alias of a table |
| `MDQltyBusinessRuleOwner` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | |  |  | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | |  |  | `CHAR(30)` | Name of Table with Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | |  |  | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQltyBusRuleEvalResultCode` |  | |  |  | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `MDQualityBusinessRule` |  | |  |  | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | |  |  | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `AcademicTitle` |  | |  |  | `CHAR(4)` | Academic Title: Key |
| `BPFirstNameSearchHelp` |  | |  |  | `CHAR(35)` | Search Help Field 2 (Name 2/First Name) |
| `BPLastNameSearchHelp` |  | |  |  | `CHAR(35)` | Search Help Field 1 (Name 1/Last Name) |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerCategory` |  | |  |  | `CHAR(1)` | Business Partner Category |
| `BusinessPartnerGrouping` |  | |  |  | `CHAR(4)` | Business Partner Grouping |
| `BusinessPartnerIsBlocked` |  | |  |  | `CHAR(1)` | Central Block for Business Partner |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User who created the object |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on which the object was created |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `GenderCodeName` |  | |  |  | `CHAR(1)` | Gender of Business Partner (Person) |
| `IsMarkedForArchiving` |  | |  |  | `CHAR(1)` | Central Archiving Flag |
| `IsNaturalPerson` |  | |  |  | `CHAR(1)` | Business Partner Is a Natural Person Under the Tax Laws |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date when object was last changed |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last user to change object |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `LegalForm` |  | |  |  | `CHAR(2)` | BP: Legal form of organization |
| `OrganizationBPName1` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `OrganizationBPName2` |  | |  |  | `CHAR(40)` | Name 2 of organization |
| `OrganizationFoundationDate` |  | |  |  | `DATS(8)` | Date organization founded |
| `SearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 for Business Partner |
| `SearchTerm2` |  | |  |  | `CHAR(20)` | Search Term 2 for Business Partner |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `MDQltyNmbrOfBusRuleEvalResults` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyNmbrOfFailedEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Records Failed |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Records OK |
| `Score` |  | |  | `case when MDQltyNmbrOfBusRuleEvalResults = abap.int1'0' then abap.int1'0' else ( MDQltyNmbrOfSuccssflEvalRslts / MDQltyNmbrOfBusRuleEvalResults ) * 100 end` | `DECF(34)` |  |
| `MDQltyAlPgNavigationPath` |  | |  |  | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRCUSTSLSQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MDQANLYTSSCRCUSTSLSQ')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking: #REQUIRED
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MDQ Score for Customer Sales - Query'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.usageType: {
  dataClass: #MIXED,
  serviceQuality: #D,
  sizeCategory: #XXL
}
@VDM.viewType: #CONSUMPTION
define transient view entity C_MDQAnlytsScrCustSlsQ
  provider contract analytical_query
  as projection on I_MDQAnlytsScrCustSlsC as _MDQAnlytsScrCustSlsC
{
  //customer data
  @EndUserText.label: 'Alternative Payer Allowed'
  AlternativePayeeIsAllowed,
  CityName,
  Country,
  Customer,
  @EndUserText.label: 'Account Group'
  CustomerAccountGroup,
  @EndUserText.label: 'Group Key'
  CustomerCorporateGroup,
  CustomerClassification,
  @EndUserText.label: 'Central Delivery Block'
  DeliveryIsBlocked,
  Industry,
  @Semantics.booleanIndicator: true
  IsSalesProspect,
  @EndUserText.label: 'Nielsen Indicator'
  NielsenRegion,
  @EndUserText.label: 'Payment Block'
  PaymentIsBlockedForCustomer,
  PostalCode,
  PostingIsBlocked,
  Region,

  //customer sales data
  AuthorizationGroup,
  @EndUserText.label: 'Billing Block'
  BillingIsBlockedForCustomer,
  Currency,
  CustomerGroup,
  DistributionChannel,
  Division,
  @EndUserText.label: 'Order Block'
  OrderIsBlockedForCustomer,
  PaymentTerms,
  SalesDistrict,
  SalesGroup,
  SalesOffice,
  SalesOrganization,

  //process data
  MasterDataChangeProcess,
  MDChgProcessFinishDate,
  @Semantics.booleanIndicator: true
  @EndUserText.label: 'Is Latest Evaluation'
  MDChgProcessIsLatest,

  //rule data
  MDQltyBusinessRuleBaseTable,
  @EndUserText.label: 'Base Table Description'
  MDQltyBusinessRuleBaseTabName,
  MDQltyBusinessRuleOwner,
  @EndUserText.label: 'Checked Field'
  MDQltyBusRuleCheckedField,
  @EndUserText.label: 'Checked Field Table'
  MDQltyBusRuleCheckedFieldTable,
  @EndUserText.label: 'Checked Table and Field'
  MDQltyBusRuleChkdFieldAndTable,
  MDQltyBusRuleEvalResultCode,
  MDQualityBusinessRule,
  MDQualityBusinessRuleName,

  //business partner data
  AcademicTitle,
  BPFirstNameSearchHelp,
  BPLastNameSearchHelp,
  BusinessPartner,
  BusinessPartnerCategory,
  BusinessPartnerGrouping,
  BusinessPartnerIsBlocked,
  @EndUserText.label: 'Created By'
  CreatedByUser,
  @EndUserText.label: 'Created On'
  CreationDate,
  FirstName,
  GenderCodeName,
  IsMarkedForArchiving,
  @Semantics.booleanIndicator
  IsNaturalPerson,
  @EndUserText.label: 'Changed On'
  LastChangeDate,
  @EndUserText.label: 'Changed By'
  LastChangedByUser,
  LastName,
  @EndUserText.label: 'Legal Form'
  LegalForm,
  OrganizationBPName1,
  OrganizationBPName2,
  @EndUserText.label: 'Date Founded'
  OrganizationFoundationDate,
  SearchTerm1,
  SearchTerm2,
  StreetName,

  @EndUserText.label: 'Total'
  MDQltyNmbrOfBusRuleEvalResults,
  @EndUserText.label: 'Not OK'
  MDQltyNmbrOfFailedEvalRslts,
  @EndUserText.label: 'OK'
  MDQltyNmbrOfSuccssflEvalRslts,
  @EndUserText.label: 'Quality Score'
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.decimals: 2
  case
    when MDQltyNmbrOfBusRuleEvalResults = abap.int1'0' then abap.int1'0'
    else ( MDQltyNmbrOfSuccssflEvalRslts / MDQltyNmbrOfBusRuleEvalResults ) * 100
  end as Score,

  @EndUserText.label: 'ALP Navigation Path'
  MDQltyAlPgNavigationPath
}
```
