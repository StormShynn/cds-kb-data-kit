---
name: I_PRECEDINGCONDITIONDOCUMENTVH
description: "This CDS view exposes the values of the predecessors of documents such as condition contracts. This CDS view provides the data to answer the following business questions: Which predecessors exist? What is the condition contract type of the predecessor? What is the validity period of the predecessor? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRECEDINGCONDITIONDOCUMENTVH')/$value
semantic_en: "This CDS view exposes the values of the predecessors of documents such as condition contracts. This CDS view provides the data to answer the following business questions: Which predecessors exist? What is the condition contract type of the predecessor? What is the validity period of the predecessor? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Predecessor — CDS view tổng hợp dựa trên Predecessor."
keywords:
  - "predecessor"
  - "preceding"
  - "condition"
  - "document"
  - "cndn"
  - "contr"
  - "type"
  - "valid"
  - "date"
  - "customer"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - document
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - bo:salesorder
---
# I_PRECEDINGCONDITIONDOCUMENTVH

**This CDS view exposes the values of the predecessors of documents such as condition contracts. This CDS view provides the data to answer the following business questions: Which predecessors exist? What is the condition contract type of the predecessor? What is the validity period of the predecessor? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRECEDINGCONDITIONDOCUMENTVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrecedingConditionDocument` | ✓ | |  |  | `CHAR(10)` | Predecessor Condition Contract |
| `CndnContrType` |  | | `_PrecedingConditionDocument` | `CndnContrType` | `CHAR(4)` | Condition Contract Type |
| `ConditionDocumentValidFromDate` |  | | `_PrecedingConditionDocument` | `ConditionDocumentValidFromDate` | `DATS(8)` | Valid From |
| `ConditionDocumentValidToDate` |  | | `_PrecedingConditionDocument` | `ConditionDocumentValidToDate` | `DATS(8)` | Valid To |
| `Customer` |  | | `_PrecedingConditionDocument` | `Customer` | `CHAR(10)` | Customer as Partner of a Condition Contract |
| `PriorSupplier` |  | | `_PrecedingConditionDocument` | `PriorSupplier` | `CHAR(10)` | Prior Supplier |
| `Supplier` |  | | `_PrecedingConditionDocument` | `Supplier` | `CHAR(10)` | Supplier as Partner of a Condition Contract |
| `PersonWorkAgreement` |  | | `_PrecedingConditionDocument` | `PersonWorkAgreement` | `NUMC(8)` | Worker as Partner of a Condition Contract |
| `DistributionChannel` |  | | `_PrecedingConditionDocument` | `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` |  | | `_PrecedingConditionDocument` | `Division` | `CHAR(2)` | Division |
| `PurchasingGroup` |  | | `_PrecedingConditionDocument` | `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | | `_PrecedingConditionDocument` | `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` |  | | `_PrecedingConditionDocument` | `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `CompanyCode` |  | | `_PrecedingConditionDocument` | `CompanyCode` | `CHAR(4)` | Company Code |
| `CndnDocWorkerCostCenter` |  | | `_PrecedingConditionDocument` | `CndnDocWorkerCostCenter` | `CHAR(10)` | Worker Cost Center |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRECEDINGCONDITIONDOCUMENTVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRECEDINGCONDITIONDOCUMENTVH')/$value)*

```abap
@EndUserText.label: 'Predecessor'
@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    dataCategory:          #VALUE_HELP,
    representativeKey:     'PrecedingConditionDocument',
    modelingPattern:       #VALUE_HELP_PROVIDER,
    supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
      usageType: {
      dataClass:      #MIXED,
      serviceQuality: #C,
      sizeCategory:   #XXL
      }
    }
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    technicalName: 'IPREDCDVH'
    }
@Search.searchable: true
@Consumption.ranked: true
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
    }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_PrecedingConditionDocumentVH
  as select distinct from I_ConditionDocument
{

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key PrecedingConditionDocument,

      @ObjectModel.text.element:  [ 'CndnContrTypeDesc' ]
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CndnContrTypeStdVH', element: 'CndnContrType' } }]
      }
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 1.0 }
      @UI.textArrangement: #TEXT_FIRST
      _PrecedingConditionDocument.CndnContrType,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.9  }
      _PrecedingConditionDocument._CndnContrType._Text[1: Language = $session.system_language ].CndnContrTypeDesc,

      @Semantics.businessDate.from: true
      @Consumption.filter : {selectionType:#INTERVAL,multipleSelections: false}
      _PrecedingConditionDocument.ConditionDocumentValidFromDate,
      @Semantics.businessDate.to: true
      @Consumption.filter : {selectionType:#INTERVAL,multipleSelections: false}
      _PrecedingConditionDocument.ConditionDocumentValidToDate,

      /* Fields required for DCL */
      @Consumption.hidden: true
      _PrecedingConditionDocument.Customer,
      @Consumption.hidden: true
      _PrecedingConditionDocument.PriorSupplier,
      @Consumption.hidden: true
      _PrecedingConditionDocument.Supplier,
      @Consumption.hidden: true
      _PrecedingConditionDocument.PersonWorkAgreement,

      @Consumption.hidden: true
      _PrecedingConditionDocument.DistributionChannel,
      @Consumption.hidden: true
      _PrecedingConditionDocument.Division,
      @Consumption.hidden: true
      _PrecedingConditionDocument.PurchasingGroup,
      @Consumption.hidden: true
      _PrecedingConditionDocument.PurchasingOrganization,
      @Consumption.hidden: true
      _PrecedingConditionDocument.SalesOrganization,

      @Consumption.hidden: true
      _PrecedingConditionDocument.CompanyCode,
      @Consumption.hidden: true
      _PrecedingConditionDocument.CndnDocWorkerCostCenter,

      /* Associations required for DCL */
      @Consumption.hidden: true
      _PrecedingConditionDocument._Customer,
      @Consumption.hidden: true
      _PrecedingConditionDocument._PriorSupplier,
      @Consumption.hidden: true
      _PrecedingConditionDocument._Supplier,
      @Consumption.hidden: true
      _PrecedingConditionDocument._PersonWorkAgreement
}
where
  PrecedingConditionDocument is not initial
```
