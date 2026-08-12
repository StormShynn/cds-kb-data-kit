---
name: I_PURORDCHANGEDOCUMENTITEM
description: "Purordchangedocumentitem"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - document
  - item-level
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURORDCHANGEDOCUMENTITEM

**Purordchangedocumentitem**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `ChangeDocument` | ✓ | |  |  |  |  |
| `ChangeDocObjectClass` | ✓ | |  |  |  |  |
| `DatabaseTable` | ✓ | |  |  |  |  |
| `ChangeDocTableKey` | ✓ | |  |  |  |  |
| `ChangeDocDatabaseTableField` | ✓ | |  |  |  |  |
| `ChangeDocItemChangeType` | ✓ | |  |  |  |  |
| `ChangeDocPreviousUnit` |  | |  | `cast ( PurOrdChangeDocumentItem.ChangeDocPreviousUnit as mmiv_chng_doc_old_unit preserving type )` |  |  |
| `ChangeDocNewUnit` |  | |  | `cast ( PurOrdChangeDocumentItem.ChangeDocNewUnit as mmiv_chng_doc_new_unit preserving type )` |  |  |
| `ChangeDocPreviousCurrency` |  | |  | `cast ( PurOrdChangeDocumentItem.ChangeDocPreviousCurrency as mmiv_chng_doc_old_currency preserving type )` |  |  |
| `ChangeDocNewCurrency` |  | |  | `cast ( PurOrdChangeDocumentItem.ChangeDocNewCurrency as mmiv_chng_doc_new_currency preserving type )` |  |  |
| `ChangeDocPreviousFieldValue` |  | |  |  |  |  |
| `ChangeDocNewFieldValue` |  | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPOCHGDOCITEM'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Purchase Order Change Document Items'
@VDM.viewType : #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_PurOrdChangeDocumentItem
  as select from I_ChangeDocumentItem as PurOrdChangeDocumentItem
    inner join   R_PurchaseOrder      as PurchaseOrder on PurchaseOrder.PurchaseOrder = PurOrdChangeDocumentItem.ChangeDocObject

{
  key PurchaseOrder.PurchaseOrder,
  key PurOrdChangeDocumentItem.ChangeDocument,
  key PurOrdChangeDocumentItem.ChangeDocObjectClass,
  key PurOrdChangeDocumentItem.DatabaseTable,
  key PurOrdChangeDocumentItem.ChangeDocTableKey,
  key PurOrdChangeDocumentItem.ChangeDocDatabaseTableField,
  key PurOrdChangeDocumentItem.ChangeDocItemChangeType,

      cast ( PurOrdChangeDocumentItem.ChangeDocPreviousUnit as mmiv_chng_doc_old_unit preserving type )         as ChangeDocPreviousUnit,
      cast ( PurOrdChangeDocumentItem.ChangeDocNewUnit as mmiv_chng_doc_new_unit preserving type )              as ChangeDocNewUnit,
      cast ( PurOrdChangeDocumentItem.ChangeDocPreviousCurrency as mmiv_chng_doc_old_currency preserving type ) as ChangeDocPreviousCurrency,
      cast ( PurOrdChangeDocumentItem.ChangeDocNewCurrency as mmiv_chng_doc_new_currency preserving type )      as ChangeDocNewCurrency,
      PurOrdChangeDocumentItem.ChangeDocPreviousFieldValue,
      PurOrdChangeDocumentItem.ChangeDocNewFieldValue,
      PurchaseOrder.PurchaseOrderType,
      PurchaseOrder.PurchasingOrganization,
      PurchaseOrder.PurchasingGroup


}
where
  PurOrdChangeDocumentItem.ChangeDocObjectClass = 'EINKBELEG'
```
