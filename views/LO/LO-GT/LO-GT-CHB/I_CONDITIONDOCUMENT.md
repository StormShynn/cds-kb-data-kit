---
name: I_CONDITIONDOCUMENT
description: Conditiondocument
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - pricing-condition
  - document
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CONDITIONDOCUMENT

**Conditiondocument**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConditionDocument` | `ConditionDocument` |
| `CndnContrType` | `CndnContrType` |
| `CndnDocActivationStatus` | `CndnDocActivationStatus` |
| `ConditionDocumentValidFromDate` | `ConditionDocumentValidFromDate` |
| `ConditionDocumentValidToDate` | `ConditionDocumentValidToDate` |
| `Supplier` | `Supplier` |
| `Customer` | `Customer` |
| `PriorSupplier` | `PriorSupplier` |
| `PersonWorkAgreement` | `PersonWorkAgreement` |
| `CompanyCode` | `CompanyCode` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `PrecedingConditionDocument` | `PrecedingConditionDocument` |
| `CndnDocWorkerCostCenter` | `CndnDocWorkerCostCenter` |
| `CndnDocObjNodeTypeAbbr` | `CndnDocObjNodeTypeAbbr` |
| `CndnDocSemanticCode` | `CndnDocSemanticCode` |
| `_CndnContrType` | *Association* |
| `_PrecedingConditionDocument` | *Association* |
| `_Supplier` | *Association* |
| `_Customer` | *Association* |
| `_PriorSupplier` | *Association* |
| `_PersonWorkAgreement` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnContrType` | `I_CndnContrType` | [0..1] |
| `_PrecedingConditionDocument` | `I_ConditionDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Condition Document'
@AccessControl: {
    authorizationCheck:     #MANDATORY,
    personalData.blocking:  #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    representativeKey:        'ConditionDocument',
    modelingPattern: #NONE,
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE ],
    usageType: {
      serviceQuality: #B,
      dataClass:      #TRANSACTIONAL,
      sizeCategory:   #XXL
      }
    }
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
    }

define view entity I_ConditionDocument
  as select from R_ConditionDocument

  association [0..1] to I_CndnContrType     as _CndnContrType              on $projection.CndnContrType = _CndnContrType.CndnContrType
  association [0..1] to I_ConditionDocument as _PrecedingConditionDocument on $projection.PrecedingConditionDocument = _PrecedingConditionDocument.ConditionDocument

{

  key ConditionDocument,
      CndnContrType,
      CndnDocActivationStatus,

      /* Validity */
      @Semantics.businessDate.from: true
      ConditionDocumentValidFromDate,
      @Semantics.businessDate.to: true
      ConditionDocumentValidToDate,

      /* Partners */
      Supplier,
      Customer,
      PriorSupplier,
      PersonWorkAgreement,

      /* Organizational Data */
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,
      SalesOrganization,
      DistributionChannel,
      Division,

      PrecedingConditionDocument,

      /* Worker related fields */
      CndnDocWorkerCostCenter,

      /* BO Separation */
      CndnDocObjNodeTypeAbbr,
      CndnDocSemanticCode,


      /* Associations */
      _CndnContrType,
      _Supplier,
      _Customer,
      _PriorSupplier,
      _PersonWorkAgreement,
      _PrecedingConditionDocument

}
```
