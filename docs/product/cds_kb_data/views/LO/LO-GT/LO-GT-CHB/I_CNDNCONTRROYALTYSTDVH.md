---
name: I_CNDNCONTRROYALTYSTDVH
description: "This CDS view exposes the values for the Royalty Condition Contracts related."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRROYALTYSTDVH')/$value
semantic_en: "This CDS view exposes the values for the Royalty Condition Contracts related."
semantic_vi: "Royalty Condition Contracts — CDS view tổng hợp dựa trên I_ConditionContract."
keywords:
  - "royalty"
  - "condition"
  - "contracts"
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
# I_CNDNCONTRROYALTYSTDVH

**This CDS view exposes the values for the Royalty Condition Contracts related.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRROYALTYSTDVH')/$value) |

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
| `ExternalDocumentReferenceID` |  | |  |  | `CHAR(30)` | External Document Identifier |
| `CndnContrValidFrom` |  | |  |  | `DATS(8)` | Valid From |
| `CndnContrValidTo` |  | |  |  | `DATS(8)` | Valid To |
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Worker as Partner of a Condition Contract |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CndnContrWorkerCostCenter` |  | |  |  | `CHAR(10)` | Worker Cost Center |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRROYALTYSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRROYALTYSTDVH')/$value)*

```abap
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   dataCategory: #VALUE_HELP,
   representativeKey: 'ConditionContract',
   modelingPattern:       #VALUE_HELP_PROVIDER,
   supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ],
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   }
}
@Analytics.technicalName: 'ICCROYTYSVH'
@Analytics: {
    internalName: #LOCAL
}
@EndUserText.label: 'Royalty Condition Contracts'
@Metadata.ignorePropagatedAnnotations: true
@UI.textArrangement: #TEXT_FIRST
@Search.searchable: true
@Consumption.ranked: true

define view entity I_CndnContrRoyaltyStdVH
  as select from I_ConditionContract as Contract
    inner join   I_CndnContrType     as ContractType on Contract.CndnContrType = ContractType.CndnContrType
{
      //    Facets for Searchable Fields
      @UI.facet: [{ purpose: #FILTER, type: #FIELDGROUP_REFERENCE, targetQualifier: 'FILTER_BASIC',    label: 'Contract Information'  },
                  { purpose: #FILTER, type: #FIELDGROUP_REFERENCE, targetQualifier: 'FILTER_VALIDITY', label: 'Contract Validity' }]

      @UI: {
            lineItem:   [{ position: 10, importance:#HIGH }],
            fieldGroup: [{ qualifier:'FILTER_BASIC', position: 10 }]
          }
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1.0
      @Search.ranking: #HIGH
  key Contract.ConditionContract,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #LOW
      @UI: {
            lineItem:   [{ position: 20, importance:#HIGH }],
            fieldGroup: [{ qualifier:'FILTER_BASIC', position: 20 }],
            textArrangement: #TEXT_FIRST
          }
      @ObjectModel.text.element:  [ 'CndnContrTypeDesc' ]
      Contract.CndnContrType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #LOW
      @Semantics.text:true
      @Consumption.filter.hidden: true
      Contract._CndnContrType._Text[1: Language = $session.system_language ].CndnContrTypeDesc,

      @Consumption.hidden: true
      Contract.Customer,
      @Consumption.hidden: true
      Contract.PriorSupplier,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @UI: { lineItem: [{ position: 30, importance:#HIGH }] }
      Contract.Supplier,

      @Consumption.hidden: true
      Contract.DistributionChannel,
      @Consumption.hidden: true
      Contract.Division,
      @Consumption.hidden: true
      Contract.PurchasingGroup,
      @Consumption.hidden: true
      Contract.PurchasingOrganization,
      @Consumption.hidden: true
      Contract.SalesOrganization,
      @UI: {
           lineItem:    [{ position: 40, importance:#HIGH }],
           fieldGroup:  [{ qualifier:'FILTER_BASIC', position: 30 }]
         }
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      Contract.ExternalDocumentReferenceID,
      @UI: {
            lineItem:   [{ position: 50, importance:#HIGH }],
            fieldGroup: [{ qualifier:'FILTER_VALIDITY', position: 10 }]
          }
      @Semantics.businessDate.from: true
      Contract.CndnContrValidFrom,
      @UI: {
            lineItem:   [{ position: 60, importance:#HIGH }],
            fieldGroup: [{ qualifier:'FILTER_VALIDITY', position: 20 }]
          }
      @Semantics.businessDate.to: true
      Contract.CndnContrValidTo,

      /* Worker related fields */
      @Consumption.hidden: true
      Contract.PersonWorkAgreement,
      @Consumption.hidden: true
      Contract.CompanyCode,
      @Consumption.hidden: true
      Contract.CndnContrWorkerCostCenter,

      @Consumption.hidden: true
      Contract._Customer,
      @Consumption.hidden: true
      Contract._PriorSupplier,
      @Consumption.hidden: true
      Contract._Supplier,
      @Consumption.hidden: true
      Contract._PersonWorkAgreement
}
where
      ContractType.CndnContrPartnerCat                              = 'V'
  and ContractType.CndnContrSettlmtType                             = '1'
  and ContractType._CndnContrClassfctnType.CndnContrProcessCategory = '4'
```
