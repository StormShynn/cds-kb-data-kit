---
name: I_PURCHASEORDERCHANGEDOCUMENT
description: "Purchase OrderCHANGEDOCUMENT"
app_component: MM
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
  - MM
  - interface-view
  - purchase-order
  - document
  - component:MM
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERCHANGEDOCUMENT

**Purchase OrderCHANGEDOCUMENT**

| Property | Value |
|---|---|
| App Component | `MM` |
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
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `ChangeDocObjectClass` | ✓ | |  |  |  |  |
| `ChangeDocument` | ✓ | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `_PurOrdChangeDocumentItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurOrdChangeDocumentItem` | `I_PurOrdChangeDocumentItem` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPOCHANGEDOC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Purchase Order Change Document'
@VDM.viewType : #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API



define view I_PurchaseOrderChangeDocument
  as select from I_ChangeDocument as ChangeDocument
    inner join   R_PurchaseOrder  as PurchaseOrder on PurchaseOrder.PurchaseOrder = ChangeDocument.ChangeDocObject
  association [1..*] to I_PurOrdChangeDocumentItem as _PurOrdChangeDocumentItem on $projection.ChangeDocument = _PurOrdChangeDocumentItem.ChangeDocument

{
  key PurchaseOrder.PurchaseOrder,
  key ChangeDocument.ChangeDocObjectClass,
  key ChangeDocument.ChangeDocument,

      ChangeDocument.CreatedByUser,
      ChangeDocument.CreationDate,
      ChangeDocument.CreationTime,
      PurchaseOrder.PurchaseOrderType,
      PurchaseOrder.PurchasingOrganization,
      PurchaseOrder.PurchasingGroup,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PurOrdChangeDocumentItem
}
where
  ChangeDocument.ChangeDocObjectClass = 'EINKBELEG'
```
