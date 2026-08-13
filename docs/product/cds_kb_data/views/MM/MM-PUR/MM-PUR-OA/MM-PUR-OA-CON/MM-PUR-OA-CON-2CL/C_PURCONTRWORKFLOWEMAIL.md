---
name: C_PURCONTRWORKFLOWEMAIL
description: "Purcontrworkflowemail"
semantic_vi: "CDS view C_PURCONTRWORKFLOWEMAIL hiển thị dữ liệu email luồng công việc hợp đồng mua hàng, có thể được sử dụng để theo dõi và quản lý các cuộc trò chuyện qua email liên quan đến hợp đồng mua hàng."
keywords:
  - "purchase contract"
  - "hợp đồng mua hàng"
  - "workflow"
  - "email"
  - "cds view"
  - "c_purcontrworkflowemail"
  - "sap"
  - "mm-pur-oa-con-2cl"
  - "sourcing and procurement"
semantic_en: "The CDS view C_PURCONTRWORKFLOWEMAIL exposes purchase contract workflow email data, which can be used to track and manage email communications related to purchase contracts."
app_component: MM-PUR-OA-CON-2CL
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
  - MM-PUR-OA
  - consumption-view
  - workflow
  - email
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# C_PURCONTRWORKFLOWEMAIL

**Purcontrworkflowemail**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
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
| `PurchaseContract` |  | |  | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )` |  |  |
| `ActivePurchasingDocument` |  | | `_PurchaseContract` | `ActivePurchasingDocument` |  |  |
| `PurchaseContractType` |  | | `_PurchaseContract` | `PurchasingDocumentType` |  |  |
| `DocumentCurrency` |  | | `_PurchaseContract` | `DocumentCurrency` |  |  |
| `PurContrWrkflwTskCrtnUTCDte` |  | |  | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |  |  |
| `PurContrWrkflwTskCrtnUTCTme` |  | |  | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |  |  |
| `PurContrWrkflwTskDuUTCDte` |  | |  | `cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |  |  |
| `PurContrWrkflwTskDuUTCTme` |  | |  | `cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |  |  |
| `Supplier` |  | | `_PurchaseContract` | `Supplier` |  |  |
| `CreatedByUserDescription` |  | | `_User` | `UserDescription` |  |  |
| `SupplierName` |  | | `_Supplier` | `SupplierName` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPURCONTRWFLEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Contract Details for Workflow Deadline Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@Metadata.ignorePropagatedAnnotations:true

define view C_PurContrWorkflowEmail
  as select from            I_WorkflowTask           as _Workflowtask

    inner join              I_WorkflowTaskApplObject as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PurchaseContract'
                                                                                and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    //left outer to one join  I_PurchaseContractAPI01  as _PurchaseContract       on _PurchaseContract.PurchaseContract = _WorkflowTaskApplObject.TechnicalWrkflwObject
    left outer to one join  R_PurchasingDocument     as _PurchaseContract       on _PurchaseContract.PurchasingDocument = _WorkflowTaskApplObject.TechnicalWrkflwObject
                                                                                and _PurchaseContract.PurchasingDocumentCategory = 'K'

    left outer to one join  I_PurchasingDocumentType as _PurDocType             on  _PurDocType.PurchasingDocumentType     = _PurchaseContract.PurchasingDocumentType
                                                                                and _PurDocType.PurchasingDocumentCategory = 'K'

    left outer to one join  I_User                   as _User                   on _User.UserID = _PurchaseContract.CreatedByUser
    left outer to one join  I_Supplier               as _Supplier               on _Supplier.Supplier = _PurchaseContract.Supplier

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                             as PurchaseContract,

      _PurchaseContract.ActivePurchasingDocument as ActivePurchasingDocument,

      _PurchaseContract.PurchasingDocumentType as PurchaseContractType,

      _PurDocType._Text[1:Language=$session.system_language].PurchasingDocumentTypeName,

      @Semantics.currencyCode: true
      _PurchaseContract.DocumentCurrency,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PurContrWrkflwTskCrtnUTCDte,

      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PurContrWrkflwTskCrtnUTCTme,

      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PurContrWrkflwTskDuUTCDte,

      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PurContrWrkflwTskDuUTCTme,

      _PurchaseContract.Supplier,

      _User.UserDescription                                                                                         as CreatedByUserDescription,

      _Supplier.SupplierName

}
```
