---
name: I_QLTYPROCMTCERTTP_2
description: Qltyprocmtcerttp 2
app_component: QM-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-CA
  - interface-view
  - transactional-processing
  - component:QM-CA-2CL
  - lob:Quality Management
---
# I_QLTYPROCMTCERTTP_2

**Qltyprocmtcerttp 2**

| Property | Value |
|---|---|
| App Component | `QM-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `QualityProcurementCertificate` | ✓ | |  |  |
| `QualityCertificateType` |  | |  |  |
| `QltyProcmtCertStatus` |  | |  |  |
| `PurchaseOrder` |  | |  |  |
| `PurchaseOrderItem` |  | |  |  |
| `MaterialDocumentYear` |  | |  |  |
| `MaterialDocumentItem` |  | |  |  |
| `MaterialDocument` |  | |  |  |
| `Material` |  | |  |  |
| `Supplier` |  | |  |  |
| `Plant` |  | |  |  |
| `GoodsReceiptPostingDate` |  | |  |  |
| `QltyProcmtCertReceiptDate` |  | |  |  |
| `BatchBySupplier` |  | |  |  |
| `Batch` |  | |  |  |
| `DeliveryNote` |  | |  |  |
| `QltyProcmtCertCrtedByUsr` |  | |  |  |
| `QltyProcmtCertCrtnDte` |  | |  |  |
| `QltyProcmtCertCrtnTme` |  | |  |  |
| `QltyProcmtCertCrtnTmeZn` |  | |  |  |
| `QltyProcmtCertCrtnDateTime` |  | |  |  |
| `QltyProcmtCertChgdBy` |  | |  |  |
| `QltyProcmtCertChgDte` |  | |  |  |
| `QltyProcmtCertChgTme` |  | |  |  |
| `QltyProcmtCertChgDteTme` |  | |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |

## Source Code

```abap
@EndUserText.label: 'Certificate Receipt - TP'
@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  representativeKey: 'QualityProcurementCertificate'
}

@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.sapObjectNodeType.name: 'QltyProcurementCertificate'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_QltyProcmtCertTP_2
  provider contract transactional_interface
  as projection on R_QltyProcmtCertTP
{
  key QualityProcurementCertificate,
  QualityCertificateType,
  QltyProcmtCertStatus,
  PurchaseOrder,
  PurchaseOrderItem,
  MaterialDocumentYear,
  MaterialDocumentItem,
  MaterialDocument,
  Material,
  Supplier,
  Plant,
  GoodsReceiptPostingDate,
  QltyProcmtCertReceiptDate,
  BatchBySupplier,
  Batch,
  DeliveryNote,
  QltyProcmtCertCrtedByUsr,
  QltyProcmtCertCrtnDte,
  QltyProcmtCertCrtnTme,
  QltyProcmtCertCrtnTmeZn,
  QltyProcmtCertCrtnDateTime,
  QltyProcmtCertChgdBy,
  QltyProcmtCertChgDte,
  QltyProcmtCertChgTme,
  QltyProcmtCertChgDteTme,
  
  @Semantics.booleanIndicator 
  // field is only needed for authorization check
  IsBusinessPurposeCompleted
}
```
