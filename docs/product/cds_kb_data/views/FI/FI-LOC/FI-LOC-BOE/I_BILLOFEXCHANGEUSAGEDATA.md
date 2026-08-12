---
name: I_BILLOFEXCHANGEUSAGEDATA
description: "Billofexchangeusagedata"
app_component: FI-LOC-BOE
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
