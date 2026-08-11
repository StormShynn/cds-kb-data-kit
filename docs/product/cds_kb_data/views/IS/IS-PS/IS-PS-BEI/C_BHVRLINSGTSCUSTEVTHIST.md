---
name: C_BHVRLINSGTSCUSTEVTHIST
description: "Customer Event History"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSCUSTEVTHIST')/$value
semantic_en: "Customer Event History"
semantic_vi: "Customer Event History — CDS view tiêu dùng dựa trên C_CustomerEvent."
keywords:
  - "customer"
  - "event"
  - "history"
  - "record"
  - "business"
  - "partner"
  - "name"
  - "bhvrl"
  - "insgts"
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
# C_BHVRLINSGTSCUSTEVTHIST

**Customer Event History**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSCUSTEVTHIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerEventRecordID` | ✓ | |  |  | `CHAR(70)` |  |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(40)` | Name 1 of organization |
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
| `BhvrlInsgtsAccountNumber` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `BhvrlInsgtsAccountName` |  | |  |  | `CHAR(35)` | Contract Account Name |
| `BhvrlInsgtsAccountCategory` |  | |  |  | `CHAR(2)` | Contract Account Category |
| `BhvrlInsgtsAccountCategoryTxt` |  | |  |  | `CHAR(50)` | Description of Contract Account Category |
| `BhvrlInsgtsSubAccountNumber` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `BhvrlInsgtsSubAccountName` |  | |  |  | `CHAR(1)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSCUSTEVTHIST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BHVRLINSGTSCUSTEVTHIST')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CBICUSTEVTHIST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Customer Event History'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XXL
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.representativeKey: 'CustomerEventRecordID'
define view C_BhvrlInsgtsCustEvtHist
  with parameters
    P_BhvrlInsgtsAccountCategory : bei_vktyp
  as select from C_CustomerEvent(P_BhvrlInsgtsAccountCategory: :P_BhvrlInsgtsAccountCategory) as Evt
  inner join I_CustomerMasterData as Cust on Evt.BusinessPartner = Cust.BusinessPartner
 
{
      //C_CustomerEvent
  key CustomerEventRecordID,
      Evt.BusinessPartner,
      Cust.BusinessPartnerName,
      BhvrlInsgtsEventNumber,
      BhvrlInsgtsEventName,
      BhvrlInsgtsEventCategoryTxt,
      CustomerEventStartDate,
      CustomerEventEndDate,
      @Semantics.dateTime: true
      CustomerEventStartDateTime,
      @Semantics.dateTime: true
      CustomerEventEndDateTime,
      @Semantics.amount.currencyCode: 'LocalCurrency'
      OpenAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'LocalCurrency'
      ClearedAmountInLocalCurrency,
      @Semantics.currencyCode: true
      LocalCurrency,
      BhvrlInsgtsPeriodCode,
      BhvrlInsgtsPeriodCodeTxt,
      CustomerEventValue,
      CustomerEventValueTxt,
      BhvrlInsgtsAccountNumber,
      BhvrlInsgtsAccountName,
      BhvrlInsgtsAccountCategory,
      BhvrlInsgtsAccountCategoryTxt,
      BhvrlInsgtsSubAccountNumber,
      BhvrlInsgtsSubAccountName

}
```
