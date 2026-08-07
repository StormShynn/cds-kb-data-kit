---
name: C_PRMTHBRPLDPURORDWRKFLWEML
description: Prmthbrpldpurordwrkflweml
app_component: MM-PUR-HUB-PO-2CL
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
  - component:MM-PUR-HUB-PO-2CL
  - lob:Sourcing & Procurement
---
# C_PRMTHBRPLDPURORDWRKFLWEML

**Prmthbrpldpurordwrkflweml**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_Workflowtask` | `WorkflowTaskInternalID` |  |  |
| `PurchaseOrder` |  | |  | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )` |  |  |
| `PurchaseOrderType` |  | | `_PurchaseOrder` | `PurchaseOrderType` |  |  |
| `ExtSourceSystem` |  | | `_PurchaseOrder` | `ExtSourceSystem` |  |  |
| `CompanyCode` |  | | `_PurchaseOrder` | `CompanyCode` |  |  |
| `PurchasingOrganization` |  | | `_PurchaseOrder` | `PurchasingOrganization` |  |  |
| `PurchasingGroup` |  | | `_PurchaseOrder` | `PurchasingGroup` |  |  |
| `Supplier` |  | | `_PurchaseOrder` | `Supplier` |  |  |
| `CreatedByUser` |  | | `_PurchaseOrder` | `CreatedByUser` |  |  |
| `POHeaderTextPlainLongText` |  | | `_PurchaseOrderText` | `NoteBasicContent` |  |  |
| `DocumentCurrency` |  | | `_PurchaseOrder` | `DocumentCurrency` |  |  |
| `PurchaseOrderNetAmount` |  | | `_PurchaseOrder` | `PurchaseOrderNetAmount` |  |  |
| `PrmtHbWrkflwTskCrtnUTCDte` |  | |  | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |  |  |
| `PrmtHbWrkflwTskCrtnUTCTme` |  | |  | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |  |  |
| `PrmtHbWrkflwTskDuUTCDte` |  | |  | `cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |  |  |
| `PrmtHbWrkflwTskDuUTCTme` |  | |  | `cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPRHBRPLPOWFLEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'PrmtHb Rpld PO Details for Workflow Deadline Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities:[ #OUTPUT_EMAIL_DATA_PROVIDER ]
@ObjectModel.modelingPattern : #NONE
@Metadata.ignorePropagatedAnnotations:true

define view C_PrmtHbRpldPurOrdWrkflwEml
  as select from            I_WorkflowTask            as _Workflowtask

    left outer to many join I_WorkflowTaskApplObject  as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                 and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                 and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PrmtHbRpldPurchaseOrder'
                                                                                 and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join  I_ProcmtHubPurOrdHdrAPI01 as _PurchaseOrder          on _PurchaseOrder.PurchaseOrder = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1

    left outer to one join  I_NOTEBASIC               as _PurchaseOrderText      on  _PurchaseOrderText.NoteBasicObject         = _PurchaseOrder.PrmtHbRpldPOUniqueID
                                                                                 and _PurchaseOrderText.NoteBasicObjectNodeType = 'PrmtHbRpldPurchaseOrder'
                                                                                 and _PurchaseOrderText.NoteBasicType           = 'CPROC_PO_H01'

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                             as PurchaseOrder,

      _PurchaseOrder.PurchaseOrderType                                                                              as PurchaseOrderType,

      _PurchaseOrder.ExtSourceSystem                                                                                as ExtSourceSystem,
      
      @Feature: 'MM_PUR_PRMTHB_PO_WFL_EML'
      _PurchaseOrder.CompanyCode                                                                                    as CompanyCode,
      
      @Feature: 'MM_PUR_PRMTHB_PO_WFL_EML'
      _PurchaseOrder.PurchasingOrganization                                                                         as PurchasingOrganization,
      
      @Feature: 'MM_PUR_PRMTHB_PO_WFL_EML'
      _PurchaseOrder.PurchasingGroup                                                                                as PurchasingGroup,
      
      @Feature: 'MM_PUR_PRMTHB_PO_WFL_EML'
      _PurchaseOrder.Supplier                                                                                       as Supplier,
      
      @Feature: 'MM_PUR_PRMTHB_PO_WFL_EML'
      _PurchaseOrder.CreatedByUser                                                                                  as CreatedByUser,
      
      @Feature: 'MM_PUR_PRMTHB_PO_WFL_EML'
      _PurchaseOrderText.NoteBasicContent                                                                           as POHeaderTextPlainLongText,
      
      @Feature: 'MM_PUR_PRMTHB_PO_WFL_EML'
      _PurchaseOrder.DocumentCurrency                                                                               as DocumentCurrency,
      
      @Feature: 'MM_PUR_PRMTHB_PO_WFL_EML'
      @Semantics.amount.currencyCode:'DocumentCurrency'
      _PurchaseOrder.PurchaseOrderNetAmount                                                                         as PurchaseOrderNetAmount,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PrmtHbWrkflwTskCrtnUTCDte,

      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PrmtHbWrkflwTskCrtnUTCTme,

      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PrmtHbWrkflwTskDuUTCDte,

      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PrmtHbWrkflwTskDuUTCTme


}
```
