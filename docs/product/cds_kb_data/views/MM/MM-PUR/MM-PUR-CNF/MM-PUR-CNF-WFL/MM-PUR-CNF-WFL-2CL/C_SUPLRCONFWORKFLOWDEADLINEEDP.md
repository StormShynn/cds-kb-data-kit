---
name: C_SUPLRCONFWORKFLOWDEADLINEEDP
description: "Suplrconfworkflowdeadlineedp"
app_component: MM-PUR-CNF-WFL-2CL
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
  - MM-PUR-CNF
  - consumption-view
  - workflow
  - component:MM-PUR-CNF-WFL-2CL
  - lob:Sourcing & Procurement
---
# C_SUPLRCONFWORKFLOWDEADLINEEDP

**Suplrconfworkflowdeadlineedp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-CNF-WFL-2CL` |
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
| `WorkflowTaskInternalID` | ✓ | | `_Workflowtask` | `WorkflowTaskInternalID` |  |  |
| `SupplierConfirmation` |  | | `_SupplierConfirmation` | `SupplierConfirmation` |  |  |
| `CreationDate` |  | | `_SupplierConfirmation` | `CreationDate` |  |  |
| `CreatedByUser` |  | | `_SupplierConfirmation` | `CreatedByUser` |  |  |
| `CreatedByUserName` |  | |  | `cast(_User.UserDescription as mm_oa_user_fullname )` |  |  |
| `Supplier` |  | | `_SupplierConfirmation` | `Supplier` |  |  |
| `SupplierName` |  | | `_Supplier` | `SupplierName` |  |  |
| `PurchaseOrder` |  | | `_SupplierConfirmation` | `SuplrConfRefPurchaseOrder` |  |  |
| `PurchasingDocumentType` |  | | `_SupplierConfirmation` | `PurchasingDocumentType` |  |  |
| `DocumentCurrency` |  | | `_PurchaseOrder` | `DocumentCurrency` |  |  |
| `PurchaseOrderNetAmount` |  | |  | `cast((_PurchaseOrderNetAmount.PurchaseOrderNetAmount) as mm_pur_order_tot_net_amount )` |  |  |
| `SuplrConfWrkflwTskCrtnUTCDate` |  | |  | `cast(tstmp_to_dats( cast( _Workflowtask.WrkflwTskCreationUTCDateTime as tzntstmps ), 'UTC', $session.client, 'NULL' ) as sww_lsd )` |  |  |
| `SuplrConfWrkflwTskCrtnUTCTime` |  | |  | `cast(tstmp_to_tims( cast( _Workflowtask.WrkflwTskCreationUTCDateTime as tzntstmps ), 'UTC', $session.client, 'NULL' ) as sww_lst )` |  |  |
| `SuplrConfWrkflwTskDueUTCDate` |  | |  | `cast(tstmp_to_dats( cast( _Workflowtask._TaskDueDate.WorkflowTaskDueUTCDateTime as tzntstmps ), 'UTC', $session.client, 'NULL' ) as sww_led )` |  |  |
| `SuplrConfWrkflwTskDueUTCTime` |  | |  | `cast(tstmp_to_tims( cast( _Workflowtask._TaskDueDate.WorkflowTaskDueUTCDateTime as tzntstmps ), 'UTC', $session.client, 'NULL' ) as sww_let )` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Suppl Conf Details for Deadline Email'

@VDM.viewType : #CONSUMPTION

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities:[ #OUTPUT_EMAIL_DATA_PROVIDER ]
@Metadata.ignorePropagatedAnnotations:true

define view entity C_SuplrConfWorkflowDeadlineEDP

  as select from           I_WorkflowTask           as _Workflowtask

    inner join             I_WorkflowTaskApplObject as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                               and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                               and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'SupplierConfirmation'
                                                                               and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join I_SupplierConfirmation   as _SupplierConfirmation   on _SupplierConfirmation.SupplierConfirmation = _WorkflowTaskApplObject.TechnicalWrkflwObject

    left outer join        I_PurchaseOrderAPI01     as _PurchaseOrder          on _PurchaseOrder.PurchaseOrder = _SupplierConfirmation.SuplrConfRefPurchaseOrder

    left outer join        I_PurchasingDocumentType as _PurDocType             on  _PurDocType.PurchasingDocumentType     = _PurchaseOrder.PurchaseOrderType
                                                                               and _PurDocType.PurchasingDocumentCategory = 'F'

    left outer join        I_PurchaseOrderNetAmount as _PurchaseOrderNetAmount on _PurchaseOrderNetAmount.PurchaseOrder = _PurchaseOrder.PurchaseOrder

    left outer to one join I_Supplier               as _Supplier               on _Supplier.Supplier = _SupplierConfirmation.Supplier

    left outer to one join I_User                   as _User                   on _User.UserID = _SupplierConfirmation.CreatedByUser

{
  key _Workflowtask.WorkflowTaskInternalID,

      _SupplierConfirmation.SupplierConfirmation,

      _SupplierConfirmation.CreationDate,

      _SupplierConfirmation.CreatedByUser,

      cast(_User.UserDescription as mm_oa_user_fullname )                                                                      as CreatedByUserName,

      _SupplierConfirmation.Supplier,
      _Supplier.SupplierName,

      _SupplierConfirmation.SuplrConfRefPurchaseOrder                                                                          as PurchaseOrder,

      _SupplierConfirmation.PurchasingDocumentType,
      _PurDocType._Text[1:Language=$session.system_language].PurchasingDocumentTypeName,

      _PurchaseOrder.DocumentCurrency,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      cast((_PurchaseOrderNetAmount.PurchaseOrderNetAmount) as mm_pur_order_tot_net_amount )                                   as PurchaseOrderNetAmount,

      //Creation Time
      cast(tstmp_to_dats( cast( _Workflowtask.WrkflwTskCreationUTCDateTime as  tzntstmps ), 'UTC', $session.client, 'NULL' ) as sww_lsd )            as SuplrConfWrkflwTskCrtnUTCDate,
      cast(tstmp_to_tims( cast( _Workflowtask.WrkflwTskCreationUTCDateTime as  tzntstmps ), 'UTC', $session.client, 'NULL' ) as sww_lst )            as SuplrConfWrkflwTskCrtnUTCTime,
      //Deadline Due Time
      cast(tstmp_to_dats( cast( _Workflowtask._TaskDueDate.WorkflowTaskDueUTCDateTime as  tzntstmps ), 'UTC', $session.client, 'NULL' ) as sww_led ) as SuplrConfWrkflwTskDueUTCDate,
      cast(tstmp_to_tims( cast( _Workflowtask._TaskDueDate.WorkflowTaskDueUTCDateTime as  tzntstmps ), 'UTC', $session.client, 'NULL' ) as sww_let ) as SuplrConfWrkflwTskDueUTCTime

}
```
