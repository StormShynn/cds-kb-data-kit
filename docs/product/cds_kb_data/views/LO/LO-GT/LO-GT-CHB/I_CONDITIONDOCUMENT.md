---
name: I_CONDITIONDOCUMENT
description: "Conditiondocument"
app_component: LO-GT-CHB
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionDocument` | ✓ | |  |  |  |  |
| `CndnContrType` |  | |  |  |  |  |
| `CndnDocActivationStatus` |  | |  |  |  |  |
| `ConditionDocumentValidFromDate` |  | |  |  |  |  |
| `ConditionDocumentValidToDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `PriorSupplier` |  | |  |  |  |  |
| `PersonWorkAgreement` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `PrecedingConditionDocument` |  | |  |  |  |  |
| `CndnDocWorkerCostCenter` |  | |  |  |  |  |
| `CndnDocObjNodeTypeAbbr` |  | |  |  |  |  |
| `CndnDocSemanticCode` |  | |  |  |  |  |
| `_CndnContrType` | | ✓ | | | | |
| `_PrecedingConditionDocument` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_PriorSupplier` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |

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
