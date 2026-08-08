---
name: I_BILLOFEXCHANGEUSAGEDATA
description: "Billofexchangeusagedata"
app_component: FI-LOC-BOE
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-BOE
  - interface-view
  - component:FI-LOC-BOE
  - lob:Finance
---
# I_BILLOFEXCHANGEUSAGEDATA

**Billofexchangeusagedata**

| Property | Value |
|---|---|
| App Component | `FI-LOC-BOE` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocumentItem` | ✓ | |  |  |  |  |
| `Cheque` |  | |  |  |  |  |
| `BillOfExchangeIssueDate` |  | |  |  |  |  |
| `BillOfExchangeUsageDate` |  | |  |  |  |  |
| `PlannedBillOfExchangeUsage` |  | |  |  |  |  |
| `BillOfExchangeDrawer` |  | |  |  |  |  |
| `BillOfExchangeDrawerCityName` |  | |  |  |  |  |
| `BillOfExchangeDrawee` |  | |  |  |  |  |
| `BillOfExchangeDraweeCityName` |  | |  |  |  |  |
| `BillOfExchangeIsAccepted` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `BillOfExchangeDocumentStatus` |  | |  |  |  |  |
| `BillOfExchangeProtest` |  | |  |  |  |  |
| `BillOfExchangeIsOnDemand` |  | |  |  |  |  |
| `BusinessPlace` |  | |  |  |  |  |
| `BusinessSectionCode` |  | |  |  |  |  |
| `BillOfExchangePortfolio` |  | |  |  |  |  |
| `BillOfExchangeDataAgingDate` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `cast ( IsBusinessPurposeCompleted as cvp_xblck preserving type )` |  |  |
| `AuthorizationGroup` |  | |  | `cast ( AuthorizationGroup as brgru preserving type )` |  |  |
| `BillOfExchangeUsageDocument` |  | | `_OperationalAcctgDocItem` | `BillOfExchangeUsageDocument` |  |  |
| `BillOfExchangeUsage` |  | | `_OperationalAcctgDocItem` | `BillOfExchangeUsage` |  |  |
| `_OperationalAcctgDocItem` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bill of Exchange Usage Data'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: false
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['IsBusinessPurposeCompleted']
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XXL,
  dataClass: #MIXED
}
//@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
//                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                ]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]                                          
define view entity I_BillOfExchangeUsageData
  as select from I_BillOfExchange as _BillOfExchange
{
  key CompanyCode,
  key AccountingDocument,
  key FiscalYear,
  key AccountingDocumentItem,
      Cheque,
      BillOfExchangeIssueDate,
      BillOfExchangeUsageDate,
      PlannedBillOfExchangeUsage,
      BillOfExchangeDrawer,
      BillOfExchangeDrawerCityName,
      BillOfExchangeDrawee,
      BillOfExchangeDraweeCityName,
      @Semantics.booleanIndicator: true
      BillOfExchangeIsAccepted,
      Region,
      BillOfExchangeDocumentStatus,
      @Semantics.booleanIndicator: true
//      @API.element.releaseState: #DEPRECATED
//      @API.element.successor: 'BillOfExchangeProtest'      
//      BillOfExchangeIsProtested,
      BillOfExchangeProtest,
      @Semantics.booleanIndicator: true
      BillOfExchangeIsOnDemand,
      BusinessPlace,
      BusinessSectionCode,
      BillOfExchangePortfolio,
      BillOfExchangeDataAgingDate,
      @Semantics.booleanIndicator: true
      cast ( IsBusinessPurposeCompleted as cvp_xblck preserving type ) as IsBusinessPurposeCompleted,
      cast ( AuthorizationGroup as brgru preserving type )             as AuthorizationGroup,
      _OperationalAcctgDocItem.BillOfExchangeUsageDocument             as BillOfExchangeUsageDocument,
      _OperationalAcctgDocItem.BillOfExchangeUsage                     as BillOfExchangeUsage,
      _OperationalAcctgDocItem
}
```
