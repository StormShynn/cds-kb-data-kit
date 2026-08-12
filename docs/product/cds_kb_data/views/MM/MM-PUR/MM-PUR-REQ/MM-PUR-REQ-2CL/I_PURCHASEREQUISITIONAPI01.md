---
name: I_PURCHASEREQUISITIONAPI01
description: "Purchase RequisitionUISITIONAPI 01"
app_component: MM-PUR-REQ-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
