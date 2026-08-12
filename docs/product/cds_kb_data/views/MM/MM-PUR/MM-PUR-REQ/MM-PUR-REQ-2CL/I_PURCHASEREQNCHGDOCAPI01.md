---
name: I_PURCHASEREQNCHGDOCAPI01
description: "Purchase RequisitionNCHGDOCAPI 01"
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_PURCHASEREQNCHGDOCAPI01

**Purchase RequisitionNCHGDOCAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeDocObject` | ✓ | |  |  |  |  |
| `ChangeDocObjectClass` | ✓ | |  |  |  |  |
| `ChangeDocument` | ✓ | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `FullName` |  | |  |  |  |  |
| `FirstName` |  | |  |  |  |  |
| `LastName` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `_PurchaseReqnChgDocItmAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseReqnChgDocItmAPI01` | `I_PurchaseReqnChgDocItmAPI01` | [1..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType : #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Change Document for Purchase Requisition'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AccessControl.privilegedAssociations:[ '_PurchaseReqnChgDocItmAPI01' ]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #TRANSACTIONAL
}
define view entity I_PurchaseReqnChgDocAPI01 as select from I_PurchaseReqnChgDoc
  association [1..*] to I_PurchaseReqnChgDocItmAPI01 as _PurchaseReqnChgDocItmAPI01 on $projection.ChangeDocument         = _PurchaseReqnChgDocItmAPI01.ChangeDocument
                                                                              and $projection.ChangeDocObject       = _PurchaseReqnChgDocItmAPI01.ChangeDocObject
                                                                              and $projection.ChangeDocObjectClass  = _PurchaseReqnChgDocItmAPI01.ChangeDocObjectClass
{
  key ChangeDocObject,
  key ChangeDocObjectClass,
  key ChangeDocument,
      
      CreatedByUser,
      FullName,
      FirstName,
      LastName,
      CreationDate,
      CreationTime,
      _PurchaseReqnChgDocItmAPI01
}
```
