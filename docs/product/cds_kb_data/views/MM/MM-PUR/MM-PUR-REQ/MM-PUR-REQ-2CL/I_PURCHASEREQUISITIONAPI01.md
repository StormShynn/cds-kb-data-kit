---
name: I_PURCHASEREQUISITIONAPI01
description: "Purchase RequisitionUISITIONAPI 01"
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
# I_PURCHASEREQUISITIONAPI01

**Purchase RequisitionUISITIONAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseRequisition` | ✓ | |  |  |  |  |
| `PurReqnDescription` |  | |  |  |  |  |
| `PurchaseRequisitionType` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  | `max( LastChangeDateTime )` |  |  |
| `_PurchaseRequisitionItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseRequisitionItem` | `I_PurchaseRequisitionItemAPI01` | [1..*] |

## Source Code

```abap
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L //Inserted by VDM CDS Suite Plugin
@ObjectModel.semanticKey:['PurchaseRequisition']
@ObjectModel.representativeKey: 'PurchaseRequisition'
@AbapCatalog.sqlViewName: 'IPRHEADERAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Purchase Requisition Header'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type :#PUBLIC_LOCAL_API

define view I_PurchaseRequisitionAPI01
  as select from I_Purchaserequisitionitem
  association [1..*] to I_PurchaseRequisitionItemAPI01 as _PurchaseRequisitionItem on $projection.PurchaseRequisition = _PurchaseRequisitionItem.PurchaseRequisition

{
  key PurchaseRequisition,
      PurReqnDescription,
      PurchaseRequisitionType,
      @Semantics.dateTime: true
      max( LastChangeDateTime ) as LastChangeDateTime,
       /* Associations */
      _PurchaseRequisitionItem

}
group by
  PurchaseRequisition,
  PurReqnDescription,
  PurchaseRequisitionType,
  PurchasingDocumentSubtype
```
