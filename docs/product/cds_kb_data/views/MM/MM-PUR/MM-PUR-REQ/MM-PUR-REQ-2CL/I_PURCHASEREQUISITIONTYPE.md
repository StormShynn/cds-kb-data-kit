---
name: I_PURCHASEREQUISITIONTYPE
description: "Purchase RequisitionUISITIONTYPE"
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - purchase-requisition
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASEREQUISITIONTYPE

**Purchase RequisitionUISITIONTYPE**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseRequisitionType` | ✓ | |  | `PurchasingDocumentType` |  |  |
| `PurchasingDocumentSubtype` |  | |  |  |  |  |
| `PurgHasFlxblWorkflowApproval` |  | |  |  |  |  |
| `IsPurReqnOvrlRel` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PurchasingDocumentTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PurchaseRequisitionType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@AbapCatalog.sqlViewName: 'IPURREQNTYPE'
@EndUserText.label: 'Purchase Requisition Document Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel.sapObjectNodeType.name: 'PurchaseRequisitionType'
@VDM.viewType : #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION ]
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view I_PurchaseRequisitionType
  as select from I_PurchasingDocumentType

  association [0..*] to I_PurchasingDocumentTypeText as _Text on  $projection.PurchaseRequisitionType    = _Text.PurchasingDocumentType
                                                              and _Text.PurchasingDocumentCategory = 'B'

{

      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key PurchasingDocumentType as PurchaseRequisitionType,
      @EndUserText.label: 'Control Indicator'
      PurchasingDocumentSubtype,
      PurgHasFlxblWorkflowApproval,
      @EndUserText.label: 'Is Overall Release Enabled'
      IsPurReqnOvrlRel,
      _Text
}
where
  PurchasingDocumentCategory = 'B'
```
