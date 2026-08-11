---
name: C_BHVRLINSGTSCUSTEVTHISTQ
description: "Customer Event History Query"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSCUSTEVTHISTQ')/$value
semantic_en: "Customer Event History Query"
semantic_vi: "Customer Event History Query — CDS view tiêu dùng dựa trên C_BhvrlInsgtsCustEvtHist."
keywords:
  - "customer"
  - "event"
  - "history"
  - "query"
  - "record"
  - "business"
  - "partner"
  - "name"
  - "bhvrl"
  - "insgts"
  - "account"
  - "number"
tags:
  - IS
  - bo:businesspartner
  - component:IS-PS-BEI
  - consumption-view
  - customer
  - IS-PS
  - IS-PS-BEI
---
# C_BHVRLINSGTSCUSTEVTHISTQ

**Customer Event History Query**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSCUSTEVTHISTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerEventRecordID` | ✓ | |  |  | `CHAR(70)` |  |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `BhvrlInsgtsAccountNumber` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `BhvrlInsgtsAccountName` |  | |  |  | `CHAR(35)` | Contract Account Name |
| `BhvrlInsgtsAccountCategory` |  | |  |  | `CHAR(2)` | Contract Account Category |
| `BhvrlInsgtsAccountCategoryTxt` |  | |  |  | `CHAR(50)` | Description of Contract Account Category |
| `BhvrlInsgtsSubAccountNumber` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `BhvrlInsgtsSubAccountName` |  | |  |  | `CHAR(1)` |  |
| `BhvrlInsgtsEventNumber` |  | |  |  | `INT2(5)` |  |
| `BhvrlInsgtsEventName` |  | |  |  | `CHAR(60)` | Event Name |
| `BhvrlInsgtsEventCategoryTxt` |  | |  |  | `CHAR(60)` | Event Category Name |
| `CustomerEventStartDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CustomerEventEndDate` |  | |  |  | `DATS(8)` |  |
| `CustomerEventStartDateTime` |  | |  |  | `DEC(15)` |  |
| `CustomerEventEndDateTime` |  | |  |  | `DEC(15)` |  |
| `OpenAmountInLocalCurrency` |  | |  |  | `CURR(13)` |  |
| `ClearedAmountInLocalCurrency` |  | |  |  | `CURR(13)` |  |
| `LocalCurrency` |  | |  |  | `CUKY(5)` |  |
| `BhvrlInsgtsPeriodCode` |  | |  |  | `CHAR(4)` | Key for Period Assignment |
| `BhvrlInsgtsPeriodCodeTxt` |  | |  |  | `CHAR(50)` | Text for Period Key |
| `CustomerEventValue` |  | |  |  | `CHAR(100)` |  |
| `CustomerEventValueTxt` |  | |  |  | `CHAR(100)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSCUSTEVTHISTQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSCUSTEVTHISTQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CBICUSTEVTHISTQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Customer Event History Query'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XXL
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_BhvrlInsgtsCustEvtHistQ
  with parameters
    @EndUserText.label: 'Account Category'
    P_BhvrlInsgtsAccountCategory : bei_vktyp
  as select from C_BhvrlInsgtsCustEvtHist(P_BhvrlInsgtsAccountCategory: :P_BhvrlInsgtsAccountCategory)
{
      //C_BhvrlInsgtsCustEvtHist
      @EndUserText.label: 'Record Identifier'
  key CustomerEventRecordID,
      @EndUserText.label: 'Customer Identifier'
      BusinessPartner,
      @EndUserText.label: 'Customer Name'
      BusinessPartnerName,
      @EndUserText.label: 'Account Number'
      BhvrlInsgtsAccountNumber,
      @EndUserText.label: 'Account Name'
      BhvrlInsgtsAccountName,
      @EndUserText.label: 'Account Category'
      BhvrlInsgtsAccountCategory,
      @EndUserText.label: 'Account Category Text'
      BhvrlInsgtsAccountCategoryTxt,
      @EndUserText.label: 'Subaccount Number'
      BhvrlInsgtsSubAccountNumber,
      @EndUserText.label: 'Subaccount Name'
      BhvrlInsgtsSubAccountName,
      @EndUserText.label: 'Event Identifier'
      BhvrlInsgtsEventNumber,
      @EndUserText.label: 'Event Name'
      BhvrlInsgtsEventName,
      @EndUserText.label: 'Event Category Text'
      BhvrlInsgtsEventCategoryTxt,
      @EndUserText.label: 'Customer Event Start Date'
      CustomerEventStartDate,
      @EndUserText.label: 'Customer Event End Date'
      CustomerEventEndDate,
      @EndUserText.label: 'Customer Event Start Date Time'
      CustomerEventStartDateTime,
      @EndUserText.label: 'Customer Event End Date Time'
      CustomerEventEndDateTime,
      @EndUserText.label: 'Open Amount'
      OpenAmountInLocalCurrency,
      @EndUserText.label: 'Cleared Amount'
      ClearedAmountInLocalCurrency,
      @EndUserText.label: 'Currency'
      LocalCurrency,
      @EndUserText.label: 'Period Key'
      BhvrlInsgtsPeriodCode,
      @EndUserText.label: 'Period Key Description '
      BhvrlInsgtsPeriodCodeTxt,
      @EndUserText.label: 'Customer Event Value'
      CustomerEventValue,
      @EndUserText.label: 'Customer Event Value Text'
      CustomerEventValueTxt

}
```
