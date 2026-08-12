---
name: I_CONDITIONCONTRACTSTDVH
description: "This CDS view exposes the values for the condition contract."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONDITIONCONTRACTSTDVH')/$value
semantic_en: "This CDS view exposes the values for the condition contract."
semantic_vi: "Condition Contract — CDS view tổng hợp dựa trên I_ConditionContract."
keywords:
  - "condition"
  - "contract"
  - "cndn"
  - "contr"
  - "type"
  - "customer"
  - "prior"
  - "supplier"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CONDITIONCONTRACTSTDVH

**This CDS view exposes the values for the condition contract.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONDITIONCONTRACTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  | `CHAR(10)` | Condition Contract |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer as Partner of a Condition Contract |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier as Partner of a Condition Contract |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Worker as Partner of a Condition Contract |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CndnContrWorkerCostCenter` |  | |  |  | `CHAR(10)` | Worker Cost Center |
| `ExternalDocumentReferenceID` |  | |  |  | `CHAR(30)` | External Document Identifier |
| `CndnContrValidFrom` |  | |  |  | `DATS(8)` | Valid From |
| `CndnContrValidTo` |  | |  |  | `DATS(8)` | Valid To |
| `_Customer` | | ✓ | | | | |
| `_PriorSupplier` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONDITIONCONTRACTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONDITIONCONTRACTSTDVH')/$value)*

```abap
//GENERATED:005:GlBfhyJl7kY3iZlACiilIm
@AbapCatalog: { 
  sqlViewName: 'ICNDNCNTR_SVH',
  compiler.compareFilter: true
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   dataCategory:          #VALUE_HELP,
   representativeKey:     'ConditionContract',
   modelingPattern:       #VALUE_HELP_PROVIDER,
   supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   } 
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Analytics: {
    internalName: #LOCAL
}
@EndUserText.label: 'Condition Contract'
@Metadata.ignorePropagatedAnnotations: true
@UI.textArrangement: #TEXT_FIRST
@Search.searchable: true
@Consumption.ranked: true
define view I_ConditionContractStdVH
  as select from I_ConditionContract
{

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @UI: { lineItem: [{ position: 10, importance:#HIGH }] }
  key ConditionContract,

      @ObjectModel.text.element:  [ 'CndnContrTypeDesc' ]
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @UI: {
          lineItem:   [{ position: 20, importance:#HIGH }],
          textArrangement: #TEXT_FIRST
      }
      CndnContrType,
      @Semantics.text:true
      @Consumption.filter.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      _CndnContrType._Text[1: Language = $session.system_language ].CndnContrTypeDesc,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @UI: { lineItem: [{ position: 30, importance:#HIGH }] }
      Customer,

      @Consumption.hidden: true
      PriorSupplier,
      @Consumption.hidden: true
      Supplier,
      @Consumption.hidden: true
      DistributionChannel,
      @Consumption.hidden: true
      Division,
      @Consumption.hidden: true
      PurchasingGroup,
      @Consumption.hidden: true
      PurchasingOrganization,
      @Consumption.hidden: true
      SalesOrganization,

      /* Worker related fields */
      @Consumption.hidden: true
      PersonWorkAgreement,
      @Consumption.hidden: true
      CompanyCode,
      @Consumption.hidden: true
      CndnContrWorkerCostCenter,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      @UI: { lineItem: [{ position: 40, importance:#HIGH }] }
      ExternalDocumentReferenceID,
      @Semantics.businessDate.from: true
      @UI: { lineItem: [{ position: 50, importance:#HIGH }] }
      CndnContrValidFrom,
      @Semantics.businessDate.to: true
      @UI: { lineItem: [{ position: 60, importance:#HIGH }] }
      CndnContrValidTo,

      @Consumption.hidden: true
      _Customer,
      @Consumption.hidden: true
      _PriorSupplier,
      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _PersonWorkAgreement
}
```
