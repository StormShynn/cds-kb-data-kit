---
name: C_CNTRLPURCONTRWORKFLOWEMAIL
description: Cntrlpurcontrworkflowemail
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - consumption-view
  - workflow
  - email
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# C_CNTRLPURCONTRWORKFLOWEMAIL

**Cntrlpurcontrworkflowemail**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_Workflowtask` | `WorkflowTaskInternalID` |
| `CentralPurchaseContract` |  | |  | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )` |
| `PurchaseContractType` |  | | `_CentralPurchaseContract` | `PurchaseContractType` |
| `DocumentCurrency` |  | | `_CentralPurchaseContract` | `DocumentCurrency` |
| `CntrlContrWrkflwTskCrtnUTCDte` |  | |  | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |
| `CntrlContrWrkflwTskCrtnUTCTme` |  | |  | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |
| `CntrlContrWrkflwTskDuUTCDte` |  | |  | `cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |
| `CntrlContrWrkflwTskDuUTCTme` |  | |  | `cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |
| `Supplier` |  | | `_CentralPurchaseContract` | `Supplier` |
| `ActivePurchasingDocument` |  | | `_CentralPurchaseContract` | `ActivePurchasingDocument` |
| `CreatedByUserDescription` |  | | `_User` | `UserDescription` |
| `SupplierName` |  | | `_Supplier` | `SupplierName` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CNTRLCONTRWFLEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Cntrl Purchase Contract Details for Workflow Deadline Email'
@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@Metadata.ignorePropagatedAnnotations:true

define view C_CntrlPurContrWorkflowEmail
  as select from            I_WorkflowTask                 as _Workflowtask

    inner join I_WorkflowTaskApplObject       as _WorkflowTaskApplObject  on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                       and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                       and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'CentralPurchaseContract'
                                                                                       and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join  I_CentralPurchaseContractAPI01 as _CentralPurchaseContract on _CentralPurchaseContract.CentralPurchaseContract = _WorkflowTaskApplObject.TechnicalWrkflwObject

    left outer to one join  I_PurchasingDocumentType       as _PurDocType              on  _PurDocType.PurchasingDocumentType     = _CentralPurchaseContract.PurchaseContractType
                                                                                       and _PurDocType.PurchasingDocumentCategory = 'C'

    left outer to one join  I_User                         as _User                    on _User.UserID = _CentralPurchaseContract.CreatedByUser
    left outer to one join  I_Supplier                     as _Supplier                on _Supplier.Supplier = _CentralPurchaseContract.Supplier

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                             as CentralPurchaseContract,

      _CentralPurchaseContract.PurchaseContractType,

      _PurDocType._Text[1:Language=$session.system_language].PurchasingDocumentTypeName,

      @Semantics.currencyCode: true
      _CentralPurchaseContract.DocumentCurrency,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as CntrlContrWrkflwTskCrtnUTCDte,

      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as CntrlContrWrkflwTskCrtnUTCTme,

      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as CntrlContrWrkflwTskDuUTCDte,

      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as CntrlContrWrkflwTskDuUTCTme,

      _CentralPurchaseContract.Supplier,

      _CentralPurchaseContract.ActivePurchasingDocument                                                             as ActivePurchasingDocument, //3227601

      _User.UserDescription                                                                                         as CreatedByUserDescription,

      _Supplier.SupplierName

}
```
