---
name: I_CNDNCONTRSUPLRRBTESTDVH
description: "This CDS view exposes the values of condition contracts that represent supplier rebate agreements. This CDS view provides the data to answer the following business questions: Which condition contracts related to supplier rebate agreements exist? What is the condition contract type of the condition contract? What is the validity period of the condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRRBTESTDVH')/$value
semantic_en: "This CDS view exposes the values of condition contracts that represent supplier rebate agreements. This CDS view provides the data to answer the following business questions: Which condition contracts related to supplier rebate agreements exist? What is the condition contract type of the condition contract? What is the validity period of the condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Condition Contracts for Supplier Rebates — CDS view tổng hợp dựa trên R_ConditionContract."
keywords:
  - "condition"
  - "contracts"
  - "for"
  - "supplier"
  - "rebates"
  - "contract"
  - "cndn"
  - "contr"
  - "type"
  - "external"
  - "document"
  - "reference"
  - "valid"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - supplier
---
# I_CNDNCONTRSUPLRRBTESTDVH

**This CDS view exposes the values of condition contracts that represent supplier rebate agreements. This CDS view provides the data to answer the following business questions: Which condition contracts related to supplier rebate agreements exist? What is the condition contract type of the condition contract? What is the validity period of the condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRRBTESTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  | `CHAR(10)` | Condition Contract |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier as Partner of a Condition Contract |
| `ExternalDocumentReferenceID` |  | |  |  | `CHAR(30)` | External Document Identifier |
| `CndnContrValidFrom` |  | |  |  | `DATS(8)` | Valid From |
| `CndnContrValidTo` |  | |  |  | `DATS(8)` | Valid To |
| `Customer` |  | |  |  | `CHAR(10)` | Customer as Partner of a Condition Contract |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Worker as Partner of a Condition Contract |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CndnContrWorkerCostCenter` |  | |  |  | `CHAR(10)` | Worker Cost Center |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRRBTESTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRRBTESTDVH')/$value)*

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
   supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   }
}
@EndUserText.label: 'Condition Contracts for Supplier Rebates'
@Metadata: {
  allowExtensions: false,
  ignorePropagatedAnnotations: true
}
@UI.textArrangement: #TEXT_FIRST
@Search.searchable: true
@Consumption.ranked: true

define view entity I_CndnContrSuplrRbteStdVH
  as select from R_ConditionContract as Contract
    inner join   R_CndnContrType     as ContractType on Contract.CndnContrType = ContractType.CndnContrType
{
      /* Facets for Searchable Fields */
      @UI.facet: [{ purpose: #FILTER, type: #FIELDGROUP_REFERENCE, targetQualifier: 'FILTER_BASIC',    label: 'Contract Information'  },
                  { purpose: #FILTER, type: #FIELDGROUP_REFERENCE, targetQualifier: 'FILTER_VALIDITY', label: 'Contract Validity' }]

      @UI: {
        lineItem:   [{ position: 10, importance:#HIGH }],
        fieldGroup: [{ qualifier:'FILTER_BASIC', position: 10}]
      }
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 1.0
      }
  key Contract.ConditionContract,

      @UI: {
        lineItem:   [{ position: 20, importance:#HIGH }],
        fieldGroup: [{ qualifier:'FILTER_BASIC', position: 20}],
        textArrangement: #TEXT_FIRST
      }
      @ObjectModel.text.element:  [ 'CndnContrTypeDesc' ]
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      Contract.CndnContrType,

      @Semantics.text:true
      @Consumption.filter.hidden: true
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      Contract._CndnContrType._Text[1: Language = $session.system_language ].CndnContrTypeDesc,

      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      @UI: { lineItem: [{ position: 30, importance:#HIGH }] }
      Contract.Supplier,

      @UI: {
        lineItem:   [{ position: 40, importance:#HIGH }],
        fieldGroup: [{ qualifier:'FILTER_BASIC', position: 30}]
      }
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      Contract.ExternalDocumentReferenceID,

      @UI: {
        lineItem:   [{ position: 50, importance:#HIGH }],
        fieldGroup: [{ qualifier:'FILTER_VALIDITY', position: 10}]
      }
      @Semantics.businessDate.from: true
      Contract.CndnContrValidFrom,
      @UI: {
        lineItem:   [{ position: 60, importance:#HIGH }],
        fieldGroup: [{ qualifier:'FILTER_VALIDITY', position: 20}]
      }
      @Semantics.businessDate.to: true
      Contract.CndnContrValidTo,

      @Consumption.hidden: true
      Contract.Customer,
      @Consumption.hidden: true
      Contract.PriorSupplier,
      @Consumption.hidden: true
      Contract.PersonWorkAgreement,

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
         Contract.CndnContrSemanticCode    = '0003'
  or(
    (
         Contract.CndnContrPartnerCat      = 'V'
      or Contract.CndnContrSettlmtType     = '1'
    )
    and(
         Contract.CndnContrProcessCategory = '1'
    )
  )
```
