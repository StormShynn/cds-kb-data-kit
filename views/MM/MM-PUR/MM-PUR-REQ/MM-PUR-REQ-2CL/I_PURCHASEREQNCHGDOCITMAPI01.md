---
name: I_PURCHASEREQNCHGDOCITMAPI01
description: Purchase RequisitionNCHGDOCITMAPI 01
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
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
# I_PURCHASEREQNCHGDOCITMAPI01

**Purchase RequisitionNCHGDOCITMAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ChangeDocObject` | ✓ | |  |  |
| `ChangeDocObjectClass` | ✓ | |  |  |
| `ChangeDocument` | ✓ | |  |  |
| `DatabaseTable` | ✓ | |  |  |
| `ChangeDocTableKey` | ✓ | |  |  |
| `ChangeDocDatabaseTableField` | ✓ | |  |  |
| `ChangeDocItemChangeType` | ✓ | |  |  |
| `ChangeDocPreviousUnit` |  | |  |  |
| `ChangeDocNewUnit` |  | |  |  |
| `ChangeDocPreviousCurrency` |  | |  |  |
| `ChangeDocNewCurrency` |  | |  |  |
| `ChangeDocNewFieldValue` |  | |  |  |
| `ChangeDocPreviousFieldValue` |  | |  |  |
| `_PurchaseReqnChgDocAPI01` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseReqnChgDocAPI01` | `I_PurchaseReqnChgDocAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType : #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Change Doc Item for Purchase Requisition'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AccessControl.privilegedAssociations:[ '_PurchaseReqnChgDocAPI01' ]
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #XXL,
    dataClass: #TRANSACTIONAL
}
define view entity I_PurchaseReqnChgDocItmAPI01 as select from I_PurchaseReqnChgDocItm
    association [1..1] to I_PurchaseReqnChgDocAPI01 as _PurchaseReqnChgDocAPI01 on $projection.ChangeDocument         = _PurchaseReqnChgDocAPI01.ChangeDocument
                                                                              and $projection.ChangeDocObject       = _PurchaseReqnChgDocAPI01.ChangeDocObject
                                                                              and $projection.ChangeDocObjectClass  = _PurchaseReqnChgDocAPI01.ChangeDocObjectClass
{
  key ChangeDocObject,
  key ChangeDocObjectClass,
  key ChangeDocument,
  key DatabaseTable,
  key ChangeDocTableKey,
  key ChangeDocDatabaseTableField,
  key ChangeDocItemChangeType,

      ChangeDocPreviousUnit,
      ChangeDocNewUnit,
      ChangeDocPreviousCurrency,
      ChangeDocNewCurrency,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue,
      _PurchaseReqnChgDocAPI01
}
```
